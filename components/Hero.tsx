import { profile, stats } from "@/data/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-5xl px-6 pb-12 pt-20 md:pt-28">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-slate-300 animate-fade-up">
          <span className="h-2 w-2 rounded-full bg-accent" />
          Available for new opportunities · {profile.location}
        </p>

        <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-white animate-fade-up md:text-6xl">
          {profile.name.split(" ").slice(0, 2).join(" ")}{" "}
          <span className="text-slate-500">{profile.name.split(" ").slice(2).join(" ")}</span>
        </h1>

        <p className="mt-4 text-xl font-semibold text-accent animate-fade-up">
          {profile.title}
        </p>

        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-400 animate-fade-up">
          {profile.tagline}
        </p>

        <div className="mt-8 flex flex-wrap gap-4 animate-fade-up">
          <a
            href="#projects"
            className="rounded-full bg-accent px-6 py-3 font-semibold text-bg transition hover:bg-accent/90"
          >
            View my work
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-accent hover:text-accent"
          >
            LinkedIn
          </a>
          {profile.resumeUrl && (
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-accent hover:text-accent"
            >
              Résumé
            </a>
          )}
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-white/10 bg-card/40 p-5 text-center"
            >
              <div className="text-2xl font-bold text-white">{s.value}</div>
              <div className="mt-1 text-sm text-slate-400">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
