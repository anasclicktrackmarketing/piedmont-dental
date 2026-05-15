"""
Apply title and description rewrites from TITLE-REWRITES.md and DESCRIPTION-REWRITES.md.

Parses both markdown docs to extract (path, old, new) tuples, then opens each
page.tsx and does a string replace of old -> new. Skips any page where the old
string isn't present (already changed) and logs misses for review.
"""
import os
import re
import sys

sys.stdout.reconfigure(encoding="utf-8")

# ---------------------------------------------------------------------------
# Title rewrites — combined auto-fix + manual proposals
# ---------------------------------------------------------------------------
TITLE_REWRITES = {}

def parse_title_doc():
    """Parse TITLE-REWRITES.md to extract (path, old, new) for every entry."""
    with open("TITLE-REWRITES.md", encoding="utf-8") as f:
        content = f.read()

    # Each entry is one heading "### `path`" followed by either:
    #   - "**Old metadata.title** (N chars): `old`"
    #   - "**New metadata.title** (N chars): `new`"
    # OR for NO-SAFE-FIX entries under "Manual Rewrites":
    # The same Old metadata.title / New metadata.title fields.

    blocks = re.split(r"^### `([^`]+)`\s*$", content, flags=re.M)
    # blocks = [pre, path1, body1, path2, body2, ...]
    pairs = []
    for i in range(1, len(blocks), 2):
        path = blocks[i]
        body = blocks[i + 1]
        # find old/new pairs
        old_m = re.search(
            r"\*\*Old metadata\.title\*\*\s*\(\d+\s*chars\):\s*`([^`]+)`",
            body,
        )
        new_m = re.search(
            r"\*\*New metadata\.title\*\*\s*\(\d+\s*chars\):\s*`([^`]+)`",
            body,
        )
        if old_m and new_m:
            pairs.append((path, old_m.group(1), new_m.group(1)))
    return pairs

# ---------------------------------------------------------------------------
# Description rewrites
# ---------------------------------------------------------------------------

def parse_desc_doc():
    """
    Parse DESCRIPTION-REWRITES.md. Two formats in the doc:
      Script-auto section:
        - **Old** (N chars):
          > Old text
        - **New** (N chars):
          > New text
      Manual section: same format.
      Also "Script-trimmed (N): ..." style in the manual section as label only.
    """
    with open("DESCRIPTION-REWRITES.md", encoding="utf-8") as f:
        content = f.read()

    blocks = re.split(r"^### `([^`]+)`(?:\s*—[^\n]*)?$", content, flags=re.M)
    # We may have duplicates (auto section + manual section) — the manual one wins.
    pair_by_path = {}
    for i in range(1, len(blocks), 2):
        path = blocks[i]
        body = blocks[i + 1]
        # find both Old (or Script-trimmed) -> we want the actual SOURCE OLD text from the
        # page file, not Script-trimmed. So search for "**Old** (N chars):\n  > TEXT".
        old_m = re.search(
            r"\*\*Old\*\*\s*\(\d+\s*chars\):\s*\n\s*>\s*(.+?)(?=\n\s*-|\n\s*###|\Z)",
            body,
            flags=re.S,
        )
        new_m = re.search(
            r"\*\*New\*\*\s*\(\d+\s*chars\):\s*\n\s*>\s*(.+?)(?=\n\s*-|\n\s*###|\Z)",
            body,
            flags=re.S,
        )
        if old_m and new_m:
            old_t = old_m.group(1).strip()
            new_t = new_m.group(1).strip()
            # for manual rewrites that say "Old" (the real original), apply.
            # for auto-section entries, also apply with the script's new text.
            # If we hit the path again later (manual section), it overrides.
            pair_by_path[path] = (old_t, new_t)
    return [(p, o, n) for p, (o, n) in pair_by_path.items()]


def apply_replacements(label: str, pairs: list, field: str) -> None:
    print(f"\n=== {label} ({len(pairs)} pages) ===")
    ok = 0
    miss = 0
    skip = 0
    for path, old, new in pairs:
        if not os.path.exists(path):
            print(f"  [missing file] {path}")
            miss += 1
            continue
        with open(path, encoding="utf-8") as f:
            content = f.read()

        # Build a regex/string that matches the OLD value within the metadata block.
        # We're looking for: <field>: "<OLD>"  OR  <field>:\n    "<OLD>"
        # Use replace on the quoted string form.
        target = f'"{old}"'
        replacement = f'"{new}"'

        if target in content:
            new_content = content.replace(target, replacement, 1)
            with open(path, "w", encoding="utf-8") as f:
                f.write(new_content)
            print(f"  [ok ] {path}")
            ok += 1
        else:
            # try fuzzy match for whitespace/newline differences
            # only attempt if the old text appears as a substring somewhere
            if old in content:
                # find the surrounding context to determine quote form
                new_content = content.replace(old, new, 1)
                with open(path, "w", encoding="utf-8") as f:
                    f.write(new_content)
                print(f"  [fuzzy] {path}")
                ok += 1
            else:
                print(f"  [miss] {path}")
                miss += 1
    print(f"  -> {ok} applied, {miss} missed, {skip} skipped")


if __name__ == "__main__":
    titles = parse_title_doc()
    descs = parse_desc_doc()
    apply_replacements("TITLE rewrites", titles, "title")
    apply_replacements("DESCRIPTION rewrites", descs, "description")
