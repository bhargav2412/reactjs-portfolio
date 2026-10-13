import { navLinks, profile, socials } from "../../data/site";
import Container from "../ui/Container";
import Icon from "../ui/Icon";
import Logo from "../ui/Logo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <Container className="py-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {profile.name} — {profile.role.toLowerCase()} based in {profile.location}, building fast and scalable web
              products.
            </p>
            <ul className="mt-6 flex gap-3">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    aria-label={social.label}
                    className="grid size-10 place-items-center rounded-full border border-border text-muted transition-colors hover:border-fg/30 hover:text-fg"
                  >
                    <Icon name={social.icon} className="size-[18px]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Footer">
            <p className="text-sm font-semibold">Navigate</p>
            <ul className="mt-4 grid grid-cols-2 gap-x-10 gap-y-3 text-sm text-muted sm:grid-cols-3 md:grid-cols-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`} className="transition-colors hover:text-fg">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col-reverse items-start justify-between gap-4 border-t border-border pt-6 text-sm text-muted sm:flex-row sm:items-center">
          <p>
            © {year} {profile.name}. All rights reserved.
          </p>
          <a href="#home" className="inline-flex items-center gap-2 transition-colors hover:text-fg">
            Back to top
            <Icon name="arrowUp" className="size-4" />
          </a>
        </div>
      </Container>
    </footer>
  );
}
