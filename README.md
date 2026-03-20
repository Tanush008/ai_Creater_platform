# 🚀 AI Creator Platform

> **Create. Publish. Grow.**
> An AI-powered full-stack SaaS platform that helps content creators build and grow their audience through intelligent content creation, publishing, and engagement tools.

---

## 📋 Table of Contents

- [Overview](#overview)
- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [📁 Project Structure](#-project-structure)
- [⚙️ Prerequisites](#️-prerequisites)
- [🚀 Getting Started](#-getting-started)
- [🔐 Environment Variables](#-environment-variables)
- [📡 Backend & API Reference](#-backend--api-reference)
- [🗄️ Database Schema](#️-database-schema)
- [🚢 Deployment](#-deployment)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## Overview

**AI Creator Platform** is a modern content creation and publishing platform designed for writers, bloggers, and digital creators. It combines the power of **Google Gemini AI** with a seamless rich-text editing experience, real-time analytics, and a social ecosystem — all in one place.

Whether you want to generate a full blog post from just a title, improve your existing drafts, or grow your reader base, this platform provides all the tools you need.

---

## ✨ Features

### 🤖 AI-Powered Content Creation
- **Generate blog posts** from a single title using Google Gemini AI
- **Improve existing content** with AI actions: *expand*, *simplify*, or *enhance*
- Auto-format generated content as structured HTML for the rich text editor
- Category and tag-aware generation for better contextual content

### 📝 Rich Text Editor
- Full-featured WYSIWYG editor powered by **React Quill**
- Support for headings, bold, italic, lists, links, code blocks, and more
- Live preview as you write
- Inline image insertion and formatting

### 🖼️ Image Management
- Drag-and-drop image uploads via **ImageKit**
- Real-time image transformation and optimization
- CDN-backed fast image delivery
- Set custom featured images for each post

### 📊 Creator Analytics Dashboard
- Track total **views**, **likes**, **comments**, and **followers**
- Daily analytics charts (powered by **Chart.js**)
- Per-post performance insights
- Historical trend data

### 📰 Content Management
- Save posts as **drafts** or **publish** immediately
- Edit and update existing posts at any time
- Delete posts with a single click
- Schedule posts for future publishing

### 🌐 Public Creator Profiles
- Every creator gets a public profile page at `/{username}`
- Browse a creator's published posts
- Follow/unfollow creators directly from their profile

### 📡 Social Feed
- Discover published posts from all creators on the platform
- Infinite scroll feed with newest posts first
- Suggested users to follow

### 👥 Social Engagement
- **Follow / Unfollow** other creators
- **Like** posts
- **Comment** on posts with moderation support (approved / pending / rejected)
- Real-time follower count

### 🔒 Authentication & Security
- Secure user authentication via **Clerk**
- JWT-based session management
- Protected dashboard routes (unauthenticated users are redirected to sign-in)
- Username uniqueness validation

### 🎨 UI / UX
- Dark-themed, gradient-rich modern design
- Fully responsive — works on mobile, tablet, and desktop
- Light/dark mode support
- Toast notifications and smooth loading states

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| **Framework** | [Next.js 15](https://nextjs.org/) (App Router) |
| **UI Library** | [React 19](https://react.dev/) |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com/) |
| **Component Library** | [Shadcn/ui](https://ui.shadcn.com/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Rich Text Editor** | [React Quill New](https://www.npmjs.com/package/react-quill-new) |
| **Backend / Database** | [Convex](https://www.convex.dev/) (serverless) |
| **Authentication** | [Clerk](https://clerk.com/) |
| **AI Integration** | [Google Gemini AI](https://ai.google.dev/) |
| **Image Storage** | [ImageKit](https://imagekit.io/) |
| **Charts** | [React ChartJS 2](https://react-chartjs-2.js.org/) |
| **Form Handling** | [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) |
| **Notifications** | [Sonner](https://sonner.emilkowal.ski/) |
| **Date Utilities** | [date-fns](https://date-fns.org/) |
| **File Upload** | [React Dropzone](https://react-dropzone.js.org/) |
| **Deployment** | [Vercel](https://vercel.com/) |

---

## 📁 Project Structure

```
ai_Creater_platform/
├── app/                          # Next.js App Router
│   ├── (auth)/                  # Authentication pages (Clerk)
│   │   ├── sign-in/
│   │   └── sign-up/
│   ├── (public)/                # Public-facing routes
│   │   ├── [username]/          # Creator public profile
│   │   ├── [username]/[postId]/ # Individual post view
│   │   └── feed/                # Public post feed
│   ├── dashboard/               # Protected creator dashboard
│   │   ├── create/              # New post creation
│   │   ├── posts/               # Manage existing posts
│   │   ├── edit/[id]/           # Edit a post by ID
│   │   ├── followers/           # Followers management
│   │   └── settings/            # Profile & account settings
│   ├── api/
│   │   └── imagekit/upload/     # Image upload API route
│   ├── actions/
│   │   └── gemini.js            # Server actions for Gemini AI
│   ├── hooks/                   # Custom React hooks
│   ├── layout.js                # Root layout with providers
│   └── page.js                  # Landing page
├── components/                  # Reusable React components
│   ├── ui/                     # Shadcn UI primitives
│   ├── post-editor.jsx         # Main post editor component
│   ├── post-card.jsx           # Post display card
│   ├── image-upload-model.jsx  # Image upload modal
│   ├── daily-view-charts.jsx   # Analytics charts
│   └── header.jsx              # Navigation bar
├── convex/                      # Convex backend
│   ├── schema.js               # Database schema
│   ├── auth.config.js          # Clerk JWT config
│   ├── users.js                # User queries & mutations
│   ├── posts.js                # Post CRUD
│   ├── comments.js             # Comments system
│   ├── likes.js                # Likes system
│   ├── follows.js              # Follow system
│   ├── feed.js                 # Feed queries
│   ├── dashboard.js            # Analytics queries
│   └── public.js               # Public profile queries
├── lib/                         # Utility functions & static data
├── public/                      # Static assets
├── middleware.js                # Auth middleware
└── package.json
```

---

## ⚙️ Prerequisites

Before you begin, make sure you have the following installed and accounts set up:

- **Node.js** >= 18.x
- **npm** >= 9.x (or yarn/pnpm)
- A [Clerk](https://clerk.com/) account (authentication)
- A [Convex](https://www.convex.dev/) account (serverless backend & database)
- A [Google AI Studio](https://aistudio.google.com/) API key (Gemini AI)
- An [ImageKit](https://imagekit.io/) account (image storage & CDN)

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Tanush008/ai_Creater_platform.git
cd ai_Creater_platform
```

### 2. Install dependencies

```bash
npm install
```


### 3. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the Next.js development server |
| `npm run build` | Build the app for production |
| `npm start` | Start the production server |
| `npm run lint` | Run ESLint |

---

<div align="center">
  <p>Built with ❤️ using Next.js, Convex, Clerk, and Google Gemini AI</p>
</div>
