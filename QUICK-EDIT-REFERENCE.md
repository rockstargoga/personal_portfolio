# ⚡ Quick Edit Reference Card

**Print this or keep it handy while editing!**

---

## 🚀 3 Steps to Start Editing

1. **Open VS Code** → File → Open Folder → Select `personal-portfolio`
2. **Install Live Server** → Extensions (4 squares icon) → Search "Live Server" → Install
3. **Preview Site** → Right-click `index.html` → "Open with Live Server"

---

## 📝 What to Edit (Cheat Sheet)

### Your Personal Info

| What | File | Search For | Line # |
|------|------|-----------|--------|
| **Your Name** | `index.html` | `Your Name` | ~50 |
| **Your Title** | `index.html` | `Software Engineer & Creative Developer` | ~55 |
| **Your Bio** | `index.html` | `I'm a passionate software engineer` | ~150 |
| **Email** | `index.html` | `your.email@example.com` | ~330 |
| **LinkedIn** | `index.html` | `linkedin.com/in/yourprofile` | ~340 |
| **GitHub** | `index.html` | `github.com/yourusername` | ~350 |

### Colors

| What | File | Line # | Default Value |
|------|------|--------|---------------|
| **Primary Color** | `css/style.css` | ~12 | `#00d9ff` (Cyan) |
| **Secondary Color** | `css/style.css` | ~13 | `#6366f1` (Purple) |
| **Accent Color** | `css/style.css` | ~14 | `#8b5cf6` (Violet) |

### Projects

| What | File | Search For | Line # |
|------|------|-----------|--------|
| **Project 1** | `index.html` | `E-Commerce Platform` | ~230 |
| **Project 2** | `index.html` | `Task Management App` | ~260 |
| **Project 3** | `index.html` | `Design System Library` | ~290 |

---

## 🎨 Popular Color Schemes (Copy & Paste)

**Cyberpunk Pink:**
```css
--primary-color: #ff006e;
--secondary-color: #8338ec;
```

**Ocean Blue:**
```css
--primary-color: #06b6d4;
--secondary-color: #0284c7;
```

**Sunset Orange:**
```css
--primary-color: #f97316;
--secondary-color: #ea580c;
```

**Forest Green:**
```css
--primary-color: #10b981;
--secondary-color: #059669;
```

---

## 🔍 How to Find & Replace

1. Press `Ctrl+F` (Windows) or `Cmd+F` (Mac)
2. Type what you want to find
3. Press `Ctrl+H` (Windows) or `Cmd+H` (Mac) to replace
4. Type new text
5. Click "Replace All" or replace one by one

---

## 💾 Save & Preview

- **Save:** `Ctrl+S` (Windows) or `Cmd+S` (Mac)
- **Undo:** `Ctrl+Z` (Windows) or `Cmd+Z` (Mac)
- **Auto-refresh:** Live Server updates browser automatically

---

## 🖼️ Add Images

1. Save image in `assets/images/` folder
2. In HTML, replace:
```html
<div class="project__placeholder">
    <span class="project__icon">🚀</span>
</div>
```

With:
```html
<img src="assets/images/your-image.jpg" alt="Description">
```

---

## ✅ Before Publishing Checklist

- [ ] Changed "Your Name" everywhere
- [ ] Updated your title/tagline
- [ ] Wrote your bio
- [ ] Added your projects (at least 3)
- [ ] Updated email address
- [ ] Updated LinkedIn URL
- [ ] Updated GitHub URL
- [ ] Changed colors (optional)
- [ ] Added project images (optional)
- [ ] Tested on mobile (F12 → phone icon)

---

## 🆘 Quick Fixes

**Problem:** Changes not showing  
**Fix:** Save file (`Ctrl+S`), hard refresh browser (`Ctrl+Shift+R`)

**Problem:** Colors look wrong  
**Fix:** Use 6-character hex codes: `#00d9ff` not `#00d9f`

**Problem:** Layout broken  
**Fix:** Check you didn't delete `<div>` or `</div>` tags

**Problem:** Live Server not working  
**Fix:** Restart VS Code, reinstall Live Server extension

---

## 📱 Test on Mobile

1. Open browser DevTools: Press `F12`
2. Click phone icon (top-left)
3. Select device: iPhone, iPad, etc.
4. Test all sections

---

## 🚀 Deploy to Netlify

1. Go to [netlify.com](https://netlify.com)
2. Sign up (free)
3. Drag entire `personal-portfolio` folder
4. Get your URL!
5. Connect Squarespace domain (see README.md)

---

**Keep this reference handy while editing! 📌**

*For detailed instructions, see: [EDITING-GUIDE.md](EDITING-GUIDE.md)*