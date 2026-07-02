import Link from "next/link";
import { profile } from "@/data/site";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-bg/70 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="#" className="text-lg font-bold text-white">
          Omkar<span className="text-accent">.</span>
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-slate-400 transition hover:text-white"
            >
              {l.label}
            </Link>
          ))}
        </div>
        <a
          href={`mailto:${profile.email}`}
          className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-bg transition hover:bg-accent/90"
        >
          Get in touch
        </a>
      </nav>
    </header>
  );
}
