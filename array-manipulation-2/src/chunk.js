/* exported chunk */
function chunk(array, size) {
  const newArr = [];
  for (let i = 0; i < Math.ceil(arra_y.length / size); i++) {
    newArr.push(array.slice(i * size, (i+1) * size))
  }
  return newArr;
};
