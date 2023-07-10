function getRandomNekoImg() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://nekos.best/api/v2/neko');
  xhr.setRequestHeader(header, value);
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    console.log(xhr.status);
    console.log(xhr.response);
    console.log(xhr.response.results[0].url);
    $img = document.createElement('img');
    $img.setAttribute('src', xhr.response.results[0].url);
    $img.style.width = '20rem';
    $body = document.querySelector('body');
    $body.appendChild($img);
  });
  xhr.send();
}

getRandomNekoImg();
