import Styled from 'styled-components';
import typography from '../../../style/typography';
import mediaQuery from '../../../style/utils/MediaQueryGenerator';
import {NavLink} from "react-router-dom";

const NavContainer = Styled.nav`

margin-top: ${ props => props.vertical ? '70px' : '1em' };
z-index: ${ props => props.vertical ? `1100;` : `unset`};

`;

const ListContainer = Styled.ul`            

top: ${ props => props.vertical ? '25px' : 'initial' };
max-width: ${ props => props.vertical ? '150px' : '100%' };
margin: ${ props => props.vertical ? '0' : 'inherit' };
z-index: ${ props => props.vertical ? '10' : 'unset' };
padding: 0;

`;

const ListItem = Styled.li`

margin: 5px ${ props => props.vertical ? '0' : '8px' };
padding: ${ props => props.vertical ? '10px 0' : '3px 11px' };
display: ${ props => props.vertical ? 'block' : 'none' };
font-family: ${typography.heading};
text-transform: uppercase;
text-align: ${ props => props.vertical ? 'center' : 'left'};
list-style-type: none;
font-size: 0.8em;
font-weight: normal;
-webkit-font-smoothing: antialiased;
color: ${ props => props.theme.NavigationLinks.colour};
    
${ props => props.vertical ? ``: `
    ${mediaQuery('medium', `
        display: inline-block !important;
    `)}    
`}

`;

const MenuLink = Styled(NavLink)`

padding-bottom: 5px;
color: ${ ({theme}) => theme.NavigationLinks.colour };
text-decoration: none;
            
    &:hover {
        border-bottom: 2px solid ${ props => props.theme.NavigationLinks.hoverUnderline};
    }

`;

export  { NavContainer, ListContainer, ListItem, MenuLink };
