/* exported omit */
function omit(source, keys) {
  const obj = {};
  for (const key in source) {
    if (keys.indexOf(key) === -1) {
      obj[key] = source[key];
    }
  }
  return obj;
};
