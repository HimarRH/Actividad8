const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Post = sequelize.define(
  "Post",
  {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    category: DataTypes.STRING,
  },
  { tableName: "posts", timestamps: false, freezeTableName: true }
);

module.exports = Post;
