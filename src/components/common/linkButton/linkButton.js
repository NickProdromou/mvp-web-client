import React from 'react';
import PropTypes from 'prop-types';
import Button from './linkButton.style'


const LinkButton = ({to, text}) => (<Button to={to}>{text}</Button>);

LinkButton.propTypes = {
    to: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

LinkButton.contextTypes = {
    router: PropTypes.func.isRequired

};

export default LinkButton;
