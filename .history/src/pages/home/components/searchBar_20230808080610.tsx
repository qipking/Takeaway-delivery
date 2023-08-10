import React from "react";
import { SearchBar, Icon, Button, Sticky } from '@nutui/nutui-react-taro';
import { View, Text } from '@tarojs/components'

const SearchBarComponent = () => {
  return <>

    <Sticky threshold={0} >
      <SearchBar shape="round" placeholder="上京东，购好物"
        right={
          <Button size="small"
            onClick={() => {
              console.log('StarFill right in')
            }}
          >搜索</Button>
        }
      />
      <Button type="primary">吸顶</Button>
    </Sticky>
  </>
}
export default SearchBarComponent;