import React from 'react';
import { View, Text } from 'react-native';

export default class WhiteBox extends React.Component {
  
  render() {
    return (
      <View style={{width: 50, height: 50, backgroundColor: '#fff'}}>
        <Text>{this.props.day}</Text>
      </View>
    );
  }
}

