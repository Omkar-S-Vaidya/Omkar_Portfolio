import { profile, education, certifications } from "@/data/site";

export default function About() {
  return (
    <section id="about" className="section">
      <p className="section-kicker">About</p>
      <h2 className="section-title">Building systems that scale</h2>

      <div className="grid gap-10 md:grid-cols-3">
        <p className="text-lg leading-relaxed text-slate-400 md:col-span-2">
          {profile.summary}
        </p>

        <div className="space-y-6">
          <div className="card">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-accent">
              Education
            </h3>
            {education.map((e) => (
              <div key={e.degree} className="mt-3 first:mt-2">
                <p className="font-semibold text-white">{e.degree}</p>
                <p className="text-sm text-slate-400">{e.school}</p>
                <p className="text-sm text-slate-500">
                  {e.period}
                  {e.detail && ` · ${e.detail}`}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
          Courses & Certifications
        </h3>
        <div className="flex flex-wrap gap-2">
          {certifications.map((c) => (
            <span key={c} className="chip">
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
