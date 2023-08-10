import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import { Tabbar } from '@nutui/nutui-react-taro';
import { Cart, Category, Find, Home, My } from '@nutui/icons-react-taro';

export default function Index() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <>
      <View className='index'>
        <Text>主页</Text>
      </View>
      <Tabbar fixed>
        <Tabbar.Item title="首页" icon={<Home width={20} height={20} />} />
        <Tabbar.Item title="分类" icon={<Category width={20} height={20} />} />
        <Tabbar.Item title="发现" icon={<Find width={20} height={20} />} />
        <Tabbar.Item title="购物车" icon={<Cart width={20} height={20} />} />
        <Tabbar.Item title="我的" icon={<My width={20} height={20} />} />
      </Tabbar>
    </>
  )
}
