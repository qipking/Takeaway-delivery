import React, { Component } from 'react'
import { View } from '@tarojs/components'
import HomePage from '../home'

class Index extends Component {
  state = {
    msg: 'Hello World!',
  }

  onReady() {
    console.log('onReady')
  }

  render() {
    return (
      <View className="index">
        <HomePage></HomePage>
        {this.state.msg}
      </View>
    )
  }
}

export default Index