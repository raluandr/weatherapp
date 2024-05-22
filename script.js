async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = 'db2a74cc1dcb243153a952cac4aee5a7'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const weatherData = await response.json();
        displayWeather(weatherData);
    } catch (error) {
        document.getElementById('weather-info').innerHTML = `<p>${error.message}</p>`;
    }
}

function displayWeather(data) {
    const weatherInfo = document.getElementById('weather-info');
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;

    weatherInfo.innerHTML = `
        <img src="http://openweathermap.org/img/wn/${icon}@2x.png" alt="Weather Icon" class="weather-icon">
        <p>Temperature: ${temperature}°C</p>
        <p>Description: ${description}</p>
        <p>Humidity: ${humidity}%</p>
        <p>Wind Speed: ${windSpeed} m/s</p>
    `;
}

