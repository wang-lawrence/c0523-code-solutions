/* exported pick */
function pick(source, keys) {
  const obj = {};
  for(const key in source) {
    if (keys.indexOf(key) !== -1 && source[key] !== undefined) {
      obj[key] = source[key];
    }
  }
  return obj;
};
