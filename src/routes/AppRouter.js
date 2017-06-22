import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import PageContainer from "../containers/PageContainer";
import HomePage from "../components/home/Home";
import ProgramsList from "../components/common/ProgramsList";
import Callout from "../components/home/Callout";


const Contact = () => (
    <div style={{marginBottom: '400'}}>
        <h2>Contact page</h2>
        <hr/>
        <p>Click here to contact this guy</p>
        <a>PSyche</a>
    </div>
);

export default class AppRouter extends Component {

    render() {
        return (
            <BrowserRouter>
                <PageContainer>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/programs" component={ProgramsList}/>
                    <Route path="/about" component={Callout}/>
                    <Route path="/contact" component={Contact}/>
                </PageContainer>
            </BrowserRouter>
        )
    }

}
