import Styled from 'styled-components';
import colours from '../../../style/colours';
import {Column} from "hedron/lib/index";

const FooterStyle = Styled.footer`
    background: ${colours.secondary};       
`;

const Copyright = Styled(Column)`
    background: #1f2431;
    color: #eee;
    font-size: .8em;
    text-align: center;
`;

export { FooterStyle, Copyright };
