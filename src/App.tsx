import * as React from 'react'
import { Button, View } from 'react-native'
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { HomePage } from './screen/HomePage'

type Props = StackScreenProps<any>

function ProfileScreen({ navigation }: Props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to Notifications"
        onPress={() => navigation.navigate('Notifications')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  )
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}