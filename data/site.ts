// =============================================================================
//  EDIT THIS FILE to update your portfolio content. No other file needs changes.
// =============================================================================
//
//  NOTE ON METRICS: the numbers below mirror the current résumé. Keep the two
//  in sync when either changes — you'll answer for these figures in interviews.
// =============================================================================

// Your live site URL — used for SEO (canonical links, sitemap, social preview).
// Update this to your final Vercel URL or custom domain.
export const siteUrl = "https://omkar-portfolio-mu-amber.vercel.app";

export const profile = {
  name: "Omkar Sanjay Vaidya",
  title: "Lead Software Engineer",
  location: "Pune, India",
  // Relocation / work-authorization signals for international recruiters.
  availability: "Open to relocation — UK · EU · Singapore · US",
  workAuth: "Requires visa sponsorship",
  tagline:
    "Lead Software Engineer with 3.2+ years designing and building scalable backend services and full-stack web applications using Node.js, .NET Core, React, and Next.js.",
  summary:
    "I focus on backend architecture, distributed microservices, and event-driven systems (AWS Lambda, SQS, SNS, EventBridge), building multi-tenant platforms that serve 120,000+ active customer-portal users across two UK energy suppliers, OTM and HET. I lead the 8-engineer team behind that platform, balancing technical direction with continued hands-on development.",
  email: "omkarvaidya0504@gmail.com",
  phone: "+91 8806061235",
  linkedin: "https://www.linkedin.com/in/omkar-vaidya-54b7a0261/",
  github: "https://github.com/Omkar-S-Vaidya",
  // "/resume" renders the generated, print-to-PDF résumé page. If you drop a
  // PDF at public/Omkar_Vaidya_Resume.pdf, set resumePdf below to prefer it.
  resumeUrl: "/resume",
  resumePdf: "", // e.g. "/Omkar_Vaidya_Resume.pdf" once you add the file to /public
};

export const stats = [
  { value: "3.2+ yrs", label: "Experience" },
  { value: "8", label: "Engineers led" },
  { value: "10+", label: "Backend services built" },
  { value: "120K+", label: "Active portal users" },
];

export type SkillGroup = { title: string; items: string[] };

