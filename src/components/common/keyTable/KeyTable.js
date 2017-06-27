import React, { Component } from 'react';
import { Page, Column, Row } from 'hedron';
import PropTypes from 'prop-types';

export default class KeyTable extends Component {

    static PropTypes = {
        programTitle: PropTypes.string.isRequired,
        keys: PropTypes.arrayOf(PropTypes.shape({
            mac_key: PropTypes.string,
            win_key: PropTypes.string,
            description: PropTypes.string,
        }))
    };

    static defaultProps = {
        keys: [
            {
                mac_key: "⌘+ n",
                win_key: "Ctrl + n",
                description: "Open a new window",
            }
        ]
    };

    makeTableRows(keys) {
        return keys.map( key => (
            <tr>
                <td>{key.mac_key}</td>
                <td>{key.win_key}</td>
                <td>{key.description}</td>
            </tr>
        ))
    }


    render() {

        const { keys, programTitle } = this.props;

        return (
            <div>
            <Page>
                <Column>
                    <Row>
                        <div>
                            <h3>{programTitle}</h3>
                            <table>
                                <tr>
                                    <th>mac_key</th>
                                    <th>win_key</th>
                                    <th>Description</th>
                                </tr>
                                {this.makeTableRows(keys)}
                            </table>

                        </div>
                    </Row>
                </Column>
            </Page>
            </div>
        )
    };
};
