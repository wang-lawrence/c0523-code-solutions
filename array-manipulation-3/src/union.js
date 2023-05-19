/* exported union */
function union(first, second) {
  return unique([...first, ...second]);
}
