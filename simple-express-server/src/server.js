/**
 * Express.js Task Management Server
 * 
 * This server provides REST API endpoints for managing a task list.
 * It migrated from a Python FastAPI server to Node.js Express for better
 * performance and Node.js ecosystem integration.
 * 
 * @module server
 * @requires express
 */

const express = require('express');

// Initialize Express application
const app = express();
const PORT = 8001;

// Middleware: Parse incoming JSON request bodies
app.use(express.json());

/**
 * In-memory task storage
 * Contains a list of creative tasks for future thinking and planning activities.
 * In production, this would be connected to a database.
 * 
 * @type {Array<string>}
 */
let tasks = [
    "Write a diary entry from the future",
    "Create a time machine from a cardboard box",
    "Plan a trip to the dinosaurs",
    "Draw a futuristic city",
    "List items to bring on a time-travel adventure"
];

/**
 * GET / - Health Check Endpoint
 * 
 * Returns a simple "Hello World" message to verify the server is running.
 * Useful for load balancers and health checks.
 * 
 * @route GET /
 * @returns {string} "Hello World"
 * @example
 * // Response: "Hello World"
 */
app.get("/", (req, res) => {
    res.json("Hello World");
});

/**
 * POST /tasks - Add a New Task
 * 
 * Creates and adds a new task to the task list.
 * Validates that the task text is provided in the request body.
 * 
 * @route POST /tasks
 * @param {Object} req - Express request object
 * @param {Object} req.body - Request body
 * @param {string} req.body.text - The task description (required, non-empty)
 * @param {Object} res - Express response object
 * @returns {Object} Success message or error
 * @returns {string} returns.message - Confirmation message on success
 * @returns {string} returns.error - Error message if validation fails
 * 
 * @example
 * // Request body:
 * { "text": "Learn Node.js" }
 * 
 * // Response (success):
 * { "message": "Task added successfully" }
 * 
 * // Response (error):
 * { "error": "Task text is required" }
 */
app.post("/tasks", (req, res) => {
    const { text } = req.body;
    
    // Validate that task text is provided
    if (!text) {
        return res.status(400).json({ error: "Task text is required" });
    }
    
    // Add task to in-memory array
    tasks.push(text);
    res.json({ message: "Task added successfully" });
});

/**
 * GET /tasks - Retrieve All Tasks
 * 
 * Returns the complete list of all tasks currently stored in the system.
 * This is the main read endpoint for retrieving task information.
 * 
 * @route GET /tasks
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Object} Object containing tasks array
 * @returns {Array<string>} returns.tasks - Array of all task strings
 * 
 * @example
 * // Response:
 * {
 *   "tasks": [
 *     "Write a diary entry from the future",
 *     "Create a time machine from a cardboard box",
 *     "Plan a trip to the dinosaurs",
 *     "Draw a futuristic city",
 *     "List items to bring on a time-travel adventure"
 *   ]
 * }
 */
app.get("/tasks", (req, res) => {
    res.json({ tasks });
});

/**
 * Start the Express server
 * 
 * Listens on the specified PORT for incoming HTTP requests.
 * Logs a message indicating the server has started successfully.
 */
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});