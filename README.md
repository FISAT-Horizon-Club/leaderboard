# LDBoard

Starter boilerplate for a **Leaderboard + Judging System**. This is only the project skeleton —
no judging, scoring, rounds logic, roles, or database schema yet.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Supabase (client utility only, no schema yet)

## Getting Started

```bash
npm install
cp .env.example .env.local   # then fill in your Supabase project URL + anon key
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

| Route            | Description                                |
| ---------------- | ------------------------------------------ |
| `/`              | Home                                       |
| `/login`         | Username/password login UI                 |
| `/admin`         | Admin dashboard placeholder                |
| `/admin/setup`   | Competition setup placeholder               |
| `/leaderboard`   | Public leaderboard placeholder             |

## Scripts

```bash
npm run dev        # start dev server
npm run build      # production build
npm run lint       # eslint
npm run typecheck  # tsc --noEmit
```

## Structure

```text
app/
├── layout.tsx
├── page.tsx
├── login/
│   ├── page.tsx
│   └── LoginForm.tsx
├── admin/
│   ├── layout.tsx
│   ├── page.tsx
│   └── setup/
│       ├── page.tsx
│       └── SetupForm.tsx
└── leaderboard/
    └── page.tsx
components/
├── AdminNav.tsx
└── Navbar.tsx
lib/
└── supabase.ts
.env.example
```
