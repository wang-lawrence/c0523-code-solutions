/* exported dropRight */
function dropRight(array, count) {
  return array.slice(0, Math.max(array.length - count,0))
}
