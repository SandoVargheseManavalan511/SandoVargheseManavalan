# Sando Cybersecurity Portfolio

A modern, cybersecurity-themed portfolio website built with React, TypeScript, and Tailwind CSS. This project showcases cybersecurity services including device unlocking, data recovery, social media account recovery, and more.

## 🚀 Live Demo

**Live Site:** [Add your live deployment URL here]

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Local Setup](#local-setup)
- [Development](#development)
- [Customization Guide](#customization-guide)
  - [Adding Services to Services Page](#adding-services-to-services-page)
  - [Adding Services to Hero Page](#adding-services-to-hero-page)
  - [Updating Testimonials](#updating-testimonials)
  - [Modifying Contact Information](#modifying-contact-information)
- [Deployment](#deployment)
- [Git Workflow](#git-workflow)
- [Project Structure](#project-structure)
- [License](#license)

## ✨ Features

- 🎨 Modern cybersecurity-themed UI with glassmorphism effects
- 📱 Fully responsive design (mobile, tablet, desktop)
- ⚡ Fast performance with Vite
- 🎭 Animated components and smooth transitions
- 🔒 TypeScript for type safety
- 🎨 Tailwind CSS for styling
- 📊 Service cards with detailed information
- 💬 Testimonials carousel
- 📧 Contact form with Supabase integration
- 🌐 Dynamic hero carousel

## 🛠 Tech Stack

- **Frontend Framework:** React 18.3.1
- **Language:** TypeScript 5.5.3
- **Build Tool:** Vite 5.4.2
- **Styling:** Tailwind CSS 3.4.1
- **Icons:** Lucide React 0.344.0
- **Backend/Database:** Supabase 2.57.4
- **Utilities:** clsx, tailwind-merge

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **pnpm** or **yarn**
- **Git** - [Download here](https://git-scm.com/)
- A code editor (VS Code recommended)

## 🔧 Local Setup

### 1. Clone the Repository

```bash
git clone https://github.com/SandoVargheseManavalan511/SandoVargheseManavalan.git
cd portfolioo-main
```

### 2. Install Dependencies

```bash
npm install
```

Or with pnpm:
```bash
pnpm install
```

Or with yarn:
```bash
yarn install
```

### 3. Start Development Server

```bash
npm run dev
```

The application will open at `http://localhost:5173`

## 🧪 Testing in Local Machine

### Run Development Server

```bash
npm run dev
```

This starts the Vite development server with hot module replacement (HMR).

### Type Checking

```bash
npm run typecheck
```

Runs TypeScript compiler to check for type errors without emitting files.

### Linting

```bash
npm run lint
```

Runs ESLint to check code quality and enforce coding standards.

### Build for Production

```bash
npm run build
```

Creates an optimized production build in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

Serves the production build locally to test before deployment.

## 🎨 Customization Guide

### Adding Services to Services Page

The services are defined in `src/components/Services.tsx`. To add a new service:

1. **Open** `src/components/Services.tsx`

2. **Find** the `services` array (around line 23)

3. **Add** a new service object following this template:

```typescript
{
  id: 'unique-service-id',
  title: 'Service Title',
  description: 'Short description',
  icon: IconName, // Import from lucide-react
  category: 'Category Name',
  details: [
    'Feature 1',
    'Feature 2',
    'Feature 3',
  ],
  color: 'cyan', // Options: cyan, blue, purple, green, red
}
```

4. **Import** the icon at the top if needed:

```typescript
import { Lock, Smartphone, Shield, YourNewIcon } from 'lucide-react';
```

**Example:**

```typescript
{
  id: 'vpn-setup',
  title: 'VPN Configuration',
  description: 'Secure your connection with VPN',
  icon: Shield,
  category: 'Security',
  details: [
    'Enterprise VPN setup',
    'Multi-device support',
    'Zero-log policy',
    '24/7 secure connection',
  ],
  color: 'purple',
}
```

### Adding Services to Hero Page

The hero carousel services are defined in `src/components/Hero.tsx`:

1. **Open** `src/components/Hero.tsx`

2. **Find** the `services` array (around line 4)

3. **Add** a new service:

```typescript
{
  title: 'Service Title',
  description: 'Brief description of the service',
  icon: IconName, // Import from lucide-react
  color: 'cyan', // Options: cyan, purple, blue, green
}
```

**Example:**

```typescript
{
  title: 'Twitter Account Recovery',
  description: 'Recover your suspended or hacked Twitter account.',
  icon: MessageSquare,
  color: 'blue',
}
```

4. **Import** the icon if needed:

```typescript
import { ChevronLeft, ChevronRight, Shield, Instagram, Mail, MessageSquare, YourNewIcon } from 'lucide-react';
```

### Updating Testimonials

To modify testimonials in `src/components/Testimonials.tsx`:

1. **Open** `src/components/Testimonials.tsx`

2. **Find** the `testimonials` array

3. **Add/Edit** testimonials:

```typescript
{
  name: 'Client Name',
  role: 'Their Role/Title',
  content: 'Their testimonial text here.',
  rating: 5,
  image: 'https://avatar-url.com/image.jpg',
}
```

### Modifying Contact Information

1. **Email/Social Links:** Edit `src/components/Contact.tsx` and `src/components/Footer.tsx`

2. **Update** the contact form submission endpoint in `Contact.tsx` if using a different backend


## 📤 Git Workflow - Push to Master Branch

### Initial Setup (First Time Only)

```bash
# Initialize git (if not already done)
git init

# Add remote repository
git remote add origin https://github.com/SandoVargheseManavalan511/SandoVargheseManavalan.git

# Verify remote
git remote -v
```

### Regular Workflow

1. **Check status of changes:**
```bash
git status
```

2. **Add files to staging:**
```bash
# Add all changes
git add .

# Or add specific files
git add src/components/Services.tsx
```

3. **Commit changes:**
```bash
git commit -m "Description of changes made"
```

**Example commit messages:**
```bash
git commit -m "Add new VPN service to services page"
git commit -m "Update hero carousel with new service"
git commit -m "Fix responsive layout on mobile devices"
```

4. **Push to master branch:**
```bash
git push origin master
```

### Best Practices

- **Pull before push** to avoid conflicts:
```bash
git pull origin master
git push origin master
```

- **Check branch** you're on:
```bash
git branch
```

- **View commit history:**
```bash
git log --oneline
```

- **Discard local changes** (if needed):
```bash
git restore .
```

## 📁 Project Structure

```
portfolioo-main/
├── src/
│   ├── assets/              # Images and static files
│   │   ├── Favicon.svg
│   │   ├── instagram-hacked.jpg
│   │   ├── whatsapp-hacked.jpg
│   │   └── ...
│   ├── components/          # React components
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── CyberBackground.tsx
│   │   ├── CyberCard.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Services.tsx
│   │   └── Testimonials.tsx
│   ├── lib/                 # Utility functions
│   │   └── utils.ts
│   ├── styles/              # Global styles and animations
│   │   └── animations.css
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Entry point
│   ├── index.css            # Global styles
│   └── vite-env.d.ts        # Vite type declarations
├── public/                  # Public static assets
├── dist/                    # Production build (generated)
├── node_modules/            # Dependencies (generated)
├── .env                     # Environment variables (create this)
├── eslint.config.js         # ESLint configuration
├── index.html               # HTML entry point
├── package.json             # Dependencies and scripts
├── postcss.config.js        # PostCSS configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
├── tsconfig.app.json        # TypeScript app configuration
├── tsconfig.node.json       # TypeScript Node configuration
├── vite.config.ts           # Vite configuration
└── README.md                # This file
```

## 🔑 Key Files Explained

- **`App.tsx`**: Main application component that assembles all sections
- **`Services.tsx`**: Contains all service cards and filtering logic
- **`Hero.tsx`**: Landing section with animated carousel
- **`Contact.tsx`**: Contact form with Supabase integration
- **`vite.config.ts`**: Vite configuration with path aliases (@/)
- **`tailwind.config.js`**: Custom Tailwind theme and animations
- **`utils.ts`**: Helper functions like `cn()` for class merging

## 🎯 Common Tasks Cheatsheet

| Task | Command |
|------|---------|
| Install dependencies | `npm install` |
| Start dev server | `npm run dev` |
| Build for production | `npm run build` |
| Preview production build | `npm run preview` |
| Run type checking | `npm run typecheck` |
| Run linter | `npm run lint` |
| Add all changes | `git add .` |
| Commit changes | `git commit -m "message"` |
| Push to master | `git push origin master` |
| Pull latest changes | `git pull origin master` |

## 🐛 Troubleshooting

### Module not found errors

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### TypeScript errors

```bash
# Restart TypeScript server in VS Code
# Command Palette (Ctrl+Shift+P) > TypeScript: Restart TS Server
```

### Port already in use

```bash
# Vite will automatically try the next available port
# Or specify a different port in vite.config.ts
```

### Build fails

```bash
# Check for TypeScript errors
npm run typecheck

# Check for linting errors
npm run lint
```

## 📞 Support

For issues or questions:
- Open an issue on GitHub
- Contact: 
- Website: 

*Last Updated: December 2025*
