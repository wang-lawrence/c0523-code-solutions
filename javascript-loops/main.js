/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */
function getNumbersToTen() {
  const numbers = [];
  let currentNumber = 1;
  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber ++;
  }
  return numbers;
};

function getEvenNumbersToTwenty() {
  const evenNumbers = [];
  let currentNumber = 2;
  while(currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
};

function repeatWord(word, times) {
  let count = 1;
  let repeated = '';
  while(count <= times){
    repeated += word;
    count++
  }
  return repeated;
};

function logEachCharacter(string){
  for(let i = 0; i < string.length; i++){
    console.log(string[i]);
  }
};

function doubleAll(numbers){
  const doubled = [];
  for(let i = 0; i < numbers.length; i++){
    doubled.push(numbers[i]*2);
  }
  return doubled;
};

function getKeys(object){
  const keys=[];
  for (key in object) {
    keys.push(key);
  }
  return keys;
};

function getValues(object){
  const values = [];
  for (key in object){
    values.push(object[key]);
  }
  return values;
};
