const steps = [
  {
    title: "Brief",
    text: "We talk about your customers before we talk about colours: who they are, what makes them trust you, and what you want them to do.",
  },
  {
    title: "Direction",
    text: "You get three clearly different design directions with my recommendation. You pick one.",
  },
  {
    title: "Build",
    text: "I build the site section by section, so you see real progress instead of waiting for a big reveal.",
  },
  {
    title: "Launch",
    text: "Your site goes live on your domain, with SEO basics in place and ready for Google Analytics.",
  },
];

export function Process() {
  return (
    <section
      id="process"
      aria-labelledby="process-title"
      className="mx-auto w-full max-w-7xl scroll-mt-8 px-4 py-20 sm:px-8 lg:py-28"
    >
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <h2 id="process-title" className="display text-[clamp(2.75rem,10vw,4.5rem)] text-chalk">
            How a project runs
          </h2>
          <p className="mt-5 max-w-[36ch] text-lg leading-relaxed text-chalk-soft">
            Four steps, the same way every time. You always know what happens next.
          </p>
        </div>
        {/* One sheet of card stock on the desk; the numbers carry the order of work. */}
        <ol className="relative bg-card p-6 text-ink shadow-[0_2px_3px_rgb(0_0_0/0.35),0_24px_40px_-12px_rgb(0_0_0/0.55)] sm:p-10 lg:col-span-8 lg:-rotate-1">
          <span aria-hidden className="absolute -top-3 left-10 h-6 w-24 rotate-3 bg-signal/90" />
          {steps.map((step, i) => (
            <li
              key={step.title}
              className="grid grid-cols-[3rem_1fr] gap-x-4 border-ink/15 py-6 first:pt-2 last:pb-2 [&:not(:last-child)]:border-b sm:grid-cols-[4.5rem_1fr]"
            >
              <span aria-hidden className="display text-5xl text-signal sm:text-6xl">
                {i + 1}
              </span>
              <div>
                <h3 className="display text-3xl sm:text-4xl">{step.title}</h3>
                <p className="mt-2 max-w-[56ch] leading-relaxed text-ink-soft">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
