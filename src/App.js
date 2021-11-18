import React from 'react'
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
  return (
    <Container>
    <AppLabel>Weather App</AppLabel>
    <WeatherComponent />
    </Container>
  );
}

export default App;
