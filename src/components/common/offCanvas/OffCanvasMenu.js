import React, { Component } from 'react';
import Styled, {keyframes} from 'styled-components';
import colours from '../../../style/colours';
import typography from '../../../style/typography';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const fadeIn = keyframes`
    from {
        transform: translateX(-100vw);
    }
    to {
    
    }
`;


const CanvasBg = Styled.div`
    background: rgba(0,0,0,.5);
    top: 0;
    width: calc(100vw + 150px);          
    height: 100vh;
    position: absolute;
    z-index: 100;
    animation: ${fadeIn} alternate 1s ease-in-out;
`;


const MobileMenuWrapper = Styled.div`
    top: 0;
    height: 100vh;
    width: 150px;
    background: ${colours.secondary};    
    padding-top: 50px;
    z-index: 1000;
    position: fixed;
    animation: ${fadeIn} alternate 1s ease-in-out;
    box-shadow: 1px 1px 9px 5px rgba(0,0,0,0.32);
    
    nav {
        margin-top: 70px;
        z-index: 1100;
    }
    
    ul {
        top: 25px;
        max-width: 150px;
        margin: 0;
        padding: 0;
        z-index: 10;
        > li {
            list-style-type: none;
            font-family: ${typography.body};
            font-size: .8em;
            color: #fff;
            margin: 5px 0;
            padding: 10px 0;
            text-align: center;
            text-transform: uppercase;
            
           > a {
                color: #fff;
                &:hover {
                    background: ${colours.accent};
                    color: #000;
            }
                
           }            
        }
    }
    
`;


export default class OffCanvasMenu extends Component {

    static propTypes = {
        isMenuExpanded: PropTypes.bool,
        closeMenu: PropTypes.func.isRequired
    };

    static defaultProps = {
        isMenuExpanded: false
    };

    render() {
        const { closeMenu, isMenuExpanded } = this.props;

        if (!isMenuExpanded) {
            return null;
        }

        return (
        <div>
            <MobileMenuWrapper>
                <nav>
                    <ul onClick={closeMenu}>
                        <li><NavLink to={'/'}>home</NavLink></li>
                        <li><NavLink to={'/about'}>about</NavLink></li>
                        <li><NavLink to={'/programs'}>programs</NavLink></li>
                        <li><NavLink to={'/contact'}>contact</NavLink></li>
                    </ul>
                </nav>
            </MobileMenuWrapper>
            <CanvasBg onClick={closeMenu}>
            </CanvasBg>
        </div>

        )

    }

}
