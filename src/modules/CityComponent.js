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
display: flex;
flex-direction: row;
border: none;
border-radius: 2px;
color: #202225;
font-size: 24px;
margin: 15px auto;
& input {
display:inline-block;
min-width: 250px;
width: 80px;
padding:5px 10px;
text-align: center;
font-size: 18px;
border: none;
border-radius: 30px;
outline: none;
font-weight: bold;
font-family: 'Kodchasan', sans-serif;}
`;

const SearchButton = styled.form`
display: flex;
flex-direction: row;
border: none;
border-radius: 2px;
color: black;
font-size: 24px;
margin: 1px auto;
& button {
display:inline-block;
min-width: 270px;
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
cursor: pointer;
}
`;

const CityComponent =()=>{
  return (
    <>
    <WeatherLogo src="/icon/weathericon.png" />
    <ChooseCityLabel>Fide weather of your city</ChooseCityLabel>
    <SearchBox>
 <input placeholder="City"/>
    </SearchBox>
    <SearchButton>
    <button>Search</button>
    </SearchButton>
    </>
  );
};
export default CityComponent;