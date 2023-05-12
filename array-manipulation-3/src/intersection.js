/* exported intersection */
function intersection(first, second) {
  const differentWords = difference(first, second);
  const allWords = [...first, ...second];
  const intersectWords = [];
  for (let i = 0; i < allWords.length; i++) {
    if (differentWords.indexOf(allWords[i]) == -1) {
      intersectWords.push(allWords[i]);
    }
  }
  return unique(intersectWords);
}
