import React, { useState, useEffect } from "react";

function WeatherComponent({ cityCode }) {
  const [weatherData, setWeatherData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://www.jma.go.jp/bosai/forecast/data/forecast/${cityCode}.json`
        );
        const data = await response.json();
        const weatherInfo = data[0].timeSeries[0].areas.flatMap(area => area.weathers).slice(0, 3);
        setWeatherData(weatherInfo);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchData();
  }, [cityCode]);

  const currentDayWeather = weatherData[currentPage];

  const nextPage = () => setCurrentPage(currentPage + 1);
  const prevPage = () => setCurrentPage(currentPage - 1);

  return (
    <div>
      {currentDayWeather && (
        <div>
          <p>{currentDayWeather}</p>
        </div>
      )}
      <button onClick={prevPage} disabled={currentPage === 0}>Prev</button>
      <button onClick={nextPage} disabled={currentPage >= 2}>Next</button>
    </div>
  );
}

export default WeatherComponent;
