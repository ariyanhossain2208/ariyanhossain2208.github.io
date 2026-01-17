# How to Add PNG Icons to Skills

## Setup Complete! ✅

The code is now set up to use PNG images from `public/icons/` folder. You can add PNG files and they will automatically be used instead of react-icons.

## How to Add PNG Icons

### Step 1: Add PNG Files

1. Place your PNG icon files in: `public/icons/`
2. Name them exactly as shown below (lowercase, spaces replaced with hyphens):

**Current skills that will use PNG if available:**
- `matlab.png` → for MATLAB
- `php.png` → for PHP
- `numpy.png` → for NumPy
- `jupyter-notebook.png` → for Jupyter Notebook

### Step 2: Naming Convention

The filename should match the skill name:
- Skill: "MATLAB" → File: `matlab.png`
- Skill: "PHP" → File: `php.png`
- Skill: "NumPy" → File: `numpy.png`
- Skill: "Jupyter Notebook" → File: `jupyter-notebook.png`
- Skill: "Visual Studio Code" → File: `visual-studio-code.png`

**Rules:**
- Convert to lowercase
- Replace spaces with hyphens (`-`)
- Keep file extension as `.png`

### Step 3: Image Requirements

- **Size**: Recommended 64x64px or 128x128px (will be scaled to 16px)
- **Format**: PNG with transparent background (preferred)
- **Aspect Ratio**: Square (1:1) works best

### Step 4: Automatic Fallback

If a PNG file doesn't exist or fails to load, the code will automatically show the react-icon fallback. No errors will occur!

## Adding Icons to Other Skills

To add PNG icons to other skills, update `components/Hero.tsx`:

1. Find the skill in the `getSkillIcon` function (around line 51)
2. Replace the react-icon with:

```typescript
'YourSkill': <ImageIcon skillName="YourSkill" fallback={<FaCode className="text-gray-500" size={16} />} />,
```

Example:
```typescript
'Python': <ImageIcon skillName="Python" fallback={<FaPython className="text-blue-500" size={16} />} />,
```

Then add `python.png` to `public/icons/` folder.

## Current Setup

The following skills are already configured to use PNG images (if available):
- ✅ MATLAB → `public/icons/matlab.png`
- ✅ PHP → `public/icons/php.png`
- ✅ NumPy → `public/icons/numpy.png`
- ✅ Jupyter Notebook → `public/icons/jupyter-notebook.png`

All other skills use react-icons and will continue to work normally.

## Testing

1. Add your PNG files to `public/icons/`
2. Restart your dev server: `npm run dev`
3. Check the skills section - your PNG icons should appear!
4. If PNG doesn't load, the fallback icon will show automatically

## Tips

- Use icons with transparent backgrounds for best results
- Keep icon files small (< 50KB) for better performance
- Icons will be automatically sized to 16px to match other icons
- You can use any PNG image - it will be scaled and centered
