# React + Vite to Next.js Migration Guide

## Summary of Changes

Your React + Vite application has been successfully converted to Next.js 15 with the App Router. Here's what changed and how to use your new Next.js application.

## Key Changes

### 1. Framework Migration
- **Before**: React 18 + Vite + Express
- **After**: Next.js 15 (App Router)

### 2. Routing System
- **Before**: Wouter for client-side routing
- **After**: Next.js file-based routing with App Router

### 3. Backend/API
- **Before**: Express server with separate routes file
- **After**: Next.js API Routes (serverless functions)

### 4. Build System
- **Before**: Vite for bundling and dev server
- **After**: Next.js built-in compiler and dev server

## File Structure Comparison

### Old Structure (React + Vite)
```
client/
  src/
    pages/          # Page components
    components/     # React components
    hooks/          # Custom hooks
    lib/            # Utilities
server/
  index.ts          # Express server
  routes.ts         # API routes
  db.ts             # Database config
```

### New Structure (Next.js)
```
app/
  page.tsx          # Home page (/)
  layout.tsx        # Root layout
  providers.tsx     # Client providers
  globals.css       # Global styles
  about/
    page.tsx        # /about route
  services/
    page.tsx        # /services route
  api/
    inquiries/
      route.ts      # API endpoint
components/         # Same as before
hooks/             # Same as before
lib/               # Same as before
```

## Detailed Changes by Component

### Pages Migration

All pages have been converted from Wouter routes to Next.js pages:

| Old Route | New Location | URL |
|-----------|-------------|-----|
| `<Route path="/" component={Home} />` | `app/page.tsx` | `/` |
| `<Route path="/about" component={About} />` | `app/about/page.tsx` | `/about` |
| `<Route path="/services" component={Services} />` | `app/services/page.tsx` | `/services` |
| `<Route path="/web-design" component={WebDesign} />` | `app/web-design/page.tsx` | `/web-design` |
| `<Route path="/portfolio" component={Portfolio} />` | `app/portfolio/page.tsx` | `/portfolio` |
| `<Route path="/contact" component={Contact} />` | `app/contact/page.tsx` | `/contact` |

### Component Changes

#### Link Component
**Before (Wouter):**
```tsx
import { Link } from "wouter";

<Link href="/about">About</Link>
```

**After (Next.js):**
```tsx
import Link from "next/link";

<Link href="/about">About</Link>
```

#### Location/Pathname Hook
**Before (Wouter):**
```tsx
import { useLocation } from "wouter";

const [location] = useLocation();
```

**After (Next.js):**
```tsx
import { usePathname } from "next/navigation";

const pathname = usePathname();
```

#### Client Components
All interactive components now need the `'use client'` directive:

```tsx
'use client';

import { useState } from 'react';

export function MyComponent() {
  // Component code
}
```

### API Routes Migration

**Before (Express):**
```typescript
// server/routes.ts
app.post('/api/inquiries', async (req, res) => {
  // Handle request
});
```

**After (Next.js API Route):**
```typescript
// app/api/inquiries/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  // Handle request
  return NextResponse.json(data);
}
```

## Setup Instructions

### 1. Prerequisites
- Node.js 18 or higher
- PostgreSQL database
- npm or yarn

### 2. Installation Steps

```bash
# Extract the zip file
unzip nextjs-kenya-seo-experts.zip
cd nextjs-kenya-seo-experts

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Edit .env and add your database URL
# DATABASE_URL=postgresql://user:password@localhost:5432/database_name

# Push database schema
npm run db:push

# Start development server
npm run dev
```

### 3. Access the Application
Open http://localhost:3000 in your browser

## Development Workflow

### Running the Dev Server
```bash
npm run dev
```
The dev server runs on http://localhost:3000 with hot module replacement.

### Building for Production
```bash
npm run build
```
Creates an optimized production build in `.next/` directory.

### Starting Production Server
```bash
npm run build
npm start
```

### Database Migrations
```bash
npm run db:push
```
Pushes schema changes to your database.

## New Features & Benefits

### 1. Server-Side Rendering (SSR)
All pages are now server-rendered by default, improving:
- SEO performance
- Initial page load speed
- Core Web Vitals scores

### 2. Automatic Code Splitting
Next.js automatically splits your JavaScript bundles for faster loading.

### 3. Image Optimization
Use the Next.js Image component for automatic image optimization:

```tsx
import Image from 'next/image';

<Image
  src="/image.jpg"
  alt="Description"
  width={500}
  height={300}
/>
```

### 4. Built-in Font Optimization
Next.js optimizes fonts automatically for better performance.

### 5. API Routes
No need for a separate Express server - API routes are built-in.

### 6. Edge Runtime Support
Deploy to edge locations for faster global performance.

## Deployment Options

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Add DATABASE_URL environment variable
4. Deploy!

### Other Platforms
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Railway
- Render
- Google Cloud Run

## Environment Variables

Required environment variables:
```
DATABASE_URL=postgresql://user:password@host:port/database
```

Add these in your hosting platform's environment variable settings.

## Common Issues & Solutions

### Issue: "Module not found" errors
**Solution**: Make sure all dependencies are installed:
```bash
npm install
```

### Issue: Database connection errors
**Solution**: Verify your DATABASE_URL in .env file and ensure the database is running.

### Issue: "use client" directive missing
**Solution**: Components that use hooks like useState, useEffect, etc. need `'use client'` at the top.

### Issue: Image optimization errors
**Solution**: Add the image domain to `next.config.js`:
```js
images: {
  remotePatterns: [
    { protocol: 'https', hostname: 'your-domain.com' }
  ]
}
```

## What Stayed the Same

- **All UI Components**: Your shadcn/ui components work exactly the same
- **Styling**: Tailwind CSS configuration and all styles
- **Database Schema**: Drizzle ORM and schema
- **Component Logic**: Business logic in components
- **React Query**: Data fetching with TanStack Query
- **Form Handling**: React Hook Form with Zod validation

## Performance Improvements

Your Next.js application should see:
- ✅ Faster initial page loads (SSR)
- ✅ Better SEO scores
- ✅ Improved Core Web Vitals
- ✅ Automatic code splitting
- ✅ Optimized images and fonts
- ✅ Edge deployment capabilities

## Need Help?

- [Next.js Documentation](https://nextjs.org/docs)
- [App Router Guide](https://nextjs.org/docs/app)
- [API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
- [Deployment](https://nextjs.org/docs/app/building-your-application/deploying)

## Rollback Instructions

If you need to go back to the original React + Vite setup, you still have the original codebase in the `Kenya-Seo-Experts` folder.

---

**Congratulations!** Your application is now running on Next.js with improved performance and better SEO capabilities. 🎉
