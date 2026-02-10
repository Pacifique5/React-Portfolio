# 🎨 Reusable Components Guide

This guide shows you which components and code you can reuse in other projects!

## 📦 Components You Can Reuse

### 1. 🎯 **Enhanced Loader Component**

**Files:**
- `src/components/Loader/Loader.jsx`
- `src/components/Loader/Loader.module.css`

**Features:**
- Orbit rings animation
- Floating particles
- Gradient text
- Progress bar with glow
- Customizable name and title

**How to Use:**
```jsx
import { Loader } from './components/Loader/Loader';

function App() {
  const [loading, setLoading] = useState(true);
  
  if (loading) {
    return <Loader />;
  }
  
  return <YourApp />;
}
```

**Customize:**
- Change the emoji in `Loader.jsx` (line with 💼)
- Update name and title text
- Adjust colors in CSS (search for `--color-primary`)

---

### 2. ⏱️ **Vertical Timeline Component**

**Files:**
- `src/components/Experience/Experience.jsx`
- `src/components/Experience/Experience.module.css`
- `src/data/history.json`

**Features:**
- Alternating left/right layout
- Animated dots on timeline
- Gradient connector line
- Hover effects
- Responsive design

**Data Structure:**
```json
[
  {
    "role": "Your Role",
    "organisation": "Company Name",
    "startDate": "Jan, 2023",
    "endDate": "Present",
    "experiences": [
      "Achievement 1",
      "Achievement 2"
    ],
    "imageSrc": "path/to/logo.png"
  }
]
```

**How to Use:**
```jsx
import { Experience } from './components/Experience/Experience';

// In your app
<Experience />
```

**Customize:**
- Update `history.json` with your data
- Change colors in CSS
- Adjust timeline width (max-width: 1400px)

---

### 3. 🎪 **Auto-Scrolling Testimonials**

**Files:**
- `src/components/Testimonials/Testimonials.jsx`
- `src/components/Testimonials/Testimonials.module.css`
- `src/data/testimonials.json`

**Features:**
- Continuous right-to-left scroll
- Infinite loop
- Smooth animation
- Hover effects
- Star ratings

**Data Structure:**
```json
[
  {
    "name": "Client Name",
    "role": "Their Position",
    "image": "https://avatar-url.com",
    "text": "Testimonial text here",
    "rating": 5
  }
]
```

**How to Use:**
```jsx
import { Testimonials } from './components/Testimonials/Testimonials';

<Testimonials />
```

**Customize:**
- Adjust scroll speed in `Testimonials.jsx` (scrollSpeed variable)
- Change card width in CSS (width: 450px)
- Update colors and styling

---

### 4. 🎨 **Bento Grid Projects Layout**

**Files:**
- `src/components/Projects/Projects.jsx`
- `src/components/Projects/Projects.module.css`
- `src/components/Projects/ProjectCard.jsx`
- `src/components/Projects/ProjectCard.module.css`

**Features:**
- Asymmetric grid layout
- Different sizes for visual interest
- 3D tilt effects
- Hover animations
- Responsive breakpoints

**Grid Pattern:**
```css
/* First project: Large (8 columns, 2 rows) */
.projectItem:nth-child(1) {
  grid-column: span 8;
  grid-row: span 2;
}

/* Second project: Small (4 columns, 1 row) */
.projectItem:nth-child(2) {
  grid-column: span 4;
  grid-row: span 1;
}
```

**How to Use:**
```jsx
import { Projects } from './components/Projects/Projects';

<Projects />
```

**Customize:**
- Change grid pattern in `Projects.module.css`
- Update project data in `projects.json`
- Adjust card styles

---

### 5. 🌓 **Dark/Light Theme Toggle**

**Files:**
- `src/context/ThemeContext.jsx`
- `src/index.css` (theme variables)

**Features:**
- Smooth theme switching
- Persistent preference (localStorage)
- CSS variables for easy customization
- Works across entire app

**How to Use:**

**1. Wrap your app:**
```jsx
import { ThemeProvider } from './context/ThemeContext';

<ThemeProvider>
  <App />
</ThemeProvider>
```

**2. Use in components:**
```jsx
import { useTheme } from './context/ThemeContext';

function MyComponent() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button onClick={toggleTheme}>
      {theme === 'dark' ? '🌞' : '🌙'}
    </button>
  );
}
```

