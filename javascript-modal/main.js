const $openModalButton = document.querySelector('.modal-button');
const $noButton = document.querySelector('.no-button');
const $popup = document.querySelector('#popup');
const $overlay = document.querySelector('.dark-overlay');

function modalButtonClick (event) {
  $popup.classList.remove('hidden')
  $overlay.classList.remove('hidden')
}

function noButtonClick(event) {
  $popup.classList.add('hidden');
  $overlay.classList.add('hidden');
}

$openModalButton.addEventListener('click', modalButtonClick);
$noButton.addEventListener('click', noButtonClick);
