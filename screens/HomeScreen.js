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

import WhiteBox from '../components/WhiteBox'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    numberOfDays: null
  }

  componentWillMount = () => {
    this.setState({numberOfDays: new Date(2018, 4, 0).getDate()});
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

  render() {
    const thisMonth = this._getThisMonth()

    let rows = 5;
    let whiteBoxesRow1 = []
    let whiteBoxesRow2 = []
    let whiteBoxesRow3 = []
    let whiteBoxesRow4 = []
    let whiteBoxesRow5 = []

    for(let i = 1; i<this.state.numberOfDays-22; i++) {
      whiteBoxesRow1.push(<WhiteBox day={i}/>)
    }
    for(let i = 8; i<this.state.numberOfDays-15; i++) {
      whiteBoxesRow2.push(<WhiteBox day={i}/>)
    }
    for(let i = 15; i<this.state.numberOfDays-8; i++) {
      whiteBoxesRow3.push(<WhiteBox day={i}/>)
    }
    for(let i = 22; i<this.state.numberOfDays-1; i++) {
      whiteBoxesRow4.push(<WhiteBox day={i}/>)
    }
    for(let i = 29; i<=this.state.numberOfDays; i++) {
      whiteBoxesRow5.push(<WhiteBox day={i}/>)
    }

    return (
      <View style={styles.container}>
        <Text>{thisMonth}</Text>
        <View>{whiteBoxesRow1}</View>
        <View>{whiteBoxesRow2}</View>
        <View>{whiteBoxesRow3}</View>
        <View>{whiteBoxesRow4}</View>
        <View>{whiteBoxesRow5}</View>
      </View>
    );

  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 50,
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#afd7ff',
  }
});

