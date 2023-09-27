const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;
const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
if (isDarkMode) {
    body.classList.add('dark-mode');
    darkModeToggle.checked = true;
}
darkModeToggle.addEventListener('change', () => {
    if (darkModeToggle.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled');
    }
});


const apiKey="a0acc13f8e2f41b78b2152817231509";

const date = new Date();
let currentDay= String(date.getDate()).padStart(2, '0');
let currentMonth = String(date.getMonth()+1).padStart(2,"0");
let currentYear = date.getFullYear();
// we will display the date as DD-MM-YYYY 
let currentDate = `${currentYear}-${currentMonth}-${currentDay}`;

console.log(currentDate);
console.log(`${currentYear}-${currentMonth}-${Number(currentDay)+1}`);

        const apiUrl="http://api.weatherapi.com/v1/current.json?key=";
        const apiUrlF="http://api.weatherapi.com/v1/forecast.json?key=";
        const apiUrlH="http://api.weatherapi.com/v1/history.json?key=";

        const searchBox=document.querySelector(".search input");
        const searchBtn=document.querySelector(".search button");

        const weatherIcon=document.querySelector(".weather-icon");

        async function checkWeather(city){
            const response=await fetch(apiUrl+`${apiKey}&q=`+city);
            var data=await response.json();

            const response2=await fetch(apiUrlF+`${apiKey}&q=`+city+`&days=8`);
            var data2=await response2.json();

            const response3=await fetch(apiUrlH+`${apiKey}&q=`+city+`&dt=`+currentDate);
            var data3=await response3.json();

            console.log(data);
            console.log(data2);
            console.log(data3);

            document.querySelector(".date2").innerHTML=data2.forecast.forecastday[1].date;
            document.querySelector(".date3").innerHTML=data2.forecast.forecastday[2].date;
            document.querySelector(".date4").innerHTML=data2.forecast.forecastday[3].date;
            document.querySelector(".date5").innerHTML=data2.forecast.forecastday[4].date;
            document.querySelector(".date6").innerHTML=data2.forecast.forecastday[5].date;

            document.querySelector(".humidity2").innerHTML=data2.forecast.forecastday[1].day.avghumidity+"%";
            document.querySelector(".humidity3").innerHTML=data2.forecast.forecastday[2].day.avghumidity+"%";
            document.querySelector(".humidity4").innerHTML=data2.forecast.forecastday[3].day.avghumidity+"%";
            document.querySelector(".humidity5").innerHTML=data2.forecast.forecastday[4].day.avghumidity+"%";
            document.querySelector(".humidity6").innerHTML=data2.forecast.forecastday[5].day.avghumidity+"%";

            document.querySelector(".tempreature2").innerHTML=data2.forecast.forecastday[1].day.avgtemp_c + "°C";
            document.querySelector(".tempreature3").innerHTML=data2.forecast.forecastday[2].day.avgtemp_c + "°C";
            document.querySelector(".tempreature4").innerHTML=data2.forecast.forecastday[3].day.avgtemp_c + "°C";
            document.querySelector(".tempreature5").innerHTML=data2.forecast.forecastday[4].day.avgtemp_c + "°C";
            document.querySelector(".tempreature6").innerHTML=data2.forecast.forecastday[5].day.avgtemp_c + "°C";

            document.querySelector(".wind-speed2").innerHTML=Math.round(data2.forecast.forecastday[1].day.maxwind_kph) + " km/h";
            document.querySelector(".wind-speed3").innerHTML=Math.round(data2.forecast.forecastday[2].day.maxwind_kph) + " km/h";
            document.querySelector(".wind-speed4").innerHTML=Math.round(data2.forecast.forecastday[3].day.maxwind_kph) + " km/h";
            document.querySelector(".wind-speed5").innerHTML=Math.round(data2.forecast.forecastday[4].day.maxwind_kph) + " km/h";
            document.querySelector(".wind-speed6").innerHTML=Math.round(data2.forecast.forecastday[5].day.maxwind_kph) + " km/h";
        

            document.querySelector(".city").innerHTML = data.location.name;
            document.querySelector(".temp").innerHTML = data.current.temp_c + "°C";
            document.querySelector(".humidity").innerHTML = data.current.humidity + "%";
            document.querySelector(".wind").innerHTML = data.current.wind_kph + " km/h";

            document.querySelector(".uv").innerHTML = data.current.uv + "eV";
            document.querySelector(".pressure").innerHTML = data.current.pressure_mb;
            document.querySelector(".vision").innerHTML = data.current.vis_km ;
            document.querySelector(".feelslike").innerHTML = data.current.feelslike_c;

            document.querySelector(".tom-temp").innerHTML = data2.forecast.forecastday[1].day.avgtemp_c + "°C";
            document.querySelector(".t-humidity").innerHTML = data2.forecast.forecastday[1].day.avghumidity + "%";
            document.querySelector(".t-wind").innerHTML = Math.round(data2.forecast.forecastday[1].day.maxwind_kph) + " km/h";
            document.querySelector(".t-rain").innerHTML = data2.forecast.forecastday[1].day.daily_chance_of_rain + "%";
            document.querySelector(".t-uv").innerHTML = data2.forecast.forecastday[1].day.uv + "eV";

            document.querySelector(".yest-temp").innerHTML = data3.forecast.forecastday[0].day.avgtemp_c + "°C";
            document.querySelector(".y-humidity").innerHTML = data3.forecast.forecastday[0].day.avghumidity + "%";
            document.querySelector(".y-wind").innerHTML = Math.round(data3.forecast.forecastday[0].day.maxwind_kph) + " km/h";
            document.querySelector(".y-vision").innerHTML = data3.forecast.forecastday[0].day.avgvis_km + " km";
            document.querySelector(".y-uv").innerHTML = data3.forecast.forecastday[0].day.uv + "eV";

            if(data.current.condition.code== 1000){
                weatherIcon.src= "day/113.png";
            }else if(data.current.condition.code== 1003){
                weatherIcon.src= "day/116.png";
            }else if(data.current.condition.code== 1240){
                console.log("done");
                weatherIcon.src= "day/353.png";
            }else if(data.current.condition.code== 1006){
                weatherIcon.src= "day/119.png";
            }else if(data.current.condition.code== 1009){
                weatherIcon.src= "day/122.png";
            }else if(data.current.condition.code== 1030){
                weatherIcon.src= "day/143.png";
            }else if(data.current.condition.code== 1063){
                weatherIcon.src= "day/176.png";
            }else if(data.current.condition.code== 1066){
                weatherIcon.src= "day/179.png";
            }else if(data.current.condition.code== 1069){
                weatherIcon.src= "day/182.png";
            }else if(data.current.condition.code== 1072){
                weatherIcon.src= "day/185.png";
            }else if(data.current.condition.code== 1087){
                weatherIcon.src= "day/200.png";
            }else if(data.current.condition.code== 1114){
                weatherIcon.src= "day/227.png";
            }else if(data.current.condition.code== 1117){
                weatherIcon.src= "day/230.png";
            }else if(data.current.condition.code== 1135){
                weatherIcon.src= "day/248.png";
            }else if(data.current.condition.code== 1147){
                weatherIcon.src= "day/260.png";
            }else if(data.current.condition.code== 1150){
                weatherIcon.src= "day/263.png";
            }else if(data.current.condition.code== 1153){
                weatherIcon.src= "day/266.png";
            }else if(data.current.condition.code== 1168){
                weatherIcon.src= "day/281.png";
            }else if(data.current.condition.code== 1171){
                weatherIcon.src= "day/284.png";
            }else if(data.current.condition.code== 1180){
                weatherIcon.src= "day/293.png";
            }else if(data.current.condition.code== 1183){
                weatherIcon.src= "day/296.png";
            }else if(data.current.condition.code== 1186){
                weatherIcon.src= "day/299.png";
            }else if(data.current.condition.code== 1189){
                weatherIcon.src= "day/302.png";
            }else if(data.current.condition.code== 1192){
                weatherIcon.src= "day/305.png";
            }else if(data.current.condition.code== 1195){
                weatherIcon.src= "day/308.png";
            }else if(data.current.condition.code== 1198){
                weatherIcon.src= "day/311.png";
            }else if(data.current.condition.code== 1201){
                weatherIcon.src= "day/314.png";
            }else if(data.current.condition.code== 1204){
                weatherIcon.src= "day/317.png";
            }else if(data.current.condition.code== 1207){
                weatherIcon.src= "day/320.png";
            }else if(data.current.condition.code== 1210){
                weatherIcon.src= "day/323.png";
            }else if(data.current.condition.code== 1213){
                weatherIcon.src= "day/326.png";
            }else if(data.current.condition.code== 1216){
                weatherIcon.src= "day/329.png";
            }else if(data.current.condition.code== 1219){
                weatherIcon.src= "day/332.png";
            }else if(data.current.condition.code== 1222){
                weatherIcon.src= "day/335.png";
            }else if(data.current.condition.code== 1225){
                weatherIcon.src= "day/338.png";
            }else if(data.current.condition.code== 1237){
                weatherIcon.src= "day/350.png";
            }else if(data.current.condition.code== 1243){
                weatherIcon.src= "day/356.png";
            }else if(data.current.condition.code== 1246){
                weatherIcon.src= "day/359.png";
            }else if(data.current.condition.code== 1249){
                weatherIcon.src= "day/362.png";
            }else if(data.current.condition.code== 1252){
                weatherIcon.src= "day/365.png";
            }else if(data.current.condition.code== 1255){
                weatherIcon.src= "day/368.png";
            }else if(data.current.condition.code== 1258){
                weatherIcon.src= "day/371.png";
            }else if(data.current.condition.code== 1261){
                weatherIcon.src= "day/374.png";
            }else if(data.current.condition.code== 1264){
                weatherIcon.src= "day/377.png";
            }else if(data.current.condition.code== 1273){
                weatherIcon.src= "day/386.png";
            }else if(data.current.condition.code== 1276){
                weatherIcon.src= "day/389.png";
            }else if(data.current.condition.code== 1279){
                weatherIcon.src= "day/392.png";
            }else if(data.current.condition.code== 1282){
                weatherIcon.src= "day/395.png";
            }

        }

        searchBtn.addEventListener("click",()=>{
            checkWeather(searchBox.value);
        });
        