import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class CalendarDay extends React.Component {
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Mon</Text>
        <Text style={styles.text}>Tue</Text>
        <Text style={styles.text}>Wed</Text>
        <Text style={styles.text}>Thu</Text>
        <Text style={styles.text}>Fri</Text>
        <Text style={styles.text}>Sat</Text>
        <Text style={styles.text}>Sun</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff'
  },
  text: {
    padding: 13,
    fontSize: 16,
    color: 'rgb(255, 104, 96)'
  }
})

