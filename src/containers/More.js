import React, { Component } from 'react';
import { StyleSheet, View, SafeAreaView, TouchableOpacity, Text, Image } from 'react-native';
import Constants from '../constants';
import { Header } from '../components';
import StaticData from '../utils/staticData';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowContainer: {
    flexDirection: 'row',
    paddingVertical: 15,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  iconStyle: {
    height: 30,
    width: 30
  },
  textStyle: {
    marginLeft: Constants.BaseStyle.DEVICE_WIDTH / 100 * 8,
    fontSize: 16,
    fontWeight: 'bold'
  },
  logo: {
    height: 150,
    width: 150,
    borderRadius: 150 / 2
  },
  logoStyle: {
    alignItems: 'center',
    paddingVertical: 30,
    borderRadius: 150 / 2
  }
})




class More extends Component {

  onPressItem = (item) => {
    alert(item.title)
  }


  render() {
    const { navigation: { goBack }} = this.props;
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Header leftIcon={Constants.Images.Back} showLeftIcon={true} title='More' onPressLeft={()=>goBack()} />
        <View style={styles.container}>
          <View style={styles.logoStyle}>
            <Image source={Constants.Images.Logo} style={styles.logo} resizeMode='contain'></Image>
          </View>
          <View style={{ marginTop: 30 }}>
            {StaticData.moreData.map(item => (
              <TouchableOpacity style={styles.rowContainer} onPress={() => this.onPressItem(item)} key={item.id}>
                <Image source={item.icon} style={styles.iconStyle} resizeMode='contain'></Image>
                <Text style={styles.textStyle}>{item.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </SafeAreaView>
    )
  }
}

export default More;