function convertMinutesToSeconds(minutes) {
  return minutes * 60;
};
const convertMinutesToSecondsResult = convertMinutesToSeconds(3);
console.log(
  'value of convertMinutesToSecondsResult: ', convertMinutesToSecondsResult
);

function greet(name) {
  return "Hey, " + name;
};
const greetResult = greet('Shaq');
console.log('value of greetResult: ', greetResult);

function getArea(width, height) {
  return width * height;
};
const getAreaResult = getArea(2, 10);
console.log('value of getAreaResult: ', getAreaResult);

function getFirstName(person) {
  return person.firstName;
};
const getFirstNameResult = getFirstName({firstName: 'Lawrence', lastName: 'Wang'});
console.log('value of getFirstNameResult: ', getFirstNameResult);

function getLastElement(array) {
  return array.at(-1);
};
const getLastElementResult = getLastElement(['JS', 'HTML', 'CSS', 'TS', 'REACT']);
console.log('value of getLastElementResult: ', getLastElementResult);
