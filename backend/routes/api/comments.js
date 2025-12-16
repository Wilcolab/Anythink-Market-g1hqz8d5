/**
 * Express router for handling comment-related API endpoints
 * 
 * @module routes/api/comments
 * @requires express
 * @requires mongoose
 * 
 * @description Provides CRUD operations for comments:
 * - GET /:id - Retrieve a single comment by ID with populated user data
 * - POST / - Create a new comment
 * - PUT /:id - Update an existing comment by ID
 * - DELETE /:id - Delete a comment by ID
 * 
 * @returns {Object} Express router object
 * 
 * @example
 * // Usage in main app
 * const commentRoutes = require('./routes/api/comments');
 * app.use('/api/comments', commentRoutes);
 */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;
// Hey GitHub Copilot, I need help with my code. Can you please provide a solution to the problem I'm facing?

router.get("/:id", async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.id).populate("user");
        res.json(comment);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch comment" });
    }
});

router.post("/", async (req, res) => {
    try {
        const comment = new Comment(req.body);
        await comment.save();
        res.status(201).json(comment);
    } catch (err) {
        res.status(500).json({ error: "Failed to create comment" });
    }
});

router.put("/:id", async (req, res) => {
    try {
        const updatedComment = await Comment.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate("user");
        res.json(updatedComment);
    } catch (err) {
        res.status(500).json({ error: "Failed to update comment" });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        await Comment.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: "Failed to delete comment" });
    }
});

module.exports = router;