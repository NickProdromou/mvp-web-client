import React, { Component } from 'react';
import Styled, {keyframes} from 'styled-components';
import colours from '../../style/colours';

const fadeIn = keyframes`
    from {
        transform: translateX(-300px);
    }
    to {
        
    }
`;

const CanvasBg = Styled.div`
    background: rgba(0,0,0,.3);
    top: 0;
    width: 100%;        
    height: 100vh;
    position: absolute;
    z-index: 10;
`;


const MobileMenuWrapper = Styled.div`
    top: 0;
    height: 100vh;
    width: 300px;
    background: lightgrey;
    animation: ${fadeIn} alternate .2s ease-in-out;
    box-shadow: 1px 3 spx 1px rgba(0,0,0,.6);
    padding-top: 50px;
    z-index: 10;
    
    ul {
        margin: 0;
        width: 100%;
        padding: 0;
        z-index: 10;
        > li {
            list-style-type: none;
            font-family: sans-serif;
            font-size: .8em;
            width: 100%;
            background: ${colours.primary};
            color: #fff;
            margin: 5px 0;
            padding: 10px 0;
            text-align: center;
            z-index: 10;
        }
    }
    
`;


export default class OffCanvasMenu extends Component {

    render() {
        return (
            <CanvasBg>
                <MobileMenuWrapper>
                    <nav>
                        <ul>
                            <li>Link</li>
                            <li>Link</li>
                            <li>Link</li>
                            <li>Link</li>
                        </ul>
                    </nav>
                </MobileMenuWrapper>
            </CanvasBg>
        )
    }

}
