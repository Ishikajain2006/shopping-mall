# Mall3D — Full-Stack 3D Shopping Mall

A Vercel-ready Next.js full-stack version of the original HTML + `<model-viewer>` project.

## Stack

- Next.js + React
- CSS
- Google `<model-viewer>` for the 3D mall
- Next.js API routes for the backend
- MongoDB Atlas for contact-form data
- Vercel deployment

## 1. Install

```bash
npm install
```

## 2. Add the 3D model

Copy your existing file:

`source_urban199_usdz.glb`

to:

`public/models/source_urban199_usdz.glb`

Do not put it inside `app/`.

## 3. MongoDB

Create a MongoDB Atlas database and copy the connection string.

Create `.env.local`:

```env
MONGODB_URI=mongodb+srv://USERNAME:PASSWORD@cluster.mongodb.net/shopping_mall
```

## 4. Run locally

```bash
npm run dev
```

Open:

http://localhost:3000

## 5. What makes this full-stack?

Frontend:
- 3D model viewer
- Store directory
- Category filters
- Responsive UI
- Contact form

Backend:
- `GET /api/products` returns mall/store data.
- `POST /api/contact` validates and stores messages in MongoDB.

## 6. Deploy on Vercel

Push the project to GitHub.

Then in Vercel:
1. Add New Project.
2. Import the GitHub repository.
3. Add Environment Variable:
   `MONGODB_URI` = your MongoDB Atlas connection string.
4. Deploy.

Vercel automatically detects Next.js.

## Project structure

```text
mall3d/
├── app/
│   ├── api/
│   │   ├── contact/route.js
│   │   └── products/route.js
│   ├── globals.css
│   ├── layout.js
│   └── page.js
├── components/
│   ├── MallApp.jsx
│   └── MallViewer.jsx
├── lib/
│   └── db.js
├── models/
│   └── Contact.js
├── public/
│   └── models/
│       └── source_urban199_usdz.glb
├── .env.example
├── next.config.mjs
├── package.json
└── README.md
```
