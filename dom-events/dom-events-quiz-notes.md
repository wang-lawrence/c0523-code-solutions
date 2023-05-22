# dom-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
to see the data that we are working with and for debugging purposes
- What is the purpose of events and event handling?
So the program can respond to different scenarios and be more interactive
- Are all possible parameters required to use a JavaScript method or function?
no, some methods have optional paraments or no parametners at all
- What method of element objects lets you set up a function to be called when a specific type of event occurs?
addEventListener
- What is a callback function?
a function that is passed into another function as an argument
- What object is passed into an event listener callback when the event fires?
the event object
- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
the target property of the event object is a reference to the element the event occurred upon, we can log it to the console to check and read more about it on MDN
- What is the difference between these two snippets of code?
The first snippet doesn't call handleClick right away, rather it's a reference to the function that will be called after the click event is detected; the event object is then passed into the callback function
The second snippet is calling the handleClick function right away since it's not a callback function

    ```js
    element.addEventListener('click', handleClick)
    ```
    ```js
    element.addEventListener('click', handleClick())
    ```


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
