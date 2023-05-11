/* exported capitalizeWords */
function capitalizeWords(string) {
  const stringArr = string.split(' ');
  const newArr = [];
  let capWord = '';
  for (let i = 0; i < stringArr.length; i++) {
    newArr.push(stringArr[i][0].toUpperCase() + stringArr[i].slice(1).toLowerCase()
    );
  }
  return newArr.join(' ');
}
