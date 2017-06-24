import { Page } from 'hedron/lib/index';
import Styled from 'styled-components';

const ProgramListHeader = Styled(Page)`
    background: #607d8b;
    color: #fff;
    -webkit-font-smoothing: antialiased;
    
    div {
        max-width: 960px;
        margin: 0 auto;
    }
    
    h2 {
        margin-bottom: 0;        
    }
    
    p {
        margin-top: .5em;
        font-size: .8em;
    }
`;

export default ProgramListHeader;
