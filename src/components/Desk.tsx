"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { RotateCw, Shuffle } from "lucide-react";
import { projects, type Project } from "@/content/projects";

// Where each card rests on a wide desk. x is a share of the room left and right
// of centre, so the spread follows the desk's width; y is in pixels.
const scatter = [
  { x: -1, y: -30, r: -7 },
  { x: 0.04, y: 70, r: 4 },
  { x: 1, y: -45, r: -2 },
];

const CARD_WIDTH = 272;
// Height of the wide desk (34rem).
const DESK_HEIGHT = 544;
// Desk width at which cards show at full size.
const FULL_DESK = 740;

type Offset = { x: number; y: number };

function useWidth<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new ResizeObserver(([entry]) => setWidth(entry.contentRect.width));
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return [ref, width] as const;
}

const WIDE_QUERY = "(min-width: 1024px)";

function subscribeWide(onChange: () => void) {
  const query = window.matchMedia(WIDE_QUERY);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

function useIsWide() {
  return useSyncExternalStore(
    subscribeWide,
    () => window.matchMedia(WIDE_QUERY).matches,
    () => false,
  );
}

const ids = projects.map((_, i) => i);

export function Desk() {
  const wide = useIsWide();
  const [deskRef, deskWidth] = useWidth<HTMLDivElement>();
  // The wide desk scales with its width; the pile shrinks a little in narrow columns (tablet).
  const scale = !deskWidth
    ? 1
    : wide
      ? Math.min(1, Math.max(0.75, deskWidth / FULL_DESK))
      : Math.min(1, deskWidth / 310);
  const room = Math.max(0, deskWidth / 2 - (CARD_WIDTH * scale) / 2);
  // order[0] is the card on top of the pile. Until someone moves a card, the wide desk puts
  // the rightmost card on top so every title (set flush left) stays readable.
  const [movedOrder, setOrder] = useState<number[] | null>(null);
  const order = movedOrder ?? (wide ? [...ids].reverse() : ids);
  const [flipped, setFlipped] = useState<boolean[]>(projects.map(() => false));
  const [offsets, setOffsets] = useState<Offset[]>(projects.map(() => ({ x: 0, y: 0 })));
  const [dragging, setDragging] = useState<number | null>(null);
  const drag = useRef<{ index: number; startX: number; startY: number; base: Offset; moved: boolean } | null>(null);
  const suppressClick = useRef(false);

  // The cards drop onto the desk once, one after another, when the page opens.
  // With reduced motion the cards go straight to the desk, without the fall.
  const [drop, setDrop] = useState<"held" | "falling" | "rest">("held");
  useEffect(() => {
    const frame = requestAnimationFrame(() =>
      setDrop(window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "rest" : "falling"),
    );
    const settle = setTimeout(() => setDrop("rest"), 1600);
    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(settle);
    };
  }, []);

  const flip = (index: number) =>
    setFlipped((prev) => prev.map((value, i) => (i === index ? !value : value)));

  const bringToTop = (index: number) => setOrder([index, ...order.filter((i) => i !== index)]);

  const nextCard = () => {
    const top = order[0];
    setFlipped((prev) => prev.map((value, i) => (i === top ? false : value)));
    setOrder([...order.slice(1), top]);
  };

  const onPointerDown = (index: number) => (event: React.PointerEvent<HTMLButtonElement>) => {
    if (!wide || event.button !== 0) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    drag.current = {
      index,
      startX: event.clientX,
      startY: event.clientY,
      base: offsets[index],
      moved: false,
    };
    bringToTop(index);
  };

  const onPointerMove = (event: React.PointerEvent<HTMLButtonElement>) => {
    const current = drag.current;
    if (!current) return;
    const dx = event.clientX - current.startX;
    const dy = event.clientY - current.startY;
    if (!current.moved && Math.hypot(dx, dy) < 5) return;
    current.moved = true;
    setDragging(current.index);
    // Keep most of the card on the desk so it can't be thrown over the headline or lost.
    const restX = scatter[current.index].x * room;
    const restY = scatter[current.index].y * scale;
    const maxX = deskWidth / 2 - 60;
    const maxY = DESK_HEIGHT / 2 - 90;
    const x = Math.max(-maxX, Math.min(maxX, restX + current.base.x + dx)) - restX;
    const y = Math.max(-maxY, Math.min(maxY, restY + current.base.y + dy)) - restY;
    setOffsets((prev) => prev.map((value, i) => (i === current.index ? { x, y } : value)));
  };

  const moved = offsets.some((o) => o.x !== 0 || o.y !== 0);
  const tidy = () => {
    setOffsets(projects.map(() => ({ x: 0, y: 0 })));
    setFlipped(projects.map(() => false));
    setOrder(null);
  };

  const onPointerUp = () => {
    if (drag.current?.moved) suppressClick.current = true;
    drag.current = null;
    setDragging(null);
  };

  const onClick = (index: number) => () => {
    if (suppressClick.current) {
      suppressClick.current = false;
      return;
    }
    if (!wide && order[0] !== index) return;
    flip(index);
  };

  return (
    <div className="relative">
      <div
        ref={deskRef}
        className="relative mx-auto h-[25rem] w-full max-w-[22rem] lg:h-[34rem] lg:max-w-none"
      >
        {projects.map((project, index) => {
          const depth = order.indexOf(index);
          const rest = wide
            ? { x: scatter[index].x * room, y: scatter[index].y * scale, r: scatter[index].r }
            : { x: depth * 12, y: depth * 10, r: depth === 0 ? -3 : depth * 5 - 1 };
          const offset = offsets[index];
          const isTop = depth === 0;
          // Held cards wait above the viewport; the bottom of the pile lands first.
          const lift = drop === "held" ? -900 : 0;
          const spin = drop === "held" ? rest.r * 4 : rest.r;
          return (
            <div
              key={project.slug}
              className="desk-card absolute left-1/2 top-1/2 h-[22rem] w-[17rem] -ml-[8.5rem] -mt-[11rem]"
              data-dragging={dragging === index}
              style={{
                zIndex: projects.length - depth,
                transform: `translate(${rest.x + offset.x}px, ${rest.y + offset.y + lift}px) rotate(${spin}deg) scale(${scale})`,
                transitionDuration: drop === "falling" ? "1000ms" : undefined,
                transitionDelay:
                  drop === "falling" ? `${(projects.length - 1 - depth) * 160 + 150}ms` : undefined,
              }}
            >
              <div className="card-3d h-full w-full">
                <div className="card-inner" data-flipped={flipped[index]}>
                  <CardFront project={project} />
                  <CardBack project={project} />
                </div>
              </div>
              <button
                type="button"
                className="absolute inset-0 cursor-pointer touch-manipulation lg:cursor-grab lg:touch-none lg:active:cursor-grabbing"
                aria-label={`${project.kind}, ${project.place}. ${flipped[index] ? "Showing the brief. Flip back" : "Flip to read the brief"}`}
                aria-pressed={flipped[index]}
                tabIndex={wide || isTop ? 0 : -1}
                aria-hidden={!wide && !isTop}
                onPointerDown={onPointerDown(index)}
                onPointerMove={onPointerMove}
                onPointerUp={onPointerUp}
                onPointerCancel={onPointerUp}
                onClick={onClick(index)}
              />
            </div>
          );
        })}
      </div>
      <div className="mt-6 flex items-center justify-center gap-3 text-sm text-chalk-soft lg:hidden">
        <button
          type="button"
          onClick={nextCard}
          className="inline-flex min-h-11 items-center gap-2 border border-chalk-soft/40 px-4 font-semibold text-chalk transition-colors hover:border-signal hover:text-signal"
        >
          <Shuffle aria-hidden size={16} strokeWidth={2} />
          Next card
        </button>
        <span>Tap a card to flip it</span>
      </div>
      <div className="mt-4 hidden items-center justify-center gap-4 text-sm lg:flex">
        <p className="inline-flex items-center gap-2 text-chalk">
          <RotateCw aria-hidden size={15} strokeWidth={2.25} className="text-signal" />
          Click a card to read the brief on the back. Drag to move it.
        </p>
        {moved && (
          <button
            type="button"
            onClick={tidy}
            className="inline-flex min-h-11 items-center px-2 font-semibold text-chalk-soft underline decoration-chalk-soft/50 hover:text-signal"
          >
            Tidy the desk
          </button>
        )}
      </div>
    </div>
  );
}

