import Link from "next/link";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Desk } from "@/components/Desk";
import { Footer } from "@/components/Footer";
import { Pricing } from "@/components/Pricing";
import { Process } from "@/components/Process";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-signal focus:px-4 focus:py-3 focus:font-semibold focus:text-ink"
      >
        Skip to content
      </a>
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-8">
        <Link href="/" className="inline-flex min-h-11 items-center text-lg font-semibold tracking-tight text-chalk">
          Belfa Muhammad
        </Link>
        <nav aria-label="Main" className="flex items-center gap-4">
          <ul className="hidden items-center gap-1 text-sm font-medium text-chalk-soft md:flex">
            {[
              ["Work", "#work"],
              ["Process", "#process"],
              ["Pricing", "#pricing"],
              ["About", "#about"],
            ].map(([label, href]) => (
              <li key={href}>
                <a className="inline-flex min-h-11 items-center px-2.5 hover:text-chalk" href={href}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="inline-flex min-h-11 items-center bg-signal px-4 text-sm font-semibold text-ink transition-colors hover:bg-chalk"
          >
            Start a project
          </a>
        </nav>
      </header>

      <main id="main" className="flex-1 overflow-x-clip">
        <section
          aria-labelledby="hero-title"
          className="mx-auto grid w-full max-w-7xl gap-10 px-4 pb-12 pt-6 sm:px-8 md:grid-cols-12 md:items-center md:gap-8 lg:pt-12"
        >
          <div className="md:col-span-7 lg:col-span-5">
            <h1
              id="hero-title"
              className="display text-[clamp(3.25rem,13.5vw,6rem)] text-chalk md:text-[clamp(3.5rem,8vw,6rem)] lg:text-[clamp(4rem,6.8vw,6rem)]"
            >
              Premium websites, designed by a{" "}
              <span className="text-signal">marketer.</span>
            </h1>
            <p className="mt-6 max-w-[34ch] text-lg leading-relaxed text-chalk">
              I design websites that get people to book, buy or get in touch. Six to seven years
              of marketing and branding go into every site I&nbsp;design.
            </p>
            <p className="mt-4 text-sm text-chalk-soft">
              Based in Indonesia, working with clients worldwide.
            </p>
          </div>
          <div id="work" className="scroll-mt-8 md:col-span-5 lg:col-span-7">
            <Desk />
          </div>
        </section>
        <Process />
        <Pricing />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
