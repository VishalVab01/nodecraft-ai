# NodeCraft

NodeCraft is a real-time, AI-powered workspace for designing software systems. Describe an architecture in plain English, let an AI agent turn it into a diagram on a shared canvas, refine it with collaborators, and generate a downloadable Markdown technical specification.

## Highlights

- Create and manage architecture projects with authenticated access.
- Collaborate on a shared React Flow canvas with live cursors and presence.
- Start from curated system-design templates or generate a design from a prompt.
- Use AI background jobs to add nodes and connections to the live canvas.
- Turn the finished graph into a persisted Markdown technical specification.
- Preview and download generated specifications from the project workspace.

## Built With

- [Next.js](https://nextjs.org/) 16, [React](https://react.dev/), and [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) and [shadcn/ui](https://ui.shadcn.com/) for the interface
- [Clerk](https://clerk.com/) for authentication and protected routes
- [Liveblocks](https://liveblocks.io/) and [React Flow](https://reactflow.dev/) for real-time collaboration and diagrams
- [Prisma](https://www.prisma.io/) with PostgreSQL for project metadata
- [Trigger.dev](https://trigger.dev/) for durable AI workflows
- [Google Gemini](https://ai.google.dev/) for architecture and specification generation
- [Vercel Blob](https://vercel.com/docs/storage/vercel-blob) for canvas snapshots and generated specs

## Getting Started

### Prerequisites

- Node.js 20 or later
- npm
- A PostgreSQL database
- Accounts and API credentials for Clerk, Liveblocks, Trigger.dev, Google AI, and Vercel Blob

### Install

```bash
git clone https://github.com/VishalVab01/sysforge-ai.git
cd sysforge-ai
npm install
```

### Configure environment variables

Create a `.env.local` file in the repository root:

```env
# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# PostgreSQL / Prisma
DATABASE_URL=

# Liveblocks
LIVEBLOCKS_SECRET_KEY=

# Trigger.dev
TRIGGER_PROJECT_REF=
TRIGGER_SECRET_KEY=
NEXT_PUBLIC_TRIGGER_PUBLIC_API_KEY=

# Google AI
GOOGLE_AI_API_KEY=

# Vercel Blob
BLOB_READ_WRITE_TOKEN=
```

Never commit `.env.local` or real credentials.

### Run locally

Start the Next.js app:

```bash
npm run dev
```

In a second terminal, start the Trigger.dev worker so AI jobs can run locally:

```bash
npx trigger.dev@latest dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available Commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server. |
| `npm run build` | Create a production build. |
| `npm run start` | Run the production server. |
| `npm run lint` | Run ESLint. |
| `npx prisma generate` | Regenerate the Prisma client after schema changes. |
| `npx prisma migrate dev` | Create and apply a development database migration. |
| `npx trigger.dev@latest dev` | Run Trigger.dev workers locally. |

## Architecture at a Glance

```text
Browser
  ├─ Clerk                     Authentication and route protection
  ├─ Liveblocks + React Flow   Shared canvas, presence, and cursors
  └─ Next.js                   Projects, APIs, and editor UI
       ├─ PostgreSQL + Prisma   Project, collaborator, spec, and task metadata
       ├─ Vercel Blob           Canvas snapshots and Markdown artifacts
       └─ Trigger.dev + Gemini  Durable architecture and spec-generation jobs
```

## Project Structure

```text
app/              Routes, API handlers, and editor pages
components/       Editor composition and reusable UI
hooks/            Client-side editor and project hooks
lib/              Shared infrastructure and access-control helpers
prisma/           Prisma schema and database migrations
trigger/          Durable AI design and specification workflows
types/            Shared TypeScript contracts
```

## How It Works

1. Sign in and create a project.
2. Open its collaborative workspace and optionally load a starter design.
3. Ask the AI to create or extend an architecture on the canvas.
4. Collaborate on the resulting nodes and connections in real time.
5. Generate, preview, and download a Markdown technical specification.

## License

This repository is a personal project. All rights reserved unless a license is added to this repository.
