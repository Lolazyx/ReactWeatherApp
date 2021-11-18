import React from 'react'
import styled from "styled-components";

export const WeatherInfoIcons = {
  sunset: "icon/sunrise.png",
  sunrise: "icon/sunrise.png",
  humidity: "icon/humidity.png",
  wind: "icon/wind.png",
  pressure: "icon/pressure.png",
};

const WeatherCondition = styled.div`
display: flex;
flex-direction: row;
align-items: center;
min-width: 250px;
width: 80px;
justify-content: space-between;
margin: 30px auto;

`;

const Condition = styled.span`
height: 1px;
align-items: center;
margin: 20px auto;
font-size: 14px;
color: #fff;
& span{
font-size: 30px;}

     
  `;

const WeatherLogo = styled.img`
width: 100px;
height: 100px;
margin: 5px auto;
`;

const Location = styled.span`
color: #fff;
font-size: 28px;
font-weight: bold;

`;

const WeatherInfoLabel = styled.span`
color: #fff;
font-size: 18px;
font-weight: bold;
margin: 20px 25px 10px;
text-align: start;
min-width: 260px;
width: 80px;
`;

const WeatherInfoContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
width: 90px;
justify-content: space-evenly;
flex-wrap: wrap;

`;

const InfoContainer = styled.div`
display: flex;
min-width: 250px;
width: 80px;
margin: 5px auto;
align-items: start;
`;

const InfoIcon = styled.img`
width: 50px;
height: 50px;
`;

const InfoLabel = styled.span`
color: #FFF;
display: flex;
flex-direction: column;
font-size: 14px;
margin: 15px;
& span{
font-size: 12px;
text-transform: capitalize;
}
`;

const WeatherInfoComponent =(props)=>{
    const {name, value} = props;
  return (
    <InfoContainer>
    <InfoIcon src={WeatherInfoIcons[name]}/>
    <InfoLabel>
    {value}
    <span>{name}</span>

    </InfoLabel>
    </InfoContainer>
  )
}

const WeatherComponent =()=>{
  return (
    <>
    <WeatherCondition>
    <Condition><span>30 °C</span> | Couldy
    </Condition>
    <WeatherLogo src="icon/weathericon.png" />
    </WeatherCondition>
    <Location>London, GB</Location>
    <WeatherInfoLabel>Weather Info</WeatherInfoLabel>
    <WeatherInfoContainer>
    <WeatherInfoComponent name="sunrise" value=""/>
    <WeatherInfoComponent name="humidity" value=""/>
    <WeatherInfoComponent name="wind" value=""/>
    <WeatherInfoComponent name="pressure" value=""/>
    </WeatherInfoContainer>
    </>
  )
};
export default WeatherComponent;