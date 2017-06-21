import Styled, { keyframes } from 'styled-components';
import colours from '../../style/colours';

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const HeaderView = Styled.header`      
    margin: 0 auto;
    font-family: sans-serif;
    background-color: ${(props) => props.theme.heading.background};
    color: ${(props) => props.theme.heading.title};
    box-shadow: 1px 3px 7px 1px rgba(0,0,0,.2);
    
    img {
        animation: ${spin} infinite 2s linear;
        height: 60px;
    }
`;

const NavigationLinks = Styled.nav`
    margin-top: 1em;
    
    li {
        font-family: sans-serif;
        font-size: 0.8em;
        font-weight: normal;
        -webkit-font-smoothing: antialiased;
        list-style-type: none;
        padding: 3px 11px;
        display: inline-block;
        color: ${colours.inverseText};
        margin: 5px 8px;
        text-transform: uppercase;
        
        
        :hover {
            border-bottom: 2px solid ${colours.accent};
        }
        
    }
            
    a {
        color: ${colours.alert};
        background: ${colours.secondary};
        text-decoration: none;
        color: initial;        
    }            
`;



export { HeaderView, NavigationLinks };

