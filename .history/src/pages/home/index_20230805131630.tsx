import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'

export default function Index() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='index'>
      <Text>主页</Text>
    </View>
  )
}
