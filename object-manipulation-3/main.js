console.log('Lodash is loaded:', typeof _ !== 'undefined');
function playCards(cards, players) {
  const deck = [];
  const rank = ['Ace','2','3','4','5','6','7','8','9','10','Jack','Queen','King',];
  const suit = ['clubs', 'diamonds', 'hearts', 'spades'];

  //make the deck
  for (let i = 0; i < rank.length; i++) {
    for (let j = 0; j < suit.length; j++) {
      const obj = {};
      obj.rank = rank[i];
      obj.suit = suit[j];
      deck.push(obj);
    }
  }

  //shuffle the deck
  const shuffledDeck = shuffle(deck);

  //deal the cards
  const dealtCards = dealCards(shuffledDeck, cards, players);

  //count the points for each player
  const totalPoints = countPoints(dealtCards);

  const maxScore = Math.max(...totalPoints);

  //check for ties
  const winners = winnerIndex(totalPoints, maxScore);


  //log winner
  if (winners.length == 1) {
    console.log('The winner is ' + players[winners[0]] + ' with ' + maxScore + ' points.');
  } else {
    const tiedWinners = winners.map((winner) => players[winner]);
    console.log(tiedWinners.join(' and ') + ' are tied with ' + maxScore + ' points, play another hand as tiebreaker');
    console.log('Tiebreaker round:')
    playCards(cards, tiedWinners);
  }
}

function shuffle(deck) {
  const numOfCards = deck.length;
  const newDeck = deck.slice();
  const shuffledDeck = [];
  for (let i = 0; i < numOfCards; i++) {
    const randomIndex = Math.floor(Math.random() * newDeck.length);
    shuffledDeck.push(newDeck[randomIndex]);
    newDeck.splice(randomIndex, 1);
  }
  return shuffledDeck;
}

//deck is an array of card objects
//cards is a number denoting the number of cards dealt
//players is an array of players
function dealCards(deck, cards, players) {
  const newDeck = deck.slice();
  const playerNum = players.length;
  const obj = {};
  const dealtCards = [];
  //make the players
  for (let i = 0; i < playerNum; i++) {
    const playerNames = {};
    playerNames['player'] = players[i];
    dealtCards.push(playerNames);
  }
  //deal the cards
  for (let i = 0; i < cards * playerNum; i++) {
    const dealtPlayer = i % playerNum;
    const cardCount = 'card' + (1 + Math.floor(i / playerNum));
    dealtCards[dealtPlayer][cardCount] = newDeck.pop();
  }
  return dealtCards;
}

function countPoints(dealtCards) {
  const playerPoints = [];
  for (let i = 0; i < dealtCards.length; i++) {
    let points = 0;
    for (const key in dealtCards[i]) {
      if (key != 'player') {
        // do nothing if the property is player
        switch (dealtCards[i][key]['rank']) {
          case 'Ace':
            points += 11;
            break;
          case 'King':
          case 'Queen':
          case 'Jack':
            points += 10;
            break;
          default:
            points += +dealtCards[i][key]['rank'];
            break;
        }
      }
    }
    playerPoints.push(points);
  }
  return playerPoints;
}

function winnerIndex(playerPoints, maxScore) {
  const tiedIndex = [];
  for (let i = 0; i < playerPoints.length; i++) {
    if (playerPoints[i] == maxScore) {
      tiedIndex.push(i);
    }
  }
  return tiedIndex;
}
