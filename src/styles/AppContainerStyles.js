import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  max-width: 920px;
  align-items: center;
  display: flex;
  justify-content: center;
  @media (max-width: 720px) {
    display: block;
    width: 100%;
    max-width: initial;
  }
`;

export const AppBox = styled.div`
  position: relative;
  background: #FFF;
  overflow: hidden;
  max-width: 960px;
  width: 100%;
  min-height: 82%;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow:0 0 12px rgba(0, 0, 0, 0.16);
  @media (max-width: 720px) {
    height: 100%;
  }
  overflow: auto;
`;