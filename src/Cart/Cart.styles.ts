import styled from 'styled-components';

export const Wrapper = styled.aside`
  font-family: Arial, Helvetica, sans-serif;
  width: 500px;
  padding: 20px;

  @media(max-width: 768px){
    width: auto;
  } 

  .close-button {
    display: flex;
    cursor: pointer;
    margin-left: auto;
    background: lightblue;
    border: none;
    border-radius: 20px;
    padding: 10px;
    width: 35px;
    height: 35px;
    justify-content: center;
    align-items: center;
    color: white;
  }
`;