import { projects } from "@/data/site";

export default function Projects() {
  return (
    <section id="projects" className="section pt-0">
      <p className="section-kicker">Work</p>
      <h2 className="section-title">Featured projects</h2>
      <p className="mb-10 max-w-2xl text-slate-400">
        Selected enterprise projects. Code and product details are kept
        confidential — these case studies focus on architecture, my role, and
        impact.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <article key={p.name} className="card flex flex-col">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent2">
              {p.domain}
            </p>
            <h3 className="mt-2 text-xl font-bold text-white">{p.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              {p.blurb}
            </p>

            <ul className="mt-4 space-y-2">
              {p.highlights.map((h) => (
                <li key={h} className="flex gap-2 text-sm text-slate-300">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-2 border-t border-white/5 pt-4">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-md bg-white/5 px-2 py-1 text-xs text-slate-400"
                >
                  {s}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
