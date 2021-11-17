import React from 'react'
import styled from "styled-components";
import CityComponent from "./modules/CityComponent";
import WeatherComponent from "./modules/WeatherInfoComponent"

const Container = styled.div`
display:flex;
flex-direction:column;
margin: auto;
align-items: center;
box-shadow: 0 3px 6px 0 #555;
padding: 20px 20px;
border-radius: 4px;
width: auto;
background-color: lightblue;
font-family: 'Kodchasan', sans-serif;
`;

const AppLabel = styled.span`
color: black;
font-size: 18px;
font-weight: bold;
`;

function App() {
  return (
    <Container>
    <AppLabel>ตรวจดูสภาพอากาศ</AppLabel> 
    <CityComponent />
    </Container>
  );
}

export default App;
