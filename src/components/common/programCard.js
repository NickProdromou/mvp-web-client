import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LinkButton from "./linkButton";
import Program from './programCard.style';

const ProgramCard = ({index, title, keys, link, linkText}) => (
    <Program lg={5}>
        <article key={index}>
            <h3>{title}</h3>
            <p>Keyboard shortcuts: {keys} </p>
            <LinkButton
                {...link}
            />
        </article>
    </Program>
);

ProgramCard.propTypes = {
    index: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    keys: PropTypes.number.isRequired,
    link: PropTypes.shape({
        text: PropTypes.string.isRequired,
        to: PropTypes.string.isRequired
    })

};

export default ProgramCard;
