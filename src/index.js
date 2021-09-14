/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Home from './Home';
import SplashScreen from "react-native-splash-screen";
import messaging from '@react-native-firebase/messaging';

class src extends React.Component {

  constructor(props) {
    super(props);
    console.log(props, 'prop')
  }


  // async componentDidMount() {
  //   const enabled = await messaging().hasPermission();
  //   const { navigation: { dispatch } } = this.props;

  //   if (enabled) {
  //     const token = await messaging().getToken();
  //     console.log('token',token)
  //   }
  // }

  componentDidMount() {
    SplashScreen.hide();
    this.requestUserPermission();
  }

  async requestUserPermission() {
    const permission = await messaging().requestPermission();

    if (await permission) {
      console.log('got permission', permission);
      const token = await messaging().getToken();
      console.log('token', token);
    }
  }

  render() {
    return (
      <Home />
    )
  }
}


const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default src;
