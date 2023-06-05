const $countdown = document.querySelector('h1');
let nextCountdownValue = +$countdown.textContent - 1;

const intervalId = setInterval(countdown, 500);

function countdown() {
  if (nextCountdownValue > 0) {
    $countdown.textContent = nextCountdownValue;
    nextCountdownValue --;
  } else {
    $countdown.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(intervalId);
  }
}
