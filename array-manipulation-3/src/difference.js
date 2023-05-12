/* exported difference */
function difference(first, second) {
   const uniqueFirst = [];
   const uniqueSecond= [];
   for (let i = 0; i < first.length; i++) {
     if (second.indexOf(first[i]) == -1) {
       uniqueFirst.push(first[i]);
     }
   }
   for (let i = 0; i < second.length; i++) {
    if(first.indexOf(second[i]) == -1) {
      uniqueSecond.push(second[i]);
    }
   }

  return [...uniqueFirst, ...uniqueSecond];
}
