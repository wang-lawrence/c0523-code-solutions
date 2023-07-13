# javascript-conditionals-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- In JavaScript, when is scope determined?
  At the time the variable is declared (COMPILE time)

- What allows JavaScript functions to "remember" variables from their surroundings?
  closure

- What values does a closure contain?
  all the variables that are in scope at the time of creation of the function

- When is a closure created?
  When a function is declared, at RUNTIME a reference will be created to the function and its closures. So everytime the code is run, a new reference is created, this is why we have to be careful in useEffect

- How can you tell if a function will be created with a closure?
  if the functoin contains references to variables that are not declared within the function

- In React, what is one important case where you need to know if a closure was created?
  infinite rerendering, whenever a component rerenders the function/objects declared in the component will be recreated, so if the function/objects are used as dependencies in a useEffect, and the useEffect is setting state or another rerender trigger, then it will start an infinie cycle of rerender from useEffect, useEffect gets triggered due to function/object recreation and changing the dependency and trigger the rerender code, which tirgger useEffects again ....

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
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
  width: 100%;
}
```
