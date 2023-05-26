const $tabContainer = document.querySelector('.tab-container');
const $tab = document.querySelectorAll('.tab');
const $view = document.querySelectorAll('.view');

function activateTab (event) {

  const dataView = event.target.getAttribute('data-view');

  if (event.target.matches('.tab')) {
    for (let i = 0; i < $tab.length; i++) {
      if (event.target == $tab[i]) {
        $tab[i].classList.add('active')
      } else {
        $tab[i].classList.remove('active')
      }
    }

    for (let i = 0; i < $view.length; i++) {
      if (dataView == $view[i].getAttribute('data-view')) {
        $view[i].classList.remove('hidden');
      } else {
        $view[i].classList.add('hidden');
      }
    }
  }
}

$tabContainer.addEventListener('click', activateTab)
