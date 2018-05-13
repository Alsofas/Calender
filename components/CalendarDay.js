import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class CalendarDay extends React.Component {
  
  render() {
    let calendarDay = null

    if(this.props.blank)
      calendarDay = <Text></Text>
    else
      calendarDay = <Text style={styles.text}>{this.props.day}</Text>

    return (
      <View style={[styles.container, this.props.blank ? styles.blankDay : styles.normalDay]}>
        {calendarDay}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 45,
    height: 45,
    alignItems: 'center'
  },
  text: {
    padding: 10,
  },
  normalDay: {
    backgroundColor: '#fff'
  },
  blankDay: {
    backgroundColor: '#E8E8E8'
  }
})

