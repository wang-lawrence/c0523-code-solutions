# dom-query-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
to help with debugging and see the results on our scripts
- What is a "model"?
the way things are structured for a specitic
- Which "document" is being referred to in the phrase Document Object Model?
the HTML document
- What is the word "object" referring to in the phrase Document Object Model?
each individual HTML element
- What is a DOM Tree?
it represents HTML elemtns as objects and nested tags are children of enclosing ones
- Give two examples of `document` methods that retrieve a single element from the DOM.
querySelector, getElementById
- Give one example of a `document` method that retrieves multiple elements from the DOM at once.
querySelectorAll
- Why might you want to assign the return value of a DOM query to a variable?
to change the property of a certain HTML element
- What `console` method allows you to inspect the properties of a DOM element object?
dir()
- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?
The browser needs to parse all of the elemnts in the HTML page before the JS code can access them
- What does `document.querySelector()` take as its argument and what does it return?
it takes a string containing css selectors as the argument and returns the first element that matches the selector
- What does `document.querySelectorAll()` take as its argument and what does it return?
it takes a string containing one or more selectors and returns one element for each element that matches at least one of the selectors

## Notes

All student notes should be written here.


How to write `Code Examples` in markdown

for JS:

```javascript
const data = "Howdy";
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
