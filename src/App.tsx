import * as React from 'react'
import { Button, View } from 'react-native'
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { HomePage } from './screen/HomePage'
import { ThreadScreen } from './screen/ThreadScreen'

type Props = StackScreenProps<any>

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="home" component={HomePage} />
        <Stack.Screen name="thread" component={ThreadScreen} />
        {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}