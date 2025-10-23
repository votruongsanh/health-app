# HealthApp – Frontend Developer Test

## 🧩 Overview

- Protected pages: Top Page, My Record
- Public page: Column
- Mock data: `src/mocks/`
- Service layer: `src/services/` (built on a `mockFetch` utility)

## 🚀 Tech Stack

- React 18 + TypeScript
- Vite 5
- TailwindCSS (with custom design tokens)
- shadcn/ui (Button, Card, Sheet, ScrollArea, etc.)
- React Router DOM
- Recharts (charts)
- ESLint

## ⚙️ Installation & Run

```bash
# 1) Install deps
npm install

# 2) Start dev server
npm run dev

# 3) Build
npm run build

# 4) Preview production build
npm run preview
```

Requirements:

- Node >= 18 recommended

## 📊 Features by Page

- Top Page (`/top-page`, protected)
  - Achievement rate over hero image
  - Body weight/body fat two-line chart (Recharts)
  - Meal history grid with “Load more” and kind-based image mapping
- My Record Page (`/my-record`, protected)
  - Body Record chart with JP range labels (日/週/月/年 ready)
  - My Exercise scrollable list (custom scrollbar)
  - My Diary grid with “Load more”
- Column Page (`/column`, public)
  - Recommended categories
  - Articles grid with pagination and date formatting

Note: In this implementation, the public landing page is `/` → Column Page. Top can be accessed at `/top-page`.

## 🧠 Architecture & Data Flow

- UI Components (React + shadcn/ui)
  - Consume typed services
  - Maintain local loading and pagination state
- Services (`src/services/*Service.ts`)
  - Use `mockFetch(data, { delay })` to simulate network
  - Return Response-like objects (`ok/status/json`)
- Mock Data (`src/mocks/*`)
  - Encapsulate per-page datasets (Top, My Record, Column)
- Auth Guard
  - `RootLayout.tsx` restricts `/top-page` and `/my-record` unless authenticated
  - `AuthContext.tsx` holds `isAuthenticated`

Simple route guard:

```tsx
// src/components/common/layout/RootLayout.tsx
const isProtected =
  pathname.startsWith("/top-page") || pathname.startsWith("/my-record");
if (!isAuthenticated && isProtected) return <Navigate to="/column" replace />;
```

## 🧪 Mock API & Services

- `mockFetch<T>(data, { delay, status, shouldFail })` simulates `fetch`:
  - Returns `{ ok, status, json: async () => T }` after a delay
- Page-scoped services:
  - `topPageService.ts`: `getTopAchievement()`, `getTopBodyRecord()`, `getTopMeals()`
  - `myRecordService.ts`: `getRecordBody()`, `getExercises()`, `getDiaries()`
  - `columnService.ts`: `getArticles(page)`

Example:

```ts
// src/services/topPageService.ts
export async function getTopMeals(): Promise<MealItem[]> {
  const res = await mockFetch(topMeals, { delay: 250 });
  return res.json();
}
```

## 📘 Notes

- Authentication
  - The app assumes “logged-in” by default for convenience.
  - Toggle in `src/context/AuthContext.tsx`:
    ```ts
    const [isAuthenticated, setAuthenticated] = useState<boolean>(true);
    ```
- Routing
  - Public: `/` and `/column`
  - Protected: `/top-page`, `/my-record`
  - To make Top Page the root, move `TopPage` to the index route in `App.tsx`.
- Styling
  - TailwindCSS with design tokens mapped to the provided color palette.
  - Local fonts (Inter, Noto Sans JP) are loaded via `@font-face` in `src/index.css`.
- UI
  - shadcn/ui components used for consistent design (Button, Card, Sheet, ScrollArea, etc.)
- Charts
  - Recharts used via a reusable `TwoLineChart` wrapper.

## 💻 Development Environment

- Node.js >= 18.0.0
- Recommended: Node 18.20.2 using nvm
