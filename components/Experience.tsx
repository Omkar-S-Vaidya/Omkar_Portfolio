import { experience } from "@/data/site";

export default function ExperienceSection() {
  return (
    <section id="experience" className="section pt-0">
      <p className="section-kicker">Career</p>
      <h2 className="section-title">Experience</h2>

      <div className="relative border-l border-white/10 pl-8">
        {experience.map((job) => (
          <div key={job.company} className="relative mb-12 last:mb-0">
            <span className="absolute -left-[41px] top-1 flex h-5 w-5 items-center justify-center rounded-full border border-accent/40 bg-bg">
              <span className="h-2 w-2 rounded-full bg-accent" />
            </span>

            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-bold text-white">{job.role}</h3>
              <span className="text-sm text-slate-500">{job.period}</span>
            </div>
            <p className="text-accent">
              {job.company} · <span className="text-slate-400">{job.location}</span>
            </p>

            <ul className="mt-4 space-y-2">
              {job.points.map((pt) => (
                <li key={pt} className="flex gap-2 text-sm text-slate-400">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-600" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
