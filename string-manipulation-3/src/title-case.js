/* exported titleCase */
function titleCase(title) {
  const minorWords = ['and', 'or', 'nor', 'but','a', 'an','the','as', 'at', 'by','for','in','of','on','per','to'];
  const splitArr = title.split(' ');
  const newArr = [];
  for (let i = 0; i < splitArr.length; i++) {
    switch (true) {

      // special cases JavaScript and API
      case splitArr[i].toLowerCase().indexOf('javascript') !== -1:
        newArr.push(splitArr[i].toLowerCase().replace('javascript', 'JavaScript'));
        break;
      case splitArr[i].toLowerCase().indexOf('api') !== -1:
        newArr.push(splitArr[i].toLowerCase().replace('api', 'API'));
        break;

      // if first word then capitalize
      case i == 0:
        newArr.push(splitArr[i][0].toUpperCase() + splitArr[i].slice(1).toLowerCase());
        break;

      // if hyphenated then capitalize both words
      case splitArr[i].indexOf('-') !== -1:
        const hyphWords = splitArr[i].split('-');
        newArr.push(
          hyphWords[0][0].toUpperCase() +
            hyphWords[0].slice(1).toLowerCase() +
            '-' +
            hyphWords[1][0].toUpperCase() +
            hyphWords[1].slice(1).toLowerCase()
        );
        break;

      // if prior word has colon then this word is the first word of subtitle so capitalize
      case splitArr[i - 1].indexOf(':') !== -1:
        newArr.push(
          splitArr[i][0].toUpperCase() + splitArr[i].slice(1).toLowerCase()
        );
        break;

      // lower case all minor words
      case minorWords.indexOf(splitArr[i].toLowerCase()) !== -1:
        newArr.push(splitArr[i].toLowerCase());
        break;

      // captialize all other cases
      default:
        newArr.push(
          splitArr[i][0].toUpperCase() + splitArr[i].slice(1).toLowerCase()
        );
        break;
    }
  }
  return newArr.join(' ');
}

//The reuqirements of the title case exercise:
//cap first word of any title and subtitle
//cap words that are part of a hyphenated word
//cap all four letter words or more
//Javascript and API need special cases
