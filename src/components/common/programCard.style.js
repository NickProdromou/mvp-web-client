import Styled from 'styled-components';
import colours from '../../style/colours';
import typography from '../../style/typography';
import {Column} from "hedron/lib/index";
import mediaQuery from '../../style/utils/MediaQueryGenerator';

const Program = Styled(Column)` 
    padding: 0;
    text-align: center;
    
    ${mediaQuery('medium',`
        padding: 20px;
        text-align: left;
    `)}
    
    article {
        padding: 20px 15px;
        background: #eee;
        border-bottom: 1px dashed ${colours.primary};
        
        ${mediaQuery('medium',`
            border-left: 4px solid ${colours.primary};
            border-bottom: none;
        `)}
                
        
        h3 {
            margin: 0;
            font-size: 18px;
            font-family: ${typography.heading};
            color: ${colours.tertiary};
            text-transform: uppercase;
            font-weight: 100;
        }
        
        p {       
            font-family: ${typography.body};
            margin-top: .8em;
            font-size: 14px;
        }        
    }
`;

export default Program;
