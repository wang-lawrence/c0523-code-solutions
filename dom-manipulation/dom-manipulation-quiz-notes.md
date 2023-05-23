# dom-manipulation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `className` property of element objects?
it's the class attribute of the specified element
- How do you update the CSS class attribute of an element using JavaScript?
by updating the className property of the element object
- What is the `textContent` property of element objects?
it represents the text content of the node, specifically it gets the contents of all elements, including <scrip> and <style> elements
- How do you update the text within an element using JavaScript?
by updating the textConent or innerText property of the element object
- Is the `event` parameter of an event listener callback always useful?
in most cases it's useful, but if there's only one event that we're dealing with then the global event object will capture the even and we wouldn't need to pass in the event parameter
also, even if the event objected is passed into the function it's not needed so not used
- Would this assignment be simpler or more complicated if we didn't use a variable to keep track of the number of clicks?
if we didn't create a variable, we would need to store the click count in the text content of the <p> element, which would be more difficult because we're dealing with a string and more manipulation would be required to extract the click count info
- Why is storing information about a program in variables better than only storing it in the DOM?
it's more easily accessible and to maintain and handle

## Notes

All student notes should be written here.
 - classList is also a useful method to get the clases of an element object
 - it returns an array of the classes, and we can add more remove each indiviudal classes with add() or remove()
 - className and textContent are getter and setter function

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
