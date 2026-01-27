# Company Logos Implementation Plan

## Overview
Add professional company logos to each work experience entry in the Work section to enhance visual appeal and brand recognition.

---

## 📋 Implementation Steps

### Step 1: Create Directory Structure
Create a new directory for company logos:
```
assets/
  └── logos/
      ├── apple.svg
      ├── stellantis.svg
      ├── fca.svg
      ├── zf-trw.svg
      ├── borgwarner.svg
      └── university-buffalo.svg
```

### Step 2: Obtain Company Logos

#### Companies to Get Logos For:
1. **Apple** - Apple Inc.
2. **Stellantis** - Stellantis N.V.
3. **FCA** - Fiat Chrysler Automobiles
4. **ZF TRW** - ZF TRW Automotive
5. **BorgWarner** - BorgWarner Inc.
6. **University at Buffalo** - University at Buffalo

#### Logo Requirements:
- **Format**: SVG (preferred) or PNG with transparent background
- **Size**: Minimum 200x200px for PNG, vector for SVG
- **Color**: Get both light and dark versions if available
- **Quality**: High resolution, official brand logos
- **License**: Ensure proper usage rights

#### Where to Find Logos:
1. **Official Company Websites** - Usually in "Press" or "Media" sections
2. **Brandfetch** - https://brandfetch.com/
3. **Wikimedia Commons** - https://commons.wikimedia.org/
4. **Company LinkedIn Pages** - Download profile images
5. **LogoSearch** - https://logosear.ch/

---

### Step 3: HTML Structure Update

Update each `<article class="project">` to include a logo:

#### Current Structure:
```html
<article class="project">
    <div class="project__header">
        <h3 class="project__company">Apple</h3>
        <span class="project__period">2021 - Present</span>
    </div>
    <!-- rest of content -->
</article>
```

#### New Structure with Logo:
```html
<article class="project">
    <div class="project__header">
        <div class="project__company-wrapper">
            <img src="assets/logos/apple.svg" 
                 alt="Apple logo" 
                 class="project__logo"
                 loading="lazy">
            <h3 class="project__company">Apple</h3>
        </div>
        <span class="project__period">2021 - Present</span>
    </div>
    <!-- rest of content -->
</article>
```

#### Complete HTML Changes Needed:

**Project 1 - Apple:**
```html
<div class="project__company-wrapper">
    <img src="assets/logos/apple.svg" alt="Apple logo" class="project__logo" loading="lazy">
    <h3 class="project__company">Apple</h3>
</div>
```

**Project 2 - Stellantis & FCA:**
```html
<div class="project__company-wrapper">
    <img src="assets/logos/stellantis.svg" alt="Stellantis logo" class="project__logo" loading="lazy">
    <h3 class="project__company">Stellantis & FCA</h3>
</div>
```

**Project 3 - ZF TRW:**
```html
<div class="project__company-wrapper">
    <img src="assets/logos/zf-trw.svg" alt="ZF TRW logo" class="project__logo" loading="lazy">
    <h3 class="project__company">ZF TRW Automotive</h3>
</div>
```

**Project 4 - BorgWarner:**
```html
<div class="project__company-wrapper">
    <img src="assets/logos/borgwarner.svg" alt="BorgWarner logo" class="project__logo" loading="lazy">
    <h3 class="project__company">BorgWarner</h3>
</div>
```

**Project 5 - University at Buffalo:**
```html
<div class="project__company-wrapper">
    <img src="assets/logos/university-buffalo.svg" alt="University at Buffalo logo" class="project__logo" loading="lazy">
    <h3 class="project__company">University at Buffalo</h3>
</div>
```

---

### Step 4: CSS Styling

Add the following CSS to `css/style.css`:

```css
/*=============== COMPANY LOGOS ===============*/

/* Company wrapper for logo + name */
.project__company-wrapper {
  display: flex;
  align-items: center;
  gap: var(--space-4);
}

/* Logo styling */
.project__logo {
  width: 48px;
  height: 48px;
  object-fit: contain;
  border-radius: 8px;
  padding: var(--space-2);
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  transition: all var(--transition);
}

/* Logo hover effect */
.project__logo:hover {
  transform: scale(1.05);
  border-color: var(--accent);
}

/* Dark mode adjustments for logos */
.dark .project__logo {
  background: var(--bg-secondary);
  border-color: var(--border);
}

/* Responsive sizing */
@media (max-width: 767px) {
  .project__logo {
    width: 40px;
    height: 40px;
  }
  
  .project__company-wrapper {
    gap: var(--space-3);
  }
}

/* For logos that need inversion in dark mode (optional) */
.dark .project__logo.invert-dark {
  filter: invert(1) brightness(1.2);
}
```

