# 🚀 PRATHAM.EXE - Retro Futuristic Portfolio

> A stunning portfolio website with Pac-Man arcade × Space explorer × Developer console theme

![Theme](https://img.shields.io/badge/Theme-Retro%20Futuristic-00FFE1?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Ready%20to%20Deploy-8A2BE2?style=for-the-badge)

## ✨ Features

### 🎮 Epic 5-Second Intro Loader
- Boot sequence with typing animation
- Pac-Man eating dots animation
- Glitch text name reveal
- Rocket launch animation
- Progress bar with percentage
- "Press any key to continue" arcade style

### 🌌 Space Theme
- Animated starfield background
- Retro grid floor with perspective
- Git branch visualization like SourceTree
- Neon glow effects throughout

### 📦 Project Cards
- Dynamic loading from JSON
- Hover glow effects
- Click to open full-screen modal
- Architecture diagrams
- Schema visualization
- Tech stack breakdown

### 🛠️ Interactive Features
- Custom animated cursor
- Working terminal with commands
- Smooth scroll animations
- Sound effects (optional)
- Mobile responsive

## 🎨 Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Neon Cyan | `#00FFE1` | Primary accent, links |
| Electric Purple | `#8A2BE2` | Secondary accent |
| Space Black | `#050505` | Background |
| Arcade Yellow | `#FFD300` | Highlights |
| Accent Pink | `#FF4D9D` | CTAs, warnings |

## 📁 Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── css/
│   └── main.css        # All styles (2000+ lines)
├── js/
│   ├── loader.js       # Intro sequence
│   ├── animations.js   # GSAP animations, cursor, terminal
│   └── projects.js     # Project cards & modal system
├── data/
│   └── projects.json   # Your project data (edit this!)
└── README.md           # This file
```

## 🚀 Deployment

### Option 1: Vercel (Recommended)
1. Push to GitHub
2. Connect to [Vercel](https://vercel.com)
3. Deploy automatically

### Option 2: GitHub Pages
1. Push to GitHub
2. Go to Settings → Pages
3. Select branch and deploy

### Option 3: Netlify
1. Drag & drop folder to [Netlify](https://netlify.com)
2. Done!

## ✏️ Customization

### Edit Your Projects
Open `data/projects.json` and modify:

```json
{
  "id": 1,
  "title": "Your Project Name",
  "icon": "🚀",
  "summary": "Short description",
  "tech": ["React", "Node.js"],
  "demoUrl": "https://demo.link",
  "githubUrl": "https://github.com/...",
  "details": {
    "fullDescription": "Detailed description...",
    "architecture": [...],
    "schema": [...],
    "techStack": {...},
    "features": [...]
  }
}
```

### Edit From Phone 📱
1. Install GitHub mobile app
2. Navigate to `data/projects.json`
3. Edit and commit
4. Site auto-updates!

### Change Personal Info
Edit these in `index.html`:
- Hero section text
- Contact information
- Footer text
- Stats numbers

### Change Colors
Edit CSS variables in `css/main.css`:
```css
:root {
    --neon-cyan: #00FFE1;
    --electric-purple: #8A2BE2;
    /* ... */
}
```

## 🎮 Terminal Commands

Type these in the terminal overlay:
- `help` - Show available commands
- `about` - About section
- `skills` - View skills
- `projects` - Navigate to projects
- `contact` - Contact info
- `clear` - Clear terminal
- `secret` - Easter egg!
- `unlock pratham` - Secret command

## 🔧 Tech Stack

- **HTML5** - Semantic structure
- **CSS3** - Custom properties, animations, grid
- **Vanilla JavaScript** - No frameworks
- **GSAP** - Smooth animations
- **Prism.js** - Code highlighting
- **Google Fonts** - Press Start 2P, Orbitron, Inter

## 📱 Mobile Support

- Fully responsive design
- Touch-friendly interactions
- Custom cursor disabled on mobile
- Optimized animations

## ⚡ Performance Tips

1. Images: Use WebP format, compress
2. Fonts: Already using `display=swap`
3. Animations: GPU-accelerated transforms only
4. Loading: Lazy load images below fold

## 🔒 Password Protection (Optional)

### Basic JS Protection
Add to `loader.js`:
```javascript
const password = prompt('Enter password:');
if (password !== 'yourpassword') {
    document.body.innerHTML = 'Access Denied';
}
```

### Better: Vercel Password Protection
1. Go to Vercel dashboard
2. Project Settings → Password Protection
3. Set password

## 📄 License

MIT License - Feel free to use and modify!

---

<p align="center">
  Made with ☕ and countless hours of debugging<br>
  <strong>PRATHAM.EXE</strong> © 2024
</p>
