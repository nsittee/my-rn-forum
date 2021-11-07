import * as React from 'react'
import { Button, View } from 'react-native'
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { HomeTab } from './screen/main/tab/HomeTab'
import { ThreadScreen } from './screen/ThreadScreen'
import MainScreen from './screen/main'

type Props = StackScreenProps<any>

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="home" component={MainScreen} />
        {/* <Stack.Screen name="thread" component={ThreadScreen} /> */}
        {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}