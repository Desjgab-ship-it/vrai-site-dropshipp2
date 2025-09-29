# replit.md

## Overview

This is a full-stack e-commerce application built as a single-product website with a modern tech stack. The application features a React frontend with TypeScript, an Express.js backend, and PostgreSQL database integration using Drizzle ORM. The site is designed for selling a premium product with Stripe payment integration, order tracking, and customer management features.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript and Vite for build tooling
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent design
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **UI Components**: Radix UI primitives with custom styling for accessibility
- **Design System**: Custom CSS variables with dark-on-light theme, 990px breakpoint, and mobile-responsive design

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM for type-safe database operations
- **API Design**: RESTful endpoints for payment processing, contact forms, and order management
- **Session Management**: Express sessions with PostgreSQL store

### Data Storage
- **Database**: PostgreSQL with Neon serverless hosting
- **Schema**: Four main tables - users, orders, contacts, and newsletters
- **Migrations**: Drizzle Kit for database schema management
- **Connection**: Connection pooling with @neondatabase/serverless

### Payment Integration
- **Payment Processor**: Stripe with hosted checkout sessions
- **Order Flow**: Create checkout session → redirect to Stripe → verify payment → update order status
- **Order Tracking**: Basic order status tracking with placeholder functionality

### Authentication & Security
- **Payment Security**: Stripe handles payment processing and PCI compliance
- **API Validation**: Zod schemas for request/response validation
- **Environment Variables**: Secure configuration for database and Stripe credentials

### Page Structure
The application follows a multi-page structure:
- Home page with hero section and product showcase
- Features page highlighting product benefits
- Reviews page with customer testimonials
- FAQ page with expandable question/answer sections
- Order tracking page (placeholder implementation)
- About, Contact, Privacy, and Terms pages
- Success page for completed purchases

### UI/UX Design Patterns
- **Navigation**: Hamburger menu drawer on mobile, horizontal nav on desktop
- **Shopping Cart**: Right-side drawer with coupon functionality (placeholder)
- **Responsive Design**: Mobile-first approach with 990px breakpoint
- **Component Library**: Consistent use of shadcn/ui components for forms, dialogs, and interactive elements

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18 with TypeScript, Wouter for routing, TanStack Query for data fetching
- **Build Tools**: Vite for development and production builds, esbuild for server bundling
- **Styling**: Tailwind CSS, PostCSS, Autoprefixer for styling and responsive design

### UI Component Libraries
- **Radix UI**: Complete suite of unstyled, accessible UI primitives (@radix-ui/react-*)
- **Lucide React**: Icon library for consistent iconography
- **shadcn/ui**: Pre-built component library with Tailwind CSS integration

### Backend Infrastructure
- **Database**: Neon PostgreSQL serverless database with connection pooling
- **ORM**: Drizzle ORM with PostgreSQL dialect for type-safe database operations
- **Session Storage**: connect-pg-simple for PostgreSQL-backed session management

### Payment Processing
- **Stripe**: Complete payment infrastructure with @stripe/stripe-js and @stripe/react-stripe-js
- **Checkout Flow**: Hosted checkout sessions for secure payment processing

### Development Tools
- **TypeScript**: Full TypeScript support across frontend and backend
- **Development**: tsx for TypeScript execution, various Replit-specific plugins for development experience
- **Code Quality**: Built-in TypeScript checking and Vite error overlay for development

### Third-Party Services
- **Neon Database**: Serverless PostgreSQL hosting with WebSocket support
- **Stripe**: Payment processing and checkout infrastructure
- **Unsplash**: Placeholder images for product and customer avatars (via CDN links)

The application is configured for deployment on Replit with specific plugins for development experience and cartographer integration for enhanced debugging capabilities.