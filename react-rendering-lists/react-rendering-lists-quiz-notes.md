# react-rendering-lists-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- When would we want to dynamically create a list of React components?
Your list of componenets could change as data updates or you may have different criteria for what you want to display. It would be a huge hassle to have to manually update the list everytime.
- Why is it important for React components to be data-driven?
React components are designed to be simple but flexbile enough to respond to inputs, therefore they shouldn't store data intrinsically, but rather take in the data and manipulate and render them to be dynamic
- Where in the component code would a list of React components typically be built?
Before the return statement
- What `Array` method is commonly used to create a list of React components?
map
- Why do components in a list need to have unique keys?
Keys tell React which array item each componenet corresponds to, so that it can match them up later. THis becomes important if your array items can move.
- What is the best value to use as a "key" prop when rendering lists?
ID's in the data

## Notes

All student notes should be written here.
- How come we don't see the key attribute in the inspector?

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
