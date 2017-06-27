import Styled from 'styled-components';
import mediaQuery from '../../../style/utils/MediaQueryGenerator';

const Hamburger = Styled.div`
display: block;
height: 40px;
width: 37px;
position: absolute;
top: 10px;
left: 20px;
z-index: 500000;

span, span:before, span:after {    
    cursor: pointer;    
    height: 2px;
    width: 35px;
    top: 15px;
    background: white;
    position: relative;
    display: block;
    content: '';
    transition: all 500ms ease-in-out;
    z-index: 500000;
}    

span:before {
    top: ${(props) => props.collapsed ? '1px' : '-10px'};
    ${(props) => props.collapsed ? 'transform: rotate(45deg);' : '' };
}

span:after {
    top: ${(props) => props.collapsed ? '0' : '10px'};
    ${(props) => props.collapsed ? 'transform: rotate(-45deg);' : '' };
} 

span {    
    background-color: ${(props) => props.collapsed ? 'transparent' : 'white'};
}

${mediaQuery('medium',`
    display: none;
`)}  


`;

export default Hamburger;