**Theme Variables:**
```css
[data-theme="dark"] {
  --color-bg: #0a0e27;
  --color-text: #ffffff;
  --color-primary: #667eea;
}

[data-theme="light"] {
  --color-bg: #f8f9fa;
  --color-text: #1a1f3a;
  --color-primary: #5a67d8;
}
```

---

### 6. ✨ **Particle Background**

**Files:**
- `src/App.jsx` (Particles setup)

**Features:**
- Interactive particle network
- Connects on hover
- Smooth animations
- Performance optimized

**How to Use:**
```jsx
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const particlesOptions = {
  particles: {
    color: { value: ["#667eea", "#764ba2"] },
    links: {
      color: "#667eea",
      distance: 150,
      enable: true,
      opacity: 0.2,
    },
    move: {
      enable: true,
      speed: 1,
    },
    number: {
      value: 80,
    },
  },
};

<Particles options={particlesOptions} />
```

---

### 7. 💎 **Glassmorphism Cards**

**CSS Pattern:**
```css
.card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}
```

**Use anywhere:**
- Contact forms
- Project cards
- Navigation bars
- Modal dialogs

---

### 8. 🎬 **Framer Motion Animations**

**Common Patterns:**

**Fade In:**
```jsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Content
</motion.div>
```

**Stagger Children:**
```jsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

<motion.div variants={containerVariants}>
  {items.map(item => (
    <motion.div variants={itemVariants}>
      {item}
    </motion.div>
  ))}
</motion.div>
```

**Hover Effects:**
```jsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Click Me
</motion.button>
```

---

### 9. 📧 **Contact Form with Validation**

**Files:**
- `src/components/Contact/Contact.jsx`
- `src/components/Contact/Contact.module.css`

**Features:**
- Form validation
- Icon-enhanced inputs
- Loading states
- Toast notifications
- Glassmorphism design

**How to Use:**
```jsx
import { Contact } from './components/Contact/Contact';

<Contact />
```

---

### 10. 🦶 **Modern Footer**

**Files:**
- `src/components/Footer/Footer.jsx`
- `src/components/Footer/Footer.module.css`

**Features:**
- Three-column layout
- Quick links
- Social media icons
- Animated heart
- Responsive design

---

## 📦 Required Dependencies

```json
{
  "dependencies": {
    "framer-motion": "^11.0.3",
    "react-icons": "^5.0.1",
    "react-intersection-observer": "^9.8.1",
    "react-toastify": "^10.0.4",
    "@tsparticles/react": "^3.0.0",
    "@tsparticles/slim": "^3.0.3",
    "vanilla-tilt": "^1.8.1"
  }
}
```

**Install:**
```bash
npm install framer-motion react-icons react-intersection-observer react-toastify @tsparticles/react @tsparticles/slim vanilla-tilt
```

---

## 🎨 Design System

### Colors
```css
:root {
  --color-primary: #667eea;
  --color-secondary: #764ba2;
  --color-accent: #f093fb;
  --color-bg: #0a0e27;
  --color-text: #ffffff;
  --color-text-secondary: #b8c5d6;
}
```

### Gradients
```css
--gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
--gradient-secondary: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
```

### Shadows
```css
--shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.1);
--shadow-md: 0 4px 16px rgba(0, 0, 0, 0.2);
--shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.3);
--shadow-glow: 0 0 20px rgba(102, 126, 234, 0.5);
```

---

## 🚀 Quick Start for New Project

1. **Copy these folders:**
   - `src/components/Loader/`
   - `src/components/Testimonials/`
   - `src/components/Experience/`
   - `src/context/`

2. **Copy these files:**
   - `src/vars.css`
   - `src/index.css`

3. **Install dependencies:**
   ```bash
   npm install framer-motion react-icons react-intersection-observer
   ```

4. **Import and use:**
   ```jsx
   import { Loader } from './components/Loader/Loader';
   import { Testimonials } from './components/Testimonials/Testimonials';
   import { Experience } from './components/Experience/Experience';
   ```

---

## 💡 Tips for Reusing

1. **Update Colors:** Change CSS variables in `vars.css`
2. **Update Data:** Modify JSON files for your content
3. **Adjust Animations:** Change Framer Motion transition values
4. **Customize Styles:** Edit CSS modules for your design
5. **Add Your Logo:** Replace emoji with your logo/icon

---

## 📝 License

These components are part of your portfolio and can be reused in your other projects freely!

---

**Happy Coding! 🚀**
