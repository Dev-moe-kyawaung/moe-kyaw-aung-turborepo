import fs from "fs";
import path from "path";

const ROOT = process.cwd();

const ensureDir = (dir: string) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

const writeFile = (file: string, content: string) => {
  const fullPath = path.join(ROOT, file);
  ensureDir(path.dirname(fullPath));
  fs.writeFileSync(fullPath, content, "utf-8");
};

// ---- ROOT FILES ----

writeFile("package.json", `
{
  "name": "moe-kyaw-aung-turborepo",
  "private": true,
  "scripts": {
    "build": "turbo run build",
    "dev": "turbo run dev",
    "lint": "turbo run lint",
    "test": "turbo run test",
    "storybook": "turbo run storybook",
    "storybook:build": "turbo run storybook:build"
  },
  "devDependencies": {
    "turbo": "latest"
  },
  "packageManager": "pnpm@9.15.0"
}
`);

writeFile("pnpm-workspace.yaml", `
packages:
  - "apps/*"
  - "packages/*"
`);

writeFile(".npmrc", `
auto-install-peers=true
node-linker=hoisted
`);

writeFile("turbo.json", `
{
  "$schema": "https://turbo.build/schema.json",
  "globalDependencies": ["**/.env.*local"],
  "tasks": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**", "storybook-static/**"]
    },
    "dev": {
      "cache": false,
      "persistent": true
    },
    "lint": {
      "dependsOn": ["^lint"],
      "outputs": []
    },
    "test": {
      "dependsOn": ["^build"],
      "outputs": []
    },
    "storybook": {
      "cache": false,
      "persistent": true
    },
    "storybook:build": {
      "dependsOn": ["^build"],
      "outputs": ["storybook-static/**"]
    }
  }
}
`);

writeFile("Makefile", `
.PHONY: help build dev lint test storybook storybook-build clean

help:
\t@echo "Available commands:"
\t@echo "  make build        - Build all apps and packages with turbo"
\t@echo "  make dev          - Start dev servers for all apps (turbo)"
\t@echo "  make lint         - Run ESLint across the monorepo"
\t@echo "  make test         - Run tests across the monorepo"
\t@echo "  make storybook    - Run Storybook for ui package"
\t@echo "  make storybook-build - Build Storybook for ui package"
\t@echo "  make clean        - Clean dist folders"

build:
\tpnpm turbo run build

dev:
\tpnpm turbo run dev

lint:
\tpnpm turbo run lint

test:
\tpnpm turbo run test

storybook:
\tpnpm turbo run storybook --filter=ui

storybook-build:
\tpnpm turbo run storybook:build --filter=ui

clean:
\trm -rf apps/*/dist packages/*/dist packages/*/storybook-static
`);

// ---- SHARED PACKAGES ----

// tsconfig
writeFile("packages/tsconfig/base.json", `
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "strict": true,
    "noImplicitAny": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "forceConsistentCasingInFileNames": true,
    "skipLibCheck": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "esModuleInterop": true,
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true,
    "jsx": "react-jsx"
  }
}
`);

writeFile("packages/tsconfig/package.json", `
{
  "name": "tsconfig",
  "version": "0.0.0",
  "private": true,
  "license": "MIT"
}
`);

// eslint-config
writeFile("packages/eslint-config/index.js", `
const path = require("path");

module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
    tsconfigRootDir: path.resolve(__dirname),
  },
  plugins: ["@typescript-eslint", "react", "react-hooks"],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "@typescript-eslint/no-unused-vars": [
      "error",
      { ignoreRestSiblings: true },
    ],
    "react/react-in-jsx-scope": "off",
  },
};
`);

writeFile("packages/eslint-config/package.json", `
{
  "name": "eslint-config",
  "version": "0.0.0",
  "private": true,
  "main": "index.js",
  "peerDependencies": {
    "eslint": "^9",
    "@typescript-eslint/eslint-plugin": "^8",
    "@typescript-eslint/parser": "^8",
    "eslint-plugin-react": "^7",
    "eslint-plugin-react-hooks": "^5",
    "eslint-config-prettier": "^5"
  }
}
`);

