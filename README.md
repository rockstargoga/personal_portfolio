# 🚀 Modern Portfolio Website

A sleek, futuristic personal portfolio website built with pure HTML, CSS, and JavaScript. Features a beautiful dark/light theme toggle, smooth animations, and responsive design optimized for all devices.

## ✨ Features

- 🎨 **Modern Futuristic Design** - Clean, professional aesthetic with gradient accents
- 🌓 **Dark/Light Mode** - Toggle between themes with localStorage persistence
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- ⚡ **Smooth Animations** - Intersection Observer API for scroll-triggered effects
- 🎯 **SEO Optimized** - Meta tags and semantic HTML for better search visibility
- 🚀 **Fast Performance** - No frameworks, pure vanilla JavaScript
- ♿ **Accessible** - ARIA labels and keyboard navigation support
- 🎭 **Easy Customization** - CSS variables for quick theme changes

## 📁 Project Structure

```
personal-portfolio/
│
├── index.html              # Main HTML file
├── css/
│   └── style.css          # All styles with CSS variables
├── js/
│   └── main.js            # JavaScript functionality
├── assets/
│   ├── images/            # Your portfolio images
│   └── icons/             # SVG icons
└── README.md              # This file
```

## 🎨 Customization Guide

### Changing Colors

All colors are defined as CSS variables in `css/style.css`. Find the `:root` section at the top of the file:

```css
:root {
  /* Primary Colors - Change these for your brand */
  --primary-color: #00d9ff;      /* Electric Cyan */
  --secondary-color: #6366f1;    /* Indigo Purple */
  --accent-color: #8b5cf6;       /* Violet */
  
  /* ... more variables */
}
```

**Quick Color Schemes:**

1. **Cyberpunk Neon:**
   ```css
   --primary-color: #ff006e;
   --secondary-color: #8338ec;
   --accent-color: #3a86ff;
   ```

2. **Ocean Blue:**
   ```css
   --primary-color: #06b6d4;
   --secondary-color: #0284c7;
   --accent-color: #0369a1;
   ```

3. **Sunset Orange:**
   ```css
   --primary-color: #f97316;
   --secondary-color: #ea580c;
   --accent-color: #dc2626;
   ```

### Updating Content

#### 1. Personal Information
Edit `index.html` and find these sections:

**Name & Title:**
```html
<h1 class="home__title">
    <span class="gradient-text">Your Name</span>
</h1>
<p class="home__description">
    <span class="typing-text">Software Engineer & Creative Developer</span>
</p>
```

**About Section:**
```html
<div class="about__content" data-animate>
    <p class="about__description">
        <!-- Replace with your bio -->
    </p>
</div>
```

#### 2. Projects
Find the projects section and update each project card:

```html
<article class="project__card" data-animate>
    <div class="project__content">
        <h3 class="project__title">Your Project Name</h3>
        <p class="project__description">
            Your project description here
        </p>
        <div class="project__tags">
            <span class="project__tag">Tech1</span>
            <span class="project__tag">Tech2</span>
        </div>
    </div>
</article>
```

#### 3. Contact Information
Update your contact details:

```html
<a href="mailto:your.email@example.com" class="contact__card-data">
    your.email@example.com
</a>
```

#### 4. Social Links
Update footer social links:

```html
<a href="https://github.com/yourusername" target="_blank">
<a href="https://linkedin.com/in/yourprofile" target="_blank">
<a href="https://twitter.com/yourusername" target="_blank">
```

### Adding Your Images

1. Place your images in `assets/images/`
2. Update the project placeholders in `index.html`:

```html
<div class="project__image">
    <img src="assets/images/project1.jpg" alt="Project Name">
</div>
```

### Changing Fonts

The site uses Google Fonts (Orbitron + Inter). To change:

