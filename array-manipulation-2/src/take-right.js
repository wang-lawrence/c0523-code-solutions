/* exported takeRight */
function takeRight(array, count) {
  return array.slice(Math.max(array.length - count, 0))
}
