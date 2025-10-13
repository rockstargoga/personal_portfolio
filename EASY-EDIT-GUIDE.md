# Easy Edit Guide - Portfolio Updates

This guide shows you exactly where to edit content in your portfolio. All changes are in `index.html`.

---

## 📝 Quick Reference

| What to Update | Line Number | Section |
|----------------|-------------|---------|
| Name | 40 | Hero |
| Job Title | 41 | Hero |
| Tagline | 42-44 | Hero |
| Stats (Years/Projects) | 68-78 | About |
| Bio Text | 83-94 | About |
| Certifications | 108-112 | Expertise |
| Skills | 119-129 | Expertise |
| Companies | 136 | Expertise |
| Projects | 149-245 | Work |
| Personal Info | 254-312 | Personal |
| Contact Info | 378-380 | Contact |

---

## 1. Hero Section (Lines 38-54)

### Update Your Name
```html
<h1 class="hero__name">Your Name Here</h1>
```
**Line 40** - Change "Rohit Meshram" to your name

### Update Job Title
```html
<p class="hero__title">Your Job Title at Company</p>
```
**Line 41** - Change to your current role

### Update Tagline
```html
<p class="hero__tagline">
    Your tagline here<br>
    Second line if needed
</p>
```
**Lines 42-44** - Write your professional tagline

---

## 2. About Section (Lines 57-97)

### Update Stats
```html
<div class="stat">
    <div class="stat__value">10+</div>
    <div class="stat__label">Years</div>
</div>
```
**Lines 68-78** - Change numbers and labels:
- Years of experience
- Number of projects
- Years at current company

### Update Bio
```html
<p>
    Your first paragraph about current role...
</p>
<p>
    Your second paragraph about career history...
</p>
```
**Lines 83-94** - Replace with your professional summary

---

## 3. Expertise Section (Lines 100-141)

### Update Certifications
```html
<li>Your Certification Name</li>
<li>Another Certification</li>
```
**Lines 109-111** - Add/remove/edit certifications

### Update Skills
```html
<span class="skill">Skill Name</span>
<span class="skill">Another Skill</span>
```
**Lines 119-129** - Add/remove skill tags

### Update Companies
```html
<p class="expertise__companies">
    Company1 • Company2 • Company3
</p>
```
**Line 136** - List companies separated by •

---

## 4. Work Section (Lines 144-246)

### Project Template
```html
<article class="project">
    <div class="project__header">
        <h3 class="project__company">Company Name</h3>
        <span class="project__period">2020 - Present</span>
    </div>
    <h4 class="project__title">Project Title</h4>
    <p class="project__description">
        Description of what you did...
    </p>
    <ul class="project__achievements">
        <li>Achievement with metrics</li>
        <li>Another achievement</li>
    </ul>
    <div class="project__tags">
        <span>Tag1</span>
        <span>Tag2</span>
    </div>
</article>
```

### To Add a New Project:
1. Copy the entire `<article class="project">` block
2. Paste it before the closing `</section>` tag
3. Update all the content inside

### To Remove a Project:
1. Find the `<article class="project">` block
2. Delete from `<article>` to `</article>`

### Current Projects:
- **Lines 149-170**: Apple
- **Lines 173-194**: Stellantis & FCA
- **Lines 197-221**: ZF TRW
- **Lines 224-245**: BorgWarner

---

## 5. Personal Section (Lines 249-313)

### Philosophy & Values (Lines 254-268)
```html
<p class="personal__text">
    Your philosophy paragraph 1...
</p>
<p class="personal__text">
    Your philosophy paragraph 2...
</p>
```
Edit the text inside `<p>` tags

### Community Involvement (Lines 271-287)
```html
<li>Organization Name — What you do there</li>
```
Add/remove/edit list items

### Personal Interests (Lines 290-312)
```html
<li>Interest Name — Description</li>
```
Add/remove/edit your hobbies and interests

---

## 6. Contact Section (Lines 316-382)

### Update Contact Info
```html
<p><strong>LinkedIn:</strong> <a href="URL">your-linkedin</a></p>
<p><strong>Location:</strong> Your City, State</p>
<p><strong>Company:</strong> Your Company</p>
```
**Lines 378-380** - Update your contact details

---

## 🎨 Styling Tips

### Colors
All colors are in `css/style.css` lines 5-13:
```css
--accent: #0071e3;  /* Change this for different accent color */
```

### Fonts
Font sizes are in `css/style.css` lines 19-27:
```css
--text-base: 1.0625rem;  /* Body text size */
--text-lg: 1.3125rem;    /* Larger text */
```

---

## 📋 Common Tasks

### Add a New Skill
1. Go to line 119 in `index.html`
2. Add: `<span class="skill">New Skill</span>`

### Update Years of Experience
1. Go to line 68 in `index.html`
2. Change: `<div class="stat__value">10+</div>`

### Add a New Project
1. Copy lines 149-170 (Apple project)
2. Paste after line 245
3. Update all content inside

### Change Accent Color
1. Open `css/style.css`
2. Go to line 12
3. Change: `--accent: #0071e3;` to your color

### Update Resume Link
1. Go to line 375 in `index.html`
2. Change: `<a href="#" class="btn btn-primary btn-large">Download Resume</a>`
3. Replace `#` with your resume URL

---

## 🚀 Quick Edits Checklist

Before publishing updates:

- [ ] Updated name and title in Hero section
- [ ] Updated stats (years, projects)
- [ ] Updated bio with current role
- [ ] Added/removed projects as needed
- [ ] Updated certifications and skills
- [ ] Updated personal section
- [ ] Updated contact information
- [ ] Tested all links work
- [ ] Checked on mobile device

---

## 💡 Pro Tips

1. **Keep it concise**: Each project should have 3-4 achievements max
2. **Use metrics**: Always include numbers (%, $, time saved)
3. **Update regularly**: Review every 3-6 months
4. **Test links**: Make sure LinkedIn and other links work
5. **Mobile first**: Always check how it looks on phone

---

## 🆘 Need Help?

### File Structure
```
/
├── index.html          ← Edit content here
├── css/
│   └── style.css      ← Edit colors/fonts here
├── js/
│   └── main.js        ← Don't edit unless needed
└── EASY-EDIT-GUIDE.md ← This file
```

### Common Issues

**Problem**: Text looks weird after editing
**Solution**: Make sure you didn't delete any `<` or `>` brackets

**Problem**: Section disappeared
**Solution**: Check you didn't delete closing tags like `</div>` or `</section>`

**Problem**: Colors changed unexpectedly
**Solution**: Only edit `index.html` for content, not `style.css`

---

## 📞 Quick Contact Updates

To update your contact information quickly:

1. **LinkedIn**: Line 378
2. **Location**: Line 379  
3. **Company**: Line 380

Just change the text between `>` and `<`:
```html
<p><strong>Location:</strong> Your New City</p>
```

---

**Last Updated**: January 2025  
**Version**: 1.0