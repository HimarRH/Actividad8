const { Author, Post } = require("../models");

exports.getAllAuthors = async (req, res) => {
  try {
    const authors = await Author.findAll({});
    res.status(200).json({ data: authors });
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving authors",
      error: error.message,
    });
  }
};

exports.getAuthorByID = async (req, res) => {
  try {
    const author = await Author.findByPk(req.params.id);
    if (!author) {
      return res.status(404).json({ message: "Author not found" });
    }
    res.status(200).json({ data: author });
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving author",
      error: error.message,
    });
  }
};

exports.createAuthor = async (req, res) => {
  try {
    if (!req.body.name || !req.body.email) {
      return res.status(400).json({ message: "Name and email are required" });
    }
    const author = await Author.create(req.body);
    res.status(201).json({ data: author });
  } catch (error) {
    res.status(500).json({
      message: "Error creating author",
      error: error.message,
    });
  }
};

exports.getPostsByAuthor = async (req, res) => {
  const { authorId } = req.params;
  if (!authorId) {
    return res.status(400).json({ message: "Author ID is required" });
  }

  try {
    const posts = await Post.findAll({
      where: { authorId },
      include: [Author],
    });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: "Error fetching posts", error });
  }
};
