import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import setTheme from '../style/theme';
import PageContainer from '../containers/PageContainer.js'
import HomePage from "../components/home/Home";

export default class AppContainer extends Component {
    render() {
        return (
        <ThemeProvider theme={ setTheme() }>
            <PageContainer >
                <HomePage/>
            </PageContainer>
        </ThemeProvider>
        )
    }
};
