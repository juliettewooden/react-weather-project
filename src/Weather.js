import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";


export default function Weather() {
    let [weatherData, setWeatherData] = useState({ ready: false });
    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            wind: response.data.wind.speed,
            city: response.data.name,
            description: response.data.weather[0].description,
            humidity: response.data.main.humidity,
            date: "Monday 09:00"
        });
    }

    if(weatherData.ready) {
        return (
        <div className="Weather">
            <form>
            <div className="row">
                <div className="col-9">
                <input type="search" placeholder="Enter a city" className="form-control" />
            </div>
            <div className="col-3">
                <input type="submit" value="Search" className="button-primary" />
                </div>
            </div>
            </form>
            <h1>{weatherData.city}</h1>
            <ul>
                <li>{weatherData.date} </li>
                <li className="text-capitalize">{weatherData.description} </li>
            </ul>
            <div className="row"> 
            <div className="col-6">
                <img src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png" alt="Cloudy" />
                <div className="float-left">
                    <span className="temp">
                    {Math.round(weatherData.temperature)}
                    </span>
                    <span className="unit">
                        °F
                    </span>
                </div>
                
                
            </div>
            <div className="col-6">
                <ul> 
                    <li>Humidity: {weatherData.humidity}%</li>
                    <li>Wind: {weatherData.wind}mph</li>
                </ul>

            </div>
            </div>

        </div>
    );
} else{
    let apiKey = "2e65e506db0f4f57568714e0acc190bb";
    let city = "Houston";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

axios.get(url).then(handleResponse);
return "Loading..."
}
}


    