import Styled from 'styled-components';
import colours from '../../../style/colours';
import {Column} from "hedron/lib/index";

const FooterStyle = Styled.footer`
    background: ${colours.secondary};
    
    nav {
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
`;

const Copyright = Styled(Column)`
    background: #1f2431;
    color: #eee;
    font-size: .8em;
    text-align: center;
`;

export { FooterStyle, Copyright };
