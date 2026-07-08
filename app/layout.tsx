import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { profile, siteUrl } from "@/data/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const fullTitle = `${profile.name} — ${profile.title}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: fullTitle,
  description: profile.tagline,
  keywords: [
    "Full-Stack Software Engineer",
    "Software Engineer",
    ".NET",
    "Node.js",
    "React",
    "Next.js",
    "Microservices",
    "Multi-tenant SaaS",
    "AWS",
    "Omkar Vaidya",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: fullTitle,
    description: profile.tagline,
    url: siteUrl,
    siteName: profile.name,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: fullTitle,
    description: profile.tagline,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.title,
  description: profile.summary,
  url: siteUrl,
  email: `mailto:${profile.email}`,
  telephone: profile.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pune",
    addressCountry: "IN",
  },
  sameAs: [profile.linkedin, profile.github].filter(Boolean),
  knowsAbout: [
    ".NET Core",
    "Node.js",
    "React",
    "Next.js",
    "Microservices",
    "Multi-tenant Architecture",
    "AWS",
    "PostgreSQL",
    "MongoDB",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
