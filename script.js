const key = '91fe9b02889fc55b81658400de704abb';
const form = document.getElementById('form');
const search = document.getElementById('search');

// adding event listener in form
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const cityName = search.value.trim();
  if (!cityName) {
    // init();
    alert("There is nothing to search");
  }
  else {
    searchWeather(cityName);
  }
});

// fetch api
const searchWeather = async cityName => {
  const searchResult = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`);
  const data = await searchResult.json();
  displayWeather(data);
}

// displaying data 
const displayWeather = data => {
  const weatherStatus = document.querySelector(".weather-status");
  weatherStatus.innerHTML = `
<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
<h1>${data.name}</h1>
<h3><span>${(data.main.temp - 273.15).toFixed(2)}</span>&deg;C</h3>
<h1 class="lead">${data.weather[0].main}</h1>`
}