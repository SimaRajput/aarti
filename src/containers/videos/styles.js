import { StyleSheet, Dimensions } from 'react-native';
import Constants from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  toolbar: {
    marginTop: 30,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
  mediaPlayer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: Constants.Colors.SECONDARY_COLOR,
    justifyContent: 'center',
  },
  listContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  listItemView: {
    height: Constants.BaseStyle.DEVICE_HEIGHT / 100 * 7,
    backgroundColor: Constants.Colors.SECONDARY_COLOR,
    width: Constants.BaseStyle.DEVICE_WIDTH,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: Constants.BaseStyle.DEVICE_WIDTH / 100 * 4,
    marginBottom: Constants.BaseStyle.DEVICE_WIDTH / 100 * 4
  }
});

export default styles;