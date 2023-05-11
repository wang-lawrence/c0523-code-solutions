/* exported reverse */
function reverse(array) {
  const newArr = [];
  for (let i = 1; i <= array.length; i++) {
    newArr.push(array.at(-i));
  }
  return newArr;
};
