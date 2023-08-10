import React from "react";
import { SearchBar, Icon, Button, Sticky } from '@nutui/nutui-react-taro';
import { HeartFill, StarFill, Scan2, ArrowDown } from '@nutui/icons-react-taro'

const SearchBarComponent = () => {
  return <>

    <Sticky threshold={0} >
      <SearchBar shape="round" placeholder="上京东，购好物" />
      <Button type="primary">吸顶</Button>
    </Sticky>
  </>
}
export default SearchBarComponent;