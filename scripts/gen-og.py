#!/usr/bin/env python3
"""Generate ForgeFit OG cards (1200x630) with PIL.

Style: dark ink background, red accent, Anton display type (converted from the
site's own @fontsource woff2), Noto Sans Bold for the subtitle line (has the ₹ glyph).
Run: python3 scripts/gen-og.py
"""
import os
from fontTools.ttLib import TTFont
from PIL import Image, ImageDraw, ImageFont, ImageFilter

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
IMG = os.path.join(ROOT, 'static', 'images')
OUT = os.path.join(IMG, 'og')
W, H = 1200, 630
INK = (10, 10, 11)
FLAME = (255, 77, 45)

# Anton woff2 -> ttf (cached next to the script)
anton_woff2 = os.path.join(ROOT, 'node_modules', '@fontsource', 'anton', 'files', 'anton-latin-400-normal.woff2')
anton_ttf = os.path.join(OUT, '.anton.ttf')
if not os.path.exists(anton_ttf):
    TTFont(anton_woff2).save(anton_ttf)
NOTO_BOLD = '/usr/share/fonts/truetype/noto/NotoSans-Bold.ttf'
NOTO = '/usr/share/fonts/truetype/noto/NotoSans-Regular.ttf'


def fonts(title_size=96):
    return (
        ImageFont.truetype(anton_ttf, title_size),
        ImageFont.truetype(anton_ttf, 44),
        ImageFont.truetype(NOTO_BOLD, 34),
        ImageFont.truetype(NOTO, 30),
    )


def cover(path, w=W, h=H):
    """Crop-fill an image to w x h."""
    im = Image.open(path).convert('RGB')
    iw, ih = im.size
    scale = max(w / iw, h / ih)
    im = im.resize((round(iw * scale), round(ih * scale)), Image.LANCZOS)
    x = (im.width - w) // 2
    y = (im.height - h) // 2
    return im.crop((x, y, x + w, y + h))


def gradient(w=W, h=H):
    """Vertical ink -> deep red gradient."""
    base = Image.new('RGB', (1, h))
    for y in range(h):
        t = y / h
        base.putpixel((0, y), (round(10 + 60 * t), round(10 + 8 * t), round(11 + 6 * t)))
    return base.resize((w, h))


def card(bg_path, title_lines, subtitle, out_name, trainer=False):
    if trainer:
        bg = gradient()
        trainer_im = Image.open(os.path.join(IMG, 'hero-trainer.png')).convert('RGBA')
        # height-driven, anchored bottom-right
        th = 620
        tw = round(th * trainer_im.width / trainer_im.height)
        trainer_im = trainer_im.resize((tw, th), Image.LANCZOS)
        bg.paste(trainer_im, (W - tw + 40, H - th), trainer_im)
    else:
        bg = cover(bg_path)
        overlay = Image.new('RGBA', (W, H), (10, 10, 11, 175))
        bg = Image.alpha_composite(bg.convert('RGBA'), overlay).convert('RGB')
        # soften the photo a touch under the overlay
        bg = bg.filter(ImageFilter.GaussianBlur(0.6))

    d = ImageDraw.Draw(bg)
    f_title, f_brand, f_sub, f_small = fonts()
    # red accent bar
    d.rectangle([64, 74, 64 + 120, 74 + 10], fill=FLAME)
    d.text((64, 96), 'FORGEFIT', font=f_brand, fill=(255, 255, 255))
    y = 210
    for line in title_lines:
        d.text((64, y), line, font=f_title, fill=(255, 255, 255))
        y += 112
    d.text((64, y + 18), subtitle, font=f_sub, fill=(255, 210, 200))
    d.text((64, H - 56), 'forgefits.pages.dev', font=f_small, fill=(255, 255, 255, 200))
    # JPG (not PNG): OG cards are fetched by scrapers, and JPG at q82 is
    # ~5x smaller (audit fix 2026-11-18: og-tools.png was 830 KB, JPG is 107 KB).
    bg.save(os.path.join(OUT, out_name), quality=82)
    print(out_name, bg.size)


CARDS = [
    (None, ['FORGE YOUR', 'BEST SELF'], 'Certified personal training · Mumbai', 'og-default.jpg', True),
    (os.path.join(IMG, 'program-1on1-1200.jpg'), ['PROGRAMS', 'BUILT TO WIN'], '1-on-1 · Online · Nutrition · Group training', 'og-programs.jpg', False),
    (os.path.join(IMG, 'coach-1200.jpg'), ['SIMPLE', 'PRICING'], 'Plans from ₹4,999/month · No lock-in', 'og-pricing.jpg', False),
    (os.path.join(IMG, 'coach-1200.jpg'), ['MEET ARJUN', 'MEHTA'], 'ACE Certified · 10+ years · 500+ clients', 'og-about.jpg', False),
    (os.path.join(IMG, 'program-group-1200.jpg'), ['REAL RESULTS.', 'REAL PEOPLE.'], '100% satisfaction · 4.9/5 from 200+ reviews', 'og-results.jpg', False),
    (os.path.join(IMG, 'blog-training-1200.jpg'), ['FORGE YOUR', 'MINDSET'], 'Training, nutrition & mindset — free articles', 'og-blog.jpg', False),
    (os.path.join(IMG, 'blog-nutrition-1200.jpg'), ['FREE FITNESS', 'TOOLS'], 'BMI & calorie calculator — instant, private', 'og-tools.jpg', False),
]

for bg, title, sub, name, trainer in CARDS:
    card(bg, title, sub, name, trainer)
print('done')
