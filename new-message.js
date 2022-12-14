const { default: axios } = require('axios');
const bodyParser = require('body-parser');
var express = require('express');

var app = express();
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({ extended: true })
);


app.get("/",(req,res)=>{
    res.end("<h1>Telegram message bot</h1>")
})