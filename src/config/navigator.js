import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Home from '../containers/Home';
import { ArtiList, AudioPlayer } from '../containers/aarti'
import More from '../containers/More';
import PrivacyPolicy from '../containers/PrivacyPolicy';
import AboutUs from '../containers/AboutUs';
import TermsCondition from '../containers/TermsCondition';


const stackNavigatorConfiguration = {
  headerShown: false,
  mode: 'card',
  // navigationOptions: { gesturesEnabled: false },
};

export const Stack = createNativeStackNavigator();

class navigator extends React.Component {
  constructor(props){
  super(props);
}

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={stackNavigatorConfiguration}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="ArtiList" component={ArtiList} />
          <Stack.Screen name="AudioPlayer" component={AudioPlayer} />
          <Stack.Screen name="More" component={More} />
          <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
          <Stack.Screen name="AboutUs" component={AboutUs} />
          <Stack.Screen name="TermsCondition" component={TermsCondition} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default navigator;
