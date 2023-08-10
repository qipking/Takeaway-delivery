import Taro from '@tarojs/taro'
import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'

class MyPage extends Component {
    
  componentDidMount() {
    Taro.setNavigationBarTitle({
      title:'我的'
    })
  }

  render() {
    return (
      <View className='home'>
        <Text>我的</Text>
      </View>
    )
  }
}

export default MyPage