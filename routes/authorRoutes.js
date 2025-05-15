const express = require("express");
const router = express.Router();
const authorController = require("../controllers/authorController");

router.get("/", authorController.getAllAuthors);
router.get("/:id", authorController.getAuthorByID);
router.get("/:authorId/posts", authorController.getPostsByAuthor);
router.post("/", authorController.createAuthor);

module.exports = router;
