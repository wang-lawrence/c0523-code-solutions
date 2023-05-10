/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */
function isUnderFive(number){
   switch(true) {
    case(number < 5):
      return true;
      break;
    default:
      return false;
      break;
  }
}

function isEven(number) {
  switch(0){
    case (number % 2):
      return true;
      break;
    default:
      return false;
      break;
  }
}

function startsWithJ(string) {
  switch(string[0]){
    case('J'):
      return true;
      break;
    default:
      return false;
      break;
  }
}

function isOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
};

function isOldEnoughToDrive(person){
  switch(true){
    case(person.age >= 16):
      return true;
      break;
    default:
      return false;
      break;
  }
};

function isOldEnoughToDrinkAndDrive(person) {
  return false;
};

function isOldEnoughToDrinkAndDrive(person) {
  return false;
};

function categorizeAcidity(pH) {
  if (pH === 7){
    return 'neutral';
  } else if (pH < 7 && pH >= 0){
    return 'acid'
  } else if (pH > 7 && pH <= 14){
    return 'base'
  } else {
    return 'invalid pH level'
  }
};

function introduceWarnerBro(name) {
  switch(name){
    case('yakko'):
    case('wakko'):
      return 'We\'re the warner brothers!';
      break;
    case('dot'):
      return 'I\'m cute~';
      break;
    default:
      return 'Goodnight everybody!';
      break;
  }
};

function recommendMovie(genre) {
  switch(genre){
    case('action'):
      return 'Top Gun: Maverick';
      break;
    case('comedy'):
      return 'Bridesmaid';
      break;
    case('horror'):
      return 'Saw';
      break;
    case('drama'):
      return 'Cast Away';
      break;
    case('musical'):
      return 'La La Land';
      break;
    case('sci-fi'):
      return 'Dune';
      break;
    default:
      return 'Genre not recognized. Choose between action, comedy, horror, drama, musical, or sci-fi';
      break;
  }
};
