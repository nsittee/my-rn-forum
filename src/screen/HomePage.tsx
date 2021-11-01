import { StackScreenProps } from '@react-navigation/stack'
import React, { useEffect, useState } from 'react'
import {
  Button,
  ScrollView,
  View,
} from 'react-native'
import { ThreadCard } from '../components/common/MyCard'
import appConstant from '../constant/app-constant'

type Props = StackScreenProps<any>

export const HomePage = ({ navigation }: Props) => {
  const [posts, setPosts] = useState<any[]>([])
  console.log(appConstant);

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
        {
          posts.map((post, i) => {
            return <ThreadCard key={i} title={post.title} subtitle={post.subtitle} content={post.content} />
          })
        }
      </ScrollView>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  )
}