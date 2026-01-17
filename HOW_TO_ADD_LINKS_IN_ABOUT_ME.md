# How to Add Links in the About Me Section

## Current Setup

The About Me section already supports HTML links! You can add links directly in the `aboutMe` array in `data/profile.ts`.

## How to Add Links

### Basic Link Format

```typescript
aboutMe: [
  "Your text with a <a href='https://example.com' className='text-blue-600 hover:text-blue-700 underline'>link text</a> here.",
]
```

### Example from Your Current Code

```typescript
aboutMe: [
  "I'm <strong>Ariyan Hossain</strong>, a Lecturer in the Department of <a href='#' className='text-blue-600 hover:text-blue-700 underline'>Computer Science and Engineering</a> at <a href='#' className='text-blue-600 hover:text-blue-700 underline'>BRAC University</a>, Dhaka, Bangladesh.",
]
```

## Link Styling

The current link styling includes:
- **Color**: `text-blue-600` (blue)
- **Hover**: `hover:text-blue-700` (darker blue on hover)
- **Underline**: `underline` (underlined text)

### Customizing Link Colors

You can change the link color by modifying the `className`:

```typescript
// Orange link
<a href='https://example.com' className='text-orange-600 hover:text-orange-700 underline'>Link Text</a>

// Green link
<a href='https://example.com' className='text-green-600 hover:text-green-700 underline'>Link Text</a>

// Purple link
<a href='https://example.com' className='text-purple-600 hover:text-purple-700 underline'>Link Text</a>
```

## Complete Examples

### Example 1: Link to a Website
```typescript
aboutMe: [
  "I'm a researcher at <a href='https://www.bracu.ac.bd' className='text-blue-600 hover:text-blue-700 underline'>BRAC University</a>.",
]
```

### Example 2: Link to a Paper/Publication
```typescript
aboutMe: [
  "My recent work on <a href='https://arxiv.org/abs/1234.5678' className='text-blue-600 hover:text-blue-700 underline'>AI Safety</a> was published in Nature.",
]
```

### Example 3: Link to GitHub Repository
```typescript
aboutMe: [
  "Check out my <a href='https://github.com/username/project' className='text-blue-600 hover:text-blue-700 underline'>open-source project</a> on GitHub.",
]
```

### Example 4: Multiple Links in One Paragraph
```typescript
aboutMe: [
  "I work at <a href='https://www.bracu.ac.bd' className='text-blue-600 hover:text-blue-700 underline'>BRAC University</a> and my research is published in <a href='https://example.com' className='text-blue-600 hover:text-blue-700 underline'>various journals</a>.",
]
```

### Example 5: Link with Bold Text
```typescript
aboutMe: [
  "My research focuses on <strong><a href='https://example.com' className='text-blue-600 hover:text-blue-700 underline'>Trustworthy AI</a></strong> and <strong><a href='https://example.com' className='text-blue-600 hover:text-blue-700 underline'>NLP</a></strong>.",
]
```

## Opening Links in New Tab

To open links in a new tab, add `target='_blank'` and `rel='noopener noreferrer'`:

```typescript
aboutMe: [
  "Visit my <a href='https://example.com' target='_blank' rel='noopener noreferrer' className='text-blue-600 hover:text-blue-700 underline'>website</a> for more information.",
]
```

## Important Notes

1. **Use single quotes** (`'`) inside the string, not double quotes (`"`)
2. **Escape quotes** if needed, or use template literals for complex HTML
3. **The component uses `dangerouslySetInnerHTML`** to render HTML, so your HTML will be rendered as-is
4. **Keep links accessible** - use descriptive link text, not just "click here"

## Where to Edit

Edit the `aboutMe` array in:
**File**: `data/profile.ts`  
**Location**: Lines 17-21 (approximately)

## Quick Reference

```typescript
// Basic link
<a href='URL' className='text-blue-600 hover:text-blue-700 underline'>Link Text</a>

// Link with bold
<strong><a href='URL' className='text-blue-600 hover:text-blue-700 underline'>Link Text</a></strong>

// Link opening in new tab
<a href='URL' target='_blank' rel='noopener noreferrer' className='text-blue-600 hover:text-blue-700 underline'>Link Text</a>
```


