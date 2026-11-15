import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Footer } from "@/components/Footer";

const TITLE = "KERN case study · Belfa Muhammad";
const DESCRIPTION =
  "A fictional strength and mobility studio in Copenhagen: identity, a one-page site, a four-question movement screen, and the motion fix that came out of testing.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/work/kern" },
  openGraph: {
    type: "article",
    url: "/work/kern",
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
  ["Role", "Brand identity, copy, design, build"],
  ["Scope", "Logo, identity deck, one-page site"],
  ["Year", "2026"],
  ["Status", "Live demo, fictional business"],
];

const made = [
  "An identity built on a measured grid: a calibrated K, a stacked lockup, colour variants, an app icon and a favicon.",
  "A one-page site with seven numbered sections, from Principles to Booking.",
  "A four-question movement screen that suggests a training format and carries that choice into the booking form.",
  "A licence page for the three photographs, with photographer, licence and the changes I made.",
];

const decisions = [
  [
    "Bone, ink, moss, one lime accent",
    "Calm pages, and a single colour that marks the next action.",
  ],
  [
    "Fraunces for display, Manrope for text",
    "A warm serif carries “quiet”; the sans keeps forms and numbers plain.",
  ],
  [
    "Numbered sections 01 to 07",
    "Structure without decoration, and a visible sense of progress down one long page.",
  ],
  [
    "A movement screen instead of a hero carousel",
    "Gives a visitor something useful to do, and turns a preference into a booking.",
  ],
  [
    "Photographs in grayscale over moss",
    "Ties three unrelated Wikimedia photos into one room.",
  ],
  [
    "Concept labels in the footer, form and social card",
    "The business is fictional, and the site never hides it.",
  ],
];

const checks = [
  "Layouts checked at 320, 375, 768 and 1440px, plus a 720px viewport as a stand-in for 200% zoom.",
  "Keyboard flow through the screen, mobile menu and form, including Escape and focus return.",
  "Reduced motion and no-JavaScript states checked, not assumed.",
  "Contrast measured; one Studio credit line failed at 4.49 and was changed.",
  "Canonical URLs, sitemap, robots and a 1200×630 share card.",
];

function Tape() {
  return (
    <span
      aria-hidden
      className="absolute -top-3 left-1/2 z-10 h-6 w-24 -translate-x-1/2 -rotate-2 bg-signal/90"
    />
  );
}

export default function KernCaseStudy() {
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
            Strength, measured.
          </h1>
          <p className="mt-6 max-w-[54ch] text-lg leading-relaxed text-chalk">
            KERN is a strength and mobility studio in Copenhagen. I made the identity
            and the one-page site. It had to look like a studio a stranger would
            trust, and never pretend to be one.
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
              src="/work/kern/hero-1440.jpg"
              alt="The live KERN homepage at 1440px: headline, photograph of gymnastic rings, and a lime accent."
              width={2880}
              height={1800}
              sizes="(min-width: 1280px) 1216px, 100vw"
              className="h-auto w-full"
              preload
            />
            <figcaption className="mt-3 px-1 text-xs text-ink-soft">
              The live homepage. Photography from Wikimedia Commons, credited on its
              own page.
            </figcaption>
          </figure>
        </section>

        <article className="relative mx-auto w-full max-w-5xl bg-card px-5 py-10 text-ink shadow-[0_2px_3px_rgb(0_0_0/0.35),0_24px_40px_-12px_rgb(0_0_0/0.55)] sm:px-12 sm:py-14">
          <span aria-hidden className="absolute -top-3 left-10 h-6 w-24 rotate-2 bg-signal/90" />
          <Image
            src="/work/kern/kern-horizontal.svg"
            alt="KERN"
            width={820}
            height={256}
            unoptimized
            className="h-7 w-auto"
          />

          <h2 className="display mt-8 text-4xl text-ink sm:text-5xl">The brief</h2>
          <p className="mt-4 max-w-[68ch] leading-relaxed text-ink-soft">
            KERN targets busy professionals, 30 to 50, who want to get stronger
            without a crowded gym. The site has one job: book a free 30-minute intro.
            Prices are illustrative, the business is fictional, and every page says
            so.
          </p>

          <h2 className="display mt-12 text-4xl text-ink sm:text-5xl">The problem</h2>
          <p className="mt-4 max-w-[68ch] leading-relaxed text-ink-soft">
            Most demo sites try to pass as client work. They borrow testimonials,
            client logos and result numbers, and a buyer comparing designers can
            usually tell. KERN had to feel trustworthy without inventing proof.
          </p>
          <p className="mt-4 max-w-[68ch] leading-relaxed text-ink-soft">
            A quiet studio is also easy to describe and hard to show. Remove the noise
            and you get beige minimalism that could belong to any brand. The design
            needed calm with a spine: one memorable element, and enough detail to feel
            art-directed.
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
                  src="/work/kern/screen-375.jpg"
                  alt="The movement screen on a phone: the suggested starting point, the reason for it, and three next steps."
                  width={750}
                  height={1624}
                  sizes="(min-width: 640px) 40vw, 90vw"
                  className="h-auto w-full"
                />
              </div>
              <figcaption className="mt-3 text-sm leading-relaxed text-ink-soft">
                The movement screen, answered on a phone. Four questions, then a
                suggested format and the reason behind it.
              </figcaption>
            </figure>
            <figure>
              <div className="border border-ink/15 bg-ink p-2">
                <Image
                  src="/work/kern/studio-1440.jpg"
                  alt="The Studio section: two grayscale photographs of training equipment, with a credit line underneath."
                  width={2880}
                  height={1800}
                  sizes="(min-width: 640px) 40vw, 90vw"
                  className="h-auto w-full"
                />
              </div>
              <figcaption className="mt-3 text-sm leading-relaxed text-ink-soft">
                The Studio section. Photographs of training equipment, not of
                KERN&rsquo;s real room.
              </figcaption>
            </figure>
          </div>

          <h2 className="display mt-12 text-4xl text-ink sm:text-5xl">
            What testing changed
          </h2>
          <p className="mt-4 max-w-[68ch] leading-relaxed text-ink-soft">
            The first motion pass used CSS{" "}
            <code className="bg-ink/5 px-1 py-0.5 text-[0.9em]">
              animation-timeline: view()
            </code>
            . It looked right on desktop Chrome and did nothing on iOS Safari, where
            the page appeared static. On Chrome, elements also scrubbed with the
            scrollbar, so a fast flick skipped the animation. I replaced it with an
            IntersectionObserver that runs on a clock: 28px and 650ms for text, 70ms
            stagger, an 850ms clip-path for photos. Reduced motion adds no classes,
            and without JavaScript the content is already there.
          </p>
          <p className="mt-4 max-w-[68ch] leading-relaxed text-ink-soft">
            Copy had a second pass. The form stopped talking about endpoints, the
            small-group price gained a duration so €960 was not a number floating
            alone, and a medical disclaimer repeated three times became one.
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
                ["95–96", "Performance"],
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
              Lighthouse, mobile, on the live site. Cumulative layout shift 0.
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
                href="https://kern.belfamuhammad.com"
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
