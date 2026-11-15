// Archivo condensed heavy, matching the site's display type. Returns null when
// Google Fonts can't be reached at build time, so the card still renders with
// the built-in fallback face.
export async function loadDisplayFont(): Promise<ArrayBuffer | null> {
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
