const $userList = document.querySelector("#user-list");
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users')
xhr.responseType ='json';
xhr.send();

xhr.addEventListener('load', onLoad);

function onLoad() {
  console.log('status of the http request: ', xhr.status);
  console.log('response of the http request: ', xhr.response);
  for (let i = 0; i < xhr.response.length; i++) {
    const $li = document.createElement('li');
    $li.textContent = xhr.response[i].name;
    $userList.appendChild($li);
  }
}
