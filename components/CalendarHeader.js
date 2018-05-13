import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class CalendarDay extends React.Component {
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.month}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 37,
    alignItems: 'center',
    backgroundColor: '#FF6860',
  },
  text: {
    padding: 10,
    fontSize: 20,
    color: '#FFFFFF',
  }
})

