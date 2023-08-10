import React from "react";
import { SearchBar, Icon } from '@nutui/nutui-react-taro';
import { HeartFill, StarFill, ArrowDown } from '@nutui/icons-react-taro'

const SearchBarComponent = () => {
  return <>
    <SearchBar placeholder="上京东，购好物"
      left={<HeartFill size={14}/>}
      right={<StarFill size={14} />}
      rightIn={
        <StarFill
          size={14}
          onClick={() => {
            console.log('StarFill right in')
          }}
        />
      }
    />
  </>
}
export default SearchBarComponent;