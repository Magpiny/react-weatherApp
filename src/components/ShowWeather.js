import React from 'react';
import './showWeather.css';


function ShowWeather(props) {
    
    const { data } = props;
    const iconUrl = "http://openweathermap.org/img/wn/"+`${ data.cod !== 404 ? data.weather[0].icon : null }`+".png";

    return (
        <div className="displayweather">
            
            {
              data.cod !== 404 ?

              <React.Fragment>

            <div className="maincard">
              <span className="cardtitle">
                { data.name }, { data.sys.country} Weather  
              </span>

              <span className="cardsubtitle">
                As of { new Date().toLocaleTimeString() } {" "}
              </span>  
              <hi>{ Math.floor(data.main.temp ) }&#176; Celcius </hi>

              <span className="weather-main">{ data.weather[0].main }</span>
              {"          "}
              <img src={ iconUrl } alt="weather-icon" className="weather-icon" srcSet="" height="30px" />
              <span className="weather-description"> {data.weather[0].description }</span>
            </div>

            <div className="weatherdetails">
              <div className="section1">
                <table>
                  <tr>
                  <td><h6>High/Low</h6></td>
                    <td>{ Math.floor(data.main.temp_max ) }&#176;C</td> /
                    <td>{ Math.floor(data.main.temp_min ) }&#176;C</td>
                  </tr>

                  <tr>
                    <td><h6>Humidity</h6></td>
                    <td>{ data.main.humidity } &#37; </td>
                    
                  </tr>

                  <tr>
                  <td><h6>Pressure</h6></td>
                    <td>{ data.main.pressure } hPa </td>
                  </tr>

                  <tr>
                  <td><h6>Visibility</h6></td>
                    
                    <td>{ data.visibility/1000 } km</td>
                  </tr>
                </table>

              </div>

              {/* Section 2 */}
              <div className="section2">
                <table>
                  <tr>
                  <td><h6>Winds</h6></td>
                    <td>{ data.wind.speed  } km/hr</td>
                  </tr>

                  <tr>
                  <td><h6>Wind direction</h6></td>
                    <td>{ data.wind.deg } &#176; </td>
                    
                  </tr>

                  <tr>
                  <td><h6>Sunrise</h6></td>
                    <td>{ new Date(data.sys.sunrise*1000).toLocaleTimeString() } </td>
                  </tr>

                  <tr>
                  <td><h6>Sunset</h6></td>
                    <td>{ new Date(data.sys.sunset*1000).toLocaleTimeString() } </td>
                  </tr>
                </table>

              </div>
              </div>
              </React.Fragment>
              :

            <div className="maincard">{ data.message }</div>
            }
            
    </div>
    );
}

export default ShowWeather
