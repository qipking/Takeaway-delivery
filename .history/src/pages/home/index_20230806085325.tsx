import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'

export default class HomePage extends Component {
  // 可以使用所有的 React 生命周期方法
  componentDidMount() { }

  // onLoad
  onLoad() { }

  // onReady
  onReady() { }

  // 对应 onShow
  componentDidShow() { }

  // 对应 onHide
  componentDidHide() { }

  // 对应 onPullDownRefresh，除了 componentDidShow/componentDidHide 之外，
  // 所有页面生命周期函数名都与小程序相对应
  onPullDownRefresh() { }

  render() {
    return <>
      <View className='hone'>
        <Text>主页</Text>
      </View>
    </>
  }
}
