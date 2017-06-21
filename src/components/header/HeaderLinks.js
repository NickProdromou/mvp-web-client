import  React, { Component } from 'react';
import PropTypes from 'prop-types';
import {NavigationLinks} from './Header.style'

export default class HeaderLinks extends Component {

    static PropTypes = {
        navItems: PropTypes.arrayOf(PropTypes.shape({
            title: PropTypes.string.isRequired,
            linkTo: PropTypes.string.isRequired,
        }))
    };

    static defaultProps = {
    navItems: [
        {title: 'home'},
        {title: 'about'},
        {title: 'keys'},
        {title: 'programs'},
        {title: 'contact'}
        ]
    };

    render() {

        const { navItems } = this.props;

        return (
        <NavigationLinks>
            <ul>
                {navItems.map(x => <li>{x.title}</li>)}
            </ul>
        </NavigationLinks>
        )
    }
}

