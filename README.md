# Belajar Vibe Coding — Backend API

Backend API project menggunakan **Bun** + **ElysiaJS** + **Drizzle ORM** + **MySQL**.

## Tech Stack

- **Runtime:** [Bun](https://bun.sh)
- **Framework:** [ElysiaJS](https://elysiajs.com)
- **ORM:** [Drizzle ORM](https://orm.drizzle.team)
- **Database:** MySQL

## Prerequisites

- [Bun](https://bun.sh) >= 1.0
- MySQL Server

## Getting Started

### 1. Install Dependencies

```bash
bun install
```

### 2. Setup Environment Variables

Copy file `.env.example` menjadi `.env` dan sesuaikan konfigurasi database:

```bash
cp .env.example .env
```

Isi file `.env`:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=belajar_vibe_coding
PORT=3000
```

### 3. Buat Database

Pastikan database MySQL sudah dibuat sesuai dengan `DB_NAME` di `.env`:

```sql
CREATE DATABASE belajar_vibe_coding;
```

### 4. Generate & Jalankan Migration

```bash
# Generate migration files dari schema
bun run db:generate

# Jalankan migration ke database
bun run db:migrate
```

### 5. Jalankan Server

```bash
bun run dev
```

Server akan berjalan di `http://localhost:3000` (atau port yang diset di `.env`).

## API Endpoints

| Method | Endpoint      | Deskripsi              |
| ------ | ------------- | ---------------------- |
| GET    | `/`           | Health check           |
| GET    | `/users`      | List semua users       |
| GET    | `/users/:id`  | Get user by ID         |
| POST   | `/users`      | Create user baru       |
| PUT    | `/users/:id`  | Update user by ID      |
| DELETE | `/users/:id`  | Delete user by ID      |

### Contoh Request

**Create User:**

```bash
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{"name": "John Doe", "email": "john@example.com"}'
```

**Get All Users:**

```bash
curl http://localhost:3000/users
```

## Scripts

| Script          | Deskripsi                                  |
| --------------- | ------------------------------------------ |
| `bun run dev`          | Jalankan server dengan hot reload   |
| `bun run db:generate`  | Generate migration dari schema      |
| `bun run db:migrate`   | Jalankan migration ke database      |

## Struktur Folder

```
src/
  index.ts          # Entry point aplikasi
  routes/           # Route handlers
    users.ts        # CRUD routes untuk users
  db/               # Database config & schema
    schema.ts       # Drizzle schema definitions
    index.ts        # Database connection & drizzle instance
  config/           # Environment & app config
    index.ts        # Configuration loader
drizzle.config.ts   # Drizzle Kit config (untuk migration)
.env                # Environment variables (tidak di-commit)
.env.example        # Template environment variables
```
