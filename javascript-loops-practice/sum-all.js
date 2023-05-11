/* exported sumAll */
function sumAll(numbers) {
  let sumNumbers=0;
  for(let i = 0; i < numbers.length; i++){
    sumNumbers += numbers[i];
  }
  return sumNumbers;
};
