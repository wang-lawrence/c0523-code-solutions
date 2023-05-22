console.log('hello world');

const h1Element = document.querySelector('h1')
console.log('value of h1 element ', h1Element);
console.dir(h1Element);

const explanationId = document.querySelector('#explanation');
console.log('value of explanation id ', explanationId);
console.dir(explanationId);

const hintClass = document.querySelector('.hint');
console.log('value of hint class ', hintClass);
console.dir(hintClass);

const pElement = document.querySelectorAll('p');
console.log('NodeList of p element ', pElement);


const exampleLinkClass = document.querySelectorAll('.example-link');
console.log('NodeList of example-link class ', exampleLinkClass);
