import React from 'react';
import ProgramCard from '../../../components/common/programCard/programCard';
import renderer from 'react-test-renderer';

it('renders correctly', () => {

    const tree = renderer.create(
        <ProgramCard
            index={12}
            title="blah"
            keys={345}
            link={{to: '/a-location', text: 'SomeStuff'}}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
