/* exported reverseWord */
function reverseWord(word) {
  let newStr = '';
  for (let i = 1; i <= word.length; i++) {
    newStr += word.at(-i)
  }
  return newStr;
};
