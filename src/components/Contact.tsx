"use client";

import { useState } from "react";
import { ArrowRight, ArrowUpRight, LoaderCircle } from "lucide-react";
import { Reveal } from "@/components/Motion";

// Form service endpoint (e.g. Formspree), set in .env.local. Never hard-coded.
const ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT;
const LINKEDIN = "https://www.linkedin.com/in/belfa-muhammad-ravi-firmansyah-103387225/";

type Status = "idle" | "sending" | "sent" | "error" | "unconfigured";

const field =
  "mt-2 block w-full border border-ink/25 bg-white/60 px-3 py-3 text-base text-ink placeholder:text-ink-soft focus:border-ink focus:outline-none focus-visible:outline-3 focus-visible:outline-offset-1 focus-visible:outline-signal aria-[invalid=true]:border-signal-ink";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const found: Record<string, string> = {};
    if (!String(data.get("name") ?? "").trim()) found.name = "Please add your name.";
    const email = String(data.get("email") ?? "").trim();
    if (!email) found.email = "Please add your email so I can reply.";
    else if (!/^\S+@\S+\.\S+$/.test(email)) found.email = "That email looks incomplete.";
    if (!String(data.get("message") ?? "").trim())
      found.message = "A sentence or two about your business is enough.";
    setErrors(found);
    if (Object.keys(found).length) {
      form.querySelector<HTMLElement>(`[name="${Object.keys(found)[0]}"]`)?.focus();
      return;
    }

    if (!ENDPOINT) {
      setStatus("unconfigured");
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch(ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error(String(response.status));
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="mx-auto w-full max-w-7xl scroll-mt-8 px-4 py-20 sm:px-8 lg:py-28"
    >
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <Reveal as="h2" className="display text-[clamp(3rem,11vw,5.5rem)] text-chalk">
            <span id="contact-title">
              Tell me about your <span className="text-signal">business.</span>
            </span>
          </Reveal>
          <p className="mt-6 max-w-[38ch] text-lg leading-relaxed text-chalk">
            Who your customers are, what you sell, and what you want your website to do. I reply
            within two working days.
          </p>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex min-h-11 items-center gap-2 font-semibold text-chalk underline decoration-chalk-soft/50 hover:text-signal hover:decoration-signal"
          >
            Or find me on LinkedIn
            <ArrowUpRight aria-hidden size={18} strokeWidth={2} />
          </a>
        </div>

        <div className="relative bg-card p-6 text-ink shadow-[0_2px_3px_rgb(0_0_0/0.35),0_24px_40px_-12px_rgb(0_0_0/0.55)] sm:p-10 lg:col-span-7">
          <span aria-hidden className="absolute -top-3 right-12 h-6 w-24 rotate-2 bg-signal/90" />
          {status === "sent" ? (
            <div role="status" className="py-10">
              <p className="display text-5xl">Thank you.</p>
              <p className="mt-4 max-w-[44ch] text-lg leading-relaxed text-ink-soft">
                Your message is on my desk. I&apos;ll reply to your email within two working days.
              </p>
            </div>
          ) : (
            <form noValidate onSubmit={onSubmit} className="grid gap-6 sm:grid-cols-2">
              <Field label="Your name" name="name" error={errors.name} autoComplete="name" />
              <Field
                label="Email"
                name="email"
                type="email"
                error={errors.email}
                autoComplete="email"
              />
              <div className="sm:col-span-2">
                <label htmlFor="need" className="text-sm font-semibold">
                  What do you need?
                </label>
                <select id="need" name="need" className={field} defaultValue="Website">
                  <option>Website</option>
                  <option>Brand identity</option>
                  <option>Brand identity + website</option>
                  <option>Not sure yet</option>
                </select>
              </div>
              <Field
                label="Your current website (optional)"
                name="website"
                type="url"
                placeholder="https://"
                className="sm:col-span-2"
              />
              <div className="sm:col-span-2">
                <label htmlFor="message" className="text-sm font-semibold">
                  About your business
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className={field}
                />
                {errors.message && <ErrorText id="message-error">{errors.message}</ErrorText>}
              </div>
              {/* spam trap: people never see or fill this */}
              <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" />

              <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex min-h-12 items-center justify-center gap-2 bg-signal px-6 font-semibold text-ink transition-colors hover:bg-ink hover:text-chalk disabled:cursor-wait disabled:opacity-70"
                >
                  {status === "sending" ? (
                    <>
                      <LoaderCircle aria-hidden size={18} className="animate-spin motion-reduce:animate-none" />
                      Sending
                    </>
                  ) : (
                    <>
                      Send message
                      <ArrowRight aria-hidden size={18} strokeWidth={2.25} />
                    </>
                  )}
                </button>
                <p role="status" aria-live="polite" className="text-sm text-ink-soft">
                  {status === "error" &&
                    "The message didn't go through. Please try again, or reach me on LinkedIn."}
                  {status === "unconfigured" &&
                    "The form isn't connected yet. Please reach me on LinkedIn for now."}
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
  className,
  ...rest
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
  className?: string;
  autoComplete?: string;
  placeholder?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={name} className="text-sm font-semibold">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        className={field}
        {...rest}
      />
      {error && <ErrorText id={`${name}-error`}>{error}</ErrorText>}
    </div>
  );
}

function ErrorText({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <p id={id} className="mt-2 text-sm font-medium text-[#a8290f]">
      {children}
    </p>
  );
}
