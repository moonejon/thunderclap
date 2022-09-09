import { weatherIcons } from "../icons";

export const WeatherIcon = (weatherCode) => {
  const code = weatherCode.weatherCode;

  return (
    <div className="weather-icon">
      <img
        style={{ width: "45px", height: "45px", fill: "rgb(101, 174, 213)" }}
        src={weatherIcons[code]}
        alt="weather icon"
      />
    </div>
  );
};
