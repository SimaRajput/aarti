import React from 'react';
import { StyleSheet, View, SafeAreaView, TouchableOpacity, Text } from 'react-native';
import Constants from './constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  buttonView: {
    width: Constants.BaseStyle.DEVICE_WIDTH / 100 * 80,
    height: Constants.BaseStyle.DEVICE_HEIGHT / 100 * 7,
    backgroundColor: Constants.Colors.SECONDARY_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: Constants.BaseStyle.DEVICE_WIDTH / 100 * 5
  }
})

const Home = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonView}>
        <Text>Aarti</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonView}>
        <Text>Ringtone</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonView}>
        <Text>15 Min OM Meditation</Text>
      </TouchableOpacity>
    </View>

  </SafeAreaView>
)

export default Home;