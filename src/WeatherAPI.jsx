const APIKEY = `39434824df5eb474df852fd58df63565`;

const WeatherAPI = (city) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric`
  )
    .then((response) => {
      if (response.status === 404) {
        throw new Error("City not found");
      }
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      return response.json(); // Return the parsed JSON data
    })
    .catch((err) => {
      throw err; // Throw the error so it can be caught in the calling function
    });
};

export default WeatherAPI;
