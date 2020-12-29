import React, { useState } from "react";

export default function WeatherUnits(props) {
    let [unit, setUnit] = useState("fahrenheit");
function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
}

function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
}

    if (unit === "fahrenheit") { 
        return (
        <div className="WeatherUnits">
        <span className="temp">
        {Math.round(props.fahrenheit)}
        </span>
        <span className="fahrenheit-unit">
         °F
        </span> | <span className="celsius-unit">
           <a href="/" onClick={convertToCelsius}> °C </a>
        </span>
        </div>
    );
} else {
    let celsius = (props.fahrenheit - 32) * 5/9 
     return (
        <div className="WeatherUnits">
        <span className="temp">
        {Math.round(celsius)}
        </span>
        <span className="fahrenheit-unit">
            <a href="/" onClick={convertToFahrenheit}>
         °F</a>
        </span> | <span className="celsius-unit">
         °C 
        </span>
        </div>
     );
}


   
}