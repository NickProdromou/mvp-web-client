import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import logo from '../config/assets/logo.svg';
import { Page, Row, Column } from 'hedron';
import OffCanvasMenu from "../components/offCanvas/OffCanvasMenu";


export default class PageContainer extends Component {

    static proptypes = {
        children: PropTypes.func.isRequired
    };

    render() {
        const { children } =  this.props;
        return (
            <div>
                {/*<OffCanvasMenu/>*/}
                <Header logo={logo} />
                { children }
                <Footer/>
            </div>

        )
    }
}
