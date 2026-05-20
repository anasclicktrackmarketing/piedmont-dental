/**
 * Optimize client-provided OneDrive images into web-ready assets.
 * Source files are 5-24 MB camera originals; we resize + recompress
 * them to sensible dimensions for the website.
 *
 * Run from the repo root:  node scripts/process-client-images.js
 */
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const SRC = "public/one drive images provided by client";

/** [sourceFile, destPath, { width, quality, webp }] */
const JOBS = [
  // About Us page banners / feature images
  ["FULL TEAM IMAGE_Piedmont Dental By Design_FINAL 1.jpg", "public/img/about/full-team.jpg", { width: 2400, quality: 80 }],
  ["BOTH DOCTORS IMAGE_Dr. Martenson and Dr. Ma Pair Image_Piedmont Dental By Design_FINAL 1.jpg", "public/img/about/doctors-martenson-ma.jpg", { width: 2000, quality: 82 }],
  ["Dr. Martenson Image with Patient.jpg", "public/img/about/dr-martenson-patient.jpg", { width: 2000, quality: 82 }],

  // Doctor headshots (overwrite existing .webp so code paths stay valid)
  ["HEADSHOT of Dr Jill MARTENSON 1.jpg", "public/team/dr-martenson.webp", { width: 1200, quality: 82, webp: true }],
  ["Dr. David Ma_Retouched Image.jpg", "public/team/dr-ma.webp", { width: 1200, quality: 82, webp: true }],

  // Staff headshots (overwrite existing .jpg)
  ["Christine_Retouched Image.jpg", "public/img/team/christine.jpg", { width: 900, quality: 80 }],
  ["Elaina_Retouched Image.jpg", "public/img/team/elaina.jpg", { width: 900, quality: 80 }],
  ["Michelle_Retouched Image.jpg", "public/img/team/michelle.jpg", { width: 900, quality: 80 }],
  ["Kelley_Retouched Image.jpg", "public/img/team/kelley.jpg", { width: 900, quality: 80 }],
  ["Lee Lee_Retouched Image.jpg", "public/img/team/lee-lannee.jpg", { width: 900, quality: 80 }],
  ["Susana_Retouched Image.jpg", "public/img/team/susana.jpg", { width: 900, quality: 80 }],
  ["Cesar DSC07918.jpg", "public/img/team/cesar.jpg", { width: 900, quality: 80 }],
];

async function main() {
  let ok = 0;
  for (const [srcName, dest, opts] of JOBS) {
    const srcPath = path.join(SRC, srcName);
    if (!fs.existsSync(srcPath)) {
      console.error(`MISSING SOURCE: ${srcPath}`);
      continue;
    }
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    let pipeline = sharp(srcPath).rotate().resize({
      width: opts.width,
      withoutEnlargement: true,
    });
    pipeline = opts.webp
      ? pipeline.webp({ quality: opts.quality })
      : pipeline.jpeg({ quality: opts.quality, mozjpeg: true });
    await pipeline.toFile(dest);
    const { size } = fs.statSync(dest);
    const meta = await sharp(dest).metadata();
    console.log(
      `OK  ${dest}  ${meta.width}x${meta.height}  ${(size / 1024).toFixed(0)} KB`
    );
    ok++;
  }
  console.log(`\nDone: ${ok}/${JOBS.length} images processed.`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
