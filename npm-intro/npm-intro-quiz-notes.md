# npm-intro-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is NPM?
it's a large public database of JavaScript software and their meta-info for developers to share and borrow code packages
- What is a package?
a directory with one or more files in ti
- What are some other popular package managers?
Yarn, PNPM
- How can you create a `package.json` with `npm`?
by using the npm -init command
- What is a dependency and how do you add one to a package?
depedncies are packages we need for the project, add using npm install
- What happens when you add a dependency to a package with `npm`?
the added package gets added to the node_modules folder, and in the package.json you'll see the dependencies
- What is a devDependency and how do you add one to a package?
package that is only needed for local development and not for production so the boilerplate codes won't be included, add using npm install --save-dev
- How do you define and run `npm` scripts? Why are these useful?
add a script field in the package.json, run it using the `npm run` command, they are useful for automation such as tests or formatting files before pushing

## Notes

All student notes should be written here.
- the node_module folder is grayed out because .gitignore file in our directory prevents them from being pushed, this is so we don't push packages and increase the size of our repo significantly. Users can to find the packages we installed in the package.json file and install the neccessary packages on thier local machine.

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
