/**
 * Add the registered-trademark mark to bare "Invisalign" mentions.
 * Adds ® only when Invisalign is NOT already followed by ®.
 *
 * Scans rendered code (app/, components/, lib/, content/) and skips
 * internal dev-tracking docs.
 */
const fs = require("fs");
const path = require("path");

const ROOTS = ["app", "components", "lib", "content"];
const EXTS = new Set([".tsx", ".ts", ".md"]);
const SKIP_FILES = new Set([
  "TITLE-REWRITES.md",
  "DESCRIPTION-REWRITES.md",
  "SESSION-LOG.md",
  "AUDIT.md",
  "pending.md",
  "IMAGE-MANIFEST.md",
]);

let filesUpdated = 0;
let marksAdded = 0;

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(p);
      continue;
    }
    if (!EXTS.has(path.extname(entry.name))) continue;
    if (SKIP_FILES.has(entry.name)) continue;

    const before = fs.readFileSync(p, "utf8");
    // Negative lookahead: skip if already marked, AND skip if followed by
    // a word character (avoids breaking identifiers like InvisalignPage).
    const after = before.replace(/Invisalign(?![\w®])/g, "Invisalign®");
    if (before !== after) {
      const added =
        (after.match(/Invisalign®/g) || []).length -
        (before.match(/Invisalign®/g) || []).length;
      fs.writeFileSync(p, after);
      filesUpdated++;
      marksAdded += added;
      console.log(`  +${added.toString().padStart(2)}  ${p}`);
    }
  }
}

for (const r of ROOTS) {
  if (fs.existsSync(r)) walk(r);
}

console.log(`\nFiles updated: ${filesUpdated}`);
console.log(`® marks added: ${marksAdded}`);
