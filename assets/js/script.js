
// const weatherBody = document.getElementById('weather-info'); 

// const { all } = require("../../../../SMU-VIRT-FSF-PT-05-2024-U-LOLC/11-Express/01-Activities/22-Stu_Modular-Routing/Unsolved/routes");

// targeting input and button
const storageInput = document.querySelector('.form-control');
const text = document.querySelector('#search-history');
const button = document.querySelector('#searchbtn');
const storedInput = localStorage.getItem('textinput');
const searchbtn = document.getElementById('searchbtn');
const citySearch = document.getElementById('city-search');

if(storageInput) {
    text.textContent = storedInput
}

storageInput.addEventListener('input', () => {
    localStorage.setItem('textinput', storageInput.value);
});

const saveToLocalStorage = () => {
    let allCities = JSON.parse(localStorage.getItem('previousCities')) || [];
    allCities.push(citySearch.value);
    localStorage.setItem('previousCities', JSON.stringify(allCities));
    displaySearchHistory();
};

button.addEventListener('click', () => { 
    saveToLocalStorage();
    displaySearchHistory();

});

const displaySearchHistory = () => {
    let allCities = JSON.parse(localStorage.getItem('previousCities')) || [];
    const historyContainer = document.getElementById('search-history');

    historyContainer.innerHTML = '';

    allCities.forEach(city => {
        const cityElement = document.createElement('div');
        cityElement.textContent = city;
        
        historyContainer.appendChild(cityElement);
    });
    
};





// function updateSearchHistory(search) {
//     let searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];
    
//     searchHistory.unshift(search);
    
    
//     localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
    
//     renderSearchHistory(searchHistory);
// }

// function renderSearchHistory(searchHistory) {
//     let searchHistoryList = document.getElementById('search-history');
    
//     searchHistoryList.innerHTML = '';
    
//     searchHistory.forEach((searchItem) => {
//         let li = document.createElement('li');
//         li.textContent = searchItem;
//         searchHistoryList.appendChild(li);
//     });
// }
// function onSubmit(event) {
//     event.preventDefault();

//     let search = citySearch.value;
//     localStorage.setItem("city", search);

//     updateSearchHistory(search);

//     weatherCood(search);
// }

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
                 src="https://openweathermap.org/img/wn/${day.weather[0].icon
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