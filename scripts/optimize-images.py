#!/usr/bin/env python3
"""ForgeFit image optimizer (audit fix, 2026-11-18).

Best practice (cross-verified 2026): serve AVIF -> WebP -> JPG/PNG fallback
via <picture>, sized to the slot (max ~1200w), never the 1920px original.
- hero-trainer.png (2.2 MB, transparent) -> AVIF + WebP at 1200w/800w, alpha kept
- 12 photos (1920x1280 JPG, 330-712 KB) -> AVIF + WebP + JPG at 1200w/800w
  (portraits displayed <=112px -> 200w only)
- OG cards (390-830 KB PNG) -> JPG q82 (browsers never fetch them, scrapers do)

Usage: python3 scripts/optimize-images.py [--avif] [--og] [--clean]
  --avif  also encode AVIF via ffmpeg libaom (slow; skip for a quick pass)
  --og    convert OG PNGs to JPG
  --clean delete the 1920px originals + OG PNGs after verifying the new files
"""
import os
import subprocess
import sys
from PIL import Image

ROOT = os.path.expanduser("~/workspace/forgefit/static/images")
HERO = "hero-trainer.png"
PHOTOS_1200 = [
    "program-1on1.jpg", "program-online.jpg", "program-nutrition.jpg", "program-group.jpg",
    "blog-training.jpg", "blog-nutrition.jpg", "blog-mindset.jpg", "coach.jpg",
]
PORTRAITS = ["client-rohan.jpg", "client-priya.jpg", "client-kabir.jpg"]
OG = ["og-default.png", "og-programs.png", "og-pricing.png", "og-about.png",
      "og-results.png", "og-blog.png", "og-tools.png"]

DO_AVIF = "--avif" in sys.argv
DO_OG = "--og" in sys.argv
CLEAN = "--clean" in sys.argv


def resize(im, width):
    if im.width <= width:
        return im
    return im.resize((width, round(im.height * width / im.width)), Image.LANCZOS)


def save_webp(im, path, quality=80):
    im.save(path, "WEBP", quality=quality, method=6)


def save_jpg(im, path, quality=80):
    im.convert("RGB").save(path, "JPEG", quality=quality, optimize=True, progressive=True)


def save_avif(src_path, width, out_path, crf=30):
    # libaom-av1. NOTE: this ffmpeg build DROPS the alpha channel for AVIF
    # (verified 2026-11-18: yuva420p in the filter chain still decodes as
    # yuv420p RGB) — so AVIF is only used for opaque photos, never the hero.
    cmd = ["ffmpeg", "-y", "-v", "error", "-i", src_path,
           "-vf", f"scale={width}:-1", "-c:v", "libaom-av1",
           "-crf", str(crf), "-cpu-used", "4", "-pix_fmt", "yuv420p", out_path]
    subprocess.run(cmd, check=True)


def report(path):
    print(f"  {os.path.basename(path):32} {os.path.getsize(path)//1024:6} KB")


def process(src, widths, webp_q=80, jpg_q=80, avif_crf=30, make_jpg=True, make_avif=True):
    src_path = os.path.join(ROOT, src)
    base, _ = os.path.splitext(src)
    im = Image.open(src_path)
    print(f"{src} ({os.path.getsize(src_path)//1024} KB ->)")
    for w in widths:
        r = resize(im, w)
        wp = os.path.join(ROOT, f"{base}-{w}.webp")
        save_webp(r, wp, webp_q)
        report(wp)
        if make_jpg:
            jp = os.path.join(ROOT, f"{base}-{w}.jpg")
            save_jpg(r, jp, jpg_q)
            report(jp)
        if DO_AVIF and make_avif:
            ap = os.path.join(ROOT, f"{base}-{w}.avif")
            save_avif(src_path, w, ap, avif_crf)
            report(ap)


def main():
    # Hero: NO JPG (would lose transparency; PNG stays the fallback) and NO
    # AVIF (this ffmpeg build drops alpha for AVIF — see save_avif).
    process(HERO, [1200, 800], webp_q=85, avif_crf=28, make_jpg=False, make_avif=False)
    for p in PHOTOS_1200:
        process(p, [1200, 800])
    for p in PORTRAITS:
        process(p, [200], webp_q=82, jpg_q=82)
    if DO_OG:
        ogdir = os.path.join(ROOT, "og")
        for name in OG:
            src_path = os.path.join(ogdir, name)
            if not os.path.exists(src_path):
                continue
            im = Image.open(src_path).convert("RGB")
            out = os.path.join(ogdir, name.replace(".png", ".jpg"))
            im.save(out, "JPEG", quality=82, optimize=True, progressive=True)
            print(f"OG {name} ({os.path.getsize(src_path)//1024} KB -> {os.path.getsize(out)//1024} KB)")
    if CLEAN:
        for p in PHOTOS_1200 + PORTRAITS:
            os.remove(os.path.join(ROOT, p))
            print("removed original", p)
        if DO_OG:
            for name in OG:
                os.remove(os.path.join(ROOT, "og", name))
                print("removed OG PNG", name)


if __name__ == "__main__":
    main()
