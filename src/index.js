/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import NotifService from './src/utils/notiService';
import Home from './Home';
import SplashScreen from "react-native-splash-screen";
import messaging from '@react-native-firebase/messaging';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.notif = new NotifService(
      this.onRegister.bind(this),
      this.onNotif.bind(this),
    );
  }

  componendDidMount() {
    SplashScreen.hide();
    this.requestUserPermission();
    this.notif.scheduleNotif();
  }

  async requestUserPermission() {
    const permission = await messaging().requestPermission();

    if (await permission) {
      console.log('got permission', permission);
      const token = await messaging().getToken();
      console.log('token', token);
    }
  }

  onRegister(token) {
    this.setState({ registerToken: token.token, fcmRegistered: true });
  }

  onNotif(notif) {
    Alert.alert(notif.title, notif.message);
  }

  handlePerm(perms) {
    Alert.alert('Permissions', JSON.stringify(perms));
  }

  render() {
    return (
      <View style={styles.container}>
        <Home />
        {/* <Text style={styles.title}>
           Example app react-native-push-notification
         </Text>
         <View style={styles.spacer}></View>
         <TextInput
           style={styles.textField}
           value={this.state.registerToken}
           placeholder="Register token"
         />
         <View style={styles.spacer}></View>
 
         <TouchableOpacity
           style={styles.button}
           onPress={() => {
             this.notif.localNotif();
           }}>
           <Text>Local Notification (now)</Text>
         </TouchableOpacity>
         <TouchableOpacity
           style={styles.button}
           onPress={() => {
             this.notif.localNotif('sample.mp3');
           }}>
           <Text>Local Notification with sound (now)</Text>
         </TouchableOpacity>
         <TouchableOpacity
           style={styles.button}
           onPress={() => {
             this.notif.scheduleNotif();
           }}>
           <Text>Schedule Notification in 30s</Text>
         </TouchableOpacity>
         <TouchableOpacity
           style={styles.button}
           onPress={() => {
             this.notif.scheduleNotif('sample.mp3');
           }}>
           <Text>Schedule Notification with sound in 30s</Text>
         </TouchableOpacity>
         <TouchableOpacity
           style={styles.button}
           onPress={() => {
             this.notif.checkPermission(this.handlePerm.bind(this));
           }}>
           <Text>Check Permission</Text>
         </TouchableOpacity>
         <TouchableOpacity
           style={styles.button}
           onPress={() => {
             this.notif.requestPermissions();
           }}>
           <Text>Request Permissions</Text>
         </TouchableOpacity>
         <TouchableOpacity
           style={styles.button}
           onPress={() => {
             this.notif.cancelAllNotification();
           }}>
           <Text>Cancel All Notification</Text>
         </TouchableOpacity>
         <View style={styles.spacer}></View>
 
         {this.state.fcmRegistered && <Text>FCM Configured !</Text>}
 
         <View style={styles.spacer}></View> */}
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
  button: {
    borderWidth: 1,
    borderColor: '#000000',
    margin: 5,
    padding: 5,
    width: '70%',
    backgroundColor: '#DDDDDD',
    borderRadius: 5,
  },
  textField: {
    borderWidth: 1,
    borderColor: '#AAAAAA',
    margin: 5,
    padding: 5,
    width: '70%',
  },
  spacer: {
    height: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
});
