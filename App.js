// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

// import React from 'react';
// import type {Node} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
// import messaging from '@react-native-firebase/messaging';
// import database from '@react-native-firebase/database';

// // const Section = ({children, title}): Node => {
// //   const isDarkMode = useColorScheme() === 'dark';
// //   return (
// //     <View style={styles.sectionContainer}>
// //       <Text
// //         style={[
// //           styles.sectionTitle,
// //           {
// //             color: isDarkMode ? Colors.white : Colors.black,
// //           },
// //         ]}>
// //         {title}
// //       </Text>
// //       <Text
// //         style={[
// //           styles.sectionDescription,
// //           {
// //             color: isDarkMode ? Colors.light : Colors.dark,
// //           },
// //         ]}>
// //         {children}
// //       </Text>
// //     </View>
// //   );const Section = ({children, title}): Node => {
// //   const isDarkMode = useColorScheme() === 'dark';
// //   return (
// //     <View style={styles.sectionContainer}>
// //       <Text
// //         style={[
// //           styles.sectionTitle,
// //           {
// //             color: isDarkMode ? Colors.white : Colors.black,
// //           },
// //         ]}>
// //         {title}
// //       </Text>
// //       <Text
// //         style={[
// //           styles.sectionDescription,
// //           {
// //             color: isDarkMode ? Colors.light : Colors.dark,
// //           },
// //         ]}>
// //         {children}
// //       </Text>
// //     </View>
// //   );
// // };

// // };

// class App extends React.Component{

//   constructor(props){
//     super(props);
//     console.log(props,'prop')
//   }


//   // async componentDidMount() {
//   //   const enabled = await messaging().hasPermission();
//   //   const { navigation: { dispatch } } = this.props;

//   //   if (enabled) {
//   //     const token = await messaging().getToken();
//   //     console.log('token',token)
//   //   }
//   // }

//   async componentDidMount(){
//   const enabled = await messaging().hasPermission();
//   if (enabled) {
//     const fcmToken = await messaging().getToken();
     
      
//         if (fcmToken) {
//           console.log(fcmToken);
//             database()
//             .ref("/users/" + Math.floor(Math.random() * Math.floor(1000)))
//             .set({
//               notification_token: fcmToken,
//               created_at: Date.now(),
//             })
//             .then(res => {
//               console.log(res);
//             });
//         } else {
//         alert("user doesn't have a device token yet");
//         }
      
//   } else {
//     alert("no");
//   }
  
// }

//   async requestUserPermission()  {
//   const permission = await messaging().requestPermission();

//   if(await permission){
//     console.log('got permission', permission);
//     const token = await messaging().getToken();
//     console.log('token', token);
//   }
// }

 

//   render(){
//     // const isDarkMode = useColorScheme() === 'dark';
//     // const backgroundStyle = {
//     //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//     // };
//     return (
//       <SafeAreaView>
//         <StatusBar/>
//         <ScrollView
//           contentInsetAdjustmentBehavior="automatic"
//           // style={backgroundStyle}
//           >
//           {/* <Header /> */}
//           <View
//             // style={{
//             //   backgroundColor: isDarkMode ? Colors.black : Colors.white,
//             // }}
//             >
//             {/* <Section title="Step One">
//               Edit <Text style={styles.highlight}>App.js</Text> to change this
//               screen and then come back to see your edits.
//             </Section>
//             <Section title="See Your Changes">
//               <ReloadInstructions />
//             </Section>
//             <Section title="Debug">
//               <DebugInstructions />
//             </Section> */}
//             {/* <Section title="Learn More">
//               Read the docs to discover what to do next:
//             </Section> */}
//             <LearnMoreLinks />
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     )
//   }
// }


// // const App: () => Node = () => {
// //   const isDarkMode = useColorScheme() === 'dark';

// //   const backgroundStyle = {
// //     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
// //   };

// //   componentDidMount(){
// //      messaging.getFcmToken()
// //   }


// //   );
// // };

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;


