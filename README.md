# Slice of Heaven 🍕

**Slice of Heaven** is a full-stack pizza shop application built with **MySQL, Express.js, React and Node.js**. Users can sign up, browse a range of pizzas, manage their cart, place orders and view their order history.

[![Live demo](https://img.shields.io/badge/demo-live-brightgreen?logo=vercel)](https://slice-of-heaven-delta.vercel.app)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)
![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-2-764ABC?logo=redux&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5-7952B3?logo=bootstrap&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?logo=nodedotjs&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-database-4479A1?logo=mysql&logoColor=white)
![JWT](https://img.shields.io/badge/auth-JWT-000000?logo=jsonwebtokens)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

**Live demo:** https://slice-of-heaven-delta.vercel.app

## Features

- Sign up and sign in with JWT-based authentication (passwords are stored as SHA-256 hashes).
- Browse the pizza menu.
- Cart management: add items, change quantities and remove items (Redux Toolkit).
- Place orders and view past orders with their details.
- Toast notifications and a responsive Bootstrap layout.

## Tech stack

- **Frontend**: React 18, Redux Toolkit, React Router, React Bootstrap / Bootstrap 5, Sass, Axios, React Toastify
- **Backend**: Node.js, Express.js, mysql2, jsonwebtoken, crypto-js
- **Database**: MySQL

## Getting started

### Prerequisites

- Node.js
- A MySQL server, either running locally or remote

### 1. Clone the repository

```bash
git clone https://github.com/sharky412/Slice-Of-Heaven.git
cd Slice-Of-Heaven
```

### 2. Set up the database

Run `Backend/db.sql` against your MySQL server. It creates the `pizza_shop` tables and seed data. Then copy `Backend/.env.example` to `Backend/.env` and fill in your MySQL connection details (`DB_HOST`, `DB_USER`, `DB_PASSWORD`, `DB_NAME`) and a `JWT_SECRET` for signing login tokens.

### 3. Start the backend (port 4000)

```bash
cd Backend
npm install
node server.js
```

### 4. Start the frontend

```bash
cd ../frontend
npm install
npm start
```

Then open http://localhost:3000. The frontend calls the API at `http://localhost:4000`, which is set in `frontend/src/config.js`.

## API overview

| Method | Endpoint             | Description                    |
| ------ | -------------------- | ------------------------------ |
| POST   | `/user/signup`       | Register a new user            |
| POST   | `/user/signin`       | Sign in and receive a JWT      |
| GET    | `/pizza`             | List pizzas                    |
| GET    | `/order`             | List the current user's orders |
| GET    | `/order/details/:id` | Get the details of an order    |
| POST   | `/order`             | Place an order                 |

All routes except sign-up and sign-in require a `token` header.

## Project structure

```
Backend/
├── server.js     # Express app, JWT middleware, routes
├── db.js         # MySQL connection pool
├── db.sql        # Schema + seed data
├── routes/       # users, pizza, orders
└── images/       # Pizza images served statically
frontend/
└── src/
    ├── pages/        # Signin, Signup, Home, Cart, Orders
    ├── components/   # Navbar
    ├── features/     # Redux cart slice
    └── services/     # API clients
```

## License

Released under the [MIT License](LICENSE).
