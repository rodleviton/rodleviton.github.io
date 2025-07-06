# 🎨 Portfolio Website

A modern, interactive portfolio built with Next.js featuring stunning scroll animations, cross-component interactions, and a clean component-based architecture.

![Next.js](https://img.shields.io/badge/Next.js-15.3.5-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwind-css)
![Motion](https://img.shields.io/badge/Motion-12.23.0-FF0080?style=for-the-badge&logo=framer)

## ✨ Features

### 🎭 Interactive Animations

- **Scroll-triggered section reveals** with plus icon spinning animations
- **Staggered skill dot animations** with customizable delay timing
- **Cross-section highlighting** between skills and technology icons
- **Bidirectional hover effects** linking related skills and technologies
- **Smooth opacity transitions** for section visibility

### 🏗️ Enterprise Architecture

- **Component-based design** with full separation of concerns
- **Context-driven state management** for cross-component communication
- **Data-driven content** with centralized configuration files
- **TypeScript throughout** for type safety and developer experience
- **Responsive design** with mobile-first approach

### 🔧 Performance Optimized

- **Hardware-accelerated animations** using CSS transforms
- **Efficient intersection observers** via Motion's useInView hook
- **Minimal bundle size** with selective motion imports
- **Static generation** for optimal loading performance

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/rodleviton/rodleviton.git
cd rodleviton

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build
```

Visit [http://localhost:3000](http://localhost:3000) to see your portfolio in action!

## 🎯 Architecture Overview

### 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles & animations
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Main portfolio page
├── components/            # Reusable UI components
│   ├── experience/        # Job experience components
│   ├── icons/            # SVG icon components
│   ├── layout/           # Layout & container components
│   ├── logos/            # Company & technology logos
│   ├── profile/          # Profile header components
│   ├── projects/         # Open source project components
│   ├── sections/         # Section header with animations
│   ├── skills/           # Interactive skill components
│   ├── social/           # Social media link components
│   └── technology/       # Technology stack components
├── contexts/             # React Context providers
│   ├── section-visibility-context.tsx
│   └── skill-hover-context.tsx
└── data/                 # Content configuration
    ├── experience.tsx    # Job history data
    ├── profile.ts        # Personal information
    ├── projects.tsx      # Open source projects
    ├── skills.ts         # Technical skills
    ├── social.tsx        # Social media links
    └── technologies.tsx  # Technology stack
```

### 🔄 Animation System

#### Section-Based Visibility

```typescript
// Each section detects when it comes into view
const isInView = useInView(ref, {
  margin: "0px 0px -100px 0px",
  amount: 0.2,
});

// State flows down to child components via Context
<SectionVisibilityProvider isInView={isInView}>
  <SectionHeader /> {/* Spins plus icon when section visible */}
</SectionVisibilityProvider>;
```

#### Cross-Component Interactions

```typescript
// Skills and technologies are linked via mapping
const skillToTechnologyMapping = {
  "JavaScript / TypeScript": ["JavaScript", "TypeScript"],
  "HTML / CSS": ["HTML5", "CSS3"],
  "React / Next.js": ["React", "Next.js"],
};

// Hover on skill → highlights related tech icons
// Hover on tech icon → highlights related skill
```

## 🎨 Interactive Features

### 🎯 Skill System

- **Dot Rating Visualization**: Visual skill ratings with filled/unfilled dots
- **Staggered Hover Animation**: Dots animate sequentially with customizable delay
- **Label Color Change**: Skill names transition to accent color on hover
- **Technology Cross-Highlighting**: Related technology icons highlight automatically

### 🔗 Bidirectional Highlighting

- **Skill → Technology**: Hover "JavaScript / TypeScript" → JavaScript & TypeScript icons highlight
- **Technology → Skill**: Hover JavaScript icon → "JavaScript / TypeScript" skill highlights
- **Smooth Transitions**: 300ms CSS transitions for fluid interactions

### 📱 Responsive Design

- **Mobile-First**: Optimized for mobile with progressive enhancement
- **Flexible Layouts**: Components adapt to screen size automatically
- **Touch-Friendly**: Hover effects work seamlessly on touch devices

## 🎛️ Customization

### Adding New Skills

```typescript
// data/skills.ts
export const skillsData: Skill[] = [
  { label: "New Skill", rating: 8 },
  // ...existing skills
];
```

### Adding New Technologies

```typescript
// data/technologies.tsx
export const technologiesData: Technology[] = [
  {
    href: "https://example.com",
    icon: <YourIcon />,
    label: "New Tech",
  },
  // ...existing technologies
];
```

### Linking Skills & Technologies

```typescript
// data/skill-technology-mapping.ts
export const skillToTechnologyMapping = {
  "Your New Skill": ["Related Tech 1", "Related Tech 2"],
  // ...existing mappings
};
```

## 🛠️ Development

### Key Technologies

- **Next.js** - React framework with App Router
- **TypeScript** - Type safety and developer experience
- **Tailwind CSS 4** - Utility-first styling
- **Motion** - Scroll animations and interactions
- **@rpxl/recast** - Component variant system

### Animation Performance

- **CSS Transforms** for hardware acceleration
- **Intersection Observer** for efficient scroll detection
- **Context API** for state management without prop drilling
- **Conditional Rendering** to minimize DOM updates

## 📄 License

MIT License - feel free to use this portfolio as inspiration for your own!

## 🤝 Contributing

Found a bug or want to contribute? Feel free to open an issue or submit a pull request!

---

<div align="center">
  <strong>Crafted with ❤️ by Rod Leviton</strong>
</div>
