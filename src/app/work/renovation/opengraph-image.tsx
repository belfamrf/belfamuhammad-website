import { ImageResponse } from "next/og";
import { loadDisplayFont } from "@/lib/og-font";

export const alt =
  "Kelso & Reid case study: a renovation contractor in Melbourne, branded and built by Belfa Muhammad.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const font = await loadDisplayFont();
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#1c1b19",
          color: "#efece6",
          padding: "64px 72px",
          fontFamily: font ? "Archivo" : undefined,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 30 }}>
          <span>BELFA MUHAMMAD</span>
          <span style={{ color: "#ff5b1f" }}>CASE STUDY: KELSO &amp; REID</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 96, lineHeight: 0.96 }}>
          <span>THREE QUOTES,</span>
          <span>
            READ PROPERLY<span style={{ color: "#ff5b1f" }}>.</span>
          </span>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 26,
          }}
        >
          <span>RENOVATION CONTRACTOR, MELBOURNE</span>
          <span style={{ color: "#ff5b1f" }}>CONCEPT PROJECT</span>
        </div>
      </div>
    ),
    {
      ...size,
      ...(font
        ? { fonts: [{ name: "Archivo", data: font, weight: 800 as const, style: "normal" as const }] }
        : {}),
    },
  );
}
