import React from "react";
import { SearchBar, Icon, Button, Sticky } from '@nutui/nutui-react-taro';
import { View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { Location2 } from '@nutui/icons-react-taro';

const SearchBarComponent = () => {
  return <>
    <Sticky threshold={0} >
      <SearchBar readOnly shape="round" placeholder="上京东，购好物"
        left={<Location2 size={14}
          onClick={() => {
            console.log('StarFill right in')
          }}
        />}
        rightIn={<div
          onClick={() => {
            console.log('StarFill right in')
          }}
        >搜索</div>}
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