import React, { Component } from 'react';
import { StyleSheet, View, SafeAreaView, TouchableOpacity, Text, Image } from 'react-native';
import Constants from './constants';
import { Header } from './components'

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
        fontSize:16,
        fontWeight:'bold'
    },
    logo:{
        height:150,
        width:150,
        borderRadius:150/2
    },
    logoStyle: {
        alignItems:'center',
        paddingVertical:30,
        borderRadius:150/2
    }
})

const data = [
    {
        id: 0,
        key: 'PrivacyPolicy',
        icon: require('../src/assets/images/privacy-policy.png'),
        title: 'Privcy Policy'
    },
    {
        id: 1,
        key: 'AboutUs',
        icon: require('../src/assets/images/aboutus.png'),
        title: 'About Us'
    },
    {
        id: 2,
        key: 'Share',
        icon: require('../src/assets/images/share.png'),
        title: 'Share'
    }

]


class Home extends Component {
    
    onPressItem = (item) => {
        alert(item.title)
    } 
    
    
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <Header leftIcon={Constants.Images.Back} showLeftIcon={true} title='More' />
                <View style={styles.container}>
                <View style={styles.logoStyle}>
                <Image source={Constants.Images.Logo} style={styles.logo} resizeMode='contain'></Image>
                </View>
                <View style={{marginTop:30}}>
                    {data.map(item => (
                        <TouchableOpacity style={styles.rowContainer} onPress={()=> this.onPressItem(item)}>
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

export default Home;