import { useEffect, useState } from "react";
import { navLinks } from "../../data/site";
import useActiveSection from "../../hooks/useActiveSection";
import useTheme from "../../hooks/useTheme";
import Container from "../ui/Container";
import Icon from "../ui/Icon";
import Logo from "../ui/Logo";

const sectionIds = navLinks.map((link) => link.id);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(sectionIds);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on Escape or when growing to desktop width.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const desktop = window.matchMedia("(min-width: 768px)");
    const onResize = (e) => e.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onResize);
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        solid ? "border-border bg-bg/80 backdrop-blur-xl" : "border-transparent"
      }`}
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        <Logo />

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1 rounded-full border border-border bg-surface/60 p-1 backdrop-blur">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  aria-current={active === link.id ? "true" : undefined}
                  className={`block rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                    active === link.id ? "bg-fg text-bg" : "text-muted hover:text-fg"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="grid size-10 place-items-center rounded-full border border-border bg-surface/60 text-muted transition-colors hover:text-fg"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            <Icon name={theme === "dark" ? "sun" : "moon"} className="size-[18px]" />
          </button>
          <a
            href="#contact"
            className="hidden rounded-full bg-fg px-5 py-2.5 text-sm font-semibold text-bg transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            Let's talk
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-full border border-border bg-surface/60 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <Icon name={open ? "close" : "menu"} className="size-5" />
          </button>
        </div>
      </Container>

      <div
        id="mobile-menu"
        className={`grid transition-[grid-template-rows] duration-300 md:hidden ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
        inert={!open}
      >
        <nav aria-label="Mobile" className="overflow-hidden">
          <Container className="pb-6">
            <ul className="flex flex-col gap-1 border-t border-border pt-4">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setOpen(false)}
                    aria-current={active === link.id ? "true" : undefined}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                      active === link.id ? "bg-surface-2 text-fg" : "text-muted hover:bg-surface-2 hover:text-fg"
                    }`}
                  >
                    {link.label}
                    <Icon name="arrowRight" className="size-4 opacity-50" />
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 flex justify-center rounded-full bg-fg px-5 py-3 text-sm font-semibold text-bg sm:hidden"
            >
              Let's talk
            </a>
          </Container>
        </nav>
      </div>
    </header>
  );
}
