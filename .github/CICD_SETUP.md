# CI/CD Setup Guide

This repository includes a GitHub Actions CI/CD pipeline that automatically validates and deploys the portfolio.

## 🚀 What the CI/CD Does

### On Every Push/Pull Request:
1. **Validates HTML Structure** - Checks for DOCTYPE, required tags
2. **Validates CSS** - Ensures styles.css exists
3. **Validates JavaScript** - Checks syntax and structure
4. **Checks Required Files** - Verifies all necessary files are present
5. **Validates JSON** - Ensures vercel.json and package.json are valid
6. **Checks File Sizes** - Warns if files exceed 500KB
7. **Basic Link Check** - Checks for common issues

### On Push to Main:
- **Automatic Deployment** - Deploys to Vercel production after validation passes

## 📋 Prerequisites

1. A GitHub repository
2. A Vercel account (free tier works)
3. Vercel project connected to your repository

## 🔧 Setup Instructions

### Step 1: Get Vercel Credentials

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Go to **Settings** → **Tokens**
3. Create a new token and copy it

### Step 2: Get Vercel Project IDs

1. In Vercel, select your project
2. Go to **Settings** → **General**
3. Find your **Project ID**
4. Find your **Org ID** (or Team ID)

### Step 3: Add GitHub Secrets

1. Go to your GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add the following secrets:

   - `VERCEL_TOKEN` - Your Vercel token from Step 1
   - `VERCEL_ORG_ID` - Your Organization/Team ID from Step 2
   - `VERCEL_PROJECT_ID` - Your Project ID from Step 2

### Step 4: Verify Setup

1. Make a small change to any file (e.g., README.md)
2. Commit and push to main branch
3. Go to **Actions** tab in your GitHub repository
4. You should see the CI/CD pipeline running
5. After validation passes, it will automatically deploy to Vercel

## 🔍 Checking CI/CD Status

### GitHub Actions Tab
- Go to your repository → **Actions** tab
- View all workflow runs and their status
- Click on a run to see detailed logs

### Status Badge

You can add a status badge to your README:

```markdown
![CI/CD](https://github.com/your-username/your-repo/actions/workflows/ci-cd.yml/badge.svg)
```

## 🛠️ Manual Deployment

You can manually trigger the workflow:

1. Go to **Actions** tab
2. Select **CI/CD Pipeline** workflow
3. Click **Run workflow**
4. Select branch and click **Run workflow**

## 🔔 Workflow Status

- ✅ **Green Checkmark**: All validations passed
- ❌ **Red X**: Validation failed (check logs)
- 🟡 **Yellow Circle**: Workflow is running

## 📝 Troubleshooting

### Workflow Fails Validation

1. Check the workflow logs in the **Actions** tab
2. Fix the issues mentioned in the logs
3. Commit and push again

### Deployment Fails

1. Verify all secrets are set correctly in GitHub
2. Check Vercel token is valid
3. Ensure Vercel project is connected to the repository
4. Check Vercel project settings

### Secrets Not Found

- Make sure secrets are added in repository settings
- Secrets are case-sensitive
- Verify secret names match exactly: `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`

## 🎯 Benefits

- **Automated Testing**: Catches errors before deployment
- **Automatic Deployment**: No manual steps needed
- **Quality Assurance**: Ensures code quality on every push
- **Production Ready**: Always deploy validated code
- **CI/CD Best Practices**: Follows industry standards

---

For questions or issues, check the [GitHub Actions documentation](https://docs.github.com/en/actions).

