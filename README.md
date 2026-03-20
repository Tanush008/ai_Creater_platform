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

### 3. Set up environment variables

Copy the example below and create a `.env.local` file in the root of the project:

```bash
cp .env.example .env.local   # if .env.example exists, otherwise create manually
```

See the [Environment Variables](#-environment-variables) section for all required keys.

### 4. Initialize the Convex backend

```bash
npx convex dev
```

This starts the Convex development server and automatically syncs your schema and functions.

### 5. Start the development server

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

## 🔐 Environment Variables

Create a `.env.local` file in the project root and add the following variables:

```env
# ─── Clerk Authentication ─────────────────────────────────────────────────────
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
CLERK_JWT_ISSUER_DOMAIN=https://<your-clerk-domain>.clerk.accounts.dev

# ─── Convex (Backend & Database) ──────────────────────────────────────────────
NEXT_PUBLIC_CONVEX_URL=https://<your-deployment>.convex.cloud
CONVEX_DEPLOYMENT=<your-convex-deployment-name>

# ─── Google Gemini AI ─────────────────────────────────────────────────────────
GEMINI_API_KEY=AIza...

# ─── ImageKit (Image Storage & CDN) ──────────────────────────────────────────
NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY=public_...
IMAGEKIT_PRIVATE_KEY=private_...
NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT=https://ik.imagekit.io/<your-imagekit-id>
```

> ⚠️ **Never commit `.env.local` to version control.** It is listed in `.gitignore` by default.

---

## 📡 Backend & API Reference

### REST API Routes

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/imagekit/upload` | `POST` | Authenticate and upload an image to ImageKit |

### Convex Server Functions

#### Users (`convex/users.js`)
| Function | Type | Description |
|----------|------|-------------|
| `store` | Mutation | Create or update user on login |
| `getCurrentUser` | Query | Get the currently authenticated user |
| `updateUsername` | Mutation | Set a unique public username |
| `getByUsername` | Query | Fetch public user profile by username |

#### Posts (`convex/posts.js`)
| Function | Type | Description |
|----------|------|-------------|
| `create` | Mutation | Create a new post (draft or published) |
| `update` | Mutation | Update an existing post |
| `getUserDraft` | Query | Get the user's active draft |
| `getUserPosts` | Query | List all posts for a user (filter by status) |
| `getById` | Query | Get a single post by ID |
| `deletePost` | Mutation | Delete a post |

#### Feed (`convex/feed.js`)
| Function | Type | Description |
|----------|------|-------------|
| `getFeed` | Query | Get published posts sorted by newest |
| `getSuggestedUsers` | Query | Suggest creators to follow |

#### Likes (`convex/likes.js`)
| Function | Type | Description |
|----------|------|-------------|
| `toggleLike` | Mutation | Like or unlike a post |
| `getLikeStatus` | Query | Check if the current user liked a post |
| `getLikeCount` | Query | Get total likes for a post |

#### Comments (`convex/comments.js`)
| Function | Type | Description |
|----------|------|-------------|
| `add` | Mutation | Add a comment to a post |
| `getByPost` | Query | List approved comments for a post |
| `delete` | Mutation | Delete a comment |

#### Follows (`convex/follows.js`)
| Function | Type | Description |
|----------|------|-------------|
| `follow` | Mutation | Follow a creator |
| `unfollow` | Mutation | Unfollow a creator |
| `getFollowers` | Query | List followers of a user |
| `getFollowing` | Query | List users a creator follows |
| `isFollowing` | Query | Check if current user follows a creator |

#### Dashboard / Analytics (`convex/dashboard.js`)
| Function | Type | Description |
|----------|------|-------------|
| `getAnalytics` | Query | Aggregate stats (views, likes, comments, followers) |
| `getDailyStats` | Query | Daily view data for charts |

#### Public Profiles (`convex/public.js`)
| Function | Type | Description |
|----------|------|-------------|
| `getPublicProfile` | Query | Get public creator profile data |
| `getPublicPosts` | Query | Get published posts for a public profile |

### Server Actions (`app/actions/gemini.js`)

| Action | Description |
|--------|-------------|
| `generateBlogContent(title, category, tags)` | Use Gemini AI to generate a full blog post |
| `improveContent(content, type)` | Improve content (`expand` / `simplify` / `enhance`) |

---

## 🗄️ Database Schema

The platform uses **Convex** as the serverless database. Below is the schema overview:

### `users`
| Field | Type | Description |
|-------|------|-------------|
| `name` | string | Display name |
| `email` | string | Email address |
| `tokenIdentifier` | string | Clerk user ID |
| `imageUrl` | string | Profile picture URL |
| `username` | string | Unique public username |
| `createdAt` | number | Account creation timestamp |
| `lastActiveAt` | number | Last seen timestamp |

### `posts`
| Field | Type | Description |
|-------|------|-------------|
| `title` | string | Post title |
| `content` | string | HTML content (from rich text editor) |
| `status` | string | `draft` or `published` |
| `authorId` | Id<"users"> | Reference to author |
| `tags` | string[] | Array of tags |
| `category` | string | Post category |
| `featuredImage` | string | ImageKit URL |
| `viewCount` | number | Total view count |
| `likeCount` | number | Total like count |
| `publishedAt` | number | Publish timestamp |

### `comments`
| Field | Type | Description |
|-------|------|-------------|
| `postId` | Id<"posts"> | Reference to post |
| `authorId` | string | Commenter's user ID |
| `content` | string | Comment text |
| `status` | string | `approved`, `pending`, or `rejected` |
| `createdAt` | number | Comment timestamp |

### `likes`
| Field | Type | Description |
|-------|------|-------------|
| `postId` | Id<"posts"> | Reference to post |
| `userId` | string | User who liked |
| `createdAt` | number | Like timestamp |

### `follows`
| Field | Type | Description |
|-------|------|-------------|
| `followerId` | Id<"users"> | The user who follows |
| `followingId` | Id<"users"> | The user being followed |
| `createdAt` | number | Follow timestamp |

### `dailyStats`
| Field | Type | Description |
|-------|------|-------------|
| `postId` | Id<"posts"> | Reference to post |
| `date` | string | Date string (`YYYY-MM-DD`) |
| `views` | number | Views on that day |

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub.
2. Import the repository on [Vercel](https://vercel.com/new).
3. Add all environment variables from `.env.local` in the Vercel dashboard under **Settings → Environment Variables**.
4. Deploy — Vercel automatically detects Next.js and configures the build.

### Deploy Convex Backend

```bash
npx convex deploy
```

This deploys all Convex functions and schema to your production Convex deployment. Make sure `CONVEX_DEPLOYMENT` is set to your production deployment before running.

> 💡 For more details, see the [Convex deployment docs](https://docs.convex.dev/production) and [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying).

---

## 🤝 Contributing

Contributions are welcome! To get started:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit: `git commit -m "feat: add your feature"`
4. Push to your fork: `git push origin feature/your-feature-name`
5. Open a Pull Request

Please make sure your code follows the existing code style and that ESLint passes before submitting a PR:

```bash
npm run lint
```

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">
  <p>Built with ❤️ using Next.js, Convex, Clerk, and Google Gemini AI</p>
</div>
