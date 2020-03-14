require('dotenv').config()
const express = require('express')
const app = express()
const PORT = 3001;
const bodyParser = require("body-parser");
const identifyImage = require('./components/helpers/clarifai_helper');

app.use(bodyParser.urlencoded({extended: true, parameterLimit: 100000, limit: '50mb'}));
app.use(bodyParser.json({limit: '50mb'}))

app.get('/', function (req, res) {
})

app.post('/', (req,res)=>{
  identifyImage(req.body.data)
})

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`);
});