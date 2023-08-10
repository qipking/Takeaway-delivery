import React, { Component } from 'react'
import { Tabbar } from '@nutui/nutui-react-taro'
import { Cart, Category, Home, My, Sticky } from '@nutui/icons-react-taro'
import { View } from '@tarojs/components'
import HomePage from '../home/'
import CategoryPage from '../category/'
import CartPage from '../cart/'
import MyPage from '../my/'

class Index extends Component {

  constructor(props) {
    super(props)
    this.state = {
      activeIndex: 0,
    }
  }

  onReady() {
    console.log('onReady')
  }

  render() {

    return (
      <View className='index'>
        <Sticky threshold={57} >
          {this.state.activeIndex == 0 && <HomePage />}
          {this.state.activeIndex == 1 && <CategoryPage />}
          {this.state.activeIndex == 2 && <CartPage />}
          {this.state.activeIndex == 3 && <MyPage />}

        </Sticky>
        <Tabbar fixed
          defaultValue={0}
          onSwitch={(value) => {
            this.setState({
              activeIndex: value,
            })
          }}>
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