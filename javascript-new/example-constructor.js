function ExampleConstructor() {
}

console.log("value of ExampleConstructor prototype: ", ExampleConstructor.prototype)
console.log(
  'type of ExampleConstructor prototype: ',
  typeof ExampleConstructor.prototype
);

const newExample = new ExampleConstructor();
console.log('value of newExample: ', newExample);

const instanceOfCheck = newExample instanceof ExampleConstructor;
console.log('value of instanceOfCheck: ', instanceOfCheck);

console.log(Object.getPrototypeOf(newExample));
