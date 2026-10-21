"use client";

import { motion } from "motion/react";

const tags = [
  {
    name: "Website",
    price: "$900",
    rotate: -1.5,
    offset: "",
    includes: [
      "Custom design, no templates",
      "Built mobile-first",
      "Copy shaped around what makes your customers act",
      "SEO basics and Google Analytics ready",
      "Launched on your own domain",
    ],
  },
  {
    name: "Brand identity",
    price: "$600",
    rotate: 1.5,
    offset: "lg:mt-12",
    includes: [
      "Logo and its variations",
      "Colour palette and typefaces",
      "A short brand guide you can hand to anyone",
    ],
  },
];

const aiExtras = [
  "A chat assistant that answers visitors' questions and points them to book or get in touch",
  "Automatic follow-up when someone fills in your form",
  "Help planning and scheduling social media content",
  "Small custom tools for your business, like a price calculator",
];

const terms = [
  ["Timeline", "Most websites take 2–3 weeks."],
  ["Revisions", "Two rounds of revisions at each stage."],
  ["Payment", "50% to start, 50% when your site goes live."],
  ["Ownership", "Once it's paid, the website and every file are yours."],
];

export function Pricing() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-title"
      className="mx-auto w-full max-w-7xl scroll-mt-8 px-4 py-20 sm:px-8 lg:py-28"
    >
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <h2 id="pricing-title" className="display text-[clamp(2.75rem,10vw,4.5rem)] text-chalk">
            Clear prices, up front
          </h2>
          <p className="mt-5 max-w-[36ch] text-lg leading-relaxed text-chalk-soft">
            Starting prices, so you know where you stand before we talk. Need both? Ask about a
            brand + website package.
          </p>
        </div>
        <div className="grid gap-10 sm:grid-cols-2 sm:gap-10 lg:col-span-8">
          {tags.map((tag, i) => (
            // Swing tags: they hang from the punched hole and settle with a small sway.
            <motion.article
              key={tag.name}
              initial={{ rotate: tag.rotate * 7 }}
              whileInView={{ rotate: tag.rotate }}
              viewport={{ once: true, margin: "0px 0px -15% 0px" }}
              transition={{ type: "spring", stiffness: 90, damping: 7, delay: i * 0.15 }}
              style={{ transformOrigin: "50% 1.5rem" }}
              className={`relative bg-card px-6 pb-8 pt-12 text-ink shadow-[0_2px_3px_rgb(0_0_0/0.35),0_24px_40px_-12px_rgb(0_0_0/0.55)] ${tag.offset}`}
            >
              {/* punched hole of a swing tag */}
              <span
                aria-hidden
                className="absolute left-1/2 top-4 size-4 -translate-x-1/2 rounded-full bg-desk ring-2 ring-ink/20"
              />
              <h3 className="text-lg font-semibold">{tag.name}</h3>
              <p className="mt-2 flex items-baseline gap-2">
                <span className="text-sm text-ink-soft">from</span>
                <span className="display text-7xl">{tag.price}</span>
              </p>
              <ul className="mt-6 space-y-2.5 border-t border-ink/15 pt-6 leading-snug">
                {tag.includes.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span aria-hidden className="mt-2 h-0.5 w-3 shrink-0 bg-ink/40" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
          {/* AI is offered inside the website work, not as a separate service. */}
          <div className="sm:col-span-2">
            <div className="relative bg-card px-6 py-7 text-ink shadow-[0_2px_3px_rgb(0_0_0/0.35),0_24px_40px_-12px_rgb(0_0_0/0.55)] sm:px-8">
              <span aria-hidden className="absolute -top-3 right-10 h-6 w-24 -rotate-2 bg-signal/90" />
              <h3 className="text-lg font-semibold">AI built in, if you want it</h3>
              <p className="mt-1 text-ink-soft">Added to your website and priced with the project.</p>
              <ul className="mt-5 grid gap-x-8 gap-y-2.5 leading-snug sm:grid-cols-2">
                {aiExtras.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span aria-hidden className="mt-2 h-0.5 w-3 shrink-0 bg-ink/40" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* The answers a buyer weighs before they risk a deposit. */}
          <dl className="grid gap-x-10 gap-y-5 border-t border-chalk-soft/25 pt-8 sm:col-span-2 sm:grid-cols-2">
            {terms.map(([label, text]) => (
              <div key={label}>
                <dt className="font-semibold text-chalk">{label}</dt>
                <dd className="mt-1 leading-relaxed text-chalk-soft">{text}</dd>
              </div>
            ))}
          </dl>
          <a
            href="#contact"
            className="inline-flex min-h-12 items-center justify-center gap-2 justify-self-start bg-signal px-6 font-semibold text-ink transition-colors hover:bg-chalk sm:col-span-2"
          >
            Start a project
          </a>
        </div>
      </div>
    </section>
  );
}
