import React, { useState, useEffect } from 'react'
import { SearchBar, Icon, Button, Sticky } from '@nutui/nutui-react-taro';
import { View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { Location2, Scan2 } from '@nutui/icons-react-taro';

const SearchBarComponent = () => {

  return <>
    <Sticky threshold={0} >
      <SearchBar readOnly shape='round' placeholder='上京东，购好物'
        left={<View
          onClick={() => {
            Taro.navigateTo({
              url: '/pages/home/components/address',
            })

            Taro.setNavigationBarTitle({
              title: '选择地址'
            })

          }}
        >
          <Location2 size={15} />
          <Text>{Taro.getStorage({key: 'CityCustmer'}).data}</Text>
        </View>}
        right={<Scan2
          onClick={() => {
            console.log('StarFill right in')
          }}
        />}
        onInputClick={() => {
          Taro.navigateTo({
            url: '/pages/search/index',
          })
        }}
      />
    </Sticky >
  </>
}
export default SearchBarComponent;