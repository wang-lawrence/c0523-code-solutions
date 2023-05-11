/* exported numVowels */
function numVowels(string) {
  const regex = /[aeiou]/ig;
  const allVowels = string.match(regex);
  return allVowels == null ? 0 : allVowels.length;
}