export const skills: SkillGroup[] = [
  { title: "Languages", items: ["TypeScript", "JavaScript (ES6+)", "C#", "SQL"] },
  {
    title: "Frontend",
    items: ["React.js", "Next.js", "Angular", "Flutter", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Fastify", "Express.js", ".NET Core", "REST APIs", "JWT Authentication"],
  },
  { title: "Databases", items: ["PostgreSQL", "MongoDB", "MySQL"] },
  { title: "Cloud", items: ["AWS Lambda", "SQS", "SNS", "EventBridge", "Azure DevOps"] },
  {
    title: "Architecture",
    items: [
      "Microservices",
      "Distributed Systems",
      "Multi-Tenant SaaS",
      "Event-Driven Architecture",
      "System Design",
    ],
  },
  { title: "Tools", items: ["Git", "GitHub", "CI/CD", "Agile", "Scrum"] },
  {
    title: "Soft Skills",
    items: [
      "Problem Solving",
      "Debugging",
      "Requirement Analysis",
      "Code Review",
      "Technical Leadership",
    ],
  },
];

export type Project = {
  name: string;
  blurb: string;
  highlights: string[];
  stack: string[];
  domain: string;
  // Optional impact row shown on the project card.
  metrics?: { value: string; label: string }[];
};

export const projects: Project[] = [
  {
    name: "UK Energy Multi-Tenant Platform",
    domain: "Energy · Multi-tenant SaaS",
    blurb:
      "A cloud-native, multi-tenant SaaS platform for the UK energy industry delivering 7+ major capabilities across CRM, Customer Portal, Broker Portal, Billing, Pricing, Quotations, and Notifications.",
    highlights: [
      "Designed a distributed microservices architecture that runs 2 energy suppliers — OTM (100K+ users) and HET (20K+ users) — securely on shared infrastructure while maintaining tenant-level data isolation.",
      "Implemented asynchronous communication using AWS Lambda, SQS, SNS, and EventBridge for reliable cross-service workflows.",
      "Built customer portals serving 120,000+ active users across OTM and HET, handling complex billing and quotation workflows.",
    ],
    stack: ["Node.js", "Fastify", "React", "Next.js", "PostgreSQL", "AWS", "Tailwind CSS"],
    metrics: [
      { value: "7+", label: "Major capabilities" },
      { value: "2", label: "Energy suppliers (OTM, HET)" },
      { value: "120K+", label: "Active portal users" },
    ],
  },
  {
    name: "Enterprise Multi-Tenant CRM",
    domain: "CRM · Enterprise",
    blurb: "A tenant-isolated CRM supporting multiple organizations from a shared platform.",
    highlights: [
      "Designed a tenant-isolated architecture supporting multiple organizations from a shared platform.",
      "Optimized database queries, reducing response time by approximately 40%.",
    ],
    stack: ["Flutter", ".NET Core", "MongoDB", "Azure DevOps"],
  },
  {
    name: "Activity Planner",
    domain: "Hospitality · Real-time",
    blurb:
      "A real-time resort management platform supporting employee scheduling, guest management, and event operations.",
    highlights: [
      "Developed real-time workflows for employee scheduling, guest management, and event operations.",
      "Designed concurrent workflows supporting over 100 simultaneous users.",
    ],
    stack: ["Flutter", ".NET Core", "MongoDB"],
  },
  {
    name: "VFS Finland Document Verification",
    domain: "GovTech · Security",
    blurb:
      "Secure document verification workflows for a government-facing application with high reliability and data integrity.",
    highlights: [
      "Developed secure document verification workflows with high reliability and data integrity.",
      "Maintained 99.9% production uptime through fault-tolerant backend design.",
    ],
    stack: ["Angular", ".NET Core", "MySQL"],
  },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  // Optional line for in-company promotions, shown under the company name.
  progression?: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    role: "Lead Software Engineer",
    company: "Centralogic",
    period: "July 2023 – Present",
    location: "Pune, India",
    progression:
      "Lead Software Engineer (Sep 2024 – Present) · Software Engineer (Jul 2023 – Sep 2024)",
    points: [
      "Designed and developed 10+ enterprise-grade backend services and web application modules using Node.js, .NET Core, React, Next.js, Angular, PostgreSQL, and MongoDB.",
      "Built scalable, multi-tenant SaaS platforms using a distributed microservices architecture, enabling independently deployable services across multiple enterprise applications and contributing to an estimated 30% improvement in maintainability and deployment efficiency.",
      "Implemented event-driven communication using AWS Lambda, SQS, SNS, and EventBridge to decouple services and handle long-running billing and notification workflows asynchronously.",
      "Designed and integrated 20+ secure REST API endpoints with authentication, authorization, validation, centralized error handling, and role-based access controls.",
      "Led a cross-functional team of 8 engineers on the UK Energy multi-tenant SaaS platform (120K+ active users across OTM and HET), owning task delegation and technical direction while remaining primarily hands-on with backend development.",
      "Collaborated with cross-functional engineering, QA, product, and business teams across requirements, architecture, development, deployment, and production support for 4+ enterprise projects.",
      "Performed code reviews and optimized backend services, API performance, and database access patterns, including improvements that reduced response times by up to 40% in performance-critical workflows.",
    ],
  },
  {
    role: "Full Stack Developer Intern",
    company: "Wibyng Technologies Pvt. Ltd.",
    period: "Internship",
    location: "India",
    points: [
      "Developed backend functionality across 3 interconnected enterprise modules: CRM, Vendor Portal, and Customer Portal.",
      "Built 10+ product management, vendor management, and administrative workflows using PHP and CodeIgniter.",
      "Improved multi-role authentication and business workflows across interconnected systems, enabling approximately 25% faster workflow processing across 5+ streamlined business workflows.",
    ],
  },
];

export type Education = { degree: string; school: string; period: string; detail?: string };

export const education: Education[] = [
  {
    degree: "Master of Computer Applications (MCA)",
    school: "Pratibha Institute of Business Management, Pune",
    period: "2023 – 2025",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    school: "Indira College of Commerce and Science, Pune",
    period: "2020 – 2023",
    detail: "CGPA: 8.89",
  },
];

export const certifications = [
  "Microsoft Azure Fundamentals (AZ-900)",
  "Full Stack Web Development — React, Node.js, REST APIs",
  ".NET Core & Web API Development",
  "MongoDB & NoSQL Database Design",
  "Modern JavaScript (ES6+) & TypeScript",
  "Clean Code & Scalable Architecture Practices",
];
