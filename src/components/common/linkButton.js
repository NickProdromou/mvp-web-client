import React from 'react';
import PropTypes from 'prop-types';
import Link from './linkButton.style'

const LinkButton = ({to, text}) => (<Link href={to}>{text}</Link>);

LinkButton.propTypes = {
    to: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export default LinkButton;
