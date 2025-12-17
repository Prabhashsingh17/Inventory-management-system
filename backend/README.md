Inventory Backend (Express + SQLite)

Run locally:

```powershell
cd "c:\Users\Lenovo\OneDrive\Desktop\java script\inventory-system\backend"
npm install
npm run dev   # requires nodemon, or npm start
```

API endpoints:

- `GET /api/inventory` — list items
- `POST /api/inventory` — add item { name, quantity }
- `PUT /api/inventory/:id` — update item
- `DELETE /api/inventory/:id` — delete item

Deploy:

- You can deploy this backend to Render, Railway, or Fly.io. For Render, create a new Web Service, select the repo and set the start command to `node index.js` and port to `4000`.
