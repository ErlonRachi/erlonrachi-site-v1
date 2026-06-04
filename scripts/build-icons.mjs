/*
 * Build the icon family from the A3 recipe.
 *
 * Input:  scripts/_assets/Newsreader.ttf (variable font, fetched manually)
 * Output: public/favicon.svg (baked Newsreader ER paths)
 *         public/favicon-16.png, favicon-32.png
 *         public/apple-touch-icon.png (180×180)
 *         public/favicon.ico (multi-res 16/32/48)
 *
 * Recipe (matches Variant A3 in src/pages/dev/glyph-explore.astro):
 *   - 100×100 viewBox, Europa Blue tile
 *   - Antique gold rect 76×14 at (12, 68)
 *   - "ER" in Newsreader weight 600, size 48, letter-spacing -3, baseline y=60
 */
import opentype from "opentype.js";
import sharp from "sharp";
import pngToIco from "png-to-ico";
import fs from "node:fs/promises";
import path from "node:path";

const FONT_PATH = "scripts/_assets/Newsreader.ttf";
const PUBLIC_DIR = "public";

const EUROPA_BLUE = "#0F2545";
const PAPER = "#E6E4DA";
const GOLD = "#D4A017";

const TILE = 100;
const FONT_SIZE = 48;
const WEIGHT = 600;
const LETTER_SPACING = -3;
const BASELINE_Y = 60;
const STROKE = { x: 12, y: 68, w: 76, h: 14 };

async function main() {
  console.log("[1/4] Loading font...");
  const fontBuf = await fs.readFile(FONT_PATH);
  const font = opentype.parse(fontBuf.buffer.slice(fontBuf.byteOffset, fontBuf.byteOffset + fontBuf.byteLength));
  console.log(`      Newsreader: unitsPerEm=${font.unitsPerEm}, axes=${Object.keys(font.tables.fvar?.axes || {}).length}`);

  const glyphs = ["E", "R"].map((c) => font.charToGlyph(c));
  const u2px = (units) => (units / font.unitsPerEm) * FONT_SIZE;

  const advances = glyphs.map((g) => u2px(g.advanceWidth));
  const kerning = u2px(font.getKerningValue(glyphs[0], glyphs[1]) || 0);

  const positions = [
    { glyph: glyphs[0], x: 0 },
    { glyph: glyphs[1], x: advances[0] + kerning + LETTER_SPACING },
  ];
  const totalWidth = positions[1].x + advances[1];
  const offsetX = (TILE - totalWidth) / 2;

  console.log(`      Advance widths: E=${advances[0].toFixed(1)}, R=${advances[1].toFixed(1)}`);
  console.log(`      Kerning ER: ${kerning.toFixed(2)}, total mark width: ${totalWidth.toFixed(1)}, offsetX: ${offsetX.toFixed(1)}`);

  const variation = { wght: WEIGHT, opsz: FONT_SIZE };

  console.log("[2/4] Building SVG with baked paths...");
  const combined = new opentype.Path();
  for (const { glyph, x } of positions) {
    const p = glyph.getPath(x + offsetX, BASELINE_Y, FONT_SIZE, { variation }, font);
    combined.extend(p);
  }
  const pathData = combined.toPathData(2);

  const svg = `<svg viewBox="0 0 ${TILE} ${TILE}" xmlns="http://www.w3.org/2000/svg"><rect width="${TILE}" height="${TILE}" fill="${EUROPA_BLUE}"/><rect x="${STROKE.x}" y="${STROKE.y}" width="${STROKE.w}" height="${STROKE.h}" fill="${GOLD}"/><path d="${pathData}" fill="${PAPER}"/></svg>`;

  await fs.writeFile(path.join(PUBLIC_DIR, "favicon.svg"), svg);
  console.log(`      Wrote ${PUBLIC_DIR}/favicon.svg (${svg.length} bytes)`);

  console.log("[3/4] Rasterizing PNGs...");
  const rasters = { 16: "favicon-16.png", 32: "favicon-32.png", 180: "apple-touch-icon.png" };
  for (const [size, name] of Object.entries(rasters)) {
    await sharp(Buffer.from(svg))
      .resize(parseInt(size), parseInt(size))
      .png()
      .toFile(path.join(PUBLIC_DIR, name));
    console.log(`      Wrote ${PUBLIC_DIR}/${name} (${size}×${size})`);
  }

  console.log("[4/4] Building favicon.ico (16/32/48 multi-res)...");
  const icoBuffers = await Promise.all(
    [16, 32, 48].map((s) =>
      sharp(Buffer.from(svg)).resize(s, s).png().toBuffer()
    )
  );
  const icoData = await pngToIco(icoBuffers);
  await fs.writeFile(path.join(PUBLIC_DIR, "favicon.ico"), icoData);
  console.log(`      Wrote ${PUBLIC_DIR}/favicon.ico (${icoData.length} bytes)`);

  console.log("\nDone.");
}

main().catch((err) => {
  console.error("Build failed:", err);
  process.exit(1);
});
