import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Hamburger from './MenuToggle.style';
import OffCanvasMenu from "../common/offCanvas/OffCanvasMenu";


export default class MenuToggle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isMenuOpen: false
        };
    }

    static propTypes = {
      collapsed: PropTypes.bool
    };

    static defaultProps = {
        collapsed: false
    };

    toggleMenu = (e) => {
        this.setState({
            isMenuOpen: !this.state.isMenuOpen
        });
    };

    render() {
        const { isMenuOpen } = this.state;

        return (
            <div>
                <OffCanvasMenu
                    isMenuExpanded={isMenuOpen}
                    closeMenu={this.toggleMenu}
                />
                <Hamburger
                    onClick={() => this.toggleMenu()}
                    collapsed={isMenuOpen} >
                    <span></span>
                </Hamburger>
            </div>

            )
        }
}
