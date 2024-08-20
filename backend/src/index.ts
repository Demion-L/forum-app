import express from "express";
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors({ origin: "http://localhost:5173" }));
app.use(bodyParser.json());

app.post("/auth", (req, res) => {
  const { username, password, isLogin } = req.body;

  if (isLogin) {
    res.json({ message: "Login successfull!" });
  } else {
    res.json({ message: "Signup successful!" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
