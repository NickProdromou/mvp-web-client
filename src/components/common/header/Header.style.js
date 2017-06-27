import Styled from 'styled-components';
import colours from '../../../style/colours';
import typography from '../../../style/typography';
import mediaQuery from '../../../style/utils/MediaQueryGenerator';

const HeaderView = Styled.header`      
    margin: 0 auto;
    font-family: ${typography.heading};
    background-color: ${(props) => props.theme.heading.background};
    color: ${(props) => props.theme.heading.title};
    box-shadow: 1px 3px 7px 1px rgba(0,0,0,.2);
    height: 59px;
    
    a {
        text-decoration: none;  
    }

    h1 {                    
        font-family: ${typography.heading};
        font-size: 1.5em;
        font-weight: 100;
        letter-spacing: .05em;
        -webkit-font-smoothing: antialiased;
        color: ${colours.inverseText};
        text-align: center;
        text-decoration: none;        
        
        ${mediaQuery('large',`
           text-align: left;
        `)}
        
    }
       
`;


export default HeaderView;

