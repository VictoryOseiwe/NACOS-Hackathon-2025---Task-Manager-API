# 📝 NACOS Hackathon 2025 - Task Manager API

This is a simple RESTful API for a task manager, built for the NACOS Hackathon 2025. It allows users to perform standard CRUD (Create, Read, Update, Delete) operations on tasks. The API uses in-memory storage and a simple token-based authentication system.

---

## 🚀 **Getting Started**

### **Prerequisites**

- Node.js installed on your machine.
- A package manager like npm.

### **Installation**

1. Clone the repository:

   ```bash
   git clone https://github.com/VictoryOseiwe/NACOS-Hackathon-2025---Task-Manager-API.git
   cd NACOS-Hackathon-2025---Task-Manager-API
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

### **Running the Application**

Create a `.env` file in the root directory and add the following environment variables:

```bash
PORT=3000
AUTH_TOKEN=your_secret_token
```

Then, start the server with the following command:

```bash
node index.js
npm run server
```

The server will be running at `http://localhost:3000`

---

## **API Endpoints**

All API endpoints are protected by a simple token authentication. The `AUTH_TOKEN` must be included in the `Authorization` header of every request in the format `Bearer <token>`.

### **Tasks**

| Method   | Endpoint          | Description                         |
| :------- | :---------------- | :---------------------------------- |
| `GET`    | `/getTasks`       | Retrieves all tasks.                |
| `POST`   | `/addTask`        | Creates a new task.                 |
| `PUT`    | `/updateTask/:id` | Updates an existing task by its ID. |
| `DELETE` | `/deleteTask/:id` | Deletes a task by its ID.           |

### **Example Usage**

**Create a new task:**

`POST /addTask`

**Body:**

```json
{
  "title": "Start hackathon project",
  "status": "pending"
}
```

**Retrieve all tasks:**

`GET /getTasks`

**Response:**

```json
[
  {
    "id": 1,
    "title": "Start hackathon project",
    "status": "pending"
  }
]
```

---

## **📂 Project Structure**

- `index.js`: The main server file where the Express application is initialized.
- `taskRouter.js`: Defines all the API endpoints for tasks.
- `taskController.js`: Contains the business logic for handling task operations (CRUD).
- `auth.js`: Handles the simple token authentication logic.
