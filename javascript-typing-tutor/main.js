const $letter = document.querySelectorAll('span');
const $message = document.querySelector('.message');
const $resetButton = document.querySelector('.reset-button');

let i = 0;
let typeCount = 0;

function checky(event) {

typeCount ++;

if (i < $letter.length){

  if ($letter[i].textContent == event.key) {
    $letter[i].classList.remove('red');
    $letter[i].classList.add('green');
    $letter[i].classList.remove('underline');

    if (i < $letter.length - 1) {
      $letter[i + 1].classList.add('underline');
      i++;
    } else {
      i++;
    }
    } else {
    $letter[i].classList.add('red');
  }

  switch (true) {
    case i / $letter.length < 0.25:
      $message.textContent = 'Begin typing to get started!';
      break;
    case i / $letter.length < 0.5:
      $message.textContent = 'Picking up steam!';
      break;
    case i / $letter.length < 0.75:
      $message.textContent = 'Halfway there, keep it up!';
      break;
    case i / $letter.length < 0.9:
      $message.textContent = "You're almost there!";
      break;
    case i / $letter.length == 1:
      $message.textContent = 'Well done! Your typing accuracy was ' + Math.round(i / typeCount * 100) + '%.';
      break;
  }
 }
}

function reload (event) {
  location.reload();
}

document.addEventListener('keydown', checky);
$resetButton.addEventListener('click', reload)
