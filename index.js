// import 'react-native-gesture-handler'
import * as React from 'react';
import App from './src/App'
import { AppRegistry } from 'react-native'
import { name as appName } from './app.json'
import { NavigationContainer } from '@react-navigation/native';
// import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper'

export default function Main() {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
}

AppRegistry.registerComponent(appName, () => Main);
