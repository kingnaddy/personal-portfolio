# Noble Adike - Personal Portfolio

A modern, responsive portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Modern dark theme with custom cursor animations
- 📱 Fully responsive design (mobile-first)
- ⚡ Built with Next.js 14 and TypeScript
- 🎭 Smooth animations with Framer Motion
- 📧 Contact form with EmailJS integration
- 🌙 Dark mode toggle with localStorage persistence
- 🎯 Custom cursor with hover effects

## Tech Stack

- **Framework:** Next.js 14 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Forms:** React Hook Form
- **Email:** EmailJS
- **Icons:** React Icons

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/noble-adike-portfolio.git
cd noble-adike-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory and add your EmailJS credentials:
```env
NEXT_PUBLIC_EMAILJS_SERVICE=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE=your_template_id
NEXT_PUBLIC_EMAILJS_KEY=your_public_key
```

4. Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## EmailJS Setup

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service
3. Create an email template
4. Get your public key from the integration section
5. Add the credentials to your `.env.local` file

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Manual Deployment

```bash
npm run build
npm run start
```

## Project Structure

```
src/
├── app/              # Next.js app router
├── components/       # React components
├── data/            # Static data files
├── hooks/           # Custom React hooks
└── types/           # TypeScript type definitions
```

## Customization

- Update `src/data/projects.json` to add your projects
- Modify colors in `tailwind.config.js`
- Update personal information in component files
- Add your own images in the `public/` directory

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## License

MIT License - feel free to use this for your own portfolio!