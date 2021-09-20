import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, {useEffect } from 'react';
import Home from '../containers/Home';
import { ArtiList, AudioPlayer, LiveAarti } from '../containers/aarti'
import More from '../containers/settings/More';
import VideoPlayer from '../containers/videos/videoPlayer';
import VideoList from '../containers/videos/videoList';
import PushNotification from 'react-native-push-notification';
import {navigationRef, isMountedRef} from './rootNavigator';
import NotificationPopup from 'react-native-push-notification-popup';
import {pushNotificationInit} from '../utils/pushNotifications';
import * as RootNavigation from './rootNavigator';
import messaging from '@react-native-firebase/messaging';
import SplashScreen from 'react-native-splash-screen';
import PrivacyPolicy from '../containers/settings/PrivacyPolicy';
import AboutUs from '../containers/settings/AboutUs';
import TermsCondition from '../containers/settings/TermsCondition';


const stackNavigatorConfiguration = {
  headerShown: false,
  mode: 'card',
  // navigationOptions: { gesturesEnabled: false },
};

export const Stack = createNativeStackNavigator();



function navigator (){
    
 
  const getToken = async () => {
    messaging().getToken();
     if (fcmToken) {
       console.log('firebaseToken', fcmToken);
    }
  
   }
  
  const requestUserPermission = async ()=> {
   const authStatus = await messaging().requestPermission();
   const enabled =
     authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
     authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  
   if (enabled) {
     console.log('Authorization status:', authStatus);
     getToken();
     pushNotificationInit(RootNavigation);
   }
  }
  useEffect(() => {
    isMountedRef.current = true;

    return () => (isMountedRef.current = false);
  }, []);
  
  
  useEffect(() => {
    SplashScreen.hide();
    requestUserPermission();

  }, []);

  return (
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator initialRouteName="Home" screenOptions={stackNavigatorConfiguration}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="ArtiList" component={ArtiList} />
          <Stack.Screen name="AudioPlayer" component={AudioPlayer} />
          <Stack.Screen name="LiveAarti" component={LiveAarti} />
          <Stack.Screen name="More" component={More} />
          <Stack.Screen name="VideoPlayer" component={VideoPlayer} />
          <Stack.Screen name="VideoList" component={VideoList} />
          <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
          <Stack.Screen name="AboutUs" component={AboutUs} />
          <Stack.Screen name="TermsCondition" component={TermsCondition} />
        </Stack.Navigator>
        <NotificationPopup
          ref={ref => {
            this.notificationRef = ref;
          }}
        />
      </NavigationContainer>
    )
  }

export default navigator;
