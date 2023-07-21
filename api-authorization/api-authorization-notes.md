# api-authorization-notes

## Notes

All student notes should be written here.

- payload is just relavant information you want to include in the token, usually it needs uniquely identifying info about the user so the server knows who's making request, the payload can also contain things like the access level for the user so the broswer will display things accordingly.
- jwt will digitally sign each token with a secret, this does two things, the server will check the token with the seciret ensure that the token is issued by the server (like a secret password), second the it'll ensure the token has not been tampered with (like if someone got a hold of the secret and hacks their own token to get authorized they're not supposed to)
- diginal signature is more like encoding and can easily be decoded, for example, the payload can easily be extracted from token so it's important to not put sensitive information in there. The secret however is still secured I believe and won't be shown.

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
