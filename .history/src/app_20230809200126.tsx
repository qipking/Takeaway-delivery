import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/mobx'
import './app.scss'
import Index from './pages/index'

import userStore from './store/user'


const store = {
  userStore
}

class App extends Component {
  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 就是要渲染的页面
  render () {
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    )
  }
}

export default App