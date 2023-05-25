# dom-event-delegation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `event.target`?
the element that the event occurred upon
- Why is it possible to listen for events on one element that actually happen its descendent elements?
bubbling causes events to float up from the descendent all the way up the DOM tree
- What DOM element property tells you what type of element it is?
tagName
- What does the `element.closest()` method take as its argument and what does it return?
it takes a string of CSS selector and returns the closest ancestor or itself that matches the CSS selector
- How can you remove an element from the DOM?
remove() method
- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?
add the click event listener to the parent element

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
