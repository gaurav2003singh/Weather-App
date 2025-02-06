const apikey = "299dfda9c8a24f0282855252250602";
const apiUrl =
  "http://api.weatherapi.com/v1/current.json?key=299dfda9c8a24f0282855252250602&q= ";

  const searchBox = document.querySelector(".search input");
  const searchBtn = document.querySelector(".search button");


 





async function checkWeather(city) { 
  const response = await fetch(apiUrl + city + `&appid=${apikey}`);
  var data = await response.json();

  console.log(data);
  document.querySelector(".city").innerHTML = data.location.name;
  document.querySelector(".temp").innerHTML = Math.round(data.current.temp_c )+ "℃";
  document.querySelector(".humidity").innerHTML = data.current.humidity + "%";
  document.querySelector(".wind").innerHTML = data.current.wind_kph + " km/hr";
}

searchBtn.addEventListener("click", () =>{
    checkWeather(searchBox.value);
})


