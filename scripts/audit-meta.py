"""Walk every page.tsx in /app, extract metadata title & description, report length issues."""
import re
import os
import sys

sys.stdout.reconfigure(encoding="utf-8")

issues = {"title_long": [], "desc_long": [], "desc_short": []}

for root, _dirs, files in os.walk("app"):
    for f in files:
        if f != "page.tsx":
            continue
        path = os.path.join(root, f)
        rel = path.replace(os.sep, "/")
        try:
            content = open(path, encoding="utf-8").read()
        except Exception:
            continue

        # find title - try double quotes, single quotes, backticks
        t = (
            re.search(r'title:\s*"([^"]+)"', content)
            or re.search(r"title:\s*'([^']+)'", content)
            or re.search(r"title:\s*`([^`]+)`", content)
        )
        # find description
        d = (
            re.search(r'description:\s*"((?:[^"\\]|\\.)+)"', content)
            or re.search(r"description:\s*`((?:[^`\\]|\\.)+)`", content)
        )
        if t:
            title_text = t.group(1).replace("\\n", " ").replace("  ", " ").strip()
            if len(title_text) > 70:
                issues["title_long"].append((rel, len(title_text), title_text))
        if d:
            desc_text = d.group(1).replace("\\n", " ").replace("  ", " ").strip()
            if len(desc_text) > 160:
                issues["desc_long"].append((rel, len(desc_text), desc_text))
            elif len(desc_text) < 100:
                issues["desc_short"].append((rel, len(desc_text), desc_text))

print("=== TITLES >70 chars ===")
for r, l, t in sorted(issues["title_long"], key=lambda x: -x[1]):
    print(f"  [{l}] {r}")
    print(f'       "{t}"')

print("\n=== DESCRIPTIONS >160 chars ===")
for r, l, d in sorted(issues["desc_long"], key=lambda x: -x[1]):
    print(f"  [{l}] {r}")
    print(f'       "{d[:240]}"')

print("\n=== DESCRIPTIONS <100 chars (too thin) ===")
for r, l, d in sorted(issues["desc_short"], key=lambda x: -x[1]):
    print(f"  [{l}] {r}")
    print(f'       "{d}"')
