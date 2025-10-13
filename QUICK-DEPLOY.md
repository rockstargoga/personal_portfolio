# Quick Deploy - Copy & Paste Commands

Use this guide if you want to deploy FAST. Just copy and paste these commands.

---

## ⚡ 5-Minute Deploy

### Step 1: Push to GitHub (2 minutes)

```bash
# Navigate to your portfolio folder
cd "/Users/rohitmeshram/Downloads/Code/Personal Website"

# Initialize git (if not done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial portfolio commit"

# Create GitHub repo first at: github.com/new
# Then run (replace YOUR-USERNAME):
git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Netlify (3 minutes)

1. Go to [app.netlify.com](https://app.netlify.com)
2. Click "Sign up with GitHub"
3. Click "Add new site" → "Import an existing project"
4. Choose GitHub → Select your `portfolio` repo
5. Click "Deploy site"

**Done!** Your site is live at `random-name.netlify.app`

---

## 🔄 Update Your Portfolio

Every time you make changes:

```bash
git add .
git commit -m "Updated portfolio"
git push
```

Netlify auto-deploys in 1-2 minutes!

---

## 🌐 Change Your URL

In Netlify:
1. Site settings → Domain management
2. Options → Edit site name
3. Change to: `yourname-portfolio`
4. Save

New URL: `yourname-portfolio.netlify.app`

---

## 📧 Enable Contact Form

1. Open `index.html`
2. Find line ~326: `<form class="contact__form" id="contact-form">`
3. Change to: `<form class="contact__form" id="contact-form" netlify>`
4. Save and push:

```bash
git add index.html
git commit -m "Enable contact form"
git push
```

5. In Netlify: Site settings → Forms → Add email notification

---

## 🆘 Troubleshooting

### Git push fails?
```bash
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
git push
```

### Site not updating?
```bash
# Check status
git status

# Force refresh browser
# Mac: Cmd+Shift+R
# Windows: Ctrl+Shift+R
```

### Need to start over?
```bash
# Remove git
rm -rf .git

# Start fresh
git init
git add .
git commit -m "Fresh start"
```

---

## ✅ Deployment Checklist

Before deploying:
- [ ] Updated your name and info
- [ ] Tested contact form locally
- [ ] Checked on mobile
- [ ] All links work
- [ ] Resume link updated (or removed)

---

## 📱 Share Your Portfolio

Once live, add to:
- LinkedIn profile URL
- Resume header
- Email signature
- GitHub profile
- Twitter/X bio

---

**Your portfolio will be live at:**
`https://yourname-portfolio.netlify.app`

**Full guide:** See `DEPLOYMENT-GUIDE.md` for detailed instructions