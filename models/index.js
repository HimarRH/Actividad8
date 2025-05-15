const sequelize = require("../config/db");
const Author = require("./author");
const Post = require("./post");

Author.hasMany(Post, { foreignKey: "authorId" });
Post.belongsTo(Author, { foreignKey: "authorId" });

module.exports = { sequelize, Author, Post };
