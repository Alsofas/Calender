import 'react-native';
import React from 'react';
import { MonoText } from '../StyledText';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<MonoText>Welcome!</MonoText>).toJSON();

  expect(tree).toMatchSnapshot();
});
