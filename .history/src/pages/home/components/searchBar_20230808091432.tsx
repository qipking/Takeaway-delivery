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
            Taro.chooseAddress({
              success: function (res) {
                console.log(res.userName)
                console.log(res.postalCode)
                console.log(res.provinceName)
                console.log(res.cityName)
                console.log(res.countyName)
                console.log(res.detailInfo)
                console.log(res.nationalCode)
                console.log(res.telNumber)
              }
            })
          }}
        />}
        right={<div
          onClick={() => {
            console.log('StarFill right in')
          }}
        >搜索</div>}
        onInputClick={() => {
          console.log('StarFill right in')
        }}
      />
    </Sticky >
  </>
}
export default SearchBarComponent;