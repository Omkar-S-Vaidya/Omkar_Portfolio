import { skills } from "@/data/site";

export default function Skills() {
  return (
    <section id="skills" className="section pt-0">
      <p className="section-kicker">Skills</p>
      <h2 className="section-title">Tools & technologies</h2>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => (
          <div key={group.title} className="card">
            <h3 className="mb-3 font-semibold text-white">{group.title}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
