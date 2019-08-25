import styled from 'styled-components';

export const DailyWeatherBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  min-width: 90px;
  min-height: 110px;
  color: ${props => props.theme.primaryTextColor};
  @media (max-width: 720px) {
    width: 100%;
    flex-direction: row;
    min-height: initial;
    border-top: 1px dashed #F0F0F0;
  }
`;

export const WeatherIcon = styled.i`
  font-size: 48px;
  margin: 10px 0;
  font-weight: 400;
  @media (max-width: 720px) {
    order: -1;
  }
`;

export const DayTitle = styled.span`
  font-size: 14px;
`;

export const DayValue = styled.span`
  font-size: 13px;
`;

export const DailyWeathers = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 26px;
  margin-bottom: 26px;
  flex-wrap: wrap;
`;