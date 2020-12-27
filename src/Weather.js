import React, { useState } from "react";
import "./Weather.css";


export default function Weather() {
let [temperature, setTemperature] = useState(null);
    function handleResponse(response) {
        console.log(response.data);
        setTemperature(Math.round(response.data.main.temp))

    }

let apiKey = "2e65e506db0f4f57568714e0acc190bb";
let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
axios.get(url).then(handleResponse);
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
            <h1> Houston, TX </h1>
            <ul>
                <li>Monday 09:00 </li>
                <li>Cloudy </li>
            </ul>
            <div className="row"> 
            <div className="col-6">
                <img src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png" alt="Cloudy" />
                73°F
            </div>
            <div className="col-6">
                <ul> 
                    <li>Preciipitation: 0%</li>
                    <li>Humidity: 73%</li>
                    <li>Wind: 12mph</li>
                </ul>

            </div>
            </div>

        </div>
    )
}