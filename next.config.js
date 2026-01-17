/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  // For user site (username.github.io), basePath should be empty
  // For project site (username.github.io/repo-name), basePath would be '/repo-name'
  basePath: process.env.GITHUB_REPOSITORY 
    ? (process.env.GITHUB_REPOSITORY.endsWith('.github.io') 
        ? '' 
        : `/${process.env.GITHUB_REPOSITORY.split('/')[1]}`)
    : process.env.NEXT_PUBLIC_BASE_PATH || '',
  assetPrefix: process.env.GITHUB_REPOSITORY 
    ? (process.env.GITHUB_REPOSITORY.endsWith('.github.io') 
        ? '' 
        : `/${process.env.GITHUB_REPOSITORY.split('/')[1]}`)
    : process.env.NEXT_PUBLIC_BASE_PATH || '',
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: true, // Helps with GitHub Pages routing
  // Note: Next.js requires 'public' folder for static assets
}

module.exports = nextConfig




