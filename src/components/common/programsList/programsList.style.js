import { Page } from 'hedron/lib/index';
import Styled from 'styled-components';

const ProgramListHeader = Styled(Page)`
    background: ${(props) => props.theme.programsList.headingBackground};
    color: ${(props) => props.theme.programsList.headingText};
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
