import React, { Component } from 'react'


import './app.scss'

class App extends Component {
  componentDidMount() { }

  componentDidShow() { }

  componentDidHide() { }

  componentDidCatchError() { }

  // this.props.children 就是要渲染的页面
  render() {
    return (
      this.props.children
    )
  }
}

export default App