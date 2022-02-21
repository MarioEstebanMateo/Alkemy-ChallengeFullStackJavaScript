const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = process.env.PORT || 3050;

const app = express();

app.use(bodyParser.json());
app.use(cors());

// MySql
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "challenge_alkemy",
});

//Routes
app.get("/", (req, res) => {
  res.send("Api made by Mario Esteban Mateo for Alkemy Challenge");
});

app.get("/movements", (req, res) => {
  const sql = "SELECT movements.id, movements.concept, movements.amount, DATE_FORMAT(movements.date,'%d/%m/%Y') as date, movements.type FROM movements ORDER BY movements.id DESC LIMIT 0,10";

  connection.query(sql, (error, results) => {
    if (error) throw error;
    if (results.length > 0) {
      res.json(results);
    } else {
      res.send("None result");
    }
  });
});

app.get("/balance", (req, res) => {
  const sql = "SELECT SUM(movements.amount) as 'balance' FROM movements";

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
  if (movementObj.type=="expense") {
    movementObj.amount = (movementObj.amount*-1);
    connection.query(sql, movementObj, (error) => {
      if (error) throw error;
      res.send("Movement added");
    });
  } else {
    connection.query(sql, movementObj, (error) => {
      if (error) throw error;
      res.send("Movement added");
    });
  }

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
