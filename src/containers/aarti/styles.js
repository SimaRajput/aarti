
import { StyleSheet } from 'react-native';
import Constants from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  subContainer: {
    top: Constants.BaseStyle.DEVICE_HEIGHT / 100 * 3,
  },
  listItemView: {
    height: Constants.BaseStyle.DEVICE_HEIGHT / 100 * 7,
    backgroundColor: Constants.Colors.SECONDARY_COLOR,
    width: Constants.BaseStyle.DEVICE_WIDTH,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: Constants.BaseStyle.DEVICE_WIDTH / 100 * 4,
    marginBottom: Constants.BaseStyle.DEVICE_WIDTH / 100 * 4
  },
  playerContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Constants.Colors.SECONDARY_COLOR,
    alignItems:'center'
  },
  mainImage: {
    width: Constants.BaseStyle.DEVICE_WIDTH / 100 * 50,
    height: Constants.BaseStyle.DEVICE_WIDTH / 100 * 50,
    marginBottom: Constants.BaseStyle.DEVICE_HEIGHT / 100 * 2
  },
  playerView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: Constants.BaseStyle.DEVICE_HEIGHT / 100 * 2,
  },
  detailView: {
    alignItems: 'center',
    marginVertical: Constants.BaseStyle.DEVICE_HEIGHT / 100 * 20,
  },
  title: {
    fontSize: 18,
    color: 'white'
  },
  mediaImage: {
    width: 30,
    height: 30,
    justifyContent:'center',
  },
  buttonSpacing: {
    marginHorizontal: 20
  },
  mediaText: {
    position: 'absolute',
    alignSelf: 'center',
    marginTop: 1,
    color: 'white',
    fontSize: 12
  },
  sliderView: {
    marginVertical: 15,
    marginHorizontal: 15,
    flexDirection: 'row'
  },
  slider: {
    flex: 1,
    alignSelf: 'center',
    marginHorizontal: Platform.select({ ios: 5 })
  },
  duration: {
    color: 'white',
    alignSelf: 'center'
  }
})

export default styles;