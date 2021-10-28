import { StackScreenProps } from '@react-navigation/stack'
import React, { useEffect, useState } from 'react'
import {
  Button,
  ScrollView,
  View,
} from 'react-native'
import { MyCard } from '../components/common/MyCard'

type Props = StackScreenProps<any>

export const HomePage = ({ navigation }: Props) => {
  const [posts, setPosts] = useState<any[]>([])
  useEffect(() => {
    setPosts([{
      title: "Hi, I'm new",
      subtitle: "2021-10-10",
      content: "this is good content",
    }, {
      title: "This sucks",
      subtitle: "2021-10-12",
      content: "this is even better content",
    }])
  }, [])

  return (
    <View>
      <ScrollView>
        {posts.map((post, i) => <MyCard key={i} title={post.title} subtitle={post.subtitle} content={post.content} />)}
      </ScrollView>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  )
}