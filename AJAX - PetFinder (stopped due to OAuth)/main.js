function getData() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.petfinder.com/v2/animals?location=90703');
  xhr.setRequestHeader(
    'Authorization',
    'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJCMGZhUFhyUGJDZ0NiemM1cWY4OTl4d0xkRG5jZEs5a2lVVWtKSkQ4dDA1QmtsSGE5USIsImp0aSI6IjllM2Q0ODZmMWQ2OGJlNjYwZWJiYWQxNzRmYzVmOWJjYTZhMjkyNzUwY2QxYTM1ZTk5NWU5MjE4YmMzMjRjZDdkY2JjMzRhNTU2NzMyYmYwIiwiaWF0IjoxNjg2MTc5MDEwLCJuYmYiOjE2ODYxNzkwMTAsImV4cCI6MTY4NjE4MjYxMCwic3ViIjoiIiwic2NvcGVzIjpbXX0.cF2RSEU1Jx2BzNcTadh4kH16llPqZPLVFKKmE-dn6OKHgyTVVq1hcxCNPdkiD_84qa6Gp1MRsPyIx3mN8Nj_ikTzripomkGbWMfunz09s21UyB0-Fc7BgzZMzw-0sqmE4jjSEtdWS6ZLZ1RpJxMhui2Fa2GDTbHa8fHnuVsQf5hwrpYJsKAOqT6WjBSYJtNvk_TPZo40sO8DI_zz20Ni59SKKMBF94qkiWJUQQQk3GVv_xG0ufe9YZnNnJ0bjdCpntFjMsNjxJ1yQrXjo_6Lo3GPjbvuFxgFGn3fnEuL8i3zHcRfaC3Tj1Y58lUpxGsN2Ssxrk6TezWvaW8YPPs8ng'
  );
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    console.log(xhr.status);
    console.log(xhr.response);
    console.log(xhr.response.animals[0].photos.full);
    $body = document.querySelector('body');
    for (let i = 0; i < xhr.response.animals.length; i++) {
      if (xhr.response.animals[i].photos.length > 0) {
        $img = document.createElement('img');
        $img.setAttribute('src', xhr.response.animals[i].photos[0].full);
        $img.style.width = '20rem';
        $body.appendChild($img);
      }
    }})
  xhr.send();
}

function getToken() {
  let clientID = 'B0faPXrPbCgCbzc5qf899xwLdDncdK9kiUUkJJD8t05BklHa9Q';
  let secret = 'IOvjfSIcTEUXp17YFPzxNgRDQZDffQ6SuoBUMEg0';
  let data = `grant_type=client_credentials&client_id=${clientID}&client_secret=${secret}`;
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.petfinder.com/v2/oauth2/token');
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    console.log(xhr.status);
    console.log(xhr.response);
  // getData()
  });
  xhr.send(data);
}

// getToken();
getData();
