import React, { useState } from 'react';
import './App.css';
import CityInput from "./Components/cityInput";

function App() {
  const [city, setCity] = useState("");
  const [cityWeather, setCityWeather] = useState();
  const [cityFoundOrNot, setCityFoundOrNot] = useState("");

  const fetchCityWeather = ()=>{
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4c496af33d732297c30b641b3b235e47&units=metric`
    )
    .then((res)=> res.json())
    .then((result)=>{
      setCityWeather({result});
      if(result.cod === "404")
        setCityFoundOrNot("No");
      else
        setCityFoundOrNot("Yes");
    })
  }

  return (
      <CityInput city={city} setCity={setCity} fetchCityWeather={fetchCityWeather} cityWeather={cityWeather} cityFoundOrNot={cityFoundOrNot} setCityFoundOrNot={setCityFoundOrNot}/>
  );
}

export default App;
