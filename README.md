# Marwane Skaro - Portfolio Website

<div align="center">

![Portfolio](https://img.shields.io/badge/Portfolio-Live-success)
![CI/CD](https://github.com/marwane2001/Portfolio-/actions/workflows/ci-cd.yml/badge.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-blue.svg)

A modern, responsive portfolio website showcasing professional work as a Full Stack Developer.

[Live Demo](#) • [Report Bug](https://github.com/marwane2001/Portfolio-/issues) • [Request Feature](https://github.com/marwane2001/Portfolio-/issues)

</div>

---

## 📋 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Deployment](#-deployment)
- [Sections](#-sections)
- [Contact](#-contact)
- [License](#-license)

## 🎯 About

A professional portfolio website designed to showcase my projects, skills, and professional experience. Built with modern web technologies and best practices, featuring a clean, responsive design with smooth animations and optimal performance.

## ✨ Features

- **🎨 Modern Design**: Clean, professional UI with gradient accents and smooth animations
- **📱 Fully Responsive**: Optimized for all devices (desktop, tablet, mobile)
- **⚡ Performance Optimized**: Fast loading times and lightweight assets
- **🔍 SEO Friendly**: Proper meta tags, semantic HTML, and accessibility features
- **🌐 Cross-Browser Compatible**: Works seamlessly across all major browsers
- **🚀 Easy Deployment**: Ready for Vercel, Netlify, GitHub Pages, or any static hosting
- **🎯 Smooth Navigation**: Intuitive user experience with smooth scrolling
- **💼 Professional Sections**: Showcases experience, projects, and technical skills
- **🔄 CI/CD Pipeline**: Automated testing and deployment with GitHub Actions

## 🛠️ Tech Stack

### Frontend
- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with CSS Variables and animations
- **JavaScript (ES6+)**: Vanilla JavaScript for interactivity

### Libraries & Tools
- **Font Awesome**: Icon library
- **Google Fonts**: Inter font family
- **Vercel**: Deployment platform

### Development Tools
- **Git**: Version control
- **GitHub**: Code repository
- **GitHub Actions**: CI/CD automation
- **VS Code**: Recommended IDE

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Git (optional, for cloning the repository)
- A code editor (VS Code recommended)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/marwane2001/Portfolio-.git
   cd Portfolio-
   ```

2. **Open the project**
   - Simply open `index.html` in your web browser, or
   - Use a local development server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (if you have serve installed)
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

3. **View the website**
   - Navigate to `http://localhost:8000` in your browser

### Local Development

For a better development experience, use a local server:

```bash
# Install a simple HTTP server (if not already installed)
npm install -g serve

# Start the server
serve .

# The site will be available at http://localhost:3000
```

## 📁 Project Structure

```
Portfolio-/
│
├── index.html          # Main HTML structure
├── styles.css          # All CSS styling and animations
├── script.js           # JavaScript functionality and project data
├── vercel.json         # Vercel deployment configuration
├── package.json        # Project metadata and dependencies
├── .gitignore          # Git ignore rules
├── LICENSE             # MIT License
└── README.md           # Project documentation
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/marwane2001/Portfolio-)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click "Add New..." → "Project"
4. Import your repository
5. Vercel will auto-detect settings
6. Click "Deploy" - your site will be live in seconds!

### Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/marwane2001/Portfolio-)

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com) and sign in with GitHub
3. Click "Add new site" → "Import an existing project"
4. Select your repository
5. Build settings:
   - Build command: (leave empty)
   - Publish directory: `/` (root)
6. Click "Deploy site"

### Deploy to GitHub Pages

1. Push your code to GitHub
2. Go to repository **Settings** → **Pages**
3. Under "Source", select your branch (usually `main`)
4. Select folder: `/ (root)`
5. Click "Save"
6. Your site will be live at `https://username.github.io/Portfolio-/`

### CI/CD Pipeline

This project includes automated CI/CD using GitHub Actions:

- **Automated Testing**: Validates HTML, CSS, and JavaScript on every push
- **Automatic Deployment**: Deploys to Vercel after successful validation
- **Quality Assurance**: Ensures code quality before deployment

**Setup CI/CD:**
1. Add Vercel secrets to GitHub repository (Settings → Secrets → Actions):
   - `VERCEL_TOKEN`
   - `VERCEL_ORG_ID`
   - `VERCEL_PROJECT_ID`
2. Push to main branch - deployment happens automatically!

See [CI/CD Setup Guide](.github/CICD_SETUP.md) for detailed instructions.

### Other Static Hosting

This project works with any static hosting service:
- **Firebase Hosting**
- **AWS S3 + CloudFront**
- **Cloudflare Pages**
- **Surge.sh**
- Any other static file hosting service

## 📝 Sections

The portfolio includes the following sections:

1. **Hero Section**
   - Personal introduction
   - Professional title
   - Call-to-action buttons
   - Social media links

2. **About**
   - Professional background
   - Key statistics
   - Personal description

3. **Experience**
   - Professional work history
   - Timeline visualization
   - Technologies used for each role

4. **Projects**
   - Showcase of GitHub repositories
   - Project descriptions and technologies
   - Links to source code

5. **Skills**
   - Technical skills categorized by:
     - Frontend technologies
     - Backend frameworks
     - Databases and tools
     - Additional technologies

6. **Contact**
   - Contact information
   - Social media links
   - Professional networking profiles

## 📧 Contact

**Marwane Skaro** - Full Stack Developer

- **GitHub**: [@marwane2001](https://github.com/marwane2001)
- **LinkedIn**: [Marwane Skaro](https://www.linkedin.com/in/marwane-skaro-618971239)
- **Portfolio**: [Live Site](#) _(Update with your deployed URL)_

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

Copyright (c) 2025 Marwane Skaro

---

<div align="center">

**Built with ❤️ by [Marwane Skaro](https://github.com/marwane2001)**

⭐ Star this repo if you find it helpful!

</div>
