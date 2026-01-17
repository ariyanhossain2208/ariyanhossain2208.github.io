# Academic Portfolio

A modern, responsive academic portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern and clean UI design
- 📱 Fully responsive layout
- ⚡ Fast performance with Next.js
- 🎯 Smooth scrolling navigation
- 📧 Contact form with EmailJS integration
- 📄 Sections for:
  - Home/Resume (Work Experience, Research, Education, Skills)
  - Projects
  - Achievements
  - Miscellaneous
  - Contact

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
   - Copy `.env.local.example` to `.env.local`
   - Add your EmailJS credentials (see `EMAIL_SETUP.md` for details)

3. Run the development server:
```bash
npm run dev
```

Or use the batch file:
```bash
run.bat
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the portfolio.

### Build for Production

```bash
npm run build
npm start
```

## Customization

### Update Personal Information

All portfolio content is centralized in `data/profile.ts`. Simply update this file to change:
- Personal information (name, email, bio, etc.)
- Work experience
- Education
- Research projects
- Skills
- Projects
- Achievements
- Leadership roles
- Miscellaneous information

### Adding Images

Place all images in the `public/profile-picture/` folder:
- Profile picture: `public/profile-picture/profile.jpg`
- Project images: `public/profile-picture/project-*.jpg` (or any format)
- Other images: Add to `public/profile-picture/` and reference as `/profile-picture/filename.jpg`

**Note:** Next.js requires the `public` folder for static assets. All your images go in `public/profile-picture/` and are accessed via `/profile-picture/filename.jpg` in your code.

Update the `profileImage` path in `data/profile.ts` if you change the profile picture filename.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx             # Home page
│   ├── contact/
│   │   └── page.tsx         # Contact page
│   ├── projects/
│   │   └── page.tsx         # Projects page
│   ├── achievements/
│   │   └── page.tsx        # Achievements page
│   ├── miscellaneous/
│   │   └── page.tsx        # Miscellaneous page
│   └── globals.css          # Global styles
├── components/
│   ├── Navbar.tsx           # Navigation bar
│   ├── Hero.tsx             # Home/Resume section
│   ├── Contact.tsx          # Contact form
│   ├── Projects.tsx         # Projects section
│   ├── Achievements.tsx     # Achievements section
│   ├── Miscellaneous.tsx    # Miscellaneous section
│   └── Footer.tsx           # Footer
├── data/
│   └── profile.ts           # All portfolio data (UPDATE HERE)
├── public/
│   └── profile-picture/      # All images (profile, projects, etc.)
└── .env.local                # Environment variables (EmailJS config)
```

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React Icons** - Icon library
- **EmailJS** - Contact form email service

## Email Setup

See `EMAIL_SETUP.md` for detailed instructions on setting up the contact form.

## License

This project is open source and available under the MIT License.
