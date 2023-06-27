# react-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is an "event" in React?
interactions with the web like clicking, hovering, focusing
- What is an "event handler"? Which component declares the handler?
a function that gets triggered once an event fires, the component that houses the event can declare the handler, but the handler can also be declared in a parent component and passed down to the child component as a prop
- How do you pass an event handler to a React component?
by passing it in as a prop
- What is the naming convention for event handlers?
start with handle followed by the event name
- What is an "event handler prop"? Which component declares the prop?
the event handler prop is a function that is passed down into a child componenet, this is useful to specify different handlder function for the same child component, the prop is declared in the parent component
- What are some custom event handler props a component may wish to define?
if clicking a button plays music, the event hander prop may be called onPlayMusic
- What is the naming convention for custom event handler props?
start with on followed by a capital letter word

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
