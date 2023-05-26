const $tabContainer = document.querySelector('.tab-container');
const $tab = document.querySelectorAll('.tab');
const $view = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', activateTab);

function activateTab (event) {

  if (!event.target.matches('.tab')) {
    return;
  }

  for (let i = 0; i < $tab.length; i++) {
    debugger;
    if (event.target == $tab[i]) {
        $tab[i].classList.add('active')
    } else {
        $tab[i].classList.remove('active')
    }
  }

  const dataView = event.target.getAttribute('data-view');

  for (let i = 0; i < $view.length; i++) {
    if (dataView == $view[i].getAttribute('data-view')) {
        $view[i].classList.remove('hidden');
    } else {
        $view[i].classList.add('hidden');
    }
  }
}
