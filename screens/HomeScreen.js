import React from 'react'
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert
} from 'react-native'

import { Calendar, CalendarList, Agenda } from 'react-native-calendars'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  }

  state = {
    clickedDate: '',
    messages: [
      { date: '2018-05-20', message:  'Have a nice day!'},
      { date: '2018-05-21', message:  'Have a nice day 2!'}
    ]
  }

  _showMessages = (dateString) => {
    this.setState({clickedDate: dateString})



  }

  render() {
    const clickedDate = this.state.clickedDate;
    const dateToMark = {clickedDate: {selected: true, selectedColor: 'blue'}};

    let messages;

    for(let i = 0; i<this.state.messages; i++) {
      messages.push(<Text>{this.state.messages[i].message}</Text>)
    }

    return (
      <View style={styles.container}>
        <Calendar
          // Handler which gets executed on day press. Default = undefined
          onDayPress={(day) => { this._showMessages(day.dateString) }}
          // Handler which gets executed on day long press. Default = undefined
          onDayLongPress={(day) => {console.log('selected day', day)}}
          // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
          monthFormat={'yyyy MMMM'}
          // Handler which gets executed when visible month changes in calendar. Default = undefined
          onMonthChange={(month) => {console.log('month changed', month)}}
          // Do not show days of other months in month page. Default = false
          hideExtraDays={true}
          // day from another month that is visible in calendar page. Default = false
          disableMonthChange={true}
          // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
          firstDay={1}
          // Show week numbers to the left. Default = false
          showWeekNumbers={true}
          // Handler which gets executed when press arrow icon left. It receive a callback can go back month
          onPressArrowLeft={substractMonth => substractMonth()}
          // Handler which gets executed when press arrow icon left. It receive a callback can go next month
          onPressArrowRight={addMonth => addMonth()}
          // Collection of dates that have to be marked. Default = {}
         markedDates={{[this.state.clickedDate]: {selected: true, selectedColor: 'blue'}}}
          // Collection of dates that have to be marked. Default = {}
        />
        <View>
          <Text>{this.state.messages[0].message}</Text>
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
});

