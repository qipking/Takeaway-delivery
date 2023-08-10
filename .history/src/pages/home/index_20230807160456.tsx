import Taro from '@tarojs/taro'
import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { Swiper } from '@nutui/nutui-react-taro';

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
        <Swiper
          defaultValue={0}
          indicator
        >
          <Swiper.Item >
            <img src="https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg" alt="" />
          </Swiper.Item>
          <Swiper.Item >
            <img src="https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg" alt="" />
          </Swiper.Item>
          <Swiper.Item >
            <img src="https://storage.360buyimg.com/jdc-article/welcomenutui.jpg" alt="" />
          </Swiper.Item>
          <Swiper.Item >
            <img src="https://storage.360buyimg.com/jdc-article/fristfabu.jpg" alt="" />
          </Swiper.Item>
        </Swiper>
      </View>
    )
  }
}

export default HomePage