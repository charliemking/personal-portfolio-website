# Personal Portfolio Website

A modern, interactive portfolio website built with React, TypeScript, and Vite.

## Project Structure

```
├── index.html              # Main HTML file
├── package.json           # Dependencies and scripts
├── package-lock.json      # Locked dependencies
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite build configuration
├── postcss.config.js      # PostCSS configuration
└── src/
    ├── App.tsx            # Main application component
    ├── main.tsx           # Application entry point
    ├── styles/
    │   └── index.css      # Global styles
    ├── types/
    │   └── vite-env.d.ts  # TypeScript environment definitions
    └── components/
        ├── FloatingElements.tsx
        ├── GameUI.tsx
        ├── PixelBackground.tsx
        ├── ProgressIndicator.tsx
        ├── RetroGameWebsite.tsx
        ├── layers/
        │   ├── ExperienceLayer.tsx
        │   ├── InterestsLayer.tsx
        │   ├── IntroLayer.tsx
        │   └── ProjectLayer.tsx
        └── levels/
            ├── Level1Foundations.tsx
            ├── Level2AI.tsx
            ├── Level3FocusAI.tsx
            ├── Level4Experience.tsx
            ├── Level5Future.tsx
            ├── LevelBonusFootball.tsx
            └── StartScreen.tsx
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Technologies Used

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Lucide React (for icons)