import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ViewPropTypes, Image, SafeAreaView } from 'react-native';
import { bool, func, string  } from 'prop-types';
import Constants from '../constants';

const styles = StyleSheet.create({

  safeAreaView: {
    flex: 1
  },
  container: {
    alignItems: 'center',
    backgroundColor: Constants.Colors.PRIMARY_COLOR,
    flexDirection: 'row',
    shadowColor: 'gray',
    height: 60,
  },
  subContainer: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 16
  },
  content: {
    alignItems: 'center',
  },
  iconStyle: {
    height: (Constants.BaseStyle.DEVICE_WIDTH / 100) * 8,
    width: (Constants.BaseStyle.DEVICE_WIDTH / 100) * 8,
    resizeMode: 'contain'
  },
  headerLogo: {
    justifyContent: 'center',
    alignItems: 'center',
    flex:1,
    marginRight:22
  },
  titleStyle: {
    color: Constants.Colors.WHITE,
    textTransform: 'capitalize',
    fontSize:18

  },
 
});

const Header = (props) => {
  const {
    onPressLeft,
    style,
    hideTitle,
    title,
    showLeftIcon,
    leftIcon
  } = props;
  return (
    <SafeAreaView>
      <View style={[styles.container, style]}>
        <View style={styles.subContainer}>
          <TouchableOpacity
            hitSlop={Constants.BaseStyle.HIT_SLOP}
            underlayColor={Constants.Colors.TRANSPARENT}
            onPress={onPressLeft}
            style={styles.content}
          >
            {showLeftIcon ? <Image source={leftIcon} style={styles.iconStyle}></Image>:null}

          </TouchableOpacity>
          <View style={styles.headerLogo}>
            {!hideTitle ? 
             <Text style={styles.titleStyle}>{title}</Text>:null}
          </View>
        </View>
      </View>
    </SafeAreaView >
  );
};

Header.propTypes = {
  showLeftIcon: bool,
  onPressLeft: func,
  style: ViewPropTypes.style,
  title:string
};

Header.defaultProps = {
  showLeftIcon: false,
  hideTitle: false,
  onPressLeft: () => { },
};

export default Header;
