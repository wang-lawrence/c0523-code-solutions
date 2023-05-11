/* exported defaults */
function defaults(target, source) {
  for (const key in source) {
    if (Object.keys(target).indexOf(key) === -1) {
      target[key]=source[key];
    }
  }
};
