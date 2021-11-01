import { StackScreenProps } from '@react-navigation/stack'
import React, { useEffect, useState } from 'react'
import {
  Button,
  ScrollView,
  View,
} from 'react-native'
import { ThreadCard } from '../components/common/MyCard'
import { myAxios } from '../config/axios-config'
import appConstant from '../constant/app-constant'

type Props = StackScreenProps<any>

export interface IResponseEntity<T> {
  message: string,
  data: T
}
export interface IThread {
  _id?: string,
  Title?: string,
  Content?: string,
  CreatedDate?: string,
  Upvote?: number,
  Downvote?: number,
  Author?: string,
  SubParent?: string,

  vote?: string
}
export interface ISub {
  _id?: string,
  SubLongName?: string,
  SubShortName?: string,
  SubUser?: string,
  SubThread?: IThread[]
}

export const HomePage = ({ navigation }: Props) => {
  const [posts, setPosts] = useState<any[]>([])

  useEffect(() => {
    myAxios.get<IResponseEntity<ISub>>(`${appConstant.URL}/api/subs`).then(resp => {
      console.log(resp.data.data.SubThread!![0])
    }).catch(err => {
      console.log(err)
    })

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
      {/* <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      /> */}
    </View>
  )
}