import React, { useState } from "react";
import axios from "axios";
function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=f48004dd08f8c619d88f9072afd2546e`
  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data);
      })
      setLocation('')
      console.log(data);
    }
  }
  return (
    <div className="App">
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Введите название'
          type='text'
        />
        <div className="container">
          <div color="top">
            <div className='location'>
              <p>{data.name}</p>
            </div>
            <div className="temp">
              {data.main ? <h1>{data.main.temp}°C</h1> : null}
            </div>
            <div className="description">
              {data.weather ? <p>{data.weather[0].description}</p> : null}
            </div>
          </div>
        {
          data.name!==undefined && (
            <div className="bottom">
              <div className="fells">
               {data.main ?(
                <p className="bold">{data.main.fells_like.toFixed()}°C</p>
               ):null}
               <p>Чувствуется как </p> 
              </div>
              <div className="humidity">
                {data.main? <p className="bold">{data.main.humidity}%</p>: null}
                <p>Влажность</p>
              </div>
              <div className="wind">
                {data.wind ?(
                  <p className="bold">{data.wind.speed.toFixed()}м/с</p>
                ):null}
                  <p>Скорость ветра</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
