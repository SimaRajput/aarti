import * as React from 'react';
import { View, TouchableOpacity, Image, BackHandler } from 'react-native';
import Video from 'react-native-video';
import VideoPlayerStyles from './videoPlayer-style';
import Orientation from 'react-native-orientation';
import Constants from '../../constants';
// import {Button, Icon} from 'native-base';

export default class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playVideo: false,
      paused: false,
      screenType: 'content',
      fullScreen: true,
    };
  }

  fullScreen = () => {
    Orientation.getOrientation((err, orientation) => {
      if (orientation == 'LANDSCAPE') {
        Orientation.lockToPortrait();
      } else {
        Orientation.lockToLandscape();
      }
    });
  };

  backAction = () => {
    Orientation.getOrientation((err, orientation) => {
      if (orientation == 'LANDSCAPE') {
        Orientation.lockToPortrait();
      }
    });
  };

  componentDidMount() {
    this.backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      this.backAction,
    );
  }

  componentWillUnmount() {
    this.backHandler.remove();
  }
  render() {
    const { playVideo } = this.state;
    let icon = (
      <TouchableOpacity onPress={() => this.setState({ playVideo: true })}>
        <Image
          style={VideoPlayerStyles.imageStyle}
          resizeMode={'contain'}
          source={Constants.Images.play}
        />
      </TouchableOpacity>
    );
    if (playVideo) {
      icon = (
        <TouchableOpacity onPress={() => this.setState({ playVideo: false })}>
          <Image
            style={VideoPlayerStyles.imageStyle}
            resizeMode={'contain'}
            source={Constants.Images.pause}
          />
        </TouchableOpacity>
      );
    }
    const { route } = this.props;
    const { item } = route.params;
    return (
      <View style={VideoPlayerStyles.container}>
        <View style={VideoPlayerStyles.videoContainer}>
          <Video
            rate={1.0}
            volume={1.0}
            source={{ uri: item.video }}
            style={VideoPlayerStyles.mediaPlayer}
            resizeMode={'contain'}
            paused={!playVideo}
          />

          <View style={VideoPlayerStyles.playIcon}>{icon}</View>
          <View style={[{ left: 0 }, VideoPlayerStyles.rateControl]}>
            {/* <Button
              transparent
              onPress={() => {
                this.fullScreen();
              }}>
              <Icon
                type="FontAwesome5"
                name="compress"
                style={{color: '#fff', fontSize: 15}}
              />
            </Button> */}
          </View>
        </View>
      </View>
    );
  }
}
