import React from 'react'
import styled from 'styled-components'

const WeatherLogo = styled.img`
width: 140px;
height: 140px;
margin: auto;
`;

const ChooseCityLabel = styled.span`
color: White;
font-size: 18px;
font-weight: bold;
margin: 10px auto;
`;

const SearchBox = styled.form`
display: inline-block;
min-width: 270px;
width: 80px;
flex-direction: row;
border: none;
border-radius: 2px;
color: #202225;
font-size: 24px;
margin: 15px auto;
& input {
text-align: center;
min-width: 270px;
width: 80px;
padding:5px 10px;
font-size: 18px;
border: none;
border-radius: 30px;
outline: none;
font-weight: bold;
font-family: 'Kodchasan', sans-serif;}
& button {
min-width: 290px;
width: 80px;
padding:5px 10px;
color: #FFF;
background-color: #202225;
font-size: 18px;
border: none;
border-radius: 30px;
outline: none;
font-weight: bold;
font-family: 'Kodchasan', sans-serif;
cursor: pointer;}
`;

const CityComponent =(props)=>{
  const {updateCity, fetchWeather} = props;
  return (
    <>
    <WeatherLogo src="/icon/weathericon.png" />
    <ChooseCityLabel>Fide weather of your city</ChooseCityLabel>
    <SearchBox onSubmit={fetchWeather}>
 <input placeholder="City" onChange={(e)=>updateCity(e.target.value)}/>
  <button type="submit">Search</button>
    </SearchBox>
    </>
  );
};
export default CityComponent;