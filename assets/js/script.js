
const weatherBody = document.getElementById('weather-info'); 
// targeting input and button
const searchbtn = document.getElementById('searchbtn');
const citySearch = document.getElementById('city-search');
console.log("weatherdashboard");

function weatherCood(search) {
console.log(search);
let requestUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=5&appid=e43fec3568ad612b63990ffde119096a`
fetch(requestUrl)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
        })
}



function weatherApi() {
    console.log(search);
    const requestUrl = 'https://api.openweathermap.org/data/3.0/onecall?lat=32.808180&lon=--95.391150&appid=e43fec3568ad612b63990ffde119096a'
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

// weatherAPI ();

// const cityInput = document.getElementById("city-search");

function onSubmit(event) {
    event.preventDefault(); 
  

let search = citySearch.value;
localStorage.setItem("city", search);

console.log(search);
weatherCood(search);
}

searchbtn.addEventListener("click", onSubmit);