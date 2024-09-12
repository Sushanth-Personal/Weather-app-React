import { useState, useEffect } from "react";
import "./App.css";
import WeatherAPI from "./WeatherAPI.jsx";
import WeatherDisplay from "./WeatherDisplay.jsx";
import ErrorHandler from "./ErrorHandler.jsx";

const App = () => {
  const [temperature, setTemperature] = useState("");
  const [cityName, setCityName] = useState("London");
  const [humidity, setHumidity] = useState("");
  const [weather, setWeather] = useState("");
  const [wind, setWind] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [cityName]);

  useEffect(() => {
    setError(null);
  }, [error]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setCityName(event.target.value);
    }
  };

  function getData() {
    WeatherAPI(cityName)
      .then((data) => {
        if (data) {
          setTemperature(data.main.temp);
          setHumidity(data.main.humidity);
          setWeather(data.weather[0].main);
          setWind(data.wind.speed);
          setError(null);
        }
      })
      .catch((err) => {
        console.log("Error dfgoccurred:", err.message);
        setError(err.message);
      });
  }

  return (
    <div className="App">
      {error && <ErrorHandler errorMessage={error} />}

      <div className="app-screen">
        <div className="search">
          <input
            placeholder="enter city name"
            id="search-city"
            type="text"
            onKeyDown={handleKeyDown}
          />
          <button id="search-icon-button" onClick={getData}>
            <img src="images/search.png" id="search-icon" />
          </button>
        </div>
        <div className="weather">
          <WeatherDisplay weather={weather} />
          <h1 className="temp">{Math.round(temperature)}°C</h1>
          <h2 className="city">{cityName}</h2>
          <div className="details">
            <div className="col">
              <img src="images/humidity.png" />
              <div>
                <p className="humidity">{humidity}%</p>
                <p>Humidity</p>
              </div>
            </div>
            <div className="col">
              <img src="images/wind.png" />
              <div>
                <p className="wind">
                  {Math.round((wind * 18) / 5)} kmph
                </p>
                <p>Wind Speed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
