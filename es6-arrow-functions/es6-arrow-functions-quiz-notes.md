# es6-arrow-functions-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the syntax for defining an arrow function?
start witht the paraments in paranethsis if more than 1 or 0, followed by arrow to the right, the write the code block in curly braces (this could be eliminated if it's one expression)
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
it doesn't return any value, just prints to the console log
  - How many arguments are passed to the function `bar`?
one
  - What type of argument is passed to the function `bar`?
callback function
  - When does the arrow function's code get executed?
when it gets called
- How does the value of `this` differ between standard functions and arrow functions?
an arrow function captures the this value of the enclosing context instead of creating its own this context

## Notes

All student notes should be written here.


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
