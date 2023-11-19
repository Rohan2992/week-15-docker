import express from "express";
import "dotenv/config";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello to the port 3000");
  console.log(process.env.MONGO_URL);
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
