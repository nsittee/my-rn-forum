import React from 'react'
import { HomeTab } from './tab/HomeTab'
import { DiscoverTab } from './tab/DiscoverTab';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export const MainScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <Tab.Screen name="home-tab" component={HomeTab} />
      <Tab.Screen name="discover-tab" component={DiscoverTab} />
      <Tab.Screen name="create-tab" component={DiscoverTab} />
      <Tab.Screen name="chat-tab" component={DiscoverTab} />
      <Tab.Screen name="inbox-tab" component={DiscoverTab} />
    </Tab.Navigator>
  )
}


export default MainScreen