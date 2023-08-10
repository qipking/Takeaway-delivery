import Taro from '@tarojs/taro'
import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'

class CategoryPage extends Component {
    
  componentDidMount() {
    Taro.setNavigationBarTitle({
      title:'分类'
    })
  }

  render() {
    return (
      <View className='home'>
        <Text>分类</Text>
      </View>
    )
  }
}

export default CategoryPage