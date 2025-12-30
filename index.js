import express from "express";

const app = express();
app.get("/", (req, res) => {
  console.log("Hello to the home route");
  res.send("Hello to the home route");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