// tailwind-config
writeFile("packages/tailwind-config/tailwind.config.ts", `
import type { Config } from "tailwindcss";

export default {
  content: [],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
        secondary: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
      },
    },
  },
  plugins: [],
} as Config;
`);

writeFile("packages/tailwind-config/postcss.config.js", `
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
`);

writeFile("packages/tailwind-config/package.json", `
{
  "name": "tailwind-config",
  "version": "0.0.0",
  "private": true,
  "main": "tailwind.config.ts",
  "exports": {
    "./tailwind": "./tailwind.config.ts",
    "./postcss": "./postcss.config.js"
  },
  "peerDependencies": {
    "tailwindcss": "^4",
    "autoprefixer": "^10"
  }
}
`);

// ---- UI PACKAGE ----

writeFile("packages/ui/package.json", `
{
  "name": "ui",
  "version": "0.0.0",
  "private": true,
  "type": "module",
  "main": "./src/index.ts",
  "types": "./src/index.ts",
  "scripts": {
    "build": "vite build",
    "lint": "eslint src --ext .ts,.tsx",
    "test": "vitest",
    "storybook": "storybook dev -p 6006",
    "storybook:build": "storybook build"
  },
  "dependencies": {
    "framer-motion": "^12",
    "react": "^19",
    "react-dom": "^19"
  },
  "devDependencies": {
    "@storybook/react": "^9",
    "@storybook/react-vite": "^9",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "@vitejs/plugin-react": "^6",
    "autoprefixer": "^10",
    "eslint": "^9",
    "eslint-config": "workspace:*",
    "tailwind-config": "workspace:*",
    "storybook": "^9",
    "tsconfig": "workspace:*",
    "typescript": "^5",
    "vite": "^6",
    "vitest": "^3"
  }
}
`);

writeFile("packages/ui/tsconfig.json", `
{
  "extends": "tsconfig/base.json",
  "compilerOptions": {
    "outDir": "dist",
    "rootDir": "src"
  },
  "include": ["src"]
}
`);

writeFile("packages/ui/vite.config.ts", `
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "ui",
      fileName: (format) => `index.${format === "es" ? "js" : "cjs"}`,
    },
    outDir: "dist",
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
`);

writeFile("packages/ui/tailwind.config.ts", `
import sharedConfig from "tailwind-config/tailwind";

export default {
  ...sharedConfig,
  content: [
    "./src/**/*.tsx",
    "../../apps/portfolio/src/**/*.tsx",
    "../../apps/corporate/src/**/*.tsx",
  ],
};
`);

writeFile("packages/ui/postcss.config.js", `
import tailwindConfig from "tailwind-config/postcss";
export default tailwindConfig;
`);

writeFile("packages/ui/.eslintrc.cjs", `
const path = require("path");
module.exports = {
  extends: ["eslint-config"],
  parserOptions: {
    tsconfigRootDir: path.resolve(__dirname),
    project: ["./tsconfig.json"],
  },
  root: true,
};
`);

writeFile("packages/ui/src/index.ts", `
export { Button } from "./components/Button";
export { AppCard } from "./components/AppCard";
export { Section } from "./components/Section";
export { Avatar } from "./components/Avatar";
export { SocialLink } from "./components/SocialLink";
export { TechChip } from "./components/TechChip";
export { AppCardList } from "./components/AppCardList";
`);

