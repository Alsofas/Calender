import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert
} from 'react-native';

import CalendarDay from '../components/CalendarDay'
import CalendarHeader from '../components/CalendarHeader'
import CalendarWeekDays from '../components/CalendarWeekDays'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    numberOfDays: null
  }

  componentWillMount = () => {
    let monthIndex = new Date().getMonth()
    let year = new Date().getFullYear()

    this.setState({numberOfDays: new Date(year, monthIndex, 0).getDate()});
  }

  _getThisMonth = () => {
    const thisMonth = new Date().getMonth();

    switch(thisMonth) {
      case 0:
        return 'January'
      case 4:
        return 'May'
    }
  }

  _getFirstDayInMonth = () => {
    let monthIndex = new Date().getMonth()
    let year = new Date().getFullYear()

    let date = `${year}-0${monthIndex + 1}-01`

    return new Date(date).getDay()
  }

  render() {
    const thisMonth = this._getThisMonth()
    const firstDayInMonth = this._getFirstDayInMonth()

    const numberOfDays = this.state.numberOfDays
    const calendarDays = []
    
    for(let i = 1; i<firstDayInMonth; i++) {
      calendarDays.push(
        <CalendarDay blank={true}/>
      )
    }

    for(let i = 1; i<=numberOfDays/4; i++) {
      calendarDays.push(
        <CalendarDay day={i}/>
      )
    }

    for(let i = 1; i<=numberOfDays/4; i++) {
      calendarDays.push(
        <CalendarDay day={i}/>
      )
    }

    return (
      <View style={styles.container}>
        <View style={styles.calendarHeader}>
          <CalendarHeader month={thisMonth}/>
        </View>
        <View style={styles.calendarWeekDays}>
          <CalendarWeekDays month={thisMonth}/>
        </View>
        <View style={styles.calendarDays}>
          {calendarDays}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 70,
    backgroundColor: '#afd7ff',
  },
  calendarHeader: {
    flex: 2,
    maxHeight: 45
  },
  calendarWeekDays: {
    flex: 3,
    maxHeight: 45,
  },
  calendarDays: {
    flexDirection: 'row',
    overflow: 'hidden',
    backgroundColor: '#fff'
  }
});

