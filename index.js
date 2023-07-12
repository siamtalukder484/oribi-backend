require("dotenv").config();
const express = require('express')
const dbConnection = require('./configuration/dbConnection.js')
const routes = require("./routes")
var cors = require('cors');
const { urlencoded } = require("body-parser");
const app = express()

app.use(express.urlencoded({extended: true,}))
app.use(cors())
dbConnection()
app.use(express.json())
app.use(routes);

app.get('/', function(req, res){
    res.send("Hello Node JS")
})

app.listen(8000)