import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Footer } from "@/components/Footer";

const TITLE = "Sawah House case study · Belfa Muhammad";
const DESCRIPTION =
  "A fictional villa in Bali with no photographs of the villa: the place is shown, the house is described in words, and the day is sold four times over.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/work/villa" },
  openGraph: {
    type: "article",
    url: "/work/villa",
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
  ["Scope", "One-page site, demo booking form"],
  ["Year", "2026"],
  ["Status", "Live demo, fictional business"],
];

const made = [
  "A one-page site in six numbered sections, from a day in the house to the booking form.",
  "Four time panels at 06.00, 10.00, 15.00 and 19.00, with the background shifting from sand paper to canopy green as the day ends.",
  "The house written as five room lines, because there are no photographs of it to show.",
  "A demo booking form with per-field validation, an honest status line and no scarcity.",
  "A questions section with six native details elements, including one that answers no.",
  "A licence page for the three photographs, with photographer, licence and the changes made.",
];

const decisions = [
  [
    "Photographs of Bali, never of the house",
    "Every image is a licensed landscape with a caption that says what it is. The alternative was passing off someone else's villa as this one, which would have made the whole page worthless.",
  ],
  [
    "Four time panels instead of a gallery",
    "A gallery of a house you cannot photograph is a lie with better lighting. Four moments carry the stay: the light, the garden, the water, the table. It is also the one thing a visitor remembers.",
  ],
  [
    "The house described in words",
    "Five rooms, one or two sentences each, concrete and checkable. Words can be honest about a bedroom in a way a borrowed photograph never can.",
  ],
  [
    "Canopy green, sand paper, one brass accent",
    "Deep green marks the moments where the site breathes and the paper carries the reading. Brass only ever marks something: a time label, a rule, a small tick.",
  ],
  [
    "Instrument Serif for atmosphere, DM Sans for facts",
    "Times, dates, buttons and labels stay in the sans, so information never looks like decoration.",
  ],
  [
    "Booking direct argued, not discounted",
    "No ratings, no crossed-out prices, no rooms left. The page explains who answers the email instead, which is the actual reason to skip the platform.",
  ],
];

const checks = [
  "Layouts checked at 320, 375, 768 and 1440px in headless Chrome, with lazy images loaded before measuring.",
  "Four time panels present at every width, with the tone change from paper to canopy checked in the rendered page.",
  "The form tested empty and filled: five field errors, then a demo status that admits nothing was sent.",
  "Contrast measured on the real colours: ink 14.2:1, secondary text 5.4:1 and brass 4.6:1 on the paper background.",
  "Reveals are timed by IntersectionObserver, never scroll-linked, so the page holds up in iOS Safari.",
  "Reduced motion and no-JavaScript states checked, not assumed. No horizontal overflow at any tested width.",
];

function Tape() {
  return (
    <span
      aria-hidden
      className="absolute -top-3 left-1/2 z-10 h-6 w-24 -translate-x-1/2 -rotate-2 bg-signal/90"
    />
  );
}

