import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { Button } from 'react-native-paper';

const App = () => {
  const [counter, setCounter] = useState<number>(0)
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text>{counter}</Text>
          <Button mode="contained" onPress={() => setCounter(counter + 1)}>
            Hi
          </Button>
        </View>
      </ScrollView >
    </SafeAreaView >
  )
}

export default App;
