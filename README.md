# Inventory Management System (Next.js + Serverless API)

A full-stack inventory management application using **Next.js 14** for frontend and **serverless Node.js API routes** for backend.

## Features

✅ Add inventory items  
✅ View all items with quantities  
✅ Delete items  
✅ Real-time sync with SWR  
✅ JSON-based persistence  
✅ Fully serverless (Vercel-ready)  

## Project Structure

```
inventory-system/
├── frontend/
│   ├── pages/
│   │   ├── index.js          # Main inventory UI
│   │   ├── api/inventory.js  # Backend API (serverless)
│   │   └── _app.js           # App wrapper
│   ├── styles.css            # Global styles
│   ├── next.config.js
│   └── package.json
├── backend/                  # (Legacy - converted to serverless)
├── README.md                 # This file
└── .gitignore
```

## Local Development

### Prerequisites
- Node.js 18+
- npm or yarn

### Run Locally

```powershell
cd "c:\Users\Lenovo\OneDrive\Desktop\java script\inventory-system\frontend"
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

## 🚀 Deploy to Vercel (LIVE)

### Option 1: Vercel CLI (Fastest)

```powershell
cd "c:\Users\Lenovo\OneDrive\Desktop\java script\inventory-system"

# Install Vercel CLI (if needed)
npm install -g vercel

# Login
vercel login

# Deploy to production
vercel --prod
```

✅ Done! You'll get a live URL like: `https://inventory-system-xxx.vercel.app`

### Option 2: GitHub + Vercel Dashboard

1. **Push to GitHub**:
```powershell
cd "c:\Users\Lenovo\OneDrive\Desktop\java script\inventory-system"
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

2. **Import to Vercel**:
- Go to https://vercel.com/new
- Select your repository
- Click "Deploy"

## API Routes

All endpoints at `/api/inventory`:

| Method | Endpoint | Payload | Response |
|--------|----------|---------|----------|
| GET | `/api/inventory` | — | `[{id, name, quantity}, ...]` |
| POST | `/api/inventory` | `{name, quantity}` | `{id, name, quantity}` |
| DELETE | `/api/inventory?id=1` | — | 204 No Content |

## Build & Production

```powershell
npm run build
npm start
```

## File References

- **[frontend/pages/index.js](frontend/pages/index.js)** — React UI
- **[frontend/pages/api/inventory.js](frontend/pages/api/inventory.js)** — API handler
- **[frontend/styles.css](frontend/styles.css)** — Styles

---

**Ready to deploy! Run `vercel --prod` now.** 🎉
