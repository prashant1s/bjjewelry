Project setup for BJ Jewelry
git clone https://github.com/prashant1s/bjjewelry.git
cd bjjewelry
cp .env.example .env.local
npm install
npm run build
npm run dev
1. Prerequisites
   Node.js 18+ (20+ recommended for Next.js 16)
   npm, pnpm, yarn, or bun
   Git
2. Clone the repository
   git clone <repository-url>cd bjjewelry
3. Install dependencies
   npm install# or: pnpm install / yarn / bun install
4. Environment variables
   Copy the example env file:
   cp .env.example .env.local
   Edit .env.local and fill in values for:
   Variable Purpose
   DATABASE_URL PostgreSQL connection string (Supabase)
   DIRECT_URL Direct DB connection (migrations)
   UPSTASH_REDIS_REST_URL / UPSTASH_REDIS_REST_TOKEN Upstash Redis
   GOLD_API_KEY Gold API (https://www.goldapi.io)
   RAZORPAY_KEY_ID / RAZORPAY_KEY_SECRET Razorpay
   RESEND_API_KEY Resend for email
   NEXT_PUBLIC_SANITY_PROJECT_ID / NEXT_PUBLIC_SANITY_DATASET / SANITY_API_TOKEN Sanity CMS
   NEXTAUTH_SECRET Secret (e.g. openssl rand -base64 32)
   NEXTAUTH_URL App URL (use http://localhost:3000 for local)
   NEXT_PUBLIC_SITE_URL Public site URL
   Notes: Do not commit .env.local. For Prisma, .env or .env.local are used (see prisma.config.ts).
5. Database setup
   Run migrations and generate the Prisma client:
   npx prisma migrate dev
   Optional: seed the DB if a seed script exists:
   npx prisma db seed
6. Run the development server
   npm run dev
   Open http://localhost:3000 in your browser.
7. Build for production
   npm run build
   npm start
   Services and signup links
   Database: Supabase – https://supabase.com
   Redis: Upstash – https://upstash.com
   Gold rates: Gold API – https://www.goldapi.io
   Payments: Razorpay – https://dashboard.razorpay.com
   Email: Resend – https://resend.com
   CMS: Sanity – https://sanity.io/manage
