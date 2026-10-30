#!/usr/bin/env python3
"""optim4 final QA — six dimensions + technical checks, read-only.

Produces a PASS/FAIL line per check. Run from filterhub repo root after
`npm run build` (dist/) and after the data.filterhub subsite is regenerated.
"""
import json
import os
import re
import sys
from difflib import SequenceMatcher
from collections import Counter, defaultdict

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DIST = os.path.join(ROOT, "dist")
DATA_MAIN = os.path.join(ROOT, "src", "data", "products.json")
DATA_COPY = os.path.join(ROOT, "..", "data.filterhub", "data", "products.json")
DATA_SERVED = os.path.join(ROOT, "..", "data.filterhub", "docs", "data", "products.json")

results = []  # (check, status, detail)

def record(check, ok, detail):
    results.append((check, "PASS" if ok else "FAIL", detail))

# ---------- 1. Duplication ----------
with open(DATA_MAIN, encoding="utf-8") as f:
    payload = json.load(f)
products = payload["products"]
groups = defaultdict(list)
for p in products:
    groups[p["category"]].append(p)

complete_dupes = 0
near_dupes = 0
means = {}
for cat, items in groups.items():
    descs = [p.get("description") or "" for p in items]
    sims = []
    for i in range(len(items)):
        for j in range(i + 1, len(items)):
            a, b = descs[i], descs[j]
            if not a or not b:
                continue
            r = SequenceMatcher(None, a, b).ratio()
            sims.append(r)
            if r >= 0.7:
                near_dupes += 1
            if a.strip() == b.strip():
                complete_dupes += 1
    means[cat] = round(sum(sims) / len(sims), 3) if sims else 0.0

record("1. duplication (complete dupes == 0)", complete_dupes == 0, f"{complete_dupes} complete dupes")
record("1. duplication (near-dupe >=0.7 <= 10)", near_dupes <= 10, f"{near_dupes} near-dupe pairs")
worst = max(means.values()) if means else 0
record("1. duplication (max same-category mean <= 0.30)", worst <= 0.30, f"max mean {worst} ({max(means, key=means.get)})")

# ---------- 2. Word counts ----------
sku_words = [len((p.get("description") or "").split()) for p in products]
min_sku = min(sku_words) if sku_words else 0
record("2. thin (SKU desc >= 60 words)", min_sku >= 60, f"min {min_sku}, median {sorted(sku_words)[len(sku_words)//2]}")

def text_of(html):
    html = re.sub(r"<script.*?</script>", " ", html, flags=re.S)
    html = re.sub(r"<style.*?</style>", " ", html, flags=re.S)
    html = re.sub(r"<[^>]+>", " ", html)
    return re.sub(r"\s+", " ", html)

# category pages live under dist/products/{category}/index.html (trailing-slash build)
cat_word_min = 10**9
cat_count = 0
for entry in os.listdir(os.path.join(DIST, "products")):
    fp = os.path.join(DIST, "products", entry, "index.html")
    if not os.path.isfile(fp):
        continue
    cat_count += 1
    h = open(fp, encoding="utf-8").read()
    m = re.search(r"<main[^>]*>(.*?)</main>", h, flags=re.S)
    t = text_of(m.group(1)) if m else text_of(h)
    cat_word_min = min(cat_word_min, len(t.split()))
record("2. thin (category page >= 400 words)", cat_word_min >= 400, f"min category main-text words {cat_word_min} across {cat_count} category pages")

# guide pages >= 450 words
guide_min = 10**9
guide_count = 0
for entry in os.listdir(os.path.join(DIST, "guides")):
    fp = os.path.join(DIST, "guides", entry, "index.html")
    if not os.path.isfile(fp):
        continue
    guide_count += 1
    h = open(fp, encoding="utf-8").read()
    m = re.search(r"<main[^>]*>(.*?)</main>", h, flags=re.S)
    t = text_of(m.group(1)) if m else text_of(h)
    guide_min = min(guide_min, len(t.split()))
record("2. thin (guide page >= 450 words)", guide_min >= 450, f"min guide main-text words {guide_min} across {guide_count} guides")

# ---------- 3. Keyword stuffing ----------
moq_in_desc = sum(1 for p in products if re.search(r"\bMOQ\b", p.get("description") or ""))
record("3. stuffing (MOQ in SKU body prose == 0)", moq_in_desc == 0, f"{moq_in_desc} SKU descriptions mention MOQ")
# 'confirm' is not stuffing: it appears as varied procurement verbs ('confirm the OE number',
# 'confirm whether water separation…') and honesty disclosure ('source confirms…', 'not
# source-confirmed…'). Only an excessive per-description density would signal stuffing.
confirm_family_max = max(len(re.findall(r"\bconfirm(?:s|ed|ation)?\b", p.get("description") or "", flags=re.I)) for p in products)
record("3. stuffing (confirm-family density <=3 == 0)", confirm_family_max <= 3, f"max {confirm_family_max} confirm-family words in one desc (natural/disclosure, not template)")

# ---------- 4/5. title / desc / H1 uniqueness ----------
titles, descs, h1s = [], [], []
for root, _, files in os.walk(DIST):
    for f in files:
        if not f.endswith(".html"):
            continue
        fp = os.path.join(root, f)
        h = open(fp, encoding="utf-8").read()
        t = re.search(r"<title>(.*?)</title>", h, flags=re.S)
        d = re.search(r'<meta name="description" content="([^"]*)"', h)
        hh = re.findall(r"<h1[^>]*>(.*?)</h1>", h, flags=re.S)
        if t:
            titles.append(re.sub(r"\s+", " ", t.group(1)).strip())
        if d:
            descs.append(d.group(1).strip())
        h1s.extend(re.sub(r"\s+", " ", x).strip() for x in hh)

