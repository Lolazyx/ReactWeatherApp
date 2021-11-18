import  React, { useState }  from "react";
import axios from "axios";
import styled from "styled-components";
import CityComponent from "./modules/CityComponent";
import WeatherComponent from "./modules/WeatherInfoComponent"

const API_KEY = "e1f009c5031e4c30495f24f0832c21a6"

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
  const fetchWeather = async()=>{
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
    console.response(response)
  };
  return (
    <Container>
    <AppLabel>Weather App</AppLabel>
    <CityComponent updateCity={updateCity} fetchWeather={fetchWeather}/>
    </Container>
  );
}

export default App;
