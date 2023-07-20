# react-custom-hooks-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is a React custom hook?
  A custom hook is just a function!!! It follows a certain naming conventions, but in the end it's just a functoin. A hook that is not built in and is created to serve a specific purpose. It'll usually contain logic that uses other built-in hooks.

- When are custom hooks useful? When are they not required?
  Custom hooks are not required. They are useful when there is duplicate code that can be encapsulated. It's also helpful to create hooks that with descriptive name and hide the inner workings of the logic so the code is more readable.

- What is the syntax (or naming convention) for writing a custom hook?
  start with `use` and then followed by a capital letter

- How do you call a custom hook?
  by importing it if it's in another file, and then calling it within a component, passing in any necessary arguments

- When do custom hooks execute?
  when a component rerenders, or more simply when it gets called

  all custom hooks are is a function, you call it like a normal function and it can return anything like a string, boolean, object, nothing...just like a normal function.

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
