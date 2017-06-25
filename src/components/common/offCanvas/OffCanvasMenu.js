import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { MobileMenuWrapper, CanvasBg } from './OffCanvasMenu.style';

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
            <MobileMenuWrapper isMenuExpanded={isMenuExpanded}>
                <nav>
                    <ul onClick={closeMenu}>
                        <li><NavLink to={'/'}>home</NavLink></li>
                        <li><NavLink to={'/about'}>about</NavLink></li>
                        <li><NavLink to={'/programs'}>programs</NavLink></li>
                        <li><NavLink to={'/contact'}>contact</NavLink></li>
                    </ul>
                </nav>
            </MobileMenuWrapper>
            <CanvasBg onClick={closeMenu} className="canvasBg">
            </CanvasBg>
        </div>

        )

    }

}
