# HypeCoding

A full-stack platform for coding practice and problem solving, featuring:

HypeCoding is an interactive web application designed to help users improve their coding skills through hands-on problem solving. Inspired by platforms like LeetCode, it allows users to browse a curated set of coding challenges, write and execute code directly in the browser, and receive instant feedback powered by AI. The platform supports multiple programming languages, tracks user progress, and provides a seamless experience for both learners and administrators. Whether you're preparing for technical interviews or just want to sharpen your algorithmic thinking, HypeCoding offers a modern, collaborative environment to practice and grow.

- **Problem creation** with rich descriptions, examples, hints, constraints, tags, and multi-language code snippets (JS, Python, Java, C, C++)
- **In-browser code execution** via Judge0 API
- **User authentication** (email/password + Google OAuth) with JWT-based sessions & secure cookies
- **Submission tracking** with automated feedback powered by Gemini LLM
- **Admin panel** for managing problems and users

---

## 📦 Tech Stack

- **Backend**: Node.js (Express), Prisma ORM, PostgreSQL (Neon), Docker
- **Frontend**: React, React Router, React Query, Monaco Editor, Tailwind CSS
- **Code Execution**: Judge0 API (batch submissions)
- **AI Feedback**: Gemini 2.0 via custom prompt
- **Deployment**: Render (backend), Vercel (frontend)

---

## 🚀 Getting Started

### Prerequisites

- Node.js & npm
- Docker & Docker Compose (for local Judge0 if needed)
- A PostgreSQL database (or Neon)
- .env file with:
