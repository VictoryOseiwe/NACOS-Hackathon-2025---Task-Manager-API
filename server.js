import express from "express";
import taskRouter from "./taskRouter.js";

// Create an Express application instance.
const app = express();

// Use the port specified in environment variables for the server.
const PORT = process.env.PORT;

// Middleware to parse incoming JSON requests.
// This allows the server to handle JSON payloads in request bodies.
app.use(express.json());

// Mount the taskRouter on the '/api' path.
// All task-related routes will be prefixed with '/api'.
app.use("/api", taskRouter);

// Start the server and listen on the specified port.
// Logs a message to the console when the server is running.
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
