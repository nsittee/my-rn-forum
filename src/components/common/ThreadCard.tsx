import React, { useState } from 'react'
import { Surface, Title } from 'react-native-paper'
import { Avatar, Card, Paragraph } from 'react-native-paper'
import { GestureResponderEvent, StyleSheet } from 'react-native'
import { IThread } from '../../shared/model/thread.model'

export const ThreadCard = (props: any) => {
  const [thread, setThread] = useState<IThread>(props.thread)

  const displayVote = thread.Upvote!! - thread.Downvote!!
  const subAuthor = thread.Author ? thread.Author.Username : 'null'
  const subParent = thread.SubParent ? thread.SubParent.SubLongName : 'null'
  const vote = thread.vote

  return (
    <Surface
      onTouchEnd={props.onTouchThread}
      style={styles.surface}>
      <Card>
        <Card.Title
          title={subParent}
          subtitle={`posted by ${subAuthor} on ${thread.CreatedDate} `}
          left={(props: any) => <Avatar.Icon {...props} />}
        />
        <Card.Content>
          <Title>{thread.Title?.substring(0, 36)}</Title>
          <Paragraph>{thread.Content}</Paragraph>
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