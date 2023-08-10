import Taro from '@tarojs/taro'
import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'

class HomePage extends Component {
    
  componentDidMount() {
    Taro.setNavigationBarTitle({
      title:'首页'
    })
  }

  render() {
    return (
      <View className='home'>
        <Text>首页</Text>
      </View>
    )
  }
}

export default HomePage