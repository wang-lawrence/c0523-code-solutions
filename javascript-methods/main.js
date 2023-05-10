const num1 = 5;
const num2 = 10;
const num3 = 15;

const maximumValue = Math.max(num1, num2, num3);

console.log('value of maximumValue: ', maximumValue);

const heroes = ['batman', 'deadpool', 'iron man', 'hulk'];

let randomNumber = Math.random();

randomNumber *= heroes.length;

const randomIndex = Math.floor(randomNumber);

console.log('value of randomIndex: ', randomIndex);

const randomHero = heroes[randomIndex];

console.log('value of randomHero: ', randomHero)


const library = [
  {
    title: 'The Great Gatsby',
    author: 'F Scott Fitzgerald'
  },
  {
    title:'Ready Player One',
    author: 'Earnest Cline'
  },
  {
    title: 'Game of Thrones',
    author: 'George RR Martin'
  }
];

const lastBook = library.pop();

console.log('value of lastBook: ', lastBook);

const firstBook = library.shift();

console.log('value of firstBook: ', firstBook);

const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const  css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};

library.push(js);

library.unshift(css);

library.splice(1,1);

console.log('value of library: ', library);

const fullName = 'Lawrence Wang';

const firstAndLastName = fullName.split(' ');

console.log('value of firstAndLastName: ', firstAndLastName);

const firstName = firstAndLastName[0];

const sayMyName = firstName.toUpperCase();

console.log('value of sayMyName: ', sayMyName);
