setInterval(countdown, 500);

function countdown() {
  $currentCountdown = document.querySelector('h1');
  nextCountdownValue = +$currentCountdown.textContent - 1;
  if (nextCountdownValue > 0) {
    $currentCountdown.textContent = nextCountdownValue;
  } else {
    $currentCountdown.textContent = '~Earth Beeeelooowww Us~';
  }
}
