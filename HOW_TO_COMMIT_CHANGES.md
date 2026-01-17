# How to Commit and Push Changes

Here are the easiest ways to update your website after making changes.

## Method 1: Using VS Code (Easiest - Recommended)

If you're using VS Code:

1. **Make your changes** to any files
2. **Open VS Code** in your project folder
3. **Click the Source Control icon** in the left sidebar (or press `Ctrl+Shift+G`)
4. You'll see all your changed files listed
5. **Type a commit message** in the box at the top (e.g., "Update profile information" or "Fix image paths")
6. **Click the checkmark** (✓) button to commit
7. **Click the "..." menu** (three dots) at the top
8. **Select "Push"** to upload to GitHub

That's it! GitHub Actions will automatically rebuild and deploy your site.

---

## Method 2: Using Command Line (If Git is Installed)

Open terminal/command prompt in your project folder and run:

```bash
# Navigate to project folder (if not already there)
cd "F:\STUDY MATERIALS\PROJECTS\Portfolio using NextJS"

# Add all changes
git add .

# Commit with a message
git commit -m "Your commit message here"

# Push to GitHub
git push
```

**Example:**
```bash
git add .
git commit -m "Update teaching section"
git push
```

---

## Method 3: Using GitHub Desktop (GUI Option)

1. **Download GitHub Desktop**: https://desktop.github.com/
2. **Install and sign in** with your GitHub account
3. **Add your repository** (it should auto-detect if you've used it before)
4. **Make your changes** to files
5. **Open GitHub Desktop** - you'll see your changes listed
6. **Type a commit message** at the bottom
7. **Click "Commit to main"**
8. **Click "Push origin"** button at the top

---

## Quick Reference: Common Commit Messages

Use these as templates for your commit messages:

- `"Update profile information"`
- `"Fix image paths"`
- `"Add new project"`
- `"Update teaching section"`
- `"Fix typo in about me"`
- `"Update contact information"`
- `"Add new achievement"`

---

## After Pushing

1. **Wait 2-3 minutes** for GitHub Actions to build
2. **Check your site**: https://ariyanhossain2208.github.io/
3. **Check deployment status**: Go to https://github.com/ariyanhossain2208/ariyanhossain2208.github.io/actions

---

## Troubleshooting

### "Git is not recognized"
- Install Git: https://git-scm.com/download/win
- Or use VS Code or GitHub Desktop instead

### "Nothing to commit"
- Make sure you've saved your file changes
- Check that you're in the correct project folder

### "Permission denied"
- Make sure you're signed in to GitHub
- Check your Git credentials: `git config --global user.name` and `git config --global user.email`

---

## Recommended Workflow

1. Make changes to your code/files
2. Test locally (optional): `npm run dev`
3. Commit using VS Code (Method 1) - easiest!
4. Push to GitHub
5. Wait for automatic deployment
6. Check your live site

That's it! Your site will update automatically. 🚀
