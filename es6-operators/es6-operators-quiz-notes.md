# es6-operators-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?
&& is used to evaluates if a set of operands all return true, otherwirse it returns false
|| evaluates if at least one operands in a set of operands return true, otherwise it returns false
They can be used out of an 'if' statement such as in a return statement or as the callback function in a filter method
- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?
when an expression is evaluated from left to right, a shortcuit occurs when a condition is met partway through and the value of the operator is determined; the remaining expression doesn't get evaluated

in && operator, a shortcircuit occurs when the expression evaluates the first operand that resovles to falsy
in || operator, a shortcircuit occurs when the expression evaluates the first operand that resovles to truthy
- What is the `??` (nullish coalescing) operator and how does it differ from `||`?
?? returns the right side operand when the left side operand returns null or undefined, otherwise it returns the left hand side operand
it's different fro || in that || typically is used to return a boolean whereas ?? can be used to return anything
- What is the `?:` (ternary) operator? How does it differ from `if/else`?
It's another way to write a conditional expression and execute code based on whether the expression is true or false, it's similar to if/else but it can be written in one line, and the conditional expression doesn't need to be in paranthesis and the code blocks don't need to be in brackets
- What is the `?.` (optional chaining) operator? When would you use it?
The optional chaining (?.) operator accesses an object's property or calls a function. If the object accessed or function called using this operator is undefined or null, the expression short circuits and evaluates to undefined instead of throwing an error. It's useful when accessing chained properties of an object and there's a possiblity the properties may be missing
- What is `...` (spread) syntax? How do you use it with arrays and objects?
The spread (...) syntax allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected.

You can expand an array and store in another array like [...array] or in an object like {...array}, or spread the array and use the elements as arguments in a function function(...array), you can also make a shallow copy of an object
- What data types can be spread into an array? Into an object?
iterable objects into an arrary, any objects into an object
- How does spread syntax differ from rest syntax?
In a way, spread syntax is the opposite of rest syntax. Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements and "condenses" them into a single element.

## Notes

All student notes should be written here.


How to write `Code Examples` in markdown

for JS:
```js
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
