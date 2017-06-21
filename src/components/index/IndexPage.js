import React, { Component } from 'react';
import {IndexView, IntroCallout} from './Index.style'
import {Column, Page, Row} from "hedron/lib/index";

export default class IndexPage extends Component {

  render() {
        return(
            <IndexView>
                <Page>
                    <Row>
                        <IntroCallout lg={8}>
                            <h1>Welcome to the app...</h1>
                            <h2>This is the home screen</h2>
                        </IntroCallout>
                    </Row>
                    <Row>
                        <Column lg={6}>
                            <h1>H1</h1>
                            <h2>H2</h2>
                            <h3>H3</h3>
                            <h4>H4</h4>
                            <h5>H5</h5>
                            <h6>H6</h6>
                            <hr />
                            <p>p</p>
                        </Column>
                        <Column lg={6}>
                            <h2>This is a title</h2>
                            <p>This is some text</p>
                        </Column>
                    </Row>
                </Page>
            </IndexView>
        )
    }
}
