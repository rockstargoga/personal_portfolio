# 📝 How to Edit Your Portfolio Website

This guide shows you **exactly** where to make changes, with screenshots and examples.

## 🎯 Quick Start: 3 Steps to Edit

### Step 1: Open Your Project
1. Download and install [VS Code](https://code.visualstudio.com/)
2. Open VS Code
3. Click **File** → **Open Folder**
4. Select your `personal-portfolio` folder
5. You'll see all files in the left sidebar

### Step 2: Install Live Preview
1. Click the **Extensions** icon (4 squares) on the left
2. Search for "Live Server"
3. Click **Install** on "Live Server" by Ritwick Dey
4. Wait for it to install

### Step 3: Preview Your Site
1. Find `index.html` in the left sidebar
2. **Right-click** on it
3. Select **"Open with Live Server"**
4. Your website opens in your browser! 🎉

**Any changes you make will automatically show in the browser!**

---

## ✏️ What to Edit & Where

### 1. YOUR NAME & TITLE

**File:** `index.html`  
**Lines:** 50-55

**Find this:**
```html
<h1 class="home__title">
    <span class="gradient-text">Your Name</span>
</h1>
<p class="home__description">
    <span class="typing-text">Software Engineer & Creative Developer</span>
</p>
```

**Change to:**
```html
<h1 class="home__title">
    <span class="gradient-text">John Smith</span>
</h1>
<p class="home__description">
    <span class="typing-text">Full Stack Developer & UI Designer</span>
</p>
```

---

### 2. YOUR BIO (About Section)

**File:** `index.html`  
**Lines:** 150-160

**Find this:**
```html
<p class="about__description">
    I'm a passionate software engineer with a love for creating elegant solutions 
    to complex problems...
</p>
```

**Replace with your own story:**
```html
<p class="about__description">
    I'm a creative developer who loves building beautiful web applications.
    With 5 years of experience in React and Node.js, I specialize in...
</p>
```

---

### 3. YOUR EXPERIENCE NUMBERS

**File:** `index.html`  
**Lines:** 170-190

**Find and update:**
```html
<span class="about__box-subtitle">3+ Years Working</span>
<!-- Change to your years -->

<span class="about__box-subtitle">15+ Projects</span>
<!-- Change to your project count -->

<span class="about__box-subtitle">5+ Achievements</span>
<!-- Change to your achievements -->
```

---

### 4. YOUR TECH STACK

**File:** `index.html`  
**Lines:** 195-205

**Find this:**
```html
<span class="skill__tag">JavaScript</span>
<span class="skill__tag">React</span>
<span class="skill__tag">Node.js</span>
```

**Add/remove/change technologies:**
```html
<span class="skill__tag">Python</span>
<span class="skill__tag">Django</span>
<span class="skill__tag">PostgreSQL</span>
<span class="skill__tag">Docker</span>
```

---

### 5. YOUR PROJECTS

**File:** `index.html`  
**Lines:** 220-280

**Each project has this structure:**
```html
<article class="project__card" data-animate>
    <div class="project__content">
        <h3 class="project__title">E-Commerce Platform</h3>
        <p class="project__description">
            A full-stack e-commerce solution...
        </p>
        <div class="project__tags">
            <span class="project__tag">React</span>
            <span class="project__tag">Node.js</span>
        </div>
    </div>
</article>
```

**To add a new project, copy the entire `<article>` block and paste it below, then edit:**
```html
<article class="project__card" data-animate>
    <div class="project__content">
        <h3 class="project__title">My Awesome App</h3>
        <p class="project__description">
            This app helps users track their fitness goals...
        </p>
        <div class="project__tags">
            <span class="project__tag">Vue.js</span>
            <span class="project__tag">Firebase</span>
        </div>
    </div>
</article>
```

---

### 6. YOUR CONTACT INFO

**File:** `index.html`  
**Lines:** 320-350

**Find and update:**
```html
<!-- Email -->
<a href="mailto:your.email@example.com" class="contact__card-data">
    your.email@example.com
</a>

<!-- LinkedIn -->
<a href="https://linkedin.com/in/yourprofile" target="_blank" class="contact__card-data">
    /in/yourprofile
</a>

<!-- GitHub -->
<a href="https://github.com/yourusername" target="_blank" class="contact__card-data">
    @yourusername
</a>
```

**Change to your info:**
```html
<!-- Email -->
<a href="mailto:john.smith@gmail.com" class="contact__card-data">
    john.smith@gmail.com
</a>

<!-- LinkedIn -->
<a href="https://linkedin.com/in/johnsmith" target="_blank" class="contact__card-data">
    /in/johnsmith
</a>

<!-- GitHub -->
<a href="https://github.com/johnsmith" target="_blank" class="contact__card-data">
    @johnsmith
</a>
```

---

### 7. FOOTER LINKS

**File:** `index.html`  
**Lines:** 420-450

**Update social media links:**
```html
<a href="https://github.com/yourusername" target="_blank">
<!-- Change to your GitHub -->

<a href="https://linkedin.com/in/yourprofile" target="_blank">
<!-- Change to your LinkedIn -->

<a href="https://twitter.com/yourusername" target="_blank">
<!-- Change to your Twitter/X -->
```

---

## 🎨 Changing Colors

**File:** `css/style.css`  
**Lines:** 10-20

**Find this section:**
```css
:root {
  --primary-color: #00d9ff;      /* Electric Cyan */
  --secondary-color: #6366f1;    /* Indigo Purple */
  --accent-color: #8b5cf6;       /* Violet */
}
```

**Change the hex codes to your preferred colors:**

### Popular Color Schemes:

**1. Purple & Pink (Creative):**
```css
--primary-color: #a855f7;
--secondary-color: #ec4899;
--accent-color: #f472b6;
```

**2. Green & Teal (Fresh):**
```css
--primary-color: #10b981;
--secondary-color: #14b8a6;
--accent-color: #06b6d4;
```

**3. Orange & Red (Bold):**
```css
--primary-color: #f97316;
--secondary-color: #ef4444;
--accent-color: #dc2626;
```

**4. Blue & Indigo (Professional):**
```css
--primary-color: #3b82f6;
--secondary-color: #6366f1;
--accent-color: #8b5cf6;
```

**Find colors at:** [Coolors.co](https://coolors.co) or [Color Hunt](https://colorhunt.co)

---

## 🖼️ Adding Your Images

### For Project Screenshots:

1. **Save your image** in the `assets/images/` folder
2. **Name it clearly:** `project1.jpg`, `ecommerce-app.png`, etc.

3. **In `index.html`, find the project placeholder:**
```html
<div class="project__image">
    <div class="project__placeholder">
        <span class="project__icon">🚀</span>
    </div>
</div>
```

4. **Replace with:**
```html
<div class="project__image">
    <img src="assets/images/project1.jpg" alt="E-Commerce Platform">
</div>
```

### For Profile Photo:

1. Save your photo as `profile.jpg` in `assets/images/`
2. In the home section (around line 100), replace the blob SVG with:
```html
<div class="home__image" data-animate>
    <img src="assets/images/profile.jpg" alt="Your Name" style="border-radius: 50%; max-width: 400px;">
</div>
```

---

## 💡 Pro Tips

### Tip 1: Use Search to Find Text
- Press `Ctrl+F` (Windows) or `Cmd+F` (Mac)
- Type what you want to find
- Replace it with your content

### Tip 2: Save Your Changes
- Press `Ctrl+S` (Windows) or `Cmd+S` (Mac)
- Or click **File** → **Save**
- Live Server will auto-refresh your browser

### Tip 3: Undo Mistakes
- Press `Ctrl+Z` (Windows) or `Cmd+Z` (Mac)
- This undoes your last change

### Tip 4: Preview on Mobile
- In your browser, press `F12` to open DevTools
- Click the phone icon (top-left)
- Select different device sizes

### Tip 5: Check for Errors
- Look at the bottom-left of VS Code
- If you see errors (red X), click to see what's wrong
- Usually it's a missing `>` or `"` character

---

## 🔄 Making Updates After Publishing

1. **Edit your files** in VS Code
2. **Save changes** (`Ctrl+S` or `Cmd+S`)
3. **Re-deploy to Netlify:**
   - Drag your entire folder to Netlify again
   - OR if using GitHub: `git add .` → `git commit -m "Update"` → `git push`

---

## 📱 What Each File Does

| File | What It Does | When to Edit |
|------|-------------|--------------|
| `index.html` | Your website content | Change text, add projects, update links |
| `css/style.css` | How it looks | Change colors, fonts, spacing |
| `js/main.js` | How it works | Usually don't need to edit |
| `README.md` | Documentation | Reference only |
| `SETUP.md` | Setup guide | Reference only |

---

## ❓ Common Questions

**Q: How do I add more projects?**  
A: Copy an entire `<article class="project__card">...</article>` block and paste it below the last project. Then edit the content.

**Q: Can I change the font?**  
A: Yes! Go to [Google Fonts](https://fonts.google.com), pick a font, copy the link, and replace it in `index.html` (around line 20).

**Q: How do I remove a section?**  
A: Find the section in `index.html` (like `<section class="about section">`) and delete everything from `<section>` to `</section>`.

**Q: The colors look weird?**  
A: Make sure you're using valid hex codes (6 characters after #). Example: `#00d9ff` not `#00d9f`.

**Q: How do I test on my phone?**  
A: Once deployed to Netlify, visit the URL on your phone. Or use browser DevTools (F12) to simulate mobile.

---

## 🆘 Need Help?

1. **Check the browser console:** Right-click → Inspect → Console tab
2. **Check VS Code problems:** Look at bottom-left for errors
3. **Search online:** "How to [your question] HTML CSS"
4. **Start fresh:** Download the original files again

---

## ✅ Pre-Launch Checklist

Before publishing, make sure you've updated:

- [ ] Your name (header, footer, title tag)
- [ ] Your title/tagline
- [ ] About section bio
- [ ] Experience numbers
- [ ] Tech stack tags
- [ ] All 3 projects (or add more)
- [ ] Contact email
- [ ] LinkedIn URL
- [ ] GitHub URL
- [ ] Twitter/X URL (or remove if you don't have)
- [ ] Footer copyright year
- [ ] Page title in `<title>` tag (line 30)
- [ ] Meta description (line 15)

---

**You're ready to edit! Open VS Code, make changes, and watch them appear live in your browser! 🚀**