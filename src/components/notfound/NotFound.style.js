import Styled from 'styled-components';
import colours from '../../style/colours';
import typography from '../../style/typography';

const ErrorPage = Styled.div`
    text-align: center;
    max-width: 960px;
    margin: 200px auto;


    h1 {
        color: ${colours.primary};
        font-family: ${typography.heading};
        font-size: 3em;    
        padding: 15px 0;
        border-bottom: 1px solid ${colours.accent}
    }
    
    p {
        text-transform: uppercase;
        font-size: 0.8em;
        font-family: ${typography.body};
    }
    
    span {
        font-size: 2em;
        color: #666;
    }
         
`;

export default ErrorPage;
