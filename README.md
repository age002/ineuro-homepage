# BrainOK Homepage Template

This repository is a template for creating a personal or laboratory homepage.

## Features

- Responsive design
- Research publication pages
- News section
- Contact page
- GitHub Pages compatible
- Netlify compatible
- Vercel compatible

## Quick Start

1. Fork this repository.
2. Rename the repository.
3. Edit the contents.
4. Deploy to GitHub Pages, Netlify, or Vercel.
5. Connect your own custom domain.

## Edit your homepage

Open the HTML files directly in VS Code. Replace every `YOUR ...` placeholder with your own information.

- `index.html`: homepage title, introduction, research interests, and featured news
- `about.html`: name, institution, laboratory, email, phone, address, and profile links
- `publication.html`: publication list
- `board.html`: short news updates
- `assets/hero-placeholder.svg`: replace this with your photograph, or change its image paths in the HTML files

The site is static: it does not need a database, Firebase project, API key, login, or build command. To preview it locally, open `index.html` with a VS Code Live Server extension or any static web server.

## Deployment

### GitHub Pages

1. Push the fork to GitHub.
2. In the repository, open **Settings → Pages**.
3. Select **Deploy from a branch**, choose `main`, and choose `/(root)`.
4. Save and wait for the Pages URL to appear.

### Netlify or Vercel

Import the repository in Netlify or Vercel. Use the repository root as the publish directory. No build command is required.

### Custom domain

After deployment, add your domain in the hosting provider's domain settings. Update `robots.txt` and `sitemap.xml` by replacing `YOUR-DOMAIN.example` with that domain. Do not add a `CNAME` file until GitHub Pages asks you to configure your own domain.

## License

Free for personal and academic use.
