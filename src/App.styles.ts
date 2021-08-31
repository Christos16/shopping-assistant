
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';

export const Wrapper = styled.div`
  margin: 40px;
  @media(max-width: 768px){
      margin: 15px;
  }
  .MuiGrid-spacing-xs-3 > .MuiGrid-item{
      padding: 0px !important;
  }

  .card-container{
    max-width: 1280px;
    margin-left: auto;
    margin-right: auto;
      display: grid;
      grid-template-columns: repeat(3,minmax(0,1fr));
      grid-gap: .5rem;
    gap: .5rem;

    @media(max-width: 768px){
        grid-template-columns:1fr;
        display: block
    }
  }

  
`;

export const StyledButton = styled(IconButton)`
color: white;


`;