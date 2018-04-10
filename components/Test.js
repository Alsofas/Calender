import React from 'react';
import { Text } from 'react-native';

export default class Test extends React.Component {
  render() {
    return <Text>{this.props.text}</Text>;
  }
}