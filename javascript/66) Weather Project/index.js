
const weatherForm = document.querySelector(".weather-form");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");

const apiKey = "e9da8da4e9a7a626cf9251f7896f5b25";

weatherForm.addEventListener("submit", async event =>{

  event.preventDefault();

  const city = cityInput.value;

  if(city){
    try {
      const weatherData = await getWeatherData(city);
      displayWeatherInfo(weatherData);
    }
    catch (error) {
      console.error(error);
      errorDisplay(error + ", Check Your Internet Connection!");
    }
  }
  else{
    errorDisplay("Please enter a city!");
  }

})

async function getWeatherData(city){
  
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  const res = await fetch(apiUrl);

  if(!res.ok){
    throw new Error("Couldn't fetch weather data!");
  }
  else{
    return await res.json();
    
  }

}

function displayWeatherInfo(data){

  const {
    name:city,
    main:{temp,humidity},
    weather:[{description,id}]
  } = data;

console.log(id)

  card.textContent = "";
  card.style.display = "flex";

  const cityDisplay = document.createElement("h1");
  const tempDisplay = document.createElement("p");
  const humidityDisplay = document.createElement("p");
  const descDisplay = document.createElement("p");
  const weatherIcon = document.createElement("p");

  cityDisplay.textContent = city;
  cityDisplay.className = "cityDisplay";

  tempDisplay.textContent = `${(temp - 273.15).toFixed(1)}°C`;
  //tempDisplay.textContent = `${((temp - 273.15) * (9/5) + 32).toFixed(1)}°F`;
  tempDisplay.className = "tempDisplay";

  humidityDisplay.textContent = `Humidity : ${humidity}%`;
  humidityDisplay.className = "humidityDisplay";

  descDisplay.textContent = description;
  descDisplay.className = "descDisplay";

  weatherIcon.textContent = getWeatherIcon(id);
  weatherIcon.className = "weatherIcon";

  card.appendChild(cityDisplay);
  card.appendChild(tempDisplay);
  card.appendChild(humidityDisplay);
  card.appendChild(descDisplay);
  card.appendChild(weatherIcon);

}

function getWeatherIcon(weatherId){

  switch(true){
    case (weatherId >= 200 && weatherId < 300):
      return '⛈️';

    case (weatherId >= 300 && weatherId < 400):
      return '🌧️';

    case (weatherId >= 500 && weatherId <=600):
      return '🌧️';

    case (weatherId >= 600 && weatherId < 700):
      return '❄️';

    case (weatherId >= 700 && weatherId < 800):
      return '🌫️';

    case (weatherId === 800):
      return '☀️';

    case (weatherId >= 801 && weatherId < 810):
    return '☁️';

    default:
      return '❓';
  }

}

function errorDisplay(message){

  const errorMsg = document.createElement("p");
  errorMsg.textContent = message;
  errorMsg.className = "errorDisplay";

  card.textContent = "";
  card.style.display = "flex";
  card.appendChild(errorMsg);

}