"use client";

import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { serviceOptions } from "@/config/services";
import { contact } from "@/config/site";
import { cn } from "@/lib/utils";

type Form = {
  fullName: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  message: string;
};

const empty: Form = { fullName: "", email: "", company: "", phone: "", service: "", message: "" };

export function ContactForm() {
  const [form, setForm] = useState<Form>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Form, string>>>({});
  const [sent, setSent] = useState(false);

  const set = (k: keyof Form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  function validate(f: Form) {
    const next: Partial<Record<keyof Form, string>> = {};
    if (f.fullName.trim().length < 2) next.fullName = "Please enter your name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim())) next.email = "Enter a valid email";
    if (!f.service) next.service = "Select a service";
    if (f.message.trim().length < 10) next.message = "Tell us a little more";
    return next;
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const next = validate(form);
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    const body = [
      `Name: ${form.fullName}`,
      `Email: ${form.email}`,
      `Company: ${form.company || "—"}`,
      `Phone: ${form.phone || "—"}`,
      `Service: ${form.service}`,
      "",
      "Message:",
      form.message,
    ].join("\n");
    const mailto = `mailto:${contact.email}?subject=${encodeURIComponent(
      `New enquiry from ${form.fullName} — ${form.service}`,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-line bg-surface p-10 text-center">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-success/10 text-success">
          <CheckCircle2 className="h-7 w-7" />
        </span>
        <h3 className="mt-5 text-xl font-semibold">Your email is ready to send.</h3>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
          We&apos;ve opened a pre-filled email in your mail app. Just hit send. If nothing opened,
          write to us directly at{" "}
          <a href={`mailto:${contact.email}`} className="font-medium text-brand hover:underline">
            {contact.email}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-2xl border border-line bg-surface p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" error={errors.fullName}>
          <input {...inputProps} value={form.fullName} onChange={set("fullName")} placeholder="Jane Doe" />
        </Field>
        <Field label="Business email" error={errors.email}>
          <input {...inputProps} type="email" value={form.email} onChange={set("email")} placeholder="jane@company.com" />
        </Field>
        <Field label="Company (optional)">
          <input {...inputProps} value={form.company} onChange={set("company")} placeholder="Company Pvt Ltd" />
        </Field>
        <Field label="Phone (optional)">
          <input {...inputProps} type="tel" value={form.phone} onChange={set("phone")} placeholder="+91 90000 00000" />
        </Field>
        <Field label="Service interested in" error={errors.service} className="sm:col-span-2">
          <select {...inputProps} value={form.service} onChange={set("service")}>
            <option value="">Select a service</option>
            {serviceOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="mt-5">
        <Field label="How can we help?" error={errors.message}>
          <textarea
            {...inputProps}
            value={form.message}
            onChange={set("message")}
            rows={5}
            placeholder="What are you trying to build or fix? What does success look like?"
            className={cn(inputProps.className, "resize-y")}
          />
        </Field>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-brand-gradient text-[0.95rem] font-semibold text-white transition-all hover:-translate-y-0.5 sm:w-auto sm:px-8"
      >
        Send message
        <Send className="h-4 w-4" />
      </button>
      <p className="mt-3 text-xs text-faint">We&apos;ll only use your details to respond to this enquiry.</p>
    </form>
  );
}

const inputProps = {
  className:
    "w-full rounded-xl border border-line bg-surface px-3.5 py-2.5 text-sm text-ink placeholder:text-faint transition-colors focus:border-brand focus:outline-none",
};

function Field({
  label,
  error,
  className,
  children,
}: {
  label: string;
  error?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={cn("block", className)}>
      <span className="mb-1.5 block text-sm font-medium text-ink-soft">{label}</span>
      {children}
      {error && <span className="mt-1.5 block text-xs text-danger">{error}</span>}
    </label>
  );
}
