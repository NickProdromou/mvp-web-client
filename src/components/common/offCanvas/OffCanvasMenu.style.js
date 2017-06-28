import Styled from 'styled-components';
import colours from '../../../style/colours';
import typography from '../../../style/typography';
import mediaQuery from '../../../style/utils/MediaQueryGenerator';

/* TODO: REMOVE NAV STYLE*/

const MobileMenuWrapper = Styled.div`
    top: 0;
    height: 100vh;
    width: 150px;
    background: ${(props) => props.theme.MobileMenuWrapper.background};    
    padding-top: 50px;
    z-index: 1000;
    position: fixed;
    box-shadow: 1px 1px 9px 5px rgba(0,0,0,0.32);
    ${(props) => props.isMenuExpanded 
        ? `transform: translateX(0px);` 
        : `transform: translateX(-160px);`
    }
    transition: transform 0.5s ease-in-out;
    
    ${mediaQuery('medium', `
        display: none;
    `)}
            
    nav {  
        margin-top: 70px;
        z-index: 1100;
    }
    
    ul {
        top: 25px;
        max-width: 150px;
        margin: 0;
        padding: 0;
        z-index: 10;
        
        li {
            list-style-type: none;
            font-family: ${typography.body};
            font-size: .8em;
            color: #fff;
            margin: 5px 0;
            padding: 10px 0;
            text-align: center;
            text-transform: uppercase;     
            display: block;
            
           > a {
                color: #fff;
                padding-bottom: 5px;
                
                &:hover {
                    border-bottom: 2px solid ${colours.accent};
                    color: #fff;
                }
                
           }            
        }
    }

`;

const CanvasBg = Styled.div`

    ${(props) => props.isMenuExpanded
    ? 
    `transform: translateX( calc(0vw - 150px) );
    opacity: 1;`
    : 
    `opacity: 0;
    transform: translateX( calc(-104vw - 150px) );
    `}
    
    transition: opacity 1s ease-out;
    background: rgba(0,0,0,.8);
    top: 0;
    width: calc(100vw + 150px);          
    height: 100vh;
    position: fixed;
    z-index: 100;
    
    ${mediaQuery('medium', `
        display: none;
    `)}
    
`;


export { CanvasBg, MobileMenuWrapper };
