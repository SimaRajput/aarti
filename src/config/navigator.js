import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Home from '../Home';
import Aarti from '../containers/aarti';

const stackNavigatorConfiguration = {
  headerShown: false,
  mode: 'card',
  navigationOptions: { gesturesEnabled: false },
};

export const Stack = createNativeStackNavigator();

class navigator extends React.Component {

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={stackNavigatorConfiguration}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Aarti" component={Aarti} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default navigator;
