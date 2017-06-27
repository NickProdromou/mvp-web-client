import Styled from 'styled-components';
import typography from '../../../style/typography';
import colours from '../../../style/colours';
import mediaQuery from '../../../style/utils/MediaQueryGenerator';

const NavigationLinks = Styled.nav`
   ${(props) => props.vertical 
    
    ? ` margin-top: 70px;
       z-index: 1100;
    
    ul {
        top: 25px;
        max-width: 150px;
        margin: 0;
        padding: 0;
        z-index: 10;
        
        > li {
            list-style-type: none;
            font-family: ${typography.body};
            font-size: .8em;
            color: #fff;
            margin: 5px 0;
            padding: 10px 0;
            text-align: center;
            text-transform: uppercase;     
            
           > a {
                color: #fff;
                padding-bottom: 5px;
                
                    &:hover {
                        border-bottom: 2px solid ${colours.accent};
                        color: #fff;
                    }
                }            
        }
    }` 
    
    : ` margin-top: 1em;
    
    li {
        font-family: ${typography.heading};
        font-size: 0.8em;
        font-weight: normal;
        -webkit-font-smoothing: antialiased;
        list-style-type: none;
        padding: 3px 11px;
        margin: 5px 8px;
        text-transform: uppercase;
        display: block;
        
        ${mediaQuery('medium',`
           display: inline-block !important;
        `)}
        
        > a {
            color: #fff;
            padding-bottom: 5px;         
            text-decoration: none;
            
            &:hover {
                border-bottom: 2px solid ${colours.accent};
                color: #fff;            
            }        
        
        }
        
    }
`}`;

export default NavigationLinks;
