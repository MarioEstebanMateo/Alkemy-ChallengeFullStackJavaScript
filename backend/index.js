const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3050;

const app = express();

app.use(bodyParser.json());

// MySql
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "challenge_alkemy",
});

//Routes
app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

app.get("/movements", (req, res) => {
  const sql = "SELECT * FROM movements";

  connection.query(sql, (error, results) => {
    if (error) throw error;
    if (results.length > 0) {
      res.json(results);
    } else {
      res.send("None result");
    }
  });
});

app.get("/movements/:id", (req, res) => {
  const { id } = req.params;
  const sql = `SELECT * FROM movements WHERE id = ${id}`;

  connection.query(sql, (error, result) => {
    if (error) throw error;
    if (result.length > 0) {
      res.json(result);
    } else {
      res.send("None result");
    }
  });
});

app.post("/add", (req, res) => {
  const sql = "INSERT INTO movements SET ?";

  const movementObj = {
    concept: req.body.concept,
    amount: req.body.amount,
    date: req.body.date,
    type: req.body.type,
  };

  connection.query(sql, movementObj, (error) => {
    if (error) throw error;
    res.send("Movement added");
  });
});

app.put("/update/:id", (req, res) => {
  const { id } = req.params;
  const { concept, amount, date, type } = req.body;
  const sql = `UPDATE movements SET concept = '${concept}',  amount = '${amount}', date = '${date}', type = '${type}' WHERE id = ${id}`;

  connection.query(sql, (error) => {
    if (error) throw error;
    res.send("Movement updated");
  });
});

app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  const sql = `DELETE FROM movements WHERE id = ${id}`;

  connection.query(sql, (error) => {
    if (error) throw error;
    res.send("Movement deleted");
  });
});

// Check Connection
connection.connect((error) => {
  if (error) throw error;
  console.log("Database server running!");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
