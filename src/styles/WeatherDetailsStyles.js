import styled from 'styled-components';

export const WeatherDetailsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  position: absolute;
  @media (max-width: 720px) {
    display: block;
    top: 0;
    overflow: hidden;
  }
`;

export const CityName = styled.h1`
  color: ${props => props.theme.primaryTextColor};
  font-size: 42px;
  display: inline-block;
  margin: 0;
`;

export const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  @media (max-width: 720px) {
    padding: 5px;
  }
`;

export const TopLeftBar = styled.div`
  display: flex;
  align-items: center;
`;

export const BackButton = styled.button`
  color: ${props => props.theme.primaryButtonColor};
  font-size: 42px;
  padding: 15px;
  border: none;
  cursor: pointer;
  transition: .3s all ease-in-out;
  :hover{
    color: ${props => props.theme.primaryTextHoverColor};
  }
`;

export const WeatherDetailsBox = styled.div`
  padding-left: 30px;
  padding-right: 30px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 720px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const DateTitle = styled.h2`
  font-size: 40px;
  color: ${props => props.theme.primaryTextColor};
  font-weight: 400;
  margin:10px 0;
  @media (max-width: 720px) {
    text-align: center;
  }
`;

export const WeatherTitle = styled.h3`
  font-size: 32px;
  color: ${props => props.theme.primaryTextColor};
  font-weight: 400;
  margin: 10px 0 15px 0;
  @media (max-width: 720px) {
    text-align: center;
  }
`;

export const WeatherValue = styled.span`
  color: ${props => props.theme.secondaryTextColor};
  font-size: 108px;
  text-align: center;
  i {
    margin: 0 30px;
  }
  @media (max-width: 720px) {
    font-size: 88px;
  }
`;

export const CurrentWeatherBox = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 720px) {
    justify-content: center;
  }
`;

export const CurrentDayInfoBox = styled.section`
  float: left;
  width: 260px;
  display: flex;
  flex-direction: column;
  li{
    font-size: 18px;
    line-height: 26px;
    color: ${props => props.theme.secondaryTextColor};
    list-style: none;
    span {
      float: right;
    }
  }
`;