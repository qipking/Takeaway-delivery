import React from "react";
import { SearchBar, Icon, Button, Sticky } from '@nutui/nutui-react-taro';
import { HeartFill, StarFill, Scan2, ArrowDown } from '@nutui/icons-react-taro'

const SearchBarComponent = () => {
  return <>

    <Sticky threshold={0} >
      <SearchBar placeholder="上京东，购好物"
        left={<HeartFill size={14} />}
        right={<StarFill size={14} />}
        rightIn={
          <Scan2
            size={14}
            onClick={() => {
              console.log('StarFill right in')
            }}
          />
        }
      />
      <Button type="primary">吸顶</Button>
    </Sticky>
  </>
}
export default SearchBarComponent;