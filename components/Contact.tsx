import { profile } from "@/data/site";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-card to-surface p-10 text-center md:p-16">
        <p className="section-kicker">Contact</p>
        <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white md:text-4xl">
          Let&apos;s build something great together
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-slate-400">
          I&apos;m open to full-stack software engineering roles internationally.
          Reach out and I&apos;ll get back to you quickly.
        </p>
        <p className="mx-auto mt-3 max-w-xl text-sm text-accent">
          {profile.availability} · {profile.workAuth}
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full bg-accent px-6 py-3 font-semibold text-bg transition hover:bg-accent/90"
          >
            {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-accent hover:text-accent"
          >
            LinkedIn
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s/g, "")}`}
            className="rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-accent hover:text-accent"
          >
            {profile.phone}
          </a>
        </div>
      </div>

      <footer className="mt-12 text-center text-sm text-slate-600">
        © {profile.name} · Built with Next.js & Tailwind CSS
      </footer>
    </section>
  );
}
