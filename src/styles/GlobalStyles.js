import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap');

  html {
    height: 100%;
  }
  body {
    font-family: 'Roboto', sans-serif;
    height: 100%;
    background: linear-gradient(135deg, ${props => (props.theme.backgroundFirstColor)}  0%, ${props => (props.theme.backgroundSecondColor)} 100%);
  }
  #root{
    height: 100%;
  }
  button{
    background: transparent;
  }
  .switch {
    display: inline-block;
  }
  .switch input {
    display: none;
  }
  .switch small {
    display: inline-block;
    width: 88px;
    height: 38px;
    background: ${props => (props.theme.backgroundFirstColor)};
    border-radius: 30px;
    position: relative;
    cursor: pointer;
  }
  .switch small:after {
    content: "°F";
    position: absolute;
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    width: 100%;
    left: -8px;
    text-align: right;
    padding: 0 6px;
    box-sizing: border-box;
    line-height: 38px;
  }
  .switch small:before {
    content: "";
    position: absolute;
    width: 32px;
    height: 32px;
    background: #fff;
    border-radius: 50%;
    top: 3px;
    left: 3px;
    transition: .3s;
    box-shadow: -3px 0 3px rgba(0,0,0,0.1);
  }
  .switch input:checked ~ small {
    background: ${props => (props.theme.backgroundSecondColor)};
    transition: .3s;
  }
  .switch input:checked ~ small:before {
    transform: translate(50px, 0px);
    transition: .3s;
  }
  .switch input:checked ~ small:after {
    content: "°C";
    left: 8px;
    text-align: left;
  }
  .switchSmall {
    display: inline-block;
  }
  .switchSmall input {
    display: none;
  }
  .switchSmall small {
    display: inline-block;
    width: 32px;
    height: 16px;
    background: #455a64;
    border-radius: 30px;
    position: relative;
    cursor: pointer;
  }
  .switchSmall small:before {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    background: #fff;
    border-radius: 50%;
    top: 3px;
    left: 3px;
    transition: .3s;
    box-shadow: -3px 0 3px rgba(0,0,0,0.1);
  }
  .switchSmall input:checked ~ small {
    background: #4fc5c5;
    transition: .3s;
  }
  .switchSmall input:checked ~ small:before {
    transform: translate(16px, 0px);
    transition: .3s;
  }
  @keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }
`;

export default GlobalStyle;