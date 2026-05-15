"""
Generate mechanical title rewrites.

Rule:
  Next.js root layout has template "%s | Piedmont Dental By Design".
  So the rendered <title> for each page is:  <metadata.title> + " | Piedmont Dental By Design"

  We want the rendered title to be <= 70 chars. The brand suffix is 27 chars.
  So metadata.title must be <= 70 - 3 - 27 = 40 chars... wait, let me reconsider.

  Actually 70 chars is the SOFT MAX for SERP display. Google shows ~50-60 px width,
  which is roughly 60 chars. But the historical "65 char" rule is widely cited.
  We'll target rendered <= 65 chars.

  Brand suffix = " | Piedmont Dental By Design" (28 chars including leading space+pipe)
  So metadata.title must be <= 37 chars... that's TOO TIGHT for "Dental Implants in Piedmont, CA"

  Pragmatic answer: target rendered <= 75 chars (Google sometimes truncates at ~70).
  metadata.title <= 47 chars.

  For pages where simple deduplication (removing "| Piedmont Dental") gets us there,
  do that. Otherwise drop the subtitle (middle |...|) entirely.
"""
import re
import os
import sys

sys.stdout.reconfigure(encoding="utf-8")

BRAND_SUFFIX = " | Piedmont Dental By Design"  # 28 chars
TARGET_RENDERED = 70  # SERP safe zone
MAX_METADATA = TARGET_RENDERED - len(BRAND_SUFFIX)  # 42 chars max for metadata title

rewrites = []

for root, _dirs, files in os.walk("app"):
    for f in files:
        if f != "page.tsx":
            continue
        path = os.path.join(root, f)
        rel = path.replace(os.sep, "/")
        content = open(path, encoding="utf-8").read()

        # extract current title
        m = re.search(r'title:\s*"([^"]+)"', content)
        if not m:
            # try multiline split title:
            m = re.search(r'title:\s*\n?\s*"([^"]+)"', content)
        if not m:
            continue
        current = m.group(1)
        if len(current) <= MAX_METADATA:
            continue  # already fine

        # mechanical transforms in priority order
        candidates = []

        # 1. drop "| Piedmont Dental" suffix (duplicate brand)
        c1 = re.sub(r"\s*\|\s*Piedmont Dental\s*$", "", current)
        if c1 != current and len(c1) <= MAX_METADATA:
            candidates.append(("drop-brand-dup", c1))

        # 2. drop "| Piedmont Dental By Design" suffix (full duplicate brand)
        c2 = re.sub(r"\s*\|\s*Piedmont Dental By Design\s*$", "", current)
        if c2 != current and len(c2) <= MAX_METADATA:
            candidates.append(("drop-full-brand", c2))

        # 3. drop middle subtitle (between first and last |)
        parts = [p.strip() for p in current.split("|")]
        if len(parts) >= 3:
            # keep first + last, drop middle
            # for pages with "Title | Subtitle | Piedmont Dental" -> "Title | Piedmont Dental" then drop brand
            c3 = " | ".join([parts[0], parts[-1]])
            c3 = re.sub(r"\s*\|\s*Piedmont Dental\s*$", "", c3)
            if c3 != current and len(c3) <= MAX_METADATA:
                candidates.append(("drop-middle-and-brand", c3))

        # 4. just keep the first segment
        c4 = parts[0]
        if c4 != current and len(c4) <= MAX_METADATA:
            candidates.append(("first-segment-only", c4))

        if candidates:
            strategy, new_title = candidates[0]
            rendered_old = current + BRAND_SUFFIX
            rendered_new = new_title + BRAND_SUFFIX
            rewrites.append({
                "path": rel,
                "strategy": strategy,
                "old": current,
                "new": new_title,
                "old_len": len(current),
                "new_len": len(new_title),
                "rendered_old": rendered_old,
                "rendered_new": rendered_new,
                "rendered_old_len": len(rendered_old),
                "rendered_new_len": len(rendered_new),
            })
        else:
            rewrites.append({
                "path": rel,
                "strategy": "NO-SAFE-FIX",
                "old": current,
                "new": None,
                "old_len": len(current),
            })

# print as markdown
print("# Title Tag Rewrites — Mechanical Fix")
print()
print("**Rule:** Next.js root layout appends `\" | Piedmont Dental By Design\"` (28 chars) to every page title via `metadata.title.template`. So the actual rendered `<title>` tag is the string in each page + 28 chars. Target rendered title length: **≤ 70 chars**.")
print()
print("**Strategy:** Mechanical deduplication — most pages had `\"... | Piedmont Dental\"` baked into the metadata.title, which is then doubled by the template. We just remove the duplicate; in some cases also drop the middle subtitle. No editorial changes to the meaningful copy.")
print()
print(f"**Pages fixed:** {sum(1 for r in rewrites if r['new'])}")
print(f"**Pages requiring manual decision:** {sum(1 for r in rewrites if not r['new'])}")
print()
print("---")
print()
for r in sorted(rewrites, key=lambda x: x["path"]):
    print(f"### `{r['path']}`")
    print()
    print(f"- **Strategy:** {r['strategy']}")
    if r["new"]:
        print(f"- **Old metadata.title** ({r['old_len']} chars): `{r['old']}`")
        print(f"- **New metadata.title** ({r['new_len']} chars): `{r['new']}`")
        print(f"- **Old rendered <title>** ({r['rendered_old_len']} chars): `{r['rendered_old']}`")
        print(f"- **New rendered <title>** ({r['rendered_new_len']} chars): `{r['rendered_new']}`")
    else:
        print(f"- **Old** ({r['old_len']} chars): `{r['old']}`")
        print("- _No mechanical fix lands under target. Needs manual rewrite._")
    print()
