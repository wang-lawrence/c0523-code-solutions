/* exported isPalindromic */
function isPalindromic(string) {
  const noSpace = string.replaceAll(" ", "");
  for (let i = 0; i < noSpace.length / 2; i++) {
    if (noSpace[i] === noSpace.at(-i - 1)) {
    } else {
      return false;
    }
  }
  return true;
}
