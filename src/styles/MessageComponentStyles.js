import styled, { keyframes, css } from 'styled-components';

export const moveFromTopToBottom = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0%);
  }
`;

export const MessageBox = styled.div`
  position: absolute;
  width: 100%;
  text-align: center;
  animation: ${moveFromTopToBottom} .3s ease-in-out;
  border-bottom: 1px solid #d8d8d8;
  padding: 10px 20px;
  font-size: 18px;
  left: 0;
  line-height: 32px;
  top: 0;
  ${props => props.type === 'warning' ?
		css`background-color: #FF9800;color: #FFF;` :
		css`background-color: #F44336;color: #FFF;`
}
  box-sizing: border-box;
  z-index:1;
`;