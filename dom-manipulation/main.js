let clickCount = 0;

const $hotButton = document.querySelector(".hot-button")
const $clickCount = document.querySelector('.click-count');

function incrementClickCount(event) {
  clickCount += 1;
}

function updateClickCountDisplay(event) {
  incrementClickCount(event);
  $clickCount.textContent = 'Clicks: ' + clickCount;
  changeButtonColor(event);
}

function changeButtonColor(event) {
  switch (true) {
    case clickCount < 4:
      $hotButton.className = 'hot-button cold';
      break;
    case clickCount < 7:
      $hotButton.className = 'hot-button cool';
      break;
    case clickCount < 10:
      $hotButton.className = 'hot-button tepid';
      break;
    case clickCount < 13:
      $hotButton.className = 'hot-button warm';
      break;
    case clickCount < 16:
      $hotButton.className = 'hot-button hot';
      break;
    default:
      $hotButton.className = 'hot-button nuclear';
      break;
  }
}

function updatePageDisplay(event) {
  incrementClickCount(event);
  updateClickCountDisplay(event);
  changeButtonColor(event);
}

$hotButton.addEventListener('click', updatePageDisplay);
