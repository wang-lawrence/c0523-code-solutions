/* exported reverseWords */
function reverseWords(string) {
 const wordsArr = string.split(' ');
 const newArr = [];
 for (let i = 0; i < wordsArr.length; i++){

  let reverseWord = '';

  for (let j = 1; j <= wordsArr[i].length; j++){
    reverseWord += wordsArr[i].at(-j);
  }

  newArr.push(reverseWord);
 }

  return newArr.join(' ')

}
