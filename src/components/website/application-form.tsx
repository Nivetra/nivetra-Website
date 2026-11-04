"use client";

import { useState } from "react";
import { Send, Paperclip } from "lucide-react";
import { contact, siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

/**
 * Careers application form. Posts natively (multipart) to FormSubmit so the
 * resume is emailed as an attachment to the company — no backend needed.
 * First submission sends a one-time confirmation email to activate the inbox.
 */
const FORMSUBMIT_ACTION = `https://formsubmit.co/${contact.email}`;
const MAX_BYTES = 5 * 1024 * 1024;

const areas = [
  "Engineering",
  "AI / Machine Learning",
  "Design",
  "Product",
  "Internship",
  "Other",
];

export function ApplicationForm() {
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    if (submitting) {
      e.preventDefault(); // guard against a double-click before the POST navigates away
      return;
    }
    const form = e.currentTarget;
    const input = form.elements.namedItem("resume") as HTMLInputElement | null;
    const file = input?.files?.[0];
    if (file && file.size > MAX_BYTES) {
      e.preventDefault();
      setError("Your resume must be under 5 MB.");
      return;
    }
    setError("");
    setSubmitting(true); // native multipart POST proceeds; button locks so it can't fire twice
  }

  return (
    <form
      action={FORMSUBMIT_ACTION}
      method="POST"
      encType="multipart/form-data"
      onSubmit={onSubmit}
      className="rounded-2xl border border-line bg-surface p-6 sm:p-8"
    >
      {/* FormSubmit configuration */}
      <input type="hidden" name="_subject" value="New job application for Nivetra Technologies" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value={`${siteConfig.url}/career`} />
      {/* Honeypot */}
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name">
          <input {...input} name="name" required placeholder="Jane Doe" />
        </Field>
        <Field label="Email">
          <input {...input} name="email" type="email" required placeholder="jane@email.com" />
        </Field>
        <Field label="Phone (optional)">
          <input {...input} name="phone" type="tel" placeholder="+91 90000 00000" />
        </Field>
        <Field label="Area of interest">
          <select {...input} name="area" required defaultValue="">
            <option value="" disabled>
              Select an area
            </option>
            {areas.map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Tell us about yourself">
          <textarea
            {...input}
            name="message"
            required
            rows={5}
            placeholder="What would you love to work on? Share a bit about your experience and what excites you."
            className={cn(input.className, "resize-y")}
          />
        </Field>
      </div>

      <div className="mt-5">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-ink-soft">Resume / CV</span>
          <input
            type="file"
            name="resume"
            accept=".pdf,.doc,.docx"
            required
            className="block w-full text-sm text-muted file:mr-4 file:rounded-full file:border-0 file:bg-sunken file:px-4 file:py-2.5 file:text-sm file:font-semibold file:text-ink hover:file:bg-line"
          />
          <span className="mt-1.5 flex items-center gap-1.5 text-xs text-faint">
            <Paperclip className="h-3.5 w-3.5" />
            PDF, DOC or DOCX · up to 5 MB
          </span>
        </label>
      </div>

      {error && <p className="mt-4 text-sm text-danger">{error}</p>}

      <button
        type="submit"
        disabled={submitting}
        className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-brand-gradient text-[0.95rem] font-semibold leading-none text-white transition-all hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 sm:w-auto sm:px-8"
      >
        {submitting ? "Sending…" : "Send application"}
        <Send className="h-4 w-4" />
      </button>
      <p className="mt-3 text-xs text-faint">
        Your details and resume are emailed directly to our team. We&apos;ll be in touch if there&apos;s a fit.
      </p>
    </form>
  );
}

const input = {
  className:
    "w-full rounded-xl border border-line bg-surface px-3.5 py-2.5 text-sm text-ink placeholder:text-faint transition-colors focus:border-brand focus:outline-none",
};

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-ink-soft">{label}</span>
      {children}
    </label>
  );
}
