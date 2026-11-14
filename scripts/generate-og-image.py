"""Generate the 1200x630 Open Graph image for OldFont.net.

Requires Pillow and the Unifraktur Maguntia file already in public/fonts.
"""

import random
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "og" / "og-image.png"
WIDTH, HEIGHT = 1200, 630


def main() -> None:
    image = Image.new("RGB", (WIDTH, HEIGHT), "#f4efe2")
    draw = ImageDraw.Draw(image)
    rng = random.Random(14)
    for _ in range(18000):
        shade = rng.choice([(232, 224, 204), (248, 244, 232), (220, 208, 184)])
        draw.point((rng.randrange(WIDTH), rng.randrange(HEIGHT)), fill=shade)

    ink = (47, 36, 24)
    brass = (139, 105, 58)
    brass_dark = (92, 68, 36)
    margin = 36
    draw.rectangle([margin, margin, WIDTH - margin - 1, HEIGHT - margin - 1], outline=brass, width=3)
    draw.rectangle([margin + 10, margin + 10, WIDTH - margin - 11, HEIGHT - margin - 11], outline=brass, width=1)

    def corner(cx: int, cy: int, dx: int, dy: int) -> None:
        draw.ellipse([cx - 5, cy - 5, cx + 5, cy + 5], fill=brass)
        draw.line([cx + dx * 8, cy, cx + dx * 46, cy], fill=brass, width=2)
        draw.line([cx, cy + dy * 8, cx, cy + dy * 46], fill=brass, width=2)

    corner(62, 62, 1, 1)
    corner(WIDTH - 63, 62, -1, 1)
    corner(62, HEIGHT - 63, 1, -1)
    corner(WIDTH - 63, HEIGHT - 63, -1, -1)

    blackletter = ImageFont.truetype(ROOT / "public/fonts/OldEnglish-Charset-UnifrakturMaguntia.ttf", 132)
    serif = ImageFont.truetype("/usr/share/fonts/truetype/noto/NotoSerif-Bold.ttf", 54)
    small = ImageFont.truetype("/usr/share/fonts/truetype/noto/NotoSerif-Regular.ttf", 28)

    def center(text: str, font: ImageFont.FreeTypeFont, y: int, fill: tuple[int, int, int]) -> None:
        box = draw.textbbox((0, 0), text, font=font)
        draw.text(((WIDTH - (box[2] - box[0])) / 2 - box[0], y), text, font=font, fill=fill)

    center("VINTAGE TYPE", small, 128, brass_dark)
    center("OldFont.net", blackletter, 175, ink)
    draw.line([360, 360, 840, 360], fill=brass, width=2)
    draw.ellipse([592, 354, 608, 366], fill=brass)
    center("Old Font Generator", serif, 390, ink)
    center("Free to copy  ·  Free to preview", small, 500, brass_dark)

    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    image.save(OUTPUT, "PNG", optimize=True)
    print(OUTPUT, image.size, OUTPUT.stat().st_size)


if __name__ == "__main__":
    main()
