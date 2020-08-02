const express = require("express");

const app = express();
const PORT = 3030;

app.listen(PORT, () => {
  console.log(`Server start on ${PORT} port...`);
});
