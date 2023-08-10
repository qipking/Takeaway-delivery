import React from "react";
import { SearchBar, Icon, Button, Sticky } from '@nutui/nutui-react-taro';
import { View, Text } from '@tarojs/components'
import { Row, Col } from '@nutui/nutui-react-taro';
import { Location2 } from '@nutui/icons-react-taro';

const SearchBarComponent = () => {
  return <>
    <Sticky threshold={0} >
      <SearchBar readOnly shape="round"
        left={<Location2 size={14} />}
        right="搜索"
        onInputClick={() => {
          console.log('StarFill right in')
        }}
      />
    </Sticky >
  </>
}
export default SearchBarComponent;