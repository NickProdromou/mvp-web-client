import  React, { Component } from 'react';
import { HeaderView } from './Header.style';
import HeaderLinks from './HeaderLinks.js'
// import MenuToggle from './MenuToggle';
import { Page, Row, Column } from 'hedron';

export default class Header extends Component {

    render() {

        return (
        <HeaderView>
            <Page>
                <Row divisions={6}>
                    <Column lg={2} fluid>
                        <h1>{'HackSpeed >:('}</h1>
                    </Column>
                    <Column lg={4} fluid>
                        <HeaderLinks/>
                    </Column>
                </Row>
            </Page>
        </HeaderView>
        );
    };
};


