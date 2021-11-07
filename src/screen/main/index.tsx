import React, { useState } from 'react'
import { BottomNavigation, Text } from 'react-native-paper'
import { HomeTab } from './tab/HomeTab'
import { DiscoverTab } from './tab/DiscoverTab';


export const MainScreen = () => {
  const [index, setIndex] = useState(0)
  const [routes] = useState([
    { key: 'home', title: 'Home', icon: 'home-circle' },
    { key: 'discover', title: 'Discover', icon: 'home-search' },
  ])

  const renderScene = BottomNavigation.SceneMap({
    home: () => <HomeTab />,
    discover: () => <DiscoverTab />,
  })

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  )
}


export default MainScreen