function Tape() {
  return (
    <span
      aria-hidden
      className="absolute -top-3 left-1/2 z-10 h-6 w-24 -translate-x-1/2 -rotate-2 bg-signal/90"
    />
  );
}

function CardFront({ project }: { project: Project }) {
  return (
    <div className="card-face flex flex-col bg-card p-4 text-ink">
      <Tape />
      {/* Until the demo site exists, the cover carries the project's goal instead of a blank frame. */}
      <div className="flex flex-1 flex-col justify-between bg-ink p-4 text-chalk">
        <p className="text-sm text-chalk-soft">
          {project.kind} · {project.place}
        </p>
        <p className="display text-[2.1rem] break-words">{project.goal}</p>
      </div>
      <div className="flex items-end justify-between gap-3 pt-4">
        <p className="text-sm leading-snug text-ink-soft">Concept · in progress</p>
        <p className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink">
          <RotateCw aria-hidden size={15} strokeWidth={2.25} />
          The brief
        </p>
      </div>
    </div>
  );
}

function CardBack({ project }: { project: Project }) {
  const rows = [
    ["Goal", project.goal],
    ["For", project.audience],
    ["Action", project.action],
    ["Scope", project.scope],
  ];
  return (
    <div className="card-face card-back flex flex-col bg-card p-5 text-ink">
      <Tape />
      <p className="display text-3xl">The brief</p>
      <dl className="mt-4 flex flex-1 flex-col gap-3 text-[0.95rem] leading-snug">
        {rows.map(([label, value]) => (
          <div key={label}>
            <dt className="text-xs font-semibold uppercase tracking-wider text-ink-soft">{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
      <p className="inline-flex items-center gap-1.5 self-end text-sm font-semibold">
        <RotateCw aria-hidden size={15} strokeWidth={2.25} />
        Flip back
      </p>
    </div>
  );
}
