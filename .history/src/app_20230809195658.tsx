import React, { Component } from 'react'
import { Provider } from '@tarojs/mobx'
import './app.scss'
import Index from './pages/index'

import userStore from './store/user'


const store = {
  userStore
}

class App extends Component {
  componentDidMount() { }

  componentDidShow() { }

  componentDidHide() { }

  componentDidCatchError() { }

  // this.props.children 就是要渲染的页面
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

export default App