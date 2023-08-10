import { View, Text } from '@tarojs/components'
import './index.scss'
import { Tabbar } from '@nutui/nutui-react-taro';
import { Cart, Category, Home, My } from '@nutui/icons-react-taro';
import HomePage from '../home/index'
import React, { Component } from 'react'


export default class Index extends Component {


  return() {
    <View className='index'>
      <Text>Hello world!</Text>
      <View></View>
      <Tabbar fixed>
        <Tabbar.Item title="首页" icon={<Home width={20} height={20} />} />
        <Tabbar.Item title="分类" icon={<Category width={20} height={20} />} />
        <Tabbar.Item title="购物车" icon={<Cart width={20} height={20} />} />
        <Tabbar.Item title="我的" icon={<My width={20} height={20} />} />
      </Tabbar>
    </View>
  }


}
