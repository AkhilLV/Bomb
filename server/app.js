const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/verify", (req, res) => {
  const code = req.body.code;

  const validCodes = ["1234", "5678", "9101"];

  if (validCodes.includes(code)) {
    res.send({ message: true });
  } else {
    res.status(400).send({ message: false });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
