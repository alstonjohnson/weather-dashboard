
const weatherBody = document.getElementById('weather-info');

function weatherApi() {
    const requestUrl = 'https://api.openweathermap.org/data/3.0/onecall?lat=32.808180&lon=--95.391150&appid=43fece3568ad612b63990ffde119096a'
        fetch(requestUrl)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
            const currentWeather = document.createElement('table');
            currentWeather.textContent = 'Current: ' + data.currentConditions.conditions + ' Temp: ' + data.currentConditions.temp + 'F° Feels Like:' + data.currentConditions.feelslike + 'F°';
            weatherBody.appendChild(currentWeather);

        })
    }

weatherAPI ();

const cityInput = document.getElementById("city-search");

function onSubmit(event) {
    event.preventDefault(); 
  
    localStorage.setItem("city-search", cityInput.value);

}