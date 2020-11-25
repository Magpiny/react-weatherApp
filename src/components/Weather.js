import React, { useState } from 'react';
import Axios from 'axios';
import ShowWeather from './ShowWeather';
import './weather.css';

function Weather() {
    const apiKey = "05ddaa347c545d2cbe22265356182c81";

    const [weather, setWeather] = useState([]);
    const [ form, setForm ] = useState({ city:"", country:"" });

    async function weatherData(e) {
        e.preventDefault();
        if(form.city === ""){
            alert("City or country cannot be empty!!");
        }
        else {
           const data = await Axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&appid=${apiKey}&units=metric`
            )
            .then((response) => response.data)
            .then((data)=>data)
            .catch((error)=>console.log(error))
            console.log(data)
            setWeather({ data: data })
           /* const data = await fetch(
               `https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&appid=${apiKey}`
            )
            .then((response) => console.log(response.json()))
            
            setWeather({ data: data });
            */
        }

    }
    //Event handler
    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        if (name === "city"){
            setForm({ ...form, city:value })
        };
        if (name === "country"){
            setForm({ ...form, country:value })
        };

        console.log(form.city, form.country)
    }
    return (
        <div className="weather">
            <span className="title">Weather App</span>
             <br /> <br />

      <form>
        <input type="text" name="city" placeholder="Nairobi" onChange={ (e) => handleChange(e) } />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="text" name="country" placeholder="Kenya" onChange={ (e) => handleChange(e) } />

        <button className="getweather" onClick={ (e) => weatherData(e)}>Search</button>
      </form>

       {console.log(weather)}
       { weather.data !== undefined ? (
        <div>
          <ShowWeather data={ weather.data } />
        </div>
      ) : null}

        </div>
    )
}

export default Weather;
