import React, { useState } from "react";
import axios from "axios";
import "./Search.css";

export default function Search() {
  let [city, setCity] = useState("");
  let [temperature, setTemperature] = useState("");
  let apiKey = "2e65e506db0f4f57568714e0acc190bb";

  function submitSearch(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(url).then(showTemperature);
  }

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function showTemperature(response) {
    console.log(response.data);
    setTemperature(
      <div className="Temp">
        <strong>Weather in {city}: </strong>
        <ul>
          <li> Temperature: {Math.round(response.data.main.temp)} °F </li>
          <li> Description: {response.data.weather[0].description} </li>
          <li> Humidity: {response.data.main.humidity}% </li>
          <li> Wind: {response.data.wind.speed}mph </li>
          <li>
            {" "}
            <img
              src={`https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
              alt="icon"
            />
          </li>
        </ul>
      </div>
    );
  }

  return (
    <div className="Search">
      <form onSubmit={submitSearch}>
        <input type="search" placeholder="Enter a city" onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>
      <p>{temperature}</p>
    </div>
  );
}