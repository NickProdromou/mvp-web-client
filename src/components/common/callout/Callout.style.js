import Styled from 'styled-components';
import { Page } from 'hedron/lib/index';
import typography from '../../../style/typography';

const Callout = Styled(Page)`
    margin-top: 15px;    
    
    h1 {
        font-family: ${typography.heading};
        color: ${(props) => props.theme.callout.heading};
        border-bottom: 1px solid ${(props) => props.theme.callout.bottomUnderline};
        padding: 5px 0;
        text-transform: uppercase;
        font-size: 1.8rem;
        transition: all 0.5s ease-out;

    }
    
    h2 {
        color: ${(props) => props.theme.callout.subHeading};
        font-family: ${typography.body};
        font-size: 1.2em;
        text-transform: uppercase;
        transition: all 0.5s ease-out;        
    }
`;

export default Callout;

