# es6-async-await-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `async` and `await` keywords used for?
async decalares a new asynchornous function, and the await keyword is used to indicate that the JS Runtime should wait until the asyc function completes
- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?
async and await read more synchronously and sequentially than .then and .catch, Promises are callback based but async and await are more natural
- When do you use `async`?
use it only for functions, when we are creating asynchronous functions, it's written before the function keyword
- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)
use await inside the the funciton body of the asynch function, you want to use await for a function that you're waiting for result on, await on a synchronous function does nothiing
- How do you handle errors with `await`?
with the try/catch/finally mechanism
- What do `try`, `catch` and `throw` do? When do you use them?
the try block will execute unless  it encounters a part of the code that throws an error and halts execution, at which point the try block exits and goes to the catch block, you can you try catch anytime you're dealing with error handling even outside of async await
- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?
it returns a Promise instead of the resolved value, and you also never get the thrown error
- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?
async/await is easier to read

## Notes

All student notes should be written here.
- the return value from an await function in the MDN example is a "Response object". Is that only becuase it's using fetch()? or do should all resolved values from a promise be a Reponse Object?

How to write `Code Examples` in markdown

for JS:
```javascript
const data = "Howdy"
```

for HTML:
```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:
```css
div {
  width:100%
}
```
