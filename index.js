import React from 'react'
import App from './src/App'
import { AppRegistry } from 'react-native'
import { name as appName } from './app.json'
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper'

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
  },
}

export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <App />
    </PaperProvider >
  )
}

AppRegistry.registerComponent(appName, () => Main);
