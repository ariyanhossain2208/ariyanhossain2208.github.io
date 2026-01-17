# Replacing Your Existing GitHub Pages Site

This guide will help you replace your existing GitHub Pages website with this Next.js portfolio.

## Quick Start

1. **Push your code to your existing repository**
2. **Enable GitHub Actions in Pages settings**
3. **Wait for automatic deployment**

## Step-by-Step Instructions

### Step 1: Prepare Your Code

The project is already configured for GitHub Pages deployment. The configuration will automatically detect your repository name during the build process.

### Step 2: Push to Your Existing Repository

1. **Open terminal/command prompt** in your project folder

2. **Initialize Git** (if not already done):
   ```bash
   git init
   ```

3. **Add your existing GitHub repository as remote**:
   ```bash
   git remote add origin https://github.com/ariyanhossain2208/ariyanhossain2208.github.io.git
   ```
   (This is already set for your repository)

4. **Add all files and commit**:
   ```bash
   git add .
   git commit -m "Replace with new Next.js portfolio"
   ```

5. **Push to GitHub** (this will replace your existing site):
   ```bash
   git branch -M main
   git push -u origin main --force
   ```
   ⚠️ **Note**: Using `--force` will overwrite your existing repository. Make sure you've backed up any important files from your old site if needed.

### Step 3: Enable GitHub Pages with GitHub Actions

1. Go to your repository on GitHub
2. Click on **Settings** (top menu)
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select **GitHub Actions** (not "Deploy from a branch")
5. Save the settings

The GitHub Actions workflow (`.github/workflows/deploy.yml`) is already included and will:
- Automatically build your Next.js app when you push to `main`
- Export it as static files
- Deploy to GitHub Pages

### Step 4: Configure Environment Variables (For Contact Form)

If you're using EmailJS for the contact form:

1. Go to your repository → **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret**
3. Add each environment variable:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
4. The GitHub Actions workflow will automatically use these during build

### Step 5: Wait for Deployment

After pushing your code:
1. Go to your repository → **Actions** tab
2. You should see a workflow running called "Deploy to GitHub Pages"
3. Wait for it to complete (usually 2-3 minutes)
4. Once it shows a green checkmark, your site is live!

### Step 6: Access Your Site

Your portfolio will be available at:

Your site will be available at:
```
https://ariyanhossain2208.github.io/
```

Since you're using a user site (`ariyanhossain2208.github.io`), the base path is automatically set to empty, so your site will be at the root URL.

## Configuration Details

The `next.config.js` is configured to automatically detect your repository name during GitHub Actions build. It will:
- Use the repository name as the base path for project sites
- Work automatically for user sites (`username.github.io`)
- Handle both scenarios without manual configuration

For local development, if you need to test with a specific base path, you can set `NEXT_PUBLIC_BASE_PATH=/repository-name` in your `.env.local` file.

## Troubleshooting

### Site shows 404 or blank page
- Make sure GitHub Pages source is set to **GitHub Actions** (not a branch)
- Wait a few minutes after deployment - GitHub Pages can take time to propagate
- Check the **Actions** tab for any build errors

### Images not loading
- Make sure all images are in the `public/` folder
- Check that image paths in `data/profile.ts` start with `/` (e.g., `/profile.jpg`)

### Contact form not working
- Make sure environment variables are set in GitHub repository secrets
- Check EmailJS configuration in `EMAIL_SETUP.md`

### Build fails
- Check the **Actions** tab in your repository for error messages
- Make sure all dependencies are in `package.json`
- Ensure there are no TypeScript or linting errors

### Old site still showing
- Clear your browser cache
- Wait 5-10 minutes for GitHub Pages to update
- Check that the deployment completed successfully in the **Actions** tab

## Updating Your Site

To update your site:
1. Make changes to your code
2. Commit and push:
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push
   ```
3. GitHub Actions will automatically rebuild and redeploy your site
4. Wait 2-3 minutes for the deployment to complete

## Custom Domain (Optional)

If you want to use a custom domain (e.g., `www.yourname.com`):
1. Add a `CNAME` file in the `public/` folder with your domain
2. Configure DNS settings with your domain provider
3. Update GitHub Pages settings to use your custom domain

## Need Help?

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Next.js Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- Check your repository's **Actions** tab for deployment logs
