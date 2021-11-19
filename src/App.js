import  React, { useState }  from "react";
import axios from "axios";
import styled from "styled-components";
import CityComponent from "./modules/CityComponent";
import WeatherComponent from "./modules/WeatherInfoComponent"

const Container = styled.div`
display:flex;
height : auto;
flex-direction:column;
margin: auto;
align-items: center;
box-shadow: 0 3px 6px 0 #000000;
padding: 20px 20px;
border-radius: 4px;
width: auto;
background-color: #36393F;
font-family: 'Kodchasan', sans-serif;
`;

const AppLabel = styled.span`
color: white;
font-size: 32px;
font-weight: bold;
`;

function App() {
  const [city, updateCity]=useState();
  const [weather, updateWeather]=useState();
  const fetchWeather = async(e)=>{
    e.preventDefault();
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0837262ffa9a56fd7645d26d7d36e71c`,);
    updateWeather(response.data);
  };
  return (
    <Container>
    <AppLabel>Weather App</AppLabel>
    {weather ? (
      <WeatherComponent weather={weather}/>
      ) : (
      <CityComponent updateCity={updateCity} fetchWeather={fetchWeather}/>
      )}
    </Container>
  );
}

export default App;