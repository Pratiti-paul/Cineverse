// testServer.js
import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("✅ Test server working!");
});

app.listen(8080, () => {
  console.log("Test server running on http://localhost:8080");
});
