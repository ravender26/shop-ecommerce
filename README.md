# Premium Kitchen Utensils Store

A full-stack e-commerce application built with Next.js, Prisma, and Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Database**: Prisma with SQLite
- **UI Components**: Shadcn/UI
- **Animations**: Framer Motion

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

### 3. Set Up Database

Generate Prisma Client and push the schema:

```bash
npx prisma generate
npx prisma db push
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
/app              # Next.js App Router pages
  /storefront     # Customer-facing pages
  /admin          # Admin panel pages
/components       # Reusable UI components
/lib              # Utilities and Prisma client
/prisma           # Database schema
```

## Database Schema

- **User**: Customer and admin accounts
- **Product**: Kitchen utensils with images, pricing, and inventory
- **Order**: Customer orders
- **OrderItem**: Individual items in orders

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run db:push` - Push Prisma schema to database
- `npm run db:studio` - Open Prisma Studio
- `npm run db:generate` - Generate Prisma Client

