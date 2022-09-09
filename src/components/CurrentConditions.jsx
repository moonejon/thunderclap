import { WeatherIcon } from "./WeatherIcon";
import _ from "lodash";

export const CurrentConditions = props => {

    const { forecast, temperatureUnit } = props;

    return(
        <div id="current-conditions">
            <div id="current-temp">{Math.round(forecast?.temp)}°</div>
            <WeatherIcon weatherCode={forecast?.weather[0].id} />
            <div id="current-conditions-text">
            <div id="current-conditions-description">{_.startCase(_.toLower(forecast?.weather[0].description))}</div>
            <div id="current-conditions-wind-speed">{Math.round(forecast?.wind_speed)} {temperatureUnit === 'imperial' ? 'mph' : 'km/h'}</div>
            </div>
        </div>
    )
}