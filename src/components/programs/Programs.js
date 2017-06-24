import React, { Component } from 'react';
import Callout from "../common/callout/Callout";
import ProgramsList from "../common/programsList/ProgramsList";

export default class ProgramsPage extends Component {

    render() {
        return(
            <main>
                <Callout
                    title={"Programs"}
                    subText={"Here is a list of programs"}
                />
                <ProgramsList/>
            </main>
        )
    }
}
