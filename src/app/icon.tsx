import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

// Browser-tab icon: the initials on a scrap of orange tape.
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
          background: "#ff5b1f",
          color: "#141414",
          fontSize: 34,
          fontWeight: 800,
          letterSpacing: -1,
        }}
      >
        BM
      </div>
    ),
    size,
  );
}
