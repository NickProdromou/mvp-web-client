import React from 'react';
import ProgramsList from '../../../components/common/programsList/ProgramsList';
import renderer from 'react-test-renderer';

it('renders correctly', () => {

    const tree = renderer.create(
        <ProgramsList/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
