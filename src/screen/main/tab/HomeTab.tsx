import React, { useCallback, useEffect, useRef, useState } from 'react'
import {
  Button,
  GestureResponderEvent,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import PagerView, { PagerViewOnPageSelectedEvent } from 'react-native-pager-view'
import { Text } from 'react-native-paper'
import { ThreadCard } from '../../../components/common/ThreadCard'
import { myAxios } from '../../../config/axios-config'
import appConstant from '../../../constant/app-constant'
import { ISub } from '../../../shared/model/sub.model'
import { IThread } from '../../../shared/model/thread.model'
import { IResponseEntity } from '../../../shared/response.model'

export const HomeTab = () => {
  const [threads, setThreads] = useState<IThread[]>([])
  const [currentTab, setCurrentTab] = useState(0)
  const ref = useRef<PagerView>(null);

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

  const setPage = useCallback((page: number) => ref.current?.setPage(page), [])
  const onPagerViewScroll = (e: PagerViewOnPageSelectedEvent) => setCurrentTab(e.nativeEvent.position)

  return (
    <>
      <View style={styles.row}>
        <TouchableOpacity
          style={[styles.button, {
            borderBottomColor: currentTab === 0 ? "lightblue" : "white",
          }]}
          disabled={currentTab === 0}
          onPress={() => setPage(0)}>
          <Text style={{ textAlign: "center" }} >Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, {
            borderBottomColor: currentTab === 1 ? "lightblue" : "white"
          }]}
          disabled={currentTab === 1}
          onPress={() => setPage(1)}>
          <Text style={{ textAlign: "center" }}>Popular</Text>
        </TouchableOpacity>
      </View>
      <PagerView
        onPageSelected={onPagerViewScroll}
        ref={ref}
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
  row: {
    flexDirection: "row",
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    borderBottomWidth: 4,
    marginBottom: 6,
    minWidth: "50%",
    // textAlign: "center",
  },
  pagerView: {
    flex: 1,
  },
})