writeFile("packages/ui/src/styles/globals.css", `
@import "tailwindcss";

@theme {
  --color-primary-50: #eff6ff;
  --color-primary-100: #dbeafe;
  --color-primary-200: #bfdbfe;
  --color-primary-300: #93c5fd;
  --color-primary-400: #60a5fa;
  --color-primary-500: #3b82f6;
  --color-primary-600: #2563eb;
  --color-primary-700: #1d4ed8;
  --color-primary-800: #1e40af;
  --color-primary-900: #1e3a8a;

  --color-secondary-50: #f8fafc;
  --color-secondary-100: #f1f5f9;
  --color-secondary-200: #e2e8f0;
  --color-secondary-300: #cbd5e1;
  --color-secondary-400: #94a3b8;
  --color-secondary-500: #64748b;
  --color-secondary-600: #475569;
  --color-secondary-700: #334155;
  --color-secondary-800: #1e293b;
  --color-secondary-900: #0f172a;
}
`);

// Placeholder components (you can replace with full content later)
writeFile("packages/ui/src/components/Button.tsx", `
export const Button = (props: any) => <button {...props} />;
`);

writeFile("packages/ui/src/components/AppCard.tsx", `
export const AppCard = (props: any) => <div {...props} />;
`);

writeFile("packages/ui/src/components/Section.tsx", `
export const Section = (props: any) => <section {...props} />;
`);

writeFile("packages/ui/src/components/Avatar.tsx", `
export const Avatar = (props: any) => <img {...props} />;
`);

writeFile("packages/ui/src/components/SocialLink.tsx", `
export const SocialLink = (props: any) => <a {...props} />;
`);

writeFile("packages/ui/src/components/TechChip.tsx", `
export const TechChip = (props: any) => <span {...props} />;
`);

writeFile("packages/ui/src/components/AppCardList.tsx", `
export const AppCardList = (props: any) => <div {...props} />;
`);

// Storybook placeholders
writeFile("packages/ui/.storybook/main.ts", `
export default {
  stories: ["../src/components/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};
`);

writeFile("packages/ui/.storybook/preview.ts", `
export default {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: { type: "integrated" },
  },
};
`);

writeFile("packages/ui/src/components/Button.stories.tsx", `
import { Button } from "./Button";
export default { title: "Components/Button", component: Button };
export const Primary = { args: { children: "Click me" } };
`);

// ---- PORTFOLIO APP ----

writeFile("apps/portfolio/package.json", `
{
  "name": "portfolio",
  "version": "0.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint src --ext .ts,.tsx",
    "test": "vitest",
    "storybook": "storybook dev -p 6007",
    "storybook:build": "storybook build"
  },
  "dependencies": {
    "framer-motion": "^12",
    "react": "^19",
    "react-dom": "^19",
    "react-router-dom": "^7",
    "ui": "workspace:*"
  },
  "devDependencies": {
    "@storybook/react": "^9",
    "@storybook/react-vite": "^9",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "@vitejs/plugin-react": "^6",
    "autoprefixer": "^10",
    "eslint": "^9",
    "eslint-config": "workspace:*",
    "tailwind-config": "workspace:*",
    "storybook": "^9",
    "tsconfig": "workspace:*",
    "typescript": "^5",
    "vite": "^6",
    "vitest": "^3"
  }
}
`);

writeFile("apps/portfolio/tsconfig.json", `
{
  "extends": "tsconfig/base.json",
  "compilerOptions": {
    "outDir": "dist",
    "rootDir": "src"
  },
  "include": ["src"]
}
`);

writeFile("apps/portfolio/vite.config.ts", `
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
`);

writeFile("apps/portfolio/tailwind.config.ts", `
import sharedConfig from "tailwind-config/tailwind";

export default {
  ...sharedConfig,
  content: ["./src/**/*.tsx", "../../packages/ui/src/**/*.tsx"],
};
`);

writeFile("apps/portfolio/postcss.config.js", `
import tailwindConfig from "tailwind-config/postcss";
export default tailwindConfig;
`);

writeFile("apps/portfolio/.eslintrc.cjs", `
const path = require("path");
module.exports = {
  extends: ["eslint-config"],
  parserOptions: {
    tsconfigRootDir: path.resolve(__dirname),
    project: ["./tsconfig.json"],
  },
  root: true,
};
`);

