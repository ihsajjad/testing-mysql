const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Shakib100%",
  database: "test",
});

app.get("/books", (req, res) => {
  const q = "SELECT * FROM test.books";

  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.send("Failed to load data");
    }
    console.log(data);
    return res.send(data);
  });
});

app.get("/", (req, res) => {
  res.send("Uinty Yoga Studio is running");
});

app.listen(port, () => {
  console.log(`Uinty Yoga Studio is running on port ${port}`);
});