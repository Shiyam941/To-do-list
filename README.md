# 📝 MERN Stack Todo App with REST API

A fully functional **full-stack To-Do List App** built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js).  
This app demonstrates CRUD operations with a modern, responsive UI and REST API integration.

---

## 🧩 Tech Stack

### 🔹 Front-End
- React.js
- Bootstrap (via react-bootstrap)

### 🔹 Back-End
- Node.js
- Express.js
- MongoDB (Local using MongoDB Compass)
- Mongoose ODM
- express-validator for input validation

---

## ⚙️ REST API Endpoints

| Method | Endpoint             | Description             |
|--------|----------------------|-------------------------|
| GET    | `/get`               | Get all todos           |
| GET    | `/get/:id`           | Get a todo by ID        |
| POST   | `/post`              | Add a new todo          |
| DELETE | `/delete/:id`        | Delete a todo by ID     |
| PUT    | `/put/:id`           | Toggle status (Done)    |

---

## 📸 Screenshots

> Add the following screenshots to a `screenshots/` folder in your repo:

### 🔹 Project Setup (VS Code)
![VS Code](./screenshots/Screenshot%202025-06-27%20191011.png)

### 🔹 Backend Running
![Backend Running](./screenshots/Screenshot%202025-06-27%20191045.png)

### 🔹 MongoDB Compass View
![MongoDB Compass](./screenshots/Screenshot%202025-06-27%20191238.png)

### 🔹 Final App UI
![App UI](./screenshots/Screenshot%202025-06-27%20191257.png)

---

## 🛠️ Getting Started

### 🔧 Requirements
- Node.js and npm
- MongoDB installed locally
- VS Code (recommended)

### 🚀 Installation

```bash


# Install backend packages
npm install

# Start MongoDB locally and run backend
node app.js

# Open another terminal for frontend
cd client
npm install
npm start
