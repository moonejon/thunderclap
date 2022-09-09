import { useEffect, useState } from "react";
import Geocode from "react-geocode";
import "./App.css";

function App() {

  const [ coordinates, setCoordinates ] = useState({ lat: null, lng: null });
  const [ weatherData, setWeatherData ] = useState(null);

  const getLatLong = city => {
    Geocode.setApiKey(process.env.REACT_APP_GEOCODE_API_KEY);

    Geocode.fromAddress(city).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        setCoordinates({ lat, lng });
        console.log(lat, lng);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  useEffect(() => {
    getLatLong("Dallas, TX");
  }, []);


  useEffect(() => {
    const { lat, lng } = coordinates;

    fetch(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lng}&exclude=hourly,minutely&units=imperial&appid=${process.env.REACT_APP_WEATHER_API_KEY}`,
      {
        method: "GET",
        headers: {},
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw response; //check the http response code and if isn't ok then throw the response as an error
        }
        return response.json(); //parse the result as JSON
      })
      .then((response) => {
        //response now contains parsed JSON ready for use
        console.log(response);
        setWeatherData(response);
      })
      .catch((errorResponse) => {
        if (errorResponse.text) {
          //additional error information
          errorResponse.text().then((errorMessage) => {
            //errorMessage now returns the response body which includes the full error message
          });
        } else {
          //no additional error information
        }
      });
  }, [coordinates]);

  console.log(weatherData);

  return <div className="App"></div>;
}

export default App;
