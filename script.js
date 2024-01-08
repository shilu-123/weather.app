const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'cab41e83e8msh30f7d8874b56d0dp1571d2jsn770873a2d6a3',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
  }
};
const getWeather=(city)=>{
    cityName.innerHTML=city
    fetch(url+city, options)
	.then(res => res.json())
	.then(json => {
        // console.log(json)
        temp.innerHTML=json.temp
        temp2.innerHTML=json.temp
        feels_like.innerHTML=json.feels_like
        humidity.innerHTML=json.humidity
        humidity2.innerHTML=json.humidity
        min_temp.innerHTML=json.min_temp
        max_temp.innerHTML=json.max_temp
        wind_speed.innerHTML=json.wind_speed
        wind_speed2.innerHTML=json.wind_speed
        wind_degrees.innerHTML=json.wind_degrees
        var sunrise_stamp=json.sunrise
        var sunrise_date = new Date(sunrise_stamp * 1000);
        sunrise.innerHTML=sunrise_date.toLocaleTimeString("default")
        var sunset_stamp=json.sunset
        var sunset_date = new Date(sunset_stamp * 1000);
        sunset.innerHTML=sunset_date.toLocaleTimeString("default")
                        
    })
	.catch(err => console.error('error:' + err));
}
const getWeatherTokyo=()=>{
    fetch(url+"Tokyo", options)
	.then(res => res.json())
	.then(json => {
        temp_tokyo.innerHTML=json.temp
        feels_like_tokyo.innerHTML=json.feels_like
        humidity_tokyo.innerHTML=json.humidity
        min_temp_tokyo.innerHTML=json.min_temp
        max_temp_tokyo.innerHTML=json.max_temp
        wind_speed_tokyo.innerHTML=json.wind_speed
        wind_degrees_tokyo.innerHTML=json.wind_degrees
        var sunrise_stamp_tokyo=json.sunrise
        var sunrise_date_tokyo = new Date(sunrise_stamp_tokyo * 1000);
        sunrise_tokyo.innerHTML=sunrise_date_tokyo.toLocaleTimeString("default")
        var sunset_stamp_tokyo=json.sunset
        var sunset_date_tokyo = new Date(sunset_stamp_tokyo * 1000);
        sunset_tokyo.innerHTML=sunset_date_tokyo.toLocaleTimeString("default")
                        
    })
	.catch(err => console.error('error:' + err));
}
const getWeatherDelhi=()=>{
    fetch(url+"Delhi", options)
	.then(res => res.json())
	.then(json => {
        temp_delhi.innerHTML=json.temp
        feels_like_delhi.innerHTML=json.feels_like
        humidity_delhi.innerHTML=json.humidity
        min_temp_delhi.innerHTML=json.min_temp
        max_temp_delhi.innerHTML=json.max_temp
        wind_speed_delhi.innerHTML=json.wind_speed
        wind_degrees_delhi.innerHTML=json.wind_degrees
        var sunrise_stamp_delhi=json.sunrise
        var sunrise_date_delhi = new Date(sunrise_stamp_delhi * 1000);
        sunrise_delhi.innerHTML=sunrise_date_delhi.toLocaleTimeString("default")
        var sunset_stamp_delhi=json.sunset
        var sunset_date_delhi = new Date(sunset_stamp_delhi * 1000);
        sunset_delhi.innerHTML=sunset_date_delhi.toLocaleTimeString("default")
                        
    })
	.catch(err => console.error('error:' + err));
}
const getWeatherBoston=()=>{
    fetch(url+"Boston", options)
	.then(res => res.json())
	.then(json => {
        temp_boston.innerHTML=json.temp
        feels_like_boston.innerHTML=json.feels_like
        humidity_boston.innerHTML=json.humidity
        min_temp_boston.innerHTML=json.min_temp
        max_temp_boston.innerHTML=json.max_temp
        wind_speed_boston.innerHTML=json.wind_speed
        wind_degrees_boston.innerHTML=json.wind_degrees
        var sunrise_stamp_boston=json.sunrise
        var sunrise_date_boston = new Date(sunrise_stamp_boston * 1000);
        sunrise_boston.innerHTML=sunrise_date_boston.toLocaleTimeString("default")
        var sunset_stamp_boston=json.sunset
        var sunset_date_boston = new Date(sunset_stamp_boston * 1000);
        sunset_boston.innerHTML=sunset_date_boston.toLocaleTimeString("default")
                        
    })
	.catch(err => console.error('error:' + err));
}
const getWeatherLondon=()=>{
    fetch(url+"London", options)
	.then(res => res.json())
	.then(json => {
        temp_london.innerHTML=json.temp
        feels_like_london.innerHTML=json.feels_like
        humidity_london.innerHTML=json.humidity
        min_temp_london.innerHTML=json.min_temp
        max_temp_london.innerHTML=json.max_temp
        wind_speed_london.innerHTML=json.wind_speed
        wind_degrees_london.innerHTML=json.wind_degrees
        var sunrise_stamp_london=json.sunrise
        var sunrise_date_london = new Date(sunrise_stamp_london * 1000);
        sunrise_london.innerHTML=sunrise_date_london.toLocaleTimeString("default")
        var sunset_stamp_london=json.sunset
        var sunset_date_london = new Date(sunset_stamp_london * 1000);
        sunset_london.innerHTML=sunset_date_london.toLocaleTimeString("default")
                        
    })
	.catch(err => console.error('error:' + err));
}
const getWeatherNewYork=()=>{
    fetch(url+"New York", options)
	.then(res => res.json())
	.then(json => {
        temp_newYork.innerHTML=json.temp
        feels_like_newYork.innerHTML=json.feels_like
        humidity_newYork.innerHTML=json.humidity
        min_temp_newYork.innerHTML=json.min_temp
        max_temp_newYork.innerHTML=json.max_temp
        wind_speed_newYork.innerHTML=json.wind_speed
        wind_degrees_newYork.innerHTML=json.wind_degrees
        var sunrise_stamp_newYork=json.sunrise
        var sunrise_date_newYork = new Date(sunrise_stamp_newYork * 1000);
        sunrise_newYork.innerHTML=sunrise_date_newYork.toLocaleTimeString("default")
        var sunset_stamp_newYork=json.sunset
        var sunset_date_newYork = new Date(sunset_stamp_newYork * 1000);
        sunset_newYork.innerHTML=sunset_date_newYork.toLocaleTimeString("default")
                        
    })
	.catch(err => console.error('error:' + err));
}
const getWeatherMoscow=()=>{
    fetch(url+"Moscow", options)
	.then(res => res.json())
	.then(json => {
        temp_moscow.innerHTML=json.temp
        feels_like_moscow.innerHTML=json.feels_like
        humidity_moscow.innerHTML=json.humidity
        min_temp_moscow.innerHTML=json.min_temp
        max_temp_moscow.innerHTML=json.max_temp
        wind_speed_moscow.innerHTML=json.wind_speed
        wind_degrees_moscow.innerHTML=json.wind_degrees
        var sunrise_stamp_moscow=json.sunrise
        var sunrise_date_moscow = new Date(sunrise_stamp_moscow * 1000);
        sunrise_moscow.innerHTML=sunrise_date_moscow.toLocaleTimeString("default")
        var sunset_stamp_moscow=json.sunset
        var sunset_date_moscow = new Date(sunset_stamp_moscow * 1000);
        sunset_moscow.innerHTML=sunset_date_moscow.toLocaleTimeString("default")
                        
    })
	.catch(err => console.error('error:' + err));
}
submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather(city.value);
})
chennai.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather("Chennai");
})
bangalore.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather("Bangalore");
})
kolkata.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather("Kolkata");
})
seattle.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather("Seattle");
})
getWeather("Patna");
getWeatherTokyo();
getWeatherDelhi();
getWeatherBoston();
getWeatherLondon();
getWeatherMoscow();
getWeatherNewYork();
