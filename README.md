# Anythink Market - Task Management API

A dual-stack task management API featuring both Python FastAPI and Node.js Express servers. This project demonstrates modern microservices architecture with Docker containerization.

## 🎯 Project Overview

This project contains two identical task management servers implemented in different technologies:

1. **Python Server** - FastAPI on port 8000
2. **Node.js Server** - Express.js on port 8001

Both servers provide the same REST API endpoints for managing tasks. This allows for comparison, testing, and gradual migration between technology stacks.

## 📁 Project Structure

```
Anythink-Market-g1hqz8d5/
├── python-server/                 # Python FastAPI implementation
│   ├── src/
│   │   ├── main.py               # FastAPI application with endpoints
│   │   └── __init__.py
│   ├── Dockerfile                # Container configuration
│   ├── requirements.txt           # Python dependencies
│   └── README.md
│
├── simple-express-server/         # Node.js Express implementation  
│   ├── src/
│   │   └── server.js             # Express application with endpoints
│   ├── Dockerfile                # Container configuration
│   ├── package.json              # npm dependencies
│   ├── nodemon.json              # Development hot-reload config
│   └── README.md
│
├── docker-compose.yml            # Multi-container orchestration
└── README.md                      # This file
```

## 🚀 Quick Start

### Prerequisites
- Docker & Docker Compose
- OR Node.js 14+ & Python 3.9+ (for local development)

### Option 1: Run with Docker Compose (Recommended)

Start both servers:
```bash
docker compose up --build
```

This will start:
- Python FastAPI server on `http://localhost:8000`
- Node.js Express server on `http://localhost:8001`

### Option 2: Run Servers Individually

**Python Server:**
```bash
cd python-server
pip install -r requirements.txt
uvicorn src.main:app --reload --port 8000
```

**Node.js Server:**
```bash
cd simple-express-server
npm install
npm start
```

## 📡 API Endpoints

Both servers provide identical endpoints:

### 1. Health Check
```
GET /
Response: "Hello World"
```

### 2. Get All Tasks
```
GET /tasks
Response:
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
```
POST /tasks
Content-Type: application/json

Request Body:
{"text": "Your new task here"}

Response:
{"message": "Task added successfully"}

Error Response (if text is missing):
{"error": "Task text is required"} (400)
```

## 🧪 Testing the API

### Using cURL

```bash
# Get all tasks
curl http://localhost:8001/tasks

# Add a new task
curl -X POST http://localhost:8001/tasks \
  -H "Content-Type: application/json" \
  -d '{"text":"Learn Node.js"}'

# Health check
curl http://localhost:8001/
```

### Using VS Code REST Client

Create `.http` file with:
```http
### Get tasks from Node server
GET http://localhost:8001/tasks

### Get tasks from Python server
GET http://localhost:8000/tasks

### Add task to Node server
POST http://localhost:8001/tasks
Content-Type: application/json

