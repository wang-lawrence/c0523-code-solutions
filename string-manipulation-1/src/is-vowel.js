/* exported isVowel */
function isVowel(char) {
  const regex = /[aeiou]/i;
  return regex.test(char);
}
