const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send("<h1>HomePage</h1>");
});

app.listen(3000, () => {
  console.log("Express Server running on port 3000");
});
