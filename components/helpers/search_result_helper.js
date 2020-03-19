const searchPage = (arr) => {
  let results = [];
  for(const item of arr){
    let obj = {title: item.title, time: item.readyInMinutes, missing: item.missedIngredientCount, illustration: item.image, id: item.id};
    results.push(obj);
  }
  return results;
}