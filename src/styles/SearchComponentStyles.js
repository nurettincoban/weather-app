import styled from 'styled-components';

export const SearchContainer = styled.div`
  height:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  font-size:16px;
  color: #536874;
  width: 520px;
`;

export const SearchForm = styled.form`
  position: relative;
  padding: 5px 10px;
  border-bottom: 2px solid #4e6673;
  box-sizing: border-box;
  margin-bottom: 20px;
  width: 92%;
`;

export const SearchInput = styled.input`
  width: 100%;
  text-align: center;
  border: none;
  font-size: 36px;
  outline: none;
  color: ${props => props.theme.primaryTextColor};
  ::placeholder{
    color: #a5a5a5 !important;
  }
`;

export const SearchButton = styled.button`
  color: ${props => props.theme.primaryButtonColor};
  position: absolute;
  right: 0;
  top: 5px;
  border: none;
  font-size: 42px;
  transition: .3s all ease-in-out;
  cursor: pointer;
  outline: none;
  &:hover, &:active {
    color: ${props => props.theme.primaryButtonHoverColor};
  }
`;

export const CurrentPositionButton = styled.button`
  color: inherit;
  padding: 5px 10px;
  cursor: pointer;
  margin-top:16px;
  border: none;
  span {
    border-bottom: 1px dashed ${props => props.theme.primaryTextColor};
    &::hover{
      border-color: #111;
    }
  }
`;