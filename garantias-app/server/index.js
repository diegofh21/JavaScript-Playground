const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'garantias_mmx'
});

app.use(cors())
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/producto/:codigo', (req, res) => {
  const prod = req.params.codigo;
  const sqlSelect = "SELECT * FROM productos WHERE UPPER(codigo) = ?"

  db.query(sqlSelect, prod, (err, result) => {
    if (err) {
      console.log(err);
    }
    else {
      res.send(result);
    }
  })
});

app.get('/', (req, res) => {
  res.send("Hello world")
})

app.listen(3001, () => {
  console.log("server is running on port 3001")
});