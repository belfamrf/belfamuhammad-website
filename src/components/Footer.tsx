import { LINKEDIN_URL, UPWORK_URL } from "@/content/site";

export function Footer() {
  return (
    <footer className="mx-auto flex w-full max-w-7xl flex-col gap-3 border-t border-chalk-soft/20 px-4 py-10 text-sm text-chalk-soft sm:flex-row sm:items-center sm:justify-between sm:px-8">
      <p>
        <span className="font-semibold text-chalk">Belfa Muhammad</span> · Based in Indonesia,
        working with clients worldwide.
      </p>
      <div className="flex items-center gap-5">
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center underline decoration-chalk-soft/40 hover:text-chalk hover:decoration-chalk"
        >
          LinkedIn
        </a>
        <a
          href={UPWORK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center underline decoration-chalk-soft/40 hover:text-chalk hover:decoration-chalk"
        >
          Upwork
        </a>
        <p>© 2026</p>
      </div>
    </footer>
  );
}
