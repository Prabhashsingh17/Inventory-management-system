Inventory Management System (Next.js frontend + Express backend)

Structure

- `backend/` — Express API (SQLite)
- `frontend/` — Next.js UI

Local run

PowerShell commands:

```powershell
# backend
cd "c:\Users\Lenovo\OneDrive\Desktop\java script\inventory-system\backend"
npm install
npm run dev

# in a separate terminal: frontend
cd "c:\Users\Lenovo\OneDrive\Desktop\java script\inventory-system\frontend"
npm install
npm run dev
```

The frontend expects the backend at `NEXT_PUBLIC_API_URL` (defaults to `http://localhost:4000`).

Deploy

- Frontend: deploy to Vercel (import the repo) — Vercel detects Next.js automatically.
- Backend: deploy to Render/Railway/Fly using the provided `Dockerfile` or `node index.js` start command.

Push to GitHub

```powershell
cd "c:\Users\Lenovo\OneDrive\Desktop\java script\inventory-system"
git init
git add .
git commit -m "Initial inventory system"
# create repo on GitHub and push
git remote add origin <your-repo-url>
git push -u origin main
```

If you want, I can prepare the git commit here and help deploy (you'll need to authenticate for GitHub/Vercel/Render interactively).
