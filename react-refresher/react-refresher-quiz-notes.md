# react-intro-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- How do you define a React component?
with the export default function keyword and capitalize the first letter of the function name, then enclose the  code block for the component in curly braces, return the JSX markup
- How do you use JSX in a React component?
React uses JSX to write HTML markup and rendering those components to the UI
JSX elemtns are used to make DOM calls that create, modify and delete DOM
A React component returns a JSX element which represents how the DOM should be structured
- How do you declare the props a React component needs?
We can declare props inside the paranthesis of a JSX function by adding them inside curly braces separated by commas. To access them inside the component we would use the prop name surrounded by paranthesis
- How do you pass props to a React component?
inside the component tag, assign the prop value in curly braces to the prop name
- How do you include JavaScript expressions in JSX?
with curly braces
- What are React hooks and what are the three "Rules of Hooks"?
Hooks are special functions that are only available in React, they start with the 'use' word
Hooks can only be called at the top level of your components or your own Hooks,
they must be called on every render
- How do you manage state in a React component?
with the setter function of the useState hooks
- How do you handle events in React?
with event handlers
- How do you let a parent component know that an event happened?
event propogation (by adding the event listener to the parent component)
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
