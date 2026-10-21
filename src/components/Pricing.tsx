const tags = [
  {
    name: "Website",
    price: "$900",
    rotate: "lg:-rotate-2",
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
    rotate: "lg:rotate-2 lg:mt-12",
    includes: [
      "Logo and its variations",
      "Colour palette and typefaces",
      "A short brand guide you can hand to anyone",
    ],
  },
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
        <div className="grid gap-10 sm:grid-cols-2 sm:gap-6 lg:col-span-8">
          {tags.map((tag) => (
            <article
              key={tag.name}
              className={`relative bg-card px-6 pb-8 pt-12 text-ink shadow-[0_2px_3px_rgb(0_0_0/0.35),0_24px_40px_-12px_rgb(0_0_0/0.55)] ${tag.rotate}`}
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
                    <span aria-hidden className="mt-2 h-0.5 w-3 shrink-0 bg-signal" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
