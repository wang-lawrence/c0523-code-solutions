# http-messages-recap-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is a client?
Client makes requests for services from a server
- What is a server?
A server provides services such as sharing of data or resources or provides computational power for clients
- Which HTTP method does a browser issue to a web server when you visit a URL?
GET
- What is on the first line of an HTTP **request** message?
the Start Line which inlcudes the http method, the request target which is usually a URL, and the http version used
- What is on the first line of an HTTP **response** message?
The Status Line which includes the protocal version, the status code and the status code that explains the code
- What are HTTP headers?
Optional, these specify the request or describe the body included in the message
- Is a body required for a valid HTTP message?
Not all requests have one: requests fetching resources, like GET, HEAD, DELETE, or OPTIONS, usually don't need one.
Not all responses have one: responses with a status code that sufficiently answers the request without the need for corresponding payload (like 201 Created or 204 No Content) usually don't.

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
