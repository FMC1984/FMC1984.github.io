# Images

Drop real screenshots into the project folders below. Every placeholder frame on
the site prints the exact path it expects, so you can match them up by reading
the page.

```
images/
├── og/                      social share image (1200x630)
│   └── og-default.png
└── projects/
    ├── dchp/                Douglas County Housing Partnership
    ├── ai-visibility/       AI Visibility Platform
    ├── multifamily-seo/     Multifamily Search Optimization
    └── geo-aeo/             GEO / AEO Search Strategy
```

## The filament wave

`art/filament-wave-mask.webp` is not a picture — it is an **alpha mask**. The
gold is painted by CSS from `--c-gold` and shows through the mask, so the band
always matches the palette and the file is a third the size of the equivalent
colour image.

Originals live in `art-source/` (outside `public/`, so they are never
deployed). To regenerate after replacing one:

```python
from PIL import Image
alpha = Image.open('art-source/wave-original.png').convert('RGBA').getchannel('A')
alpha = alpha.crop(alpha.getbbox())            # trim transparent margin
for w, name in ((1400, 'filament-wave-mask.webp'), (820, 'filament-wave-mask-sm.webp')):
    a = alpha.resize((w, round(alpha.height * w / alpha.width)), Image.LANCZOS)
    white = Image.new('L', a.size, 255)
    Image.merge('RGBA', (white, white, white, a)).save(
        f'public/images/art/{name}', 'WEBP', quality=35, alpha_quality=70,
        method=6, exact=True)
```

The RGB channels are constant white and carry no information — only the alpha
matters. That is why it compresses so well.

## Before you add an image

1. **Resize it.** Nothing wider than ~1600px. A full-page screenshot straight
   from a browser is usually 3–5x bigger than it needs to be.
2. **Compress it.** PNG for UI screenshots, JPG or WebP for photographs.
   Squoosh (squoosh.app) does this in the browser.
3. **Name it descriptively** — `homepage-desktop.png`, not `Screen Shot 2026.png`.
4. **Write real alt text** when you swap the placeholder out. See the snippet in
   `src/components/ImagePlaceholder.astro`.

## Replacing a placeholder

Find the `<ImagePlaceholder ... />` call in the case-study page and replace the
whole call with a real figure:

```astro
<figure class="ph">
  <img
    src={url('/images/projects/dchp/homepage-desktop.png')}
    width="1200"
    height="900"
    alt="Douglas County Housing Partnership homepage, showing the three primary audience pathways."
    loading="lazy"
    decoding="async"
  />
  <figcaption>Homepage: primary pathways above the fold.</figcaption>
</figure>
```

`url()` is already imported in the case-study pages — if not, add
`import { url } from '../../lib/paths';` to the frontmatter.

Always set `width` and `height` to the image's real pixel dimensions. That's
what keeps Cumulative Layout Shift at zero.
