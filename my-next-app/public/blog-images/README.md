# Blog Images Directory

This folder contains all featured and inline images for blog posts.

## 📁 Directory Structure

```
/public/blog-images/
├── blog-1-hero.jpg                    (Blog 1 featured image - 1200x630px)
├── blog-1-roi-breakdown.jpg           (Blog 1 inline image)
├── blog-2-hero.jpg                    (Blog 2 featured image)
├── blog-2-temp-chart.jpg              (Blog 2 inline image)
├── blog-3-hero.jpg                    (Blog 3 featured image)
├── blog-3-steps.jpg                   (Blog 3 inline image 1)
├── blog-3-portal-nav.jpg              (Blog 3 inline image 2)
├── blog-4-hero.jpg                    (Blog 4 featured image)
├── blog-4-dust-timeline.jpg           (Blog 4 inline image 1)
├── blog-4-before-after.jpg            (Blog 4 inline image 2)
├── blog-5-hero.jpg                    (Blog 5 featured image)
├── blog-5-energy-flow.jpg             (Blog 5 inline image 1)
├── blog-5-system-config.jpg           (Blog 5 inline image 2)
├── blog-5-financial-graph.jpg         (Blog 5 inline image 3)
└── README.md                          (This file)
```

## 🚀 How to Add Images

### Option 1: Using AI Image Generation (Recommended)

1. **DALL-E 3** (Best quality)
   - Visit: https://openai.com/dall-e-3
   - Use prompts from `BLOG_IMAGES_GUIDE.md` in project root
   - Download generated images

2. **Midjourney** (Most artistic)
   - Visit: https://midjourney.com
   - Use detailed prompts from guide
   - Download high-resolution versions

3. **Leonardo.AI** (Free option)
   - Visit: https://leonardo.ai
   - Generate using provided descriptions
   - Download PNG/JPG format

### Option 2: Using Stock Photos

1. **Free Sites:**
   - Pexels.com - High-quality free images
   - Unsplash.com - Professional photography
   - Pixabay.com - Royalty-free images

2. **Paid Sites:**
   - Freepik.com - Premium graphics
   - Adobe Stock - Professional library
   - Shutterstock - Extensive collection

   **Search Keywords:**
   - Blog 1: "family solar panels investment"
   - Blog 2: "solar panel technology comparison"
   - Blog 3: "government online portal interface"
   - Blog 4: "solar panel cleaning maintenance"
   - Blog 5: "smart home energy management"

### Option 3: Professional Designer

Hire from Fiverr/Upwork using the design brief in `BLOG_IMAGES_GUIDE.md`

---

## 📋 Steps to Add Images

1. **Generate/Download** 14 images using one of the methods above
2. **Resize** images to recommended dimensions:
   - Featured images: 1200 x 630px
   - Inline images: 800-1000px width
3. **Optimize** for web (compress to < 500KB each):
   ```bash
   # Using ImageMagick (if installed)
   mogrify -quality 85 -resize 1200x630 blog-*.jpg
   ```
4. **Name files** exactly as listed above with `.jpg` extension
5. **Move to this folder** (`/public/blog-images/`)
6. **No code changes needed** - Blog system will auto-detect and display

---

## ✅ File Format Requirements

- **Format:** JPG (preferred for photos) or PNG (for graphics)
- **Size:** < 500KB per image
- **Dimensions:**
  - Featured: 1200 x 630px
  - Inline: 800-1000px width (height auto)
- **Color Space:** RGB (not CMYK)
- **DPI:** 72 DPI (web-optimized)

---

## 🎨 Design Guidelines (To Brief Your Designer)

- **Color Palette:** Emerald (#10B981), Teal (#14B8A6), White
- **Style:** Modern, professional, bright, clean
- **Context:** North India and surrounding areas, North India solar market
- **Tone:** Aspirational, educational, trustworthy
- **Branding:** Include Volta Solar values (innovation, sustainability)

---

## 🔍 Fallback Behavior

If images are missing:
- Featured images show animated placeholder with ☀️ emoji
- Inline images show gradient placeholder
- Captions display normally
- Blog content remains fully readable
- No errors in console

Images will auto-load when added to this folder.

---

## 📞 Need Help?

- Full image specifications: See `BLOG_IMAGES_GUIDE.md`
- Blog implementation: Check `/app/blog/blogs.json`
- Add an image and test by visiting:
  - Blog listing: `/blog`
  - Individual blog: `/blog/[slug-name]`

---

## 🎯 Quick Checklist

- [ ] 14 images generated/sourced
- [ ] All images optimized (< 500KB)
- [ ] All images in correct dimensions
- [ ] Files named exactly as specified
- [ ] Files copied to this directory
- [ ] Blog pages tested and displaying correctly
- [ ] All images loading properly

---

**Status:** ✨ Ready for images! System is fully set up and waiting.
