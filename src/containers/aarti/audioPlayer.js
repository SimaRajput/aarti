import React, { Component } from 'react';
import { View, SafeAreaView, Text,Button } from 'react-native';
import Constants from '../../constants';
import { Header } from '../../components';
import Sound from 'react-native-sound';
import styles from './audioPlayerStyles';


class AudioPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
        currentTime: 0.0,
        recording: false,
        paused: false,
        stoppedRecording: false,
        finished: false,
        audioPath: props.route.params.item.path,
        hasPermission: undefined,
      };
  
  }
  
  render() {
    const { navigation: { goBack } } = this.props;
    return (
      <SafeAreaView style={styles.safeArea}>
        <Header onPressLeft={()=>goBack()} leftIcon={Constants.Images.Back} showLeftIcon={true} title='Audio Player' />
        <View style={styles.container}>
        <Text>Audio Player</Text>
        </View>
      </SafeAreaView>
    )
  }
}



export default AudioPlayer;


 

 
