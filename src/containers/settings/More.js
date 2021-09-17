import React, { Component } from 'react';
import { StyleSheet, View, SafeAreaView, TouchableOpacity, Text, Image, ScrollView } from 'react-native';
import Constants from '../../constants';
import { Header } from '../../components';
import StaticData from '../../utils/staticData';
import { openFacebookUrl, openTwitterUrl, openInstagramUrl } from "../../utils/linkHelper";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  iconStyle: {
    height: 28,
    width: 28
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
  },
  socilaLinksView: {
    marginTop: Constants.BaseStyle.DEVICE_WIDTH / 100 * 5,
  }
})




class More extends Component {

  onPressItem = (item) => {
    const { navigation: { navigate } } = this.props;
    if (item.key == 'Share') {
      return;
    }
    navigate(item.key);

  }

  onPressSocialLink = (item) => {
    if (item.key == 'Facebook') {
      openFacebookUrl('simar.rajput08071994')
    }
    if (item.key == 'Twitter') {
      openTwitterUrl('SimarRajput9')
    }
    if (item.key == 'Instagram') {
      openInstagramUrl('simarrajput12')
    }


  }


  render() {
    const { navigation: { goBack } } = this.props;
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Header leftIcon={Constants.Images.Back} showLeftIcon={true} title='More' onPressLeft={() => goBack()} />
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.logoStyle}>
            <Image source={Constants.Images.Logo} style={styles.logo} resizeMode='contain'></Image>
          </View>
          <View style={{ marginTop: 20 }}>
            {StaticData.moreData.map(item => (
              <TouchableOpacity style={styles.rowContainer} onPress={() => this.onPressItem(item)} key={item.id}>
                <Image source={item.icon} style={styles.iconStyle} resizeMode='contain'></Image>
                <Text style={styles.textStyle}>{item.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.socilaLinksView}>
            <Text style={styles.textStyle}>{'------- Follow me on -------'}</Text>
            {StaticData.socilaLinkData.map(item => (
              <TouchableOpacity style={styles.rowContainer} onPress={() => this.onPressSocialLink(item)} key={item.id}>
                <Image source={item.icon} style={styles.iconStyle} resizeMode='contain'></Image>
                <Text style={styles.textStyle}>{item.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default More;