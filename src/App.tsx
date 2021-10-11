import React, { useState } from 'react'
import {
  SafeAreaView,
  ScrollView,
  Text,
} from 'react-native'
import { Appbar, Button, Surface } from 'react-native-paper'
import { Avatar, Card, Title, Paragraph } from 'react-native-paper'
import { StyleSheet } from 'react-native'

const LeftContent = (props: any) => <Avatar.Icon {...props} icon="folder" />
const card = <Card>
  <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
  <Card.Content>
    <Title>Card title</Title>
    <Paragraph>Card content</Paragraph>
  </Card.Content>
  <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
  <Card.Actions>
    <Button>Cancel</Button>
    <Button>Ok</Button>
  </Card.Actions>
</Card>

const App = () => {
  const [counter, setCounter] = useState<number>(0)
  return (
    <SafeAreaView>
      <Appbar.Header >
        <Appbar.Content title="Home" subtitle="bon"></Appbar.Content>
      </Appbar.Header>
      <ScrollView>
        <Surface style={styles.surface}>
          <Text>{counter}</Text>
          <Button mode="contained" onPress={() => setCounter(counter + 1)}> Hi </Button>
        </Surface>
        <Surface style={styles.surface}>
          {card}
        </Surface>
        <Surface style={styles.surface}>
          {card}
        </Surface>


      </ScrollView>
    </SafeAreaView >
  )
}
const styles = StyleSheet.create({
  surface: {
    elevation: 3,
    margin: 8,
  },
})

export default App;
