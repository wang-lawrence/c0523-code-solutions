# express-error-handling-notes

## Notes

All student notes should be written here.

- The errorMiddleware is the error handling function, and Express knows it's an error handling function because it takes 4 parameters (that's it, Express checks the number of paramters to determine if it's error handling)
- so in next(err), Express goes and find the error handling function in the middleware queue and pass in the err object for error handling
- errorMiddleware function handles client side and server side errors differently, when it's client side we don't log the error but we will for server side

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
