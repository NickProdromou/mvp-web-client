import React, { Component } from 'react';
import Callout from "../common/callout/Callout";

export default class AboutPage extends Component {

    render() {
        return(
            <main>
                <Callout
                    title={"About"}
                    subText={"This app is about keyboard shortcuts and how cool they are"}
                />
            </main>
        )
    }
}
