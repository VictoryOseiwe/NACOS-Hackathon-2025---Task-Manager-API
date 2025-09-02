// In-memory storage for tasks. This array holds all task objects created during runtime.
// Note: Data will be lost when the server restarts. For persistent storage, use a database.
let memory = [];
let counter = 1; // Counter to assign unique IDs to each task.

const status = ["pending", "Done"]; // Allowed status values for tasks.

// Controller to add a new task.
// Expects 'task' and optionally 'status' in the request body.
// Responds with the created task object.
export const addTask = (req, res) => {
  // Validate and set task status. If not provided or invalid, default to 'pending'.
  let taskStatus = req.body.status;
  if (!status.includes(taskStatus)) {
    taskStatus = "pending";
  }

  const newTask = {
    id: counter++, // Assign a unique ID and increment the counter.
    task: req.body.task,
    status: taskStatus, // Default status is 'pending' if not provided.
  };

  memory.push(newTask); // Store the new task in memory.

  res.status(201).json(newTask); // Respond with the created task.
};

// Controller to retrieve all tasks.
// Responds with an array of all task objects.
export const getTasks = (req, res) => {
  res.status(200).json(memory);
};

// Controller to update an existing task by ID.
// Expects updated fields in the request body.
// Responds with the updated task object or a 404 error if not found.
export const updateTask = (req, res) => {
  const taskId = parseInt(req.params.id);
  const taskIndex = memory.findIndex((task) => task.id === taskId);
  if (taskIndex !== -1) {
    // Merge existing task with new data from request body.
    memory[taskIndex] = { ...memory[taskIndex], ...req.body };
    res.status(200).json(memory[taskIndex]);
  } else {
    res.status(404).json({ message: "Task not found" });
  }
};

// Controller to delete a task by ID.
// Responds with the deleted task object or a 404 error if not found.
export const deleteTask = (req, res) => {
  const taskId = parseInt(req.params.id);
  const taskIndex = memory.findIndex((task) => task.id === taskId);
  if (taskIndex !== -1) {
    const deletedTask = memory.splice(taskIndex, 1); // Remove task from memory.
    res.status(200).json(deletedTask[0]);
  } else {
    res.status(404).json({ message: "Task not found" });
  }
};
