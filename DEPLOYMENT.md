# Deployment Guide - Push to GitHub

## ✅ Local Repository Setup Complete!

Your code has been committed locally. Now follow these steps to push to GitHub:

## Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Repository name: `portfolio` (or any name you prefer)
5. Description: "Personal portfolio website - Marwane Skaro"
6. Set visibility to **Public** (for free hosting) or **Private**
7. **DO NOT** initialize with README, .gitignore, or license (we already have these)
8. Click "Create repository"

## Step 2: Add Remote and Push

After creating the repository, GitHub will show you commands. Use these commands:

```powershell
# Navigate to your project (if not already there)
cd "c:\Users\WaterZenji\Desktop\vibe coding portfolio"

# Add your GitHub repository as remote (replace USERNAME with your GitHub username)
git remote add origin https://github.com/USERNAME/portfolio.git

# Rename branch to main (GitHub uses 'main' by default)
git branch -M main

# Push your code to GitHub
git push -u origin main
```

**OR** if you prefer SSH:
```powershell
git remote add origin git@github.com:USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

## Step 3: Deploy to Vercel (Recommended)

1. Go to [vercel.com](https://vercel.com)
2. Sign in with your GitHub account
3. Click "Add New..." → "Project"
4. Import your `portfolio` repository
5. Vercel will auto-detect settings - click "Deploy"
6. Your site will be live in seconds! 🎉

## Alternative: Deploy to Netlify

1. Go to [netlify.com](https://netlify.com)
2. Sign in with GitHub
3. Click "Add new site" → "Import an existing project"
4. Select your `portfolio` repository
5. Build settings: 
   - Build command: (leave empty)
   - Publish directory: `/` (root)
6. Click "Deploy site"

## Your Site Will Be Live At:
- **Vercel**: `https://your-repo-name.vercel.app`
- **Netlify**: `https://your-repo-name.netlify.app`

---

## Quick Commands Reference

```powershell
# Check status
git status

# Add changes
git add .

# Commit changes
git commit -m "Your commit message"

# Push to GitHub
git push

# Pull latest changes
git pull
```

---

## Need Help?

If you encounter authentication issues:
1. Use GitHub Desktop (easier for beginners)
2. Set up SSH keys
3. Use GitHub Personal Access Token

Happy deploying! 🚀

