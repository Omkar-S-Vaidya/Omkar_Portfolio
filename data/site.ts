// =============================================================================
//  EDIT THIS FILE to update your portfolio content. No other file needs changes.
// =============================================================================

export const profile = {
  name: "Omkar Sanjay Vaidya",
  title: "Senior Software Engineer",
  location: "Pune, India",
  tagline:
    "Senior Software Engineer with ~3 years building scalable, high-performance full-stack systems across CRM, energy, and enterprise platforms.",
  summary:
    "I design distributed systems, multi-tenant architectures, and high-throughput backend services using .NET, Node.js, and modern frontend frameworks like React and Next.js. I enjoy owning features end-to-end — from requirement gathering through deployment and monitoring — and building fault-tolerant systems that hold up in production.",
  email: "omkarvaidya0504@gmail.com",
  phone: "+91 8806061235",
  linkedin: "https://www.linkedin.com/in/omkar-vaidya-54b7a0261/",
  // Optional — add your GitHub URL here if you want it shown:
  github: "",
  resumeUrl: "", // e.g. "/Omkar_Vaidya_Resume.pdf" once you drop the PDF in /public
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
];

export type Project = {
  name: string;
  blurb: string;
  highlights: string[];
  stack: string[];
  domain: string;
};

export const projects: Project[] = [
  {
    name: "UK Energy Sector Platform",
    domain: "Energy · Multi-tenant SaaS",
    blurb:
      "A multi-tenant platform for the UK energy market built on a microservices architecture — CRM, customer portal, and broker portal sharing a suite of backend services (pricing, billing, accounts, quotation, notifications).",
    highlights: [
      "Designed a multi-tenant architecture letting multiple organizations onboard with customizable workflows.",
      "Built high-throughput backend services with event-driven communication across services.",
      "Delivered customer-facing and broker-facing portals handling complex real-world business logic.",
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
  },
  {
    name: "Multi-Tenant CRM Platform",
    domain: "CRM · Enterprise",
    blurb:
      "A scalable multi-tenant CRM supporting multiple organizations with high-volume data processing.",
    highlights: [
      "Architected the system to isolate and serve multiple tenants from a shared platform.",
      "Optimized for high data-volume operations and scalable organization onboarding.",
    ],
    stack: ["Flutter", ".NET", "MongoDB", "Azure DevOps"],
  },
  {
    name: "Activity Planner (Resort Management)",
    domain: "Hospitality · Real-time",
    blurb:
      "A real-time resort management system handling concurrent operations across events, employees, and guest workflows.",
    highlights: [
      "Implemented dynamic scheduling and operational workflows.",
      "Handled concurrent, real-time operations reliably.",
    ],
    stack: ["Flutter", ".NET", "MongoDB", "Azure DevOps"],
  },
  {
    name: "VFS Finland — Document Verification",
    domain: "GovTech · Security",
    blurb:
      "A secure, fault-tolerant document processing platform built around data integrity and reliability.",
    highlights: [
      "Built secure document workflows ensuring data integrity.",
      "Focused on fault tolerance and reliable processing in production.",
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
    role: "Senior Software Engineer",
    company: "Centralogic",
    period: "July 2023 – Present",
    location: "Pune, India",
    points: [
      "Work across multiple enterprise-grade applications spanning different domains and tech stacks.",
      "Own features end-to-end — from requirement gathering through deployment and monitoring.",
      "Build systems following modular and distributed architecture principles.",
      "Collaborate with cross-functional teams; participate in code reviews, design discussions, and performance optimizations.",
    ],
  },
  {
    role: "Full Stack Developer Intern",
    company: "Wibyng Technologies Pvt. Ltd.",
    period: "6-Month Internship",
    location: "India",
    points: [
      "Worked on a multi-platform e-commerce ecosystem of three interconnected systems: customer portal, CRM, and vendor portal.",
      "Built backend features for vendor management and product handling using CodeIgniter (PHP).",
      "Contributed to a complex architecture involving multiple user roles.",
    ],
  },
];

export const education = {
  degree: "Bachelor of Computer Applications (BCA)",
  school: "Indira College of Commerce and Science",
  detail: "CGPA: 8.89",
};

export const certifications = [
  "Microsoft Azure Fundamentals (AZ-900) — Pursuing",
  "Full Stack Web Development — React, Node.js, REST APIs",
  ".NET Core & Web API Development",
  "MongoDB & NoSQL Database Design",
  "Modern JavaScript (ES6+) & TypeScript",
  "Clean Code & Scalable Architecture Practices",
];
