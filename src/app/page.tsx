import Link from "next/link";
import { Desk } from "@/components/Desk";

export default function Home() {
  return (
    <>
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-8">
        <Link href="/" className="text-lg font-semibold tracking-tight text-chalk">
          Belfa Muhammad
        </Link>
        <nav aria-label="Main" className="flex items-center gap-6">
          <ul className="hidden items-center gap-6 text-sm font-medium text-chalk-soft md:flex">
            <li><a className="hover:text-chalk" href="#work">Work</a></li>
            <li><a className="hover:text-chalk" href="#process">Process</a></li>
            <li><a className="hover:text-chalk" href="#pricing">Pricing</a></li>
          </ul>
          <a
            href="#contact"
            className="inline-flex min-h-11 items-center bg-signal px-4 text-sm font-semibold text-ink transition-colors hover:bg-chalk"
          >
            Start a project
          </a>
        </nav>
      </header>

      <main className="flex-1">
        <section
          aria-labelledby="hero-title"
          className="mx-auto grid w-full max-w-7xl gap-10 px-4 pb-16 pt-6 sm:px-8 lg:grid-cols-12 lg:items-center lg:gap-8 lg:pt-12"
        >
          <div className="lg:col-span-5">
            <h1 id="hero-title" className="display text-[clamp(3.25rem,13.5vw,6rem)] text-chalk lg:text-[clamp(4rem,6.8vw,6rem)]">
              Premium websites, designed by a{" "}
              <span className="text-signal">marketer.</span>
            </h1>
            <p className="mt-6 max-w-[34ch] text-lg leading-relaxed text-chalk">
              I design websites that look premium and get people to act: book, buy or get in
              touch. Six to seven years in marketing and branding come with every project.
            </p>
            <p className="mt-4 text-sm text-chalk-soft">
              Based in Indonesia, working with clients worldwide.
            </p>
          </div>
          <div id="work" className="lg:col-span-7">
            <Desk />
          </div>
        </section>
      </main>
    </>
  );
}
