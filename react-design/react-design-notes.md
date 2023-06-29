# react-design-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the phases in the React design process?
 1 - start with a static UI mockup, break up the pieces into componenets
 2 - determine the UI state that are needed and which component should hold the state
 3 - determine the events that need to modify state, which child components fire the events and how parent should handle the event
- How does data flow in React?
data is passed down from the parent component to the children components via props
- How can children components modify state in their parents?
through event handling props that are passed from the parent to the chidlren, and the children component activates the handle function in the parent component that sets state

## Notes

All student notes should be written here.
- there' a special prop called `children` that allows us to pass in props in a different format
How to write `Code Examples` in markdown

for JS:

```js
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