/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

 import React, {Component} from 'react';
 import {
   TextInput,
   StyleSheet,
   Text,
   View,
   TouchableOpacity,
   Alert,
 } from 'react-native';
 import NotifService from './src/utils/notiService';
 import PushNotification, {Importance} from 'react-native-push-notification';
 
 export default class App extends Component {
   constructor(props) {
     super(props);
     this.state = {};
 
     this.notif = new NotifService(
       this.onRegister.bind(this),
       this.onNotif.bind(this),
     );
     this.createDefaultChannels();
     setTimeout(
      () => this.scheduleNotif(), 
      1000
    );
   }


  createDefaultChannels() {
    PushNotification.createChannel(
      {
        channelId: "default-channel-id", // (required)
        channelName: `Default channel`, // (required)
        channelDescription: "A default channel", // (optional) default: undefined.
        soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
        importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
        vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
      },
      (created) => console.log(`createChannel 'default-channel-id' returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
    );
    PushNotification.createChannel(
      {
        channelId: "sound-channel-id", // (required)
        channelName: `Sound channel`, // (required)
        channelDescription: "A sound channel", // (optional) default: undefined.
        soundName: "sample.mp3", // (optional) See `soundName` parameter of `localNotification` function
        importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
        vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
      },
      (created) => console.log(`createChannel 'sound-channel-id' returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
    );
  }

  createOrUpdateChannel() {
    this.lastChannelCounter++;
    PushNotification.createChannel(
      {
        channelId: "custom-channel-id", // (required)
        channelName: `Custom channel - Counter: ${this.lastChannelCounter}`, // (required)
        channelDescription: `A custom channel to categorise your custom notifications. Updated at: ${Date.now()}`, // (optional) default: undefined.
        soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
        importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
        vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
      },
      (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
    );
  }

  popInitialNotification() {
    PushNotification.popInitialNotification((notification) => console.log('InitialNotication:', notification));
  }

  scheduleNotif(soundName) {
    this.lastId++;
    PushNotification.localNotificationSchedule({
      date: new Date(Date.now() + 5 * 1000), // in 30 secs

      /* Android Only Properties */
      channelId: soundName ? 'sound-channel-id' : 'default-channel-id',
      ticker: 'My Notification Ticker', // (optional)
      autoCancel: true, // (optional) default: true
      largeIcon: 'ic_launcher', // (optional) default: "ic_launcher"
      smallIcon: 'ic_notification', // (optional) default: "ic_notification" with fallback for "ic_launcher"
      bigText: 'My <strong>big text</strong> that will be shown when notification is expanded', // (optional) default: "message" prop
      subText: 'This is a subText', // (optional) default: none
      color: 'blue', // (optional) default: system default
      vibrate: true, // (optional) default: true
      vibration: 300, // vibration length in milliseconds, ignored if vibrate=false, default: 1000
      tag: 'some_tag', // (optional) add tag to message
      group: 'group', // (optional) add group to message
      groupSummary: false, // (optional) set this notification to be the group summary for a group of notifications, default: false
      ongoing: true, // (optional) set whether this is an "ongoing" notification
      actions: ['Yes', 'No'], // (Android only) See the doc for notification actions to know more
      invokeApp: true, // (optional) This enable click on actions to bring back the application to foreground or stay in background, default: true
    foreground:true,
      when: null, // (optionnal) Add a timestamp pertaining to the notification (usually the time the event occurred). For apps targeting Build.VERSION_CODES.N and above, this time is not shown anymore by default and must be opted into by using `showWhen`, default: null.
      usesChronometer: false, // (optional) Show the `when` field as a stopwatch. Instead of presenting `when` as a timestamp, the notification will show an automatically updating display of the minutes and seconds since when. Useful when showing an elapsed time (like an ongoing phone call), default: false.
      timeoutAfter: null, // (optional) Specifies a duration in milliseconds after which this notification should be canceled, if it is not already canceled, default: null
    
      /* iOS only properties */
      category: '', // (optional) default: empty string
      
      /* iOS and Android properties */
      id: this.lastId, // (optional) Valid unique 32 bit integer specified as string. default: Autogenerated Unique ID
      title: 'Scheduled Notification', // (optional)
      message: 'My Notification Message', // (required)
      userInfo: { sceen: "home" }, // (optional) default: {} (using null throws a JSON value '<null>' error)
      playSound: !!soundName, // (optional) default: true
      soundName: soundName ? soundName : 'default', // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
      number: 10, // (optional) Valid 32 bit integer specified as string. default: none (Cannot be zero)
    });
  }

 
   render() {
     return (
       <View style={styles.container}>
         <Text style={styles.title}>
           Example app react-native-push-notification
         </Text>
         <View style={styles.spacer}></View>
         <TextInput
           style={styles.textField}
           value={this.state.registerToken}
           placeholder="Register token"
         />
         <View style={styles.spacer}></View>
 
         <TouchableOpacity
           style={styles.button}
           onPress={() => {
             this.notif.localNotif();
           }}>
           <Text>Local Notification (now)</Text>
         </TouchableOpacity>
         <TouchableOpacity
           style={styles.button}
           onPress={() => {
             this.notif.localNotif('sample.mp3');
           }}>
           <Text>Local Notification with sound (now)</Text>
         </TouchableOpacity>
         <TouchableOpacity
           style={styles.button}
           onPress={() => {
             this.notif.scheduleNotif();
           }}>
           <Text>Schedule Notification in 30s</Text>
         </TouchableOpacity>
         <TouchableOpacity
           style={styles.button}
           onPress={() => {
             this.notif.scheduleNotif('sample.mp3');
           }}>
           <Text>Schedule Notification with sound in 30s</Text>
         </TouchableOpacity>
         <TouchableOpacity
           style={styles.button}
           onPress={() => {
             this.notif.cancelNotif();
           }}>
           <Text>Cancel last notification (if any)</Text>
         </TouchableOpacity>
         <TouchableOpacity
           style={styles.button}
           onPress={() => {
             this.notif.cancelAll();
           }}>
           <Text>Cancel all notifications</Text>
         </TouchableOpacity>
         <TouchableOpacity
           style={styles.button}
           onPress={() => {
             this.notif.checkPermission(this.handlePerm.bind(this));
           }}>
           <Text>Check Permission</Text>
         </TouchableOpacity>
         <TouchableOpacity
           style={styles.button}
           onPress={() => {
             this.notif.requestPermissions();
           }}>
           <Text>Request Permissions</Text>
         </TouchableOpacity>
         <TouchableOpacity
           style={styles.button}
           onPress={() => {
             this.notif.abandonPermissions();
           }}>
           <Text>Abandon Permissions</Text>
         </TouchableOpacity>
         <TouchableOpacity
           style={styles.button}
           onPress={() => {
             this.notif.getScheduledLocalNotifications(notifs => console.log(notifs));
           }}>
           <Text>Console.Log Scheduled Local Notifications</Text>
         </TouchableOpacity>
         <TouchableOpacity
           style={styles.button}
           onPress={() => {
             this.notif.getDeliveredNotifications(notifs => console.log(notifs));
           }}>
           <Text>Console.Log Delivered Notifications</Text>
         </TouchableOpacity>
         <TouchableOpacity
           style={styles.button}
           onPress={() => {
             this.notif.createOrUpdateChannel();
           }}>
           <Text>Create or update a channel</Text>
         </TouchableOpacity>
         <TouchableOpacity
           style={styles.button}
           onPress={() => {
             this.notif.popInitialNotification();
           }}>
           <Text>popInitialNotification</Text>
         </TouchableOpacity>
 
         <View style={styles.spacer}></View>
 
         {this.state.fcmRegistered && <Text>FCM Configured !</Text>}
 
         <View style={styles.spacer}></View>
       </View>
     );
   }
 
   onRegister(token) {
     this.setState({registerToken: token.token, fcmRegistered: true});
   }
 
   onNotif(notif) {
     Alert.alert(notif.title, notif.message);
   }
 
   handlePerm(perms) {
     Alert.alert('Permissions', JSON.stringify(perms));
   }
 }
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#F5FCFF',
   },
   welcome: {
     fontSize: 20,
     textAlign: 'center',
     margin: 10,
   },
   button: {
     borderWidth: 1,
     borderColor: '#000000',
     margin: 5,
     padding: 5,
     width: '70%',
     backgroundColor: '#DDDDDD',
     borderRadius: 5,
   },
   textField: {
     borderWidth: 1,
     borderColor: '#AAAAAA',
     margin: 5,
     padding: 5,
     width: '70%',
   },
   spacer: {
     height: 10,
   },
   title: {
     fontWeight: 'bold',
     fontSize: 20,
     textAlign: 'center',
   },
 });