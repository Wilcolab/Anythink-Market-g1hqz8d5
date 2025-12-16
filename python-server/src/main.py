"""
FastAPI Task Management Server

This is the original Python implementation of the Task Management API.
It provides RESTful endpoints for managing a task list.

Note: This server is being migrated to Node.js Express for better performance
and to consolidate the stack around JavaScript/Node.js.

Dependencies:
    - fastapi: Web framework
    - pydantic: Data validation
    - uvicorn: ASGI server
"""

from fastapi import FastAPI
from pydantic import BaseModel

# Initialize FastAPI application
app = FastAPI()


class Task(BaseModel):
    """
    Task model for request validation.
    
    Attributes:
        text (str): The task description or content
    """
    text: str


# In-memory task storage
# Contains creative tasks for future thinking and planning
# In production, this would be connected to a database
tasks = [
    "Write a diary entry from the future",
    "Create a time machine from a cardboard box",
    "Plan a trip to the dinosaurs",
    "Draw a futuristic city",
    "List items to bring on a time-travel adventure"
]


@app.get("/")
def get_tasks():
    """
    Health check endpoint.
    
    Returns a simple "Hello World" message to verify the server is running.
    Useful for load balancers and health checks.
    
    Returns:
        str: "Hello World"
    """
    return "Hello World"


@app.post("/tasks")
def add_task(task: Task):
    """
    Create and add a new task.
    
    Adds a new task to the in-memory task list. The task text is validated
    by the Pydantic Task model before processing.
    
    Args:
        task (Task): The task object containing the text field
        
    Returns:
        dict: A confirmation message
        Example: {"message": "Task added successfully"}
    """
    tasks.append(task.text)
    return {"message": "Task added successfully"}


@app.get("/tasks")
def get_all_tasks():
    """
    Retrieve all tasks.
    
    Returns the complete list of all tasks currently stored in the system.
    This is the main read endpoint for retrieving task information.
    
    Returns:
        dict: Object containing tasks array
        Example: {"tasks": ["task1", "task2", "task3"]}
    """
    return {"tasks": tasks}
