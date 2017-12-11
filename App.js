/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import AlarmAndroid from 'react-native-alarms';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {

  componentDidMount() {
      AlarmAndroid.setAlarm('alarm', AlarmAndroid.RTC_WAKEUP, {
          // Time fields -- passed to Java's Calendar class. These will default to the current time if not provided
          // you should most likely set them all.
          date: 8,// Date of the month
          hour: 17,
          minute: 22,
          second: 0,
          // If interval is set, alarm will be repeating
          interval: AlarmAndroid.INTERVAL_DAY
      });

      AlarmAndroid.alarmExists('alarm').then(([exists]) => console.warn(`alarm1 ${exists ? 'exists' : 'does not exist'}`));
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
