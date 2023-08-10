import Taro from '@tarojs/taro'
import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import SwiperComponent from '../home/swiper'

class HomePage extends Component {

  componentDidMount() {
    Taro.setNavigationBarTitle({
      title: '首页'
    })
  }

  render() {
    return (
      <View className='home'>
        <Text>首页</Text>
        <SwiperComponent ></Swiper>
      </View>
    )
  }
}

export default HomePage