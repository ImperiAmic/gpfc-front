# 🐲 Godzilla Poblenou Fan Club – Front End

This is the front-end service for the Godzilla Poblenou Fan Club application. **Built with Typescript and using React and Redux**, this responsive SPA allows users to explore, manage and celebrate Godzilla's cinematic legacy.

_SKREE-ONK!_

---

## Table of Contents

1.  [Introduction](#1-introduction)
2.  [Main Features](#2-main-features)
3.  [Core Stack](#3-core-stack)
4.  [Getting Started](#4-getting-started)
5.  [Available Scripts](#5-available-scripts)
6.  [Deployment](#6-deployment)
7.  [Contributing](#7-contributing)
8.  [License](#8-license)
9.  [Author](#9-author)

---

## 1. Introduction

Welcome to the **Godzilla Poblenou Fan Club** front-end repository. This web app provides a user interface for browsing and managing a database of Godzilla films. Users can list, view, add, edit and delete Godzilla movie entries, including monster stats like height, weight, allies, enemies and other key details. The interface is designed to be responsive, with clear feedback for loading, errors and successful interactions.

---

## 2. Main Features

- Home page with presentation of the app (❌ not implemented yet)
- Paginated list of Godzilla films (❌ not implemented yet)
- Detail view for each film, with a display of Godzilla stats: height, weight, allies, enemies... (❌ not implemented yet)
- Add a new movie entry form (❌ not implemented yet)
- Edit existing movie entries (❌ not implemented yet)
- Delete movies (❌ not implemented yet)
- Simulated fight between two different Godzillas (❌ not implemented yet)
- UI feedback for loading, error and success states (❌ not implemented yet)

---

## 3. Core Stack

- **Vite** for build tooling
- **TypeScript** for type safety
- **React** for building UI components
- **Redux** for global state management
- **Vitest** and **Testing Library** for testing
- **Netlify** for deployment

---

## 4. Getting Started

### Prerequisites

- Node.js ≥ 14
- npm

### Setup

```bash
# Clone the repository
git clone https://github.com/ImperiAmic/gpfc-front
code gpfc-front

# Install dependencies
npm install

cp .env.sample .env
# Configure VITE_API_URL or other env variables in the .env file

npm run dev
```

---

## 5. Available Scripts

```bash
npm run dev            # Start the development server
npm run build          # Create a production build
npm run preview        # Preview the production build
npm test               # Run tests
npm run test:dev       # Run tests in watch mode
npm run test:coverage  # Generate test coverage report
npm run cy:open        # Run Cypress for E2E tests
npm run lint           # Lint the codebase
```

---

## 6. Deployment

The front end will be deployed using **Netlify** and will be publicly accessible here, but not yet:  
🔗 ~~https://godzilla-poblenou-fan-club.netlify.app~~

---

## 7. Contributing

**Contributions are welcome!** If you find bugs, want to suggest improvements or add new features, feel free to open an issue or submit a pull request.

---

## 8. License

This project is licensed under the **[CC BY-NC-SA 4.0 License](https://creativecommons.org/licenses/by-nc-sa/4.0/)**.  
See the [`LICENSE`](./LICENSE) file for more details.

---

## 9. Author

This project was made with love by **[Imperi Amic](https://www.imperiamic.com/)**.
