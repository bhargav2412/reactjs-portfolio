import { useState } from "react";
import { contactForm, profile } from "../../data/site";
import Button from "../ui/Button";
import Container from "../ui/Container";
import Icon from "../ui/Icon";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

const contactItems = [
  { icon: "mail", label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: "phone", label: "Phone", value: profile.phone, href: profile.phoneHref },
  { icon: "mapPin", label: "Location", value: profile.location },
];

const fieldClasses =
  "w-full rounded-xl border border-border bg-bg px-4 py-3 text-base text-fg placeholder:text-muted/70 transition-colors focus:border-ring focus:outline-none focus:ring-4 focus:ring-ring/15";

const messages = {
  success: { icon: "checkCircle", tone: "text-emerald-600 dark:text-emerald-400", text: "Thanks! Your message has been sent — I'll get back to you soon." },
  error: { icon: "alertCircle", tone: "text-red-600 dark:text-red-400", text: "Something went wrong. Please try again or email me directly." },
};

export default function Contact() {
  const [status, setStatus] = useState("idle");

  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("submitting");

    const data = Object.fromEntries(new FormData(form));
    data.access_key = contactForm.accessKey;
    data.subject = `New portfolio enquiry from ${data.name}`;

    try {
      const res = await fetch(contactForm.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!json.success) throw new Error(json.message);
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const submitting = status === "submitting";
  const message = messages[status];

  return (
    <section id="contact" aria-labelledby="contact-title" className="relative isolate overflow-hidden py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="bg-brand absolute bottom-0 left-1/2 -z-10 h-72 w-[40rem] -translate-x-1/2 translate-y-1/2 rounded-full opacity-15 blur-[120px]"
      />
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <SectionHeading
            id="contact-title"
            eyebrow="Contact"
            title="Let's build something great together."
            description="I'm currently open to new opportunities and collaborations. Tell me about your project and I'll reply within a day."
          />
          <Reveal as="ul" className="mt-10 space-y-3">
            {contactItems.map((item) => {
              const content = (
                <>
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-border bg-surface-2 text-accent">
                    <Icon name={item.icon} className="size-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm text-muted">{item.label}</span>
                    <span className="block truncate font-medium">{item.value}</span>
                  </span>
                </>
              );
              const classes = "flex items-center gap-4 rounded-2xl border border-border bg-surface p-4";
              return (
                <li key={item.label}>
                  {item.href ? (
                    <a href={item.href} className={`${classes} transition-colors hover:border-fg/20`}>
                      {content}
                    </a>
                  ) : (
                    <div className={classes}>{content}</div>
                  )}
                </li>
              );
            })}
          </Reveal>
        </div>

        <Reveal delay={100}>
          <form
            onSubmit={onSubmit}
            className="rounded-3xl border border-border bg-surface p-6 shadow-xl shadow-black/5 sm:p-8"
            aria-describedby="form-status"
          >
            {/* Honeypot field for spam bots (Web3Forms convention) */}
            <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="mb-2 block text-sm font-medium">
                  Name
                </label>
                <input id="contact-name" name="name" type="text" autoComplete="name" required placeholder="Your name" className={fieldClasses} />
              </div>
              <div>
                <label htmlFor="contact-email" className="mb-2 block text-sm font-medium">
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="you@company.com"
                  className={fieldClasses}
                />
              </div>
            </div>
            <div className="mt-5">
              <label htmlFor="contact-message" className="mb-2 block text-sm font-medium">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={6}
                required
                placeholder="Tell me a little about your project, goals and timeline…"
                className={`${fieldClasses} resize-y`}
              />
            </div>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <Button type="submit" disabled={submitting} className="sm:w-auto">
                {submitting ? (
                  <>
                    <Icon name="loader" className="size-4 animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    Send message
                    <Icon name="send" className="size-4" />
                  </>
                )}
              </Button>
              <p id="form-status" role="status" aria-live="polite" className={`flex items-start gap-2 text-sm ${message?.tone ?? ""}`}>
                {message && (
                  <>
                    <Icon name={message.icon} className="mt-0.5 size-4 shrink-0" />
                    {message.text}
                  </>
                )}
              </p>
            </div>
          </form>
        </Reveal>
      </Container>
    </section>
  );
}
