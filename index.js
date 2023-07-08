require("dotenv").config();
const express = require('express')
const dbConnection = require('./configuration/dbConnection.js')
const routes = require("./routes")
var cors = require('cors')
const app = express()

console.log("Hi Node");
app.use(cors())
dbConnection()
app.use(routes);

app.get('/', function(req, res){
    res.send("Hello Node JS")
})

app.listen(8000)