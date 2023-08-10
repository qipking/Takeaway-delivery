import React, { useState } from 'react'
import { Elevator, Picker, Cell } from '@nutui/nutui-react-taro'

const AddressComponent = () => {
  const dataList = [
    {
      title: 'A',
      list: [
        { name: '安徽', id: 1 },
      ]
    },
    {
      title: 'B',
      list: [
        { name: '北京', id: 2 },
      ]
    },
    {
      title: 'C',
      list: [
        { name: '重庆', id: 3 },
      ]
    },
    {
      title: 'F',
      list: [
        { name: '福建', id: 4 },
      ]
    },
    {
      title: 'G',
      list: [
        { name: '广西', id: 5 },
        { name: '广东', id: 6 },
        { name: '甘肃', id: 7 },
      ]
    },
    {
      title: 'H',
      list: [
        { name: '海南', id: 8 },
        { name: '河北', id: 9 },
        { name: '黑龙江', id: 10 },
        { name: '湖南', id: 11 },
        { name: '湖北', id: 12 },
        { name: '河南', id: 13 },
      ]
    },
    {
      title: 'J',
      list: [
        { name: '江苏', id: 14 },
        { name: '江西', id: 15 },
        { name: '吉林', id: 16 },
      ]
    },
    {
      title: 'L',
      list: [
        { name: '辽宁', id: 17 },
      ]
    },
    {
      title: 'N',
      list: [
        { name: '内蒙古', id: 18 },
        { name: '宁夏', id: 19 },
      ]
    },
    {
      title: 'Q',
      list: [
        { name: '青海', id: 20 },
      ]
    },
    {
      title: 'S',
      list: [
        { name: '上海', id: 21 },
        { name: '山西', id: 22 },
        { name: '陕西', id: 23 },
        { name: '山东', id: 24 },
        { name: '四川', id: 25 },
      ]
    },
    {
      title: 'T',
      list: [
        { name: '台湾', id: 26 },
        { name: '天津', id: 27 },
      ]
    },
    {
      title: 'X',
      list: [
        { name: '西藏', id: 28 },
        { name: '新疆', id: 29 },
      ]
    },
    {
      title: 'Y',
      list: [
        { name: '云南', id: 30 },
      ]
    },
    {
      title: 'Z',
      list: [
        { name: '浙江', id: 31 },
      ]
    }
  ]
  const onItemClick = (key: string, item: any) => {
    console.log(key, JSON.stringify(item))
  }

  const onIndexClick = (key: string) => {
    console.log(key)
  }


  const [visible, setIsVisible] = useState(false)
  const [cityCustmer, setCityCustmer] = useState('')
  const [defaultValue, setDefaultValue] = useState([2])
  const [custmerCityData, setCustmerCityData] = useState([
    {
      value: 1,
      text: '北京市',
      children: [
        {
          value: 1,
          text: '朝阳区',
          children: [
            { value: 1, text: '朝阳区', },
            { value: 2, text: '海淀区', },
            { value: 3, text: '大兴区', },
            { value: 4, text: '东城区', },
            { value: 5, text: '西城区', },
            { value: 6, text: '丰台区', },
          ],
        },
        { value: 2, text: '海淀区', },
        { value: 3, text: '大兴区', },
        { value: 4, text: '东城区', },
        { value: 5, text: '西城区', },
        { value: 6, text: '丰台区', },
      ],
    },
    {
      value: 2,
      text: '上海市',
      children: [
        { value: 1, text: '黄浦区', },
        { value: 2, text: '长宁区', },
        { value: 3, text: '普陀区', },
        { value: 4, text: '杨浦区', },
        { value: 5, text: '浦东新区', },
      ],
    },
  ])
  const setChooseValueCustmer = (values: (string | number)[], chooseData: PickerOption[]) => {
    const str = chooseData.map((item) => item.text).join('-')
    setCityCustmer(str)
  }


  return (
    <>
      <Cell title="当前" description={cityCustmer || '请选择地址'} onClick={() => setIsVisible(!visible)} />
      <Picker
        visible={visible}
        options={custmerCityData}
        defaultValue={defaultValue}
        onClose={() => setIsVisible(false)}
        onConfirm={(list, values) => setChooseValueCustmer(values, list)}
        onChange={(
          options: PickerOption[],
          value: (string | number)[],
          columnIndex: number
        ) =>
          console.log(
            '选择用户',
            columnIndex,
            value,
            options
          )
        }
      />


      <Elevator
        list={dataList}
        height="260"
        onItemClick={(key: string, item: any) => onItemClick(key, item)}
        onIndexClick={(key: string) => onIndexClick(key)}
      />
    </>
  )
}
export default AddressComponent;