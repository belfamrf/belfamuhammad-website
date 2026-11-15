import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Footer } from "@/components/Footer";

const TITLE = "Kelso & Reid case study · Belfa Muhammad";
const DESCRIPTION =
  "A fictional renovation contractor in Melbourne: one page that teaches homeowners how to read three quotes, with the comparison as the centrepiece.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/work/renovation" },
  openGraph: {
    type: "article",
    url: "/work/renovation",
    siteName: "Belfa Muhammad",
    locale: "en_US",
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

const facts = [
  ["Role", "Design, copy, build"],
  ["Scope", "One-page site, demo form"],
  ["Year", "2026"],
  ["Status", "Live demo, fictional business"],
];

const made = [
  "A one-page site in seven numbered sections, from reading quotes to requesting a site visit.",
  "A comparison of two quotes with eight line items, built as a real table on desktop and two lists on a phone.",
  "A demo form with per-field validation and an honest status line.",
  "A licence page for the three photographs, with photographer, licence and the changes made.",
];

const decisions = [
  [
    "A comparison instead of a project gallery",
    "The buyer in the brief is comparing three quotes. The site meets them there instead of showing photographs of work it cannot claim.",
  ],
  [
    "Paper, ink, one brick accent",
    "Warm paper reads like a document. The single accent marks the one thing that matters on each screen.",
  ],
  [
    "Newsreader for thinking, Public Sans for working",
    "Serif for headings and statements, sans for tables, steps, forms and labels.",
  ],
  [
    "One column at a time on a phone",
    "A three-column table at 375px is a lie. The same rows become two lists, switched by name, with a live region.",
  ],
  [
    "The highlighted column, not a dimmed one",
    "Dimming the other column to 45% dropped text contrast below AA, so the selected column gets the background and a brick rule instead.",
  ],
  [
    "Photographs labelled as stock",
    "The business is fictional, so the site says the photographs show the kind of work, not its own projects.",
  ],
];

const checks = [
  "Layouts checked at 320, 375, 768 and 1440px in headless Chrome, with lazy images loaded before measuring.",
  "The comparison tested with the keyboard and a live region, so the choice is announced and not only coloured.",
  "The form tested empty and filled: four field errors, then a demo status that admits nothing was sent.",
  "Reduced motion and no-JavaScript states checked, not assumed.",
  "No horizontal overflow at any tested width, and no dead anchors.",
];

function Tape() {
  return (
    <span
      aria-hidden
      className="absolute -top-3 left-1/2 z-10 h-6 w-24 -translate-x-1/2 -rotate-2 bg-signal/90"
    />
  );
}

export default function RenovationCaseStudy() {
  return (
    <>
      <a
        href="#case"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-signal focus:px-4 focus:py-3 focus:font-semibold focus:text-ink"
      >
        Skip to content
      </a>
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-8">
        <Link
          href="/"
          className="inline-flex min-h-11 items-center text-lg font-semibold tracking-tight text-chalk"
        >
          Belfa Muhammad
        </Link>
        <nav aria-label="Main" className="flex items-center gap-2 sm:gap-4">
          <Link
            href="/#work"
            className="inline-flex min-h-11 items-center px-2 text-sm font-medium text-chalk-soft hover:text-chalk"
          >
            All work
          </Link>
          <Link
            href="/#contact"
            className="inline-flex min-h-11 items-center bg-signal px-4 text-sm font-semibold text-ink transition-colors hover:bg-chalk"
          >
            Start a project
          </Link>
        </nav>
      </header>

      <main id="case" className="flex-1">
        <section
          aria-labelledby="case-title"
          className="mx-auto w-full max-w-7xl px-4 pb-14 pt-6 sm:px-8 lg:pt-10"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-chalk-soft">
            Case study · Concept project
          </p>
          <h1
            id="case-title"
            className="display mt-4 text-[clamp(3.25rem,13vw,6.5rem)] text-chalk"
          >
            Three quotes, read properly.
          </h1>
          <p className="mt-6 max-w-[54ch] text-lg leading-relaxed text-chalk">
            Kelso &amp; Reid is a renovation contractor in Melbourne. The site had to win
            larger jobs from homeowners already holding three quotes, without a single
            testimonial or number to lean on.
          </p>

          <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-chalk-soft/20 pt-6 text-sm sm:grid-cols-4">
            {facts.map(([label, value]) => (
              <div key={label}>
                <dt className="text-xs font-semibold uppercase tracking-wider text-chalk-soft">
                  {label}
                </dt>
                <dd className="mt-1 text-chalk">{value}</dd>
              </div>
            ))}
          </dl>

          <figure className="relative mt-12 bg-card p-3 pb-4 text-ink shadow-[0_2px_3px_rgb(0_0_0/0.35),0_24px_40px_-12px_rgb(0_0_0/0.55)]">
            <Tape />
            <Image
              src="/work/renovation/hero-1440.jpg"
              alt="The live Kelso & Reid homepage at 1440px: the headline The whole job, on paper, in a serif on warm paper."
              width={2880}
              height={1800}
              sizes="(min-width: 1280px) 1216px, 100vw"
              className="h-auto w-full"
              preload
            />
            <figcaption className="mt-3 px-1 text-xs text-ink-soft">
              The live homepage. Photographs from Wikimedia Commons, credited on their own
              page.
            </figcaption>
          </figure>
        </section>

        <article className="relative mx-auto w-full max-w-5xl bg-card px-5 py-10 text-ink shadow-[0_2px_3px_rgb(0_0_0/0.35),0_24px_40px_-12px_rgb(0_0_0/0.55)] sm:px-12 sm:py-14">
          <span aria-hidden className="absolute -top-3 left-10 h-6 w-24 rotate-2 bg-signal/90" />

          <h2 className="display mt-2 text-4xl text-ink sm:text-5xl">The brief</h2>
          <p className="mt-4 max-w-[68ch] leading-relaxed text-ink-soft">
            A renovation contractor in Melbourne, competing for jobs that are decided by
            three pieces of paper. The one action is a request for a site visit. The
            business is fictional, and every page says so.
          </p>

          <h2 className="display mt-12 text-4xl text-ink sm:text-5xl">The problem</h2>
          <p className="mt-4 max-w-[68ch] leading-relaxed text-ink-soft">
            Contractor sites all look the same: a gallery, a testimonial, a badge. None of
            it answers the question the homeowner actually has, which is what the other
            two quotes left out and what happens when the wall turns out to be worse than
            it looked.
          </p>
          <p className="mt-4 max-w-[68ch] leading-relaxed text-ink-soft">
            The same constraint as the first demo applied: no invented proof. No project
            count, no rating, no client name, not even an illustrative price. The site had
            to earn trust by explaining the work rather than by decorating it.
          </p>

          <h2 className="display mt-12 text-4xl text-ink sm:text-5xl">What I made</h2>
          <ul className="mt-4 max-w-[68ch] space-y-3 leading-relaxed text-ink-soft">
            {made.map((item) => (
              <li key={item} className="border-l-2 border-signal pl-4">
                {item}
              </li>
            ))}
          </ul>

          <h2 className="display mt-12 text-4xl text-ink sm:text-5xl">Design decisions</h2>
          <dl className="mt-4 max-w-[68ch]">
            {decisions.map(([decision, why]) => (
              <div
                key={decision}
                className="grid gap-1 border-b border-ink/15 py-4 sm:grid-cols-[minmax(0,16rem)_1fr] sm:gap-6"
              >
                <dt className="font-semibold text-ink">{decision}</dt>
                <dd className="leading-relaxed text-ink-soft">{why}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            <figure>
              <div className="border border-ink/15 bg-ink p-2">
                <Image
                  src="/work/renovation/quotes-1440.jpg"
                  alt="The comparison section at 1440px: a table of eight items, with the chosen quote highlighted on paper."
                  width={2880}
                  height={1800}
                  sizes="(min-width: 640px) 40vw, 90vw"
                  className="h-auto w-full"
                />
              </div>
              <figcaption className="mt-3 text-sm leading-relaxed text-ink-soft">
                The comparison at 1440px. Both quotes stay visible; the chosen one is
                marked, never dimmed.
              </figcaption>
            </figure>
            <figure>
              <div className="border border-ink/15 bg-ink p-2">
                <Image
                  src="/work/renovation/screen-375.jpg"
                  alt="The comparison on a phone: eight items for our quote, with two buttons above to switch between the quotes."
                  width={750}
                  height={1624}
                  sizes="(min-width: 640px) 40vw, 90vw"
                  className="h-auto w-full"
                />
              </div>
              <figcaption className="mt-3 text-sm leading-relaxed text-ink-soft">
                The same eight rows on a phone, one quote at a time.
              </figcaption>
            </figure>
          </div>

          <h2 className="display mt-12 text-4xl text-ink sm:text-5xl">
            What testing changed
          </h2>
          <p className="mt-4 max-w-[68ch] leading-relaxed text-ink-soft">
            The first plan was to dim the unselected column. Measured against the paper
            background, 45% opacity put the text under 4.5:1. The design changed: the
            chosen column gets the background and a brick rule, and the other one stays at
            full contrast. The comparison is the reason the page exists, so it should not
            be the least legible part of it.
          </p>
          <p className="mt-4 max-w-[68ch] leading-relaxed text-ink-soft">
            On a phone a three-column table either scrolls sideways or shrinks into
            unreadable type. The same rows are rendered twice instead: one list for the
            short quote, one for ours, switched by two buttons carrying aria-pressed, with
            a polite live region reading the change out loud.
          </p>
        </article>

        <section aria-labelledby="results-title" className="px-4 py-16 sm:px-8 lg:py-24">
          <div className="mx-auto w-full max-w-7xl">
            <h2
              id="results-title"
              className="display text-[clamp(2.5rem,9vw,4.5rem)] text-chalk"
            >
              Checks and results
            </h2>
            <ul className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-4">
              {[
                ["100", "Performance"],
                ["100", "Accessibility"],
                ["100", "Best practices"],
                ["100", "SEO"],
              ].map(([score, label]) => (
                <li key={label}>
                  <p className="display text-5xl text-signal sm:text-6xl">{score}</p>
                  <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-chalk-soft">
                    {label}
                  </p>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-chalk-soft">
              Lighthouse, mobile, on the live domain. Cumulative layout shift 0.
            </p>
            <ul className="mt-10 grid gap-3 text-chalk-soft sm:grid-cols-2 sm:gap-x-10">
              {checks.map((check) => (
                <li key={check} className="flex gap-3 leading-relaxed">
                  <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-signal" />
                  {check}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-t border-chalk-soft/20 px-4 py-16 sm:px-8">
          <div className="mx-auto w-full max-w-7xl">
            <h2 className="display text-[clamp(2.5rem,9vw,4.5rem)] text-chalk">
              See it in the browser.
            </h2>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="https://renovation.belfamuhammad.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center gap-2 bg-signal px-5 font-semibold text-ink transition-colors hover:bg-chalk"
              >
                Visit the live site
                <ArrowUpRight aria-hidden size={18} strokeWidth={2.25} />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
              <Link
                href="/#contact"
                className="inline-flex min-h-12 items-center gap-2 border border-chalk-soft/40 px-5 font-semibold text-chalk transition-colors hover:border-signal hover:text-signal"
              >
                Start a project
                <ArrowRight aria-hidden size={18} strokeWidth={2.25} />
              </Link>
            </div>
            <Link
              href="/#work"
              className="mt-8 inline-flex min-h-11 items-center underline decoration-chalk-soft/40 hover:text-chalk hover:decoration-chalk"
            >
              Back to all work
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
