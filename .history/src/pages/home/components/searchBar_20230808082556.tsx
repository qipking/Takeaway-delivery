import React from "react";
import { SearchBar, Icon, Button, Sticky } from '@nutui/nutui-react-taro';
import { View, Text } from '@tarojs/components'
import { Row, Col } from '@nutui/nutui-react-taro';
import { Location2 } from '@nutui/icons-react-taro';

const SearchBarComponent = () => {
  return <>

    <Sticky threshold={0} >
      <Row>
        <Col span="6">
          <Location2 size="25" />
        </Col>
        <Col span="18">
          <Button block color="#7232dd"
            onClick={() => {
              console.log('StarFill right in')
            }}
          >吸顶</Button>
        </Col>
      </Row>
    </Sticky>
  </>
}
export default SearchBarComponent;