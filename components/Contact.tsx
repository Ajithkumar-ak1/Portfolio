"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/Ajithkumar-ak1" },
  { label: "LinkedIn", href: "https://linkedin.com/in/ajithkumarai" },
  { label: "LeetCode", href: "https://leetcode.com/u/ajithkumar_official" },
  { label: "Codeforces", href: "https://codeforces.com/profile/ajithkumar_official", },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);
    setStatus("");

    try {
      const response = await fetch(
        "https://formspree.io/f/maeyrkgj",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      if (response.ok) {
        setStatus("Message sent successfully!");

        setForm({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <Reveal>
          <p className="eyebrow mb-4">[ Contact ]</p>
        </Reveal>

        <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-16">
          <div>
            <Reveal>
              <h2 className="font-serif text-4xl md:text-5xl font-medium text-paper tracking-tight">
                Let&rsquo;s talk.
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 text-fog text-lg leading-relaxed max-w-sm">
                Hiring for a backend or full-stack SDE role, or just want to
                talk system design? I&rsquo;d love to hear from you. I graduated
                in April 2026 and I&rsquo;m ready to start now.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-10 space-y-3">
                <a
                  href="mailto:ajithkumar.proff@gmail.com"
                  className="block text-paper font-mono text-sm underline-link w-fit"
                >
                  ajithkumar.proff@gmail.com
                </a>

                <p className="text-fog font-mono text-sm">
                  Coimbatore, India
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="mt-8 flex flex-wrap gap-4">
                {SOCIALS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-fog hover:text-indigo transition-colors underline-link"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="font-mono text-xs uppercase tracking-wider text-fog">
                  Name
                </label>

                <input
                  required
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  className="mt-2 w-full bg-transparent border-b border-line focus:border-indigo outline-none py-2 text-paper placeholder:text-fog/50 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="font-mono text-xs uppercase tracking-wider text-fog">
                  Email
                </label>

                <input
                  required
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  className="mt-2 w-full bg-transparent border-b border-line focus:border-indigo outline-none py-2 text-paper placeholder:text-fog/50 transition-colors"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label className="font-mono text-xs uppercase tracking-wider text-fog">
                  Message
                </label>

                <textarea
                  required
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="mt-2 w-full bg-transparent border-b border-line focus:border-indigo outline-none py-2 text-paper placeholder:text-fog/50 transition-colors resize-none"
                  placeholder="What are you building?"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-4 px-6 py-3 rounded-full bg-paper text-ink text-sm font-semibold hover:bg-indigo hover:text-paper transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send message"}
              </button>

              {status && (
                <p className="text-fog text-xs">
                  {status}
                </p>
              )}

              {!status && (
                <p className="text-fog/70 text-xs">
                  Your message will be sent directly to my inbox.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}