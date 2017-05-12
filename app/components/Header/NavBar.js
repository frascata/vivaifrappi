import styled from 'styled-components';

export default styled.nav`
  &.uk-navbar-container {
    text-align: center;
    background-color: white;
    text-transform: uppercase;
    color: #006634;
    
    .uk-navbar-nav > li > a {
      color: #006634;
      
      &:hover {
        border-top: 4px solid #006634;
        opacity: 0.6;
        
        & span {
          margin-top: -4px;
        }
      }  
      
      &.active {
        border-top: 4px solid #006634;
        font-weight: bold;
        
        & span {
          margin-top: -4px;
        }
      }  
    }
        
    .uk-navbar-dropdown {
      margin-top: 0;
      color: #006634;
      
      & li {
        text-align: left;
      }
    }
    
    .uk-navbar-dropdown-nav > li > a {
      color: #006634;
    
      &:hover {
        opacity: 0.6;
      }
    }  
  }
`;