writeFile("apps/portfolio/index.html", `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Moe Kyaw Aung – Senior Android Developer</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
`);

writeFile("apps/portfolio/src/main.tsx", `
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import "./styles/globals.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
`);

writeFile("apps/portfolio/src/styles/globals.css", `
@import "tailwindcss";
`);

writeFile("apps/portfolio/src/pages/Home.tsx", `
export default function Home() {
  return (
    <div className="min-h-screen bg-secondary-900 text-white p-8">
      <h1 className="text-3xl font-bold">Portfolio Home</h1>
      <p className="mt-2">Add your real pages here.</p>
    </div>
  );
}
`);

writeFile("apps/portfolio/src/data/profile.ts", `
export const profile = {
  name: "Moe Kyaw Aung",
  title: "Senior Android Developer",
  subtitle: "Tachileik, Myanmar 🇲🇲  ↔  Bangkok, Thailand 🇹🇭",
};
`);

writeFile("apps/portfolio/src/data/apps.ts", `
export const apps = [
  { icon: "📱", title: "Social Dashboard" },
  { icon: "📱", title: "PWA App" },
];
`);

// ---- CORPORATE APP ----

writeFile("apps/corporate/package.json", `
{
  "name": "corporate",
  "version": "0.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint src --ext .ts,.tsx",
    "test": "vitest",
    "storybook": "storybook dev -p 6008",
    "storybook:build": "storybook build"
  },
  "dependencies": {
    "framer-motion": "^12",
    "react": "^19",
    "react-dom": "^19",
    "react-router-dom": "^7",
    "ui": "workspace:*"
  },
  "devDependencies": {
    "@storybook/react": "^9",
    "@storybook/react-vite": "^9",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "@vitejs/plugin-react": "^6",
    "autoprefixer": "^10",
    "eslint": "^9",
    "eslint-config": "workspace:*",
    "tailwind-config": "workspace:*",
    "storybook": "^9",
    "tsconfig": "workspace:*",
    "typescript": "^5",
    "vite": "^6",
    "vitest": "^3"
  }
}
`);

writeFile("apps/corporate/tsconfig.json", `
{
  "extends": "tsconfig/base.json",
  "compilerOptions": {
    "outDir": "dist",
    "rootDir": "src"
  },
  "include": ["src"]
}
`);

writeFile("apps/corporate/vite.config.ts", `
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
`);

writeFile("apps/corporate/tailwind.config.ts", `
import sharedConfig from "tailwind-config/tailwind";

export default {
  ...sharedConfig,
  content: ["./src/**/*.tsx", "../../packages/ui/src/**/*.tsx"],
};
`);

writeFile("apps/corporate/postcss.config.js", `
import tailwindConfig from "tailwind-config/postcss";
export default tailwindConfig;
`);

writeFile("apps/corporate/.eslintrc.cjs", `
const path = require("path");
module.exports = {
  extends: ["eslint-config"],
  parserOptions: {
    tsconfigRootDir: path.resolve(__dirname),
    project: ["./tsconfig.json"],
  },
  root: true,
};
`);

writeFile("apps/corporate/index.html", `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Moekyaw Cyber – Digital Solutions</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
`);

writeFile("apps/corporate/src/main.tsx", `
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import "./styles/globals.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
`);

writeFile("apps/corporate/src/styles/globals.css", `
@import "tailwindcss";
`);

writeFile("apps/corporate/src/pages/Home.tsx", `
export default function Home() {
  return (
    <div className="min-h-screen bg-secondary-900 text-white p-8">
      <h1 className="text-3xl font-bold">Corporate Home</h1>
      <p className="mt-2">Add your corporate pages here.</p>
    </div>
  );
}
`);

console.log("✅ Turborepo monorepo structure generated successfully!");
console.log("📁 Run:");
console.log("   pnpm install");
console.log("   make dev");
