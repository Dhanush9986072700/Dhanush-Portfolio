import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = "Dhanush N - Senior Product Designer";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "#0A0A0F",
          color: "#FAFAFA",
          fontFamily: "Arial, sans-serif",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 18% 18%, rgba(99,102,241,0.42), transparent 30%), radial-gradient(circle at 82% 24%, rgba(6,182,212,0.22), transparent 28%), radial-gradient(circle at 68% 82%, rgba(245,158,11,0.2), transparent 30%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            padding: 72,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              color: "rgba(255,255,255,0.52)",
              fontSize: 24,
              letterSpacing: 6,
              textTransform: "uppercase",
            }}
          >
            <span>{siteConfig.name}</span>
            <span>Bangalore, India</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div
              style={{
                fontSize: 92,
                lineHeight: 0.98,
                letterSpacing: -3,
                maxWidth: 850,
              }}
            >
              Product Designer who writes code.
            </div>
            <div
              style={{
                fontSize: 30,
                lineHeight: 1.35,
                color: "rgba(255,255,255,0.58)",
                maxWidth: 760,
              }}
            >
              Senior portfolio of shipped product design, front-end systems, and proof-led case studies.
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
