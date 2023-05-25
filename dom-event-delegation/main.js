const $tasklist = document.querySelector('.task-list');

function removeList(event) {

  console.log('the event target is: ', event.target);
  console.log('the event target tag name is:', event.target.tagName);

  if (event.target.matches("ul li button")) {
    console.log('Closest: ', event.target.closest('.task-list-item'));
    event.target.closest('.task-list-item').remove();
  }
}

$tasklist.addEventListener('click', removeList);
