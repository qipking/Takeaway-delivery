import React from "react";
import { SearchBar, Icon, Button, Sticky } from '@nutui/nutui-react-taro';
import { View, Text } from '@tarojs/components'

const SearchBarComponent = () => {
  return <>

    <Sticky threshold={0} >
      <Button type="primary"
        onClick={() => {
          console.log('StarFill right in')
        }}
      >吸顶</Button>
    </Sticky>
  </>
}
export default SearchBarComponent;