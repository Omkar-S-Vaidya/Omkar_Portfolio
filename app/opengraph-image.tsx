import { ImageResponse } from "next/og";
import { profile } from "@/data/site";

// Route segment config
export const runtime = "edge";
export const alt = `${profile.name} — ${profile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Brand colors mirror tailwind.config.ts (bg / accent teal / accent2 sky).
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0a0f1a",
          backgroundImage:
            "linear-gradient(135deg, rgba(45,212,191,0.18) 0%, rgba(10,15,26,0) 45%), linear-gradient(300deg, rgba(56,189,248,0.14) 0%, rgba(10,15,26,0) 50%)",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "56px",
              height: "56px",
              borderRadius: "16px",
              backgroundColor: "#2dd4bf",
              color: "#0a0f1a",
              fontSize: "34px",
              fontWeight: 800,
            }}
          >
            O
          </div>
          <div style={{ color: "#94a3b8", fontSize: "26px" }}>
            {profile.location}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "white",
              fontSize: "76px",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            {profile.name}
          </div>
          <div
            style={{
              color: "#2dd4bf",
              fontSize: "40px",
              fontWeight: 700,
              marginTop: "18px",
            }}
          >
            {profile.title}
          </div>
          <div
            style={{
              color: "#cbd5e1",
              fontSize: "30px",
              marginTop: "24px",
              maxWidth: "900px",
              lineHeight: 1.35,
            }}
          >
            {profile.availability}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "16px",
            color: "#94a3b8",
            fontSize: "26px",
          }}
        >
          <span>.NET</span>
          <span style={{ color: "#334155" }}>·</span>
          <span>Node.js</span>
          <span style={{ color: "#334155" }}>·</span>
          <span>React</span>
          <span style={{ color: "#334155" }}>·</span>
          <span>AWS</span>
          <span style={{ color: "#334155" }}>·</span>
          <span>Microservices</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
