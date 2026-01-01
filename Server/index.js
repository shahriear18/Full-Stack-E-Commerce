
require("dotenv").config();
const express = require('express');
const { dbconfig } = require("./Config/db.config");
const app = express()
const port = process.env.PORT
dbconfig();


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})
