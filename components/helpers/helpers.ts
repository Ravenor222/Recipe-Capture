function identifyImage(imageData):any {
  const Clarifai = require('clarifai');
  const app = new Clarifai.App({
      apiKey: process.env.CLARIFAI_KEY
  });
  // this.displayAnswer(response.outputs[0].data.concepts[0].name
  app.models.predict('bd367be194cf45149e75f01d59f77ba7', {base64: imageData})
  .then((response) => console.log(response.outputs[0].data.concepts))
  .catch((err) => alert(err))
}



module.exports = identifyImage;
