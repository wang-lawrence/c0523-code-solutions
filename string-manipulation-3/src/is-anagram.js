/* exported isAnagram */
function isAnagram(firstString, secondString) {
  const noSpaceFirst = firstString.replaceAll(' ','').split('');
  const noSpaceSecond = secondString.replaceAll(' ', '').split('');
  for(let i = 0; i < noSpaceFirst.length; i++){
    if (noSpaceSecond.indexOf(noSpaceFirst[i]) !== -1) {
      noSpaceSecond.splice(noSpaceSecond.indexOf(noSpaceFirst[i]), 1);
    }
  }
  return noSpaceSecond.length === 0;
};
