
// const weatherBody = document.getElementById('weather-info'); 
// targeting input and button
const searchbtn = document.getElementById('searchbtn');
const citySearch = document.getElementById('city-search');
console.log("weatherdashboard");

function weatherCood(search) {
console.log(search);
let units = 'imperial';
let requestUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${search}&appid=43fece3568ad612b63990ffde119096a&units=${units}`;
fetch(requestUrl)
        .then(function(data) {
            return data.json();
        })
        .then(function(data) {
            console.log(data);
            let row = document.querySelector('#weather-info');
            // let row2 = document.querySelector('#weather-info2');
            // let row3 = document.querySelector('#weather-info3');
            // let row4 = document.querySelector('#weather-info4');

            row.innerHTML = data.list
                .map((day, idx) => {
                    if(idx <= 4) {
                    return `<div class="col">
             <div class="card" style="width: 30vw">
               <h5 class="card-title p-2">Date</h5>
               <img
                 src="http://openweathermap.org/img/wn/10d@4x.png"
                 class="card-img-top"
                 alt="Weather description"
               />
               <div class="card-body">
                  <h3 class="card-title">temp</h3>
                  <p class="card-text">feels_like</p>
                  <p class="card-text">temp_max</p>
                  <p class="card-text">temp_min</p>
                  <p class="card-text">Humidty</p>
                  <p class="card-text">UV Index</p>
                  <p class="card-text">Precipitation</p>
                  <p class="card-text">Dew Point</p>
                  <p class="card-text">Wind speed and direction</p>
                  <p class="card-text">Sunrise</p>
                  <p class="card-text">Sunset</p>
                </div>
             </div>
           </div>`; 
                    }
                })
                .join(' ');

            // row.innerHTML = data.main.feels_like;
            // row2.innerHTML = data.main.temp;
            // row.innerHTML = data.main.temp_max;
            // row.innerHTML = data.main.temp_min;

            // let row2 = document.querySelector('#weather-info2');


                    // return 
        //             
          
            }
            )
            // .join(' ');


            // const currentWeather = document.createElement('table');
            // currentWeather.textContent = 'Current: ' + data.currentConditions.conditions + ' Temp: ' + data.currentConditions.temp + 'F° Feels Like:' + data.currentConditions.feelslike + 'F°';
            // weatherBody.appendChild(currentWeather);

        }




// function weatherApi() {
//     console.log(search);
//     const requestUrl = 'https://api.openweathermap.org/data/3.0/onecall?lat=32.808180&lon=--95.391150&appid=e43fec3568ad612b63990ffde119096a'
//         fetch(requestUrl)
//         .then(function(response) {
//             return response.json();
//         })
//         .then(function(data) {
//             console.log(data);
            
    //     })
    // }

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