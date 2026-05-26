# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Commands
- Install dependencies: `npm install`
- Start development server: `npm run dev`
- Build for production: `npm run build`
- Lint codebase: `npm run lint`
- Preview production build: `npm run preview`

## Architecture
- **Frontend**: React application bundled with Vite.
- **Entry Point**: `src/main.jsx` renders the `App` component.
- **Component Structure**:
  - `src/App.jsx`: Main container that manages global state (transactions, categories) and coordinates child components.
  - `src/components/Summary.jsx`: Displays calculated income, expenses, and balance.
  - `src/components/TransactionForm.jsx`: Form for adding new transactions.
  - `src/components/TransactionList.jsx`: Displays and filters the list of transactions.
- **Styling**: Global styles in `src/index.css` and component-specific styles in `src/App.css`.
