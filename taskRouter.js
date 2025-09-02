import express from "express";
import { addTask, getTasks, updateTask, deleteTask } from "./taskController.js";
import authenticate from "./authMiddleware.js";

// Create a new router instance for handling task-related routes.
const taskRouter = express.Router();

// Route to add a new task.
// Uses authentication middleware to protect the endpoint.
// Calls the addTask controller to handle the request.
taskRouter.post("/addTask", authenticate, addTask);

// Route to retrieve all tasks.
// Uses authentication middleware to protect the endpoint.
// Calls the getTasks controller to handle the request.
taskRouter.get("/getTasks", authenticate, getTasks);

// Route to update an existing task.
// Uses authentication middleware to protect the endpoint.
// Calls the updateTask controller to handle the request.
taskRouter.put("/updateTask/:id", authenticate, updateTask);

// Route to delete a task.
// Uses authentication middleware to protect the endpoint.
// Calls the deleteTask controller to handle the request.
taskRouter.delete("/deleteTask/:id", authenticate, deleteTask);

export default taskRouter;
