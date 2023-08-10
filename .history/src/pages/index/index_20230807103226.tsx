import React, { Component } from 'react'
import { Tabbar } from '@nutui/nutui-react-taro';
import { Cart, Category, Home, My } from '@nutui/icons-react-taro';
import { View } from '@tarojs/components'
import HomePage from '../home/'
import CategoryPage from '../category/'
import CartPage from '../cart/'
import MyPage from '../my/'

class Index extends Component {

  const [state, setState] = useState(0)

  onReady() {
    console.log('onReady')
  }

  render() {
    return (
      <View className='index'>
        {this.state == 0 && <HomePage />}
        {this.state == 1 && <CategoryPage />}
        {this.state == 2 && <CartPage />}
        {this.state == 3 && <MyPage />}
        <Tabbar
          defaultValue={0}
          onSwitch={(value) => {
            this.setState(value)
          }} fixed>
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