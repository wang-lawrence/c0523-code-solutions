/* exported zip */
function zip(first, second) {
  const minArrayLength = Math.min(first.length, second.length);
  const newArr = [];
  for (let i = 0; i < minArrayLength; i++) {
    newArr.push([first[i], second[i]]);
  }
  return newArr;
}
