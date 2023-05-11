/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  const splitArr = string.split('');
  splitArr[firstIndex] = string.split('').at(secondIndex);
  splitArr[secondIndex] = string.split('').at(firstIndex);
  return splitArr.join('');
}
