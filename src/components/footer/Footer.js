import React, { Component } from 'react';
import { Page, Row, Column } from 'hedron/lib/index';
import FooterNav from './FooterNav';
import {FooterStyle, Copyright} from './Footer.style.js';

export default class Footer extends Component {
    render() {
        return (
            <FooterStyle>
                <Page>
                    <Row>
                        <Column fluid>
                            <FooterNav/>
                        </Column>
                    </Row>
                </Page>
                <Page fluid>
                    <Row>
                        <Copyright fluid>
                            <p>&copy; Nickpro 2017</p>
                        </Copyright>
                    </Row>
                </Page>
            </FooterStyle>
        )
    }
}