{"text": "New task"}
```

## 💡 Using with GitHub Copilot Chat

This project is structured to provide optimal context for GitHub Copilot Chat interactions.

### Best Practices

1. **Include Code Context**
   - When asking Copilot questions, reference specific endpoints or code sections
   - Example: "Looking at the POST /tasks endpoint in server.js, how would I add..."

2. **Be Specific About Your Goal**
   ```
   Good: "How can I add a DELETE endpoint to remove tasks by ID?"
   Vague: "How do I add an endpoint?"
   ```

3. **Reference the Project Structure**
   ```
   "In this dual-stack project with Python and Node.js servers, 
    how should I add database persistence that works with both?"
   ```

4. **Point to Patterns in the Code**
   ```
   "Following the same JSDoc pattern as the other endpoints in server.js,
    how would I document a new PUT endpoint?"
   ```

### Example Copilot Chat Prompts

- "Based on the current input validation pattern, how should I add sanitization?"
- "What's the best way to add logging middleware to the Express server?"
- "How can I refactor this to use TypeScript while maintaining compatibility?"
- "What testing framework would you recommend for this Express server?"
- "How should I add database persistence to both Python and Node servers?"

### Why This Matters

The code includes:
- ✅ Detailed JSDoc comments explaining parameters and return values
- ✅ Example request/response patterns
- ✅ Clear separation of concerns
- ✅ Comprehensive docstrings (Python) and JSDoc (JavaScript)
- ✅ Error handling documentation
- ✅ Inline comments explaining complex logic

This rich context helps Copilot provide:
- More accurate suggestions
- Code that matches your project's patterns
- Better understanding of trade-offs
- Relevant alternatives and best practices

## 🔄 Technology Comparison

| Feature | Python (FastAPI) | Node.js (Express) |
|---------|------------------|-------------------|
| Framework | FastAPI | Express.js |
| Port | 8000 | 8001 |
| Validation | Pydantic models | Manual + JSDoc |
| Development | python -m uvicorn | nodemon |
| Container | python:3.9-slim | node:14 |
| Startup Time | ~1.5s | ~0.5s |

## 📚 Documentation

- [Python Server README](./python-server/README.md) - Detailed FastAPI documentation
- [Node.js Server README](./simple-express-server/README.md) - Detailed Express documentation

## 🛠️ Development Workflow

### Making Changes

1. **For Python Server:**
   - Edit `python-server/src/main.py`
   - Server auto-reloads with uvicorn `--reload`

2. **For Node.js Server:**
   - Edit `simple-express-server/src/server.js`
   - Server auto-reloads with nodemon

### Adding New Endpoints

When adding endpoints:
1. Add comprehensive JSDoc (JavaScript) or docstrings (Python)
2. Include parameter and return type documentation
3. Add example request/response patterns
4. Update the relevant README
5. Test with both curl and VS Code REST Client

## 📝 Migration Notes

The Node.js implementation was created as a direct port of the Python FastAPI server with enhancements:

**Original Python:**
```python
@app.post("/tasks")
def add_task(task: Task):
    tasks.append(task.text)
    return {"message": "Task added successfully"}
```

**Node.js Version:**
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

**Key Improvements:**
- Explicit input validation (error handling)
- HTTP status codes for errors
- Comprehensive JSDoc documentation
- Clearer error messages

## 🚀 Future Enhancements

- [ ] Database persistence (MongoDB/PostgreSQL)
- [ ] Authentication & authorization (JWT)
- [ ] API rate limiting
- [ ] Request logging and monitoring
- [ ] Task filtering and sorting
- [ ] Task completion status tracking
- [ ] Timestamps and metadata
- [ ] Unit and integration tests
- [ ] API versioning
- [ ] GraphQL alternative endpoints
- [ ] OpenAPI/Swagger documentation
- [ ] Load balancing between servers

## 🐛 Troubleshooting

### Ports Already in Use
```bash
# Find process using port 8001
lsof -i :8001

# Kill the process
kill -9 <PID>
```

### Docker Issues
```bash
# Clean up old containers and images
docker compose down
docker system prune -a

# Rebuild and restart
docker compose up --build
```

### Nodemon Not Reloading
```bash
# Reinstall dependencies
cd simple-express-server
rm -rf node_modules
npm install
npm start
```

## 📄 License

ISC

## 👥 Contributing

When contributing:
1. Maintain documentation parity between Python and Node implementations
2. Add JSDoc/docstring comments for new endpoints
3. Include example usage in comments
4. Update this README if adding significant features
5. Follow the existing code style and patterns

---

**Built as part of the Anythink Market project** - Demonstrating full-stack JavaScript/Node.js adoption with legacy Python support.

- The FastAPI server should now be running. You can access at port `8000`.

## API Routes

The FastAPI server provides the following API routes:

- `POST /tasks`: Adds a task to the task list. The request body should contain the task details.

- `GET /tasks`: Retrieves the task list.
