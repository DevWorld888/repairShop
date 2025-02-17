# RepairShop
Open markdown Ctrl + K + v

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

# Project Structure and Guide

## 1. Project Overview
This project is a **Next.js-based application** using **Drizzle ORM, TypeScript, TailwindCSS, and Radix UI** for building modern web applications. It also integrates **Sentry for error tracking, Kinde for authentication, and Neon Database for serverless database hosting**.

## 2. Project Organization
The project follows a structured folder setup to maintain modularity and scalability:

- **`src/`**: Main source code directory.
  - **`app/`**: Contains Next.js app router (if used).
  - **`components/`**: Reusable UI components.
    - **`ui/`**: Contains UI-related components (e.g., buttons, headers, themes).
  - **`db/`**: Database-related configurations and migrations.
  - **`lib/`**: Utilities and helper functions.
  - **`zod-schemas/`**: Schema validation using Zod.
- **Config Files:**
  - **`.env.local`**: Environment variables.
  - **`next.config.ts`**: Next.js configuration.
  - **`tailwind.config.ts`**: TailwindCSS configuration.
  - **`eslint.config.mjs`**: ESLint configuration.

## 3. Package Dependencies
### Essential Dependencies
- **Next.js (`next`)**: Core framework for React applications.
- **React (`react` & `react-dom`)**: Core React libraries.
- **Drizzle ORM (`drizzle-orm` & `drizzle-zod`)**: ORM for managing the database.
- **Zod (`zod`)**: Schema validation.
- **TailwindCSS (`tailwindcss` & `tailwind-merge`)**: Styling framework.
- **Lucide React (`lucide-react`)**: Icon set.
- **Radix UI (`@radix-ui/react-*`)**: UI components (Dropdown, Label, Slot).
- **Kinde Auth (`@kinde-oss/kinde-auth-nextjs`)**: Authentication.
- **Sentry (`@sentry/nextjs`)**: Error tracking.
- **Dotenv (`dotenv`)**: Environment variable management.
- **Neon Database (`@neondatabase/serverless`)**: Serverless database provider.

### Developer Dependencies
- **TypeScript (`typescript`)**: Type checking.
- **ESLint (`eslint` & `eslint-config-next`)**: Linting.
- **Drizzle Kit (`drizzle-kit`)**: Database migrations.
- **TSX (`tsx`)**: Run TypeScript files without transpiling.
- **PostCSS (`postcss`)**: CSS processing.
- **Node.js Types (`@types/node`)**: TypeScript definitions for Node.js.

## 4. Scripts for Development
The `package.json` file contains useful scripts for managing the project:

- **`dev`**: Start Next.js development server.
- **`dev:turbo`**: Start with Next.js Turbo Mode.
- **`build`**: Build the project.
- **`start`**: Start the production server.
- **`lint`**: Run ESLint checks.
- **Database scripts:**
  - `db:generate`: Generate Drizzle schema.
  - `db:migrate`: Run migrations.
  - `db:seed`: Seed database.

## 5. Reusability for Future Projects
When starting a new project, consider reusing:
1. **Folder structure**: Keep modular organization.
2. **Next.js setup**: Use Next.js for SSR/SSG benefits.
3. **Drizzle ORM & Zod**: Database management and schema validation.
4. **TailwindCSS**: For rapid styling.
5. **ESLint & TypeScript**: Maintain clean code.
6. **Authentication (Kinde)**: Use Kinde for user authentication.
7. **Error tracking (Sentry)**: Monitor application health.

### **Customization Checklist for New Projects:**
- Change **project name** in `package.json`.
- Update **.env variables** for new environments.
- Modify **database configuration**.
- Adjust **TailwindCSS settings**.
- Setup **authentication provider**.

## Conclusion
This guide serves as a blueprint for organizing and structuring modern web applications with Next.js, TypeScript, Drizzle ORM, and TailwindCSS. By following these principles, you can efficiently build and maintain scalable web applications.

