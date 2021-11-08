import React, { useEffect, useState } from 'react'
import {
  Button,
  GestureResponderEvent,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native'
import PagerView from 'react-native-pager-view'
import { Text } from 'react-native-paper'
import { ThreadCard } from '../../../components/common/ThreadCard'
import { myAxios } from '../../../config/axios-config'
import appConstant from '../../../constant/app-constant'
import { ISub } from '../../../shared/model/sub.model'
import { IThread } from '../../../shared/model/thread.model'
import { IResponseEntity } from '../../../shared/response.model'

// type Props = StackScreenProps<any>

export const HomeTab = () => {
  const [threads, setThreads] = useState<IThread[]>([])

  useEffect(() => {
    myAxios.get<IResponseEntity<ISub>>(`${appConstant.URL}/api/subs`).then(resp => {
      setThreads(resp.data.data.SubThread!!)
    }).catch(err => {
      console.log(err)
    })
  }, [])

  const onTouchThread = (e: GestureResponderEvent, id: string) => {
    // navigation.navigate('thread', { threadId: id })
  }


  return (
    <>
      <View>
        <Button title="home" onPress={() => { }}>
          <Text>Home</Text>
        </Button>
        <Button title="popular" onPress={() => { }}>
          <Text>Popular</Text>
        </Button>
      </View>
      <PagerView
        style={styles.pagerView}
        showPageIndicator
        initialPage={0}>
        <View key="home">
          <ScrollView>
            {
              threads.map(thread => {
                return <ThreadCard
                  key={thread._id}
                  thread={thread}
                  onTouchThread={(e: GestureResponderEvent) => onTouchThread(e, thread._id!!)}
                />
              })
            }
          </ScrollView>
        </View>
        <View key="popular">
          <Text>Popular</Text>
        </View>
      </PagerView>
    </>
  )
}
const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
  },
});