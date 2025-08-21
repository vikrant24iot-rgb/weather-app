const apiKey ="4f380a07727d8c29eca78f06184426fb"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

const searchBox = document.querySelector(".search-bar");
const searchBtn = document.querySelector(".search-button");
const weatherIcon = document.querySelector(".weather-icon");

async function fetchWeather(city) {
  const response = await fetch(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`);
  if(!response.ok) {
    alert("city not found");
    return;
  }
  const data = await response.json();
  displayWeather(data);
}

function displayWeather(data) {
    document.querySelector(".city").innerText = data.name;
    document.querySelector(".temp").innerText = Math.round(data.main.temp) + "°C";

if(data.weather[0].main == "Clouds") {
    weatherIcon.src = "images/cloudy.png";
}
else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "images/sunny.png";
}
else {
    weatherIcon.src = "images/error-png.png";
}
}
searchBtn.addEventListener("click", () => {
  const city = searchBox.value;
  fetchWeather(city);
});