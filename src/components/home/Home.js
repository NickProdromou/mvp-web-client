import React, { Component } from 'react';
import Callout from "../common/callout/Callout";
import ProgramsList from "../common/programsList/ProgramsList";

export default class HomePage extends Component {

  render() {
        return(
            <main>
                <Callout
                    title={"Welcome to HackSpeed"}
                    subText={"The name will probably change soon."}
                />
                <ProgramsList/>
            </main>
        )
    }
}
