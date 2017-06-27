import  React, { Component } from 'react';
import HeaderView from './Header.style';
import { Link } from 'react-router-dom';
import { Page, Row, Column } from 'hedron/lib/index';
import MenuToggle from "../menuToggle/MenuToggle";
import NavLinks from "../navLinks/NavLinks";

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
                        <NavLinks/>
                    </Column>
                </Row>
            </Page>
        </HeaderView>
        );
    };
};


