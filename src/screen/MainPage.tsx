import React, { useEffect, useState } from 'react'
import {
  SafeAreaView,
  ScrollView,
} from 'react-native'
import { Appbar } from 'react-native-paper'
import { MyCard } from '../components/common/MyCard'

export const MainPage = () => {
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
    <SafeAreaView>
      {/* <Appbar.Header >
        <Appbar.Content title="Home" subtitle="bon"></Appbar.Content>
      </Appbar.Header> */}
      <ScrollView>
        {posts.map((post) => <MyCard title={post.title} subtitle={post.subtitle} content={post.content} />)}
      </ScrollView>
    </SafeAreaView >
  )
}