import styled from 'styled-components';

export const Wrapper = styled.div`
height: auto;

    border: 1px solid lightgrey;
    border-radius: 20px;
  
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  font-family: Arial, Helvetica, sans-serif;

  padding-bottom: 20px;
  margin: 10px;


  @media(max-width: 768px){
      margin-right: 0px;
  }
  .body-container {
    flex: 1;
    padding: 10px;
  }

  .image-container{
      width: 100%;
  }

h3{
    font-size: 1.6rem;
    color: #606060;
    /* line-height: 1rem; */
    overflow: hidden;
    /* margin-top: .5rem; */
    font-weight: 700;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
 
}
  p{
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-size: 20px;
    color: lightsteelblue;
  }
  button {

    margin: 10px;
    background: lightseagreen;
    color: white;
  }
  .information,
  .buttons {
  
    display: flex;
    justify-content: space-between;
  }
  img {
    width: 100%;
    max-height: 200px;
    border-bottom: 1px solid black;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
  }
  `;