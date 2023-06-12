const images = ['001', '004', '007', '025', '039'];
let imageView = 0;
let intervalTimer = 3500;

const $img = document.querySelector('img');
const $leftArrow = document.querySelector('.arrow-left');
const $rightArrow = document.querySelector('.arrow-right');
const $progressDotsContainer = document.querySelector('.progress-dots-container');
makeProgressDots();
const $progressDot = document.querySelectorAll('.fa-circle');

//make the progress dots dynamic depending on number of images
function makeProgressDots() {
  for (let i = 0; i < images.length; i++) {
    const $i = document.createElement('i');

    if (i ===0) {
      $i.className = 'fa-solid fa-circle';
    } else {
      $i.className = 'fa-regular fa-circle';
    }

    $i.setAttribute('data-view', `${i}`);
    $progressDotsContainer.appendChild($i);
  }
}

//removing and adding the scroll-right class creates the scrolling animation
function getNextImg() {
  $progressDot[imageView].classList.replace('fa-solid', 'fa-regular');
  imageView++;
  if (imageView >= images.length) {
    imageView = 0;
  }
  $img.classList.remove('scroll-right');
  $img.src = `images/${images[imageView]}.png`;
  $progressDot[imageView].classList.replace('fa-regular', 'fa-solid');
}

function imgScrolling() {
  $img.className = 'scroll-right';
  setTimeout(getNextImg, 1000);
}

let intervalId = setInterval(imgScrolling, intervalTimer);

$leftArrow.addEventListener('click', scrollLeft);

function scrollLeft(event) {
  $progressDot[imageView].classList.replace('fa-solid', 'fa-regular');
  imageView--;
  if (imageView < 0) {
    imageView = images.length - 1;
  }
  $img.src = `images/${images[imageView]}.png`;
  $progressDot[imageView].classList.replace('fa-regular', 'fa-solid');
  clearInterval(intervalId);
  intervalId = setInterval(imgScrolling, intervalTimer);
}

$rightArrow.addEventListener('click', scrollRight);

function scrollRight(event) {
  $progressDot[imageView].classList.replace('fa-solid', 'fa-regular');
  imageView++;
  if (imageView >= images.length) {
    imageView = 0;
  }
  $img.src = `images/${images[imageView]}.png`;
  $progressDot[imageView].classList.replace('fa-regular', 'fa-solid');
  clearInterval(intervalId);
  intervalId = setInterval(imgScrolling, intervalTimer);
}

$progressDotsContainer.addEventListener('click', goToView)

function goToView(event) {
  $progressDot[imageView].classList.replace('fa-solid', 'fa-regular');
  imageView = +event.target.getAttribute('data-view');
  $img.src = `images/${images[imageView]}.png`;
  $progressDot[imageView].classList.replace('fa-regular', 'fa-solid');
  clearInterval(intervalId);
  intervalId = setInterval(imgScrolling, intervalTimer);
}
