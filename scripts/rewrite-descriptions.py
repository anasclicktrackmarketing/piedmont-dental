"""
Generate description rewrites: tighten to 150-158 char target.

For each long description, apply mechanical compressions:
  - Drop redundant geographic phrases at the end ("...serves Piedmont, Oakland, and the East Bay.")
  - Drop "at Piedmont Dental By Design" mid-sentence
  - Drop boilerplate suffix phrases

Then if still > 160, just truncate at last word boundary before 158 chars and add "."
"""
import re
import os
import sys

sys.stdout.reconfigure(encoding="utf-8")

TARGET_MAX = 160
TARGET_IDEAL = 158

# patterns to drop, in priority order
DROP_PATTERNS = [
    r"\s*Piedmont Dental By Design serves Piedmont, Oakland,? and the East Bay\.?",
    r"\s*Piedmont, Oakland & East Bay\.?",
    r"\s*Piedmont Dental By Design\.?$",
    r"\s*at Piedmont Dental By Design",
    r"\s*from Piedmont Dental By Design",
    r"\s*supervised by Dr\. Jill Martenson\.?",
]

rewrites = []

for root, _dirs, files in os.walk("app"):
    for f in files:
        if f != "page.tsx":
            continue
        path = os.path.join(root, f)
        rel = path.replace(os.sep, "/")
        content = open(path, encoding="utf-8").read()

        m = re.search(r'description:\s*"((?:[^"\\]|\\.)+)"', content)
        if not m:
            continue
        original = m.group(1).replace("\\n", " ").strip()
        if len(original) <= TARGET_MAX:
            continue

        # try progressive compression
        candidate = original
        applied = []
        for pat in DROP_PATTERNS:
            new_candidate = re.sub(pat, "", candidate).strip()
            new_candidate = re.sub(r"\s+", " ", new_candidate)
            # clean trailing punctuation orphans
            new_candidate = re.sub(r"\s*—\s*\.\s*$", ".", new_candidate)
            new_candidate = re.sub(r",\s*$", ".", new_candidate)
            new_candidate = re.sub(r"\s*\.\s*\.\s*$", ".", new_candidate)
            if new_candidate != candidate:
                applied.append(pat)
                candidate = new_candidate
            if len(candidate) <= TARGET_IDEAL:
                break

        # ensure ends with period
        if candidate and not candidate.rstrip().endswith((".", "!", "?")):
            candidate = candidate.rstrip().rstrip("—,").rstrip() + "."

        status = "auto" if len(candidate) <= TARGET_MAX else "manual"
        rewrites.append({
            "path": rel,
            "status": status,
            "old": original,
            "old_len": len(original),
            "new": candidate,
            "new_len": len(candidate),
            "applied": applied,
        })

# print as markdown
auto = [r for r in rewrites if r["status"] == "auto"]
manual = [r for r in rewrites if r["status"] == "manual"]

print("# Meta-Description Rewrites — Tightened Copy")
print()
print("**Rule:** Target description length ≤ 160 chars (Google's SERP cutoff). Original descriptions ranged 162–239 chars. Tightening drops redundant geographic phrasing (\"Piedmont Dental By Design serves Piedmont, Oakland, and the East Bay\") and the duplicate brand mention — never removes substantive procedure detail.")
print()
print(f"**Pages fixed automatically:** {len(auto)}")
print(f"**Pages still needing manual cut:** {len(manual)}")
print()
print("---")
print()

for r in sorted(rewrites, key=lambda x: (x["status"] == "auto", x["path"])):
    badge = "🟢 auto" if r["status"] == "auto" else "🟡 manual"
    print(f"### `{r['path']}` — {badge}")
    print()
    print(f"- **Old** ({r['old_len']} chars):")
    print(f"  > {r['old']}")
    print(f"- **New** ({r['new_len']} chars):")
    print(f"  > {r['new']}")
    print()
