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
        <Col span="20">
          <Button block color="#7232dd"
            onClick={() => {
              console.log('StarFill right in')
            }}
          >吸顶</Button>
        </Col>
        <Col span="2">
          <Button shape="square" type="primary" icon="star">收藏</Button>
        </Col>
      </Row>
    </Sticky>
  </>
}
export default SearchBarComponent;