export default function VillaCaseStudy() {
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
            The place first, the house in words.
          </h1>
          <p className="mt-6 max-w-[54ch] text-lg leading-relaxed text-chalk">
            Sawah House is a two-bedroom villa in Bali that does not exist. The site had to
            make someone want the stay anyway, and it had to do it without a single
            photograph of the building.
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
              src="/work/villa/hero-1440.jpg"
              alt="The live Sawah House homepage at 1440px: a rice-terrace photograph above a deep green block holding the headline The valley, then the house."
              width={2880}
              height={1800}
              sizes="(min-width: 1280px) 1216px, 100vw"
              className="h-auto w-full"
              preload
            />
            <figcaption className="mt-3 px-1 text-xs text-ink-soft">
              The live homepage. The photograph is of Bali; the site says so in the corner of
              the image.
            </figcaption>
          </figure>
        </section>

        <article className="relative mx-auto w-full max-w-5xl bg-card px-5 py-10 text-ink shadow-[0_2px_3px_rgb(0_0_0/0.35),0_24px_40px_-12px_rgb(0_0_0/0.55)] sm:px-12 sm:py-14">
          <span aria-hidden className="absolute -top-3 left-10 h-6 w-24 rotate-2 bg-signal/90" />

          <h2 className="display mt-2 text-4xl text-ink sm:text-5xl">The brief</h2>
          <p className="mt-4 max-w-[68ch] leading-relaxed text-ink-soft">
            A private villa in Bali, two bedrooms, sold direct instead of through a
            platform. The one action is checking dates. The audience is a couple or a small
            family comparing villas on their phone, tired of fees added at the last step.
          </p>

          <h2 className="display mt-12 text-4xl text-ink sm:text-5xl">The problem</h2>
          <p className="mt-4 max-w-[68ch] leading-relaxed text-ink-soft">
            Every villa site is the same sequence: a pool at dusk, a rating, a review, a
            price. The business is fictional, so the rating and the review were immediately
            impossible. Then the harder one: Wikimedia Commons has beautiful licensed
            landscapes of Bali and almost no usable photographs of a villa interior or pool.
          </p>
          <p className="mt-4 max-w-[68ch] leading-relaxed text-ink-soft">
            The obvious shortcut was to use a stock villa photograph and call it this one.
            That would have made every other claim on the page worthless, and the whole point
            of the demo is that it can be checked. So the constraint became the concept:
            show the valley with photographs, describe the house with words, and make the
            honesty the reason to trust the booking.
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
                  src="/work/villa/day-1440.jpg"
                  alt="The first of four time panels at 1440px: the label 06.00, the title First light, one sentence, a practical detail, and a licensed photograph of rice fields."
                  width={2880}
                  height={1800}
                  sizes="(min-width: 640px) 40vw, 90vw"
                  className="h-auto w-full"
                />
              </div>
              <figcaption className="mt-3 text-sm leading-relaxed text-ink-soft">
                The first of the four panels at 1440px. The photograph is of Bali and the
                caption under it says so.
              </figcaption>
            </figure>
            <figure>
              <div className="border border-ink/15 bg-ink p-2">
                <Image
                  src="/work/villa/screen-375.jpg"
                  alt="The same panel on a phone: the time label, First light, the sentence about mist in the valley, the coffee detail, then the photograph."
                  width={750}
                  height={1624}
                  sizes="(min-width: 640px) 40vw, 90vw"
                  className="h-auto w-full"
                />
              </div>
              <figcaption className="mt-3 text-sm leading-relaxed text-ink-soft">
                On a phone the time and the sentence come first, the photograph after them.
              </figcaption>
            </figure>
          </div>

          <h2 className="display mt-12 text-4xl text-ink sm:text-5xl">
            What testing changed
          </h2>
          <p className="mt-4 max-w-[68ch] leading-relaxed text-ink-soft">
            The brass accent was measured instead of trusted. On the sand paper background it
            lands at 4.6:1, which passes for normal text but leaves no room for a lighter
            tint, so brass never appears as small type anywhere else on the page. The canopy
            overlay on the hero was checked against the brightest part of the photograph, not
            the darkest, and raised until the headline held its contrast.
          </p>
          <p className="mt-4 max-w-[68ch] leading-relaxed text-ink-soft">
            The first plan animated the panels on scroll. That fails in iOS Safari and turns
            reading into a performance, so the reveals are timed by IntersectionObserver with
            a 700ms fade instead, and the reduced-motion and no-JavaScript states were opened
            in the browser rather than assumed. The hero image is preloaded and the two panel
            photographs below the fold are lazy, which is what keeps the first screen cheap
            while still showing the day as it loads.
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
                ["95–97", "Performance"],
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
              Lighthouse, mobile, on the live domain: 95 and 97 in two runs, largest
              contentful paint 2.2&ndash;2.5 s, cumulative layout shift 0. Desktop scores 98.
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
                href="https://villa.belfamuhammad.com"
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
