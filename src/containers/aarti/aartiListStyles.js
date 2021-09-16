
import {  StyleSheet } from 'react-native';
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
      height: Constants.BaseStyle.DEVICE_HEIGHT / 100 * 6,
      backgroundColor: Constants.Colors.SECONDARY_COLOR,
      width: Constants.BaseStyle.DEVICE_WIDTH,
      justifyContent: 'center',
      alignItems: 'flex-start',
      paddingLeft: Constants.BaseStyle.DEVICE_WIDTH / 100 * 4,
      marginBottom: Constants.BaseStyle.DEVICE_WIDTH / 100 * 4
    }
  })

  export default styles;