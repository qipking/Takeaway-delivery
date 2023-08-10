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
  }

  render() {
    return (
      <View className='home'>
        <SearchBarComponent />
        <SwiperComponent />
        <Text>首页</Text>

        <img src={'https://storage.360buyimg.com/jdc-article/fristfabu.jpg'} alt="" />
        <img src={'https://storage.360buyimg.com/jdc-article/fristfabu.jpg'} alt="" />
        <img src={'https://storage.360buyimg.com/jdc-article/fristfabu.jpg'} alt="" />
        <img src={'https://storage.360buyimg.com/jdc-article/fristfabu.jpg'} alt="" />
      </View>
    )
  }
}

export default HomePage