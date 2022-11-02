# Boilerplate and Starter for Next JS 13+, Tailwind CSS 3.2, TypeScript, Redux 
Created by Raihan Yudo Saputra

### Features

Developer experience first:

- ⚡ [Next.js](https://nextjs.org) for Static Site Generator
- 🔥 Type checking [TypeScript](https://www.typescriptlang.org)
- 💎 Integrate with [Tailwind CSS](https://tailwindcss.com)
- ✅ Integrate with Redux & Redux Toolkit
- 📏 Linter with [ESLint](https://eslint.org) (default NextJS, NextJS Core Web Vitals, Tailwind CSS and Airbnb configuration)
- 💖 Code Formatter with [Prettier](https://prettier.io)
- 🚓 Lint git commit with Commitlint -SOON-
- 📓 Write standard compliant commit messages with Commitizen -SOON-
- 🗂 VSCode configuration

Built-in feature from Next.js:

- ☕ Minify HTML & CSS
- 💨 Live reload
- ✅ Cache busting

### Philosophy

- Minimal code

### Requirements

- Node.js 14+ and npm

### Getting started

#### Component Naming Pattern
- [Folder Based Pattern](https://medium.com/hackernoon/structuring-projects-and-naming-components-in-react-1261b6e18d76)

#### Folder Structure

```shell
.
├── .vscode/                        # VSCode configuration
├── public/                         # Public assets folder
├── styles/                         # Styles folder
├── components/                     # Components Folder 
├── pages/                          # Next JS Pages
├── lib                             # Library Folder (for redux, axios, utility, helper, and etc)
│   ├── models/                         # Typescript Models Type folder
│   ├── store/                          # Redux folder
│   │   ├── slices/                         # Redux Toolkit Slicers folders
│   │   ├── hooks.ts                        # Redux Hooks
│   │   ├── index.ts                        # Redux Store
│   │   ├── reducers.ts                     # Redux Reducers (combined)
│   ├── utils/                          # Utility or Helpers folder
│   │   ├── axios.ts                        # Axios Instances
├── README.md                       # README file
```
