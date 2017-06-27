import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom';
import NavigationLinks from "./NavLinks.style";

export default class NavLinks extends Component {

    static propTypes = {
        vertical: PropTypes.bool,
        links: PropTypes.arrayOf(
            PropTypes.shape({
                title: PropTypes.string.isRequired,
                href: PropTypes.string.isRequired
        })),
        closeOffCanvas: PropTypes.func
    };

    static defaultProps = {
        vertical: false,
        links: [
            {title: 'home', href: '/'},
            {title: 'about', href: '/about'},
            {title: 'programs', href: '/programs'},
            {title: 'contact', href: 'contact'}
        ]
    };

    render () {
        const { links } = this.props;

        let menuFunction = this.props.closeOffCanvas ? this.props.closeOffCanvas : null;

        return (
            <NavigationLinks>
                <ul onClick={ menuFunction }>
                    { links.map((link, i) => (
                        <li key={i}>
                            <NavLink to={link.href}>{link.title}</NavLink>
                        </li>
                    )) }
                </ul>
            </NavigationLinks>
        )
    }
}
