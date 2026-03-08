<div align="center">

# ✦ BlogConnect

**A modern blogging platform powered by React & Appwrite**

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-blogconnect.vercel.app-black?style=for-the-badge)](https://blogconnect.vercel.app/)
[![React](https://img.shields.io/badge/React_18-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Appwrite](https://img.shields.io/badge/Appwrite-FD366E?style=for-the-badge&logo=appwrite&logoColor=white)](https://appwrite.io/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Redux](https://img.shields.io/badge/Redux_Toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white)](https://redux-toolkit.js.org/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
[![MIT License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

<br/>

> *Write. Publish. Connect.*
> A full-featured blog app with authentication, rich text editing, image uploads, and real-time data — all backed by Appwrite's open-source BaaS.

<br/>

[🌐 Live Demo](https://blogconnect.vercel.app/) · [🐛 Report Bug](https://github.com/your-username/your-repo/issues) · [✨ Request Feature](https://github.com/your-username/your-repo/issues)

</div>

---

## ✦ Features

| | Feature | Description |
|---|---|---|
| 🔐 | **User Authentication** | Sign up, log in, and log out securely via Appwrite Auth |
| ✍️ | **Rich Text Editor** | Write beautifully formatted posts with a full-featured editor |
| 🖼️ | **Cover Image Uploads** | Upload & serve post cover images via Appwrite Storage |
| 📄 | **Post Management** | Create, edit, publish, or delete your posts with full control |
| 🌐 | **Public Feed** | Browse all published posts — no login required |
| 🔒 | **Protected Routes** | Write actions are guarded; unauthenticated users are redirected |
| 📱 | **Responsive Design** | Fully responsive across all screen sizes |
| ⚡ | **Fast & Lightweight** | Vite-powered build with optimized performance |

---

## 🛠️ Tech Stack

| Layer | Technology | Purpose |
|---|---|---|
| **Frontend** | React 18 + Vite | Component-based UI with lightning-fast HMR |
| **Styling** | Tailwind CSS | Utility-first responsive styling |
| **BaaS** | Appwrite | Auth, database & storage — all in one |
| **State** | Redux Toolkit | Global auth & application state |
| **Routing** | React Router v6 | Client-side navigation & route protection |
| **Deployment** | Vercel | Zero-config CI/CD hosting |

---

## 📁 Project Structure

```
BlogConnect/
├── public/
├── src/
│   ├── appwrite/               # Appwrite service layer
│   │   ├── auth.js             # Login, signup, logout, session
│   │   └── config.js           # Database & storage operations
│   │
│   ├── components/             # Reusable UI components
│   │   ├── Header/
│   │   ├── Footer/
│   │   ├── PostCard.jsx
│   │   ├── PostForm.jsx
│   │   ├── RTE.jsx             # Rich text editor
│   │   └── AuthLayout.jsx      # Protected route wrapper
│   │
│   ├── pages/                  # Route-level page components
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   ├── AddPost.jsx
│   │   ├── EditPost.jsx
│   │   └── Post.jsx
│   │
│   ├── store/                  # Redux store
│   │   ├── store.js
│   │   └── authSlice.js
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── .env                        # Environment variables (gitignored)
├── .gitignore
├── index.html
├── vite.config.js
└── package.json
```

---

## ⚙️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or above
- An [Appwrite](https://appwrite.io/) account (free tier works great)

---

### 1 · Clone & Install

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo/BlogConnect
npm install
```

---

### 2 · Set Up Appwrite

In your [Appwrite Console](https://cloud.appwrite.io/):

1. **Create a Project** → copy the Project ID
2. **Enable Auth** → Authentication → Settings → enable Email/Password
3. **Create a Database** with a `posts` collection. Add these attributes:

   | Attribute | Type | Notes |
   |---|---|---|
   | `title` | String | Required |
   | `content` | String | Required |
   | `featuredImage` | String | File ID from storage |
   | `status` | String | `"active"` or `"inactive"` |
   | `userId` | String | Appwrite user ID |
   | `slug` | String | Unique identifier |

4. **Create a Storage Bucket** → for post cover images
5. Set **permissions** on the collection and bucket as needed

---

### 3 · Configure Environment Variables

Create a `.env` file in the `BlogConnect/` root:

```env
VITE_APPWRITE_URL=https://cloud.appwrite.io/v1
VITE_APPWRITE_PROJECT_ID=your_project_id
VITE_APPWRITE_DATABASE_ID=your_database_id
VITE_APPWRITE_COLLECTION_ID=your_collection_id
VITE_APPWRITE_BUCKET_ID=your_bucket_id
```

> ⚠️ **Never commit your `.env` file.** It's already in `.gitignore`.

---

### 4 · Run the Dev Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

### 5 · Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder — ready to deploy on Vercel or any static host.

---

## 🔑 Environment Variables Reference

| Variable | Description |
|---|---|
| `VITE_APPWRITE_URL` | Appwrite API endpoint |
| `VITE_APPWRITE_PROJECT_ID` | Your Appwrite project ID |
| `VITE_APPWRITE_DATABASE_ID` | Database ID for blog posts |
| `VITE_APPWRITE_COLLECTION_ID` | Collection ID for post documents |
| `VITE_APPWRITE_BUCKET_ID` | Storage bucket ID for cover images |

---

## 🚀 Deployment

This project is deployed on **Vercel**. To deploy your own:

1. Push your code to GitHub
2. Import the repo on [vercel.com](https://vercel.com/)
3. Add all environment variables in the Vercel project settings
4. Deploy — done ✓

---

## 🤝 Contributing

Contributions are welcome!

```bash
# 1. Fork the repo
# 2. Create your feature branch
git checkout -b feature/your-feature-name

# 3. Commit your changes
git commit -m "feat: add your feature"

# 4. Push and open a PR
git push origin feature/your-feature-name
```

---

## 📄 License

Distributed under the **MIT License**. See [`LICENSE`](../LICENSE) for details.

---

## 🙏 Acknowledgements

- [Appwrite](https://appwrite.io/) — open-source BaaS that powers the backend
- [Vite](https://vitejs.dev/) — blazing-fast frontend tooling
- [Tailwind CSS](https://tailwindcss.com/) — utility-first CSS framework
- [Redux Toolkit](https://redux-toolkit.js.org/) — state management made simple
- [React Router](https://reactrouter.com/) — declarative routing for React

---

<div align="center">

Made with ❤️ · [blogconnect.vercel.app](https://blogconnect.vercel.app/)

</div>
