import React, { Component } from 'react';
import { StyleSheet, View, SafeAreaView, Text } from 'react-native';
import Constants from '../../constants';
import { Header } from '../../components'

const styles = StyleSheet.create({
  
  safeArea: {
     flex:1
    },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

class AudioPlayer extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const { navigation: { goBack } } = this.props;
    return (
      <SafeAreaView style={styles.safeArea}>
        <Header onPressLeft={()=>goBack()} leftIcon={Constants.Images.Back} showLeftIcon={true} title='AudioPlayer' />
        <View style={styles.container}>
        <Text>Audio Player</Text>
        </View>
      </SafeAreaView>
    )
  }
}



export default AudioPlayer;