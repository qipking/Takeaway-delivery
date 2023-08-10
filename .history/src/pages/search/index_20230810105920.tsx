import React from "react";
import { SearchBar, Icon, Button, Sticky } from '@nutui/nutui-react-taro';
import { View, Text } from '@tarojs/components'

class SearchPage extends React.Component {
  render() {
    return (
      <>

        <Sticky threshold={0} >
          <SearchBar shape="round" placeholder="上京东,购好物"
            rightIn={
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
    )
  }
}

export default SearchPage;