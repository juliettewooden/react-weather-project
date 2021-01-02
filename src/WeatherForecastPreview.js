import React from "react";
import WeatherForecast from "./WeatherForecast";
import WeatherInfo from "./WeatherInfo";

export default function WeatherForecastPreview(props) {

    function hours() {
        let date = new Date(props.data.dt * 1000);
        let hours =  date.getHours();
        return `${hours}:00`;
    }

    function temperature() {
        let temperature = Math.round(props.data.main.temp);
        return `${temperature}°F`;
    }
    return (
<div className="WeatherForecastPreview col">
   <p>{hours()}</p>
   <p>{temperature()}</p>
    
</div>
    );
}

    
