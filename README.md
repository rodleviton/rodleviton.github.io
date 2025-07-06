# Rod Leviton - Portfolio Website

A modern, interactive portfolio built with Next.js featuring stunning scroll animations, cross-component interactions, and a clean component-based architecture.

![Next.js](https://img.shields.io/badge/Next.js-15.3.5-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwind-css)
![Motion](https://img.shields.io/badge/Motion-12.23.0-FF0080?style=for-the-badge&logo=framer)

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

Visit [http://localhost:3000](http://localhost:3000) to see in action!

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

Crafted with ❤️ by Rod Leviton
