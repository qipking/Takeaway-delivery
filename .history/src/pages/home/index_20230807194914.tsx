import Taro from '@tarojs/taro'
import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import SwiperComponent from './components/swiper'
import SearchBarComponent from './components/searchBar'
import { SearchBar, Icon, Button, Cell, Sticky } from '@nutui/nutui-react-taro';

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

        <Cell style={{ height: '300px' }}>
        </Cell>
      </View>
    )
  }
}

export default HomePage