const data = [];

function getData() {
  const targetUrl = encodeURIComponent(
    'https://developer.nps.gov/api/v1/parks?parkCode=yose&limit=50'
  );
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://lfz-cors.herokuapp.com/?url=' + targetUrl);
  xhr.setRequestHeader('X-Api-Key', 'HEqLaQkujBH0fhLzsow81gtPfMLkLEOvPOGHxx2j');
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    console.log(xhr.status);
    console.log(xhr.response);
    $body = document.querySelector('body');
    for (let i = 0; i < xhr.response.data.length; i++) {
      // if (xhr.response.data[i].images.length > 0) {
        for (let j = 0; j < xhr.response.data[i].images.length; j++) {
          $img = document.createElement('img');
          $img.setAttribute('src', xhr.response.data[i].images[j].url);
          $img.style.width = '20rem';
          $body.appendChild($img);
      }
    }
    // for (let i = 0; i < xhr.response.data.length; i++) {
    //   const park = {
    //     name: xhr.response.data[i].name,
    //     parkCode: xhr.response.data[i].parkCode,
    //     designation: xhr.response.data[i].designation,
    //   };
    //   data.push(park);
    // }
    // const dataJSON = JSON.stringify(data);
    // localStorage.setItem('npsParks', dataJSON);
    // console.log(data);
  });
  xhr.send();
}

getData();

function getWeatherData() {
  const xhr = new XMLHttpRequest();
  xhr.open(
    'GET',
    'https://api.tomorrow.io/v4/timelines?location=40.758,-73.9855&fields=temperature,windSpeed,precipitationIntensity,weatherCode&timesteps=current,1d&units=imperial&timezone=America/Los_Angeles&apikey=bpvSnlVb8VniaV1uCGU8h3mC3R18i2eM'
  );
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    console.log(xhr.response);
  });

  xhr.send();
}

// getWeatherData();
