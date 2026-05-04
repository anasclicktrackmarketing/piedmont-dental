// One-shot image optimizer. Run with: node scripts/optimize-images.mjs
// Uses `sharp` (transitive dep of Next.js). Overwrites in place after backing up.

import sharp from "sharp";
import { copyFile, stat, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const PUBLIC = path.join(ROOT, "public");
const BACKUP = path.join(ROOT, ".image-backup");

if (!existsSync(BACKUP)) await mkdir(BACKUP, { recursive: true });

const targets = [
  { input: "svc/veneers.jpg", maxW: 1400, quality: 78, format: "jpeg" },
  { input: "before-after.jpg", maxW: 1600, quality: 80, format: "jpeg" },
  { input: "about.jpg", maxW: 1100, quality: 80, format: "jpeg" },
  { input: "svc/whitening.jpg", maxW: 1200, quality: 80, format: "jpeg" },
  { input: "svc/invisalign.jpg", maxW: 1200, quality: 80, format: "jpeg" },
  { input: "svc/implants.jpg", maxW: 1200, quality: 80, format: "jpeg" },
  { input: "svc/cerec.jpg", maxW: 1200, quality: 80, format: "jpeg" },
  { input: "svc/restoration.jpg", maxW: 1200, quality: 80, format: "jpeg" },
  { input: "svc/perio.jpg", maxW: 1200, quality: 80, format: "jpeg" },
  { input: "svc/cleanings.jpg", maxW: 1200, quality: 80, format: "jpeg" },
  { input: "hero-poster.png", maxW: 1920, quality: 80, format: "jpeg", outputName: "hero-poster.jpg" },
];

const fmt = (n) => `${(n / 1024).toFixed(1)} KB`;

let totalBefore = 0;
let totalAfter = 0;

for (const t of targets) {
  const src = path.join(PUBLIC, t.input);
  if (!existsSync(src)) {
    console.log(`SKIP  ${t.input} (not found)`);
    continue;
  }
  const before = (await stat(src)).size;
  totalBefore += before;

  // Backup original
  const backupPath = path.join(BACKUP, t.input.replace(/[\\/]/g, "_"));
  await copyFile(src, backupPath);

  const outName = t.outputName || t.input;
  const out = path.join(PUBLIC, outName);

  let pipeline = sharp(src).resize({ width: t.maxW, withoutEnlargement: true });
  if (t.format === "jpeg") pipeline = pipeline.jpeg({ quality: t.quality, mozjpeg: true });
  if (t.format === "webp") pipeline = pipeline.webp({ quality: t.quality });
  if (t.format === "png") pipeline = pipeline.png({ quality: t.quality });

  const buf = await pipeline.toBuffer();
  await sharp(buf).toFile(out + ".tmp");
  // Replace
  const { rename } = await import("node:fs/promises");
  await rename(out + ".tmp", out);

  const after = (await stat(out)).size;
  totalAfter += after;
  const pct = ((1 - after / before) * 100).toFixed(0);
  console.log(`OK    ${t.input.padEnd(28)}  ${fmt(before).padStart(10)} → ${fmt(after).padStart(10)}  (-${pct}%)`);
}

console.log("---");
console.log(`Total ${fmt(totalBefore)} → ${fmt(totalAfter)}  saved ${fmt(totalBefore - totalAfter)}`);
console.log(`Originals backed up to .image-backup/`);
