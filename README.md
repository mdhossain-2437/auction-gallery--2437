# Auction Gallery

This is a simple auction gallery application built with React, Vite, and Tailwind CSS. It displays a list of active auction items and allows users to mark items as favorites.

## Features

- Displays active auction items with images, titles, current bids, and time left.
- Responsive design for both desktop and mobile views.
- Allows users to add items to a "Favorites" list.
- Favorites are persisted using the browser's local storage.
- Built with modern web technologies: React, Vite, and Tailwind CSS.
- Deployed using Surge.

## Project Structure

```
/
├── public/
│   └── data/
│       └── auctionItems.json  # Static auction data
├── src/
│   ├── components/            # React components
│   │   ├── ActiveAuctions.jsx
│   │   └── FavoriteItems.jsx
│   ├── contexts/              # React context for state management
│   │   └── FavoritesContext.jsx
│   ├── hooks/                 # Custom React hooks (if any)
│   ├── pages/                 # Page components (if using routing)
│   ├── App.jsx                # Main application component
│   ├── index.css              # Global styles and Tailwind directives
│   └── main.jsx               # Application entry point
├── .gitignore
├── deploy.sh                  # Deployment script for Surge
├── index.html                 # Main HTML file
├── package.json               # Project metadata and dependencies
├── postcss.config.js          # PostCSS configuration
├── README.md                  # This file
├── tailwind.config.js         # Tailwind CSS configuration
└── vite.config.js             # Vite configuration
```

## Getting Started

### Prerequisites

- Node.js (v18 or later recommended)
- npm (usually comes with Node.js)

### Installation

1.  Clone the repository:
    ```bash
    git clone <your-repository-url>
    cd auction-gallery
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```

### Running the Development Server

To start the development server, run:

```bash
npm run dev
```

This will start the application on `http://localhost:3000` (or another port if 3000 is busy). The server supports Hot Module Replacement (HMR).

### Building for Production

To create a production build, run:

```bash
npm run build
```

This will generate optimized static assets in the `dist` directory.

### Previewing the Production Build

After building, you can preview the production version locally:

```bash
npm run preview
```

## Deployment

This project is configured for easy deployment to [Surge.sh](https://surge.sh/).

1.  **Build the project:**
    ```bash
    npm run build
    ```
2.  **Run the deployment script:**

    ```bash
    ./deploy.sh
    ```

    This script handles the build process and deploys the contents of the `dist` folder to `auction-gallery-2437.surge.sh`. You might need to log in to Surge the first time you run it.

    _(Note: You might need to make the script executable first: `chmod +x deploy.sh`)_

## Technologies Used

- **React:** JavaScript library for building user interfaces.
- **Vite:** Fast frontend build tool.
- **Tailwind CSS:** Utility-first CSS framework.
- **Lucide React:** Icon library.
- **Wouter:** Minimalistic routing library (if used).
- **Surge:** Static web publishing platform.
