# react-effects-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- When is a component "mounted" to the DOM?
  When React finishes rendering and commits the changes to the DOM, in other words when the component is inserted into the DOM

- What is a React Effect?
- Effects let you specify side effects that are caused by rendering itself, rather than by a particular event

- When should you use an Effect and when should you not use an Effect?
  typically use Effect when connecting to an external system, avoid using it for setting states in general

- When do Effects run?
  when the component initally mounts, and after every re-render, and depending on if any of the dependencies changes

- What function is used to declare an Effect?
  useEffect()

- What are Effect dependencies and how do you declare them?
  Declare dependencies in an array as the second argument to the useEffect. Dependecies are used to bypass Effects from being run, if the dependicies have not changed between the new render and the previous render then the useEffect will not run

- Why would you want to clean up from an Effect?
  so the Effects don't stack up and actions get duplicated

- How do you clean up from an Effect?
  return a cleanup function in the useEffect

- When does the cleanup function run?
  Right before the next time useEffect is triggered or when the component is unmounted

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
