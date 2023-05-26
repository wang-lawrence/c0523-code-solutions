const books = [
  { isbn: 'Dune', author: 'Frank Herbert', isbn: '978-0441172719' },
  { isbn: 'The Martian', author: 'Andy Weir', isbn: '978-0441172719' },
  { isbn: 'Hyperion', author: 'Dan Simmons', isbn: '978-0553283686' },
];

console.log('array of books: ', books);
console.log('books type: ', typeof books);

const stringifiedBooks = JSON.stringify(books);

console.log('JSON stringified books: ', stringifiedBooks);
console.log('JSON stringified books type: ', typeof stringifiedBooks);

const studentString = '{"id":675121, "name":"Lawrence"}'

console.log('value of studentStrig: ', studentString);
console.log('studentString type: ', typeof studentString);

const studentJSON = JSON.parse(studentString);

console.log('value of studentJSON: ', studentJSON);
console.log('studentJSON type: ', typeof studentJSON);
