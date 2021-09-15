import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { BackHandler } from 'react-native';
import routes from './routes';

const Stack = createNativeStackNavigator();

class navigator extends React.Component {

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>

        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default navigator;
