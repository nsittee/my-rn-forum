import { StackScreenProps } from '@react-navigation/stack'
import React, { useEffect, useState } from 'react'
import {
  Button,
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

export const ThreadScreen = ({ navigation, route }: Props) => {
  // const [threads, setThreads] = useState<IThread[]>([])

  // useEffect(() => {
  //   myAxios.get<IResponseEntity<ISub>>(`${appConstant.URL}/api/subs`).then(resp => {
  //     setThreads(resp.data.data.SubThread!!)
  //   }).catch(err => {
  //     console.log(err)
  //   })
  // }, [])

  return (
    <View>
      <ScrollView>
        <Button
          title={route.params!!.threadId}
          onPress={() => { }}
        />
      </ScrollView>
    </View>
  )
}