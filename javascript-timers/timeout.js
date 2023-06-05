const $heading = document.querySelector('h1');
setTimeout(changeHeading, 2000);

function changeHeading() {
  $heading.textContent = 'Hello There';
};
