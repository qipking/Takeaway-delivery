import React, { useState } from 'react'
import { View, Text } from '@tarojs/components'
import { Elevator, Picker, Cell } from '@nutui/nutui-react-taro'

const AddressComponent = () => {

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
  const onItemClick = (key: string, item: any) => {
    setCityCustmer([item.name])
    console.log(key, JSON.stringify(item))
  }

  const onIndexClick = (key: string) => {
    console.log(key)
  }


  const [visible, setIsVisible] = useState(false)
  const [cityCustmer, setCityCustmer] = useState('')
  const [custmerCityData, setCustmerCityData] = useState([
    {
      "value": 1,
      "text": "北京市",
      "children": [
        {
          "value": 1,
          "text": "东城区"
        },
        {
          "value": 2,
          "text": "西城区"
        },
        {
          "value": 3,
          "text": "朝阳区"
        },
        {
          "value": 4,
          "text": "丰台区"
        },
        {
          "value": 5,
          "text": "石景山区"
        },
        {
          "value": 6,
          "text": "海淀区"
        },
        {
          "value": 7,
          "text": "门头沟区"
        },
        {
          "value": 8,
          "text": "房山区"
        },
        {
          "value": 9,
          "text": "通州区"
        },
        {
          "value": 10,
          "text": "顺义区"
        },
        {
          "value": 11,
          "text": "昌平区"
        },
        {
          "value": 12,
          "text": "大兴区"
        },
        {
          "value": 13,
          "text": "怀柔区"
        },
        {
          "value": 14,
          "text": "平谷区"
        },
        {
          "value": 15,
          "text": "密云区"
        },
        {
          "value": 16,
          "text": "延庆区"
        }
      ]
    },
    {
      "value": 2,
      "text": "天津市",
      "children": [
        {
          "value": 1,
          "text": "和平区"
        },
        {
          "value": 2,
          "text": "河东区"
        },
        {
          "value": 3,
          "text": "河西区"
        },
        {
          "value": 4,
          "text": "南开区"
        },
        {
          "value": 5,
          "text": "河北区"
        },
        {
          "value": 6,
          "text": "红桥区"
        },
        {
          "value": 7,
          "text": "东丽区"
        },
        {
          "value": 8,
          "text": "西青区"
        },
        {
          "value": 9,
          "text": "津南区"
        },
        {
          "value": 10,
          "text": "北辰区"
        },
        {
          "value": 11,
          "text": "武清区"
        },
        {
          "value": 12,
          "text": "宝坻区"
        },
        {
          "value": 13,
          "text": "滨海新区"
        },
        {
          "value": 14,
          "text": "宁河区"
        },
        {
          "value": 15,
          "text": "静海区"
        },
        {
          "value": 16,
          "text": "蓟州区"
        }
      ]
    },
    {
      "value": 3,
      "text": "河北省",
      "children": [
        {
          "value": 1,
          "text": "石家庄市"
        },
        {
          "value": 2,
          "text": "唐山市"
        },
        {
          "value": 3,
          "text": "秦皇岛市"
        },
        {
          "value": 4,
          "text": "邯郸市"
        },
        {
          "value": 5,
          "text": "邢台市"
        },
        {
          "value": 6,
          "text": "保定市"
        },
        {
          "value": 7,
          "text": "张家口市"
        },
        {
          "value": 8,
          "text": "承德市"
        },
        {
          "value": 9,
          "text": "沧州市"
        },
        {
          "value": 10,
          "text": "廊坊市"
        },
        {
          "value": 11,
          "text": "衡水市"
        }
      ]
    },
    {
      "value": 4,
      "text": "山西省",
      "children": [
        {
          "value": 1,
          "text": "太原市"
        },
        {
          "value": 2,
          "text": "大同市"
        },
        {
          "value": 3,
          "text": "阳泉市"
        },
        {
          "value": 4,
          "text": "长治市"
        },
        {
          "value": 5,
          "text": "晋城市"
        },
        {
          "value": 6,
          "text": "朔州市"
        },
        {
          "value": 7,
          "text": "晋中市"
        },
        {
          "value": 8,
          "text": "运城市"
        },
        {
          "value": 9,
          "text": "忻州市"
        },
        {
          "value": 10,
          "text": "临汾市"
        },
        {
          "value": 11,
          "text": "吕梁市"
        }
      ]
    },
    {
      "value": 5,
      "text": "内蒙古自治区",
      "children": [
        {
          "value": 1,
          "text": "呼和浩特市"
        },
        {
          "value": 2,
          "text": "包头市"
        },
        {
          "value": 3,
          "text": "乌海市"
        },
        {
          "value": 4,
          "text": "赤峰市"
        },
        {
          "value": 5,
          "text": "通辽市"
        },
        {
          "value": 6,
          "text": "鄂尔多斯市"
        },
        {
          "value": 7,
          "text": "呼伦贝尔市"
        },
        {
          "value": 8,
          "text": "巴彦淖尔市"
        },
        {
          "value": 9,
          "text": "乌兰察布市"
        },
        {
          "value": 10,
          "text": "兴安盟"
        },
        {
          "value": 11,
          "text": "锡林郭勒盟"
        },
        {
          "value": 12,
          "text": "阿拉善盟"
        }
      ]
    },
    {
      "value": 6,
      "text": "辽宁省",
      "children": [
        {
          "value": 1,
          "text": "沈阳市"
        },
        {
          "value": 2,
          "text": "大连市"
        },
        {
          "value": 3,
          "text": "鞍山市"
        },
        {
          "value": 4,
          "text": "抚顺市"
        },
        {
          "value": 5,
          "text": "本溪市"
        },
        {
          "value": 6,
          "text": "丹东市"
        },
        {
          "value": 7,
          "text": "锦州市"
        },
        {
          "value": 8,
          "text": "营口市"
        },
        {
          "value": 9,
          "text": "阜新市"
        },
        {
          "value": 10,
          "text": "辽阳市"
        },
        {
          "value": 11,
          "text": "盘锦市"
        },
        {
          "value": 12,
          "text": "铁岭市"
        },
        {
          "value": 13,
          "text": "朝阳市"
        },
        {
          "value": 14,
          "text": "葫芦岛市"
        }
      ]
    },
    {
      "value": 7,
      "text": "吉林省",
      "children": [
        {
          "value": 1,
          "text": "长春市"
        },
        {
          "value": 2,
          "text": "吉林市"
        },
        {
          "value": 3,
          "text": "四平市"
        },
        {
          "value": 4,
          "text": "辽源市"
        },
        {
          "value": 5,
          "text": "通化市"
        },
        {
          "value": 6,
          "text": "白山市"
        },
        {
          "value": 7,
          "text": "松原市"
        },
        {
          "value": 8,
          "text": "白城市"
        },
        {
          "value": 9,
          "text": "延边朝鲜族自治州"
        }
      ]
    },
    {
      "value": 8,
      "text": "黑龙江省",
      "children": [
        {
          "value": 1,
          "text": "哈尔滨市"
        },
        {
          "value": 2,
          "text": "齐齐哈尔市"
        },
        {
          "value": 3,
          "text": "鸡西市"
        },
        {
          "value": 4,
          "text": "鹤岗市"
        },
        {
          "value": 5,
          "text": "双鸭山市"
        },
        {
          "value": 6,
          "text": "大庆市"
        },
        {
          "value": 7,
          "text": "伊春市"
        },
        {
          "value": 8,
          "text": "佳木斯市"
        },
        {
          "value": 9,
          "text": "七台河市"
        },
        {
          "value": 10,
          "text": "牡丹江市"
        },
        {
          "value": 11,
          "text": "黑河市"
        },
        {
          "value": 12,
          "text": "绥化市"
        },
        {
          "value": 13,
          "text": "大兴安岭地区"
        }
      ]
    },
    {
      "value": 9,
      "text": "上海市",
      "children": [
        {
          "value": 1,
          "text": "黄浦区"
        },
        {
          "value": 2,
          "text": "徐汇区"
        },
        {
          "value": 3,
          "text": "长宁区"
        },
        {
          "value": 4,
          "text": "静安区"
        },
        {
          "value": 5,
          "text": "普陀区"
        },
        {
          "value": 6,
          "text": "虹口区"
        },
        {
          "value": 7,
          "text": "杨浦区"
        },
        {
          "value": 8,
          "text": "闵行区"
        },
        {
          "value": 9,
          "text": "宝山区"
        },
        {
          "value": 10,
          "text": "嘉定区"
        },
        {
          "value": 11,
          "text": "浦东新区"
        },
        {
          "value": 12,
          "text": "金山区"
        },
        {
          "value": 13,
          "text": "松江区"
        },
        {
          "value": 14,
          "text": "青浦区"
        },
        {
          "value": 15,
          "text": "奉贤区"
        },
        {
          "value": 16,
          "text": "崇明区"
        }
      ]
    },
    {
      "value": 10,
      "text": "江苏省",
      "children": [
        {
          "value": 1,
          "text": "南京市"
        },
        {
          "value": 2,
          "text": "无锡市"
        },
        {
          "value": 3,
          "text": "徐州市"
        },
        {
          "value": 4,
          "text": "常州市"
        },
        {
          "value": 5,
          "text": "苏州市"
        },
        {
          "value": 6,
          "text": "南通市"
        },
        {
          "value": 7,
          "text": "连云港市"
        },
        {
          "value": 8,
          "text": "淮安市"
        },
        {
          "value": 9,
          "text": "盐城市"
        },
        {
          "value": 10,
          "text": "扬州市"
        },
        {
          "value": 11,
          "text": "镇江市"
        },
        {
          "value": 12,
          "text": "泰州市"
        },
        {
          "value": 13,
          "text": "宿迁市"
        }
      ]
    },
    {
      "value": 11,
      "text": "浙江省",
      "children": [
        {
          "value": 1,
          "text": "杭州市"
        },
        {
          "value": 2,
          "text": "宁波市"
        },
        {
          "value": 3,
          "text": "温州市"
        },
        {
          "value": 4,
          "text": "嘉兴市"
        },
        {
          "value": 5,
          "text": "湖州市"
        },
        {
          "value": 6,
          "text": "绍兴市"
        },
        {
          "value": 7,
          "text": "金华市"
        },
        {
          "value": 8,
          "text": "衢州市"
        },
        {
          "value": 9,
          "text": "舟山市"
        },
        {
          "value": 10,
          "text": "台州市"
        },
        {
          "value": 11,
          "text": "丽水市"
        }
      ]
    },
    {
      "value": 12,
      "text": "安徽省",
      "children": [
        {
          "value": 1,
          "text": "合肥市"
        },
        {
          "value": 2,
          "text": "芜湖市"
        },
        {
          "value": 3,
          "text": "蚌埠市"
        },
        {
          "value": 4,
          "text": "淮南市"
        },
        {
          "value": 5,
          "text": "马鞍山市"
        },
        {
          "value": 6,
          "text": "淮北市"
        },
        {
          "value": 7,
          "text": "铜陵市"
        },
        {
          "value": 8,
          "text": "安庆市"
        },
        {
          "value": 9,
          "text": "黄山市"
        },
        {
          "value": 10,
          "text": "滁州市"
        },
        {
          "value": 11,
          "text": "阜阳市"
        },
        {
          "value": 12,
          "text": "宿州市"
        },
        {
          "value": 13,
          "text": "六安市"
        },
        {
          "value": 14,
          "text": "亳州市"
        },
        {
          "value": 15,
          "text": "池州市"
        },
        {
          "value": 16,
          "text": "宣城市"
        }
      ]
    },
    {
      "value": 13,
      "text": "福建省",
      "children": [
        {
          "value": 1,
          "text": "福州市"
        },
        {
          "value": 2,
          "text": "厦门市"
        },
        {
          "value": 3,
          "text": "莆田市"
        },
        {
          "value": 4,
          "text": "三明市"
        },
        {
          "value": 5,
          "text": "泉州市"
        },
        {
          "value": 6,
          "text": "漳州市"
        },
        {
          "value": 7,
          "text": "南平市"
        },
        {
          "value": 8,
          "text": "龙岩市"
        },
        {
          "value": 9,
          "text": "宁德市"
        }
      ]
    },
    {
      "value": 14,
      "text": "江西省",
      "children": [
        {
          "value": 1,
          "text": "南昌市"
        },
        {
          "value": 2,
          "text": "景德镇市"
        },
        {
          "value": 3,
          "text": "萍乡市"
        },
        {
          "value": 4,
          "text": "九江市"
        },
        {
          "value": 5,
          "text": "新余市"
        },
        {
          "value": 6,
          "text": "鹰潭市"
        },
        {
          "value": 7,
          "text": "赣州市"
        },
        {
          "value": 8,
          "text": "吉安市"
        },
        {
          "value": 9,
          "text": "宜春市"
        },
        {
          "value": 10,
          "text": "抚州市"
        },
        {
          "value": 11,
          "text": "上饶市"
        }
      ]
    },
    {
      "value": 15,
      "text": "山东省",
      "children": [
        {
          "value": 1,
          "text": "济南市"
        },
        {
          "value": 2,
          "text": "青岛市"
        },
        {
          "value": 3,
          "text": "淄博市"
        },
        {
          "value": 4,
          "text": "枣庄市"
        },
        {
          "value": 5,
          "text": "东营市"
        },
        {
          "value": 6,
          "text": "烟台市"
        },
        {
          "value": 7,
          "text": "潍坊市"
        },
        {
          "value": 8,
          "text": "济宁市"
        },
        {
          "value": 9,
          "text": "泰安市"
        },
        {
          "value": 10,
          "text": "威海市"
        },
        {
          "value": 11,
          "text": "日照市"
        },
        {
          "value": 12,
          "text": "临沂市"
        },
        {
          "value": 13,
          "text": "德州市"
        },
        {
          "value": 14,
          "text": "聊城市"
        },
        {
          "value": 15,
          "text": "滨州市"
        },
        {
          "value": 16,
          "text": "菏泽市"
        }
      ]
    },
    {
      "value": 16,
      "text": "河南省",
      "children": [
        {
          "value": 1,
          "text": "郑州市"
        },
        {
          "value": 2,
          "text": "开封市"
        },
        {
          "value": 3,
          "text": "洛阳市"
        },
        {
          "value": 4,
          "text": "平顶山市"
        },
        {
          "value": 5,
          "text": "安阳市"
        },
        {
          "value": 6,
          "text": "鹤壁市"
        },
        {
          "value": 7,
          "text": "新乡市"
        },
        {
          "value": 8,
          "text": "焦作市"
        },
        {
          "value": 9,
          "text": "濮阳市"
        },
        {
          "value": 10,
          "text": "许昌市"
        },
        {
          "value": 11,
          "text": "漯河市"
        },
        {
          "value": 12,
          "text": "三门峡市"
        },
        {
          "value": 13,
          "text": "南阳市"
        },
        {
          "value": 14,
          "text": "商丘市"
        },
        {
          "value": 15,
          "text": "信阳市"
        },
        {
          "value": 16,
          "text": "周口市"
        },
        {
          "value": 17,
          "text": "驻马店市"
        },
        {
          "value": 18,
          "text": "济源市"
        }
      ]
    },
    {
      "value": 17,
      "text": "湖北省",
      "children": [
        {
          "value": 1,
          "text": "武汉市"
        },
        {
          "value": 2,
          "text": "黄石市"
        },
        {
          "value": 3,
          "text": "十堰市"
        },
        {
          "value": 4,
          "text": "宜昌市"
        },
        {
          "value": 5,
          "text": "襄阳市"
        },
        {
          "value": 6,
          "text": "鄂州市"
        },
        {
          "value": 7,
          "text": "荆门市"
        },
        {
          "value": 8,
          "text": "孝感市"
        },
        {
          "value": 9,
          "text": "荆州市"
        },
        {
          "value": 10,
          "text": "黄冈市"
        },
        {
          "value": 11,
          "text": "咸宁市"
        },
        {
          "value": 12,
          "text": "随州市"
        },
        {
          "value": 13,
          "text": "恩施土家族苗族自治州"
        },
        {
          "value": 14,
          "text": "仙桃市"
        },
        {
          "value": 15,
          "text": "潜江市"
        },
        {
          "value": 16,
          "text": "天门市"
        },
        {
          "value": 17,
          "text": "神农架林区"
        }
      ]
    },
    {
      "value": 18,
      "text": "湖南省",
      "children": [
        {
          "value": 1,
          "text": "长沙市"
        },
        {
          "value": 2,
          "text": "株洲市"
        },
        {
          "value": 3,
          "text": "湘潭市"
        },
        {
          "value": 4,
          "text": "衡阳市"
        },
        {
          "value": 5,
          "text": "邵阳市"
        },
        {
          "value": 6,
          "text": "岳阳市"
        },
        {
          "value": 7,
          "text": "常德市"
        },
        {
          "value": 8,
          "text": "张家界市"
        },
        {
          "value": 9,
          "text": "益阳市"
        },
        {
          "value": 10,
          "text": "郴州市"
        },
        {
          "value": 11,
          "text": "永州市"
        },
        {
          "value": 12,
          "text": "怀化市"
        },
        {
          "value": 13,
          "text": "娄底市"
        },
        {
          "value": 14,
          "text": "湘西土家族苗族自治州"
        }
      ]
    },
    {
      "value": 19,
      "text": "广东省",
      "children": [
        {
          "value": 1,
          "text": "广州市"
        },
        {
          "value": 2,
          "text": "韶关市"
        },
        {
          "value": 3,
          "text": "深圳市"
        },
        {
          "value": 4,
          "text": "珠海市"
        },
        {
          "value": 5,
          "text": "汕头市"
        },
        {
          "value": 6,
          "text": "佛山市"
        },
        {
          "value": 7,
          "text": "江门市"
        },
        {
          "value": 8,
          "text": "湛江市"
        },
        {
          "value": 9,
          "text": "茂名市"
        },
        {
          "value": 10,
          "text": "肇庆市"
        },
        {
          "value": 11,
          "text": "惠州市"
        },
        {
          "value": 12,
          "text": "梅州市"
        },
        {
          "value": 13,
          "text": "汕尾市"
        },
        {
          "value": 14,
          "text": "河源市"
        },
        {
          "value": 15,
          "text": "阳江市"
        },
        {
          "value": 16,
          "text": "清远市"
        },
        {
          "value": 17,
          "text": "东莞市"
        },
        {
          "value": 18,
          "text": "中山市"
        },
        {
          "value": 19,
          "text": "潮州市"
        },
        {
          "value": 20,
          "text": "揭阳市"
        },
        {
          "value": 21,
          "text": "云浮市"
        }
      ]
    },
    {
      "value": 20,
      "text": "广西壮族自治区",
      "children": [
        {
          "value": 1,
          "text": "南宁市"
        },
        {
          "value": 2,
          "text": "柳州市"
        },
        {
          "value": 3,
          "text": "桂林市"
        },
        {
          "value": 4,
          "text": "梧州市"
        },
        {
          "value": 5,
          "text": "北海市"
        },
        {
          "value": 6,
          "text": "防城港市"
        },
        {
          "value": 7,
          "text": "钦州市"
        },
        {
          "value": 8,
          "text": "贵港市"
        },
        {
          "value": 9,
          "text": "玉林市"
        },
        {
          "value": 10,
          "text": "百色市"
        },
        {
          "value": 11,
          "text": "贺州市"
        },
        {
          "value": 12,
          "text": "河池市"
        },
        {
          "value": 13,
          "text": "来宾市"
        },
        {
          "value": 14,
          "text": "崇左市"
        }
      ]
    },
    {
      "value": 21,
      "text": "海南省",
      "children": [
        {
          "value": 1,
          "text": "海口市"
        },
        {
          "value": 2,
          "text": "三亚市"
        },
        {
          "value": 3,
          "text": "三沙市"
        },
        {
          "value": 4,
          "text": "儋州市"
        },
        {
          "value": 5,
          "text": "五指山市"
        },
        {
          "value": 6,
          "text": "琼海市"
        },
        {
          "value": 7,
          "text": "文昌市"
        },
        {
          "value": 8,
          "text": "万宁市"
        },
        {
          "value": 9,
          "text": "东方市"
        },
        {
          "value": 10,
          "text": "定安县"
        },
        {
          "value": 11,
          "text": "屯昌县"
        },
        {
          "value": 12,
          "text": "澄迈县"
        },
        {
          "value": 13,
          "text": "临高县"
        },
        {
          "value": 14,
          "text": "白沙黎族自治县"
        },
        {
          "value": 15,
          "text": "昌江黎族自治县"
        },
        {
          "value": 16,
          "text": "乐东黎族自治县"
        },
        {
          "value": 17,
          "text": "陵水黎族自治县"
        },
        {
          "value": 18,
          "text": "保亭黎族苗族自治县"
        },
        {
          "value": 19,
          "text": "琼中黎族苗族自治县"
        }
      ]
    },
    {
      "value": 22,
      "text": "重庆市",
      "children": [
        {
          "value": 1,
          "text": "万州区"
        },
        {
          "value": 2,
          "text": "涪陵区"
        },
        {
          "value": 3,
          "text": "渝中区"
        },
        {
          "value": 4,
          "text": "大渡口区"
        },
        {
          "value": 5,
          "text": "江北区"
        },
        {
          "value": 6,
          "text": "沙坪坝区"
        },
        {
          "value": 7,
          "text": "九龙坡区"
        },
        {
          "value": 8,
          "text": "南岸区"
        },
        {
          "value": 9,
          "text": "北碚区"
        },
        {
          "value": 10,
          "text": "綦江区"
        },
        {
          "value": 11,
          "text": "大足区"
        },
        {
          "value": 12,
          "text": "渝北区"
        },
        {
          "value": 13,
          "text": "巴南区"
        },
        {
          "value": 14,
          "text": "黔江区"
        },
        {
          "value": 15,
          "text": "长寿区"
        },
        {
          "value": 16,
          "text": "江津区"
        },
        {
          "value": 17,
          "text": "合川区"
        },
        {
          "value": 18,
          "text": "永川区"
        },
        {
          "value": 19,
          "text": "南川区"
        },
        {
          "value": 20,
          "text": "璧山区"
        },
        {
          "value": 21,
          "text": "铜梁区"
        },
        {
          "value": 22,
          "text": "潼南区"
        },
        {
          "value": 23,
          "text": "荣昌区"
        },
        {
          "value": 24,
          "text": "开州区"
        },
        {
          "value": 25,
          "text": "梁平区"
        },
        {
          "value": 26,
          "text": "武隆区"
        },
        {
          "value": 27,
          "text": "城口县"
        },
        {
          "value": 28,
          "text": "丰都县"
        },
        {
          "value": 29,
          "text": "垫江县"
        },
        {
          "value": 30,
          "text": "忠县"
        },
        {
          "value": 31,
          "text": "云阳县"
        },
        {
          "value": 32,
          "text": "奉节县"
        },
        {
          "value": 33,
          "text": "巫山县"
        },
        {
          "value": 34,
          "text": "巫溪县"
        },
        {
          "value": 35,
          "text": "石柱土家族自治县"
        },
        {
          "value": 36,
          "text": "秀山土家族苗族自治县"
        },
        {
          "value": 37,
          "text": "酉阳土家族苗族自治县"
        },
        {
          "value": 38,
          "text": "彭水苗族土家族自治县"
        }
      ]
    },
    {
      "value": 23,
      "text": "四川省",
      "children": [
        {
          "value": 1,
          "text": "成都市"
        },
        {
          "value": 2,
          "text": "自贡市"
        },
        {
          "value": 3,
          "text": "攀枝花市"
        },
        {
          "value": 4,
          "text": "泸州市"
        },
        {
          "value": 5,
          "text": "德阳市"
        },
        {
          "value": 6,
          "text": "绵阳市"
        },
        {
          "value": 7,
          "text": "广元市"
        },
        {
          "value": 8,
          "text": "遂宁市"
        },
        {
          "value": 9,
          "text": "内江市"
        },
        {
          "value": 10,
          "text": "乐山市"
        },
        {
          "value": 11,
          "text": "南充市"
        },
        {
          "value": 12,
          "text": "眉山市"
        },
        {
          "value": 13,
          "text": "宜宾市"
        },
        {
          "value": 14,
          "text": "广安市"
        },
        {
          "value": 15,
          "text": "达州市"
        },
        {
          "value": 16,
          "text": "雅安市"
        },
        {
          "value": 17,
          "text": "巴中市"
        },
        {
          "value": 18,
          "text": "资阳市"
        },
        {
          "value": 19,
          "text": "阿坝藏族羌族自治州"
        },
        {
          "value": 20,
          "text": "甘孜藏族自治州"
        },
        {
          "value": 21,
          "text": "凉山彝族自治州"
        }
      ]
    },
    {
      "value": 24,
      "text": "贵州省",
      "children": [
        {
          "value": 1,
          "text": "贵阳市"
        },
        {
          "value": 2,
          "text": "六盘水市"
        },
        {
          "value": 3,
          "text": "遵义市"
        },
        {
          "value": 4,
          "text": "安顺市"
        },
        {
          "value": 5,
          "text": "毕节市"
        },
        {
          "value": 6,
          "text": "铜仁市"
        },
        {
          "value": 7,
          "text": "黔西南布依族苗族自治州"
        },
        {
          "value": 8,
          "text": "黔东南苗族侗族自治州"
        },
        {
          "value": 9,
          "text": "黔南布依族苗族自治州"
        }
      ]
    },
    {
      "value": 25,
      "text": "云南省",
      "children": [
        {
          "value": 1,
          "text": "昆明市"
        },
        {
          "value": 2,
          "text": "曲靖市"
        },
        {
          "value": 3,
          "text": "玉溪市"
        },
        {
          "value": 4,
          "text": "保山市"
        },
        {
          "value": 5,
          "text": "昭通市"
        },
        {
          "value": 6,
          "text": "丽江市"
        },
        {
          "value": 7,
          "text": "普洱市"
        },
        {
          "value": 8,
          "text": "临沧市"
        },
        {
          "value": 9,
          "text": "楚雄彝族自治州"
        },
        {
          "value": 10,
          "text": "红河哈尼族彝族自治州"
        },
        {
          "value": 11,
          "text": "文山壮族苗族自治州"
        },
        {
          "value": 12,
          "text": "西双版纳傣族自治州"
        },
        {
          "value": 13,
          "text": "大理白族自治州"
        },
        {
          "value": 14,
          "text": "德宏傣族景颇族自治州"
        },
        {
          "value": 15,
          "text": "怒江傈僳族自治州"
        },
        {
          "value": 16,
          "text": "迪庆藏族自治州"
        }
      ]
    },
    {
      "value": 26,
      "text": "西藏自治区",
      "children": [
        {
          "value": 1,
          "text": "拉萨市"
        },
        {
          "value": 2,
          "text": "日喀则市"
        },
        {
          "value": 3,
          "text": "昌都市"
        },
        {
          "value": 4,
          "text": "林芝市"
        },
        {
          "value": 5,
          "text": "山南市"
        },
        {
          "value": 6,
          "text": "那曲市"
        },
        {
          "value": 7,
          "text": "阿里地区"
        }
      ]
    },
    {
      "value": 27,
      "text": "陕西省",
      "children": [
        {
          "value": 1,
          "text": "西安市"
        },
        {
          "value": 2,
          "text": "铜川市"
        },
        {
          "value": 3,
          "text": "宝鸡市"
        },
        {
          "value": 4,
          "text": "咸阳市"
        },
        {
          "value": 5,
          "text": "渭南市"
        },
        {
          "value": 6,
          "text": "延安市"
        },
        {
          "value": 7,
          "text": "汉中市"
        },
        {
          "value": 8,
          "text": "榆林市"
        },
        {
          "value": 9,
          "text": "安康市"
        },
        {
          "value": 10,
          "text": "商洛市"
        }
      ]
    },
    {
      "value": 28,
      "text": "甘肃省",
      "children": [
        {
          "value": 1,
          "text": "兰州市"
        },
        {
          "value": 2,
          "text": "嘉峪关市"
        },
        {
          "value": 3,
          "text": "金昌市"
        },
        {
          "value": 4,
          "text": "白银市"
        },
        {
          "value": 5,
          "text": "天水市"
        },
        {
          "value": 6,
          "text": "武威市"
        },
        {
          "value": 7,
          "text": "张掖市"
        },
        {
          "value": 8,
          "text": "平凉市"
        },
        {
          "value": 9,
          "text": "酒泉市"
        },
        {
          "value": 10,
          "text": "庆阳市"
        },
        {
          "value": 11,
          "text": "定西市"
        },
        {
          "value": 12,
          "text": "陇南市"
        },
        {
          "value": 13,
          "text": "临夏回族自治州"
        },
        {
          "value": 14,
          "text": "甘南藏族自治州"
        }
      ]
    },
    {
      "value": 29,
      "text": "青海省",
      "children": [
        {
          "value": 1,
          "text": "西宁市"
        },
        {
          "value": 2,
          "text": "海东市"
        },
        {
          "value": 3,
          "text": "海北藏族自治州"
        },
        {
          "value": 4,
          "text": "黄南藏族自治州"
        },
        {
          "value": 5,
          "text": "海南藏族自治州"
        },
        {
          "value": 6,
          "text": "果洛藏族自治州"
        },
        {
          "value": 7,
          "text": "玉树藏族自治州"
        },
        {
          "value": 8,
          "text": "海西蒙古族藏族自治州"
        }
      ]
    },
    {
      "value": 30,
      "text": "宁夏回族自治区",
      "children": [
        {
          "value": 1,
          "text": "银川市"
        },
        {
          "value": 2,
          "text": "石嘴山市"
        },
        {
          "value": 3,
          "text": "吴忠市"
        },
        {
          "value": 4,
          "text": "固原市"
        },
        {
          "value": 5,
          "text": "中卫市"
        }
      ]
    },
    {
      "value": 31,
      "text": "新疆维吾尔自治区",
      "children": [
        {
          "value": 1,
          "text": "乌鲁木齐市"
        },
        {
          "value": 2,
          "text": "克拉玛依市"
        },
        {
          "value": 3,
          "text": "吐鲁番市"
        },
        {
          "value": 4,
          "text": "哈密市"
        },
        {
          "value": 5,
          "text": "昌吉回族自治州"
        },
        {
          "value": 6,
          "text": "博尔塔拉蒙古自治州"
        },
        {
          "value": 7,
          "text": "巴音郭楞蒙古自治州"
        },
        {
          "value": 8,
          "text": "阿克苏地区"
        },
        {
          "value": 9,
          "text": "克孜勒苏柯尔克孜自治州"
        },
        {
          "value": 10,
          "text": "喀什地区"
        },
        {
          "value": 11,
          "text": "和田地区"
        },
        {
          "value": 12,
          "text": "伊犁哈萨克自治州"
        },
        {
          "value": 13,
          "text": "塔城地区"
        },
        {
          "value": 14,
          "text": "阿勒泰地区"
        },
        {
          "value": 15,
          "text": "石河子市"
        },
        {
          "value": 16,
          "text": "阿拉尔市"
        },
        {
          "value": 17,
          "text": "图木舒克市"
        },
        {
          "value": 18,
          "text": "五家渠市"
        },
        {
          "value": 19,
          "text": "北屯市"
        },
        {
          "value": 20,
          "text": "铁门关市"
        },
        {
          "value": 21,
          "text": "双河市"
        },
        {
          "value": 22,
          "text": "可克达拉市"
        },
        {
          "value": 23,
          "text": "昆玉市"
        },
        {
          "value": 24,
          "text": "胡杨河市"
        },
        {
          "value": 25,
          "text": "新星市"
        }
      ]
    }
  ])
  const setChooseValueCustmer = (values: (string | number)[], chooseData: PickerOption[]) => {
    const str = chooseData.map((item) => item.text)//.join('-')
    setCityCustmer(str)
  }


  return (
    <>
      <Cell title='当前' description={cityCustmer || '请选择地址'} onClick={() => setIsVisible(!visible)} />
      <Picker
        visible={visible}
        options={custmerCityData}
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

      <Cell title='所有城市' description={
        <Elevator
          list={dataList}
          height='490'
          onItemClick={(key: string, item: any) => onItemClick(key, item)}
          onIndexClick={(key: string) => onIndexClick(key)}
        />
      } />
    </>
  )
}
export default AddressComponent;