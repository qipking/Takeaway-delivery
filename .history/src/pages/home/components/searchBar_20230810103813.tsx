import React, { useState, useEffect } from 'react'
import { SearchBar, Icon, Button, Sticky } from '@nutui/nutui-react-taro';
import { View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { Location2, Scan2 } from '@nutui/icons-react-taro';
import { observer, inject } from 'mobx-react';

@inject('store')
@observer
class SearchBarComponent extends React.Component {

  componentDidMount() {
    Taro.getStorage({
      key: 'CityCustmer',
      success: function (res) {
        this.props.store.userStore.changeCity(res.data)
        console.log("CityCustmer", res.data)
      }
    })
  }

  render() {
    return (
      <>
        <Sticky threshold={0}>
          <SearchBar readOnly shape='round' placeholder='上京东,购好物'
            left={
              <View
                onClick={() => {
                  Taro.navigateTo({
                    url: '/pages/home/components/address',
                  })

                  Taro.setNavigationBarTitle({
                    title: '选择地址'
                  })

                  console.log(this.props.store.userStore.city)

                }}
              >
                <Location2 size={15} />
                <Text>{this.props.store.userStore.city}</Text>
              </View>
            }
            right={
              <Scan2
                onClick={() => {
                  console.log('StarFill right in')
                }}
              />
            }
            onInputClick={() => {
              Taro.navigateTo({
                url: '/pages/search/index',
              })
            }}
          />
        </Sticky>
      </>
    )
  }

}

export default SearchBarComponent;