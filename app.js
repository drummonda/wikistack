const morgan = require('morgan')
const express = require("express")
const bodyParser = require('body-parser')
const app = express()
const layout = require("./views/layout")
const { db } = require('./models');


app.use(bodyParser.json())
app.use(bodyParser.urlencoded( {extended: true} ))
app.use(morgan("dev"))
app.use(express.static(__dirname + "/public"))

app.get("/", (req, res) => {
  res.send(layout('hello world'))
})

db.authenticate().
then(() => {
  console.log('connected to the database');
})


const init = async() => {
  await db.sync({force: true})
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });
}

init();