1. Visit [Google Fonts](https://fonts.google.com)
2. Select your fonts
3. Replace the link in `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=YourFont&display=swap" rel="stylesheet">
```

4. Update CSS variables:

```css
--font-heading: 'YourHeadingFont', sans-serif;
--font-body: 'YourBodyFont', sans-serif;
```

## 🚀 Deployment Guide (Netlify)

### Method 1: Drag & Drop (Easiest)

1. **Prepare Your Files**
   - Make sure all your files are in one folder
   - Test locally first (see Local Testing below)

2. **Deploy to Netlify**
   - Go to [Netlify](https://www.netlify.com)
   - Sign up for a free account
   - Click "Add new site" → "Deploy manually"
   - Drag your entire project folder into the upload area
   - Wait for deployment (usually 30-60 seconds)
   - Your site is live! 🎉

3. **Get Your URL**
   - Netlify gives you a URL like: `random-name-123.netlify.app`
   - You can customize this in Site Settings → Domain Management

### Method 2: GitHub Integration (Recommended)

1. **Create GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **Connect to Netlify**
   - Go to [Netlify](https://www.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Choose "GitHub" and authorize
   - Select your repository
   - Click "Deploy site"

3. **Automatic Deployments**
   - Every time you push to GitHub, Netlify auto-deploys
   - No manual uploads needed!

## 🌐 Connecting Your Squarespace Domain

### Step 1: Get Netlify DNS Information

1. In Netlify, go to: **Site Settings** → **Domain Management**
2. Click **"Add custom domain"**
3. Enter your Squarespace domain (e.g., `yourdomain.com`)
4. Netlify will show you DNS records to add

### Step 2: Configure Squarespace DNS

1. Log into [Squarespace](https://www.squarespace.com)
2. Go to **Settings** → **Domains** → **Your Domain**
3. Click **DNS Settings**
4. Add the following records from Netlify:

   **For Root Domain (yourdomain.com):**
   - Type: `A Record`
   - Host: `@`
   - Value: `75.2.60.5` (Netlify's IP)

   **For WWW Subdomain:**
   - Type: `CNAME`
   - Host: `www`
   - Value: `your-site.netlify.app`

5. Click **Save**

### Step 3: Verify in Netlify

1. Return to Netlify → **Domain Management**
2. Click **"Verify DNS configuration"**
3. Wait 24-48 hours for DNS propagation (usually faster)
4. Once verified, Netlify auto-enables HTTPS (SSL certificate)

### Step 4: Enable HTTPS

1. In Netlify: **Domain Management** → **HTTPS**
2. Click **"Verify DNS configuration"**
3. Click **"Provision certificate"**
4. Your site is now secure with `https://` 🔒

## 💻 Local Testing

### Option 1: VS Code Live Server (Recommended)

1. Install [VS Code](https://code.visualstudio.com/)
2. Install "Live Server" extension
3. Right-click `index.html`
4. Select **"Open with Live Server"**
5. Browser opens at `http://localhost:5500`
6. Changes auto-reload!

### Option 2: Python Simple Server

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Then visit: `http://localhost:8000`

### Option 3: Node.js http-server

```bash
# Install globally
npm install -g http-server

# Run in project directory
http-server
```

Then visit: `http://localhost:8080`

## 📧 Contact Form Setup (Optional)

The contact form currently shows a success message without sending emails. To enable real email functionality:

### Option 1: Formspree (Easiest)

1. Go to [Formspree](https://formspree.io)
2. Sign up for free account
3. Create a new form
4. Copy your form endpoint
5. Update `js/main.js`:

```javascript
// Replace the TODO section with:
fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    body: formData,
    headers: {
        'Accept': 'application/json'
    }
})
.then(response => {
    if (response.ok) {
        showMessage('Message sent successfully!', 'success');
        contactForm.reset();
    } else {
        showMessage('Oops! There was a problem.', 'error');
    }
})
.catch(error => {
    showMessage('Oops! There was a problem.', 'error');
});
```

### Option 2: EmailJS

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Follow their integration guide
3. Update the form handler in `js/main.js`

### Option 3: Netlify Forms

1. Add `netlify` attribute to form in `index.html`:
```html
<form class="contact__form" id="contact-form" netlify>
```

2. Netlify automatically handles form submissions
3. View submissions in Netlify dashboard

## 🎯 Performance Tips

1. **Optimize Images**
   - Use WebP format for better compression
   - Resize images to actual display size
   - Use tools like [TinyPNG](https://tinypng.com)

2. **Lazy Loading**
   - Add `loading="lazy"` to images:
   ```html
   <img src="image.jpg" loading="lazy" alt="Description">
   ```

3. **Minify Files** (for production)
   - Use [CSS Minifier](https://cssminifier.com)
   - Use [JS Minifier](https://javascript-minifier.com)

## 🐛 Troubleshooting

### Dark Mode Not Saving
- Check browser localStorage is enabled
- Clear browser cache and try again

### Animations Not Working
- Ensure JavaScript is enabled
- Check browser console for errors
- Verify `data-animate` attributes are present

### Mobile Menu Not Opening
- Check that `nav-toggle` and `nav-menu` IDs match
- Verify JavaScript is loaded correctly

### Fonts Not Loading
- Check internet connection (Google Fonts requires internet)
- Verify font link in `<head>` section
- Check browser console for 404 errors

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is open source and available for personal and commercial use. Feel free to customize it for your needs!

## 🤝 Support

If you need help:
1. Check this README thoroughly
2. Search for similar issues online
3. Review the code comments in each file
4. Test in different browsers

## 🎉 Credits

- **Fonts:** [Google Fonts](https://fonts.google.com) (Orbitron & Inter)
- **Icons:** Emoji icons (no external dependencies)
- **Hosting:** [Netlify](https://www.netlify.com)

---

**Built with ❤️ using HTML, CSS, and JavaScript**

*Last Updated: 2024*