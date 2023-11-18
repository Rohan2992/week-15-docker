import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello , How are you?");
});

app.listen(3000, () => {
  console.log("Server is listening on http://localhost:3000");
});
