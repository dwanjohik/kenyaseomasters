# Kenya SEO Experts - Next.js Version

This is a Next.js conversion of the original React + Vite application.

## What Changed

### Major Changes
- **Framework**: Migrated from React + Vite to Next.js 15 (App Router)
- **Routing**: Converted from Wouter to Next.js file-based routing
- **Server**: Replaced Express backend with Next.js API Routes
- **Build System**: Now using Next.js built-in build system instead of Vite

### File Structure
```
nextjs-kenya-seo-experts/
├── app/                          # Next.js App Router
│   ├── page.tsx                 # Home page (/)
│   ├── about/page.tsx           # About page (/about)
│   ├── services/page.tsx        # Services page (/services)
│   ├── web-design/page.tsx      # Web Design page (/web-design)
│   ├── portfolio/page.tsx       # Portfolio page (/portfolio)
│   ├── contact/page.tsx         # Contact page (/contact)
│   ├── not-found.tsx            # 404 page
│   ├── layout.tsx               # Root layout
│   ├── providers.tsx            # Client-side providers
│   ├── globals.css              # Global styles
│   └── api/                     # API routes
│       └── inquiries/route.ts   # Inquiries endpoint
├── components/                   # React components
│   ├── ui/                      # shadcn/ui components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── PricingCard.tsx
│   └── ContactForm.tsx
├── hooks/                        # Custom React hooks
├── lib/                          # Utilities
│   ├── db.ts                    # Database client
│   ├── queryClient.ts           # React Query client
│   └── utils.ts                 # Helper functions
└── shared/                       # Shared schemas and types

```

## Getting Started

### Prerequisites
- Node.js 18+ 
- PostgreSQL database
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and add your database URL:
   ```
   DATABASE_URL=postgresql://user:password@localhost:5432/kenya_seo_experts
   ```

3. **Push database schema:**
   ```bash
   npm run db:push
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:push` - Push database schema changes

## Key Benefits of Next.js

1. **Better SEO**: Server-side rendering improves SEO significantly
2. **Faster Initial Load**: Automatic code splitting and optimized builds
3. **Image Optimization**: Built-in Image component for automatic optimization
4. **API Routes**: No need for separate Express server
5. **File-based Routing**: Simpler and more intuitive routing
6. **Edge Runtime**: Deploy to edge for faster global performance
7. **Built-in TypeScript**: Better TypeScript support out of the box

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy!

### Other Platforms
This Next.js app can also be deployed to:
- Netlify
- AWS Amplify
- Google Cloud Run
- DigitalOcean App Platform
- Railway
- Render

## Migration Notes

### Breaking Changes
- All components that use client-side features need `'use client'` directive
- `Link` from `wouter` replaced with `Link` from `next/link`
- `useLocation()` replaced with `usePathname()` from `next/navigation`
- Express routes converted to Next.js API routes in `app/api/`

### What Stayed the Same
- All UI components (shadcn/ui)
- Database schema (Drizzle ORM)
- Styling (Tailwind CSS)
- Component logic and design
- React Query for data fetching

## Database

The app uses PostgreSQL with Drizzle ORM. The schema includes:
- `inquiries` table for contact form submissions

To modify the schema:
1. Edit `shared/schema.ts`
2. Run `npm run db:push`

## Environment Variables

Required environment variables:
- `DATABASE_URL` - PostgreSQL connection string

## Support

For issues or questions about the migration, please refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Original React + Vite codebase](../Kenya-Seo-Experts/)

## License

MIT
