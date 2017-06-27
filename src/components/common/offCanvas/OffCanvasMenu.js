import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MobileMenuWrapper, CanvasBg } from './OffCanvasMenu.style';
import NavLinks from "../navLinks/NavLinks";

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

        return (
        <div>
            <MobileMenuWrapper isMenuExpanded={isMenuExpanded}>
                <NavLinks
                    vertical={true}
                    closeOffCanvas={closeMenu}
                />
            </MobileMenuWrapper>
            <CanvasBg isMenuExpanded={isMenuExpanded} onClick={closeMenu} className="canvasBg">
            </CanvasBg>
        </div>

        )

    }

}
