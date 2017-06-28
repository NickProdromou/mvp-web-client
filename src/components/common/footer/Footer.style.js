import Styled from 'styled-components';
import {Column} from "hedron/lib/index";

const FooterStyle = Styled.footer`

background: ${(props) => props.theme.footer.background};
text-align: center;

`;

const Copyright = Styled(Column)`

background: ${(props) => props.theme.copyright.background};
color: ${(props) => props.theme.copyright.color};
font-size: .8em;
text-align: center;

`;

export { FooterStyle, Copyright };
