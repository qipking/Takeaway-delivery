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
    setDefaultValue([item.id])
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
      text: '安徽省',
      children: [
        {
          value: 1,
          text: '阜阳市',
          children: [
            { value: 1, text: '太和县', },
          ],
        },
        { value: 2, text: '合肥市', },
        { value: 3, text: '黄山市', },
      ],
    },
    {
      value: 2,
      text: '北京市',
      children: [
        { value: 1, text: '朝阳区', },
        { value: 2, text: '海淀区', },
        { value: 3, text: '大兴区', },
        { value: 4, text: '东城区', },
        { value: 5, text: '西城区', },
        { value: 6, text: '丰台区', },
      ],
    },
    {
      value: 3,
      text: '重庆市',
      children: [
        { value: 1, text: '渝中区' },
        { value: 2, text: '大渡口区' },
        { value: 3, text: '江北区' }
      ]
    },
    {
      value: 4,
      text: '福建省',
      children: [
        { value: 1, text: '福州市' },
        { value: 2, text: '泉州市' },
        { value: 3, text: '厦门市' }
      ]
    },
    {
      value: 5,
      text: '广西省',
      children: [
        { value: 7, text: '南宁市' },
        { value: 8, text: '柳州市' },
        { value: 9, text: '北海市' }
      ]
    },
    {
      value: 6,
      text: '广东省',
      children: [
        { value: 10, text: '深圳市' },
        { value: 11, text: '广州市' },
        { value: 12, text: '珠海市' },
        { value: 13, text: '汕头市' },
        { value: 14, text: '佛山市' }
      ]
    }, {
      value: 7,
      text: '河北省',
      children: [
        { value: 15, text: '石家庄市' },
        { value: 16, text: '唐山市' },
        { value: 17, text: '秦皇岛市' },
        { value: 18, text: '邯郸市' },
        { value: 19, text: '邢台市' },
        { value: 20, text: '保定市' }
      ]
    },
    {
      value: 8,
      text: '海南省',
      children: [
        { value: 21, text: '海口市' },
        { value: 22, text: '三亚市' },
        { value: 23, text: '三沙市' }
      ]
    },
    {
      value: 9,
      text: '河南省',
      children: [
        { value: 24, text: '郑州市' },
        { value: 25, text: '开封市' },
        { value: 26, text: '洛阳市' },
        { value: 27, text: '平顶山市' },
        { value: 28, text: '安阳市' },
        { value: 29, text: '鹤壁市' },
        { value: 30, text: '新乡市' },
        { value: 31, text: '焦作市' },
        { value: 32, text: '濮阳市' },
        { value: 33, text: '许昌市' },
        { value: 34, text: '漯河市' },
        { value: 35, text: '三门峡市' },
        { value: 36, text: '南阳市' },
        { value: 37, text: '商丘市' },
        { value: 38, text: '信阳市' },
        { value: 39, text: '周口市' }
      ]
    }, {
      value: 10,
      text: '黑龙江省',
      children: [
        { value: 40, text: '哈尔滨市' },
        { value: 41, text: '齐齐哈尔市' },
        { value: 42, text: '牡丹江市' },
        { value: 43, text: '佳木斯市' },
        { value: 44, text: '大庆市' },
        { value: 45, text: '伊春市' },
        { value: 46, text: '鹤岗市' },
        { value: 47, text: '鸡西市' },
        { value: 48, text: '双鸭山市' },
        { value: 49, text: '大兴安岭地区' }
      ]
    },
    {
      value: 11,
      text: '湖南省',
      children: [
        { value: 50, text: '长沙市' },
        { value: 51, text: '株洲市' },
        { value: 52, text: '湘潭市' },
        { value: 53, text: '衡阳市' },
        { value: 54, text: '邵阳市' },
        { value: 55, text: '岳阳市' },
        { value: 56, text: '常德市' },
        { value: 57, text: '张家界市' },
        { value: 58, text: '益阳市' },
        { value: 59, text: '郴州市' },
        { value: 60, text: '永州市' },
        { value: 61, text: '怀化市' },
        { value: 62, text: '娄底市' }
      ]
    }, {
      value: 12,
      text: '湖北省',
      children: [
        { value: 63, text: '武汉市' },
        { value: 64, text: '黄石市' },
        { value: 65, text: '十堰市' },
        { value: 66, text: '宜昌市' },
        { value: 67, text: '襄阳市' },
        { value: 68, text: '鄂州市' },
        { value: 69, text: '荆门市' },
        { value: 70, text: '孝感市' },
        { value: 71, text: '荆州市' },
        { value: 72, text: '黄冈市' },
        { value: 73, text: '咸宁市' },
        { value: 74, text: '随州市' },
        { value: 75, text: '恩施土家族苗族自治州' }
      ]
    },
    {
      value: 13,
      text: '吉林省',
      children: [
        { value: 76, text: '长春市' },
        { value: 77, text: '吉林市' },
        { value: 78, text: '四平市' },
        { value: 79, text: '辽源市' },
        { value: 80, text: '通化市' },
        { value: 81, text: '白山市' },
        { value: 82, text: '松原市' },
        { value: 83, text: '白城市' },
        { value: 84, text: '延边朝鲜族自治州' }
      ]
    },
    {
      value: 14,
      text: '辽宁省',
      children: [
        { value: 85, text: '沈阳市' },
        { value: 86, text: '大连市' },
        { value: 87, text: '鞍山市' },
        { value: 88, text: '抚顺市' },
        { value: 89, text: '本溪市' },
        { value: 90, text: '丹东市' },
        { value: 91, text: '锦州市' },
        { value: 92, text: '营口市' },
        { value: 93, text: '阜新市' },
        { value: 94, text: '辽阳市' },
        { value: 95, text: '盘锦市' },
        { value: 96, text: '铁岭市' },
        { value: 97, text: '朝阳市' },
        { value: 98, text: '葫芦岛市' }
      ]
    },
    {
      value: 15,
      text: '内蒙古自治区',
      children: [
        { value: 99, text: '呼和浩特市' },
        { value: 100, text: '包头市' },
        { value: 101, text: '乌海市' },
        { value: 102, text: '赤峰市' },
        { value: 103, text: '通辽市' },
        { value: 104, text: '鄂尔多斯市' },
        { value: 105, text: '呼伦贝尔市' },
        { value: 106, text: '巴彦淖尔市' },
        { value: 107, text: '乌兰察布市' },
        { value: 108, text: '兴安盟' },
        { value: 109, text: '锡林郭勒盟' },
        { value: 110, text: '阿拉善盟' }
      ]
    }, 
    {
      value: 16,
      text: '宁夏回族自治区',
      children: [
        { value: 111, text: '银川市' },
        { value: 112, text: '石嘴山市' },
        { value: 113, text: '吴忠市' },
        { value: 114, text: '固原市' },
        { value: 115, text: '中卫市' }
      ]
    },
    {
      value: 17,
      text: '青海省',
      children: [
        { value: 116, text: '西宁市' },
        { value: 117, text: '海东市' },
        { value: 118, text: '海北藏族自治州' },
        { value: 119, text: '黄南藏族自治州' },
        { value: 120, text: '海南藏族自治州' },
        { value: 121, text: '果洛藏族自治州' },
        { value: 122, text: '玉树藏族自治州' },
        { value: 123, text: '海西蒙古族藏族自治州' }
      ]
    },
    {
      value: 18,
      text: '山东省',
      children: [
        { value: 124, text: '济南市' },
        { value: 125, text: '青岛市' },
        { value: 126, text: '淄博市' },
        { value: 127, text: '枣庄市' },
        { value: 128, text: '东营市' },
        { value: 129, text: '烟台市' },
        { value: 130, text: '潍坊市' },
        { value: 131, text: '济宁市' },
        { value: 132, text: '泰安市' },
        { value: 133, text: '威海市' },
        { value: 134, text: '日照市' },
        { value: 135, text: '莱芜市' },
        { value: 136, text: '临沂市' },
        { value: 137, text: '德州市' },
        { value: 138, text: '聊城市' },
        { value: 139, text: '滨州市' },
        { value: 140, text: '菏泽市' }
      ]
    }, 
    {
      value: 19,
      text: '四川省',
      children: [
        { value: 141, text: '成都市' },
        { value: 142, text: '绵阳市' },
        { value: 143, text: '自贡市' },
        { value: 144, text: '攀枝花市' },
        { value: 145, text: '泸州市' },
        { value: 146, text: '德阳市' },
        { value: 147, text: '广元市' },
        { value: 148, text: '遂宁市' },
        { value: 149, text: '内江市' },
        { value: 150, text: '乐山市' },
        { value: 151, text: '南充市' },
        { value: 152, text: '眉山市' },
        { value: 153, text: '宜宾市' },
        { value: 154, text: '广安市' },
        { value: 155, text: '达州市' },
        { value: 156, text: '雅安市' },
        { value: 157, text: '巴中市' },
        { value: 158, text: '资阳市' },
        { value: 159, text: '阿坝藏族羌族自治州' },
        { value: 160, text: '甘孜藏族自治州' },
        { value: 161, text: '凉山彝族自治州' }
      ]
    },
    {
      value: 20,
      text: '陕西省',
      children: [
        { value: 162, text: '西安市' },
        { value: 163, text: '铜川市' },
        { value: 164, text: '宝鸡市' },
        { value: 165, text: '咸阳市' },
        { value: 166, text: '渭南市' },
        { value: 167, text: '延安市' },
        { value: 168, text: '汉中市' },
        { value: 169, text: '榆林市' },
        { value: 170, text: '安康市' },
        { value: 171, text: '商洛市' }
      ]
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