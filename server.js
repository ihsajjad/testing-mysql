const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3306;

// middleware
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: process.env.DB_Host,
  user: process.env.DB_User,
  password: process.env.DB_Pass,
  database: process.env.DB_DBName,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

app.get("/books", (req, res) => {
  const q = "SELECT * FROM b1wc9ozq7dxwz5h8tafz.books";

  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.send("Failed to load data");
    }
    console.log(data);
    return res.send(data);
  });
});

app.get("/events", (req, res) => {
  const q = "SELECT * FROM b1wc9ozq7dxwz5h8tafz.events";

  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.send("Failed to load data");
    }
    console.log(data);
    return res.send(data);
  });
});

app.get("/instructors", (req, res) => {
  const q = `SELECT * FROM b1wc9ozq7dxwz5h8tafz.instructors`;

  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.send("Failed to load data");
    }
    console.log(data);
    return res.send(data);
  });
});

app.get("/blogs", (req, res) => {
  const q = `SELECT * FROM b1wc9ozq7dxwz5h8tafz.blogs`;

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
