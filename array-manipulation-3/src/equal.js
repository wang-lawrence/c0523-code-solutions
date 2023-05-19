/* exported equal */
function equal(first, second) {
  const maxArrayLength = Math.max(first.length, second.length);
  for (let i = 0; i < maxArrayLength; i++) {
    if (first[i] != second[i]) {
      return false;
    }
  }
  return true;
}
