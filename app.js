require("dotenv").config();
const express = require("express");
const sequelize = require("./config/db");
const authorRoutes = require("./routes/authorRoutes");
const postRoutes = require("./routes/postRoutes");

const app = express();
app.use(express.json());

app.use("/api/authors", authorRoutes);
app.use("/api/posts", postRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
