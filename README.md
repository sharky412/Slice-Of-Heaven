```markdown
# Pizza Shop - MERN Stack Project

Welcome to the Pizza Shop, a MERN stack application showcasing an online pizza ordering platform. This project uses **MySQL** as the database for managing data efficiently.

---

## Features

- Browse a variety of pizzas with detailed descriptions and pricing.
- Add pizzas to the cart.
- Place orders with ease.
- View past orders.
- User authentication with login/logout functionality.
- Responsive design for seamless use on all devices.

---

## Tech Stack

### Frontend
- **React**: For building a dynamic user interface.
- **Bootstrap**: For responsive design and styling.

### Backend
- **Node.js**: For server-side logic.
- **Express.js**: For handling API endpoints.

### Database
- **MySQL**: For data storage and management.

---

## Prerequisites

Ensure the following tools are installed on your system:
- **Node.js** (v14+)
- **MySQL** (v5.7+)
- **Yarn** (or npm)

---

## Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/pizza-shop.git
   cd pizza-shop
   ```

2. **Backend Setup**
   - Navigate to the `server` directory:
     ```bash
     cd server
     ```
   - Install dependencies:
     ```bash
     yarn install
     ```
   - Configure database connection in `.env`:
     ```env
     DB_HOST=localhost
     DB_USER=your_mysql_user
     DB_PASSWORD=your_mysql_password
     DB_NAME=pizza_shop
     ```
   - Run migrations to set up the database:
     ```bash
     yarn migrate
     ```
   - Start the backend server:
     ```bash
     yarn start
     ```

3. **Frontend Setup**
   - Navigate to the `client` directory:
     ```bash
     cd ../client
     ```
   - Install dependencies:
     ```bash
     yarn install
     ```
   - Start the development server:
     ```bash
     yarn start
     ```

4. **Access the Application**
   - Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

### Backend (`/server`)
- **Routes**: Define API endpoints.
- **Controllers**: Handle business logic for API requests.
- **Models**: MySQL table schema using Sequelize ORM.
- **Middleware**: Authentication and error handling.

### Frontend (`/client`)
- **Components**: Reusable React components (e.g., Navbar, Pizza Card, etc.).
- **Pages**: Main views (e.g., Home, Cart, Orders).
- **Services**: API calls using Axios.
- **Styling**: Bootstrap classes for responsive design.

---

## Environment Variables

Create a `.env` file in the `server` directory with the following variables:

```env
PORT=5000
DB_HOST=localhost
DB_USER=your_mysql_user
DB_PASSWORD=your_mysql_password
DB_NAME=pizza_shop
JWT_SECRET=your_jwt_secret
CORS_ORIGIN=http://localhost:3000
```

---

## Scripts

### Backend (Run in `/server` directory)
- `yarn start`: Starts the backend server.
- `yarn migrate`: Sets up the database schema.

### Frontend (Run in `/client` directory)
- `yarn start`: Starts the React development server.

---

## Future Enhancements

- Add a payment gateway integration.
- Include user registration functionality.
- Implement order tracking in real-time.
- Add admin features for managing pizzas and orders.

---

## License

This project is licensed under the MIT License. Feel free to use and modify it as needed.
```
