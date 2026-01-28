# Rohit Meshram - Personal Portfolio Website

A modern, interactive portfolio website featuring advanced animations, drag-and-drop functionality, and a stunning starfield background effect.

## 🌟 Features

### Visual Design
- **Purple Gradient Name**: Eye-catching gradient effect on the hero name
- **Animated Starfield Background**: Two-layer parallax starfield with independent twinkling animations in both hero and contact sections
- **Mouse Parallax Effect**: Interactive mouse tracking that creates depth with subtle movement
- **Dark/Light Mode**: Seamless theme switching with persistent user preference
- **Apple-Inspired Design**: Clean, minimalist aesthetic with smooth transitions

### Interactive Elements
- **Draggable Skill Tags**: Live drag-and-drop reordering of technical skills with smooth animations
- **Smooth Scrolling**: Elegant navigation between sections
- **Responsive Navigation**: Mobile-friendly hamburger menu
- **Interactive Cards**: Hover effects on expertise and project cards

### Technical Highlights
- **Fully Responsive**: Optimized for all screen sizes (mobile, tablet, desktop)
- **Performance Optimized**: Efficient animations and minimal JavaScript
- **Accessibility**: Semantic HTML and ARIA labels
- **SEO Ready**: Proper meta tags and structured content

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd personal-website
   ```

2. **Open locally**
   - Simply open `index.html` in your browser
   - Or use a local server:
     ```bash
     python -m http.server 8000
     # or
     npx serve
     ```

3. **Deploy**
   - See [DEPLOYMENT-GUIDE.md](DEPLOYMENT-GUIDE.md) for detailed deployment instructions
   - See [QUICK-DEPLOY.md](QUICK-DEPLOY.md) for fast Netlify deployment

## 📝 Customization

### Easy Editing
See [EASY-EDIT-GUIDE.md](EASY-EDIT-GUIDE.md) for step-by-step instructions on:
- Updating personal information
- Changing colors and themes
- Adding/removing projects
- Modifying work experience
- Updating skills and expertise

### File Structure
```
personal-website/
├── index.html              # Main HTML file
├── css/
│   └── style.css          # All styles and animations
├── js/
│   └── main.js            # Interactive functionality
├── assets/
│   ├── icons/             # Skill and technology icons
│   └── images/            # Profile and project images
├── README.md              # This file
├── EASY-EDIT-GUIDE.md     # Customization guide
├── DEPLOYMENT-GUIDE.md    # Deployment instructions
├── QUICK-DEPLOY.md        # Quick Netlify deployment
└── netlify.toml           # Netlify configuration
```

## 🎨 Key Features Explained

### Starfield Animation
The starfield effect uses two independent layers with different animation timings (3.1s and 2.3s) to create a natural, non-repetitive twinkling effect. The parallax mouse tracking adds depth by moving the stars in response to cursor movement.

### Draggable Skills
Technical skills can be reordered by dragging and dropping. The system includes:
- Visual feedback during drag (scaling and opacity changes)
- Smooth transitions when tags swap positions
- Directional logic for natural reordering behavior
- Touch-friendly for mobile devices

### Purple Gradient
The name uses a CSS gradient with `background-clip: text` for a modern, eye-catching effect:
```css
background: linear-gradient(135deg, #6B2FD6 0%, #8B5CF6 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Custom properties, animations, grid, flexbox
- **Vanilla JavaScript**: No frameworks, pure JS for performance
- **HTML5 Drag and Drop API**: For interactive skill reordering

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Development

### Cache Busting
CSS and JS files use version parameters for cache busting:
```html
<link rel="stylesheet" href="css/style.css?v=20260128final">
<script src="js/main.js?v=20260128final"></script>
```

Update the version number when making changes to force browser refresh.

### Dark Mode
Theme preference is stored in localStorage and persists across sessions. The system respects the user's OS preference on first visit.

## 📄 License

This project is open source and available for personal use. Feel free to fork and customize for your own portfolio.

## 🤝 Contributing

This is a personal portfolio, but suggestions and improvements are welcome! Feel free to open an issue or submit a pull request.

## 📧 Contact

- **Email**: rohit.meshram@example.com
- **LinkedIn**: [linkedin.com/in/rohitmeshram](https://linkedin.com/in/rohitmeshram)
- **GitHub**: [github.com/rohitmeshram](https://github.com/rohitmeshram)
- **Location**: Cupertino, California

---

Built with ❤️ by Rohit Meshram
