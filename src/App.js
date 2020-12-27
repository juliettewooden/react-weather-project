import React from "react";
import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaultCity="Houston" />
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

