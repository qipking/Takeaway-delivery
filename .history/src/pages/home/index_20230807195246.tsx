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
      <Cell>

        <View className='home'>
          <Sticky threshold={57} >
            <Button type="primary">吸顶</Button>
          </Sticky>
          <SearchBarComponent />
          <SwiperComponent />
          <SwiperComponent />
          <SwiperComponent />
          <SwiperComponent />
          <Text style='height:130px'>首页</Text>

        </View>
      </Cell>
    )
  }
}

export default HomePage