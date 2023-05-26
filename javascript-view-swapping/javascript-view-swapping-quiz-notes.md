# javascript-view-swapping-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `event.target`?
the element that the event is occurred on
- What is the affect of setting an element to `display: none`?
it turns off the layout of that element, so it's not rendered and the vacant space would be occupied by other elements
- What does the `element.matches()` method take as an argument and what does it return?
it takes a CSS selector as the argument and returns a boolean for where the element would be selected by the CSS
- How can you retrieve the value of an element's attribute?
getAttribute()
- At what steps of the solution would it be helpful to log things to the console?
when we're unsure what the data looks like, it's also good the log things before conditional expressoins to ensure that the values being compared are on the same basis
- If you were to add another tab and view to your HTML, but you didn't use event delegation, how would your JavaScript code be written instead?
I would add an event listener to each of the tab
- If you didn't use a loop to conditionally show or hide the views in the page, how would your JavaScript code be written instead?
I would write out the code to turn on the selected tab and turn off the views for the remaining tabs, this would need to be done for every tab.

## Notes

All student notes should be written here.

- When two boxes are side by side, which box's border is shown?
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
