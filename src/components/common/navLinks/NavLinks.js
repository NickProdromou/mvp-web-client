import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { NavContainer, ListContainer, ListItem, MenuLink } from "./NavLinks.style";

export default class NavLinks extends Component {

    static propTypes = {
        vertical: PropTypes.bool.isRequired,
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
        const { links, vertical } = this.props;

        let menuFunction = this.props.closeOffCanvas ? this.props.closeOffCanvas : null;

        return (
            <NavContainer vertical={vertical}>
                <ListContainer vertical={vertical} className="test-class" onClick={ menuFunction }>
                    { links.map((link, i) => (
                        <ListItem vertical={vertical} key={i}>
                            <MenuLink vertical={vertical} to={link.href}>{link.title}</MenuLink>
                        </ListItem>
                    )) }
                </ListContainer>
            </NavContainer>
        )
    }
}
