async function getWeather() {
    try {
        const response = await fetch(
            "https://api.open-meteo.com/v1/forecast?latitude=28.6139&longitude=77.2090&current_weather=true"
        );
        const data = await response.json();
        console.log(data.current_weather);
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

getWeather();
