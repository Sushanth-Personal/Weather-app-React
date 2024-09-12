import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const WeatherDisplay = ({ weather }) => {
  const [source, setSource] = useState("images/rain.png");

  useEffect(() => {
    if (weather == "Clouds") {
      setSource("images/clouds.png");
    } else if (weather == "Rain") {
      setSource("images/rain.png");
    } else if (weather == "Clear") {
      setSource("images/clear.png");
    } else if (weather == "Drizzle") {
      setSource("images/drizzle.png");
    } else if (weather == "Snow") {
      setSource("images/snow.png");
    } else if (weather == "Mist") {
      setSource("images/mist.png");
    } else if (weather == "Haze") {
      setSource("images/haze.png");
    }
  }, [weather]);

  return (
    <img src={source} alt="weather icon" className="weather-icon" />
  );
};

WeatherDisplay.propTypes = {
  weather: PropTypes.string.isRequired,
};

export default WeatherDisplay;
