#!/usr/bin/env node
/**
 * Generate an IndexNow key + key file for this site.
 *
 * IndexNow requires proving ownership of the host by hosting a file at
 * https://<host>/<key>.txt whose CONTENT is the key itself. This script
 * generates a fresh 64-char hex key and writes that file to ./public/<key>.txt.
 *
 * Usage (run from project root):
 *   node scripts/generate-indexnow-key.mjs
 *   node scripts/generate-indexnow-key.mjs --dir ./static
 *
 * After running:
 *   1. Add INDEXNOW_KEY=<printed key> to .env.local
 *   2. Commit the generated public/<key>.txt file and deploy.
 *   3. Verify https://piedmontdentalbydesign.com/<key>.txt returns the key.
 *   4. Run scripts/indexnow-submit.mjs to start pushing URLs.
 *
 * NOTE: running this again generates a NEW key and a NEW key file — it does
 * NOT delete the old key file. Remove stale <key>.txt files from public/
 * when rotating keys, and update INDEXNOW_KEY in .env.local to match.
 */

import { writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join, resolve } from "node:path";
import crypto from "node:crypto";

const args = process.argv.slice(2);
let publicDir = "./public";
for (let i = 0; i < args.length; i++) {
  if (args[i] === "--dir" && args[i + 1]) {
    publicDir = args[i + 1];
    i++;
  }
}

// IndexNow spec: key must be 8-128 chars, [a-zA-Z0-9-]
const key = crypto.randomBytes(32).toString("hex"); // 64 hex chars

const dir = resolve(process.cwd(), publicDir);
if (!existsSync(dir)) {
  console.log(`-> Creating directory ${dir}`);
  mkdirSync(dir, { recursive: true });
}

const filePath = join(dir, `${key}.txt`);
writeFileSync(filePath, key, "utf8");

console.log(`Key file created: ${filePath}`);
console.log(`\nNext steps:`);
console.log(`  1. Add this line to .env.local:`);
console.log(`       INDEXNOW_KEY=${key}`);
console.log(`  2. Commit & deploy.`);
console.log(`  3. After deploy, verify:`);
console.log(`       curl https://piedmontdentalbydesign.com/${key}.txt`);
console.log(`     Should return the key as plain text (HTTP 200).`);
console.log(`  4. Then run:`);
console.log(`       node scripts/indexnow-submit.mjs --sitemap`);
