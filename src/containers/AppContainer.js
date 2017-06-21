import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import setTheme from '../style/theme';
import PageContainer from '../containers/PageContainer.js'
import IndexPage from '../components/index/IndexPage';

export default class AppContainer extends Component {
    render() {
        return (
        <ThemeProvider theme={ setTheme() }>
            <PageContainer >
                <IndexPage/>
            </PageContainer>
        </ThemeProvider>
        )
    }
};
