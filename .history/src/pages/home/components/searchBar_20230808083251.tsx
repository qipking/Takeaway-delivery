import React from "react";
import { SearchBar, Icon, Button, Sticky } from '@nutui/nutui-react-taro';
import { View, Text } from '@tarojs/components'
import { Row, Col } from '@nutui/nutui-react-taro';
import { Location2 } from '@nutui/icons-react-taro';

const SearchBarComponent = () => {
  return <>

    <Sticky threshold={0} >
      <Row>
        <Col span="2">
          <Location2 size="25" />
        </Col>
        <Col span="19">
          <Button block color="#7232dd"  icon="serch"
            onClick={() => {
              console.log('StarFill right in')
            }}
          >吸顶</Button>
        </Col>
        <Col span="3">
          <Button shape="round" type="primary">搜索</Button>
        </Col>
      </Row>
    </Sticky>
  </>
}
export default SearchBarComponent;