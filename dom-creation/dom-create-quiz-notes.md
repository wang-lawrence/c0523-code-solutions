# dom-creation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Does the `document.createElement()` method insert a new element into the page?
no, it's created but not inserted
- How do you add an element as a child to another element?
.append or .appendChild
- What do you pass as the arguments to the `element.setAttribute()` method?
the attribute name and the attribute value
- What steps do you need to take in order to insert a new element into the page?
query for the element that we want to insert the new element before/after, then use the appropriate method to insert via .append, .appendChild, .prepend, .after, .before etc...
- What is the `textContent` property of an element object for?
to store the text value of the element object
- Name two ways to set the `class` attribute of a DOM element.
.setAttribute method or the .className property
- What are two advantages of defining a function to do create something (like the work of creating a DOM tree)?
it's interactive so we can manipulate the tree structure depening on user action
we can also add or remove attributes and the content of the elements dynamically


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
