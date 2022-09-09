import { DailyForecastCard } from "./DailyForecastCard";

export const ForecastContainer = forecast => {
  const fiveDayForecast = forecast?.forecast?.slice(0, 5);

  return (
    <div id="forecast-container">
      {fiveDayForecast?.map((day) => DailyForecastCard(day))}
    </div>
  );
};
