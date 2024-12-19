const apikey ="bb39119e5f16aacc8475d9b5a3df15d7";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox =document.querySelector(".search input");
const searchbtn =document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");



async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";

    }
    else{
    var data = await response.json();

    document.querySelector(".city").innerHTML =data.name;
    document.querySelector(".temp").innerHTML =Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML =data.main.humidity + "%";
    document.querySelector(".wind").innerHTML =data.wind.speed + " km/h";  
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";

}}


searchbtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
