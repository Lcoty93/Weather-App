const btn = document.querySelector('#searchBox');
const textBox = document.querySelector('#textBox');
const divContainer = document.querySelector('#container');
const weatherForecast = document.querySelector('#weatherForecast');
const description = document.querySelector('#description');
const locationAt = document.querySelector('#locationAt');
const minMax = document.querySelector('#minMax');

btn.addEventListener('click', () => {
    const searchResult = textBox.value;
    weatherUpdate(searchResult);
})


function weatherUpdate(searchResult){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchResult}&APPID=KEY&units=imperial`, {mode: 'cors'})
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        locationAt.textContent = `${searchResult}, ` + response.sys.country;

        weatherForecast.textContent = Math.round(response.main.temp) + "°F";

        description.textContent = 
        "Feels like " + Math.round(response.main.feels_like) + "°F. " +
        response.weather[0].description + ". " +
        "Humidity: " + response.main.humidity + "%";
        
        minMax.textContent = "Low: " + Math.round(response.main.temp_min) + " High: " + Math.round(response.main.temp_max);

    });
}
