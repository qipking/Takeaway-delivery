import React, { Component } from 'react'
import { Tabbar } from '@nutui/nutui-react-taro';
import { Cart, Category, Find, Home, My } from '@nutui/icons-react-taro';
import { View } from '@tarojs/components'
import HomePage from '../home/'

class Index extends Component {
  state = {
    msg: 'Hello World!',
  }

  onReady() {
    console.log('onReady')
  }

  render() {
    return (
      <View className='index'>
        <HomePage />
        {this.state.msg}
        <Tabbar fixed>
          <Tabbar.Item title="首页" icon={<Home width={20} height={20} />} />
          <Tabbar.Item title="分类" icon={<Category width={20} height={20} />} />
          <Tabbar.Item title="发现" icon={<Find width={20} height={20} />} />
          <Tabbar.Item title="购物车" icon={<Cart width={20} height={20} />} />
          <Tabbar.Item title="我的" icon={<My width={20} height={20} />} />
        </Tabbar>
      </View>
    )
  }
}

export default Index