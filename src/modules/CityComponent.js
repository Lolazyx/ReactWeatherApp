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
border: black solid 1px;
border-radius: 2px;
color: black;
font-size: 24px;
margin: 15px auto;
& input {
padding: 10px;
font-size: 18px;
border: 10;
outline: none;
& button {
padding: 10px;
font-size: 18px;
border: none;
outline: none;
font-weight: bold;

}
}
`;

const CityComponent =()=>{
  return (
    <>
    <WeatherLogo src="/icon/weathericon.png" />
    <ChooseCityLabel>Fide weather of your city</ChooseCityLabel>
    <SearchBox>
 <input placeholder="City"/>
    <button>Search</button>
    </SearchBox>
    </>
  );
};
export default CityComponent;