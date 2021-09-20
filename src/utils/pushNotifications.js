import messaging from '@react-native-firebase/messaging';
export const pushNotificationInit = async navigation => {
  function onMessageReceived(message) {
    console.log(`Hello ${JSON.stringify(message)}`); // Hello world!
    const {body, title} = message.notification;
    // Alert.alert(`A new FCM message arrived!${title}`, JSON.stringify(body));
    this?.notificationRef.show({
      appIconSource: require('../assets/images/logo.png'),
      appTitle: 'Aarti',
      body: 'Aarti Notification Reminder',
      onPress: () => {
        navigation.navigate('LiveAarti');
      },
      slideOutTime: 15000,
      timeText: 'Now',
      title: 'Aarti Notification'
    });
  }
  async function registerDeviceForRemoteMessages() {
    await messaging().registerDeviceForRemoteMessages();
    this.notificationListener = messaging().onMessage(onMessageReceived);
  }
  registerDeviceForRemoteMessages();

  messaging().onNotificationOpenedApp(remoteMessage => {
    navigation.navigate('LiveAarti');
    console.log(
      'Notification caused app to open from background state:',
      remoteMessage.notification,
    );
  });
  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
     if (remoteMessage) {
        navigation.navigate('LiveAarti');
        console.log(
          'Notification caused app to open from quit state:',
          remoteMessage.notification,
        );
      }
    });
};
