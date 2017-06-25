import  React, { Component } from 'react';
import { HeaderView } from './Header.style';
import HeaderLinks from './HeaderLinks.js'
import { Link } from 'react-router-dom';
import { Page, Row, Column } from 'hedron';
import MenuToggle from "../../menuToggle/MenuToggle";

export default class Header extends Component {

    render() {

        return (
        <HeaderView>
            <MenuToggle/>
            <Page>
                <Row divisions={8}>
                    <Column lg={2} md={3} sm={8} fluid>
                        <Link to="/">
                            <h1>{'HackSpeed >:('}</h1>
                        </Link>
                    </Column>
                    <Column lg={4} md={5} fluid>
                        <HeaderLinks/>
                    </Column>
                </Row>
            </Page>
        </HeaderView>
        );
    };
};


