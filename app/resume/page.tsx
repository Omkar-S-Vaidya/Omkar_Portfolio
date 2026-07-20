"use client";

import Link from "next/link";
import {
  profile,
  skills,
  projects,
  experience,
  education,
  certifications,
  siteUrl,
} from "@/data/site";

export default function ResumePage() {
  return (
    <div className="resume-page min-h-screen bg-slate-100 py-10 text-slate-900">
      {/* Toolbar — hidden when printing */}
      <div className="no-print mx-auto mb-6 flex max-w-[820px] items-center justify-between px-6">
        <Link href="/" className="text-sm font-semibold text-slate-600 hover:text-slate-900">
          ← Back to site
        </Link>
        <button
          onClick={() => window.print()}
          className="rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
        >
          Download / Print PDF
        </button>
      </div>

      {/* Résumé sheet */}
      <article className="resume-sheet mx-auto max-w-[820px] bg-white px-10 py-10 text-[13px] leading-relaxed shadow-sm md:px-14 md:py-12">
        {/* Header */}
        <header className="border-b border-slate-300 pb-4">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            {profile.name}
          </h1>
          <p className="mt-1 text-lg font-semibold text-slate-700">
            {profile.title}
          </p>
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-[12px] text-slate-600">
            <span>{profile.location}</span>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href={siteUrl} target="_blank" rel="noopener noreferrer">
              Portfolio
            </a>
            {profile.github && (
              <a href={profile.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            )}
          </div>
          <p className="mt-2 text-[12px] font-medium text-slate-700">
            {profile.workAuth} · {profile.availability}
          </p>
        </header>

        {/* Summary */}
        <Section title="Summary">
          <p className="text-slate-700">{profile.summary}</p>
        </Section>

        {/* Skills */}
        <Section title="Skills">
          <ul className="space-y-1">
            {skills.map((g) => (
              <li key={g.title} className="text-slate-700">
                <span className="font-semibold text-slate-900">{g.title}: </span>
                {g.items.join(", ")}
              </li>
            ))}
          </ul>
        </Section>

        {/* Experience */}
        <Section title="Experience">
          <div className="space-y-4">
            {experience.map((job) => (
              <div key={`${job.company}-${job.role}`}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-2">
                  <h3 className="font-semibold text-slate-900">
                    {job.role} · {job.company}
                  </h3>
                  <span className="text-[12px] text-slate-500">{job.period}</span>
                </div>
                <p className="text-[12px] italic text-slate-500">{job.location}</p>
                <ul className="mt-1 list-disc space-y-1 pl-5 text-slate-700">
                  {job.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Projects */}
        <Section title="Selected Projects">
          <div className="space-y-3">
            {projects.map((p) => (
              <div key={p.name}>
                <h3 className="font-semibold text-slate-900">
                  {p.name}{" "}
                  <span className="font-normal text-slate-500">— {p.domain}</span>
                </h3>
                <p className="text-slate-700">{p.blurb}</p>
                <ul className="mt-1 list-disc space-y-0.5 pl-5 text-slate-700">
                  {p.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
                <p className="mt-1 text-[12px] text-slate-500">
                  <span className="font-semibold">Stack:</span> {p.stack.join(", ")}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* Education */}
        <Section title="Education">
          <p className="text-slate-700">
            <span className="font-semibold text-slate-900">{education.degree}</span>
            {" — "}
            {education.school} · {education.detail}
          </p>
        </Section>

        {/* Certifications */}
        <Section title="Certifications & Learning">
          <ul className="list-disc space-y-1 pl-5 text-slate-700">
            {certifications.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </Section>
      </article>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="resume-section mt-5">
      <h2 className="mb-2 border-b border-slate-200 pb-1 text-[13px] font-bold uppercase tracking-widest text-slate-800">
        {title}
      </h2>
      {children}
    </section>
  );
}
