import React from 'react';
import PropTypes from 'prop-types';
import IntroCallout from './Callout.style';
import {Column, Row} from 'hedron/lib/index';

const Callout = ({title, subText}) => (
    <IntroCallout>
        <Row>
            <Column lg={8}>
                <h1>{title}</h1>
                <h2>{subText}</h2>
            </Column>
        </Row>
    </IntroCallout>
);

Callout.propTypes = {
    title: PropTypes.string.isRequired,
    subText: PropTypes.string.isRequired
};


export default Callout;
