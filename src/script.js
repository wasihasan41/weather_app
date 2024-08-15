const API_KEY = '4553a38df853cb0639c7ef21f6eba2be';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather?units=metric';
let searchBar = document.querySelector('.search');
let button = document.querySelector('.button');
let city = document.querySelector('.city');
let temp = document.querySelector('.temp');
let humid =  document.querySelector('.humid');
let wind = document.querySelector('.wind');
let image = document.querySelector('.icon');
let getLocation =async function () {
        let response = await fetch(`${API_URL}&q=${searchBar.value}&appid=${API_KEY}`);
        let data = await response.json();
        console.log(data);
        if (data.cod  == "200" ) {     
                temp.innerHTML = `${data.main.temp} &deg; C `;
                humid.innerHTML = `${data.main.humidity} &percnt;`;
                wind.innerHTML = `${data.wind.speed} Km/h `;
                city.innerText = searchBar.value;
                searchBar.value="";   
        }
        else{
                city.innerText = "search a valid city";
                temp.innerHTML = '';
                humid.innerHTML = 'N/A';
                wind.innerHTML = 'N/A';
                searchBar.value = ''; 
                image.removeAttribute("src"); 
                
        }
        if (data.weather[0].icon === "01n") {
                image.setAttribute("src" ,"/assets/01d.png");
        }else if (data.weather[0].icon === "02n") {
                image.setAttribute("src" ,"/assets/02d.png");
        }else if (data.weather[0].icon === "03n") {
                image.setAttribute("src" ,"/assets/03d.png");
        }else if (data.weather[0].icon === "04n") {
                image.setAttribute("src" ,"/assets/04d.png");
        }else if (data.weather[0].icon === "09n") {
                image.setAttribute("src" ,"/assets/09d.png");
        }else if (data.weather[0].icon === "10n") {
                image.setAttribute("src" ,"/assets/10d.png");
        }else if (data.weather[0].icon === "11n") {
                image.setAttribute("src" ,"/assets/11d.png");
        }else if (data.weather[0].icon === "13n") {
                image.setAttribute("src" ,"/assets/13d.png");
        }else if (data.weather[0].icon === "50n") {
                image.setAttribute("src" ,"/assets/50d.png");
        }else{
                console.log("no city")
        }
}        
button.addEventListener("click", getLocation);