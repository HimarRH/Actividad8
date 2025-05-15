const { Post, Author } = require("../models");

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.findAll({});
    res.status(200).json({ data: posts });
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving posts",
      error: error.message,
    });
  }
};

exports.getPostByID = async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.status(200).json({ data: post });
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving post",
      error: error.message,
    });
  }
};

exports.createPost = async (req, res) => {
  try {
    if (!req.body.title || !req.body.description) {
      return res
        .status(400)
        .json({ message: "Title and content are required" });
    }

    const post = await Post.create(req.body);
    res.status(201).json({ data: post });
  } catch (error) {
    res.status(500).json({
      message: "Error creating post",
      error: error.message,
    });
  }
};
