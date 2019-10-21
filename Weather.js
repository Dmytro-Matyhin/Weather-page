const weatherForm = document.getElementById("Weather_form");
const weatherLog = document.getElementById("weather_log");
const weatherCityInput = document.getElementById("Weather_city");

weatherForm.addEventListener('submit', function (event) {
  event.preventDefault();

  if (weatherCityInput.value.length < 1) {
    return;
  }

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${weatherCityInput.value}&appid=ad5b0cd740d3f3935c4525029e6ba688&units=metric`)
    .then((response) => response.json())
    .then((jsonData) => {
      const country = jsonData.sys.country;
      const city = jsonData.name;
      const temp = jsonData.main.temp;
      const showWeather = `${city}, ${country}, ${temp} °C`
      weatherLog.innerText = showWeather;
    })
    .catch(() => {
      weatherLog.innerText = "error";
    });
});
