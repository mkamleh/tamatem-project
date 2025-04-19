# 🎮 Tamatem Project

A full-stack game management platform built with **Django (Backend)** and **Vite + React (Frontend)**. The app runs in isolated Docker containers for an easy and consistent development experience.

---

## 🚀 Getting Started

### 🔧 Prerequisites

- [Docker](https://www.docker.com/) installed
- [Git](https://git-scm.com/) installed

---

## 📦 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/mkamleh/tamatem-project.git
```

You should now see the following structure:

```bash
tamatem-project/
├── backend/
├── frontend/
└── docker-compose.yml
```

### 2. Start the App

```bash
docker-compose up
```

This command will:

1. Start the PostgreSQL database

2. Run backend migrations

3. Import product data from CSV

4. Create a default admin user

5. Serve both frontend and backend servers

## 🌐 Access the App

Frontend:

```bash
  http://localhost:5173/login
```

Backend:

```bash
  http://localhost:8000/
```

## 🔐 Default Admin Credentials

Username

```bash
    root
```

Password

```bash
    Tamatem123@
```

# ⚙️ Docker Configuration

## 🐘 PostgreSQL

Image: postgres

db: postgres

User: postgres

Password: password

Port: 5432

# 🧠 Backend (Django)

Build Path: ./backend

Port: 8000

# ⚛️ Frontend (React + Vite)

Build Path: ./frontend

Port: 5173

# 🔐 Why Cookie-Based Authentication?

We use secure, HTTP-only cookies for auth, which provides:

1. 🔒 Protection from XSS attacks (JavaScript can't read HTTP-only cookies)

2. 🔒 Automatic CSRF handling with Django's built-in protection

3. 🔒 No token storage needed in local/sessionStorage

4. 🔒 Backend has full control over session lifecycle

5. 🔒 The backend handles all session logic for enhanced security.

# 🎨 Why Chakra UI?

We chose Chakra UI for:

- ⚡️ Rapid development with accessible components

- 💡 Built-in dark mode support

- 🧩 Highly composable and customizable design system

- 📱 Responsive design out of the box

# 📄 License

This project is licensed under the MIT License.
