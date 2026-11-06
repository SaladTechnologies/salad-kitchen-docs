"""Generates the background pattern tiles in src/styles (see the background pattern section of app.css).

Each tile is a square of outlined equilateral triangles (the shape used in Salad's branding) at random positions and rotations,
spaced out so they never clump, and wrapped at the edges so the tile repeats seamlessly. Change a seed to get a
different scatter. If you change a tile size, update PARALLAX_LAYERS in src/components/background-pattern.tsx.

Usage: python3 scripts/generate-background-pattern.py
"""

import os
import math
import random
STYLES = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'src', 'styles')


def tile(seed, W, n, smin, smax, stroke, mind):
    r = random.Random(seed); pts = []
    tries = 0
    while len(pts) < n and tries < 20000:
        tries += 1
        x, y = r.uniform(0, W), r.uniform(0, W)
        # toroidal min distance so the tile repeats without clumps at the seams
        if all(min(abs(x-a), W-abs(x-a))**2 + min(abs(y-b), W-abs(y-b))**2 > mind**2 for a, b, _, _ in pts):
            pts.append((x, y, r.uniform(smin, smax), r.uniform(0, 360)))
    out = [f'<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{W}" viewBox="0 0 {W} {W}" fill="none" stroke="#000" stroke-width="{stroke}" stroke-linejoin="round">']
    for x, y, s, a in pts:
        # equilateral triangle with side s, centred on its centroid
        r_ = s / math.sqrt(3)
        tri = [(r_ * math.cos(math.radians(t)), r_ * math.sin(math.radians(t))) for t in (-90, 30, 150)]
        for dx in (-W, 0, W):
            for dy in (-W, 0, W):
                cx, cy = x+dx, y+dy
                if -s < cx < W+s and -s < cy < W+s:
                    p = ' '.join(f'{v[0]:.1f},{v[1]:.1f}' for v in tri)
                    out.append(f'<polygon points="{p}" transform="translate({cx:.1f} {cy:.1f}) rotate({a:.0f})"/>')
    out.append('</svg>')
    return ''.join(out)
open(os.path.join(STYLES, 'salad-pattern-front.svg'), 'w').write(tile(7, 520, 7, 18, 26, 1.25, 150))
open(os.path.join(STYLES, 'salad-pattern-back.svg'), 'w').write(tile(23, 380, 11, 9, 13, 1, 90))
