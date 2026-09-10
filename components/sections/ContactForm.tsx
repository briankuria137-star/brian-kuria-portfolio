"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";

interface FormValues {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (!values.name.trim()) {
    errors.name = "Enter your name.";
  }

  if (!values.email.trim()) {
    errors.email = "Enter your email.";
  } else if (!emailPattern.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  if (!values.message.trim()) {
    errors.message = "Enter a message.";
  } else if (values.message.trim().length < 10) {
    errors.message = "Say a little more — at least 10 characters.";
  }

  return errors;
}

/**
 * No backend is connected yet. Submitting validates the form and shows a
 * clear "not connected" state rather than pretending to send anything.
 * Wire this up to a real email service or API route in Phase 2.
 */
export function ContactForm() {
  const [values, setValues] = useState<FormValues>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "no-backend">("idle");

  function handleChange(field: keyof FormValues, value: string) {
    setStatus("idle");
    setValues((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      setStatus("no-backend");
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-foreground">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          value={values.name}
          onChange={(e) => handleChange("name", e.target.value)}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          className="mt-2 w-full rounded border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none focus:border-primary"
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-xs text-red-700">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-foreground">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={(e) => handleChange("email", e.target.value)}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          className="mt-2 w-full rounded border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none focus:border-primary"
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-xs text-red-700">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={(e) => handleChange("message", e.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="mt-2 w-full resize-none rounded border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none focus:border-primary"
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-xs text-red-700">
            {errors.message}
          </p>
        )}
      </div>

      <Button type="submit" variant="primary" className="self-start">
        Send Message
      </Button>

      {status === "no-backend" && (
        <p role="status" className="text-sm text-muted">
          This form isn&rsquo;t connected to an email service yet — nothing was
          sent. In the meantime, reach out directly using the details on the
          left.
        </p>
      )}
    </form>
  );
}
