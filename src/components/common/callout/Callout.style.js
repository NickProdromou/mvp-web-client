import Styled from 'styled-components';
import { Page } from 'hedron/lib/index';
import typography from '../../../style/typography';
import colours from "../../../style/colours";

const Callout = Styled(Page)`
    margin-top: 15px;    
    
    h1 {
        font-family: ${typography.heading};
        color: ${colours.primary};
        border-bottom: 1px solid cyan;
        padding: 5px 0;
        text-transform: uppercase;
        font-size: 1.8rem;
        transition: all 0.5s ease-out;

    }
    
    h2 {
        font-family: ${typography.body};
        font-size: 1.2em;
        text-transform: uppercase;
        transition: all 0.5s ease-out;        
    }
`;

export default Callout;

