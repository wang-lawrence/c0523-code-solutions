# array-filter-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- `Array.forEach`:
    - What does `Array.forEach` do?
    it executes a callback function on each of the non-empty element in an array, and unlike .map it doesn't return anything so it's not chainable and typically will be used at the end of the the chain
    - What should the callback function do?
    do something to each of the array elemtns
    - What is `Array.forEach` useful for?
    for iterating through an array without using a loop
- `Array.map`:
    - What does `Array.map` do?
    returns a new array populated with the results of calling a provided function on every element in the calling array
    - What should the callback function return?
    a signle element, can be anything
    - What is `Array.map` useful for?
    modifying an array and returning the results of that array
- `Array.filter`:
    - What does `Array.filter` do?
    returns a new array filtered down to just the elements from the given array that pass the test implemented by the provided function.
    - What should the callback function return?
    a truthy or falsy
    - What is `Array.filter` useful for?
    to keep the elments of an array that are needed
## Notes

All student notes should be written here.
the callback functions call for three argument, but it they still perform correctly with only one argument, why?

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
