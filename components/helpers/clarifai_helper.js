
export default function identifyImage(imageData) {
  // Initialise the Clarifai api
  const Clarifai = require('clarifai');
  const app = new Clarifai.App({
      apiKey: '73cb02089cfe46e093f094aa426a0692'
  });
  // Identify the image
  // this.displayAnswer(response.outputs[0].data.concepts[0].name
  app.models.predict('bd367be194cf45149e75f01d59f77ba7', {base64: imageData})
  .then((response) => console.log(response.outputs[0].data.concepts))
  .catch((err) => console.log(err))
}