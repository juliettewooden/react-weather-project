import React, { useState } from "react";
import axios from "axios";
import WeatherForecastPreview from "./WeatherForecastPreview";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
const [forecast, setForecast] = useState(null);
const [loaded, setLoaded] = useState(false);


function revealForecast(response) {
    console.log(response.data);
    setForecast(response.data);
    setLoaded(true);
    return null;
    }
    
if (loaded) {
    return(
    <div className="WeatherForecast row">
    <WeatherForecastPreview data={forecast.list[0]} />
    <WeatherForecastPreview data={forecast.list[1]} />
    <WeatherForecastPreview data={forecast.list[2]} />
    <WeatherForecastPreview data={forecast.list[3]} />
    <WeatherForecastPreview data={forecast.list[4]} />
    </div>
    );
} else {
    let apiKey = "2e65e506db0f4f57568714e0acc190bb";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(revealForecast);

    return null;
    
}



}
    