import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import About from "./About";
import Data from "./Data";
import Root from "./Root";
import Selection from './Selection';

function HomeScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }

const Tab = createBottomTabNavigator();

export default function App() {
    return (
      
        <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'About') {
              iconName = focused ? 'information-circle' : 'information-circle-outline';
            } else if (route.name === 'Data') {
              iconName = focused ? 'analytics-outline' : 'analytics';
            } else if (route.name === 'Selection') {
              iconName = focused ? 'checkmark-outline' : 'checkmark';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'purple',
          inactiveTintColor: 'gray',
        }}>

        <Tab.Screen name="Home" component={Root} />
        <Tab.Screen name="Data" component={Data} options={{ tabBarLabel: "Data" }}/>
        <Tab.Screen name="Selection" component={Selection} options={{ tabBarLabel: "Selection" }} />  
        <Tab.Screen name="About" component={About} options={{ tabBarLabel: "About" }} />  
        </Tab.Navigator>

    );
  }