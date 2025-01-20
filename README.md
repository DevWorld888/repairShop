# RepairShop

Welcome to **RepairShop**, a Next.js application scaffolded to handle authentication, theming, dropdown menus, error tracking, and more—all while using modern libraries to streamline development and maintain clean code. This README will walk you through the key dependencies, what they are used for, and how to get the project up and running using **pnpm**.

---

## Table of Contents
1. [Project Overview](#project-overview)
2. [Dependencies](#dependencies)
   - [Production Dependencies](#production-dependencies)
   - [Development Dependencies](#development-dependencies)
3. [Getting Started](#getting-started)
   - [Installation](#installation)
   - [Scripts](#scripts)
4. [Contributing](#contributing)
5. [License](#license)

---

## Project Overview

**RepairShop** leverages [Next.js](https://nextjs.org/) v15.1.3 to build a modern, server-rendered React application with minimal configuration. It includes:

- Authentication via [Kinde Auth Next.js](https://kinde.com/docs/sdks/next-js)  
- Dropdown menus using [Radix UI](https://www.radix-ui.com/)  
- Icon support with [Lucide React](https://lucide.dev/)  
- Error tracking using [Sentry](https://docs.sentry.io/platforms/javascript/guides/nextjs/)  
- Theming support through [Next Themes](https://github.com/pacocoursey/next-themes)  
- Tailwind CSS utilities and Tailwind-specific animation classes  
- TypeScript for type-safe code  
- ESLint for ensuring code quality and consistency  

With this stack, you can quickly spin up a robust application, handle theming, manage authentication, track errors, and keep your code clean and maintainable.

---

## Dependencies

### Production Dependencies

| Package                                   | Version  | Purpose                                                                                    |
| ----------------------------------------- | -------- | ------------------------------------------------------------------------------------------ |
| **[@kinde-oss/kinde-auth-nextjs]**        | ^2.4.6   | Easy integration of [Kinde](https://kinde.com/) authentication into Next.js               |
| **[@radix-ui/react-dropdown-menu]**       | ^2.1.4   | Accessible, unstyled dropdown menu primitives from Radix UI                               |
| **[@radix-ui/react-slot]**                | ^1.1.1   | Slot component from Radix UI for composition and flexible component APIs                  |
| **[@sentry/nextjs]**                      | 8        | Error tracking and performance monitoring for Next.js                                     |
| **[class-variance-authority]**            | ^0.7.1   | Helps define reusable, consistent className variants for your components                  |
| **[clsx]**                                | ^2.1.1   | Utility for constructing conditional className strings                                     |
| **[lucide-react]**                        | ^0.469.0 | Collection of simply beautiful open-source icons as React components                      |
| **[next]**                                | 15.1.3   | The Next.js React framework for hybrid static & server rendering                          |
| **[next-themes]**                         | ^0.4.4   | Easily manage dark mode/light mode themes in your Next.js application                    |
| **[react]**                               | ^19.0.0  | Core React library                                                                        |
| **[react-dom]**                           | ^19.0.0  | Provides DOM-specific methods for React                                                   |
| **[tailwind-merge]**                      | ^2.6.0   | Merge and deduplicate classes in Tailwind CSS                                             |
| **[tailwindcss-animate]**                 | ^1.0.7   | Pre-built Tailwind CSS animations                                                         |

### Development Dependencies

| Package           | Version  | Purpose                                                          |
| ----------------- | -------- | ---------------------------------------------------------------- |
| **[@eslint/eslintrc]** | ^3   | ESLint configuration tooling                                     |
| **[@types/node]** | ^20     | TypeScript definitions for Node.js                               |
| **[@types/react]** | ^19    | TypeScript definitions for React                                 |
| **[@types/react-dom]** | ^19 | TypeScript definitions for React DOM                            |
| **[eslint]**      | ^9      | Pluggable JavaScript linter                                      |
| **[eslint-config-next]** | 15.1.3 | Official ESLint configuration preset for Next.js        |
| **[postcss]**     | ^8      | Tool for transforming CSS with JavaScript                        |
| **[tailwindcss]** | ^3.4.1  | Utility-first CSS framework                                      |
| **[typescript]**  | ^5      | JavaScript superset that adds static typing                      |

---

## Getting Started

### Installation

1. **Clone the repository** (or fork and then clone):
   ```bash
   git clone https://github.com/your-username/repairshop.git
   cd repairshop
   ```
2. **Install dependencies** using [pnpm](https://pnpm.io/):
   ```bash
   pnpm install
   ```

### Scripts

In **package.json**, you will find the following scripts:

- **`pnpm run dev`**  
  Starts the Next.js development server on [http://localhost:3000](http://localhost:3000) with hot reloading.
  
- **`pnpm run dev:turbo`**  
  Starts the Next.js development server with the `--turbo` flag (experimental fast refresh).

- **`pnpm run build`**  
  Creates an optimized production build of your application.

- **`pnpm run start`**  
  Runs the compiled application in production mode (requires a prior `pnpm run build`).

- **`pnpm run lint`**  
  Lints your code using ESLint according to the Next.js and your custom configurations.

---

## Contributing

Contributions are welcome! If you’d like to report a bug, request a feature, or submit a pull request, please open an issue first to discuss potential changes.

Steps to contribute:
1. Fork the repository.
2. Create a new branch for your feature or bugfix (`git checkout -b feature-name`).
3. Make changes, commit, and push to your branch.
4. Open a Pull Request, explaining your changes.

---

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use it and distribute it as you see fit.

---

**Happy Coding!** If you have any questions, suggestions, or issues, feel free to open an issue or reach out. Enjoy building with **RepairShop**!