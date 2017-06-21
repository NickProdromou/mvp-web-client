import  React, { Component } from 'react';
import PropTypes from 'prop-types';
import { HeaderView } from './Header.style';
import HeaderLinks from './HeaderLinks.js'
import { Page, Row, Column } from 'hedron';
import MenuToggle from "./MenuToggle";

export default class Header extends Component {

    static propTypes = {
      logo: PropTypes.string.isRequired
    };

    render() {
        const { logo } = this.props;
        return (
        <HeaderView>
            <Page>
                <Row divisions={6}>
                    <Column lg={2} fluid>
                        <img src={logo} className="App-logo" alt="logo" />
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


