// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SearchStackNavigator from './src/SearchStackNavigator'
import ComicsStackNavigator from './src/ComicsStackNavigator'

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="SearchStack" component={SearchStackNavigator} options={{headerShown: false}}/>
        <Tab.Screen name="ComicsStack" component={ComicsStackNavigator} options={{headerShown: false}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;