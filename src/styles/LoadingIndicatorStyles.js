import styled,{ keyframes } from 'styled-components';

const Spinner = keyframes`
  0% {
      transform: translate3d(-50%, -50%, 0) rotate(0deg);
  }
  100% {
       transform: translate3d(-50%, -50%, 0) rotate(360deg);
  }
`;

export const LoadingSpinner = styled.span`
  animation: .6s linear infinite ${Spinner};
  border: solid 3px #eee;
  border-bottom-color: ${props => props.theme.primaryColor};
  border-radius: 50%;
  content: "";
  height: 34px;
  opacity: inherit;
  position: absolute;
  transform: translate3d(-50%, -50%, 0);
  transform-origin: center;
  width: 34px;
  will-change: transform;
  top: 35px;
  left: 35px;
  z-index:2;
`;