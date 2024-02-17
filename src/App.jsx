import React, { useState } from "react";
import WeatherComponent from "./WeatherComponent";

function App() {
  const [city, setCity] = useState("130000");

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <>
      <h1>Weather API</h1>
      <InputForm setCity={setCity} handleChange={handleChange} />
      <WeatherComponent cityCode={city} />
    </>
  );
}

function InputForm({ setCity, handleChange }) {
  return (
    <form>
      <select onChange={handleChange}>
        <option value="130000">東京</option>
        <option value="270000">大阪</option>
        <option value="016000">札幌</option>
      </select>
    </form>
  );
}

export default App;
