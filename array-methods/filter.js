const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna',
];

const evenNums = numbers.filter( e => e % 2 == 0);
const noD = names
  .filter((e) => !/d/ig.test(e));

console.log('Even numbers:', evenNums);
console.log('No D', noD)
