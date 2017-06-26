import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import setTheme from '../../style/theme';
import AppRouter from '../../router/AppRouter';

export default class AppContainer extends Component {
    render() {
        return (
            <ThemeProvider theme={setTheme()}>
                <AppRouter/>
            </ThemeProvider>
        )
    }
};
