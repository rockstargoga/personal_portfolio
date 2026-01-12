# 🚀 Quick Setup Guide

This guide will help you get your portfolio website up and running in minutes, even if you have no web development experience!

## 📋 Prerequisites

- A computer with internet connection
- A web browser (Chrome, Firefox, Safari, or Edge)
- [VS Code](https://code.visualstudio.com/) (free code editor)

## 🎯 Step-by-Step Setup

### Step 1: Download Your Files

1. You should have a folder called `personal-portfolio` with these files:
   ```
   personal-portfolio/
   ├── index.html
   ├── css/
   │   └── style.css
   ├── js/
   │   └── main.js
   ├── assets/
   │   ├── images/
   │   └── icons/
   ├── README.md
   └── SETUP.md (this file)
   ```

### Step 2: Install VS Code & Live Server

1. **Download VS Code:**
   - Go to https://code.visualstudio.com/
   - Click "Download" for your operating system
   - Install it (just click "Next" through the installer)

2. **Install Live Server Extension:**
   - Open VS Code
   - Click the Extensions icon (4 squares) on the left sidebar
   - Search for "Live Server"
   - Click "Install" on the one by Ritwick Dey
   - Wait for installation to complete

### Step 3: Open Your Project

1. In VS Code, click **File** → **Open Folder**
2. Navigate to your `personal-portfolio` folder
3. Click **Select Folder** (or **Open** on Mac)
4. You should see all your files in the left sidebar

### Step 4: Preview Your Website

1. Find `index.html` in the left sidebar
2. **Right-click** on `index.html`
3. Select **"Open with Live Server"**
4. Your browser will automatically open showing your website! 🎉
5. Any changes you make will auto-refresh the browser

## ✏️ Customizing Your Portfolio

### Change Your Name & Title

1. Open `index.html` in VS Code
2. Press `Ctrl+F` (or `Cmd+F` on Mac) to search
3. Search for "Your Name" and replace with your actual name
4. Search for "Software Engineer & Creative Developer" and replace with your title
5. Save the file (`Ctrl+S` or `Cmd+S`)
6. Watch it update in your browser automatically!

### Update Your Bio

1. In `index.html`, find the "About Me" section (around line 150)
2. Replace the placeholder text with your own story
3. Update the experience numbers:
   - "3+ Years Working" → Your experience
   - "15+ Projects" → Your project count
   - "5+ Achievements" → Your achievements

### Add Your Projects

1. Find the "Projects" section in `index.html` (around line 200)
2. For each project, update:
   - **Project Title:** `<h3 class="project__title">Your Project Name</h3>`
   - **Description:** `<p class="project__description">Your description</p>`
   - **Technologies:** `<span class="project__tag">YourTech</span>`
   - **Link:** `<a href="your-project-url">View Project →</a>`

### Update Contact Information

1. Search for "your.email@example.com" and replace with your email
2. Search for "linkedin.com/in/yourprofile" and replace with your LinkedIn
3. Search for "github.com/yourusername" and replace with your GitHub
4. Update Twitter/X link if you have one

### Change Colors (Optional)

1. Open `css/style.css`
2. Find the `:root` section at the top (around line 10)
3. Change these values:

   **For a different color scheme:**
   ```css
   --primary-color: #00d9ff;    /* Change this hex code */
   --secondary-color: #6366f1;  /* Change this hex code */
   ```

   **Popular color combinations:**
   - **Purple & Pink:** `#a855f7` and `#ec4899`
   - **Green & Teal:** `#10b981` and `#14b8a6`
   - **Orange & Red:** `#f97316` and `#ef4444`

4. Save and watch the colors update instantly!

## 🖼️ Adding Your Images

### For Project Screenshots

1. Save your project images in `assets/images/`
2. Name them clearly: `project1.jpg`, `project2.png`, etc.
3. In `index.html`, find the project placeholder:
   ```html
   <div class="project__placeholder">
       <span class="project__icon">🚀</span>
   </div>
   ```
4. Replace with:
   ```html
   <img src="assets/images/project1.jpg" alt="Project Name">
   ```

### For Profile Photo (Optional)

1. Save your photo as `profile.jpg` in `assets/images/`
2. In the home section, replace the blob SVG with:
   ```html
   <img src="assets/images/profile.jpg" alt="Your Name" class="home__img">
   ```

## 🌐 Publishing Your Website

### Option 1: Netlify (Easiest - Drag & Drop)

1. **Go to Netlify:**
   - Visit https://www.netlify.com
   - Click "Sign up" (use GitHub, Google, or Email)

2. **Deploy Your Site:**
   - Click "Add new site" → "Deploy manually"
   - Drag your entire `personal-portfolio` folder into the upload area
   - Wait 30-60 seconds
   - Your site is live! 🎉

3. **Get Your URL:**
   - Netlify gives you a free URL like: `random-name-123.netlify.app`
   - Click "Site settings" → "Change site name" to customize it

### Option 2: Connect Your Squarespace Domain

1. **In Netlify:**
   - Go to "Domain settings"
   - Click "Add custom domain"
   - Enter your Squarespace domain (e.g., `yourdomain.com`)
   - Netlify will show DNS records

2. **In Squarespace:**
   - Log in to Squarespace
   - Go to Settings → Domains → Your Domain
   - Click "DNS Settings"
   - Add these records from Netlify:
     - **A Record:** Host: `@`, Value: `75.2.60.5`
     - **CNAME:** Host: `www`, Value: `your-site.netlify.app`
   - Save changes

3. **Wait & Verify:**
   - DNS changes take 1-48 hours (usually much faster)
   - Return to Netlify and click "Verify DNS"
   - Once verified, Netlify adds free HTTPS (secure connection)

## 🎨 Theme Toggle

Your website has a built-in dark/light mode toggle:
- Click the sun/moon icon in the top right
- Your preference is saved automatically
- Works on all pages

## 📱 Mobile Responsive

Your website automatically adjusts for:
- 📱 Mobile phones
- 📱 Tablets
- 💻 Laptops
- 🖥️ Desktop monitors

Test it by resizing your browser window!

## ✅ Pre-Launch Checklist

Before publishing, make sure you've updated:

- [ ] Your name in the header and footer
- [ ] Your title/tagline
- [ ] About section bio
- [ ] All project information
- [ ] Contact email and social links
- [ ] Meta tags in `<head>` (title, description)
- [ ] Favicon (the small icon in browser tab)

## 🆘 Common Issues & Solutions

### Issue: Live Server not working
**Solution:** 
- Make sure you installed the "Live Server" extension
- Right-click directly on `index.html`
- Try restarting VS Code

### Issue: Changes not showing
**Solution:**
- Save your file (`Ctrl+S` or `Cmd+S`)
- Hard refresh browser (`Ctrl+Shift+R` or `Cmd+Shift+R`)
- Check if Live Server is running (bottom right of VS Code)

### Issue: Colors look wrong
**Solution:**
- Check you're editing `css/style.css`
- Make sure you're using valid hex codes (e.g., `#00d9ff`)
- Clear browser cache

### Issue: Images not showing
**Solution:**
- Check image path is correct: `assets/images/yourimage.jpg`
- Make sure image file exists in the folder
- Check file extension matches (`.jpg`, `.png`, etc.)

### Issue: Dark mode not saving
**Solution:**
- Check browser allows localStorage
- Try a different browser
- Clear browser cache and cookies

## 🎓 Learning Resources

Want to customize further? Learn these basics:

1. **HTML Basics:**
   - https://www.w3schools.com/html/
   - https://developer.mozilla.org/en-US/docs/Learn/HTML

2. **CSS Basics:**
   - https://www.w3schools.com/css/
   - https://css-tricks.com/

3. **JavaScript Basics:**
   - https://javascript.info/
   - https://www.w3schools.com/js/

## 📞 Need Help?

1. **Check the main README.md** for detailed documentation
2. **Search online:** "How to [your question] HTML CSS"
3. **Browser DevTools:** Right-click → "Inspect" to debug
4. **VS Code:** Hover over code for hints and documentation

## 🎉 You're All Set!

Your portfolio is ready to impress! Remember:
- Keep your content updated
- Add new projects as you complete them
- Share your portfolio URL on LinkedIn, resume, and social media
- Get feedback and iterate

**Good luck with your portfolio! 🚀**

---

*Need to make changes later? Just open the project in VS Code, edit the files, and re-deploy to Netlify (drag & drop the folder again).*