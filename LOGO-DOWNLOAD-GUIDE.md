# Official Company Logo Download Guide

## 📥 Where to Download Official Logos

### 1. Apple
**Official Source:**
- Website: https://www.apple.com/newsroom/
- Direct: https://www.apple.com/newsroom/images/
- Alternative: https://developer.apple.com/app-store/marketing/guidelines/

**What to download:**
- Apple logo (monochrome black or white)
- Format: SVG or PNG
- File name: `apple.png` or `apple.svg`

**Quick Download:**
```bash
# You can use this command after finding the direct URL
curl -o assets/logos/apple.png "DIRECT_URL_TO_LOGO"
```

---

### 2. Stellantis
**Official Source:**
- Website: https://www.stellantis.com/en/media
- Press Kit: https://www.stellantis.com/en/media/press-kits
- Brand Center: Look for "Brand Assets" or "Media Kit"

**What to download:**
- Stellantis logo (monochrome or color)
- Format: SVG or PNG
- File name: `stellantis.png` or `stellantis.svg`

---

### 3. ZF TRW Automotive
**Official Source:**
- Website: https://www.zf.com/
- Media: https://www.zf.com/mobile/en/press/
- Note: ZF acquired TRW, so use ZF logo

**What to download:**
- ZF logo (monochrome)
- Format: SVG or PNG
- File name: `zf-trw.png` or `zf-trw.svg`

---

### 4. BorgWarner
**Official Source:**
- Website: https://www.borgwarner.com/
- Newsroom: https://www.borgwarner.com/newsroom
- Investors: https://investors.borgwarner.com/

**What to download:**
- BorgWarner logo (monochrome)
- Format: SVG or PNG
- File name: `borgwarner.png` or `borgwarner.svg`

---

### 5. University at Buffalo
**Official Source:**
- Website: https://www.buffalo.edu/
- Brand Guidelines: https://www.buffalo.edu/brand.html
- Marketing: https://www.buffalo.edu/brand/guidelines/logos.html

**What to download:**
- UB logo or seal (monochrome)
- Format: SVG or PNG
- File name: `university-buffalo.png` or `university-buffalo.svg`

---

## 🔍 Alternative Logo Sources

If official sources don't work, try these trusted alternatives:

### Brandfetch
- URL: https://brandfetch.com/
- Search for each company
- Download official logos in various formats

### Wikimedia Commons
- URL: https://commons.wikimedia.org/
- Search: "Company Name logo"
- Look for SVG versions
- Check licensing (usually public domain or fair use)

### Clearbit Logo API
- URL: https://logo.clearbit.com/
- Format: `https://logo.clearbit.com/DOMAIN.com`
- Examples:
  - Apple: `https://logo.clearbit.com/apple.com`
  - Stellantis: `https://logo.clearbit.com/stellantis.com`
  - ZF: `https://logo.clearbit.com/zf.com`
  - BorgWarner: `https://logo.clearbit.com/borgwarner.com`
  - UB: `https://logo.clearbit.com/buffalo.edu`

---

## 📋 Logo Requirements Checklist

For each logo, ensure:
- [ ] **Format**: SVG (preferred) or PNG with transparent background
- [ ] **Size**: Minimum 200x200px (for PNG)
- [ ] **Background**: Transparent
- [ ] **Color**: Monochrome (black) or official brand colors
- [ ] **Quality**: High resolution, crisp edges
- [ ] **License**: Proper usage rights (fair use for portfolio)

---

## 🚀 Quick Download Using Clearbit API

You can quickly download logos using curl:

```bash
# Navigate to your project directory
cd "/Users/rohitmeshram/Downloads/Code/Personal Website"

# Download logos using Clearbit API
curl -o assets/logos/apple.png "https://logo.clearbit.com/apple.com"
curl -o assets/logos/stellantis.png "https://logo.clearbit.com/stellantis.com"
curl -o assets/logos/zf-trw.png "https://logo.clearbit.com/zf.com"
curl -o assets/logos/borgwarner.png "https://logo.clearbit.com/borgwarner.com"
curl -o assets/logos/university-buffalo.png "https://logo.clearbit.com/buffalo.edu"
```

---

## 🎨 Logo Processing (Optional)

If you need to convert logos to monochrome or resize:

### Using ImageMagick (Command Line):
```bash
# Install ImageMagick first
brew install imagemagick

# Convert to monochrome
convert input.png -colorspace Gray output.png

# Resize to specific dimensions
convert input.png -resize 200x200 output.png

# Remove background (make transparent)
convert input.png -fuzz 10% -transparent white output.png
```

### Using Online Tools:
- **Remove Background**: https://www.remove.bg/
- **Convert to SVG**: https://convertio.co/png-svg/
- **Optimize SVG**: https://jakearchibald.github.io/svgomg/
- **Resize**: https://www.iloveimg.com/resize-image

---

## 📁 Final File Structure

After downloading, your structure should look like:

```
assets/
  └── logos/
      ├── apple.png (or .svg)
      ├── stellantis.png (or .svg)
      ├── zf-trw.png (or .svg)
      ├── borgwarner.png (or .svg)
      └── university-buffalo.png (or .svg)
```

---

## ⚖️ Legal Considerations

**Fair Use for Portfolio:**
- Using company logos in a portfolio to show work experience is generally considered fair use
- You're not using them for commercial purposes
- You're accurately representing your employment history
- Keep logos in their original form (don't modify)

**Best Practices:**
- Use official logos only
- Don't alter or distort logos
- Maintain proper aspect ratios
- Follow brand guidelines if available
- Include proper attribution if required

---

## ✅ Next Steps After Download

1. Place all logos in `assets/logos/` directory
2. Verify all files are named correctly
3. Check that images load properly
4. Proceed with HTML and CSS implementation
5. Test in both light and dark modes

---

## 🔗 Quick Links Summary

- **Clearbit API**: https://logo.clearbit.com/
- **Brandfetch**: https://brandfetch.com/
- **Wikimedia Commons**: https://commons.wikimedia.org/
- **Remove.bg**: https://www.remove.bg/
- **SVGOMG**: https://jakearchibald.github.io/svgomg/

---

**Created**: 2026-01-27
**Purpose**: Guide for downloading official company logos
**Status**: Ready to use
