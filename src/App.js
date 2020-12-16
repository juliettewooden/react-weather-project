import React from "react";
import './App.css';
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <h1> Weather App </h1>
      <Search />
      <footer>
        Project coded by Juliette Wooden on{" "} 
          <a href="https://github.com/juliettewooden/react-weather-project"
        target="blank">
          Github </a>
      </footer>
      </div>
    </div>
  );
}

