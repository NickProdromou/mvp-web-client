import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PageContainer from "../containers/page/PageContainer";
import HomePage from "../components/home/Home";
import SingleProgram from '../components/program/Program.js'

import AboutPage from "../components/about/About";
import Contact from "../components/contact/Contact";
import ProgramsPage from "../components/programs/Programs";
import NotFound from "../components/notfound/NotFound";
import {ThemeProvider} from "styled-components";
import setTheme from '../style/theme';


export default class AppRouter extends Component {

    render() {
        return (
            <BrowserRouter>
                    <PageContainer>
                        <Switch>
                            <Route exact path="/" component={HomePage}/>
                            <Route exact path="/programs" component={ProgramsPage}/>
                            <Route path="/programs/:program" component={SingleProgram}/>
                            <Route path="/about" component={AboutPage}/>
                            <Route path="/contact" component={Contact}/>
                            <Route path="*" component={NotFound} />
                        </Switch>
                    </PageContainer>
            </BrowserRouter>
        )
    }

}
