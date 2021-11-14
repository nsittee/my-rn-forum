import React from 'react'
import { HomeTab } from './tab/HomeTab'
import { DiscoverTab } from './tab/DiscoverTab';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { IconButton } from 'react-native-paper';

const Tab = createBottomTabNavigator();

export const MainScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <Tab.Screen
        name="Home"
        component={HomeTab}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => (<IconButton icon="home" />)
        }}
      />
      <Tab.Screen
        name="discover-tab"
        component={DiscoverTab}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => (<IconButton icon="compass" />)
        }}
      />
      <Tab.Screen
        name="create-tab"
        component={DiscoverTab}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => (<IconButton icon="pencil" />)
        }}
      />
      <Tab.Screen
        name="chat-tab"
        component={DiscoverTab}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => (<IconButton icon="chat" />)
        }}
      />
      <Tab.Screen
        name="inbox-tab"
        component={DiscoverTab}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => (<IconButton icon="bell" />)
        }}
      />
    </Tab.Navigator>
  )
}


export default MainScreen