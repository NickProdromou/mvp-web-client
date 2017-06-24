import React from 'react';
import LinkButton from '../../../components/common/linkButton/linkButton';
import renderer from 'react-test-renderer';

it('renders correctly', () => {

    const tree = renderer.create(
        <LinkButton
            to="/a-link"
            text="Clickonme"
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
