# Portfolio Deployment Guide
## GitHub + Netlify Step-by-Step

This guide will walk you through deploying your portfolio to the web using GitHub and Netlify. No prior experience needed!

---

## 📋 What You'll Need

- [ ] GitHub account (free) - [Sign up here](https://github.com/signup)
- [ ] Netlify account (free) - [Sign up here](https://app.netlify.com/signup)
- [ ] Your portfolio files (you already have these!)

**Time Required:** 15-20 minutes

---

## Part 1: Push to GitHub (10 minutes)

### Step 1: Create a GitHub Account
1. Go to [github.com/signup](https://github.com/signup)
2. Enter your email, create a password
3. Choose a username (this will be in your portfolio URL)
4. Verify your account via email

### Step 2: Create a New Repository
1. Go to [github.com/new](https://github.com/new)
2. **Repository name:** `portfolio` (or any name you like)
3. **Description:** "My professional portfolio website"
4. **Visibility:** Choose "Public" (required for free Netlify)
5. **DO NOT** check "Add a README file"
6. Click **"Create repository"**

### Step 3: Initialize Git in Your Project
Open Terminal/Command Prompt in your portfolio folder and run:

```bash
# Navigate to your portfolio folder
cd "/Users/rohitmeshram/Downloads/Code/Personal Website"

# Initialize git (if not already done)
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial portfolio commit"
```

### Step 4: Connect to GitHub
Copy the commands from GitHub (they'll look like this):

```bash
# Add GitHub as remote (replace USERNAME and REPO with yours)
git remote add origin https://github.com/USERNAME/portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Example:**
```bash
git remote add origin https://github.com/rohitmeshram/portfolio.git
git branch -M main
git push -u origin main
```

You'll be asked to login to GitHub - use your credentials.

### ✅ Checkpoint 1
Your code is now on GitHub! Visit `github.com/YOUR-USERNAME/portfolio` to see it.

---

## Part 2: Deploy to Netlify (5 minutes)

### Step 1: Sign Up for Netlify
1. Go to [app.netlify.com/signup](https://app.netlify.com/signup)
2. Click **"Sign up with GitHub"**
3. Authorize Netlify to access your GitHub account

### Step 2: Import Your Repository
1. Click **"Add new site"** → **"Import an existing project"**
2. Click **"Deploy with GitHub"**
3. Find and click your `portfolio` repository
4. **Site settings:**
   - **Branch to deploy:** `main`
   - **Build command:** Leave empty
   - **Publish directory:** Leave empty (or put `.`)
5. Click **"Deploy site"**

### Step 3: Wait for Deployment
- Netlify will build and deploy your site (takes 30-60 seconds)
- You'll see a random URL like `random-name-123456.netlify.app`
- Click the URL to see your live portfolio! 🎉

### ✅ Checkpoint 2
Your portfolio is now live on the internet!

---

## Part 3: Customize Your URL (Optional, 2 minutes)

### Option A: Use Netlify Subdomain (Free)
1. In Netlify, go to **Site settings** → **Domain management**
2. Click **"Options"** → **"Edit site name"**
3. Change to: `yourname-portfolio.netlify.app`
4. Click **"Save"**

**Example:** `rohitmeshram-portfolio.netlify.app`

### Option B: Use Custom Domain (Costs $10-15/year)
1. Buy a domain from [Namecheap](https://www.namecheap.com) or [Google Domains](https://domains.google)
2. In Netlify: **Domain management** → **"Add custom domain"**
3. Enter your domain (e.g., `rohitmeshram.com`)
4. Follow Netlify's instructions to update DNS settings
5. Wait 24-48 hours for DNS to propagate

---

## Part 4: Enable HTTPS (Automatic)

Netlify automatically provides free HTTPS:
1. Go to **Site settings** → **Domain management**
2. Scroll to **HTTPS**
3. Click **"Verify DNS configuration"**
4. Click **"Provision certificate"**
5. Wait 1-2 minutes

Your site now has `https://` 🔒

---

## Part 5: Set Up Contact Form (5 minutes)

### Update HTML for Netlify Forms
1. Open `index.html`
2. Find the `<form>` tag (around line 326)
3. Add `netlify` attribute:

```html
<!-- Change this: -->
<form class="contact__form" id="contact-form">

<!-- To this: -->
<form class="contact__form" id="contact-form" netlify>
```

4. Save and push to GitHub:

```bash
git add index.html
git commit -m "Enable Netlify forms"
git push
```

Netlify will auto-deploy the update in 1-2 minutes.

### Configure Form Notifications
1. In Netlify: **Site settings** → **Forms**
2. Click **"Form notifications"**
3. Add your email to receive form submissions
4. Test by submitting the form on your live site

---

## 🚀 Your Portfolio is Live!

### Your URLs:
- **Netlify URL:** `https://yourname-portfolio.netlify.app`
- **Custom Domain:** `https://yourdomain.com` (if you set one up)
- **GitHub Repo:** `https://github.com/yourusername/portfolio`

---

## 📝 Making Updates

### Every time you want to update your portfolio:

```bash
# 1. Make your changes in index.html or other files

# 2. Save all files

# 3. Push to GitHub
git add .
git commit -m "Updated portfolio content"
git push

# 4. Netlify auto-deploys in 1-2 minutes!
```

**That's it!** No need to manually deploy to Netlify - it happens automatically.

---

## 🔧 Troubleshooting

### Problem: Git push fails
**Solution:**
```bash
# If you get authentication errors
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Try pushing again
git push
```

### Problem: Netlify build fails
**Solution:**
- Check **Deploys** tab in Netlify for error messages
- Make sure all files are committed to GitHub
- Verify `index.html` is in the root directory

### Problem: Contact form not working
**Solution:**
- Make sure you added `netlify` attribute to `<form>` tag
- Check **Forms** tab in Netlify dashboard
- Test form submission and check spam folder for notifications

### Problem: Site not updating
**Solution:**
- Check if GitHub push was successful: `git status`
- Check Netlify **Deploys** tab - should show "Published"
- Clear browser cache: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)

### Problem: Custom domain not working
**Solution:**
- Wait 24-48 hours for DNS propagation
- Verify DNS settings in your domain registrar
- Check Netlify **Domain management** for status

---

## 📊 Monitoring Your Site

### Netlify Analytics (Optional, $9/month)
- Track visitors, page views, bandwidth
- See which pages are most popular
- Monitor form submissions

### Free Alternatives:
- **Google Analytics:** [analytics.google.com](https://analytics.google.com)
- **Plausible:** [plausible.io](https://plausible.io) (privacy-friendly)

---

## 🔐 Security Best Practices

### 1. Enable Branch Protection (GitHub)
1. Go to your repo → **Settings** → **Branches**
2. Add rule for `main` branch
3. Enable "Require pull request reviews"

### 2. Set Up Deploy Previews (Netlify)
- Automatically enabled!
- Every pull request gets a preview URL
- Test changes before merging to main

### 3. Environment Variables (if needed)
1. Netlify: **Site settings** → **Environment variables**
2. Add sensitive data (API keys, etc.)
3. Never commit secrets to GitHub

---

## 📱 Mobile Testing

Test your portfolio on mobile:
1. Open your Netlify URL on your phone
2. Check all sections load correctly
3. Test the contact form
4. Verify navigation menu works

---

## 🎯 Next Steps

### Immediate:
- [ ] Push code to GitHub
- [ ] Deploy to Netlify
- [ ] Test live site
- [ ] Set up custom domain (optional)
- [ ] Configure contact form notifications

### Within a Week:
- [ ] Share portfolio URL on LinkedIn
- [ ] Add to resume
- [ ] Test on multiple devices
- [ ] Get feedback from friends/colleagues

### Ongoing:
- [ ] Update projects every 3-6 months
- [ ] Keep skills and certifications current
- [ ] Monitor form submissions
- [ ] Check analytics monthly

---

## 📞 Getting Help

### Resources:
- **Netlify Docs:** [docs.netlify.com](https://docs.netlify.com)
- **GitHub Docs:** [docs.github.com](https://docs.github.com)
- **Netlify Support:** [answers.netlify.com](https://answers.netlify.com)

### Common Commands Reference:

```bash
# Check git status
git status

# See commit history
git log --oneline

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Force push (use carefully!)
git push --force

# Pull latest changes
git pull origin main

# Create new branch
git checkout -b feature-name

# Switch branches
git checkout main
```

---

## ✅ Deployment Checklist

Before going live:
- [ ] All personal information updated
- [ ] Resume link works (or removed if not ready)
- [ ] LinkedIn URL is correct
- [ ] Contact form tested
- [ ] Mobile responsive checked
- [ ] All links work
- [ ] No placeholder text remaining
- [ ] Spell check completed
- [ ] Dark mode tested
- [ ] Browser compatibility checked (Chrome, Safari, Firefox)

---

## 🎉 Congratulations!

Your portfolio is now live and accessible to the world!

**Share it:**
- LinkedIn profile
- Resume
- Email signature
- Twitter/X bio
- GitHub profile README

**Your live portfolio:** `https://yourname-portfolio.netlify.app`

---

**Last Updated:** January 2025  
**Version:** 1.0  
**Deployment Time:** ~15-20 minutes