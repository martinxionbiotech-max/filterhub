#!/usr/bin/env python3
"""Optim2 verification: word counts (SKU >=60, category >=400), keyword stuffing
(MOQ <=2/page), intent-conflict differentiation, near-duplicate rescan."""
import json, re, statistics, sys
from difflib import SequenceMatcher

ROOT = "/root/.openclaw/workspace/repos/filterhub"
d = json.load(open(f"{ROOT}/src/data/products.json"))
ps = d["products"]

def wc(s):
    return len((s or "").split())

# --- SKU description word counts ---
sku_wc = [wc(p["description"]) for p in ps]
short = [(p["sku"], wc(p["description"])) for p in ps if wc(p["description"]) < 60]
print(f"[SKU] min={min(sku_wc)} max={max(sku_wc)} median={statistics.median(sku_wc)} mean={round(sum(sku_wc)/len(sku_wc),1)}")
print(f"[SKU] <60 words: {len(short)}")
for s in short:
    print("   ", s)

# --- MOQ occurrences in description (body) ---
moq_body = {p["sku"]: len(re.findall(r"\bMOQ\b", p["description"] or "", re.I)) for p in ps}
moq_over = {k: v for k, v in moq_body.items() if v > 2}
print(f"[MOQ] SKUs with MOQ in body: {sum(1 for v in moq_body.values() if v>0)}")
print(f"[MOQ] SKUs with MOQ>2 in body: {len(moq_over)}")

# --- confirm occurrences in description ---
confirm = {p["sku"]: len(re.findall(r"\bconfirm", p["description"] or "", re.I)) for p in ps}
confirm_multi = {k: v for k, v in confirm.items() if v > 1}
print(f"[confirm] SKUs with confirm>1: {len(confirm_multi)}")

# --- OE number phrase ---
oe = sum(1 for p in ps if re.search(r"OE number", p["description"] or "", re.I))
print(f"[OE number] SKUs with 'OE number' phrase: {oe}")

# --- near-duplicate rescan (same category) ---
from collections import defaultdict
by = defaultdict(list)
for p in ps:
    by[p["category"]].append(p)
def sim(a, b): return SequenceMatcher(None, a or "", b or "").ratio()
print("[DUP] same-category mean / near>=0.7:")
worst = 0
for c, pl in sorted(by.items()):
    if len(pl) < 2:
        continue
    vals = []
    near = 0
    for i in range(len(pl)):
        for j in range(i+1, len(pl)):
            r = sim(pl[i]["description"], pl[j]["description"])
            vals.append(r)
            if r >= 0.7:
                near += 1
    m = sum(vals)/len(vals)
    worst = max(worst, m)
    print(f"   {c:22s} n={len(pl):2d} mean={m:.3f} near>=0.7={near}")
print(f"[DUP] worst category mean: {worst:.3f}")
