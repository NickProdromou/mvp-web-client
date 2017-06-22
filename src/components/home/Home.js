import React, { Component } from 'react';
import HomeCallout from "./Callout";
import ProgramsList from "./ProgramsList";

export default class HomePage extends Component {

  render() {
        return(
            <main>
                <HomeCallout/>
                <ProgramsList/>
            </main>
        )
    }
}
