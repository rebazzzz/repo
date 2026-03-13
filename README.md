# Fortis Anima

A habit-tracking Progressive Web App (PWA) for tracking honor and shame through daily deeds and tasks.

## Features

- **Honor & Shame Tracking**: Track positive deeds (honos) and negative actions (dedecus)
- **Daily Tasks**: Manage scheduled tasks with honor/shame point rewards
- **Statistics**: View progress with interactive bar charts
- **Data Management**: Export/import your data as JSON
- **Search & Filter**: Find specific log entries and filter tasks
- **Theme Toggle**: Switch between dark and light themes
- **PWA Support**: Install on mobile devices and work offline

## Installation

1. Clone or download this repository
2. Open `index.html` in a modern web browser
3. For local development, run: `python -m http.server 8000`

## Deployment to GitHub Pages

1. Create a new GitHub repository
2. Upload all files (index.html, script.js, manifest.json, sw.js, and icon files)
3. Go to repository Settings > Pages
4. Set source to "Deploy from a branch"
5. Select "main" branch and "/ (root)" folder
6. Save and wait for deployment

## PWA Setup

- The app includes a web app manifest (`manifest.json`) for installation
- Service worker (`sw.js`) provides offline caching
- Add proper icon files: `icon-192.png` (192x192) and `icon-512.png` (512x512)

## Usage

- **Deeds Tab**: Track honor/shame points by clicking +/- buttons
- **Tasks Tab**: Manage daily/weekly tasks, mark as done/missed
- **Log Tab**: View activity history with search functionality
- **Stats Tab**: See progress visualization
- **Calculator Tab**: Add custom honor/shame entries
- **Config Tab**: Adjust point values for deeds

## Data Storage

All data is stored locally in your browser's localStorage. Use the export feature to backup your data.

## Browser Support

Works in all modern browsers with JavaScript enabled. PWA features require HTTPS in production.
