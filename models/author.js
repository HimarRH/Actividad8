const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Author = sequelize.define(
  "Author",
  {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    image: DataTypes.STRING,
  },
  {
    tableName: "authors",
    timestamps: false,
    freezeTableName: true,
  }
);

module.exports = Author;
