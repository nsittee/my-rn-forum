import React from 'react'
import { Surface } from 'react-native-paper'
import { Avatar, Card, Paragraph } from 'react-native-paper'
import { StyleSheet } from 'react-native'

export const MyCard = (props: any) => {
  return (
    <Surface style={styles.surface}>
      <Card>
        <Card.Title
          title={props.title}
          subtitle={props.subtitle}
          left={(props: any) => <Avatar.Icon {...props} icon="folder" />} />
        <Card.Content>
          {/* <Title>Card title</Title> */}
          <Paragraph>{props.content}</Paragraph>
        </Card.Content>
        {/* <Card.Cover source={{ uri: 'https://picsum.photos/700' }} /> */}
      </Card>
    </Surface>
  )
}

const styles = StyleSheet.create({
  surface: {
    elevation: 3,
    margin: 8,
  },
})