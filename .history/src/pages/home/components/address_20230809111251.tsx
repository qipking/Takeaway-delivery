import Taro from '@tarojs/taro'
import React, { useState, useEffect } from 'react'
import { View, Text, Button } from '@tarojs/components'
import { Elevator, Picker, Cell } from '@nutui/nutui-react-taro'

const AddressComponent = () => {
  useEffect(() => {
    // 此处写componentDidMount内容
    Taro.getStorage({
      key: 'CityCustmer',
      success: function (res) {
        console.log("CityCustmer", res.data)
        setCityCustmer(res.data)
      }
    })
  }, []) // 传入空数组表示只在组件挂载时执行一次

  // ...其他代码

  const [cityCustmer, setCityCustmer] = useState("")

  const onItemClick = (key: string, item: any) => {
    setCityCustmer([item.name])
    Taro.setStorage({
      key: "CityCustmer",
      data: item.name
    })
    console.log(key, JSON.stringify(item))
  }

  const onIndexClick = (key: string) => {
    console.log(key)
  }



  const dataList = [
    {
      'title': 'A',
      'list': [
        {
          'name': '鞍山',

          'id': 64
        },
        {
          'name': '安庆',

          'id': 149
        },
        {
          'name': '安阳',

          'id': 174
        },
        {
          'name': '阿拉善盟',

          'id': 202
        },
        {
          'name': '阿坝州',

          'id': 290
        },
        {
          'name': '安顺',

          'id': 294
        },
        {
          'name': '阿里地区',

          'id': 316
        },
        {
          'name': '安康',

          'id': 320
        },
        {
          'name': '阿克苏地区',

          'id': 348
        },
        {
          'name': '阿勒泰地区',

          'id': 355
        },
        {
          'name': '阿拉尔',

          'id': 356
        }
      ]
    },
    {
      'title': 'B',
      'list': [
        {
          'name': '北京',

          'id': 1
        },
        {
          'name': '保定',

          'id': 62
        },
        {
          'name': '包头',

          'id': 63
        },
        {
          'name': '本溪',

          'id': 77
        },
        {
          'name': '蚌埠',

          'id': 100
        },
        {
          'name': '北海',

          'id': 161
        },
        {
          'name': '滨州',

          'id': 166
        },
        {
          'name': '宝鸡',

          'id': 170
        },
        {
          'name': '亳州',

          'id': 189
        },
        {
          'name': '巴彦淖尔',

          'id': 199
        },
        {
          'name': '白山',

          'id': 208
        },
        {
          'name': '白城',

          'id': 210
        },
        {
          'name': '百色',

          'id': 263
        },
        {
          'name': '白沙黎族自治县',

          'id': 278
        },
        {
          'name': '巴中',

          'id': 288
        },
        {
          'name': '毕节地区',

          'id': 296
        },
        {
          'name': '保山',

          'id': 301
        },
        {
          'name': '白银',

          'id': 323
        },
        {
          'name': '巴音郭楞州',

          'id': 350
        },
        {
          'name': '博尔塔拉州',

          'id': 352
        }
      ]
    },
    {
      'title': 'C',
      'list': [
        {
          'name': '成都',

          'id': 17
        },
        {
          'name': '重庆',

          'id': 18
        },
        {
          'name': '长沙',

          'id': 24
        },
        {
          'name': '长春',

          'id': 25
        },
        {
          'name': '常州',

          'id': 45
        },
        {
          'name': '沧州',

          'id': 59
        },
        {
          'name': '承德',

          'id': 72
        },
        {
          'name': '常德',

          'id': 106
        },
        {
          'name': '郴州',

          'id': 107
        },
        {
          'name': '长治',

          'id': 127
        },
        {
          'name': '滁州',

          'id': 148
        },
        {
          'name': '池州',

          'id': 187
        },
        {
          'name': '赤峰',

          'id': 196
        },
        {
          'name': '巢湖',

          'id': 204
        },
        {
          'name': '朝阳',

          'id': 205
        },
        {
          'name': '潮州',

          'id': 257
        },
        {
          'name': '崇左',

          'id': 267
        },
        {
          'name': '澄迈县',

          'id': 274
        },
        {
          'name': '楚雄州',

          'id': 308
        },
        {
          'name': '昌都地区',

          'id': 313
        },
        {
          'name': '昌吉州',

          'id': 351
        }
      ]
    },
    {
      'title': 'D',
      'list': [
        {
          'name': '大连',

          'id': 14
        },
        {
          'name': '东莞',

          'id': 21
        },
        {
          'name': '大庆',

          'id': 48
        },
        {
          'name': '东营',

          'id': 73
        },
        {
          'name': '德州',

          'id': 120
        },
        {
          'name': '大同',

          'id': 125
        },
        {
          'name': '大理州',

          'id': 136
        },
        {
          'name': '丹东',

          'id': 163
        },
        {
          'name': '德阳',

          'id': 173
        },
        {
          'name': '大兴安岭地区',

          'id': 218
        },
        {
          'name': '儋州',

          'id': 270
        },
        {
          'name': '东方',

          'id': 273
        },
        {
          'name': '定安县',

          'id': 275
        },
        {
          'name': '达州',

          'id': 285
        },
        {
          'name': '德宏州',

          'id': 309
        },
        {
          'name': '迪庆州',

          'id': 311
        },
        {
          'name': '定西',

          'id': 330
        }
      ]
    },
    {
      'title': 'E',
      'list': [
        {
          'name': '鄂尔多斯',

          'id': 43
        },
        {
          'name': '鄂州',

          'id': 230
        },
        {
          'name': '恩施州',

          'id': 235
        }
      ]
    },
    {
      'title': 'F',
      'list': [
        {
          'name': '福州',

          'id': 34
        },
        {
          'name': '佛山',

          'id': 36
        },
        {
          'name': '抚顺',

          'id': 66
        },
        {
          'name': '阜新',

          'id': 164
        },
        {
          'name': '阜阳',

          'id': 188
        },
        {
          'name': '抚州',

          'id': 223
        },
        {
          'name': '防城港',

          'id': 260
        }
      ]
    },
    {
      'title': 'G',
      'list': [
        {
          'name': '广州',

          'id': 3
        },
        {
          'name': '贵阳',

          'id': 82
        },
        {
          'name': '赣州',

          'id': 102
        },
        {
          'name': '桂林',

          'id': 135
        },
        {
          'name': '贵港',

          'id': 262
        },
        {
          'name': '广元',

          'id': 280
        },
        {
          'name': '广安',

          'id': 284
        },
        {
          'name': '甘孜州',

          'id': 291
        },
        {
          'name': '甘南州',

          'id': 333
        },
        {
          'name': '固原',

          'id': 336
        },
        {
          'name': '果洛州',

          'id': 342
        }
      ]
    },
    {
      'title': 'H',
      'list': [
        {
          'name': '杭州',

          'id': 5
        },
        {
          'name': '合肥',

          'id': 15
        },
        {
          'name': '哈尔滨',

          'id': 16
        },
        {
          'name': '呼和浩特',

          'id': 41
        },
        {
          'name': '邯郸',

          'id': 60
        },
        {
          'name': '葫芦岛',

          'id': 70
        },
        {
          'name': '衡水',

          'id': 80
        },
        {
          'name': '海口',

          'id': 83
        },
        {
          'name': '湖州',

          'id': 90
        },
        {
          'name': '淮安',

          'id': 97
        },
        {
          'name': '衡阳',

          'id': 105
        },
        {
          'name': '汉中',

          'id': 115
        },
        {
          'name': '菏泽',

          'id': 124
        },
        {
          'name': '惠州',

          'id': 133
        },
        {
          'name': '黄山',

          'id': 141
        },
        {
          'name': '淮南',

          'id': 150
        },
        {
          'name': '淮北',

          'id': 183
        },
        {
          'name': '呼伦贝尔',

          'id': 198
        },
        {
          'name': '鹤岗',

          'id': 212
        },
        {
          'name': '黑河',

          'id': 217
        },
        {
          'name': '黄石',

          'id': 227
        },
        {
          'name': '黄冈',

          'id': 232
        },
        {
          'name': '怀化',

          'id': 244
        },
        {
          'name': '鹤壁',

          'id': 247
        },
        {
          'name': '河源',

          'id': 254
        },
        {
          'name': '贺州',

          'id': 264
        },
        {
          'name': '河池',

          'id': 265
        },
        {
          'name': '红河州',

          'id': 306
        },
        {
          'name': '海东地区',

          'id': 338
        },
        {
          'name': '海北州',

          'id': 339
        },
        {
          'name': '黄南州',

          'id': 340
        },
        {
          'name': '海南州',

          'id': 341
        },
        {
          'name': '海西州',

          'id': 344
        },
        {
          'name': '哈密地区',

          'id': 346
        },
        {
          'name': '和田地区',

          'id': 347
        }
      ]
    },
    {
      'title': 'J',
      'list': [
        {
          'name': '济南',

          'id': 12
        },
        {
          'name': '锦州',

          'id': 68
        },
        {
          'name': '晋中',

          'id': 71
        },
        {
          'name': '吉林',

          'id': 74
        },
        {
          'name': '济宁',

          'id': 79
        },
        {
          'name': '金华',

          'id': 86
        },
        {
          'name': '嘉兴',

          'id': 88
        },
        {
          'name': '九江',

          'id': 101
        },
        {
          'name': '荆州',

          'id': 109
        },
        {
          'name': '景德镇',

          'id': 151
        },
        {
          'name': '江门',

          'id': 153
        },
        {
          'name': '揭阳',

          'id': 154
        },
        {
          'name': '焦作',

          'id': 175
        },
        {
          'name': '晋城',

          'id': 190
        },
        {
          'name': '鸡西',

          'id': 211
        },
        {
          'name': '佳木斯',

          'id': 215
        },
        {
          'name': '吉安',

          'id': 221
        },
        {
          'name': '荆门',

          'id': 229
        },
        {
          'name': '济源',

          'id': 252
        },
        {
          'name': '金昌',

          'id': 322
        },
        {
          'name': '嘉峪关',

          'id': 324
        },
        {
          'name': '酒泉',

          'id': 328
        }
      ]
    },
    {
      'title': 'K',
      'list': [
        {
          'name': '昆明',

          'id': 19
        },
        {
          'name': '开封',

          'id': 110
        },
        {
          'name': '喀什地区',

          'id': 179
        },
        {
          'name': '克拉玛依',

          'id': 180
        },
        {
          'name': '克孜勒苏柯州',

          'id': 349
        }
      ]
    },
    {
      'title': 'L',
      'list': [
        {
          'name': '洛阳',

          'id': 27
        },
        {
          'name': '兰州',

          'id': 30
        },
        {
          'name': '廊坊',

          'id': 46
        },
        {
          'name': '临沂',

          'id': 58
        },
        {
          'name': '辽阳',

          'id': 75
        },
        {
          'name': '连云港',

          'id': 96
        },
        {
          'name': '泸州',

          'id': 117
        },
        {
          'name': '莱芜',

          'id': 122
        },
        {
          'name': '聊城',

          'id': 123
        },
        {
          'name': '柳州',

          'id': 134
        },
        {
          'name': '丽江',

          'id': 137
        },
        {
          'name': '丽水',

          'id': 139
        },
        {
          'name': '拉萨',

          'id': 178
        },
        {
          'name': '六安',

          'id': 186
        },
        {
          'name': '临汾',

          'id': 193
        },
        {
          'name': '吕梁',

          'id': 194
        },
        {
          'name': '辽源',

          'id': 206
        },
        {
          'name': '龙岩',

          'id': 226
        },
        {
          'name': '娄底',

          'id': 245
        },
        {
          'name': '漯河',

          'id': 248
        },
        {
          'name': '来宾',

          'id': 266
        },
        {
          'name': '临高县',

          'id': 277
        },
        {
          'name': '乐山',

          'id': 283
        },
        {
          'name': '凉山州',

          'id': 292
        },
        {
          'name': '六盘水',

          'id': 293
        },
        {
          'name': '临沧',

          'id': 304
        },
        {
          'name': '林芝地区',

          'id': 317
        },
        {
          'name': '陇南',

          'id': 331
        },
        {
          'name': '临夏州',

          'id': 332
        }
      ]
    },
    {
      'title': 'M',
      'list': [
        {
          'name': '绵阳',

          'id': 50
        },
        {
          'name': '马鞍山',

          'id': 99
        },
        {
          'name': '牡丹江',

          'id': 129
        },
        {
          'name': '茂名',

          'id': 155
        },
        {
          'name': '梅州',

          'id': 156
        },
        {
          'name': '眉山',

          'id': 286
        }
      ]
    },
    {
      'title': 'N',
      'list': [
        {
          'name': '南京',

          'id': 11
        },
        {
          'name': '宁波',

          'id': 20
        },
        {
          'name': '南宁',

          'id': 33
        },
        {
          'name': '南昌',

          'id': 38
        },
        {
          'name': '南充',

          'id': 53
        },
        {
          'name': '南通',

          'id': 92
        },
        {
          'name': '南阳',

          'id': 113
        },
        {
          'name': '宁德',

          'id': 144
        },
        {
          'name': '南平',

          'id': 145
        },
        {
          'name': '内江',

          'id': 282
        },
        {
          'name': '怒江州',

          'id': 310
        },
        {
          'name': '那曲地区',

          'id': 312
        }
      ]
    },
    {
      'title': 'P',
      'list': [
        {
          'name': '平顶山',

          'id': 103
        },
        {
          'name': '攀枝花',

          'id': 119
        },
        {
          'name': '莆田',

          'id': 143
        },
        {
          'name': '盘锦',

          'id': 165
        },
        {
          'name': '濮阳',

          'id': 176
        },
        {
          'name': '萍乡',

          'id': 219
        },
        {
          'name': '普洱',

          'id': 303
        },
        {
          'name': '平凉',

          'id': 327
        }
      ]
    },
    {
      'title': 'Q',
      'list': [
        {
          'name': '青岛',

          'id': 13
        },
        {
          'name': '泉州',

          'id': 35
        },
        {
          'name': '秦皇岛',

          'id': 61
        },
        {
          'name': '齐齐哈尔',

          'id': 65
        },
        {
          'name': '曲靖',

          'id': 138
        },
        {
          'name': '衢州',

          'id': 140
        },
        {
          'name': '清远',

          'id': 157
        },
        {
          'name': '七台河',

          'id': 216
        },
        {
          'name': '潜江',

          'id': 238
        },
        {
          'name': '钦州',

          'id': 261
        },
        {
          'name': '琼海',

          'id': 269
        },
        {
          'name': '黔西南州',

          'id': 297
        },
        {
          'name': '黔东南州',

          'id': 298
        },
        {
          'name': '黔南州',

          'id': 299
        },
        {
          'name': '庆阳',

          'id': 329
        }
      ]
    },
    {
      'title': 'R',
      'list': [
        {
          'name': '日照',

          'id': 167
        },
        {
          'name': '日喀则地区',

          'id': 315
        }
      ]
    },
    {
      'title': 'S',
      'list': [
        {
          'name': '深圳',

          'id': 2
        },
        {
          'name': '上海',

          'id': 4
        },
        {
          'name': '沈阳',

          'id': 8
        },
        {
          'name': '石家庄',

          'id': 22
        },
        {
          'name': '苏州',

          'id': 23
        },
        {
          'name': '三亚',

          'id': 37
        },
        {
          'name': '绍兴',

          'id': 89
        },
        {
          'name': '绥化',

          'id': 128
        },
        {
          'name': '四平',

          'id': 130
        },
        {
          'name': '宿迁',

          'id': 147
        },
        {
          'name': '汕头',

          'id': 158
        },
        {
          'name': '商丘',

          'id': 177
        },
        {
          'name': '石河子',

          'id': 181
        },
        {
          'name': '宿州',

          'id': 185
        },
        {
          'name': '朔州',

          'id': 191
        },
        {
          'name': '松原',

          'id': 209
        },
        {
          'name': '双鸭山',

          'id': 213
        },
        {
          'name': '上饶',

          'id': 224
        },
        {
          'name': '三明',

          'id': 225
        },
        {
          'name': '十堰',

          'id': 228
        },
        {
          'name': '随州',

          'id': 234
        },
        {
          'name': '神农架林区',

          'id': 239
        },
        {
          'name': '邵阳',

          'id': 240
        },
        {
          'name': '三门峡',

          'id': 249
        },
        {
          'name': '韶关',

          'id': 253
        },
        {
          'name': '汕尾',

          'id': 255
        },
        {
          'name': '遂宁',

          'id': 281
        },
        {
          'name': '山南地区',

          'id': 314
        },
        {
          'name': '商洛',

          'id': 321
        },
        {
          'name': '石嘴山',

          'id': 334
        }
      ]
    },
    {
      'title': 'T',
      'list': [
        {
          'name': '天津',

          'id': 7
        },
        {
          'name': '太原',

          'id': 26
        },
        {
          'name': '唐山',

          'id': 40
        },
        {
          'name': '铁岭',

          'id': 69
        },
        {
          'name': '台州',

          'id': 87
        },
        {
          'name': '泰州',

          'id': 95
        },
        {
          'name': '泰安',

          'id': 121
        },
        {
          'name': '天水',

          'id': 169
        },
        {
          'name': '铜陵',

          'id': 184
        },
        {
          'name': '通辽',

          'id': 197
        },
        {
          'name': '通化',

          'id': 207
        },
        {
          'name': '天门',

          'id': 237
        },
        {
          'name': '屯昌县',

          'id': 276
        },
        {
          'name': '铜仁地区',

          'id': 295
        },
        {
          'name': '铜川',

          'id': 318
        },
        {
          'name': '吐鲁番地区',

          'id': 345
        },
        {
          'name': '塔城地区',

          'id': 354
        }
      ]
    },
    {
      'title': 'W',
      'list': [
        {
          'name': '武汉',

          'id': 6
        },
        {
          'name': '威海',

          'id': 42
        },
        {
          'name': '无锡',

          'id': 47
        },
        {
          'name': '乌鲁木齐',

          'id': 52
        },
        {
          'name': '潍坊',

          'id': 81
        },
        {
          'name': '温州',

          'id': 85
        },
        {
          'name': '芜湖',

          'id': 98
        },
        {
          'name': '乌海',

          'id': 195
        },
        {
          'name': '乌兰察布',

          'id': 200
        },
        {
          'name': '梧州',

          'id': 259
        },
        {
          'name': '五指山',

          'id': 268
        },
        {
          'name': '文昌',

          'id': 271
        },
        {
          'name': '万宁',

          'id': 272
        },
        {
          'name': '文山州',

          'id': 305
        },
        {
          'name': '渭南',

          'id': 319
        },
        {
          'name': '武威',

          'id': 325
        },
        {
          'name': '吴忠',

          'id': 335
        }
      ]
    },
    {
      'title': 'X',
      'list': [
        {
          'name': '西安',

          'id': 10
        },
        {
          'name': '西宁',

          'id': 28
        },
        {
          'name': '厦门',

          'id': 32
        },
        {
          'name': '徐州',

          'id': 39
        },
        {
          'name': '湘潭',

          'id': 55
        },
        {
          'name': '邢台',

          'id': 67
        },
        {
          'name': '襄阳',

          'id': 108
        },
        {
          'name': '新乡',

          'id': 111
        },
        {
          'name': '许昌',

          'id': 112
        },
        {
          'name': '咸阳',

          'id': 116
        },
        {
          'name': '新余',

          'id': 152
        },
        {
          'name': '宣城',

          'id': 182
        },
        {
          'name': '忻州',

          'id': 192
        },
        {
          'name': '锡林郭勒盟',

          'id': 201
        },
        {
          'name': '兴安盟',

          'id': 203
        },
        {
          'name': '孝感',

          'id': 231
        },
        {
          'name': '咸宁',

          'id': 233
        },
        {
          'name': '仙桃',

          'id': 236
        },
        {
          'name': '湘西州',

          'id': 246
        },
        {
          'name': '信阳',

          'id': 250
        },
        {
          'name': '西双版纳州',

          'id': 307
        }
      ]
    },
    {
      'title': 'Y',
      'list': [
        {
          'name': '烟台',

          'id': 29
        },
        {
          'name': '银川',

          'id': 49
        },
        {
          'name': '宜昌',

          'id': 51
        },
        {
          'name': '岳阳',

          'id': 56
        },
        {
          'name': '营口',

          'id': 76
        },
        {
          'name': '扬州',

          'id': 91
        },
        {
          'name': '盐城',

          'id': 94
        },
        {
          'name': '运城',

          'id': 104
        },
        {
          'name': '宜宾',

          'id': 118
        },
        {
          'name': '阳泉',

          'id': 126
        },
        {
          'name': '延吉',

          'id': 131
        },
        {
          'name': '玉林',

          'id': 162
        },
        {
          'name': '延安',

          'id': 171
        },
        {
          'name': '榆林',

          'id': 172
        },
        {
          'name': '伊春',

          'id': 214
        },
        {
          'name': '鹰潭',

          'id': 220
        },
        {
          'name': '宜春',

          'id': 222
        },
        {
          'name': '益阳',

          'id': 242
        },
        {
          'name': '永州',

          'id': 243
        },
        {
          'name': '阳江',

          'id': 256
        },
        {
          'name': '云浮',

          'id': 258
        },
        {
          'name': '雅安',

          'id': 287
        },
        {
          'name': '玉溪',

          'id': 300
        },
        {
          'name': '玉树州',

          'id': 343
        },
        {
          'name': '伊犁州',

          'id': 353
        }
      ]
    },
    {
      'title': 'Z',
      'list': [
        {
          'name': '郑州',

          'id': 9
        },
        {
          'name': '遵义',

          'id': 44
        },
        {
          'name': '株洲',

          'id': 54
        },
        {
          'name': '淄博',

          'id': 57
        },
        {
          'name': '张家口',

          'id': 78
        },
        {
          'name': '珠海',

          'id': 84
        },
        {
          'name': '镇江',

          'id': 93
        },
        {
          'name': '周口',

          'id': 114
        },
        {
          'name': '中山',

          'id': 132
        },
        {
          'name': '漳州',

          'id': 142
        },
        {
          'name': '舟山',

          'id': 146
        },
        {
          'name': '湛江',

          'id': 159
        },
        {
          'name': '肇庆',

          'id': 160
        },
        {
          'name': '枣庄',

          'id': 168
        },
        {
          'name': '张家界',

          'id': 241
        },
        {
          'name': '驻马店',

          'id': 251
        },
        {
          'name': '自贡',

          'id': 279
        },
        {
          'name': '资阳',

          'id': 289
        },
        {
          'name': '昭通',

          'id': 302
        },
        {
          'name': '张掖',

          'id': 326
        },
        {
          'name': '中卫',

          'id': 337
        }
      ]
    }
  ]

  return (
    <>
      <Cell title='当前'
        description={cityCustmer || '请选择地址'}
        extra={<Button size="small" type="primary">小型按钮</Button>}
      />


      <Cell title='所有城市' description={
        <Elevator
          list={dataList}
          height='485'
          onItemClick={(key: string, item: any) => onItemClick(key, item)}
          onIndexClick={(key: string) => onIndexClick(key)}
        />
      } />
    </>
  )
}
export default AddressComponent;