---

### Step 5: Dark Mode Considerations

Some logos may need special handling for dark mode:

#### Option 1: Use CSS Filter (Simple)
```css
.dark .project__logo {
  filter: brightness(0) invert(1);
}
```

#### Option 2: Swap Images (Better Quality)
```html
<picture>
  <source srcset="assets/logos/apple-dark.svg" media="(prefers-color-scheme: dark)">
  <img src="assets/logos/apple-light.svg" alt="Apple logo" class="project__logo">
</picture>
```

#### Option 3: Use JavaScript (Most Flexible)
Add to `js/main.js`:
```javascript
function updateLogos() {
  const isDark = document.body.classList.contains('dark');
  const logos = document.querySelectorAll('.project__logo');
  
  logos.forEach(logo => {
    const src = logo.getAttribute('src');
    if (isDark && !src.includes('-dark')) {
      logo.setAttribute('src', src.replace('.svg', '-dark.svg'));
    } else if (!isDark && src.includes('-dark')) {
      logo.setAttribute('src', src.replace('-dark.svg', '.svg'));
    }
  });
}

// Call when theme changes
document.getElementById('theme-toggle').addEventListener('click', updateLogos);
```

---

## 🎨 Design Recommendations

### Logo Sizing:
- **Desktop**: 48x48px
- **Mobile**: 40x40px
- **Padding**: 8px inside container
- **Border Radius**: 8px for modern look

### Logo Container:
- **Background**: Light gray in light mode, dark gray in dark mode
- **Border**: Subtle 1px border matching theme
- **Hover Effect**: Slight scale (1.05) and accent border color

### Spacing:
- **Gap between logo and company name**: 16px (var(--space-4))
- **Maintain existing vertical spacing** between projects

---

## ✅ Testing Checklist

- [ ] All logos load correctly
- [ ] Logos display properly in light mode
- [ ] Logos display properly in dark mode
- [ ] Logos are properly sized on desktop
- [ ] Logos are properly sized on mobile
- [ ] Logos have proper alt text for accessibility
- [ ] Lazy loading works (logos below fold)
- [ ] Hover effects work smoothly
- [ ] No layout shift when logos load
- [ ] Logos align properly with company names
- [ ] Print styles (if needed)

---

## 🚀 Quick Start Commands

### Create logos directory:
```bash
mkdir -p assets/logos
```

### Download logos (example using curl):
```bash
# You'll need to find the actual URLs
curl -o assets/logos/apple.svg "URL_TO_APPLE_LOGO"
curl -o assets/logos/stellantis.svg "URL_TO_STELLANTIS_LOGO"
# ... etc
```

---

## 📝 Alternative Approaches

### Approach 1: Icon Font (Not Recommended)
- Use brand icon fonts like Font Awesome Brands
- Pros: Easy to implement, scalable
- Cons: Limited selection, not official logos

### Approach 2: Background Images (Not Recommended)
- Use CSS background-image
- Pros: No HTML changes needed
- Cons: Poor accessibility, harder to maintain

### Approach 3: Inline SVG (Advanced)
- Embed SVG code directly in HTML
- Pros: Full control, can style with CSS
- Cons: Verbose HTML, harder to maintain

**Recommended: Use `<img>` tags with SVG files** (as outlined above)

---

## 🎯 Expected Result

Each work experience entry will have:
1. Company logo on the left
2. Company name next to logo
3. Date period on the right
4. Smooth hover effects
5. Proper dark mode support
6. Responsive sizing

Visual hierarchy:
```
[Logo] Company Name                    2021 - Present
       Job Title
       Description...
```

---

## 📚 Resources

- **SVG Optimization**: https://jakearchibald.github.io/svgomg/
- **Image Compression**: https://tinypng.com/
- **Logo Guidelines**: Check each company's brand guidelines
- **Accessibility**: https://www.w3.org/WAI/tutorials/images/

---

## 🔄 Next Steps After Implementation

1. Test on multiple devices and browsers
2. Validate HTML and CSS
3. Check accessibility with screen readers
4. Optimize logo file sizes
5. Add to git and deploy
6. Monitor page load performance

---

## Notes

- Keep original logo files in a separate folder for backup
- Document logo sources and licenses
- Consider adding a fallback for failed logo loads
- Ensure logos don't slow down page load time
- Test with slow 3G connection

---

**Created**: 2026-01-27
**Status**: Ready for Implementation
**Priority**: Medium
**Estimated Time**: 2-3 hours
