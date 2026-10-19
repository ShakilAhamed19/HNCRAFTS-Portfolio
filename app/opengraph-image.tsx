import { ImageResponse } from "next/og";

export const alt = "Code Galaxy — Shakil Ahamed, Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        overflow: "hidden",
        background: "#11110f",
        color: "#f1f0e9",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: 520,
          height: 520,
          borderRadius: "50%",
          background: "#c8f044",
          right: -60,
          top: 55,
          display: "flex",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: 105,
          top: 125,
          width: 380,
          height: 380,
          borderRadius: "50%",
          border: "2px solid #11110f",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 116,
          fontWeight: 800,
          letterSpacing: -12,
          color: "#11110f",
        }}
      >
        CG
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "70px 80px",
          width: 760,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 19, letterSpacing: 4, color: "#c8f044", textTransform: "uppercase" }}>
          <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#c8f044", display: "flex" }} />
          Shakil Ahamed · Developer
        </div>
        <div style={{ display: "flex", fontSize: 92, lineHeight: 0.9, fontWeight: 800, letterSpacing: -7, marginTop: 34 }}>
          Code<br />Galaxy
        </div>
        <div style={{ display: "flex", fontSize: 23, color: "#aaa99e", marginTop: 35 }}>
          Angular · Python · AI · IoT · Web Development
        </div>
      </div>
      <div style={{ position: "absolute", left: 80, right: 80, bottom: 48, height: 2, background: "rgba(241,240,233,.16)", display: "flex" }} />
    </div>,
    size,
  );
}
