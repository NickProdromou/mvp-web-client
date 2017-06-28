import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import setTheme from '../../style/theme';
import AppRouter from '../../router/AppRouter';


const colours = {
    primary: 'rgba(53, 34, 8, 1)',
    secondary: 'rgba(225, 187, 128, 1)',
    tertiary: 'rgba(123, 107, 67, 1)',
    alert: 'rgba(104, 86, 52, 1)',
    accent : 'rgba(128, 100, 67, 1)',
    baseText: '#222',
    inverseText: '#ffffff',
};

export default class AppContainer extends Component {
    render() {
        return (
            <ThemeProvider theme={setTheme()}>
                <AppRouter/>
            </ThemeProvider>
        )
    }
};
