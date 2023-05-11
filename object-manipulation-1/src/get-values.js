/* exported getValues */
function getValues(object, key) {
  const newArr = [];
  for (const key in object) {
    newArr.push(object[key]);
  }
  return newArr;
}
