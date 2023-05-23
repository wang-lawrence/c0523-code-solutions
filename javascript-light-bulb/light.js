const $background = document.querySelector('#background');
const $circle = document.querySelector('#circle');

function lightBulb(event) {

  if (Array.from($background.classList).indexOf('dark-background') >= 0) {
    $background.classList.remove('dark-background');
    $background.classList.add('light-background');
    $circle.classList.remove('dark-circle');
    $circle.classList.add('light-circle');
  } else {
    $background.classList.remove('light-background');
    $background.classList.add('dark-background');
    $circle.classList.remove('light-circle');
    $circle.classList.add('dark-circle');
  }
}

$circle.addEventListener('click', lightBulb)
