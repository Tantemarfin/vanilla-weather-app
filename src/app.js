function displayTemperature(response) {
  console.log(response.data);
  let temreparureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let humidityElement = document.querySelector("#humidity");
  let descriptionElement = document.querySelector("#description");
  let windElement = document.querySelector("#wind");
  temreparureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  humidityElement.innerHTML = Math.round(response.data.main.humidity);
  descriptionElement.innerHTML = response.data.weather[0].description;
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "b129a7ea444c03743ffd270a55b06b87";
let apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?q=Odessa&units=metric&appid=";

axios.get(apiUrl + apiKey + "&units=metric").then(displayTemperature);
