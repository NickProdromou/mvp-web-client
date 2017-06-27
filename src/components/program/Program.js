import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Callout from "../common/callout/Callout";
import KeyTable from "../common/keyTable/KeyTable";

export default class SingleProgram extends Component {

    propTypes = {
      match: PropTypes.shape({
        isExact: PropTypes.bool,
        params: PropTypes.shape({
            program: PropTypes.string.isRequired,
            path: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
        }).isRequired

      })
    };

    render() {

        const {program} = this.props.match.params;
        const desc = `some specific info about ${program}`;

        return(
            <main>
                <Callout
                    title={program}
                    subText={desc}
                />
                <KeyTable
                    programTitle={program}
                />
            </main>
        )
    }
}
