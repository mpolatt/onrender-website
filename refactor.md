Prompt for Refactoring React App

I have a React application that I want to refactor to ensure long-term maintainability, scalability, and sustainability. The app currently works but needs improvements in structure, readability, performance, and adherence to best practices.

Here are some specific requirements and areas to focus on during the refactor:

Code Structure
Restructure files and folders to follow a scalable and maintainable structure (e.g., feature-based, domain-driven design).
Ensure a clear separation of concerns (e.g., components, hooks, utilities, and services).
Components
Refactor class components into functional components with React hooks where applicable.
Break down large components into smaller, reusable components.
Use PropTypes or TypeScript for type safety.
Apply a consistent naming convention.
State Management
Optimize state management by using React Context API, Redux, or Zustand (if not already implemented).
Minimize unnecessary re-renders by using memoization techniques like React.memo and useMemo.
Styles
Implement modular and scalable styling using CSS Modules, styled-components, or another CSS-in-JS library.
Remove unused styles and organize them by component or feature.
Performance Optimization
Code-split and lazy-load components to reduce initial load time.
Analyze and optimize bundle size using tools like Webpack Bundle Analyzer.
Replace inline functions and bindings with pre-defined methods.
Testing
Add or refactor unit and integration tests for components and utilities using tools like Jest and React Testing Library.
Ensure coverage for edge cases and critical flows.
Dependencies
Update outdated dependencies while ensuring compatibility.
Replace deprecated packages with active and well-maintained alternatives.
Documentation
Document key components, hooks, and utilities with inline comments and Markdown files.
Provide a README with setup instructions, project architecture, and contribution guidelines.
Tech Stack & Ecosystem
Ensure the app is compatible with the latest React version.
Evaluate and integrate relevant tools like ESLint, Prettier, and Husky for code quality and consistency.
Output Expected from Cursor Agent
Provide a refactored codebase with an updated folder structure and file organization.
Suggest and explain the rationale behind major changes or best practices applied.
Highlight any issues found in the current code and how they were addressed.
Include a setup guide and updated instructions for running the application.