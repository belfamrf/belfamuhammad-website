import Image from "next/image";

// Set this to the portrait's path in /public once Belfa sends it, e.g. "/belfa.jpg".
const PORTRAIT: string | null = null;

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="mx-auto w-full max-w-7xl scroll-mt-8 px-4 py-20 sm:px-8 lg:py-28"
    >
      <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-8">
        <figure className="relative mx-auto w-full max-w-[19rem] rotate-2 bg-card p-4 pb-5 text-ink shadow-[0_2px_3px_rgb(0_0_0/0.35),0_24px_40px_-12px_rgb(0_0_0/0.55)] lg:col-span-4 lg:mx-0 lg:justify-self-center">
          <span aria-hidden className="absolute -top-3 left-1/2 h-6 w-24 -translate-x-1/2 -rotate-3 bg-signal/90" />
          <div className="relative aspect-[4/5] overflow-hidden bg-ink">
            {PORTRAIT ? (
              <Image
                src={PORTRAIT}
                alt="Belfa Muhammad"
                fill
                sizes="(min-width: 1024px) 18rem, 80vw"
                className="object-cover"
              />
            ) : (
              <span className="display absolute inset-0 flex items-center justify-center text-8xl text-chalk/25">
                BM
              </span>
            )}
          </div>
          <figcaption className="mt-4 text-sm text-ink-soft">Belfa Muhammad · Indonesia</figcaption>
        </figure>

        <div className="lg:col-span-7 lg:col-start-6">
          <h2 id="about-title" className="display text-[clamp(2.75rem,10vw,4.5rem)] text-chalk">
            A marketer who designs
          </h2>
          <div className="mt-6 max-w-[60ch] space-y-5 text-lg leading-relaxed text-chalk">
            <p>
              I&apos;m Belfa Muhammad Ravi Firmansyah. Before I designed websites, I spent six to
              seven years in digital marketing, branding and brand identity, including online
              marketing and reservations for hospitality businesses: social media, booking
              platforms like Booking.com and Airbnb, and talking with guests.
            </p>
            <p>
              That work taught me why people book, buy or walk away. So every website I design
              starts with your customer and the one thing you want them to do. The look comes
              after, and it has a job.
            </p>
            <p className="text-chalk-soft">Based in Indonesia, working with clients worldwide.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
