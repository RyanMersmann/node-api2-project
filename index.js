const express = require("express");
const postsRouter = require("./posts/posts-router");
//create server
const server = express();

server.use(express.json());
server.use("/api/posts", postsRouter); // this automatically adds api/posts to each request

server.get("/", (req, res) => {
  res.json({ message: "Welcome to the API, your request is successful" });
});

const port = 5050;

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
