

# Crown Walk — Premium Sneaker Store

## Overview
A sophisticated, soft grey-themed e-commerce website for selling premium sneakers (Nike, New Balance, Converse All Stars, Air Jordans, Timberlands, Lacoste) with free nationwide delivery to South Africa. Powered by Shopify for product management, cart, and checkout.

## Design Theme
- **Soft grey palette** — light greys, charcoals, and whites with subtle accent colors
- **Premium, minimalist typography** — clean sans-serif fonts, generous whitespace
- **Smooth animations** — fade-ins, parallax scrolling, hover effects throughout

## Landing Page Sections (10 sections)

1. **Hero Section** — Full-width hero with "Crown Walk" branding, tagline ("Walk Like Royalty"), and a prominent "Shop Now" CTA with smooth entrance animation

2. **Free Delivery Banner** — Animated ticker/banner: "Free Delivery Nationwide 🇿🇦"

3. **Brand Showcase** — Horizontal scrolling logo carousel of all brands (Nike, New Balance, Converse, Jordan, Timberland, Lacoste) with hover effects

4. **Featured Products Grid** — Dynamic product cards loaded from Shopify API with image, title, price, and "Add to Cart" button; staggered fade-in animations

5. **Category Cards** — Visual category navigation (Dunks, Air Force 1, Jordans, Retros, New Balance, Timberlands, etc.) with hover zoom effects

6. **"Why Crown Walk"** — 3-4 value proposition cards (Authentic Only, Free Delivery, Premium Selection, Secure Checkout) with icon animations

7. **Trending Now** — Highlighted product carousel with smooth slide transitions

8. **Lifestyle Banner** — Full-width parallax image section with overlay text encouraging exploration

9. **Newsletter Signup** — Email capture section with elegant input design

10. **Footer** — Links, social icons, contact info, and "Crown Walk" branding

## Pages & Navigation
- **Sticky header** with Crown Walk logo, navigation links, search icon, and cart drawer icon
- **Home** (landing page)
- **Product Detail Page** (`/product/[handle]`) — Large images, variant selection (size/color), add to cart, description
- **404 Page**

## Shopify Integration
- Storefront API for fetching real products
- Zustand cart state management with persistent storage
- Cart drawer (slide-in sheet) with quantity controls
- Shopify-hosted checkout via Storefront API cart creation
- Products created via Shopify (no mock data)

## Key Features
- Fully responsive (mobile-first)
- Cart drawer with item count badge in header
- Cart sync on page load and tab visibility change
- Loading states and smooth transitions throughout

