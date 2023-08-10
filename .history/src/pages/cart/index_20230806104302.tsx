import Taro from '@tarojs/taro'
import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'

class CartPage extends Component {
    
  componentDidMount() {
    Taro.setNavigationBarTitle({
      title:'购物车'
    })
  }

  render() {
    return (
      <View className='home'>
        <Text>购物车</Text>
      </View>
    )
  }
}

export default CartPage