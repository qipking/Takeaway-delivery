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
      <View>
        {0 == 0 && <HomePage />}
        {this.state.msg}
      </View>
    )
  }
}

export default Index