import React, { Component } from 'react';
import { Page, Row, Column } from 'hedron/lib/index';
import PropTypes from 'prop-types';
import ProgramCard from '../programCard/programCard'
import ProgramListHeader from './programsList.style';

export default class ProgramsList extends Component {

    static propTypes = {
      programs: PropTypes.arrayOf(PropTypes.shape({
          title: PropTypes.string,
          keys: PropTypes.number
      }))
    };

    static contextTypes = {
        router: PropTypes.func.isRequired
    };

    static defaultProps = {
      programs:  [
          {title:"photoshop", keys: 334,link: {to: '/programs/photoshop', text:'view'}},
          {title:"Illustrator", keys: 334,link: {to: '/programs/illustrator', text:'view'}},
          {title:"Chrome", keys: 334,link: {to: '/programs/chrome', text:'view'}},
          {title:"Webstorm", keys: 334,link: {to: '/programs/webstorm', text:'view'}},
          {title:"OSX", keys: 334,link: {to: '/programs/osx', text:'view'}},
          {title:"Iterm2", keys: 334,link: {to: '/programs/iterm', text:'view'}},
      ]
    };

    render() {

        const { programs } = this.props;

        return (
        <div>
            <ProgramListHeader fluid>
                <Row>
                    <Column>
                        <h2>Programs</h2>
                        <p>Pick a program, Any Program</p>
                    </Column>
                </Row>
            </ProgramListHeader>
            <Page>
                <Row>
                    { programs.map( (program, index)  => (
                        <ProgramCard
                            index={index}
                            title={program.title}
                            keys={program.keys}
                            link={program.link}
                        />
                    )) }
                </Row>
            </Page>
        </div>

        )
    }

}

