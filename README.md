# Prasanna Kumar - Portfolio Website

A premium, responsive, and accessible personal portfolio website built with Next.js, Tailwind CSS, and Framer Motion.

## Features

- **Modern UI/UX**: Clean design with dark/light mode support.
- **Responsive**: Fully optimized for mobile, tablet, and desktop.
- **Animations**: Smooth scroll reveals and micro-interactions using Framer Motion.
- **SEO Optimized**: Meta tags, semantic HTML, and fast performance.
- **Contact Form**: Functional contact form with API route handler.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form

## Getting Started

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/prasanna-portfolio.git
    cd prasanna-portfolio
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Run the development server**:
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) with your browser.

## Project Structure

- `src/app`: Pages and API routes.
- `src/components`: Reusable UI components and sections.
- `src/lib`: Utility functions and data.
- `public`: Static assets (images, resume).

## Customization

- **Content**: Update `src/lib/data.ts` to change profile info, skills, projects, etc.
- **Images**: Place your images in the `public` folder and update paths in `src/lib/data.ts`.
- **Theme**: Modify `src/app/globals.css` for color variables.

## Deployment

This project is ready to be deployed on Vercel or Netlify.

### Vercel (Recommended)

1.  Push your code to GitHub.
2.  Import the project into Vercel.
3.  Deploy!

## License

MIT
