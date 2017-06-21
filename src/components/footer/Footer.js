import React, { Component } from 'react';
import { Page, Row, Column } from 'hedron/lib/index'

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <Page debug>
                    <Row>
                        <Column>
                            <nav>
                                <ul>
                                    <li style={{display:'inline-block', margin:'0 5px'}}>link</li>
                                    <li style={{display:'inline-block', margin:'0 5px'}}>link</li>
                                    <li style={{display:'inline-block', margin:'0 5px'}}>link</li>
                                    <li style={{display:'inline-block', margin:'0 5px'}}>link</li>
                                </ul>
                            </nav>
                        </Column>
                    </Row>
                <Row>
                    <Column>
                        <p>&copy; Nickpro 2017</p>
                    </Column>
                </Row>
                </Page>
            </footer>
        )
    }
}

