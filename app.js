const morgan = require('morgan')
const express = require("express")
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded( {extended: true} ))
app.use(morgan("dev"))
app.use(express.static(__dirname + "/public"))

app.get("/", (req, res) => {
  res.send('hello world')
})

const PORT = 1337;
app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});

