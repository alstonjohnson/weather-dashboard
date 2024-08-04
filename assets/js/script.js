
// const weatherBody = document.getElementById('weather-info'); 
// targeting input and button
const searchbtn = document.getElementById('searchbtn');
const citySearch = document.getElementById('city-search');

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

            row.innerHTML = data.list
                .map((day, idx) => {
                    if(idx <= 4) {
                        let dt = new Date(day.dt * 1000);
                    return `<div class="col">
             <div class="card">
               <h5 class="card-title p-2">${dt.toDateString()}</h5>
               <img
                 src="http://openweathermap.org/img/wn/10d@4x.png"
                 class="card-img-top"
                 alt="Weather description"
               />
               <div class="card-body">
                  <h3 class="card-title">Temp - ${day.main.temp}</h3>
                  <p class="card-text">Humidty - ${day.main.humidity}</p>
                  <p class="card-text">Wind speed - ${day.wind.speed}</p>
                </div>
             </div>
           </div>`; 
                    }
                })
                .join(' ');
            }
            )
        }

function onSubmit(event) {
    event.preventDefault(); 
  

let search = citySearch.value;
localStorage.setItem("city", search);

console.log(search);
weatherCood(search);
}

searchbtn.addEventListener("click", onSubmit);