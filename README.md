# StrideStyle

# StrideStyle - E-Commerce Web Application

StrideStyle is a modern e-commerce platform built with Next.js 16.1 and Tailwind CSS v4. It features a dynamic product listing with filtering, pagination, brand showcase, and a comprehensive admin panel for product management.

## Table of Contents

- [Tech Stack](#tech-stack)
- [Features](#features)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Admin Panel](#admin-panel)
- [Configuration](#configuration)

## Tech Stack

- **Framework**: [Next.js 16.1](https://nextjs.org/) (React Framework)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (Utility-first CSS framework)
- **Language**: TypeScript
- **Data Storage**: Local JSON files (`public/data/*`)
- **Deployment**: Vercel (optional, via Next.js)

## Features

### Customer Storefront

- **Dynamic Product Listing**: Browse all available products
- **Filtering**: Filter products by category and price range
- **Pagination**: Navigate through products in manageable chunks
- **Brand Showcase**: Dedicated page to explore all brands
- **Product Details**: View detailed information about each product
- **Shopping Cart**: Add, remove, and update products in cart
- **Checkout**: Simple checkout process with order confirmation
- **Search Functionality**: Search products by name
- **Product Images**: Multiple product images with zoom effect

### Admin Panel

- **Dashboard**: Overview of system statistics
- **Product Management**: Add, edit, and delete products
- **Inventory Management**: Track stock levels
- **Order Management**: View and manage customer orders
- **Brand Management**: Add and manage brand information
- **User Management**: Manage admin users and roles

## Getting Started

### Prerequisites

- **Node.js**: v18 or higher
- **npm**: v9 or higher

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd StrideStyle
```

2. Install dependencies:

```bash
npm ci
```

### Development

Start the development server with hot-reload:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

### Production

Build and run the production server:

```bash
npm run build
npm start
```

## Project Structure

```
StrideStyle/
├── src/
│   ├── app/                      # Next.js application pages
│   │   ├── page.tsx             # Home page
│   │   ├── store/               # Store pages
│   │   │   ├── page.tsx         # Product listing
│   │   │   └── [id]/             # Product detail
│   │   └── admin/               # Admin panel pages
│   ├── components/               # Reusable UI components
│   │   ├── ui/                    # Low-level UI primitives
│   │   ├── Layout.tsx             # Main layout with header/footer
│   │   └── shared/                # Shared components
│   ├── features/                 # Feature modules
│   │   ├── home/                # Home page components
│   │   ├── admin/               # Admin panel components
│   │   └── store/               # Store components
│   ├── types/                     # TypeScript type definitions
│   ├── lib/                      # Utility functions and helpers
│   └── services/                 # Data services and API interactions
├── public/                       # Static assets
│   └── data/                     # JSON data files (products, orders, etc.)
├── .env                           # Environment variables
├── tailwind.config.ts            # Tailwind CSS configuration
└── tsconfig.json                  # TypeScript configuration
```

## Data Management

### JSON Data

All product and order data is stored in the `public/data/` directory:

- `products.json`: Product information and inventory
- `brands.json`: Brand details
- `orders.json`: Customer orders
- `users.json`: Admin user credentials

### Working with Data

- **Adding Data**: Simply edit the JSON files directly
- **Updating Data**: Use the Admin Panel to modify products and orders
- **Accessing Data**: Data is served statically from the `public/` folder

## Admin Panel

The admin panel is accessible at `/admin`. You can access it by logging in with:

- **Username**: admin
- **Password**: admin123

## Configuration

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Application Port
PORT=3000

# Admin Credentials (for development only)
ADMIN_USERNAME=admin
ADMIN_PASSWORD=admin123

# Vercel Deployment
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## Commands

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Build for production     |
| `npm run lint` | Lint code |
| `npm run format` | Format code |

## Contact

For any issues or questions regarding the project, please contact:

- **Author**: Rakesh Choudhary
- **Email**: [EMAIL_ADDRESS]

## License

This project is licensed under the [MIT License](LICENSE).
