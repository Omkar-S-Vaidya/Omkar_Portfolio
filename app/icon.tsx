import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

// "O" monogram favicon on brand background (matches tailwind bg / accent).
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0f1a",
          color: "#2dd4bf",
          fontSize: 22,
          fontWeight: 800,
          borderRadius: 6,
        }}
      >
        O
      </div>
    ),
    { ...size }
  );
}
