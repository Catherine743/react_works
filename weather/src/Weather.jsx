import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Forecast from "./Forecast";


function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [searchedCity, setSearchedCity] = useState("");

  const API_KEY = "72a14f664289d301918a2ed81ad7b437";

  const getWeather = async () => {
    if (!city) return;

    try {
      setError("");

      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      const data = await res.json();

      if (data.cod !== 200) {
        setError("City not found");
        setWeather(null);
        return;
      }

      setWeather(data);
      setSearchedCity(city);
    } catch (err) {
      setError("Something went wrong");
    }
  };

  return (
    <div>
    <div className="w-25 mx-auto mt-5 text-center">

      {/* Search Bar */}
      <div className="d-flex justify-content-center gap-3">
        <input
          type="text"
          placeholder="Enter city name"
          className="form-control w-50"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <Button variant="primary" onClick={getWeather}>
          Search
        </Button>
      </div>

      {/* Error */}
      {error && <p className="text-danger mt-3">{error}</p>}

      {/* Weather Result */}
      {weather && (
        <div className="card mt-4 p-4 shadow" style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}>
          <div
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.6)", // transparent layer
              padding: "20px",
              borderRadius: "8px"
            }}
          >
            <h3>{weather.name}</h3>
            <h1>{Math.round(weather.main.temp)}°C</h1>
            <p>{weather.weather[0].description}</p>
            <p>Humidity: {weather.main.humidity}%</p>
            <p>Wind: {weather.wind.speed} m/s</p>
          </div>
        </div>
      )}
    </div>
    {/* Forecast now receives city */}
      <Forecast city={searchedCity} />
   </div> 
  );
}

export default Weather;

