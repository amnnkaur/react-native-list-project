import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Splash from './Splash';
import Home from './Home'

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
     <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
     <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}