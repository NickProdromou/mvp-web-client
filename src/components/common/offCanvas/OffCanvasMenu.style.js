import Styled from 'styled-components';
import mediaQuery from '../../../style/utils/MediaQueryGenerator';

const MobileMenuWrapper = Styled.div`
    top: 0;
    height: 100vh;
    width: 150px;        
    padding-top: 50px;
    z-index: 1000;
    position: fixed;
    background: ${(props) => props.theme.MobileMenuWrapper.background};
    box-shadow: 1px 1px 9px 5px rgba(0,0,0,0.32);
    ${(props) => props.isMenuExpanded 
        ? `transform: translateX(0px);` 
        : `transform: translateX(-160px);`
    }
    transition: transform 0.5s ease-in-out;
    
    ${mediaQuery('medium', `
        display: none;
    `)}
            
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
