import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";


export default function Weather(props) {
    let [city, setCity] = useState(props.defaultCity);
    let [weatherData, setWeatherData] = useState({ ready: false });
    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
            wind: response.data.wind.speed,
            city: response.data.name,
            description: response.data.weather[0].description,
            humidity: response.data.main.humidity,
            date: new Date(response.data.dt * 1000)
        });
    }

    function search() {
      let apiKey = "2e65e506db0f4f57568714e0acc190bb";
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
        axios.get(url).then(handleResponse);
    }

    function submitSearch(event) {
        event.preventDefault();
        search();
        }

        function updateCity(event) {
            event.preventDefault();
            setCity(event.target.value);
            
        }

    if(weatherData.ready) {
        return (
        <div className="Weather">
            <form onSubmit={submitSearch}>
            <div className="row">
                <div className="col-9">
                <input type="search" placeholder="Enter a city" className="form-control" onChange={updateCity} />
            </div>
            <div className="col-3">
                <input type="submit" value="Search" className="button-primary w-100" />
                </div>
            </div>
            </form>
            <WeatherInfo data={weatherData} />
            <WeatherForecast city={weatherData.city} />
            
        </div>
    );
} else{
    search();
return "Loading..."
}
}


    