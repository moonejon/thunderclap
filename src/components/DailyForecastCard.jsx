import { WeatherIcon } from "./WeatherIcon";

export const DailyForecastCard = ( day ) => {
    const { dt, temp, weather } = day;

    const date = new Date(dt * 1000);
    const dayName = date.toLocaleString('en-US', { weekday: 'short' });

    return (
        <div className="forecast-card">
            <div className="day-name">{dayName}</div>
            <WeatherIcon weatherCode={weather[0].id} />
            <div className="temp">{Math.round(temp.max)}°</div>
        </div>
)}