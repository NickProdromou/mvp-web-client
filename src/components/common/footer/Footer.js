import React, { Component } from 'react';
import { Page, Row, Column } from 'hedron/lib/index';
import {FooterStyle, Copyright} from './Footer.style.js';
import NavLinks from "../navLinks/NavLinks";

export default class Footer extends Component {
    render() {
        return (
            <FooterStyle>
                <Page>
                    <Row>
                        <Column fluid>
                            <NavLinks
                                vertical={false}
                            />
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
