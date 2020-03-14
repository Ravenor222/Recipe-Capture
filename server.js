const express = require('express')
const app = express()
const PORT = 3001;
const identifyImage = require('./components/helpers/clarifai_helper');

app.get('/', function (req, res) {
  console.log('youch')
  res.send("hey")
})

app.post('/', (req,res)=>{
  console.log("yo")
  console.log(res)
  // console.log()
  // identifyImage(req.body.data.)
})
app.post('*', (req, res) => {
  console.log("thats all folks")
})
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`);
});