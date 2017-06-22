import React from 'react';
import IntroCallout from './Home.style';
import {Column, Row} from 'hedron/lib/index';

const HomeCallout = (props) => (
    <IntroCallout>
        <Row>
            <Column lg={8}>
                <h1>Welcome to HackSpeed</h1>
                <h2>title pending</h2>
            </Column>
        </Row>
    </IntroCallout>
);

export default HomeCallout;
