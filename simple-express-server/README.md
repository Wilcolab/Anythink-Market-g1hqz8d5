# Express.js Task Management Server

A REST API for managing tasks, built with Express.js. This server was migrated from Python FastAPI to Node.js for better performance and ecosystem integration.

## Project Structure

```
simple-express-server/
├── src/
│   └── server.js          # Main application with all endpoints
├── Dockerfile             # Container configuration
├── .dockerignore           # Docker build ignore patterns
├── package.json           # npm/yarn configuration and dependencies
├── nodemon.json           # Hot-reload configuration for development
└── README.md              # This file
```

## Features

✅ RESTful API for task management  
✅ Input validation and error handling  
✅ Hot-reload with Nodemon (development)  
✅ Docker support for containerization  
✅ Comprehensive JSDoc comments for IDE and Copilot Chat support  
✅ In-memory task storage

## API Endpoints

### 1. Health Check
**GET** `/`

Verifies the server is running.

```bash
curl http://localhost:8001/
# Response: "Hello World"
```

### 2. Get All Tasks
**GET** `/tasks`

Retrieves the complete list of all tasks.

```bash
curl http://localhost:8001/tasks

# Response:
{
  "tasks": [
    "Write a diary entry from the future",
    "Create a time machine from a cardboard box",
    "Plan a trip to the dinosaurs",
    "Draw a futuristic city",
    "List items to bring on a time-travel adventure"
  ]
}
```

### 3. Create a New Task
**POST** `/tasks`

Adds a new task to the list.

```bash
curl -X POST http://localhost:8001/tasks \
  -H "Content-Type: application/json" \
  -d '{"text": "Learn Node.js"}'

# Response (success):
{ "message": "Task added successfully" }

# Error response (400) - missing text:
{ "error": "Task text is required" }
```

## Setup Instructions

### Prerequisites
- Node.js 14+ (or Docker)
- yarn or npm

### Local Development

1. **Install dependencies:**
   ```bash
   yarn install
   # or: npm install
   ```

2. **Start the development server:**
   ```bash
   yarn start
   # or: npm start
   ```
   
   The server will start on `http://localhost:8001` with hot-reload enabled.

3. **Test the endpoints:**
   ```bash
   curl http://localhost:8001/tasks
   ```

### Docker

1. **Build the image:**
   ```bash
   docker build -t express-task-server .
   ```

2. **Run the container:**
   ```bash
   docker run -p 8001:8001 express-task-server
   ```

3. **Or use Docker Compose** (from project root):
   ```bash
   docker compose up express-server
   ```

## Using with GitHub Copilot Chat

This project includes detailed JSDoc comments to provide rich context for Copilot Chat. 

### Tips for Effective Copilot Chat Interactions:

1. **Provide Code Snippets:** Include relevant sections when asking questions
   ```
   "In the POST /tasks endpoint, how should I add..."
   ```

2. **Be Specific:** Describe what you're trying to achieve
   ```
   "How can I add a DELETE endpoint to remove tasks by ID?"
   ```

3. **Reference the Existing Code:** Point to specific patterns
   ```
   "Following the same validation pattern as POST /tasks, 
    how would I add input sanitization?"
   ```

4. **Include Context:** Mention this is a migrated project
   ```
   "This server was migrated from Python FastAPI. 
    How should I add database persistence?"
   ```

### Example Copilot Chat Questions

- "Based on the current JSDoc structure, how should I add a PUT endpoint to update tasks?"
- "What's the best middleware to add for request logging?"
- "How can I add rate limiting to the POST /tasks endpoint?"
- "What database should I use and how would I integrate it?"

## Code Quality & Documentation

All endpoints include:
- ✅ JSDoc comments with parameter documentation
- ✅ Example request/response patterns
- ✅ Error handling documentation
- ✅ Inline comments explaining logic
- ✅ Input validation descriptions

This documentation helps both developers and AI assistants (like GitHub Copilot) understand the code faster and provide better suggestions.

## Migration Notes

**Original Python (FastAPI):**
```python
@app.post("/tasks")
def add_task(task: Task):
    tasks.append(task.text)
    return {"message": "Task added successfully"}
```

**Node.js (Express):**
```javascript
app.post("/tasks", (req, res) => {
    const { text } = req.body;
    if (!text) {
        return res.status(400).json({ error: "Task text is required" });
    }
    tasks.push(text);
    res.json({ message: "Task added successfully" });
});
```

Improvements:
- Explicit input validation
- HTTP status codes for errors
- Comprehensive documentation
- Better error messages

## Future Enhancements

- [ ] Database persistence (MongoDB/PostgreSQL)
- [ ] Authentication and authorization
- [ ] Task filtering, sorting, and pagination
- [ ] Task completion status tracking
- [ ] Timestamps and metadata
- [ ] API rate limiting
- [ ] Request logging and monitoring
- [ ] Unit and integration tests

## Troubleshooting

**Server won't start:**
```bash
# Check if port 8001 is in use
lsof -i :8001

# Kill the process if needed
kill -9 <PID>
```

**Nodemon not reloading:**
```bash
# Reinstall dependencies
rm -rf node_modules
yarn install
yarn start
```

**Docker build fails:**
```bash
# Clear Docker cache and rebuild
docker system prune
docker compose down
docker compose up --build
```

## Contributing

When adding new features:
1. Add comprehensive JSDoc comments
2. Include example request/response patterns
3. Handle errors with appropriate HTTP status codes
4. Update this README with endpoint documentation

## License

ISC

---

Built as part of the Anythink Market project migration from Python to Node.js.