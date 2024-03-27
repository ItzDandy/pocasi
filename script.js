function souradnice(latitude, longitude, buttonId) {
    const apiKey = '8e4ae8ad2d614854a99e1ff85e61ce2b';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Chyba při získávání dat z API');
            }
            return response.json();
        })
        .then(data => {
            displayWeatherData(data, buttonId);
        })
        .catch(error => {
            console.error('Chyba při získávání dat:', error.message);
        });
}

function displayWeatherData(data, buttonId) {
    const mesto = data.name;
    const teplota = data.main.temp;
    const minTeplota = data.main.temp_min;
    const maxTeplota = data.main.temp_max;
    const vlhkost = data.main.humidity;
    const rychlostvetru = data.wind.speed;
    const zatazeno = data.clouds.all;

    const weatherInfoElement = document.createElement('div');
    weatherInfoElement.id = `weather-info-${buttonId}`;
    weatherInfoElement.innerHTML = `
        <br>
        Město: ${mesto}<br>
        Teplota: ${teplota}°C<br>
        Minimální teplota: ${minTeplota}°C<br>
        Maximální teplota: ${maxTeplota}°C<br>
        Vlhkost: ${vlhkost}%<br>
        Rychlost větru: ${rychlostvetru} m/s<br>
        Zataženo: ${zatazeno}%
        <br>
    `;
    weatherInfoElement.classList.add('weather-info');

    const buttonElement = document.getElementById(buttonId);
    const existingWeatherInfoElement = document.getElementById(`weather-info-${buttonId}`);
    
    if (existingWeatherInfoElement) {
        existingWeatherInfoElement.remove();
    } else {
        buttonElement.parentNode.insertBefore(weatherInfoElement, buttonElement.nextSibling);
    }
}

document.getElementById('praha').addEventListener('click', function() {
    const latitude = 50.0755; 
    const longitude = 14.4378; 
    souradnice(latitude, longitude, 'praha');
});

document.getElementById('louny').addEventListener('click', function() {
    const latitude = 50.3541; 
    const longitude = 13.7959; 
    souradnice(latitude, longitude, 'louny');
});

document.getElementById('zatec').addEventListener('click', function() {
    const latitude = 50.3265; 
    const longitude = 13.5451; 
    souradnice(latitude, longitude, 'zatec');
});

document.getElementById('brno').addEventListener('click', function() {
    const latitude = 49.1951; 
    const longitude = 16.6068; 
    souradnice(latitude, longitude, 'brno');
});

document.getElementById('liberec').addEventListener('click', function() {
    const latitude = 50.7671; 
    const longitude = 15.0565; 
    souradnice(latitude, longitude, 'liberec');
});
