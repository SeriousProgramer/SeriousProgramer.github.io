# Rohit Binu - Personal Website

A React-based personal portfolio website showcasing projects and skills in software development, with resume download functionality.

## Features

- Responsive design with Darcula-inspired dark theme
- Project showcase with toggle functionality  
- Resume download link with attractive styling
- Clean, professional layout using JetBrains Mono font
- Optimized for GitHub Pages deployment
- Automatic deployment with GitHub Actions

## Local Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser

## Deployment to GitHub Pages

### Prerequisites
1. Create a new repository on GitHub (e.g., `personal-website-react`)
2. Update the `homepage` field in `package.json` with your GitHub Pages URL:
   ```json
   "homepage": "https://yourusername.github.io/personal-website-react"
   ```

### Automatic Deployment (Recommended)
This project includes a GitHub Actions workflow that automatically deploys to GitHub Pages when you push to the main branch.

1. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/personal-website-react.git
   git push -u origin main
   ```

2. Enable GitHub Pages in your repository settings:
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: gh-pages / (root)

The site will automatically deploy whenever you push changes to the main branch.

### Manual Deployment
You can also deploy manually using:
```bash
npm run deploy
```

## Resume Download

The website includes a resume download feature. To update your resume:

1. Replace `public/Rohit_Binu_Resume.pdf` with your own resume file
2. Update the filename in the download link in `src/App.js` if needed
3. Redeploy the site

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run deploy` - Builds and deploys to GitHub Pages (manual)
- `npm run predeploy` - Runs automatically before deploy

## Project Structure

```
src/
  components/
    ProjectCard.js      # Individual project card component
    ProjectCard.css     # Styles for project cards
  App.js               # Main application component
  App.css              # Main application styles
  index.js             # React DOM entry point
  index.css            # Global styles
public/
  Rohit_Binu_Resume.pdf # Resume file for download
  index.html           # HTML template
.github/
  workflows/
    deploy.yml          # GitHub Actions deployment workflow
```

## Customization

To customize the website for your own use:

1. Update the personal information in `src/App.js`
2. Replace the projects array with your own projects
3. Replace `public/Rohit_Binu_Resume.pdf` with your resume
4. Modify the homepage URL in `package.json`
5. Update this README with your own information

## Technologies Used

- React 19.1.0
- CSS3 with custom Darcula-inspired theme
- JetBrains Mono font
- GitHub Pages for hosting
- GitHub Actions for CI/CD
- gh-pages for deployment automation

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
