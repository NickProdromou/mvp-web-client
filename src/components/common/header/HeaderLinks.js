import  React, { Component } from 'react';
import PropTypes from 'prop-types';
import {NavigationLinks} from './Header.style'
import { Link } from 'react-router-dom';

export default class HeaderLinks extends Component {

    static PropTypes = {
        navItems: PropTypes.arrayOf(PropTypes.shape({
            title: PropTypes.string.isRequired,
            linkTo: PropTypes.string.isRequired,
        }))
    };

    static defaultProps = {
    navItems: [
        {title: 'home', to: '/'},
        {title: 'about', to: '/about'},
        {title: 'programs', to: '/programs'},
        {title: 'contact', to: 'contact'}
        ]
    };

    render() {

        const { navItems } = this.props;

        return (
        <NavigationLinks>
            <ul>
                {navItems.map((x, i) => (
                    <li key={i}>
                        <Link to={x.to}>{x.title}</Link>
                    </li>
                ))}
            </ul>
        </NavigationLinks>
        )
    }
}

