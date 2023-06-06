# http-messages-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is a client?
a client request cotents or services from the server
- What is a server?
a server provides resources and services to clients
- Which HTTP method does a browser issue to a web server when you visit a URL?
GET
- What three things are on the start-line of an HTTP **request** message?
The HTTP method, the request target, the HTTP version
- What three things are on the start-line of an HTTP **response** message?
protocal version (usually HTTP/1.1), a status code (common codes 200, 404, 302), a status text (informational to help understand the HTTP message)
- What are HTTP headers?
Optional, these specify the request or describe the body included in the message
- Where would you go if you wanted to learn more about a specific HTTP Header?
MDN
- Is a body required for a valid HTTP request or response message?
Not all requests have one: requests fetching resources, like GET, HEAD, DELETE, or OPTIONS, usually don't need one.
Not all responses have one: responses with a status code that sufficiently answers the request without the need for corresponding payload (like 201 Created or 204 No Content) usually don't.
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
