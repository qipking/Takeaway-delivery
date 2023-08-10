import Taro from '@tarojs/taro'
import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import SwiperComponent from './components/swiper'
import SearchBarComponent from './components/searchBar'

class HomePage extends Component {

  componentDidMount() {
    Taro.setNavigationBarTitle({
      title: '首页'
    })
    
    Taro.setStorage({
      key:"CityCustmer",
      data:"城市"
    })
  }

  render() {
    return (
      <View className='home'>
        <SearchBarComponent />
        <SwiperComponent />
        <Text>首页</Text>

      </View>
    )
  }
}

export default HomePage