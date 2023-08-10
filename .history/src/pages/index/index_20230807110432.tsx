import React, { Component } from 'react'
import { Tabbar } from '@nutui/nutui-react-taro';
import { Cart, Category, Home, My } from '@nutui/icons-react-taro';
import { View } from '@tarojs/components'
import HomePage from '../home/'
import CategoryPage from '../category/'
import CartPage from '../cart/'
import MyPage from '../my/'

class Index extends Component {

  activeIndex = 0
  setActiveIndex(activeIndex) {
    this.activeIndex = activeIndex
  }

  onReady() {
    console.log('onReady')
  }

  render() {

    return (
      <View className='index'>
        {this.activeIndex == 0 && <HomePage />}
        {this.activeIndex == 1 && <CategoryPage />}
        {this.activeIndex == 2 && <CartPage />}
        {this.activeIndex == 3 && <MyPage />}
        <Tabbar
          defaultValue={0}
          value={this.activeIndex}
          onSwitch={(value) => {
            this.setActiveIndex(value)
          }} fixed={true}>
          <Tabbar.Item title="首页" icon={<Home width={20} height={20} />} />
          <Tabbar.Item title="分类" icon={<Category width={20} height={20} />} />
          <Tabbar.Item title="购物车" icon={<Cart width={20} height={20} />} />
          <Tabbar.Item title="我的" icon={<My width={20} height={20} />} />
        </Tabbar>
      </View>
    )
  }
}

export default Index