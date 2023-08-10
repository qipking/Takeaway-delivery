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
        <SwiperComponent />
        <SwiperComponent />
        <SwiperComponent />
        <Text style='height:130px'>首页</Text>

      </View>
    )
  }
}

export default HomePage