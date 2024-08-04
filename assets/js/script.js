
// const weatherBody = document.getElementById('weather-info'); 
// targeting input and button
const searchbtn = document.getElementById('searchbtn');
const citySearch = document.getElementById('city-search');

function updateSearchHistory(search) {
    let searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];
    
    // Add the new search to the beginning of the search history
    searchHistory.unshift(search);
    
    
    // Save the updated search history to local storage
    localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
    
    // Update the search history section on the page
    renderSearchHistory(searchHistory);
}

function renderSearchHistory(searchHistory) {
    let searchHistoryList = document.getElementById('search-history');
    
    // Clear the existing search history
    searchHistoryList.innerHTML = '';
    
    // Render each search item in the search history
    searchHistory.forEach((searchItem) => {
        let li = document.createElement('li');
        li.textContent = searchItem;
        searchHistoryList.appendChild(li);
    });
}
// Call the updateSearchHistory function inside your onSubmit function after saving the search to local storage:
function onSubmit(event) {
    event.preventDefault();

    let search = citySearch.value;
    localStorage.setItem("city", search);

    // Update search history
    updateSearchHistory(search);

    weatherCood(search);
}

function weatherCood(search) {
    console.log(search);
    let units = 'imperial';
    let requestUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${search}&appid=43fece3568ad612b63990ffde119096a&units=${units}`;
    fetch(requestUrl)
        .then(function (data) {
            return data.json();
        })
        .then(function (data) {
            console.log(data);
            let row = document.querySelector('.weather.row');

            row.innerHTML = data.list
                .map((day, idx) => {
                    if (idx <= 4) {
                        let dt = new Date(day.dt * 1000);
                        return `<div class="col">
             <div class="card">
               <h5 class="card-title p-2">${dt.toDateString()}</h5>
               <img
                 src="http://openweathermap.org/img/wn/${day.weather[0].icon
                            }@4x.png"
                  class="card-img-top"
                  alt="${day.weather[0].icon}"
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