import React, { Component } from 'react';
import Callout from "../common/callout/Callout";

export default class ContactPage extends Component {

    render() {
        return(
            <main>
                <Callout
                    title={"Contact"}
                    subText={"Some contact info probably"}
                />
            </main>
        )
    }
}
