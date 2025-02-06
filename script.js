const apikey = "299dfda9c8a24f0282855252250602";
const apiUrl = "http://api.weatherapi.com/v1/current.json?key=299dfda9c8a24f0282855252250602&q=London&aqi=no";

async function checkWeather(){
    const response = await fetch(apiUrl + `&appid=${apikey}`);
    var data = await response.json();

    console.log(data);
}

checkWeather();