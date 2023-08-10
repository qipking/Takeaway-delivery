import { PropsWithChildren } from 'react'
import { useLaunch } from '@tarojs/taro'
import './app.scss'

import { Provider } from '@tarojs/mobx'
import userStore from './store/user'

const store = {
  userStore
}

function App({ children }: PropsWithChildren<any>) {

  useLaunch(() => {
    console.log('App launched.')
  })

  // children 是将要会渲染的页面
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

export default App
