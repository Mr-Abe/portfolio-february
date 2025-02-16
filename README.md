
# Portfolio Website with Admin Dashboard

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS, featuring an admin dashboard for managing contact form submissions.

## Features

- 🎨 Dark/Light theme support
- 📱 Fully responsive design
- 🔒 Secure admin dashboard
- 📬 Contact form with database storage
- 💼 Projects showcase
- 📝 Blog section
- 🛠️ Skills display
- 📊 Timeline/About section

## Tech Stack

- Frontend: React + TypeScript + Vite
- Styling: Tailwind CSS
- Animation: Framer Motion
- Icons: Lucide React
- Backend: Express.js
- Database: PostgreSQL
- Authentication: JWT

## Getting Started

1. Click the "Run" button to start the development server
2. Frontend will be available at the URL shown in the webview
3. Backend API runs on port 3001

## Project Structure

```
├── server/          # Backend Express server
├── src/
│   ├── components/  # React components
│   ├── context/     # React context providers
│   ├── data.ts      # Static content
│   └── types.ts     # TypeScript types
```

## Admin Dashboard

Access the admin dashboard at `/admin` to view contact form submissions. You'll need to:

1. Set up a PostgreSQL database in Replit
2. Add JWT_SECRET to Replit Secrets
3. Create an admin user in the database

## Development

The project uses Vite for development. The development server will automatically reload when you make changes to the code.

## Deployment

Deploy directly on Replit:
1. Open the Deployments tab
2. Configure your deployment settings
3. Click Deploy

## License

MIT License
