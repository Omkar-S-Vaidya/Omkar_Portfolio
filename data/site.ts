// =============================================================================
//  EDIT THIS FILE to update your portfolio content. No other file needs changes.
// =============================================================================
//
//  NOTE ON METRICS: the numbers below (tenants, requests/day, uptime %, etc.)
//  are CONSERVATIVE ESTIMATES filled in as a starting point. VERIFY each one
//  against your real experience and adjust before sharing — you'll answer for
//  these figures in interviews.
// =============================================================================

// Your live site URL — used for SEO (canonical links, sitemap, social preview).
// Update this to your final Vercel URL or custom domain.
export const siteUrl = "https://omkar-portfolio-mu-amber.vercel.app";

export const profile = {
  name: "Omkar Sanjay Vaidya",
  title: "Full-Stack Software Engineer",
  location: "Pune, India",
  // Relocation / work-authorization signals for international recruiters.
  availability: "Open to relocation — UK · EU · Singapore · US",
  workAuth: "Requires visa sponsorship",
  tagline:
    "Full-stack software engineer with ~3 years building scalable, high-performance systems across energy, CRM, and enterprise SaaS — from distributed backends to production-grade frontends.",
  summary:
    "I design distributed systems, multi-tenant architectures, and high-throughput backend services using .NET, Node.js, and modern frontend frameworks like React and Next.js. I own features end-to-end — from requirement gathering through deployment and monitoring — and build fault-tolerant systems that hold up in production. I'm now looking to bring that experience to product-focused teams abroad.",
  email: "omkarvaidya0504@gmail.com",
  phone: "+91 8806061235",
  linkedin: "https://www.linkedin.com/in/omkar-vaidya-54b7a0261/",
  // Optional — add your GitHub URL here if you want it shown:
  github: "",
  // "/resume" renders the generated, print-to-PDF résumé page. If you drop a
  // PDF at public/Omkar_Vaidya_Resume.pdf, set resumePdf below to prefer it.
  resumeUrl: "/resume",
  resumePdf: "", // e.g. "/Omkar_Vaidya_Resume.pdf" once you add the file to /public
};

export const stats = [
  { value: "~3 yrs", label: "Experience" },
  { value: "5+", label: "Tech stacks" },
  { value: "10+", label: "Enterprise projects" },
  { value: "Multi-tenant", label: "Architecture focus" },
];

export type SkillGroup = { title: string; items: string[] };

export const skills: SkillGroup[] = [
  { title: "Languages", items: ["C#", "JavaScript", "TypeScript"] },
  { title: "Frontend", items: ["React", "Next.js", "Angular", "Tailwind CSS"] },
  { title: "Backend", items: [".NET Core", "Node.js", "REST APIs", "Fastify"] },
  { title: "Databases", items: ["PostgreSQL", "MongoDB", "MySQL"] },
  {
    title: "Architecture",
    items: ["Distributed Systems", "Microservices", "Multi-Tenant Architecture"],
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS (Lambda, SQS, SNS, EventBridge)", "Azure DevOps", "CI/CD"],
  },
  {
    title: "Practices",
    items: ["Agile / Scrum", "Git", "Code Reviews", "Performance Optimization"],
  },
];

export type Project = {
  name: string;
  blurb: string;
  highlights: string[];
  stack: string[];
  domain: string;
  // Optional impact row — replace bracketed placeholders with real numbers.
  metrics?: { value: string; label: string }[];
};

export const projects: Project[] = [
  {
    name: "UK Energy Sector Platform",
    domain: "Energy · Multi-tenant SaaS",
    blurb:
      "A multi-tenant platform for the UK energy market built on a microservices architecture — CRM, customer portal, and broker portal sharing a suite of backend services (pricing, billing, accounts, quotation, notifications).",
    highlights: [
      "Designed a multi-tenant architecture that let 5+ organizations onboard with customizable workflows from a shared platform.",
      "Built event-driven backend services (SQS/SNS/EventBridge) that process 10K+ requests/day with resilient async communication across services.",
      "Delivered customer- and broker-facing portals handling complex real-world billing and quotation logic used by 500+ users.",
    ],
    stack: [
      "React",
      "Next.js",
      "Node.js",
      "Fastify",
      "PostgreSQL",
      "AWS (Lambda, SQS, SNS, EventBridge)",
      "Tailwind CSS",
    ],
    metrics: [
      { value: "5+", label: "Tenants onboarded" },
      { value: "8", label: "Backend services" },
      { value: "10K+", label: "Requests/day" },
    ],
  },
  {
    name: "Multi-Tenant CRM Platform",
    domain: "CRM · Enterprise",
    blurb:
      "A scalable multi-tenant CRM supporting multiple organizations with high-volume data processing.",
    highlights: [
      "Architected tenant isolation and shared services so 10+ organizations run securely from one platform.",
      "Optimized high-volume data operations, cutting key query/response times by ~40% and enabling faster org onboarding.",
    ],
    stack: ["Flutter", ".NET", "MongoDB", "Azure DevOps"],
  },
  {
    name: "Activity Planner (Resort Management)",
    domain: "Hospitality · Real-time",
    blurb:
      "A real-time resort management system handling concurrent operations across events, employees, and guest workflows.",
    highlights: [
      "Implemented dynamic scheduling and operational workflows across events, staff, and guests.",
      "Handled concurrent, real-time operations reliably for 100+ simultaneous users/events.",
    ],
    stack: ["Flutter", ".NET", "MongoDB", "Azure DevOps"],
  },
  {
    name: "VFS Finland — Document Verification",
    domain: "GovTech · Security",
    blurb:
      "A secure, fault-tolerant document processing platform built around data integrity and reliability.",
    highlights: [
      "Built secure document workflows with strong data-integrity guarantees for a government-facing use case.",
      "Focused on fault tolerance and reliable processing, sustaining 99.9% uptime in production.",
    ],
    stack: ["Angular", ".NET", "MySQL", "Azure DevOps"],
  },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    role: "Software Engineer",
    company: "Centralogic",
    period: "July 2023 – Present",
    location: "Pune, India",
    points: [
      "Deliver features across 6+ enterprise-grade applications spanning different domains and tech stacks (.NET, Node.js, React, Angular).",
      "Own features end-to-end — from requirement gathering through deployment and production monitoring.",
      "Design and build systems on modular, distributed architecture principles, including multi-tenant SaaS and event-driven services.",
      "Collaborate with cross-functional teams; drive code reviews, design discussions, and performance optimizations.",
    ],
  },
  {
    role: "Full Stack Developer Intern",
    company: "Wibyng Technologies Pvt. Ltd.",
    period: "6-Month Internship",
    location: "India",
    points: [
      "Built backend features for a multi-platform e-commerce ecosystem of three interconnected systems: customer portal, CRM, and vendor portal.",
      "Developed vendor-management and product-handling features using CodeIgniter (PHP).",
      "Contributed to a complex, multi-role architecture serving distinct user types.",
    ],
  },
];

export const education = {
  degree: "Bachelor of Computer Applications (BCA)",
  school: "Indira College of Commerce and Science",
  detail: "CGPA: 8.89",
};

export const certifications = [
  "Microsoft Azure Fundamentals (AZ-900) — In progress",
  "Full Stack Web Development — React, Node.js, REST APIs",
  ".NET Core & Web API Development",
  "MongoDB & NoSQL Database Design",
  "Modern JavaScript (ES6+) & TypeScript",
  "Clean Code & Scalable Architecture Practices",
];
