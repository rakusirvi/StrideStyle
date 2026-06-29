src/
├── app/                           # NEXT.JS ROUTING WORKSPACE
   └── api/                       # API HANDLERS (Controllers)
       ├── products/
       │   ├── route.ts           # GET: All products | POST: Add new product (Admin)
       │   └── [id]/
       │       └── route.ts       # GET: Single product details
       │
       ├── landing/
       │   └── route.ts           # GET: Optimized unified payload for 5 sections
       │
       ├── cart/
       │   └── route.ts           # POST: Add/Update item in cart (PostgreSQL)
       │
       ├── favorites/
       │   └── route.ts           # POST: Toggle item favorite status (PostgreSQL)
       │
       └── checkout/
           └── route.ts           # POST: Process initial order & Stripe session


