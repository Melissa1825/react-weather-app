import React, { useState } from 'react';
import "./index.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faWind } from '@fortawesome/free-solid-svg-icons'
import { faDroplet } from '@fortawesome/free-solid-svg-icons'


import axios from 'axios';

export default function Search() {
  const [weather, setWeather] = useState({loaded: false});

  function handleResponse(response) {
    console.log(response.data);

    setWeather({
      loaded: true,
      date: "Wednesday, June 28, 12:30",
      city: response.data.name,
      temp: response.data.main.temp,
      desc: response.data.weather[0].description,
      feel: response.data.main.feels_like,
      wind: response.data.wind.speed,
      humid: response.data.main.humidity,
    });
  }

  if (weather.loaded) {
    return (
      
      <div className="row">
        <div className="col-4">
          <form id="citySearch">
            <input id="cityInput" type="search" placeholder="Enter a city" />
            <input type="submit" value="search" className="button" />
          </form>
        </div>  

        <h6>{weather.date}</h6>

        <div className="locationIcon">
        <div>
            <FontAwesomeIcon className="fa-solid" icon={faLocationDot} />
        </div>
        <div>
            <h4>{weather.city}</h4>
        </div>
    </div>

        <div>
          <img id="icon" src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png" alt="haze img" />
          <div className="temp">
            <h1>{Math.round(weather.temp)}</h1>
            <span className="deg">°C</span>
          </div>
            <h3>{weather.desc}</h3>
          </div>

          <div>
      <span>Feels Like</span>
      <div className="realFeel">
        <h4>{Math.round(weather.feel)}</h4>
        <span>°C</span>
      </div>
    </div>


          <div className="details">
      <ul>
        <div className="row">
          <div className="col-4"></div>
          <div className="col-2">
            <li>
            <FontAwesomeIcon className="fa-solid" icon={faWind} />
              <span>{weather.wind}</span> <span>km/h</span>
              <p>Wind</p>
            </li>
          </div>

          <div className="col-2">
            <li>
            <FontAwesomeIcon className="fa-solid" icon={faDroplet} />
              <span>{weather.humid}</span> <span>%</span>
              <p>Humidity</p>
            </li>
          </div>
          <div className="col-4"></div>
        </div>
      </ul>

</div>

      </div>

    );
  } else {
    let city = "Toronto";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a0776b8bb0b1556bee1e5658c3acf0c4&units=metric`;
    axios.get(url).then(handleResponse)

    return "Loading..."

  }

  



}