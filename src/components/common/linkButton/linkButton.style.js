import Styled from 'styled-components';
import colours from '../../../style/colours';
import typography from '../../../style/typography';
import { Link } from 'react-router-dom';

const Button = Styled(Link)`
    background: ${colours.primary};
    font-family: ${typography.body};
    text-decoration: none;
    color: #fff;
    padding: 5px 15px;
    -webkit-font-smoothing: antialiased;
    text-transform: uppercase;
    font-size: 0.823em;
    font-weight: bold;
    letter-spacing: .034em;
`;

export default Button;