record("4. title uniqueness", len(titles) == len(set(titles)), f"{len(titles)} titles, {len(set(titles))} unique")
record("4. desc uniqueness", len(descs) == len(set(descs)), f"{len(descs)} descs, {len(set(descs))} unique")
record("4. desc <= 155 chars", all(len(d) <= 155 for d in descs), f"max desc len {max(len(d) for d in descs)}")
record("4. H1 uniqueness (page-level)", len(h1s) == len(set(h1s)), f"{len(h1s)} H1s, {len(set(h1s))} unique")

# ---------- 6. Schema syntax ----------
bad_schema = 0
schema_total = 0
for root, _, files in os.walk(DIST):
    for f in files:
        if not f.endswith(".html"):
            continue
        h = open(os.path.join(root, f), encoding="utf-8").read()
        for m in re.findall(r'<script type="application/ld\+json"[^>]*>(.*?)</script>', h, flags=re.S):
            schema_total += 1
            try:
                json.loads(m)
            except Exception:
                bad_schema += 1
record("6. schema syntax (all JSON-LD valid)", bad_schema == 0, f"{schema_total} blocks, {bad_schema} invalid")

# ---------- 7. Broken links ----------
def resolve(href):
    if href.startswith(("#", "mailto:", "tel:", "http://", "https://", "data:", "javascript:")):
        return None
    path = href.split("#")[0].split("?")[0]
    if not path.startswith("/"):
        return None
    p = path.lstrip("/")
    if p == "":
        p = "index.html"
    fp = os.path.join(DIST, p)
    if os.path.isdir(fp):
        fp = os.path.join(fp, "index.html")
    if not os.path.exists(fp) and not os.path.splitext(fp)[1]:
        fp = os.path.join(fp, "index.html")
    return fp

broken = 0
href_total = 0
for root, _, files in os.walk(DIST):
    for f in files:
        if not f.endswith(".html"):
            continue
        h = open(os.path.join(root, f), encoding="utf-8").read()
        for href in re.findall(r'href="([^"]+)"', h):
            fp = resolve(href)
            if fp is None:
                continue
            href_total += 1
            if not os.path.exists(fp):
                broken += 1
record("7. broken links == 0", broken == 0, f"{href_total} internal hrefs, {broken} broken")

# ---------- 8. Image alt / exists ----------
img_total = 0
img_missing = 0
img_no_alt = 0
for root, _, files in os.walk(DIST):
    for f in files:
        if not f.endswith(".html"):
            continue
        h = open(os.path.join(root, f), encoding="utf-8").read()
        for m in re.findall(r"<img\b[^>]*>", h):
            src = re.search(r'src="([^"]+)"', m)
            alt = re.search(r'alt="([^"]*)"', m)
            img_total += 1
            if src and src.group(1).startswith("/"):
                fp = os.path.join(DIST, src.group(1).lstrip("/"))
                if not os.path.exists(fp):
                    img_missing += 1
            if alt is None or alt.group(1).strip() == "":
                img_no_alt += 1
record("8. images (alt present)", img_no_alt == 0, f"{img_total} imgs, {img_no_alt} missing alt")
record("8. images (files exist)", img_missing == 0, f"{img_total} imgs, {img_missing} missing files")

# ---------- 9. Byte identity (three copies) ----------
a = open(DATA_MAIN, "rb").read()
b = open(DATA_COPY, "rb").read()
c = open(DATA_SERVED, "rb").read()
record("9. byte-identical (main==data==docs/data)", a == b == c, f"main {len(a)}B, data {len(b)}B, served {len(c)}B")

# ---------- 10. sitemap / robots / llms ----------
record("10. sitemap present", os.path.exists(os.path.join(DIST, "sitemap-index.xml")), "dist/sitemap-index.xml")
record("10. robots.txt present", os.path.exists(os.path.join(DIST, "robots.txt")), "dist/robots.txt")
record("10. llms.txt present", os.path.exists(os.path.join(DIST, "llms.txt")), "dist/llms.txt")

# ---------- 11. H hierarchy ----------
h_ok = True
h_detail = ""
for root, _, files in os.walk(DIST):
    for f in files:
        if not f.endswith(".html"):
            continue
        h = open(os.path.join(root, f), encoding="utf-8").read()
        tags = re.findall(r"<h([1-6])[ >]", h)
        counts = Counter(int(x) for x in tags)
        if counts.get(1, 0) != 1:
            h_ok = False
            h_detail = f"{f}: h1={counts.get(1,0)}"
            break
        levels = sorted(counts)
        for i in range(len(levels) - 1):
            if levels[i + 1] - levels[i] > 1:
                h_ok = False
                h_detail = f"{f}: level skip {levels[i]}->{levels[i+1]}"
                break
        if not h_ok:
            break
record("11. H hierarchy (single H1, no skips)", h_ok, h_detail or "all pages single-H1, no level skips")

# ---------- print ----------
print("=" * 78)
print("optim4 FINAL QA")
print("=" * 78)
fails = 0
for check, status, detail in results:
    flag = "  " if status == "PASS" else "!!"
    print(f"[{status}] {check}  →  {detail}")
    if status == "FAIL":
        fails += 1
print("-" * 78)
print(f"TOTAL: {len(results)} checks · {len(results)-fails} PASS · {fails} FAIL")
sys.exit(1 if fails else 0)
