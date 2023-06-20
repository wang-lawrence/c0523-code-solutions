# es6-arrow-functions-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the syntax for defining an arrow function?
start witht the paraments in paranethsis if more than 1 or 0, if there's exactly 1 parameter the paranthesis are optional, followed by arrow to the right, the write the code block in curly braces (this could be eliminated if it's one expression)
- When an arrow function's body is not surrounded in curly braces (_concise body syntax_), what changes in its functionality?
it returns the result of the expression
- When using _concise body syntax_, how do you return an object literal?
surround the object literal with paranthesis
- In the expression
    ```js
    foo(() => 42);
    ```
  - Identify the arrow function
() => 42
  - How many arguments does the arrow function take?
zero
  - What value does it return?
42
  - How many arguments are passed to the function `foo`?
one
  - What type of argument is passed to the function `foo`?
callback function
- In the expression
    ```js
    bar((y) => {
      console.log(`4y = ${4 * y}`);
    });
    ```
  - Identify the arrow function
(y) => console.log(`4y = ${4 * y}`)
   - How many arguments does the arrow function take?
one
  - What value does it return?
it returns undefined, just prints to the console log
  - How many arguments are passed to the function `bar`?
one
  - What type of argument is passed to the function `bar`?
callback function
  - When does the arrow function's code get executed?
when bar gets called
- How does the value of `this` differ between standard functions and arrow functions?
an arrow function captures the this value of the enclosing context instead of creating its own this context
arrows functions don't have a `this` binding, so it'a just going to refer to its lexical scopr (eg outer function)

## Notes

All student notes should be written here.
- functions are normally hoisted to the top of the file
- but arrow functions are NOT hoisted, so you can access them before initialization

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
