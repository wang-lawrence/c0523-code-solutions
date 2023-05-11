/* exported lastChars */
function lastChars(length, string) {
  return string.slice(Math.max(string.length-length,0))
  ;
}
