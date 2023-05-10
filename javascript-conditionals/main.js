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

    default:
      return false;

  }
}

function isEven(number) {
  switch(0){
    case (number % 2):
      return true;

    default:
      return false;

  }
}

function startsWithJ(string) {
  switch(string[0]){
    case('J'):
      return true;

    default:
      return false;

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

    default:
      return false;

  }
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

    case('dot'):
      return 'I\'m cute~';

    default:
      return 'Goodnight everybody!';

  }
};

function recommendMovie(genre) {
  switch(genre){
    case('action'):
      return 'Top Gun: Maverick';

    case('comedy'):
      return 'Bridesmaid';

    case('horror'):
      return 'Saw';

    case('drama'):
      return 'Cast Away';

    case('musical'):
      return 'La La Land';

    case('sci-fi'):
      return 'Dune';

    default:
      return 'Genre not recognized. Choose between action, comedy, horror, drama, musical, or sci-fi';

  }
};
