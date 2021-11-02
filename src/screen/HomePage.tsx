import { StackScreenProps } from '@react-navigation/stack'
import React, { useEffect, useState } from 'react'
import {
  Button,
  GestureResponderEvent,
  ScrollView,
  View,
} from 'react-native'
import { ThreadCard } from '../components/common/ThreadCard'
import { myAxios } from '../config/axios-config'
import appConstant from '../constant/app-constant'
import { ISub } from '../shared/model/sub.model'
import { IThread } from '../shared/model/thread.model'
import { IResponseEntity } from '../shared/response.model'

type Props = StackScreenProps<any>

export const HomePage = ({ navigation }: Props) => {
  const [threads, setThreads] = useState<IThread[]>([])

  useEffect(() => {
    myAxios.get<IResponseEntity<ISub>>(`${appConstant.URL}/api/subs`).then(resp => {
      setThreads(resp.data.data.SubThread!!)
    }).catch(err => {
      console.log(err)
    })
  }, [])

  const onTouchThread = (e: GestureResponderEvent, id: string) => {
    navigation.navigate('thread', { threadId: id })
  }
  return (
    <View>
      <ScrollView>
        {
          threads.map(thread => {
            return <ThreadCard key={thread._id} thread={thread} onTouchThread={(e: any) => onTouchThread(e, thread._id!!)} />
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