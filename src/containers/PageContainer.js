import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/common/header/Header';
import Footer from '../components/common/footer/Footer';
import logo from '../assets/images/logo.svg';
import OffCanvasMenu from "../components/common/offCanvas/OffCanvasMenu";


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
