import Styled from 'styled-components';
import typography from '../../../style/typography';
import {Column} from "hedron/lib/index";
import mediaQuery from '../../../style/utils/MediaQueryGenerator';

const Program = Styled(Column)` 
    padding: 0;
    text-align: center;
    
    ${mediaQuery('medium',`
        padding: 20px;
        text-align: left;
    `)}
    
    article {
        padding: 20px 15px;
        background: ${(props) => props.theme.programCard.background};
        border-bottom: 1px dashed ${ (props) => props.theme.programCard.border};
        border-color: ${(props) => props.theme.programCard.border};
        
        ${mediaQuery('medium',`
            border-left: 4px solid;
            border-bottom: none;
        `)}
                
        
        h3 {
            margin: 0;
            font-size: 18px;
            font-family: ${typography.heading};
            color: ${(props) => props.theme.programCard.text};
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
