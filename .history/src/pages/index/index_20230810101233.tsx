import React, { Component } from 'react'
import { Tabbar } from '@nutui/nutui-react-taro'
import { Cart, Category, Home, My } from '@nutui/icons-react-taro'
import { View } from '@tarojs/components'
import { observer } from 'mobx-react'
import Taro from '@tarojs/taro'
import HomePage from '../home/'
import CategoryPage from '../category/'
import CartPage from '../cart/'
import MyPage from '../my/'

@observer
class Index extends Component {
  componentDidMount() {
    Taro.getStorage({
      key: 'CityCustmer',
      success: function (res) {
        this.props.store.userStore.changeCity(res.data)
        console.log("CityCustmer", res.data)
      }
    })
  }


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
        {this.state.activeIndex == 0 && <HomePage />}
        {this.state.activeIndex == 1 && <CategoryPage />}
        {this.state.activeIndex == 2 && <CartPage />}
        {this.state.activeIndex == 3 && <MyPage />}
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