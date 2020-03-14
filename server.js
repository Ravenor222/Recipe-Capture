const express = require('express')
const app = express()
const PORT = 3000;
const identifyImage = require('./components/helpers/clarifai_helper');

app.get('/', function (req, res) {
})

app.post('/', (req,res)=>{
  console.log(req.body.photo)
  // identifyImage(req.body.data.)
})
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`);
});