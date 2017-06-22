import React, { Component } from 'react';
import Styled from 'styled-components';

const Hamburger = Styled.div`
    display: none;
    width: 20px;
    height: 20px;
    background: #fff;
`;

const BunTop = Styled.span`

`;

const Meat = Styled.span`

`;

const BunBottom = Styled.span`

`;


export default class MenuToggle extends Component {

    render() {
       return (
       <Hamburger>
           <BunTop></BunTop>
           <Meat></Meat>
           <BunBottom></BunBottom>
       </Hamburger>
       )
    }
}