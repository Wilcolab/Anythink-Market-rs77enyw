/**
 * Express router for handling comment-related API endpoints.
 * Provides CRUD operations for comments in the Anythink Market application.
 * 
 * @module routes/api/comments
 * @requires express
 * @requires mongoose
 */

/**
 * GET /
 * Retrieves all comments from the database.
 * 
 * @async
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Promise<void>} JSON array of all comments or error message
 * @throws {Error} Returns 500 status if comment fetch fails
 */

/**
 * POST /
 * Creates a new comment with the provided text and author.
 * 
 * @async
 * @param {Object} req - Express request object
 * @param {string} req.body.text - The comment text content
 * @param {string} req.body.author - The comment author name
 * @param {Object} res - Express response object
 * @returns {Promise<void>} Created comment object with 201 status or error message
 * @throws {Error} Returns 400 if text or author is missing, 500 if creation fails
 */

/**
 * DELETE /:id
 * Deletes a comment by its ID.
 * 
 * @async
 * @param {Object} req - Express request object
 * @param {string} req.params.id - The comment ID to delete
 * @param {Object} res - Express response object
 * @returns {Promise<void>} Success message or error message
 * @throws {Error} Returns 404 if comment not found, 500 if deletion fails
 */

/**
 * PUT /:id
 * Updates a comment's text and author by its ID.
 * 
 * @async
 * @param {Object} req - Express request object
 * @param {string} req.params.id - The comment ID to update
 * @param {string} req.body.text - The updated comment text
 * @param {string} req.body.author - The updated comment author
 * @param {Object} res - Express response object
 * @returns {Promise<void>} Updated comment object or error message
 * @throws {Error} Returns 404 if comment not found, 500 if update fails
 */

const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;

router.get("/", async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch comments" });
  }
});

router.post("/", async (req, res) => {
  const { text, author } = req.body;
  if (!text || !author) {
    return res.status(400).json({ error: "Text and author are required" });
  }

  try {
    const newComment = new Comment({ text, author });
    await newComment.save();
    res.status(201).json(newComment);
  } catch (err) {
    res.status(500).json({ error: "Failed to create comment" });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedComment = await Comment.findByIdAndDelete(id);
    if (!deletedComment) {
      return res.status(404).json({ error: "Comment not found" });
    }
    res.json({ message: "Comment deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete comment" });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { text, author } = req.body;

  try {
    const updatedComment = await Comment.findByIdAndUpdate(
      id,
      { text, author },
      { new: true }
    );
    if (!updatedComment) {
      return res.status(404).json({ error: "Comment not found" });
    }
    res.json(updatedComment);
  } catch (err) {
    res.status(500).json({ error: "Failed to update comment" });
  }
});

// add another endpoint for deleting a comment
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedComment = await Comment.findByIdAndDelete(id);
    if (!deletedComment) {
      return res.status(404).json({ error: "Comment not found" });
    }
    res.json({ message: "Comment deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete comment" });
  }
});