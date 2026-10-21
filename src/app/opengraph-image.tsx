import { ImageResponse } from "next/og";

export const alt = "Belfa Muhammad: premium websites, designed by a marketer.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Archivo condensed heavy, matching the site's display type. Falls back to the
// default face if Google Fonts can't be reached at build time.
async function loadDisplayFont() {
  try {
    // The width has to be asked for as a range; the first face served is the narrowest.
    const css = await fetch(
      "https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,800",
    ).then((res) => res.text());
    const url = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/)?.[1];
    if (!url) return null;
    return await fetch(url).then((res) => res.arrayBuffer());
  } catch {
    return null;
  }
}

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
          <span style={{ color: "#ff5b1f" }}>WWW.BELFAMUHAMMAD.COM</span>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", fontSize: 112, lineHeight: 0.92, maxWidth: 1000 }}>
          <span>PREMIUM WEBSITES, DESIGNED BY A&nbsp;</span>
          <span style={{ color: "#ff5b1f" }}>MARKETER.</span>
        </div>
        <div style={{ display: "flex", height: 18, width: 220, background: "#ff5b1f" }} />
      </div>
    ),
    {
      ...size,
      // An empty list would remove the built-in fallback face, so pass nothing then.
      ...(font ? { fonts: [{ name: "Archivo", data: font, weight: 800 as const, style: "normal" as const }] } : {}),
    },
  );
}
