export const pushSavedRecipes = (state) => {
  const keys = Object.keys(state)
  let results = [];
  for ( let item of keys.filter((x)=> x!== "recipeId")) {
    results.push(state[item]);
  }
  return results;
};