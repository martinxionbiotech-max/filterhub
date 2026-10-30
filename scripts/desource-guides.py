#!/usr/bin/env python3
"""Desource guides.ts: remove 5-site crawl-corpus source strings, keep standard refs."""
import io

P = "/root/.openclaw/workspace/repos/filterhub/src/data/guides.ts"
s = io.open(P, encoding="utf-8").read()

repl = [
    ("// Buyer's guide cluster — pillar + cluster guides (original rewording from the 5-site corpus).\n",
     "// Buyer's guide cluster — pillar + cluster guides (procurement-grade rewording).\n"),
    ("'5-site crawl corpus (docs/sites/), 2026-10-29',\n", ""),
    ("'Filter-media type taxonomy from the crawl corpus (needle-punched / synthetic / micro-glass / carbon)',\n",
     "'Filter-media type taxonomy: needle-punched / synthetic / micro-glass / carbon',\n"),
    ("'OEM/ODM capability notes from the crawl corpus (airyfilter / yitong / cleanroom-ffu)',\n",
     "'OEM/ODM capability notes: media, pocket, HEPA and cleanroom lines',\n"),
]

for old, new in repl:
    n = s.count(old)
    print(f"x{n}: {old[:60]!r}")
    s = s.replace(old, new)

io.open(P, "w", encoding="utf-8").write(s)
print("done")
