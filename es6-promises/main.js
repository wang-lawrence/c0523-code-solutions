import takeAChance from './take-a-chance.js';

takeAChance('Lawrence')
  .then(won => console.log(won))
  .catch(lost => console.log(lost.message));
