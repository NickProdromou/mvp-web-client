import Styled from 'styled-components';
import { Column } from 'hedron';

const IndexView = Styled.main`
   
`;

const IntroCallout = Styled(Column)`
    margin-top: 15px;    
    
    h1 {
        color: blue;
        border-bottom: 1px solid cyan;
        padding: 5px 0;
    }
`;

export {IndexView, IntroCallout};

