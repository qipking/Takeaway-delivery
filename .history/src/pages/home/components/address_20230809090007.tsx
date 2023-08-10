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
          tags: 'ANSHAN,鞍山',
          'id': 64
        },
        {
          'name': '安庆',
          tags: 'ANQING,安庆',
          'id': 149
        },
        {
          'name': '安阳',
          tags: 'ANYANG,安阳',
          'id': 174
        },
        {
          'name': '阿拉善盟',
          tags: 'ALASHANMENG,阿拉善盟',
          'id': 202
        },
        {
          'name': '阿坝州',
          tags: 'ABAZHOU,阿坝州',
          'id': 290
        },
        {
          'name': '安顺',
          tags: 'ANSHUN,安顺',
          'id': 294
        },
        {
          'name': '阿里地区',
          tags: 'ALIDIQU,阿里地区',
          'id': 316
        },
        {
          'name': '安康',
          tags: 'ANKANG,安康',
          'id': 320
        },
        {
          'name': '阿克苏地区',
          tags: 'AKESUDIQU,阿克苏地区',
          'id': 348
        },
        {
          'name': '阿勒泰地区',
          tags: 'ALETAIDIQU,阿勒泰地区',
          'id': 355
        },
        {
          'name': '阿拉尔',
          tags: 'ALAER,阿拉尔',
          'id': 356
        }
      ]
    },
    {
      'title': 'B',
      'list': [
        {
          'name': '北京',
          tags: 'BEIJING,北京',
          'id': 1
        },
        {
          'name': '保定',
          tags: 'BAODING,保定',
          'id': 62
        },
        {
          'name': '包头',
          tags: 'BAOTOU,包头',
          'id': 63
        },
        {
          'name': '本溪',
          tags: 'BENXI,本溪',
          'id': 77
        },
        {
          'name': '蚌埠',
          tags: 'BANGBU,蚌埠',
          'id': 100
        },
        {
          'name': '北海',
          tags: 'BEIHAI,北海',
          'id': 161
        },
        {
          'name': '滨州',
          tags: 'BINZHOU,滨州',
          'id': 166
        },
        {
          'name': '宝鸡',
          tags: 'BAOJI,宝鸡',
          'id': 170
        },
        {
          'name': '亳州',
          tags: 'BOZHOU,亳州',
          'id': 189
        },
        {
          'name': '巴彦淖尔',
          tags: 'BAYANNAOER,巴彦淖尔',
          'id': 199
        },
        {
          'name': '白山',
          tags: 'BAISHAN,白山',
          'id': 208
        },
        {
          'name': '白城',
          tags: 'BAICHENG,白城',
          'id': 210
        },
        {
          'name': '百色',
          tags: 'BAISE,百色',
          'id': 263
        },
        {
          'name': '白沙黎族自治县',
          tags: 'BAISHALIZUZIZHIXIAN,白沙黎族自治县',
          'id': 278
        },
        {
          'name': '巴中',
          tags: 'BAZHONG,巴中',
          'id': 288
        },
        {
          'name': '毕节地区',
          tags: 'BIJIEDIQU,毕节地区',
          'id': 296
        },
        {
          'name': '保山',
          tags: 'BAOSHAN,保山',
          'id': 301
        },
        {
          'name': '白银',
          tags: 'BAIYIN,白银',
          'id': 323
        },
        {
          'name': '巴音郭楞州',
          tags: 'BAYINGUOLENGZHOU,巴音郭楞州',
          'id': 350
        },
        {
          'name': '博尔塔拉州',
          tags: 'BOERTALAZHOU,博尔塔拉州',
          'id': 352
        }
      ]
    },
    {
      'title': 'C',
      'list': [
        {
          'name': '成都',
          tags: 'CHENGDU,成都',
          'id': 17
        },
        {
          'name': '重庆',
          tags: 'CHONGQING,重庆',
          'id': 18
        },
        {
          'name': '长沙',
          tags: 'CHANGSHA,长沙',
          'id': 24
        },
        {
          'name': '长春',
          tags: 'CHANGCHUN,长春',
          'id': 25
        },
        {
          'name': '常州',
          tags: 'CHANGZHOU,常州',
          'id': 45
        },
        {
          'name': '沧州',
          tags: 'CANGZHOU,沧州',
          'id': 59
        },
        {
          'name': '承德',
          tags: 'CHENGDE,承德',
          'id': 72
        },
        {
          'name': '常德',
          tags: 'CHANGDE,常德',
          'id': 106
        },
        {
          'name': '郴州',
          tags: 'CHENZHOU,郴州',
          'id': 107
        },
        {
          'name': '长治',
          tags: 'CHANGZHI,长治',
          'id': 127
        },
        {
          'name': '滁州',
          tags: 'CHUZHOU,滁州',
          'id': 148
        },
        {
          'name': '池州',
          tags: 'CHIZHOU,池州',
          'id': 187
        },
        {
          'name': '赤峰',
          tags: 'CHIFENG,赤峰',
          'id': 196
        },
        {
          'name': '巢湖',
          tags: 'CHAOHU,巢湖',
          'id': 204
        },
        {
          'name': '朝阳',
          tags: 'CHAOYANG,朝阳',
          'id': 205
        },
        {
          'name': '潮州',
          tags: 'CHAOZHOU,潮州',
          'id': 257
        },
        {
          'name': '崇左',
          tags: 'CHONGZUO,崇左',
          'id': 267
        },
        {
          'name': '澄迈县',
          tags: 'CHENGMAIXIAN,澄迈县',
          'id': 274
        },
        {
          'name': '楚雄州',
          tags: 'CHUXIONGZHOU,楚雄州',
          'id': 308
        },
        {
          'name': '昌都地区',
          tags: 'CHANGDUDIQU,昌都地区',
          'id': 313
        },
        {
          'name': '昌吉州',
          tags: 'CHANGJIZHOU,昌吉州',
          'id': 351
        }
      ]
    },
    {
      'title': 'D',
      'list': [
        {
          'name': '大连',
          tags: 'DALIAN,大连',
          'id': 14
        },
        {
          'name': '东莞',
          tags: 'DONGWAN,东莞',
          'id': 21
        },
        {
          'name': '大庆',
          tags: 'DAQING,大庆',
          'id': 48
        },
        {
          'name': '东营',
          tags: 'DONGYING,东营',
          'id': 73
        },
        {
          'name': '德州',
          tags: 'DEZHOU,德州',
          'id': 120
        },
        {
          'name': '大同',
          tags: 'DATONG,大同',
          'id': 125
        },
        {
          'name': '大理州',
          tags: 'DALIZHOU,大理州',
          'id': 136
        },
        {
          'name': '丹东',
          tags: 'DANDONG,丹东',
          'id': 163
        },
        {
          'name': '德阳',
          tags: 'DEYANG,德阳',
          'id': 173
        },
        {
          'name': '大兴安岭地区',
          tags: 'DAXINGANLINGDIQU,大兴安岭地区',
          'id': 218
        },
        {
          'name': '儋州',
          tags: 'DANZHOU,儋州',
          'id': 270
        },
        {
          'name': '东方',
          tags: 'DONGFANG,东方',
          'id': 273
        },
        {
          'name': '定安县',
          tags: 'DINGANXIAN,定安县',
          'id': 275
        },
        {
          'name': '达州',
          tags: 'DAZHOU,达州',
          'id': 285
        },
        {
          'name': '德宏州',
          tags: 'DEHONGZHOU,德宏州',
          'id': 309
        },
        {
          'name': '迪庆州',
          tags: 'DIQINGZHOU,迪庆州',
          'id': 311
        },
        {
          'name': '定西',
          tags: 'DINGXI,定西',
          'id': 330
        }
      ]
    },
    {
      'title': 'E',
      'list': [
        {
          'name': '鄂尔多斯',
          tags: 'EERDUOSI,鄂尔多斯',
          'id': 43
        },
        {
          'name': '鄂州',
          tags: 'EZHOU,鄂州',
          'id': 230
        },
        {
          'name': '恩施州',
          tags: 'ENSHIZHOU,恩施州',
          'id': 235
        }
      ]
    },
    {
      'title': 'F',
      'list': [
        {
          'name': '福州',
          tags: 'FUZHOU,福州',
          'id': 34
        },
        {
          'name': '佛山',
          tags: 'FOSHAN,佛山',
          'id': 36
        },
        {
          'name': '抚顺',
          tags: 'FUSHUN,抚顺',
          'id': 66
        },
        {
          'name': '阜新',
          tags: 'FUXIN,阜新',
          'id': 164
        },
        {
          'name': '阜阳',
          tags: 'FUYANG,阜阳',
          'id': 188
        },
        {
          'name': '抚州',
          tags: 'FUZHOU,抚州',
          'id': 223
        },
        {
          'name': '防城港',
          tags: 'FANGCHENGGANG,防城港',
          'id': 260
        }
      ]
    },
    {
      'title': 'G',
      'list': [
        {
          'name': '广州',
          tags: 'GUANGZHOU,广州',
          'id': 3
        },
        {
          'name': '贵阳',
          tags: 'GUIYANG,贵阳',
          'id': 82
        },
        {
          'name': '赣州',
          tags: 'GANZHOU,赣州',
          'id': 102
        },
        {
          'name': '桂林',
          tags: 'GUILIN,桂林',
          'id': 135
        },
        {
          'name': '贵港',
          tags: 'GUIGANG,贵港',
          'id': 262
        },
        {
          'name': '广元',
          tags: 'GUANGYUAN,广元',
          'id': 280
        },
        {
          'name': '广安',
          tags: 'GUANGAN,广安',
          'id': 284
        },
        {
          'name': '甘孜州',
          tags: 'GANZIZHOU,甘孜州',
          'id': 291
        },
        {
          'name': '甘南州',
          tags: 'GANNANZHOU,甘南州',
          'id': 333
        },
        {
          'name': '固原',
          tags: 'GUYUAN,固原',
          'id': 336
        },
        {
          'name': '果洛州',
          tags: 'GUOLUOZHOU,果洛州',
          'id': 342
        }
      ]
    },
    {
      'title': 'H',
      'list': [
        {
          'name': '杭州',
          tags: 'HANGZHOU,杭州',
          'id': 5
        },
        {
          'name': '合肥',
          tags: 'HEFEI,合肥',
          'id': 15
        },
        {
          'name': '哈尔滨',
          tags: 'HAERBIN,哈尔滨',
          'id': 16
        },
        {
          'name': '呼和浩特',
          tags: 'HUHEHAOTE,呼和浩特',
          'id': 41
        },
        {
          'name': '邯郸',
          tags: 'HANDAN,邯郸',
          'id': 60
        },
        {
          'name': '葫芦岛',
          tags: 'HULUDAO,葫芦岛',
          'id': 70
        },
        {
          'name': '衡水',
          tags: 'HENGSHUI,衡水',
          'id': 80
        },
        {
          'name': '海口',
          tags: 'HAIKOU,海口',
          'id': 83
        },
        {
          'name': '湖州',
          tags: 'HUZHOU,湖州',
          'id': 90
        },
        {
          'name': '淮安',
          tags: 'HUAIAN,淮安',
          'id': 97
        },
        {
          'name': '衡阳',
          tags: 'HENGYANG,衡阳',
          'id': 105
        },
        {
          'name': '汉中',
          tags: 'HANZHONG,汉中',
          'id': 115
        },
        {
          'name': '菏泽',
          tags: 'HEZE,菏泽',
          'id': 124
        },
        {
          'name': '惠州',
          tags: 'HUIZHOU,惠州',
          'id': 133
        },
        {
          'name': '黄山',
          tags: 'HUANGSHAN,黄山',
          'id': 141
        },
        {
          'name': '淮南',
          tags: 'HUAINAN,淮南',
          'id': 150
        },
        {
          'name': '淮北',
          tags: 'HUAIBEI,淮北',
          'id': 183
        },
        {
          'name': '呼伦贝尔',
          tags: 'HULUNBEIER,呼伦贝尔',
          'id': 198
        },
        {
          'name': '鹤岗',
          tags: 'HEGANG,鹤岗',
          'id': 212
        },
        {
          'name': '黑河',
          tags: 'HEIHE,黑河',
          'id': 217
        },
        {
          'name': '黄石',
          tags: 'HUANGSHI,黄石',
          'id': 227
        },
        {
          'name': '黄冈',
          tags: 'HUANGGANG,黄冈',
          'id': 232
        },
        {
          'name': '怀化',
          tags: 'HUAIHUA,怀化',
          'id': 244
        },
        {
          'name': '鹤壁',
          tags: 'HEBI,鹤壁',
          'id': 247
        },
        {
          'name': '河源',
          tags: 'HEYUAN,河源',
          'id': 254
        },
        {
          'name': '贺州',
          tags: 'HEZHOU,贺州',
          'id': 264
        },
        {
          'name': '河池',
          tags: 'HECHI,河池',
          'id': 265
        },
        {
          'name': '红河州',
          tags: 'HONGHEZHOU,红河州',
          'id': 306
        },
        {
          'name': '海东地区',
          tags: 'HAIDONGDIQU,海东地区',
          'id': 338
        },
        {
          'name': '海北州',
          tags: 'HAIBEIZHOU,海北州',
          'id': 339
        },
        {
          'name': '黄南州',
          tags: 'HUANGNANZHOU,黄南州',
          'id': 340
        },
        {
          'name': '海南州',
          tags: 'HAINANZHOU,海南州',
          'id': 341
        },
        {
          'name': '海西州',
          tags: 'HAIXIZHOU,海西州',
          'id': 344
        },
        {
          'name': '哈密地区',
          tags: 'HAMIDIQU,哈密地区',
          'id': 346
        },
        {
          'name': '和田地区',
          tags: 'HETIANDIQU,和田地区',
          'id': 347
        }
      ]
    },
    {
      'title': 'J',
      'list': [
        {
          'name': '济南',
          tags: 'JINAN,济南',
          'id': 12
        },
        {
          'name': '锦州',
          tags: 'JINZHOU,锦州',
          'id': 68
        },
        {
          'name': '晋中',
          tags: 'JINZHONG,晋中',
          'id': 71
        },
        {
          'name': '吉林',
          tags: 'JILIN,吉林',
          'id': 74
        },
        {
          'name': '济宁',
          tags: 'JINING,济宁',
          'id': 79
        },
        {
          'name': '金华',
          tags: 'JINHUA,金华',
          'id': 86
        },
        {
          'name': '嘉兴',
          tags: 'JIAXING,嘉兴',
          'id': 88
        },
        {
          'name': '九江',
          tags: 'JIUJIANG,九江',
          'id': 101
        },
        {
          'name': '荆州',
          tags: 'JINGZHOU,荆州',
          'id': 109
        },
        {
          'name': '景德镇',
          tags: 'JINGDEZHEN,景德镇',
          'id': 151
        },
        {
          'name': '江门',
          tags: 'JIANGMEN,江门',
          'id': 153
        },
        {
          'name': '揭阳',
          tags: 'JIEYANG,揭阳',
          'id': 154
        },
        {
          'name': '焦作',
          tags: 'JIAOZUO,焦作',
          'id': 175
        },
        {
          'name': '晋城',
          tags: 'JINCHENG,晋城',
          'id': 190
        },
        {
          'name': '鸡西',
          tags: 'JIXI,鸡西',
          'id': 211
        },
        {
          'name': '佳木斯',
          tags: 'JIAMUSI,佳木斯',
          'id': 215
        },
        {
          'name': '吉安',
          tags: 'JIAN,吉安',
          'id': 221
        },
        {
          'name': '荆门',
          tags: 'JINGMEN,荆门',
          'id': 229
        },
        {
          'name': '济源',
          tags: 'JIYUAN,济源',
          'id': 252
        },
        {
          'name': '金昌',
          tags: 'JINCHANG,金昌',
          'id': 322
        },
        {
          'name': '嘉峪关',
          tags: 'JIAYUGUAN,嘉峪关',
          'id': 324
        },
        {
          'name': '酒泉',
          tags: 'JIUQUAN,酒泉',
          'id': 328
        }
      ]
    },
    {
      'title': 'K',
      'list': [
        {
          'name': '昆明',
          tags: 'KUNMING,昆明',
          'id': 19
        },
        {
          'name': '开封',
          tags: 'KAIFENG,开封',
          'id': 110
        },
        {
          'name': '喀什地区',
          tags: 'KASHIDIQU,喀什地区',
          'id': 179
        },
        {
          'name': '克拉玛依',
          tags: 'KELAMAYI,克拉玛依',
          'id': 180
        },
        {
          'name': '克孜勒苏柯州',
          tags: 'KEZILESUKEZHOU,克孜勒苏柯州',
          'id': 349
        }
      ]
    },
    {
      'title': 'L',
      'list': [
        {
          'name': '洛阳',
          tags: 'LUOYANG,洛阳',
          'id': 27
        },
        {
          'name': '兰州',
          tags: 'LANZHOU,兰州',
          'id': 30
        },
        {
          'name': '廊坊',
          tags: 'LANGFANG,廊坊',
          'id': 46
        },
        {
          'name': '临沂',
          tags: 'LINYI,临沂',
          'id': 58
        },
        {
          'name': '辽阳',
          tags: 'LIAOYANG,辽阳',
          'id': 75
        },
        {
          'name': '连云港',
          tags: 'LIANYUNGANG,连云港',
          'id': 96
        },
        {
          'name': '泸州',
          tags: 'LUZHOU,泸州',
          'id': 117
        },
        {
          'name': '莱芜',
          tags: 'LAIWU,莱芜',
          'id': 122
        },
        {
          'name': '聊城',
          tags: 'LIAOCHENG,聊城',
          'id': 123
        },
        {
          'name': '柳州',
          tags: 'LIUZHOU,柳州',
          'id': 134
        },
        {
          'name': '丽江',
          tags: 'LIJIANG,丽江',
          'id': 137
        },
        {
          'name': '丽水',
          tags: 'LISHUI,丽水',
          'id': 139
        },
        {
          'name': '拉萨',
          tags: 'LASA,拉萨',
          'id': 178
        },
        {
          'name': '六安',
          tags: 'LIUAN,六安',
          'id': 186
        },
        {
          'name': '临汾',
          tags: 'LINFEN,临汾',
          'id': 193
        },
        {
          'name': '吕梁',
          tags: 'LVLIANG,吕梁',
          'id': 194
        },
        {
          'name': '辽源',
          tags: 'LIAOYUAN,辽源',
          'id': 206
        },
        {
          'name': '龙岩',
          tags: 'LONGYAN,龙岩',
          'id': 226
        },
        {
          'name': '娄底',
          tags: 'LOUDI,娄底',
          'id': 245
        },
        {
          'name': '漯河',
          tags: 'LUOHE,漯河',
          'id': 248
        },
        {
          'name': '来宾',
          tags: 'LAIBIN,来宾',
          'id': 266
        },
        {
          'name': '临高县',
          tags: 'LINGAOXIAN,临高县',
          'id': 277
        },
        {
          'name': '乐山',
          tags: 'LESHAN,乐山',
          'id': 283
        },
        {
          'name': '凉山州',
          tags: 'LIANGSHANZHOU,凉山州',
          'id': 292
        },
        {
          'name': '六盘水',
          tags: 'LIUPANSHUI,六盘水',
          'id': 293
        },
        {
          'name': '临沧',
          tags: 'LINCANG,临沧',
          'id': 304
        },
        {
          'name': '林芝地区',
          tags: 'LINZHIDIQU,林芝地区',
          'id': 317
        },
        {
          'name': '陇南',
          tags: 'LONGNAN,陇南',
          'id': 331
        },
        {
          'name': '临夏州',
          tags: 'LINXIAZHOU,临夏州',
          'id': 332
        }
      ]
    },
    {
      'title': 'M',
      'list': [
        {
          'name': '绵阳',
          tags: 'MIANYANG,绵阳',
          'id': 50
        },
        {
          'name': '马鞍山',
          tags: 'MAANSHAN,马鞍山',
          'id': 99
        },
        {
          'name': '牡丹江',
          tags: 'MUDANJIANG,牡丹江',
          'id': 129
        },
        {
          'name': '茂名',
          tags: 'MAOMING,茂名',
          'id': 155
        },
        {
          'name': '梅州',
          tags: 'MEIZHOU,梅州',
          'id': 156
        },
        {
          'name': '眉山',
          tags: 'MEISHAN,眉山',
          'id': 286
        }
      ]
    },
    {
      'title': 'N',
      'list': [
        {
          'name': '南京',
          tags: 'NANJING,南京',
          'id': 11
        },
        {
          'name': '宁波',
          tags: 'NINGBO,宁波',
          'id': 20
        },
        {
          'name': '南宁',
          tags: 'NANNING,南宁',
          'id': 33
        },
        {
          'name': '南昌',
          tags: 'NANCHANG,南昌',
          'id': 38
        },
        {
          'name': '南充',
          tags: 'NANCHONG,南充',
          'id': 53
        },
        {
          'name': '南通',
          tags: 'NANTONG,南通',
          'id': 92
        },
        {
          'name': '南阳',
          tags: 'NANYANG,南阳',
          'id': 113
        },
        {
          'name': '宁德',
          tags: 'NINGDE,宁德',
          'id': 144
        },
        {
          'name': '南平',
          tags: 'NANPING,南平',
          'id': 145
        },
        {
          'name': '内江',
          tags: 'NEIJIANG,内江',
          'id': 282
        },
        {
          'name': '怒江州',
          tags: 'NUJIANGZHOU,怒江州',
          'id': 310
        },
        {
          'name': '那曲地区',
          tags: 'NAQUDIQU,那曲地区',
          'id': 312
        }
      ]
    },
    {
      'title': 'P',
      'list': [
        {
          'name': '平顶山',
          tags: 'PINGDINGSHAN,平顶山',
          'id': 103
        },
        {
          'name': '攀枝花',
          tags: 'PANZHIHUA,攀枝花',
          'id': 119
        },
        {
          'name': '莆田',
          tags: 'PUTIAN,莆田',
          'id': 143
        },
        {
          'name': '盘锦',
          tags: 'PANJIN,盘锦',
          'id': 165
        },
        {
          'name': '濮阳',
          tags: 'PUYANG,濮阳',
          'id': 176
        },
        {
          'name': '萍乡',
          tags: 'PINGXIANG,萍乡',
          'id': 219
        },
        {
          'name': '普洱',
          tags: 'PUER,普洱',
          'id': 303
        },
        {
          'name': '平凉',
          tags: 'PINGLIANG,平凉',
          'id': 327
        }
      ]
    },
    {
      'title': 'Q',
      'list': [
        {
          'name': '青岛',
          tags: 'QINGDAO,青岛',
          'id': 13
        },
        {
          'name': '泉州',
          tags: 'QUANZHOU,泉州',
          'id': 35
        },
        {
          'name': '秦皇岛',
          tags: 'QINHUANGDAO,秦皇岛',
          'id': 61
        },
        {
          'name': '齐齐哈尔',
          tags: 'QIQIHAER,齐齐哈尔',
          'id': 65
        },
        {
          'name': '曲靖',
          tags: 'QUJING,曲靖',
          'id': 138
        },
        {
          'name': '衢州',
          tags: 'QUZHOU,衢州',
          'id': 140
        },
        {
          'name': '清远',
          tags: 'QINGYUAN,清远',
          'id': 157
        },
        {
          'name': '七台河',
          tags: 'QITAIHE,七台河',
          'id': 216
        },
        {
          'name': '潜江',
          tags: 'QIANJIANG,潜江',
          'id': 238
        },
        {
          'name': '钦州',
          tags: 'QINZHOU,钦州',
          'id': 261
        },
        {
          'name': '琼海',
          tags: 'QIONGHAI,琼海',
          'id': 269
        },
        {
          'name': '黔西南州',
          tags: 'QIANXINANZHOU,黔西南州',
          'id': 297
        },
        {
          'name': '黔东南州',
          tags: 'QIANDONGNANZHOU,黔东南州',
          'id': 298
        },
        {
          'name': '黔南州',
          tags: 'QIANNANZHOU,黔南州',
          'id': 299
        },
        {
          'name': '庆阳',
          tags: 'QINGYANG,庆阳',
          'id': 329
        }
      ]
    },
    {
      'title': 'R',
      'list': [
        {
          'name': '日照',
          tags: 'RIZHAO,日照',
          'id': 167
        },
        {
          'name': '日喀则地区',
          tags: 'RIKAZEDIQU,日喀则地区',
          'id': 315
        }
      ]
    },
    {
      'title': 'S',
      'list': [
        {
          'name': '深圳',
          tags: 'SHENZHEN,深圳',
          'id': 2
        },
        {
          'name': '上海',
          tags: 'SHANGHAI,上海',
          'id': 4
        },
        {
          'name': '沈阳',
          tags: 'SHENYANG,沈阳',
          'id': 8
        },
        {
          'name': '石家庄',
          tags: 'SHIJIAZHUANG,石家庄',
          'id': 22
        },
        {
          'name': '苏州',
          tags: 'SUZHOU,苏州',
          'id': 23
        },
        {
          'name': '三亚',
          tags: 'SANYA,三亚',
          'id': 37
        },
        {
          'name': '绍兴',
          tags: 'SHAOXING,绍兴',
          'id': 89
        },
        {
          'name': '绥化',
          tags: 'SUIHUA,绥化',
          'id': 128
        },
        {
          'name': '四平',
          tags: 'SIPING,四平',
          'id': 130
        },
        {
          'name': '宿迁',
          tags: 'SUQIAN,宿迁',
          'id': 147
        },
        {
          'name': '汕头',
          tags: 'SHANTOU,汕头',
          'id': 158
        },
        {
          'name': '商丘',
          tags: 'SHANGQIU,商丘',
          'id': 177
        },
        {
          'name': '石河子',
          tags: 'SHIHEZI,石河子',
          'id': 181
        },
        {
          'name': '宿州',
          tags: 'SUZHOU,宿州',
          'id': 185
        },
        {
          'name': '朔州',
          tags: 'SHUOZHOU,朔州',
          'id': 191
        },
        {
          'name': '松原',
          tags: 'SONGYUAN,松原',
          'id': 209
        },
        {
          'name': '双鸭山',
          tags: 'SHUANGYASHAN,双鸭山',
          'id': 213
        },
        {
          'name': '上饶',
          tags: 'SHANGRAO,上饶',
          'id': 224
        },
        {
          'name': '三明',
          tags: 'SANMING,三明',
          'id': 225
        },
        {
          'name': '十堰',
          tags: 'SHIYAN,十堰',
          'id': 228
        },
        {
          'name': '随州',
          tags: 'SUIZHOU,随州',
          'id': 234
        },
        {
          'name': '神农架林区',
          tags: 'SHENNONGJIALINQU,神农架林区',
          'id': 239
        },
        {
          'name': '邵阳',
          tags: 'SHAOYANG,邵阳',
          'id': 240
        },
        {
          'name': '三门峡',
          tags: 'SANMENXIA,三门峡',
          'id': 249
        },
        {
          'name': '韶关',
          tags: 'SHAOGUAN,韶关',
          'id': 253
        },
        {
          'name': '汕尾',
          tags: 'SHANWEI,汕尾',
          'id': 255
        },
        {
          'name': '遂宁',
          tags: 'SUINING,遂宁',
          'id': 281
        },
        {
          'name': '山南地区',
          tags: 'SHANNANDIQU,山南地区',
          'id': 314
        },
        {
          'name': '商洛',
          tags: 'SHANGLUO,商洛',
          'id': 321
        },
        {
          'name': '石嘴山',
          tags: 'SHIZUISHAN,石嘴山',
          'id': 334
        }
      ]
    },
    {
      'title': 'T',
      'list': [
        {
          'name': '天津',
          tags: 'TIANJIN,天津',
          'id': 7
        },
        {
          'name': '太原',
          tags: 'TAIYUAN,太原',
          'id': 26
        },
        {
          'name': '唐山',
          tags: 'TANGSHAN,唐山',
          'id': 40
        },
        {
          'name': '铁岭',
          tags: 'TIELING,铁岭',
          'id': 69
        },
        {
          'name': '台州',
          tags: 'TAIZHOU,台州',
          'id': 87
        },
        {
          'name': '泰州',
          tags: 'TAIZHOU,泰州',
          'id': 95
        },
        {
          'name': '泰安',
          tags: 'TAIAN,泰安',
          'id': 121
        },
        {
          'name': '天水',
          tags: 'TIANSHUI,天水',
          'id': 169
        },
        {
          'name': '铜陵',
          tags: 'TONGLING,铜陵',
          'id': 184
        },
        {
          'name': '通辽',
          tags: 'TONGLIAO,通辽',
          'id': 197
        },
        {
          'name': '通化',
          tags: 'TONGHUA,通化',
          'id': 207
        },
        {
          'name': '天门',
          tags: 'TIANMEN,天门',
          'id': 237
        },
        {
          'name': '屯昌县',
          tags: 'TUNCHANGXIAN,屯昌县',
          'id': 276
        },
        {
          'name': '铜仁地区',
          tags: 'TONGRENDIQU,铜仁地区',
          'id': 295
        },
        {
          'name': '铜川',
          tags: 'TONGCHUAN,铜川',
          'id': 318
        },
        {
          'name': '吐鲁番地区',
          tags: 'TULUFANDIQU,吐鲁番地区',
          'id': 345
        },
        {
          'name': '塔城地区',
          tags: 'TACHENGDIQU,塔城地区',
          'id': 354
        }
      ]
    },
    {
      'title': 'W',
      'list': [
        {
          'name': '武汉',
          tags: 'WUHAN,武汉',
          'id': 6
        },
        {
          'name': '威海',
          tags: 'WEIHAI,威海',
          'id': 42
        },
        {
          'name': '无锡',
          tags: 'WUXI,无锡',
          'id': 47
        },
        {
          'name': '乌鲁木齐',
          tags: 'WULUMUQI,乌鲁木齐',
          'id': 52
        },
        {
          'name': '潍坊',
          tags: 'WEIFANG,潍坊',
          'id': 81
        },
        {
          'name': '温州',
          tags: 'WENZHOU,温州',
          'id': 85
        },
        {
          'name': '芜湖',
          tags: 'WUHU,芜湖',
          'id': 98
        },
        {
          'name': '乌海',
          tags: 'WUHAI,乌海',
          'id': 195
        },
        {
          'name': '乌兰察布',
          tags: 'WULANCHABU,乌兰察布',
          'id': 200
        },
        {
          'name': '梧州',
          tags: 'WUZHOU,梧州',
          'id': 259
        },
        {
          'name': '五指山',
          tags: 'WUZHISHAN,五指山',
          'id': 268
        },
        {
          'name': '文昌',
          tags: 'WENCHANG,文昌',
          'id': 271
        },
        {
          'name': '万宁',
          tags: 'WANNING,万宁',
          'id': 272
        },
        {
          'name': '文山州',
          tags: 'WENSHANZHOU,文山州',
          'id': 305
        },
        {
          'name': '渭南',
          tags: 'WEINAN,渭南',
          'id': 319
        },
        {
          'name': '武威',
          tags: 'WUWEI,武威',
          'id': 325
        },
        {
          'name': '吴忠',
          tags: 'WUZHONG,吴忠',
          'id': 335
        }
      ]
    },
    {
      'title': 'X',
      'list': [
        {
          'name': '西安',
          tags: 'XIAN,西安',
          'id': 10
        },
        {
          'name': '西宁',
          tags: 'XINING,西宁',
          'id': 28
        },
        {
          'name': '厦门',
          tags: 'XIAMEN,厦门',
          'id': 32
        },
        {
          'name': '徐州',
          tags: 'XUZHOU,徐州',
          'id': 39
        },
        {
          'name': '湘潭',
          tags: 'XIANGTAN,湘潭',
          'id': 55
        },
        {
          'name': '邢台',
          tags: 'XINGTAI,邢台',
          'id': 67
        },
        {
          'name': '襄阳',
          tags: 'XIANGYANG,襄阳',
          'id': 108
        },
        {
          'name': '新乡',
          tags: 'XINXIANG,新乡',
          'id': 111
        },
        {
          'name': '许昌',
          tags: 'XUCHANG,许昌',
          'id': 112
        },
        {
          'name': '咸阳',
          tags: 'XIANYANG,咸阳',
          'id': 116
        },
        {
          'name': '新余',
          tags: 'XINYU,新余',
          'id': 152
        },
        {
          'name': '宣城',
          tags: 'XUANCHENG,宣城',
          'id': 182
        },
        {
          'name': '忻州',
          tags: 'XINZHOU,忻州',
          'id': 192
        },
        {
          'name': '锡林郭勒盟',
          tags: 'XILINGUOLEMENG,锡林郭勒盟',
          'id': 201
        },
        {
          'name': '兴安盟',
          tags: 'XINGANMENG,兴安盟',
          'id': 203
        },
        {
          'name': '孝感',
          tags: 'XIAOGAN,孝感',
          'id': 231
        },
        {
          'name': '咸宁',
          tags: 'XIANNING,咸宁',
          'id': 233
        },
        {
          'name': '仙桃',
          tags: 'XIANTAO,仙桃',
          'id': 236
        },
        {
          'name': '湘西州',
          tags: 'XIANGXIZHOU,湘西州',
          'id': 246
        },
        {
          'name': '信阳',
          tags: 'XINYANG,信阳',
          'id': 250
        },
        {
          'name': '西双版纳州',
          tags: 'XISHUANGBANNAZHOU,西双版纳州',
          'id': 307
        }
      ]
    },
    {
      'title': 'Y',
      'list': [
        {
          'name': '烟台',
          tags: 'YANTAI,烟台',
          'id': 29
        },
        {
          'name': '银川',
          tags: 'YINCHUAN,银川',
          'id': 49
        },
        {
          'name': '宜昌',
          tags: 'YICHANG,宜昌',
          'id': 51
        },
        {
          'name': '岳阳',
          tags: 'YUEYANG,岳阳',
          'id': 56
        },
        {
          'name': '营口',
          tags: 'YINGKOU,营口',
          'id': 76
        },
        {
          'name': '扬州',
          tags: 'YANGZHOU,扬州',
          'id': 91
        },
        {
          'name': '盐城',
          tags: 'YANCHENG,盐城',
          'id': 94
        },
        {
          'name': '运城',
          tags: 'YUNCHENG,运城',
          'id': 104
        },
        {
          'name': '宜宾',
          tags: 'YIBIN,宜宾',
          'id': 118
        },
        {
          'name': '阳泉',
          tags: 'YANGQUAN,阳泉',
          'id': 126
        },
        {
          'name': '延吉',
          tags: 'YANJI,延吉',
          'id': 131
        },
        {
          'name': '玉林',
          tags: 'YULIN,玉林',
          'id': 162
        },
        {
          'name': '延安',
          tags: 'YANAN,延安',
          'id': 171
        },
        {
          'name': '榆林',
          tags: 'YULIN,榆林',
          'id': 172
        },
        {
          'name': '伊春',
          tags: 'YICHUN,伊春',
          'id': 214
        },
        {
          'name': '鹰潭',
          tags: 'YINGTAN,鹰潭',
          'id': 220
        },
        {
          'name': '宜春',
          tags: 'YICHUN,宜春',
          'id': 222
        },
        {
          'name': '益阳',
          tags: 'YIYANG,益阳',
          'id': 242
        },
        {
          'name': '永州',
          tags: 'YONGZHOU,永州',
          'id': 243
        },
        {
          'name': '阳江',
          tags: 'YANGJIANG,阳江',
          'id': 256
        },
        {
          'name': '云浮',
          tags: 'YUNFU,云浮',
          'id': 258
        },
        {
          'name': '雅安',
          tags: 'YAAN,雅安',
          'id': 287
        },
        {
          'name': '玉溪',
          tags: 'YUXI,玉溪',
          'id': 300
        },
        {
          'name': '玉树州',
          tags: 'YUSHUZHOU,玉树州',
          'id': 343
        },
        {
          'name': '伊犁州',
          tags: 'YILIZHOU,伊犁州',
          'id': 353
        }
      ]
    },
    {
      'title': 'Z',
      'list': [
        {
          'name': '郑州',
          tags: 'ZHENGZHOU,郑州',
          'id': 9
        },
        {
          'name': '遵义',
          tags: 'ZUNYI,遵义',
          'id': 44
        },
        {
          'name': '株洲',
          tags: 'ZHUZHOU,株洲',
          'id': 54
        },
        {
          'name': '淄博',
          tags: 'ZIBO,淄博',
          'id': 57
        },
        {
          'name': '张家口',
          tags: 'ZHANGJIAKOU,张家口',
          'id': 78
        },
        {
          'name': '珠海',
          tags: 'ZHUHAI,珠海',
          'id': 84
        },
        {
          'name': '镇江',
          tags: 'ZHENJIANG,镇江',
          'id': 93
        },
        {
          'name': '周口',
          tags: 'ZHOUKOU,周口',
          'id': 114
        },
        {
          'name': '中山',
          tags: 'ZHONGSHAN,中山',
          'id': 132
        },
        {
          'name': '漳州',
          tags: 'ZHANGZHOU,漳州',
          'id': 142
        },
        {
          'name': '舟山',
          tags: 'ZHOUSHAN,舟山',
          'id': 146
        },
        {
          'name': '湛江',
          tags: 'ZHANJIANG,湛江',
          'id': 159
        },
        {
          'name': '肇庆',
          tags: 'ZHAOQING,肇庆',
          'id': 160
        },
        {
          'name': '枣庄',
          tags: 'ZAOZHUANG,枣庄',
          'id': 168
        },
        {
          'name': '张家界',
          tags: 'ZHANGJIAJIE,张家界',
          'id': 241
        },
        {
          'name': '驻马店',
          tags: 'ZHUMADIAN,驻马店',
          'id': 251
        },
        {
          'name': '自贡',
          tags: 'ZIGONG,自贡',
          'id': 279
        },
        {
          'name': '资阳',
          tags: 'ZIYANG,资阳',
          'id': 289
        },
        {
          'name': '昭通',
          tags: 'ZHAOTONG,昭通',
          'id': 302
        },
        {
          'name': '张掖',
          tags: 'ZHANGYE,张掖',
          'id': 326
        },
        {
          'name': '中卫',
          tags: 'ZHONGWEI,中卫',
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
  const [defaultValue, setDefaultValue] = useState([2])
  const [custmerCityData, setCustmerCityData] = useState([
    {
      "value": 1,
      "text": "北京",
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
          "text": "崇文区"
        },
        {
          "value": 4,
          "text": "宣武区"
        },
        {
          "value": 5,
          "text": "朝阳区"
        },
        {
          "value": 6,
          "text": "丰台区"
        },
        {
          "value": 7,
          "text": "石景山区"
        },
        {
          "value": 8,
          "text": "海淀区"
        },
        {
          "value": 9,
          "text": "门头沟区"
        },
        {
          "value": 10,
          "text": "房山区"
        },
        {
          "value": 11,
          "text": "通州区"
        },
        {
          "value": 12,
          "text": "顺义区"
        },
        {
          "value": 13,
          "text": "昌平区"
        },
        {
          "value": 14,
          "text": "大兴区"
        },
        {
          "value": 15,
          "text": "怀柔区"
        },
        {
          "value": 16,
          "text": "平谷区"
        },
        {
          "value": 17,
          "text": "密云县"
        },
        {
          "value": 18,
          "text": "延庆县"
        },
        {
          "value": 19,
          "text": "延庆镇"
        }
      ]
    },
    {
      "value": 2,
      "text": "天津",
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
          "text": "塘沽区"
        },
        {
          "value": 8,
          "text": "汉沽区"
        },
        {
          "value": 9,
          "text": "大港区"
        },
        {
          "value": 10,
          "text": "东丽区"
        },
        {
          "value": 11,
          "text": "西青区"
        },
        {
          "value": 12,
          "text": "津南区"
        },
        {
          "value": 13,
          "text": "北辰区"
        },
        {
          "value": 14,
          "text": "武清区"
        },
        {
          "value": 15,
          "text": "宝坻区"
        },
        {
          "value": 16,
          "text": "蓟县"
        },
        {
          "value": 17,
          "text": "宁河县"
        },
        {
          "value": 18,
          "text": "芦台镇"
        },
        {
          "value": 19,
          "text": "静海县"
        },
        {
          "value": 20,
          "text": "静海镇"
        }
      ]
    },
    {
      "value": 3,
      "text": "上海",
      "children": [
        {
          "value": 1,
          "text": "黄浦区"
        },
        {
          "value": 2,
          "text": "卢湾区"
        },
        {
          "value": 3,
          "text": "徐汇区"
        },
        {
          "value": 4,
          "text": "长宁区"
        },
        {
          "value": 5,
          "text": "静安区"
        },
        {
          "value": 6,
          "text": "普陀区"
        },
        {
          "value": 7,
          "text": "闸北区"
        },
        {
          "value": 8,
          "text": "虹口区"
        },
        {
          "value": 9,
          "text": "杨浦区"
        },
        {
          "value": 10,
          "text": "闵行区"
        },
        {
          "value": 11,
          "text": "宝山区?"
        },
        {
          "value": 12,
          "text": "嘉定区"
        },
        {
          "value": 13,
          "text": "浦东新区"
        },
        {
          "value": 14,
          "text": "金山区"
        },
        {
          "value": 15,
          "text": "松江区"
        },
        {
          "value": 16,
          "text": "青浦区"
        },
        {
          "value": 17,
          "text": "南汇区"
        },
        {
          "value": 18,
          "text": "奉贤区"
        },
        {
          "value": 19,
          "text": "崇明县"
        },
        {
          "value": 20,
          "text": "城桥镇"
        }
      ]
    },
    {
      "value": 4,
      "text": "重庆",
      "children": [
        {
          "value": 1,
          "text": "渝中区"
        },
        {
          "value": 2,
          "text": "大渡口区"
        },
        {
          "value": 3,
          "text": "江北区"
        },
        {
          "value": 4,
          "text": "沙坪坝区"
        },
        {
          "value": 5,
          "text": "九龙坡区"
        },
        {
          "value": 6,
          "text": "南岸区"
        },
        {
          "value": 7,
          "text": "北碚区"
        },
        {
          "value": 8,
          "text": "万盛区"
        },
        {
          "value": 9,
          "text": "双桥区"
        },
        {
          "value": 10,
          "text": "渝北区"
        },
        {
          "value": 11,
          "text": "巴南区"
        },
        {
          "value": 12,
          "text": "万州区"
        },
        {
          "value": 13,
          "text": "涪陵区"
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
          "text": "合川"
        },
        {
          "value": 17,
          "text": "永川区"
        },
        {
          "value": 18,
          "text": "江津"
        },
        {
          "value": 19,
          "text": "南川"
        },
        {
          "value": 20,
          "text": "綦江县"
        },
        {
          "value": 21,
          "text": "潼南县"
        },
        {
          "value": 22,
          "text": "铜梁县"
        },
        {
          "value": 23,
          "text": "大足县"
        },
        {
          "value": 24,
          "text": "荣昌县"
        },
        {
          "value": 25,
          "text": "璧山县"
        },
        {
          "value": 26,
          "text": "垫江县"
        },
        {
          "value": 27,
          "text": "武隆县"
        },
        {
          "value": 28,
          "text": "丰都县"
        },
        {
          "value": 29,
          "text": "城口县"
        },
        {
          "value": 30,
          "text": "梁平县"
        },
        {
          "value": 31,
          "text": "开县"
        },
        {
          "value": 32,
          "text": "巫溪县"
        },
        {
          "value": 33,
          "text": "巫山县"
        },
        {
          "value": 34,
          "text": "奉节县"
        },
        {
          "value": 35,
          "text": "云阳县"
        },
        {
          "value": 36,
          "text": "忠县"
        },
        {
          "value": 37,
          "text": "石柱土家族自治县"
        },
        {
          "value": 38,
          "text": "彭水苗族土家族自治县"
        },
        {
          "value": 39,
          "text": "酉阳土家族苗族自治县"
        },
        {
          "value": 40,
          "text": "秀山土家族苗族自治县"
        }
      ]
    },
    {
      "value": 5,
      "text": "石家庄",
      "children": [
        {
          "value": 1,
          "text": "长安区"
        },
        {
          "value": 2,
          "text": "桥东区"
        },
        {
          "value": 3,
          "text": "桥西区"
        },
        {
          "value": 4,
          "text": "新华区"
        },
        {
          "value": 5,
          "text": "裕华区"
        },
        {
          "value": 6,
          "text": "井陉矿区"
        },
        {
          "value": 7,
          "text": "辛集"
        },
        {
          "value": 8,
          "text": "藁城"
        },
        {
          "value": 9,
          "text": "晋州"
        },
        {
          "value": 10,
          "text": "新乐"
        },
        {
          "value": 11,
          "text": "鹿泉"
        },
        {
          "value": 12,
          "text": "井陉县"
        },
        {
          "value": 13,
          "text": "微水镇"
        },
        {
          "value": 14,
          "text": "正定县"
        },
        {
          "value": 15,
          "text": "正定镇"
        },
        {
          "value": 16,
          "text": "栾城县"
        },
        {
          "value": 17,
          "text": "栾城镇"
        },
        {
          "value": 18,
          "text": "行唐县"
        },
        {
          "value": 19,
          "text": "龙州镇"
        },
        {
          "value": 20,
          "text": "灵寿县"
        },
        {
          "value": 21,
          "text": "灵寿镇"
        },
        {
          "value": 22,
          "text": "高邑县"
        },
        {
          "value": 23,
          "text": "高邑镇"
        },
        {
          "value": 24,
          "text": "深泽县"
        },
        {
          "value": 25,
          "text": "深泽镇"
        },
        {
          "value": 26,
          "text": "赞皇县"
        },
        {
          "value": 27,
          "text": "赞皇镇"
        },
        {
          "value": 28,
          "text": "无极县"
        },
        {
          "value": 29,
          "text": "无极镇"
        },
        {
          "value": 30,
          "text": "平山县"
        },
        {
          "value": 31,
          "text": "平山镇"
        },
        {
          "value": 32,
          "text": "元氏县"
        },
        {
          "value": 33,
          "text": "槐阳镇"
        },
        {
          "value": 34,
          "text": "赵县"
        },
        {
          "value": 35,
          "text": "赵州镇"
        }
      ]
    },
    {
      "value": 6,
      "text": "张家口",
      "children": [
        {
          "value": 1,
          "text": "桥西区"
        },
        {
          "value": 2,
          "text": "桥东区"
        },
        {
          "value": 3,
          "text": "宣化区"
        },
        {
          "value": 4,
          "text": "下花园区"
        },
        {
          "value": 5,
          "text": "宣化县"
        },
        {
          "value": 6,
          "text": "张家口宣化区"
        },
        {
          "value": 7,
          "text": "张北县"
        },
        {
          "value": 8,
          "text": "张北镇"
        },
        {
          "value": 9,
          "text": "康保县"
        },
        {
          "value": 10,
          "text": "康保镇"
        },
        {
          "value": 11,
          "text": "沽源县"
        },
        {
          "value": 12,
          "text": "平定堡镇"
        },
        {
          "value": 13,
          "text": "尚义县"
        },
        {
          "value": 14,
          "text": "南壕堑镇"
        },
        {
          "value": 15,
          "text": "蔚县"
        },
        {
          "value": 16,
          "text": "蔚州镇"
        },
        {
          "value": 17,
          "text": "阳原县"
        },
        {
          "value": 18,
          "text": "西城镇"
        },
        {
          "value": 19,
          "text": "怀安县"
        },
        {
          "value": 20,
          "text": "柴沟堡镇"
        },
        {
          "value": 21,
          "text": "万全县"
        },
        {
          "value": 22,
          "text": "孔家庄镇"
        },
        {
          "value": 23,
          "text": "怀来县"
        },
        {
          "value": 24,
          "text": "沙城镇"
        },
        {
          "value": 25,
          "text": "涿鹿县"
        },
        {
          "value": 26,
          "text": "涿鹿镇"
        },
        {
          "value": 27,
          "text": "赤城县"
        },
        {
          "value": 28,
          "text": "赤城镇"
        },
        {
          "value": 29,
          "text": "崇礼县"
        },
        {
          "value": 30,
          "text": "西湾子镇"
        }
      ]
    },
    {
      "value": 7,
      "text": "承德",
      "children": [
        {
          "value": 1,
          "text": "双桥区"
        },
        {
          "value": 2,
          "text": "双滦区"
        },
        {
          "value": 3,
          "text": "鹰手营子矿区"
        },
        {
          "value": 4,
          "text": "承德县"
        },
        {
          "value": 5,
          "text": "下板城镇"
        },
        {
          "value": 6,
          "text": "兴隆县"
        },
        {
          "value": 7,
          "text": "兴隆镇"
        },
        {
          "value": 8,
          "text": "平泉县"
        },
        {
          "value": 9,
          "text": "平泉镇"
        },
        {
          "value": 10,
          "text": "滦平县"
        },
        {
          "value": 11,
          "text": "滦平镇"
        },
        {
          "value": 12,
          "text": "隆化县"
        },
        {
          "value": 13,
          "text": "隆化镇"
        },
        {
          "value": 14,
          "text": "丰宁满族自治县"
        },
        {
          "value": 15,
          "text": "大阁镇"
        },
        {
          "value": 16,
          "text": "宽城满族自治县"
        },
        {
          "value": 17,
          "text": "宽城镇"
        },
        {
          "value": 18,
          "text": "围场满族蒙古族自治县"
        },
        {
          "value": 19,
          "text": "围场镇"
        }
      ]
    },
    {
      "value": 8,
      "text": "秦皇岛",
      "children": [
        {
          "value": 1,
          "text": "海港区"
        },
        {
          "value": 2,
          "text": "山海关区"
        },
        {
          "value": 3,
          "text": "北戴河区"
        },
        {
          "value": 4,
          "text": "昌黎县"
        },
        {
          "value": 5,
          "text": "昌黎镇"
        },
        {
          "value": 6,
          "text": "抚宁县"
        },
        {
          "value": 7,
          "text": "抚宁镇"
        },
        {
          "value": 8,
          "text": "卢龙县"
        },
        {
          "value": 9,
          "text": "卢龙镇"
        },
        {
          "value": 10,
          "text": "青龙满族自治县"
        },
        {
          "value": 11,
          "text": "青龙镇"
        }
      ]
    },
    {
      "value": 9,
      "text": "唐山",
      "children": [
        {
          "value": 1,
          "text": "路北区"
        },
        {
          "value": 2,
          "text": "路南区"
        },
        {
          "value": 3,
          "text": "古冶区"
        },
        {
          "value": 4,
          "text": "开平区"
        },
        {
          "value": 5,
          "text": "丰润区"
        },
        {
          "value": 6,
          "text": "丰南区"
        },
        {
          "value": 7,
          "text": "遵化"
        },
        {
          "value": 8,
          "text": "迁安"
        },
        {
          "value": 9,
          "text": "滦县"
        },
        {
          "value": 10,
          "text": "滦州镇"
        },
        {
          "value": 11,
          "text": "滦南县"
        },
        {
          "value": 12,
          "text": "倴城镇"
        },
        {
          "value": 13,
          "text": "乐亭县"
        },
        {
          "value": 14,
          "text": "乐亭镇"
        },
        {
          "value": 15,
          "text": "迁西县"
        },
        {
          "value": 16,
          "text": "兴城镇"
        },
        {
          "value": 17,
          "text": "玉田县"
        },
        {
          "value": 18,
          "text": "玉田镇"
        },
        {
          "value": 19,
          "text": "唐海县"
        },
        {
          "value": 20,
          "text": "唐海镇"
        }
      ]
    },
    {
      "value": 10,
      "text": "廊坊",
      "children": [
        {
          "value": 1,
          "text": "安次区"
        },
        {
          "value": 2,
          "text": "广阳区"
        },
        {
          "value": 3,
          "text": "霸州"
        },
        {
          "value": 4,
          "text": "三河"
        },
        {
          "value": 5,
          "text": "固安县"
        },
        {
          "value": 6,
          "text": "固安镇"
        },
        {
          "value": 7,
          "text": "永清县"
        },
        {
          "value": 8,
          "text": "永清镇"
        },
        {
          "value": 9,
          "text": "香河县"
        },
        {
          "value": 10,
          "text": "淑阳镇"
        },
        {
          "value": 11,
          "text": "大城县"
        },
        {
          "value": 12,
          "text": "平舒镇"
        },
        {
          "value": 13,
          "text": "文安县"
        },
        {
          "value": 14,
          "text": "文安镇"
        },
        {
          "value": 15,
          "text": "大厂回族自治县"
        },
        {
          "value": 16,
          "text": "大厂镇"
        }
      ]
    },
    {
      "value": 11,
      "text": "保定",
      "children": [
        {
          "value": 1,
          "text": "新区"
        },
        {
          "value": 2,
          "text": "北区"
        },
        {
          "value": 3,
          "text": "南区"
        },
        {
          "value": 4,
          "text": "定州"
        },
        {
          "value": 5,
          "text": "涿州"
        },
        {
          "value": 6,
          "text": "安国"
        },
        {
          "value": 7,
          "text": "高碑店"
        },
        {
          "value": 8,
          "text": "满城县"
        },
        {
          "value": 9,
          "text": "满城镇"
        },
        {
          "value": 10,
          "text": "清苑县"
        },
        {
          "value": 11,
          "text": "清苑镇"
        },
        {
          "value": 12,
          "text": "易县"
        },
        {
          "value": 13,
          "text": "易州镇"
        },
        {
          "value": 14,
          "text": "徐水县"
        },
        {
          "value": 15,
          "text": "安肃镇"
        },
        {
          "value": 16,
          "text": "涞源县"
        },
        {
          "value": 17,
          "text": "涞源镇"
        },
        {
          "value": 18,
          "text": "定兴县"
        },
        {
          "value": 19,
          "text": "定兴镇"
        },
        {
          "value": 20,
          "text": "顺平县"
        },
        {
          "value": 21,
          "text": "蒲阳镇"
        },
        {
          "value": 22,
          "text": "唐县"
        },
        {
          "value": 23,
          "text": "仁厚镇"
        },
        {
          "value": 24,
          "text": "望都县"
        },
        {
          "value": 25,
          "text": "望都镇"
        },
        {
          "value": 26,
          "text": "涞水县"
        },
        {
          "value": 27,
          "text": "涞水镇"
        },
        {
          "value": 28,
          "text": "高阳县"
        },
        {
          "value": 29,
          "text": "高阳镇"
        },
        {
          "value": 30,
          "text": "安新县"
        },
        {
          "value": 31,
          "text": "安新镇"
        },
        {
          "value": 32,
          "text": "雄县"
        },
        {
          "value": 33,
          "text": "雄州镇"
        },
        {
          "value": 34,
          "text": "容城县"
        },
        {
          "value": 35,
          "text": "容城镇"
        },
        {
          "value": 36,
          "text": "曲阳县"
        },
        {
          "value": 37,
          "text": "恒州镇"
        },
        {
          "value": 38,
          "text": "阜平县"
        },
        {
          "value": 39,
          "text": "阜平镇"
        },
        {
          "value": 40,
          "text": "博野县"
        },
        {
          "value": 41,
          "text": "博陵镇"
        },
        {
          "value": 42,
          "text": "蠡县"
        },
        {
          "value": 43,
          "text": "蠡吾镇"
        }
      ]
    },
    {
      "value": 12,
      "text": "衡水",
      "children": [
        {
          "value": 1,
          "text": "桃城区"
        },
        {
          "value": 2,
          "text": "冀州"
        },
        {
          "value": 3,
          "text": "深州"
        },
        {
          "value": 4,
          "text": "枣强县"
        },
        {
          "value": 5,
          "text": "枣强镇"
        },
        {
          "value": 6,
          "text": "武邑县"
        },
        {
          "value": 7,
          "text": "武邑镇"
        },
        {
          "value": 8,
          "text": "武强县"
        },
        {
          "value": 9,
          "text": "武强镇"
        },
        {
          "value": 10,
          "text": "饶阳县"
        },
        {
          "value": 11,
          "text": "饶阳镇"
        },
        {
          "value": 12,
          "text": "安平县"
        },
        {
          "value": 13,
          "text": "安平镇"
        },
        {
          "value": 14,
          "text": "故城县"
        },
        {
          "value": 15,
          "text": "郑口镇"
        },
        {
          "value": 16,
          "text": "景县"
        },
        {
          "value": 17,
          "text": "景州镇"
        },
        {
          "value": 18,
          "text": "阜城县"
        },
        {
          "value": 19,
          "text": "阜城镇"
        }
      ]
    },
    {
      "value": 13,
      "text": "沧州",
      "children": [
        {
          "value": 1,
          "text": "运河区"
        },
        {
          "value": 2,
          "text": "新华区"
        },
        {
          "value": 3,
          "text": "泊头"
        },
        {
          "value": 4,
          "text": "任丘"
        },
        {
          "value": 5,
          "text": "黄骅"
        },
        {
          "value": 6,
          "text": "河间"
        },
        {
          "value": 7,
          "text": "沧县"
        },
        {
          "value": 8,
          "text": "沧州新华区"
        },
        {
          "value": 9,
          "text": "青县"
        },
        {
          "value": 10,
          "text": "清州镇"
        },
        {
          "value": 11,
          "text": "东光县"
        },
        {
          "value": 12,
          "text": "东光镇"
        },
        {
          "value": 13,
          "text": "海兴县"
        },
        {
          "value": 14,
          "text": "苏基镇"
        },
        {
          "value": 15,
          "text": "盐山县"
        },
        {
          "value": 16,
          "text": "盐山镇"
        },
        {
          "value": 17,
          "text": "肃宁县"
        },
        {
          "value": 18,
          "text": "肃宁镇"
        },
        {
          "value": 19,
          "text": "南皮县"
        },
        {
          "value": 20,
          "text": "南皮镇"
        },
        {
          "value": 21,
          "text": "吴桥县"
        },
        {
          "value": 22,
          "text": "桑园镇"
        },
        {
          "value": 23,
          "text": "献县"
        },
        {
          "value": 24,
          "text": "乐寿镇"
        },
        {
          "value": 25,
          "text": "孟村回族自治县"
        },
        {
          "value": 26,
          "text": "孟村镇"
        }
      ]
    },
    {
      "value": 14,
      "text": "邢台",
      "children": [
        {
          "value": 1,
          "text": "桥东区"
        },
        {
          "value": 2,
          "text": "桥西区"
        },
        {
          "value": 3,
          "text": "南宫"
        },
        {
          "value": 4,
          "text": "沙河"
        },
        {
          "value": 5,
          "text": "邢台县"
        },
        {
          "value": 6,
          "text": "邢台桥东区"
        },
        {
          "value": 7,
          "text": "临城县"
        },
        {
          "value": 8,
          "text": "临城镇"
        },
        {
          "value": 9,
          "text": "内丘县"
        },
        {
          "value": 10,
          "text": "内丘镇"
        },
        {
          "value": 11,
          "text": "柏乡县"
        },
        {
          "value": 12,
          "text": "柏乡镇"
        },
        {
          "value": 13,
          "text": "隆尧县"
        },
        {
          "value": 14,
          "text": "隆尧镇"
        },
        {
          "value": 15,
          "text": "任县"
        },
        {
          "value": 16,
          "text": "任城镇"
        },
        {
          "value": 17,
          "text": "南和县"
        },
        {
          "value": 18,
          "text": "和阳镇"
        },
        {
          "value": 19,
          "text": "宁晋县"
        },
        {
          "value": 20,
          "text": "凤凰镇"
        },
        {
          "value": 21,
          "text": "巨鹿县"
        },
        {
          "value": 22,
          "text": "巨鹿镇"
        },
        {
          "value": 23,
          "text": "新河县"
        },
        {
          "value": 24,
          "text": "新河镇"
        },
        {
          "value": 25,
          "text": "广宗县"
        },
        {
          "value": 26,
          "text": "广宗镇"
        },
        {
          "value": 27,
          "text": "平乡县"
        },
        {
          "value": 28,
          "text": "丰州镇"
        },
        {
          "value": 29,
          "text": "威县"
        },
        {
          "value": 30,
          "text": "洺州镇"
        },
        {
          "value": 31,
          "text": "清河县"
        },
        {
          "value": 32,
          "text": "葛仙庄镇"
        },
        {
          "value": 33,
          "text": "临西县"
        },
        {
          "value": 34,
          "text": "临西镇"
        }
      ]
    },
    {
      "value": 15,
      "text": "邯郸",
      "children": [
        {
          "value": 1,
          "text": "丛台区"
        },
        {
          "value": 2,
          "text": "邯山区"
        },
        {
          "value": 3,
          "text": "复兴区"
        },
        {
          "value": 4,
          "text": "峰峰矿区"
        },
        {
          "value": 5,
          "text": "武安"
        },
        {
          "value": 6,
          "text": "邯郸县"
        },
        {
          "value": 7,
          "text": "南堡乡东小屯村"
        },
        {
          "value": 8,
          "text": "临漳县"
        },
        {
          "value": 9,
          "text": "临漳镇"
        },
        {
          "value": 10,
          "text": "成安县"
        },
        {
          "value": 11,
          "text": "成安镇"
        },
        {
          "value": 12,
          "text": "大名县"
        },
        {
          "value": 13,
          "text": "大名镇"
        },
        {
          "value": 14,
          "text": "涉县"
        },
        {
          "value": 15,
          "text": "涉城镇"
        },
        {
          "value": 16,
          "text": "磁县"
        },
        {
          "value": 17,
          "text": "磁州镇"
        },
        {
          "value": 18,
          "text": "肥乡县"
        },
        {
          "value": 19,
          "text": "肥乡镇"
        },
        {
          "value": 20,
          "text": "永年县"
        },
        {
          "value": 21,
          "text": "临洺关镇"
        },
        {
          "value": 22,
          "text": "邱县"
        },
        {
          "value": 23,
          "text": "新马头镇"
        },
        {
          "value": 24,
          "text": "鸡泽县"
        },
        {
          "value": 25,
          "text": "鸡泽镇"
        },
        {
          "value": 26,
          "text": "广平县"
        },
        {
          "value": 27,
          "text": "广平镇"
        },
        {
          "value": 28,
          "text": "馆陶县"
        },
        {
          "value": 29,
          "text": "馆陶镇"
        },
        {
          "value": 30,
          "text": "魏县"
        },
        {
          "value": 31,
          "text": "魏城镇"
        },
        {
          "value": 32,
          "text": "曲周县"
        },
        {
          "value": 33,
          "text": "曲周镇"
        }
      ]
    },
    {
      "value": 16,
      "text": "太原",
      "children": [
        {
          "value": 1,
          "text": "杏花岭区"
        },
        {
          "value": 2,
          "text": "小店区"
        },
        {
          "value": 3,
          "text": "迎泽区"
        },
        {
          "value": 4,
          "text": "尖草坪区"
        },
        {
          "value": 5,
          "text": "万柏林区"
        },
        {
          "value": 6,
          "text": "晋源区"
        },
        {
          "value": 7,
          "text": "古交"
        },
        {
          "value": 8,
          "text": "清徐县"
        },
        {
          "value": 9,
          "text": "清源镇"
        },
        {
          "value": 10,
          "text": "阳曲县"
        },
        {
          "value": 11,
          "text": "黄寨镇"
        },
        {
          "value": 12,
          "text": "娄烦县"
        },
        {
          "value": 13,
          "text": "娄烦镇"
        }
      ]
    },
    {
      "value": 17,
      "text": "朔州",
      "children": [
        {
          "value": 1,
          "text": "朔城区"
        },
        {
          "value": 2,
          "text": "平鲁区"
        },
        {
          "value": 3,
          "text": "山阴县"
        },
        {
          "value": 4,
          "text": "岱岳乡"
        },
        {
          "value": 5,
          "text": "应县"
        },
        {
          "value": 6,
          "text": "金城镇"
        },
        {
          "value": 7,
          "text": "右玉县"
        },
        {
          "value": 8,
          "text": "新城镇"
        },
        {
          "value": 9,
          "text": "怀仁县"
        },
        {
          "value": 10,
          "text": "云中镇"
        }
      ]
    },
    {
      "value": 18,
      "text": "大同",
      "children": [
        {
          "value": 1,
          "text": "城区"
        },
        {
          "value": 2,
          "text": "矿区"
        },
        {
          "value": 3,
          "text": "南郊区"
        },
        {
          "value": 4,
          "text": "新荣区"
        },
        {
          "value": 5,
          "text": "阳高县"
        },
        {
          "value": 6,
          "text": "龙泉镇"
        },
        {
          "value": 7,
          "text": "天镇县"
        },
        {
          "value": 8,
          "text": "玉泉镇"
        },
        {
          "value": 9,
          "text": "广灵县"
        },
        {
          "value": 10,
          "text": "壶泉镇"
        },
        {
          "value": 11,
          "text": "灵丘县"
        },
        {
          "value": 12,
          "text": "武灵镇"
        },
        {
          "value": 13,
          "text": "浑源县"
        },
        {
          "value": 14,
          "text": "永安镇"
        },
        {
          "value": 15,
          "text": "左云县"
        },
        {
          "value": 16,
          "text": "云兴镇"
        },
        {
          "value": 17,
          "text": "大同县"
        },
        {
          "value": 18,
          "text": "西坪镇"
        }
      ]
    },
    {
      "value": 19,
      "text": "阳泉",
      "children": [
        {
          "value": 1,
          "text": "城区"
        },
        {
          "value": 2,
          "text": "矿区"
        },
        {
          "value": 3,
          "text": "郊区"
        },
        {
          "value": 4,
          "text": "平定县"
        },
        {
          "value": 5,
          "text": "冠山镇"
        },
        {
          "value": 6,
          "text": "盂县"
        },
        {
          "value": 7,
          "text": "秀水镇"
        }
      ]
    },
    {
      "value": 20,
      "text": "长治",
      "children": [
        {
          "value": 1,
          "text": "城区"
        },
        {
          "value": 2,
          "text": "郊区"
        },
        {
          "value": 3,
          "text": "潞城"
        },
        {
          "value": 4,
          "text": "长治县"
        },
        {
          "value": 5,
          "text": "韩店镇"
        },
        {
          "value": 6,
          "text": "襄垣县"
        },
        {
          "value": 7,
          "text": "古韩镇"
        },
        {
          "value": 8,
          "text": "屯留县"
        },
        {
          "value": 9,
          "text": "麟绛镇"
        },
        {
          "value": 10,
          "text": "平顺县"
        },
        {
          "value": 11,
          "text": "青羊镇"
        },
        {
          "value": 12,
          "text": "黎城县"
        },
        {
          "value": 13,
          "text": "黎侯镇"
        },
        {
          "value": 14,
          "text": "壶关县"
        },
        {
          "value": 15,
          "text": "龙泉镇"
        },
        {
          "value": 16,
          "text": "长子县"
        },
        {
          "value": 17,
          "text": "丹朱镇"
        },
        {
          "value": 18,
          "text": "武乡县"
        },
        {
          "value": 19,
          "text": "丰州镇"
        },
        {
          "value": 20,
          "text": "沁县"
        },
        {
          "value": 21,
          "text": "定昌镇"
        },
        {
          "value": 22,
          "text": "沁源县"
        },
        {
          "value": 23,
          "text": "沁河镇"
        }
      ]
    },
    {
      "value": 21,
      "text": "晋城",
      "children": [
        {
          "value": 1,
          "text": "城区"
        },
        {
          "value": 2,
          "text": "高平"
        },
        {
          "value": 3,
          "text": "泽州县"
        },
        {
          "value": 4,
          "text": "南村镇"
        },
        {
          "value": 5,
          "text": "沁水县"
        },
        {
          "value": 6,
          "text": "龙港镇"
        },
        {
          "value": 7,
          "text": "阳城县"
        },
        {
          "value": 8,
          "text": "凤城镇"
        },
        {
          "value": 9,
          "text": "陵川县"
        },
        {
          "value": 10,
          "text": "崇文镇"
        }
      ]
    },
    {
      "value": 22,
      "text": "忻州",
      "children": [
        {
          "value": 1,
          "text": "忻府区"
        },
        {
          "value": 2,
          "text": "原平"
        },
        {
          "value": 3,
          "text": "定襄县"
        },
        {
          "value": 4,
          "text": "晋昌镇"
        },
        {
          "value": 5,
          "text": "五台县"
        },
        {
          "value": 6,
          "text": "台城镇"
        },
        {
          "value": 7,
          "text": "代县"
        },
        {
          "value": 8,
          "text": "上馆镇"
        },
        {
          "value": 9,
          "text": "繁峙县"
        },
        {
          "value": 10,
          "text": "繁城镇"
        },
        {
          "value": 11,
          "text": "宁武县"
        },
        {
          "value": 12,
          "text": "凤凰镇"
        },
        {
          "value": 13,
          "text": "静乐县"
        },
        {
          "value": 14,
          "text": "鹅城镇"
        },
        {
          "value": 15,
          "text": "神池县"
        },
        {
          "value": 16,
          "text": "龙泉镇"
        },
        {
          "value": 17,
          "text": "五寨县"
        },
        {
          "value": 18,
          "text": "砚城镇"
        },
        {
          "value": 19,
          "text": "岢岚县"
        },
        {
          "value": 20,
          "text": "岚漪镇"
        },
        {
          "value": 21,
          "text": "河曲县"
        },
        {
          "value": 22,
          "text": "文笔镇"
        },
        {
          "value": 23,
          "text": "保德县"
        },
        {
          "value": 24,
          "text": "东关镇"
        },
        {
          "value": 25,
          "text": "偏关县"
        },
        {
          "value": 26,
          "text": "新关镇"
        }
      ]
    },
    {
      "value": 23,
      "text": "晋中",
      "children": [
        {
          "value": 1,
          "text": "榆次区"
        },
        {
          "value": 2,
          "text": "介休"
        },
        {
          "value": 3,
          "text": "榆社县"
        },
        {
          "value": 4,
          "text": "箕城镇"
        },
        {
          "value": 5,
          "text": "左权县"
        },
        {
          "value": 6,
          "text": "辽阳镇"
        },
        {
          "value": 7,
          "text": "和顺县"
        },
        {
          "value": 8,
          "text": "义兴镇"
        },
        {
          "value": 9,
          "text": "昔阳县"
        },
        {
          "value": 10,
          "text": "乐平镇"
        },
        {
          "value": 11,
          "text": "寿阳县"
        },
        {
          "value": 12,
          "text": "朝阳镇"
        },
        {
          "value": 13,
          "text": "太谷县"
        },
        {
          "value": 14,
          "text": "明星镇"
        },
        {
          "value": 15,
          "text": "祁县"
        },
        {
          "value": 16,
          "text": "昭余镇"
        },
        {
          "value": 17,
          "text": "平遥县"
        },
        {
          "value": 18,
          "text": "古陶镇"
        },
        {
          "value": 19,
          "text": "灵石县"
        },
        {
          "value": 20,
          "text": "翠峰镇"
        }
      ]
    },
    {
      "value": 24,
      "text": "临汾",
      "children": [
        {
          "value": 1,
          "text": "尧都区"
        },
        {
          "value": 2,
          "text": "侯马"
        },
        {
          "value": 3,
          "text": "霍州"
        },
        {
          "value": 4,
          "text": "曲沃县"
        },
        {
          "value": 5,
          "text": "乐昌镇"
        },
        {
          "value": 6,
          "text": "翼城县"
        },
        {
          "value": 7,
          "text": "唐兴镇"
        },
        {
          "value": 8,
          "text": "襄汾县"
        },
        {
          "value": 9,
          "text": "新城镇"
        },
        {
          "value": 10,
          "text": "洪洞县"
        },
        {
          "value": 11,
          "text": "大槐树镇"
        },
        {
          "value": 12,
          "text": "古县"
        },
        {
          "value": 13,
          "text": "岳阳镇"
        },
        {
          "value": 14,
          "text": "安泽县"
        },
        {
          "value": 15,
          "text": "府城镇"
        },
        {
          "value": 16,
          "text": "浮山县"
        },
        {
          "value": 17,
          "text": "天坛镇"
        },
        {
          "value": 18,
          "text": "吉县"
        },
        {
          "value": 19,
          "text": "吉昌镇"
        },
        {
          "value": 20,
          "text": "乡宁县"
        },
        {
          "value": 21,
          "text": "昌宁镇"
        },
        {
          "value": 22,
          "text": "蒲县"
        },
        {
          "value": 23,
          "text": "蒲城镇"
        },
        {
          "value": 24,
          "text": "大宁县"
        },
        {
          "value": 25,
          "text": "昕水镇"
        },
        {
          "value": 26,
          "text": "永和县"
        },
        {
          "value": 27,
          "text": "芝河镇"
        },
        {
          "value": 28,
          "text": "隰县"
        },
        {
          "value": 29,
          "text": "龙泉镇"
        },
        {
          "value": 30,
          "text": "汾西县"
        },
        {
          "value": 31,
          "text": "永安镇"
        }
      ]
    },
    {
      "value": 25,
      "text": "吕梁",
      "children": [
        {
          "value": 1,
          "text": "离石区"
        },
        {
          "value": 2,
          "text": "孝义"
        },
        {
          "value": 3,
          "text": "汾阳"
        },
        {
          "value": 4,
          "text": "文水县"
        },
        {
          "value": 5,
          "text": "凤城镇"
        },
        {
          "value": 6,
          "text": "中阳县"
        },
        {
          "value": 7,
          "text": "宁乡镇"
        },
        {
          "value": 8,
          "text": "兴县"
        },
        {
          "value": 9,
          "text": "蔚汾镇"
        },
        {
          "value": 10,
          "text": "临县"
        },
        {
          "value": 11,
          "text": "临泉镇"
        },
        {
          "value": 12,
          "text": "方山县"
        },
        {
          "value": 13,
          "text": "圪洞镇"
        },
        {
          "value": 14,
          "text": "柳林县"
        },
        {
          "value": 15,
          "text": "柳林镇"
        },
        {
          "value": 16,
          "text": "岚县"
        },
        {
          "value": 17,
          "text": "东村镇"
        },
        {
          "value": 18,
          "text": "交口县"
        },
        {
          "value": 19,
          "text": "水头镇"
        },
        {
          "value": 20,
          "text": "交城县"
        },
        {
          "value": 21,
          "text": "天宁镇"
        },
        {
          "value": 22,
          "text": "石楼县"
        },
        {
          "value": 23,
          "text": "灵泉镇"
        }
      ]
    },
    {
      "value": 26,
      "text": "运城",
      "children": [
        {
          "value": 1,
          "text": "盐湖区"
        },
        {
          "value": 2,
          "text": "永济"
        },
        {
          "value": 3,
          "text": "河津"
        },
        {
          "value": 4,
          "text": "芮城县"
        },
        {
          "value": 5,
          "text": "古魏镇"
        },
        {
          "value": 6,
          "text": "临猗县"
        },
        {
          "value": 7,
          "text": "猗氏镇"
        },
        {
          "value": 8,
          "text": "万荣县"
        },
        {
          "value": 9,
          "text": "解店镇"
        },
        {
          "value": 10,
          "text": "新绛县"
        },
        {
          "value": 11,
          "text": "龙兴镇"
        },
        {
          "value": 12,
          "text": "稷山县"
        },
        {
          "value": 13,
          "text": "稷峰镇"
        },
        {
          "value": 14,
          "text": "闻喜县"
        },
        {
          "value": 15,
          "text": "桐城镇"
        },
        {
          "value": 16,
          "text": "夏县"
        },
        {
          "value": 17,
          "text": "瑶峰镇"
        },
        {
          "value": 18,
          "text": "绛县"
        },
        {
          "value": 19,
          "text": "古绛镇"
        },
        {
          "value": 20,
          "text": "平陆县"
        },
        {
          "value": 21,
          "text": "圣人涧镇"
        },
        {
          "value": 22,
          "text": "垣曲县"
        },
        {
          "value": 23,
          "text": "新城镇"
        }
      ]
    },
    {
      "value": 27,
      "text": "呼和浩特",
      "children": [
        {
          "value": 1,
          "text": "回民区"
        },
        {
          "value": 2,
          "text": "新城区"
        },
        {
          "value": 3,
          "text": "玉泉区"
        },
        {
          "value": 4,
          "text": "赛罕区"
        },
        {
          "value": 5,
          "text": "托克托县"
        },
        {
          "value": 6,
          "text": "双河镇"
        },
        {
          "value": 7,
          "text": "武川县"
        },
        {
          "value": 8,
          "text": "可可以力更镇"
        },
        {
          "value": 9,
          "text": "和林格尔县"
        },
        {
          "value": 10,
          "text": "城关镇"
        },
        {
          "value": 11,
          "text": "清水河县"
        },
        {
          "value": 12,
          "text": "城关镇"
        },
        {
          "value": 13,
          "text": "土默特左旗"
        },
        {
          "value": 14,
          "text": "察素齐镇"
        }
      ]
    },
    {
      "value": 28,
      "text": "包头",
      "children": [
        {
          "value": 1,
          "text": "昆都仑区"
        },
        {
          "value": 2,
          "text": "东河区"
        },
        {
          "value": 3,
          "text": "青山区"
        },
        {
          "value": 4,
          "text": "石拐区"
        },
        {
          "value": 5,
          "text": "白云矿区"
        },
        {
          "value": 6,
          "text": "九原区"
        },
        {
          "value": 7,
          "text": "固阳县"
        },
        {
          "value": 8,
          "text": "金山镇"
        },
        {
          "value": 9,
          "text": "土默特右旗"
        },
        {
          "value": 10,
          "text": "萨拉齐镇"
        },
        {
          "value": 11,
          "text": "达尔罕茂明安联合旗"
        },
        {
          "value": 12,
          "text": "百灵庙镇"
        }
      ]
    },
    {
      "value": 29,
      "text": "乌海",
      "children": [
        {
          "value": 1,
          "text": "海勃湾区"
        },
        {
          "value": 2,
          "text": "海南区"
        },
        {
          "value": 3,
          "text": "乌达区"
        }
      ]
    },
    {
      "value": 30,
      "text": "赤峰",
      "children": [
        {
          "value": 1,
          "text": "红山区"
        },
        {
          "value": 2,
          "text": "元宝山区"
        },
        {
          "value": 3,
          "text": "松山区"
        },
        {
          "value": 4,
          "text": "宁城县"
        },
        {
          "value": 5,
          "text": "天义镇"
        },
        {
          "value": 6,
          "text": "林西县"
        },
        {
          "value": 7,
          "text": "林西镇"
        },
        {
          "value": 8,
          "text": "阿鲁科尔沁旗"
        },
        {
          "value": 9,
          "text": "天山镇"
        },
        {
          "value": 10,
          "text": "巴林左旗"
        },
        {
          "value": 11,
          "text": "林东镇"
        },
        {
          "value": 12,
          "text": "巴林右旗"
        },
        {
          "value": 13,
          "text": "大板镇"
        },
        {
          "value": 14,
          "text": "克什克腾旗"
        },
        {
          "value": 15,
          "text": "经棚镇"
        },
        {
          "value": 16,
          "text": "翁牛特旗"
        },
        {
          "value": 17,
          "text": "乌丹镇"
        },
        {
          "value": 18,
          "text": "喀喇沁旗"
        },
        {
          "value": 19,
          "text": "锦山镇"
        },
        {
          "value": 20,
          "text": "敖汉旗"
        },
        {
          "value": 21,
          "text": "新惠镇"
        }
      ]
    },
    {
      "value": 31,
      "text": "通辽",
      "children": [
        {
          "value": 1,
          "text": "科尔沁区"
        },
        {
          "value": 2,
          "text": "霍林郭勒"
        },
        {
          "value": 3,
          "text": "开鲁县"
        },
        {
          "value": 4,
          "text": "开鲁镇"
        },
        {
          "value": 5,
          "text": "库伦旗"
        },
        {
          "value": 6,
          "text": "库伦镇"
        },
        {
          "value": 7,
          "text": "奈曼旗"
        },
        {
          "value": 8,
          "text": "大沁他拉镇"
        },
        {
          "value": 9,
          "text": "扎鲁特旗"
        },
        {
          "value": 10,
          "text": "鲁北镇"
        },
        {
          "value": 11,
          "text": "科尔沁左翼中旗"
        },
        {
          "value": 12,
          "text": "保康镇"
        },
        {
          "value": 13,
          "text": "科尔沁左翼后旗"
        },
        {
          "value": 14,
          "text": "甘旗卡镇"
        }
      ]
    },
    {
      "value": 32,
      "text": "呼伦贝尔",
      "children": [
        {
          "value": 1,
          "text": "海拉尔区"
        },
        {
          "value": 2,
          "text": "满洲里"
        },
        {
          "value": 3,
          "text": "扎兰屯"
        },
        {
          "value": 4,
          "text": "牙克石"
        },
        {
          "value": 5,
          "text": "根河"
        },
        {
          "value": 6,
          "text": "额尔古纳"
        },
        {
          "value": 7,
          "text": "阿荣旗"
        },
        {
          "value": 8,
          "text": "那吉镇"
        },
        {
          "value": 9,
          "text": "新巴尔虎右旗"
        },
        {
          "value": 10,
          "text": "阿拉坦额莫勒镇"
        },
        {
          "value": 11,
          "text": "新巴尔虎左旗"
        },
        {
          "value": 12,
          "text": "阿穆古郎镇"
        },
        {
          "value": 13,
          "text": "陈巴尔虎旗"
        },
        {
          "value": 14,
          "text": "巴彦库仁镇"
        },
        {
          "value": 15,
          "text": "鄂伦春自治旗"
        },
        {
          "value": 16,
          "text": "阿里河镇"
        },
        {
          "value": 17,
          "text": "鄂温克族自治旗"
        },
        {
          "value": 18,
          "text": "巴彦托海镇"
        },
        {
          "value": 19,
          "text": "莫力达瓦达斡尔族自治旗"
        },
        {
          "value": 20,
          "text": "尼尔基镇"
        }
      ]
    },
    {
      "value": 33,
      "text": "鄂尔多斯",
      "children": [
        {
          "value": 1,
          "text": "东胜区"
        },
        {
          "value": 2,
          "text": "达拉特旗"
        },
        {
          "value": 3,
          "text": "树林召镇"
        },
        {
          "value": 4,
          "text": "准格尔旗"
        },
        {
          "value": 5,
          "text": "薛家湾镇"
        },
        {
          "value": 6,
          "text": "鄂托克前旗"
        },
        {
          "value": 7,
          "text": "敖勒召其镇"
        },
        {
          "value": 8,
          "text": "鄂托克旗"
        },
        {
          "value": 9,
          "text": "乌兰镇"
        },
        {
          "value": 10,
          "text": "杭锦旗"
        },
        {
          "value": 11,
          "text": "锡尼镇"
        },
        {
          "value": 12,
          "text": "乌审旗"
        },
        {
          "value": 13,
          "text": "嘎鲁图镇"
        },
        {
          "value": 14,
          "text": "伊金霍洛旗"
        },
        {
          "value": 15,
          "text": "阿勒腾席热镇"
        }
      ]
    },
    {
      "value": 34,
      "text": "乌兰察布",
      "children": [
        {
          "value": 1,
          "text": "集宁区"
        },
        {
          "value": 2,
          "text": "丰镇"
        },
        {
          "value": 3,
          "text": "卓资县"
        },
        {
          "value": 4,
          "text": "卓资山镇"
        },
        {
          "value": 5,
          "text": "化德县"
        },
        {
          "value": 6,
          "text": "长顺镇"
        },
        {
          "value": 7,
          "text": "商都县"
        },
        {
          "value": 8,
          "text": "商都镇"
        },
        {
          "value": 9,
          "text": "兴和县"
        },
        {
          "value": 10,
          "text": "城关镇"
        },
        {
          "value": 11,
          "text": "凉城县"
        },
        {
          "value": 12,
          "text": "岱海镇"
        },
        {
          "value": 13,
          "text": "察哈尔右翼前旗"
        },
        {
          "value": 14,
          "text": "土贵乌拉镇"
        },
        {
          "value": 15,
          "text": "察哈尔右翼中旗"
        },
        {
          "value": 16,
          "text": "科布尔镇"
        },
        {
          "value": 17,
          "text": "察哈尔右翼后旗"
        },
        {
          "value": 18,
          "text": "白音察干镇"
        },
        {
          "value": 19,
          "text": "四子王旗"
        },
        {
          "value": 20,
          "text": "乌兰花镇"
        }
      ]
    },
    {
      "value": 35,
      "text": "巴彦淖尔",
      "children": [
        {
          "value": 1,
          "text": "临河区"
        },
        {
          "value": 2,
          "text": "五原县"
        },
        {
          "value": 3,
          "text": "隆兴昌镇"
        },
        {
          "value": 4,
          "text": "磴口县"
        },
        {
          "value": 5,
          "text": "巴彦高勒镇"
        },
        {
          "value": 6,
          "text": "乌拉特前旗"
        },
        {
          "value": 7,
          "text": "乌拉山镇"
        },
        {
          "value": 8,
          "text": "乌拉特中旗"
        },
        {
          "value": 9,
          "text": "海流图镇"
        },
        {
          "value": 10,
          "text": "乌拉特后旗"
        },
        {
          "value": 11,
          "text": "巴音宝力格镇"
        },
        {
          "value": 12,
          "text": "杭锦后旗"
        },
        {
          "value": 13,
          "text": "陕坝镇"
        }
      ]
    },
    {
      "value": 36,
      "text": "兴安盟",
      "children": [
        {
          "value": 1,
          "text": "乌兰浩特"
        },
        {
          "value": 2,
          "text": "阿尔山"
        },
        {
          "value": 3,
          "text": "突泉县"
        },
        {
          "value": 4,
          "text": "突泉镇"
        },
        {
          "value": 5,
          "text": "科尔沁右翼前旗"
        },
        {
          "value": 6,
          "text": "大坝沟镇"
        },
        {
          "value": 7,
          "text": "科尔沁右翼中旗"
        },
        {
          "value": 8,
          "text": "巴彦呼硕镇"
        },
        {
          "value": 9,
          "text": "扎赉特旗"
        },
        {
          "value": 10,
          "text": "音德尔镇"
        }
      ]
    },
    {
      "value": 37,
      "text": "锡林郭勒盟",
      "children": [
        {
          "value": 1,
          "text": "锡林浩特"
        },
        {
          "value": 2,
          "text": "二连浩特"
        },
        {
          "value": 3,
          "text": "多伦县"
        },
        {
          "value": 4,
          "text": "多伦淖尔镇"
        },
        {
          "value": 5,
          "text": "阿巴嘎旗"
        },
        {
          "value": 6,
          "text": "别力古台镇"
        },
        {
          "value": 7,
          "text": "苏尼特左旗"
        },
        {
          "value": 8,
          "text": "满都拉图镇"
        },
        {
          "value": 9,
          "text": "苏尼特右旗"
        },
        {
          "value": 10,
          "text": "赛汉塔拉镇"
        },
        {
          "value": 11,
          "text": "东乌珠穆沁旗"
        },
        {
          "value": 12,
          "text": "乌里雅斯太镇"
        },
        {
          "value": 13,
          "text": "西乌珠穆沁旗"
        },
        {
          "value": 14,
          "text": "巴拉嘎尔郭勒镇"
        },
        {
          "value": 15,
          "text": "太仆寺旗"
        },
        {
          "value": 16,
          "text": "宝昌镇"
        },
        {
          "value": 17,
          "text": "镶黄旗"
        },
        {
          "value": 18,
          "text": "新宝拉格镇"
        },
        {
          "value": 19,
          "text": "正镶白旗"
        },
        {
          "value": 20,
          "text": "明安图镇"
        },
        {
          "value": 21,
          "text": "正蓝旗"
        },
        {
          "value": 22,
          "text": "上都镇"
        }
      ]
    },
    {
      "value": 38,
      "text": "阿拉善盟",
      "children": [
        {
          "value": 1,
          "text": "巴彦浩特镇"
        },
        {
          "value": 2,
          "text": "阿拉善右旗"
        },
        {
          "value": 3,
          "text": "额肯呼都格镇"
        },
        {
          "value": 4,
          "text": "额济纳旗"
        },
        {
          "value": 5,
          "text": "达来呼布镇"
        }
      ]
    },
    {
      "value": 39,
      "text": "沈阳",
      "children": [
        {
          "value": 1,
          "text": "沈河区"
        },
        {
          "value": 2,
          "text": "和平区"
        },
        {
          "value": 3,
          "text": "大东区"
        },
        {
          "value": 4,
          "text": "皇姑区"
        },
        {
          "value": 5,
          "text": "铁西区"
        },
        {
          "value": 6,
          "text": "苏家屯区"
        },
        {
          "value": 7,
          "text": "东陵区"
        },
        {
          "value": 8,
          "text": "新城子区"
        },
        {
          "value": 9,
          "text": "于洪区"
        },
        {
          "value": 10,
          "text": "新民"
        },
        {
          "value": 11,
          "text": "辽中县"
        },
        {
          "value": 12,
          "text": "辽中镇"
        },
        {
          "value": 13,
          "text": "康平县"
        },
        {
          "value": 14,
          "text": "康平镇"
        },
        {
          "value": 15,
          "text": "法库县"
        },
        {
          "value": 16,
          "text": "法库镇"
        }
      ]
    },
    {
      "value": 40,
      "text": "朝阳",
      "children": [
        {
          "value": 1,
          "text": "双塔区"
        },
        {
          "value": 2,
          "text": "龙城区"
        },
        {
          "value": 3,
          "text": "北票"
        },
        {
          "value": 4,
          "text": "凌源"
        },
        {
          "value": 5,
          "text": "朝阳县"
        },
        {
          "value": 6,
          "text": "朝阳双塔区"
        },
        {
          "value": 7,
          "text": "建平县"
        },
        {
          "value": 8,
          "text": "喀喇沁左翼蒙古族自治县"
        },
        {
          "value": 9,
          "text": "大城子镇"
        }
      ]
    },
    {
      "value": 41,
      "text": "阜新",
      "children": [
        {
          "value": 1,
          "text": "海州区"
        },
        {
          "value": 2,
          "text": "新邱区"
        },
        {
          "value": 3,
          "text": "太平区"
        },
        {
          "value": 4,
          "text": "清河门区"
        },
        {
          "value": 5,
          "text": "细河区"
        },
        {
          "value": 6,
          "text": "彰武县"
        },
        {
          "value": 7,
          "text": "彰武镇"
        },
        {
          "value": 8,
          "text": "阜新蒙古族自治县"
        },
        {
          "value": 9,
          "text": "阜新镇"
        }
      ]
    },
    {
      "value": 42,
      "text": "铁岭",
      "children": [
        {
          "value": 1,
          "text": "银州区"
        },
        {
          "value": 2,
          "text": "清河区"
        },
        {
          "value": 3,
          "text": "调兵山"
        },
        {
          "value": 4,
          "text": "开原"
        },
        {
          "value": 5,
          "text": "铁岭县"
        },
        {
          "value": 6,
          "text": "铁岭银州区"
        },
        {
          "value": 7,
          "text": "西丰县"
        },
        {
          "value": 8,
          "text": "西丰镇"
        },
        {
          "value": 9,
          "text": "昌图县"
        },
        {
          "value": 10,
          "text": "昌图镇"
        }
      ]
    },
    {
      "value": 43,
      "text": "抚顺",
      "children": [
        {
          "value": 1,
          "text": "顺城区"
        },
        {
          "value": 2,
          "text": "新抚区"
        },
        {
          "value": 3,
          "text": "东洲区"
        },
        {
          "value": 4,
          "text": "望花区"
        },
        {
          "value": 5,
          "text": "抚顺县"
        },
        {
          "value": 6,
          "text": "抚顺顺城区"
        },
        {
          "value": 7,
          "text": "新宾满族自治县"
        },
        {
          "value": 8,
          "text": "新宾镇"
        },
        {
          "value": 9,
          "text": "清原满族自治县"
        },
        {
          "value": 10,
          "text": "清原镇"
        }
      ]
    },
    {
      "value": 44,
      "text": "本溪",
      "children": [
        {
          "value": 1,
          "text": "平山区"
        },
        {
          "value": 2,
          "text": "溪湖区"
        },
        {
          "value": 3,
          "text": "明山区"
        },
        {
          "value": 4,
          "text": "南芬区"
        },
        {
          "value": 5,
          "text": "本溪满族自治县"
        },
        {
          "value": 6,
          "text": "小镇"
        },
        {
          "value": 7,
          "text": "桓仁满族自治县"
        },
        {
          "value": 8,
          "text": "桓仁镇"
        }
      ]
    },
    {
      "value": 45,
      "text": "辽阳",
      "children": [
        {
          "value": 1,
          "text": "白塔区"
        },
        {
          "value": 2,
          "text": "文圣区"
        },
        {
          "value": 3,
          "text": "宏伟区"
        },
        {
          "value": 4,
          "text": "弓长岭区"
        },
        {
          "value": 5,
          "text": "太子河区"
        },
        {
          "value": 6,
          "text": "灯塔"
        },
        {
          "value": 7,
          "text": "辽阳县"
        },
        {
          "value": 8,
          "text": "首山镇"
        }
      ]
    },
    {
      "value": 46,
      "text": "鞍山",
      "children": [
        {
          "value": 1,
          "text": "铁东区"
        },
        {
          "value": 2,
          "text": "铁西区"
        },
        {
          "value": 3,
          "text": "立山区"
        },
        {
          "value": 4,
          "text": "千山区"
        },
        {
          "value": 5,
          "text": "海城"
        },
        {
          "value": 6,
          "text": "台安县"
        },
        {
          "value": 7,
          "text": "台安镇"
        },
        {
          "value": 8,
          "text": "岫岩满族自治县"
        },
        {
          "value": 9,
          "text": "岫岩镇"
        }
      ]
    },
    {
      "value": 47,
      "text": "丹东",
      "children": [
        {
          "value": 1,
          "text": "振兴区"
        },
        {
          "value": 2,
          "text": "元宝区"
        },
        {
          "value": 3,
          "text": "振安区"
        },
        {
          "value": 4,
          "text": "凤城"
        },
        {
          "value": 5,
          "text": "东港"
        },
        {
          "value": 6,
          "text": "宽甸满族自治县"
        },
        {
          "value": 7,
          "text": "宽甸镇"
        }
      ]
    },
    {
      "value": 48,
      "text": "大连",
      "children": [
        {
          "value": 1,
          "text": "西岗区"
        },
        {
          "value": 2,
          "text": "中山区"
        },
        {
          "value": 3,
          "text": "沙河口区"
        },
        {
          "value": 4,
          "text": "甘井子区"
        },
        {
          "value": 5,
          "text": "旅顺口区"
        },
        {
          "value": 6,
          "text": "金州区"
        },
        {
          "value": 7,
          "text": "瓦房店"
        },
        {
          "value": 8,
          "text": "普兰店"
        },
        {
          "value": 9,
          "text": "庄河"
        },
        {
          "value": 10,
          "text": "长海县"
        },
        {
          "value": 11,
          "text": "大长山岛镇"
        }
      ]
    },
    {
      "value": 49,
      "text": "营口",
      "children": [
        {
          "value": 1,
          "text": "站前区"
        },
        {
          "value": 2,
          "text": "西区"
        },
        {
          "value": 3,
          "text": "鲅鱼圈区"
        },
        {
          "value": 4,
          "text": "老边区"
        },
        {
          "value": 5,
          "text": "大石桥"
        },
        {
          "value": 6,
          "text": "盖州"
        }
      ]
    },
    {
      "value": 50,
      "text": "盘锦",
      "children": [
        {
          "value": 1,
          "text": "兴隆台区"
        },
        {
          "value": 2,
          "text": "双台子区"
        },
        {
          "value": 3,
          "text": "大洼县"
        },
        {
          "value": 4,
          "text": "大洼镇"
        },
        {
          "value": 5,
          "text": "盘山县"
        },
        {
          "value": 6,
          "text": "盘锦双台子区"
        }
      ]
    },
    {
      "value": 51,
      "text": "锦州",
      "children": [
        {
          "value": 1,
          "text": "太和区"
        },
        {
          "value": 2,
          "text": "古塔区"
        },
        {
          "value": 3,
          "text": "凌河区"
        },
        {
          "value": 4,
          "text": "凌海"
        },
        {
          "value": 5,
          "text": "北宁"
        },
        {
          "value": 6,
          "text": "黑山县"
        },
        {
          "value": 7,
          "text": "黑山镇"
        },
        {
          "value": 8,
          "text": "义县"
        },
        {
          "value": 9,
          "text": "义州镇"
        }
      ]
    },
    {
      "value": 52,
      "text": "葫芦岛",
      "children": [
        {
          "value": 1,
          "text": "龙港区"
        },
        {
          "value": 2,
          "text": "连山区"
        },
        {
          "value": 3,
          "text": "南票区"
        },
        {
          "value": 4,
          "text": "兴城"
        },
        {
          "value": 5,
          "text": "绥中县"
        },
        {
          "value": 6,
          "text": "绥中镇"
        },
        {
          "value": 7,
          "text": "建昌县"
        },
        {
          "value": 8,
          "text": "建昌镇"
        }
      ]
    },
    {
      "value": 53,
      "text": "长春",
      "children": [
        {
          "value": 1,
          "text": "朝阳区"
        },
        {
          "value": 2,
          "text": "南关区"
        },
        {
          "value": 3,
          "text": "宽城区"
        },
        {
          "value": 4,
          "text": "二道区"
        },
        {
          "value": 5,
          "text": "绿园区"
        },
        {
          "value": 6,
          "text": "双阳区"
        },
        {
          "value": 7,
          "text": "德惠"
        },
        {
          "value": 8,
          "text": "九台"
        },
        {
          "value": 9,
          "text": "榆树"
        },
        {
          "value": 10,
          "text": "农安县"
        },
        {
          "value": 11,
          "text": "农安镇"
        }
      ]
    },
    {
      "value": 54,
      "text": "白城",
      "children": [
        {
          "value": 1,
          "text": "洮北区"
        },
        {
          "value": 2,
          "text": "大安"
        },
        {
          "value": 3,
          "text": "洮南"
        },
        {
          "value": 4,
          "text": "镇赉县"
        },
        {
          "value": 5,
          "text": "镇赉镇"
        },
        {
          "value": 6,
          "text": "通榆县"
        },
        {
          "value": 7,
          "text": "开通镇"
        }
      ]
    },
    {
      "value": 55,
      "text": "松原",
      "children": [
        {
          "value": 1,
          "text": "宁江区"
        },
        {
          "value": 2,
          "text": "扶余县"
        },
        {
          "value": 3,
          "text": "三岔河镇"
        },
        {
          "value": 4,
          "text": "长岭县"
        },
        {
          "value": 5,
          "text": "长岭镇"
        },
        {
          "value": 6,
          "text": "乾安县"
        },
        {
          "value": 7,
          "text": "乾安镇"
        },
        {
          "value": 8,
          "text": "前郭尔罗斯蒙古族自治县"
        },
        {
          "value": 9,
          "text": "前郭镇"
        }
      ]
    },
    {
      "value": 56,
      "text": "吉林",
      "children": [
        {
          "value": 1,
          "text": "船营区"
        },
        {
          "value": 2,
          "text": "龙潭区"
        },
        {
          "value": 3,
          "text": "昌邑区"
        },
        {
          "value": 4,
          "text": "丰满区"
        },
        {
          "value": 5,
          "text": "磐石"
        },
        {
          "value": 6,
          "text": "蛟河"
        },
        {
          "value": 7,
          "text": "桦甸"
        },
        {
          "value": 8,
          "text": "舒兰"
        },
        {
          "value": 9,
          "text": "永吉县"
        },
        {
          "value": 10,
          "text": "口前镇"
        }
      ]
    },
    {
      "value": 57,
      "text": "四平",
      "children": [
        {
          "value": 1,
          "text": "铁西区"
        },
        {
          "value": 2,
          "text": "铁东区"
        },
        {
          "value": 3,
          "text": "双辽"
        },
        {
          "value": 4,
          "text": "公主岭"
        },
        {
          "value": 5,
          "text": "梨树县"
        },
        {
          "value": 6,
          "text": "梨树镇"
        },
        {
          "value": 7,
          "text": "伊通满族自治县"
        },
        {
          "value": 8,
          "text": "伊通镇"
        }
      ]
    },
    {
      "value": 58,
      "text": "辽源",
      "children": [
        {
          "value": 1,
          "text": "龙山区"
        },
        {
          "value": 2,
          "text": "西安区"
        },
        {
          "value": 3,
          "text": "东丰县"
        },
        {
          "value": 4,
          "text": "东丰镇"
        },
        {
          "value": 5,
          "text": "东辽县"
        },
        {
          "value": 6,
          "text": "白泉镇"
        }
      ]
    },
    {
      "value": 59,
      "text": "通化",
      "children": [
        {
          "value": 1,
          "text": "东昌区"
        },
        {
          "value": 2,
          "text": "二道江区"
        },
        {
          "value": 3,
          "text": "梅河口"
        },
        {
          "value": 4,
          "text": "集安"
        },
        {
          "value": 5,
          "text": "通化县"
        },
        {
          "value": 6,
          "text": "快大茂镇"
        },
        {
          "value": 7,
          "text": "辉南县"
        },
        {
          "value": 8,
          "text": "朝阳镇"
        },
        {
          "value": 9,
          "text": "柳河县"
        },
        {
          "value": 10,
          "text": "柳河镇"
        }
      ]
    },
    {
      "value": 60,
      "text": "白山",
      "children": [
        {
          "value": 1,
          "text": "八道江区"
        },
        {
          "value": 2,
          "text": "临江"
        },
        {
          "value": 3,
          "text": "江源县"
        },
        {
          "value": 4,
          "text": "孙家堡子镇"
        },
        {
          "value": 5,
          "text": "抚松县"
        },
        {
          "value": 6,
          "text": "抚松镇"
        },
        {
          "value": 7,
          "text": "靖宇县"
        },
        {
          "value": 8,
          "text": "靖宇镇"
        },
        {
          "value": 9,
          "text": "长白朝鲜族自治县"
        },
        {
          "value": 10,
          "text": "长白镇"
        }
      ]
    },
    {
      "value": 61,
      "text": "延边州",
      "children": [
        {
          "value": 1,
          "text": "延吉"
        },
        {
          "value": 2,
          "text": "图们"
        },
        {
          "value": 3,
          "text": "敦化"
        },
        {
          "value": 4,
          "text": "珲春"
        },
        {
          "value": 5,
          "text": "龙井"
        },
        {
          "value": 6,
          "text": "和龙"
        },
        {
          "value": 7,
          "text": "汪清县"
        },
        {
          "value": 8,
          "text": "汪清镇"
        },
        {
          "value": 9,
          "text": "安图县"
        },
        {
          "value": 10,
          "text": "明月镇"
        }
      ]
    },
    {
      "value": 62,
      "text": "哈尔滨",
      "children": [
        {
          "value": 1,
          "text": "松北区"
        },
        {
          "value": 2,
          "text": "道里区"
        },
        {
          "value": 3,
          "text": "南岗区"
        },
        {
          "value": 4,
          "text": "道外区"
        },
        {
          "value": 5,
          "text": "香坊区"
        },
        {
          "value": 6,
          "text": "动力区"
        },
        {
          "value": 7,
          "text": "平房区"
        },
        {
          "value": 8,
          "text": "呼兰区"
        },
        {
          "value": 9,
          "text": "双城"
        },
        {
          "value": 10,
          "text": "尚志"
        },
        {
          "value": 11,
          "text": "五常"
        },
        {
          "value": 12,
          "text": "阿城"
        },
        {
          "value": 13,
          "text": "依兰县"
        },
        {
          "value": 14,
          "text": "依兰镇"
        },
        {
          "value": 15,
          "text": "方正县"
        },
        {
          "value": 16,
          "text": "方正镇"
        },
        {
          "value": 17,
          "text": "宾县"
        },
        {
          "value": 18,
          "text": "宾州镇"
        },
        {
          "value": 19,
          "text": "巴彦县"
        },
        {
          "value": 20,
          "text": "巴彦镇"
        },
        {
          "value": 21,
          "text": "木兰县"
        },
        {
          "value": 22,
          "text": "木兰镇"
        },
        {
          "value": 23,
          "text": "通河县"
        },
        {
          "value": 24,
          "text": "通河镇"
        },
        {
          "value": 25,
          "text": "延寿县"
        },
        {
          "value": 26,
          "text": "延寿镇"
        }
      ]
    },
    {
      "value": 63,
      "text": "齐齐哈尔",
      "children": [
        {
          "value": 1,
          "text": "建华区"
        },
        {
          "value": 2,
          "text": "龙沙区"
        },
        {
          "value": 3,
          "text": "铁锋区"
        },
        {
          "value": 4,
          "text": "昂昂溪区"
        },
        {
          "value": 5,
          "text": "富拉尔基区"
        },
        {
          "value": 6,
          "text": "碾子山区"
        },
        {
          "value": 7,
          "text": "梅里斯达斡尔族区"
        },
        {
          "value": 8,
          "text": "讷河"
        },
        {
          "value": 9,
          "text": "龙江县"
        },
        {
          "value": 10,
          "text": "龙江镇"
        },
        {
          "value": 11,
          "text": "依安县"
        },
        {
          "value": 12,
          "text": "依安镇"
        },
        {
          "value": 13,
          "text": "泰来县"
        },
        {
          "value": 14,
          "text": "泰来镇"
        },
        {
          "value": 15,
          "text": "甘南县"
        },
        {
          "value": 16,
          "text": "甘南镇"
        },
        {
          "value": 17,
          "text": "富裕县"
        },
        {
          "value": 18,
          "text": "富裕镇"
        },
        {
          "value": 19,
          "text": "克山县"
        },
        {
          "value": 20,
          "text": "克山镇"
        },
        {
          "value": 21,
          "text": "克东县"
        },
        {
          "value": 22,
          "text": "克东镇"
        },
        {
          "value": 23,
          "text": "拜泉县"
        },
        {
          "value": 24,
          "text": "拜泉镇"
        }
      ]
    },
    {
      "value": 64,
      "text": "七台河",
      "children": [
        {
          "value": 1,
          "text": "桃山区"
        },
        {
          "value": 2,
          "text": "新兴区"
        },
        {
          "value": 3,
          "text": "茄子河区"
        },
        {
          "value": 4,
          "text": "勃利县"
        },
        {
          "value": 5,
          "text": "勃利镇"
        }
      ]
    },
    {
      "value": 65,
      "text": "黑河",
      "children": [
        {
          "value": 1,
          "text": "爱辉区"
        },
        {
          "value": 2,
          "text": "北安"
        },
        {
          "value": 3,
          "text": "五大连池"
        },
        {
          "value": 4,
          "text": "嫩江县"
        },
        {
          "value": 5,
          "text": "嫩江镇"
        },
        {
          "value": 6,
          "text": "逊克县"
        },
        {
          "value": 7,
          "text": "边疆镇"
        },
        {
          "value": 8,
          "text": "孙吴县"
        },
        {
          "value": 9,
          "text": "孙吴镇"
        }
      ]
    },
    {
      "value": 66,
      "text": "大庆",
      "children": [
        {
          "value": 1,
          "text": "萨尔图区"
        },
        {
          "value": 2,
          "text": "龙凤区"
        },
        {
          "value": 3,
          "text": "让胡路区"
        },
        {
          "value": 4,
          "text": "大同区"
        },
        {
          "value": 5,
          "text": "红岗区"
        },
        {
          "value": 6,
          "text": "肇州县"
        },
        {
          "value": 7,
          "text": "肇州镇"
        },
        {
          "value": 8,
          "text": "肇源县"
        },
        {
          "value": 9,
          "text": "肇源镇"
        },
        {
          "value": 10,
          "text": "林甸县"
        },
        {
          "value": 11,
          "text": "林甸镇"
        },
        {
          "value": 12,
          "text": "杜尔伯特蒙古族自治县"
        },
        {
          "value": 13,
          "text": "泰康镇"
        }
      ]
    },
    {
      "value": 67,
      "text": "鹤岗",
      "children": [
        {
          "value": 1,
          "text": "兴山区"
        },
        {
          "value": 2,
          "text": "向阳区"
        },
        {
          "value": 3,
          "text": "工农区"
        },
        {
          "value": 4,
          "text": "南山区"
        },
        {
          "value": 5,
          "text": "兴安区"
        },
        {
          "value": 6,
          "text": "东山区"
        },
        {
          "value": 7,
          "text": "萝北县"
        },
        {
          "value": 8,
          "text": "凤翔镇"
        },
        {
          "value": 9,
          "text": "绥滨县"
        },
        {
          "value": 10,
          "text": "绥滨镇"
        }
      ]
    },
    {
      "value": 68,
      "text": "伊春",
      "children": [
        {
          "value": 1,
          "text": "伊春区"
        },
        {
          "value": 2,
          "text": "南岔区"
        },
        {
          "value": 3,
          "text": "友好区"
        },
        {
          "value": 4,
          "text": "西林区"
        },
        {
          "value": 5,
          "text": "翠峦区"
        },
        {
          "value": 6,
          "text": "新青区"
        },
        {
          "value": 7,
          "text": "美溪区"
        },
        {
          "value": 8,
          "text": "金山屯区"
        },
        {
          "value": 9,
          "text": "五营区"
        },
        {
          "value": 10,
          "text": "乌马河区"
        },
        {
          "value": 11,
          "text": "汤旺河区"
        },
        {
          "value": 12,
          "text": "带岭区"
        },
        {
          "value": 13,
          "text": "乌伊岭区"
        },
        {
          "value": 14,
          "text": "红星区"
        },
        {
          "value": 15,
          "text": "上甘岭区"
        },
        {
          "value": 16,
          "text": "铁力"
        },
        {
          "value": 17,
          "text": "嘉荫县"
        },
        {
          "value": 18,
          "text": "朝阳镇"
        }
      ]
    },
    {
      "value": 69,
      "text": "佳木斯",
      "children": [
        {
          "value": 1,
          "text": "前进区"
        },
        {
          "value": 2,
          "text": "永红区"
        },
        {
          "value": 3,
          "text": "向阳区"
        },
        {
          "value": 4,
          "text": "东风区"
        },
        {
          "value": 5,
          "text": "郊区"
        },
        {
          "value": 6,
          "text": "同江"
        },
        {
          "value": 7,
          "text": "富锦"
        },
        {
          "value": 8,
          "text": "桦南县"
        },
        {
          "value": 9,
          "text": "桦南镇"
        },
        {
          "value": 10,
          "text": "桦川县"
        },
        {
          "value": 11,
          "text": "悦来镇"
        },
        {
          "value": 12,
          "text": "汤原县"
        },
        {
          "value": 13,
          "text": "汤原镇"
        },
        {
          "value": 14,
          "text": "抚远县"
        },
        {
          "value": 15,
          "text": "抚远镇"
        }
      ]
    },
    {
      "value": 70,
      "text": "双鸭山",
      "children": [
        {
          "value": 1,
          "text": "尖山区"
        },
        {
          "value": 2,
          "text": "岭东区"
        },
        {
          "value": 3,
          "text": "四方台区"
        },
        {
          "value": 4,
          "text": "宝山区"
        },
        {
          "value": 5,
          "text": "集贤县"
        },
        {
          "value": 6,
          "text": "福利镇"
        },
        {
          "value": 7,
          "text": "友谊县"
        },
        {
          "value": 8,
          "text": "友谊镇"
        },
        {
          "value": 9,
          "text": "宝清县"
        },
        {
          "value": 10,
          "text": "宝清镇"
        },
        {
          "value": 11,
          "text": "饶河县"
        },
        {
          "value": 12,
          "text": "饶河镇"
        }
      ]
    },
    {
      "value": 71,
      "text": "鸡西",
      "children": [
        {
          "value": 1,
          "text": "鸡冠区"
        },
        {
          "value": 2,
          "text": "恒山区"
        },
        {
          "value": 3,
          "text": "滴道区"
        },
        {
          "value": 4,
          "text": "梨树区"
        },
        {
          "value": 5,
          "text": "城子河区"
        },
        {
          "value": 6,
          "text": "麻山区"
        },
        {
          "value": 7,
          "text": "虎林"
        },
        {
          "value": 8,
          "text": "密山"
        },
        {
          "value": 9,
          "text": "鸡东县"
        },
        {
          "value": 10,
          "text": "鸡东镇"
        }
      ]
    },
    {
      "value": 72,
      "text": "牡丹江",
      "children": [
        {
          "value": 1,
          "text": "爱民区"
        },
        {
          "value": 2,
          "text": "东安区"
        },
        {
          "value": 3,
          "text": "阳明区"
        },
        {
          "value": 4,
          "text": "西安区"
        },
        {
          "value": 5,
          "text": "穆棱"
        },
        {
          "value": 6,
          "text": "绥芬河"
        },
        {
          "value": 7,
          "text": "海林"
        },
        {
          "value": 8,
          "text": "宁安"
        },
        {
          "value": 9,
          "text": "东宁县"
        },
        {
          "value": 10,
          "text": "东宁镇"
        },
        {
          "value": 11,
          "text": "林口县"
        },
        {
          "value": 12,
          "text": "林口镇"
        }
      ]
    },
    {
      "value": 73,
      "text": "绥化",
      "children": [
        {
          "value": 1,
          "text": "北林区"
        },
        {
          "value": 2,
          "text": "安达"
        },
        {
          "value": 3,
          "text": "肇东"
        },
        {
          "value": 4,
          "text": "海伦"
        },
        {
          "value": 5,
          "text": "望奎县"
        },
        {
          "value": 6,
          "text": "望奎镇"
        },
        {
          "value": 7,
          "text": "兰西县"
        },
        {
          "value": 8,
          "text": "兰西镇"
        },
        {
          "value": 9,
          "text": "青冈县"
        },
        {
          "value": 10,
          "text": "青冈镇"
        },
        {
          "value": 11,
          "text": "庆安县"
        },
        {
          "value": 12,
          "text": "庆安镇"
        },
        {
          "value": 13,
          "text": "明水县"
        },
        {
          "value": 14,
          "text": "明水镇"
        },
        {
          "value": 15,
          "text": "绥棱县"
        },
        {
          "value": 16,
          "text": "绥棱镇"
        }
      ]
    },
    {
      "value": 74,
      "text": "大兴安岭地区",
      "children": [
        {
          "value": 1,
          "text": "呼玛县"
        },
        {
          "value": 2,
          "text": "呼玛镇"
        },
        {
          "value": 3,
          "text": "塔河县"
        },
        {
          "value": 4,
          "text": "塔河镇"
        },
        {
          "value": 5,
          "text": "漠河县"
        },
        {
          "value": 6,
          "text": "西林吉镇"
        }
      ]
    },
    {
      "value": 75,
      "text": "南京",
      "children": [
        {
          "value": 1,
          "text": "玄武区"
        },
        {
          "value": 2,
          "text": "白下区"
        },
        {
          "value": 3,
          "text": "秦淮区"
        },
        {
          "value": 4,
          "text": "建邺区"
        },
        {
          "value": 5,
          "text": "鼓楼区"
        },
        {
          "value": 6,
          "text": "下关区"
        },
        {
          "value": 7,
          "text": "浦口区"
        },
        {
          "value": 8,
          "text": "六合区"
        },
        {
          "value": 9,
          "text": "栖霞区"
        },
        {
          "value": 10,
          "text": "雨花台区"
        },
        {
          "value": 11,
          "text": "江宁区"
        },
        {
          "value": 12,
          "text": "溧水县"
        },
        {
          "value": 13,
          "text": "永阳镇"
        },
        {
          "value": 14,
          "text": "高淳县"
        },
        {
          "value": 15,
          "text": "淳溪镇"
        }
      ]
    },
    {
      "value": 76,
      "text": "徐州",
      "children": [
        {
          "value": 1,
          "text": "云龙区"
        },
        {
          "value": 2,
          "text": "鼓楼区"
        },
        {
          "value": 3,
          "text": "九里区"
        },
        {
          "value": 4,
          "text": "贾汪区"
        },
        {
          "value": 5,
          "text": "泉山区"
        },
        {
          "value": 6,
          "text": "邳州"
        },
        {
          "value": 7,
          "text": "新沂"
        },
        {
          "value": 8,
          "text": "铜山县"
        },
        {
          "value": 9,
          "text": "铜山镇"
        },
        {
          "value": 10,
          "text": "睢宁县"
        },
        {
          "value": 11,
          "text": "睢城镇"
        },
        {
          "value": 12,
          "text": "沛县"
        },
        {
          "value": 13,
          "text": "沛城镇"
        },
        {
          "value": 14,
          "text": "丰县"
        },
        {
          "value": 15,
          "text": "凤城镇"
        }
      ]
    },
    {
      "value": 77,
      "text": "连云港",
      "children": [
        {
          "value": 1,
          "text": "新浦区"
        },
        {
          "value": 2,
          "text": "连云区"
        },
        {
          "value": 3,
          "text": "海州区"
        },
        {
          "value": 4,
          "text": "赣榆县"
        },
        {
          "value": 5,
          "text": "青口镇"
        },
        {
          "value": 6,
          "text": "灌云县"
        },
        {
          "value": 7,
          "text": "伊山镇"
        },
        {
          "value": 8,
          "text": "东海县"
        },
        {
          "value": 9,
          "text": "牛山镇"
        },
        {
          "value": 10,
          "text": "灌南县"
        },
        {
          "value": 11,
          "text": "新安镇"
        }
      ]
    },
    {
      "value": 78,
      "text": "宿迁",
      "children": [
        {
          "value": 1,
          "text": "宿城区"
        },
        {
          "value": 2,
          "text": "宿豫区"
        },
        {
          "value": 3,
          "text": "沭阳县"
        },
        {
          "value": 4,
          "text": "沭城镇"
        },
        {
          "value": 5,
          "text": "泗阳县"
        },
        {
          "value": 6,
          "text": "众兴镇"
        },
        {
          "value": 7,
          "text": "泗洪县"
        },
        {
          "value": 8,
          "text": "青阳镇"
        }
      ]
    },
    {
      "value": 79,
      "text": "淮安",
      "children": [
        {
          "value": 1,
          "text": "清河区"
        },
        {
          "value": 2,
          "text": "清浦区"
        },
        {
          "value": 3,
          "text": "楚州区"
        },
        {
          "value": 4,
          "text": "淮阴区"
        },
        {
          "value": 5,
          "text": "金湖县"
        },
        {
          "value": 6,
          "text": "黎城镇"
        },
        {
          "value": 7,
          "text": "盱眙县"
        },
        {
          "value": 8,
          "text": "盱城镇"
        },
        {
          "value": 9,
          "text": "洪泽县"
        },
        {
          "value": 10,
          "text": "高良涧镇"
        },
        {
          "value": 11,
          "text": "涟水县"
        },
        {
          "value": 12,
          "text": "涟城镇"
        }
      ]
    },
    {
      "value": 80,
      "text": "盐城",
      "children": [
        {
          "value": 1,
          "text": "亭湖区"
        },
        {
          "value": 2,
          "text": "盐都区"
        },
        {
          "value": 3,
          "text": "东台"
        },
        {
          "value": 4,
          "text": "大丰"
        },
        {
          "value": 5,
          "text": "射阳县"
        },
        {
          "value": 6,
          "text": "合德镇"
        },
        {
          "value": 7,
          "text": "阜宁县"
        },
        {
          "value": 8,
          "text": "阜城镇"
        },
        {
          "value": 9,
          "text": "滨海县"
        },
        {
          "value": 10,
          "text": "东坎镇"
        },
        {
          "value": 11,
          "text": "响水县"
        },
        {
          "value": 12,
          "text": "响水镇"
        },
        {
          "value": 13,
          "text": "建湖县"
        },
        {
          "value": 14,
          "text": "近湖镇"
        }
      ]
    },
    {
      "value": 81,
      "text": "扬州",
      "children": [
        {
          "value": 1,
          "text": "维扬区"
        },
        {
          "value": 2,
          "text": "广陵区"
        },
        {
          "value": 3,
          "text": "邗江区"
        },
        {
          "value": 4,
          "text": "仪征"
        },
        {
          "value": 5,
          "text": "江都"
        },
        {
          "value": 6,
          "text": "高邮"
        },
        {
          "value": 7,
          "text": "宝应县"
        },
        {
          "value": 8,
          "text": "安宜镇"
        }
      ]
    },
    {
      "value": 82,
      "text": "泰州",
      "children": [
        {
          "value": 1,
          "text": "海陵区"
        },
        {
          "value": 2,
          "text": "高港区"
        },
        {
          "value": 3,
          "text": "靖江"
        },
        {
          "value": 4,
          "text": "泰兴"
        },
        {
          "value": 5,
          "text": "姜堰"
        },
        {
          "value": 6,
          "text": "兴化"
        }
      ]
    },
    {
      "value": 83,
      "text": "南通",
      "children": [
        {
          "value": 1,
          "text": "崇川区"
        },
        {
          "value": 2,
          "text": "港闸区"
        },
        {
          "value": 3,
          "text": "海门"
        },
        {
          "value": 4,
          "text": "启东"
        },
        {
          "value": 5,
          "text": "通州"
        },
        {
          "value": 6,
          "text": "如皋"
        },
        {
          "value": 7,
          "text": "如东县"
        },
        {
          "value": 8,
          "text": "掘港镇"
        },
        {
          "value": 9,
          "text": "海安县"
        },
        {
          "value": 10,
          "text": "海安镇"
        }
      ]
    },
    {
      "value": 84,
      "text": "镇江",
      "children": [
        {
          "value": 1,
          "text": "京口区"
        },
        {
          "value": 2,
          "text": "润州区"
        },
        {
          "value": 3,
          "text": "丹徒区"
        },
        {
          "value": 4,
          "text": "扬中"
        },
        {
          "value": 5,
          "text": "丹阳"
        },
        {
          "value": 6,
          "text": "句容"
        }
      ]
    },
    {
      "value": 85,
      "text": "常州",
      "children": [
        {
          "value": 1,
          "text": "钟楼区"
        },
        {
          "value": 2,
          "text": "天宁区"
        },
        {
          "value": 3,
          "text": "戚墅堰区"
        },
        {
          "value": 4,
          "text": "新北区"
        },
        {
          "value": 5,
          "text": "武进区"
        },
        {
          "value": 6,
          "text": "金坛"
        },
        {
          "value": 7,
          "text": "溧阳"
        }
      ]
    },
    {
      "value": 86,
      "text": "无锡",
      "children": [
        {
          "value": 1,
          "text": "崇安区"
        },
        {
          "value": 2,
          "text": "南长区"
        },
        {
          "value": 3,
          "text": "北塘区"
        },
        {
          "value": 4,
          "text": "滨湖区"
        },
        {
          "value": 5,
          "text": "惠山区"
        },
        {
          "value": 6,
          "text": "锡山区"
        },
        {
          "value": 7,
          "text": "江阴"
        },
        {
          "value": 8,
          "text": "宜兴"
        }
      ]
    },
    {
      "value": 87,
      "text": "苏州",
      "children": [
        {
          "value": 1,
          "text": "金阊区"
        },
        {
          "value": 2,
          "text": "沧浪区"
        },
        {
          "value": 3,
          "text": "平江区"
        },
        {
          "value": 4,
          "text": "虎丘区"
        },
        {
          "value": 5,
          "text": "吴中区"
        },
        {
          "value": 6,
          "text": "相城区"
        },
        {
          "value": 7,
          "text": "吴江"
        },
        {
          "value": 8,
          "text": "昆山"
        },
        {
          "value": 9,
          "text": "太仓"
        },
        {
          "value": 10,
          "text": "常熟"
        },
        {
          "value": 11,
          "text": "张家港"
        }
      ]
    },
    {
      "value": 88,
      "text": "杭州",
      "children": [
        {
          "value": 1,
          "text": "拱墅区"
        },
        {
          "value": 2,
          "text": "上城区"
        },
        {
          "value": 3,
          "text": "下城区"
        },
        {
          "value": 4,
          "text": "江干区"
        },
        {
          "value": 5,
          "text": "西湖区"
        },
        {
          "value": 6,
          "text": "滨江区"
        },
        {
          "value": 7,
          "text": "余杭区"
        },
        {
          "value": 8,
          "text": "萧山区"
        },
        {
          "value": 9,
          "text": "临安"
        },
        {
          "value": 10,
          "text": "富阳"
        },
        {
          "value": 11,
          "text": "建德"
        },
        {
          "value": 12,
          "text": "桐庐县"
        },
        {
          "value": 13,
          "text": "淳安县"
        },
        {
          "value": 14,
          "text": "千岛湖镇"
        }
      ]
    },
    {
      "value": 89,
      "text": "湖州",
      "children": [
        {
          "value": 1,
          "text": "吴兴区"
        },
        {
          "value": 2,
          "text": "南浔区"
        },
        {
          "value": 3,
          "text": "长兴县"
        },
        {
          "value": 4,
          "text": "雉城镇"
        },
        {
          "value": 5,
          "text": "德清县"
        },
        {
          "value": 6,
          "text": "武康镇"
        },
        {
          "value": 7,
          "text": "安吉县"
        },
        {
          "value": 8,
          "text": "递铺镇"
        }
      ]
    },
    {
      "value": 90,
      "text": "嘉兴",
      "children": [
        {
          "value": 1,
          "text": "南湖区"
        },
        {
          "value": 2,
          "text": "秀洲区"
        },
        {
          "value": 3,
          "text": "平湖"
        },
        {
          "value": 4,
          "text": "海宁"
        },
        {
          "value": 5,
          "text": "桐乡"
        },
        {
          "value": 6,
          "text": "嘉善县"
        },
        {
          "value": 7,
          "text": "魏塘镇"
        },
        {
          "value": 8,
          "text": "海盐县"
        },
        {
          "value": 9,
          "text": "武原镇"
        }
      ]
    },
    {
      "value": 91,
      "text": "舟山",
      "children": [
        {
          "value": 1,
          "text": "定海区"
        },
        {
          "value": 2,
          "text": "普陀区"
        },
        {
          "value": 3,
          "text": "岱山县"
        },
        {
          "value": 4,
          "text": "高亭镇"
        },
        {
          "value": 5,
          "text": "嵊泗县"
        },
        {
          "value": 6,
          "text": "菜园镇"
        }
      ]
    },
    {
      "value": 92,
      "text": "宁波",
      "children": [
        {
          "value": 1,
          "text": "海曙区"
        },
        {
          "value": 2,
          "text": "江东区"
        },
        {
          "value": 3,
          "text": "江北区"
        },
        {
          "value": 4,
          "text": "北仑区"
        },
        {
          "value": 5,
          "text": "镇海区"
        },
        {
          "value": 6,
          "text": "鄞州区"
        },
        {
          "value": 7,
          "text": "慈溪"
        },
        {
          "value": 8,
          "text": "余姚"
        },
        {
          "value": 9,
          "text": "奉化"
        },
        {
          "value": 10,
          "text": "宁海县"
        },
        {
          "value": 11,
          "text": "象山县"
        }
      ]
    },
    {
      "value": 93,
      "text": "绍兴",
      "children": [
        {
          "value": 1,
          "text": "越城区"
        },
        {
          "value": 2,
          "text": "诸暨"
        },
        {
          "value": 3,
          "text": "上虞"
        },
        {
          "value": 4,
          "text": "嵊州"
        },
        {
          "value": 5,
          "text": "绍兴县"
        },
        {
          "value": 6,
          "text": "新昌县"
        },
        {
          "value": 7,
          "text": "城关镇"
        }
      ]
    },
    {
      "value": 94,
      "text": "衢州",
      "children": [
        {
          "value": 1,
          "text": "柯城区"
        },
        {
          "value": 2,
          "text": "衢江区"
        },
        {
          "value": 3,
          "text": "江山"
        },
        {
          "value": 4,
          "text": "常山县"
        },
        {
          "value": 5,
          "text": "天马镇"
        },
        {
          "value": 6,
          "text": "开化县"
        },
        {
          "value": 7,
          "text": "城关镇"
        },
        {
          "value": 8,
          "text": "龙游县"
        }
      ]
    },
    {
      "value": 95,
      "text": "金华",
      "children": [
        {
          "value": 1,
          "text": "婺城区"
        },
        {
          "value": 2,
          "text": "金东区"
        },
        {
          "value": 3,
          "text": "兰溪"
        },
        {
          "value": 4,
          "text": "永康"
        },
        {
          "value": 5,
          "text": "义乌"
        },
        {
          "value": 6,
          "text": "东阳"
        },
        {
          "value": 7,
          "text": "武义县"
        },
        {
          "value": 8,
          "text": "浦江县"
        },
        {
          "value": 9,
          "text": "磐安县"
        },
        {
          "value": 10,
          "text": "安文镇"
        }
      ]
    },
    {
      "value": 96,
      "text": "台州",
      "children": [
        {
          "value": 1,
          "text": "椒江区"
        },
        {
          "value": 2,
          "text": "黄岩区"
        },
        {
          "value": 3,
          "text": "路桥区"
        },
        {
          "value": 4,
          "text": "临海"
        },
        {
          "value": 5,
          "text": "温岭"
        },
        {
          "value": 6,
          "text": "三门县"
        },
        {
          "value": 7,
          "text": "海游镇"
        },
        {
          "value": 8,
          "text": "天台县"
        },
        {
          "value": 9,
          "text": "仙居县"
        },
        {
          "value": 10,
          "text": "玉环县"
        },
        {
          "value": 11,
          "text": "珠港镇"
        }
      ]
    },
    {
      "value": 97,
      "text": "温州",
      "children": [
        {
          "value": 1,
          "text": "鹿城区"
        },
        {
          "value": 2,
          "text": "龙湾区"
        },
        {
          "value": 3,
          "text": "瓯海区"
        },
        {
          "value": 4,
          "text": "瑞安"
        },
        {
          "value": 5,
          "text": "乐清"
        },
        {
          "value": 6,
          "text": "永嘉县"
        },
        {
          "value": 7,
          "text": "上塘镇"
        },
        {
          "value": 8,
          "text": "文成县"
        },
        {
          "value": 9,
          "text": "大峃镇"
        },
        {
          "value": 10,
          "text": "平阳县"
        },
        {
          "value": 11,
          "text": "昆阳镇"
        },
        {
          "value": 12,
          "text": "泰顺县"
        },
        {
          "value": 13,
          "text": "罗阳镇"
        },
        {
          "value": 14,
          "text": "洞头县"
        },
        {
          "value": 15,
          "text": "北岙镇"
        },
        {
          "value": 16,
          "text": "苍南县"
        },
        {
          "value": 17,
          "text": "灵溪镇"
        }
      ]
    },
    {
      "value": 98,
      "text": "丽水",
      "children": [
        {
          "value": 1,
          "text": "莲都区"
        },
        {
          "value": 2,
          "text": "龙泉"
        },
        {
          "value": 3,
          "text": "缙云县"
        },
        {
          "value": 4,
          "text": "五云镇"
        },
        {
          "value": 5,
          "text": "青田县"
        },
        {
          "value": 6,
          "text": "鹤城镇"
        },
        {
          "value": 7,
          "text": "云和县"
        },
        {
          "value": 8,
          "text": "云和镇"
        },
        {
          "value": 9,
          "text": "遂昌县"
        },
        {
          "value": 10,
          "text": "妙高镇"
        },
        {
          "value": 11,
          "text": "松阳县"
        },
        {
          "value": 12,
          "text": "西屏镇"
        },
        {
          "value": 13,
          "text": "庆元县"
        },
        {
          "value": 14,
          "text": "松源镇"
        },
        {
          "value": 15,
          "text": "景宁畲族自治县"
        },
        {
          "value": 16,
          "text": "鹤溪镇"
        }
      ]
    },
    {
      "value": 99,
      "text": "合肥",
      "children": [
        {
          "value": 1,
          "text": "庐阳区"
        },
        {
          "value": 2,
          "text": "瑶海区"
        },
        {
          "value": 3,
          "text": "蜀山区"
        },
        {
          "value": 4,
          "text": "包河区"
        },
        {
          "value": 5,
          "text": "长丰县"
        },
        {
          "value": 6,
          "text": "水湖镇"
        },
        {
          "value": 7,
          "text": "肥东县"
        },
        {
          "value": 8,
          "text": "店埠镇"
        },
        {
          "value": 9,
          "text": "肥西县"
        },
        {
          "value": 10,
          "text": "上派镇"
        }
      ]
    },
    {
      "value": 100,
      "text": "宿州",
      "children": [
        {
          "value": 1,
          "text": "埇桥区"
        },
        {
          "value": 2,
          "text": "砀山县"
        },
        {
          "value": 3,
          "text": "砀城镇"
        },
        {
          "value": 4,
          "text": "萧县"
        },
        {
          "value": 5,
          "text": "龙城镇"
        },
        {
          "value": 6,
          "text": "灵璧县"
        },
        {
          "value": 7,
          "text": "灵城镇"
        },
        {
          "value": 8,
          "text": "泗县"
        },
        {
          "value": 9,
          "text": "泗城镇"
        }
      ]
    },
    {
      "value": 101,
      "text": "淮北",
      "children": [
        {
          "value": 1,
          "text": "相山区"
        },
        {
          "value": 2,
          "text": "杜集区"
        },
        {
          "value": 3,
          "text": "烈山区"
        },
        {
          "value": 4,
          "text": "濉溪县"
        },
        {
          "value": 5,
          "text": "濉溪镇"
        }
      ]
    },
    {
      "value": 102,
      "text": "亳州",
      "children": [
        {
          "value": 1,
          "text": "谯城区"
        },
        {
          "value": 2,
          "text": "涡阳县"
        },
        {
          "value": 3,
          "text": "城关镇"
        },
        {
          "value": 4,
          "text": "蒙城县"
        },
        {
          "value": 5,
          "text": "城关镇"
        },
        {
          "value": 6,
          "text": "利辛县"
        },
        {
          "value": 7,
          "text": "城关镇"
        }
      ]
    },
    {
      "value": 103,
      "text": "阜阳",
      "children": [
        {
          "value": 1,
          "text": "颍州区"
        },
        {
          "value": 2,
          "text": "颍东区"
        },
        {
          "value": 3,
          "text": "颍泉区"
        },
        {
          "value": 4,
          "text": "界首"
        },
        {
          "value": 5,
          "text": "临泉县"
        },
        {
          "value": 6,
          "text": "城关镇"
        },
        {
          "value": 7,
          "text": "太和县"
        },
        {
          "value": 8,
          "text": "城关镇"
        },
        {
          "value": 9,
          "text": "阜南县"
        },
        {
          "value": 10,
          "text": "城关镇"
        },
        {
          "value": 11,
          "text": "颍上县"
        },
        {
          "value": 12,
          "text": "慎城镇"
        }
      ]
    },
    {
      "value": 104,
      "text": "蚌埠",
      "children": [
        {
          "value": 1,
          "text": "蚌山区"
        },
        {
          "value": 2,
          "text": "龙子湖区"
        },
        {
          "value": 3,
          "text": "禹会区"
        },
        {
          "value": 4,
          "text": "淮上区"
        },
        {
          "value": 5,
          "text": "怀远县"
        },
        {
          "value": 6,
          "text": "城关镇"
        },
        {
          "value": 7,
          "text": "五河县"
        },
        {
          "value": 8,
          "text": "城关镇"
        },
        {
          "value": 9,
          "text": "固镇县"
        },
        {
          "value": 10,
          "text": "城关镇"
        }
      ]
    },
    {
      "value": 105,
      "text": "淮南",
      "children": [
        {
          "value": 1,
          "text": "田家庵区"
        },
        {
          "value": 2,
          "text": "大通区"
        },
        {
          "value": 3,
          "text": "谢家集区"
        },
        {
          "value": 4,
          "text": "八公山区"
        },
        {
          "value": 5,
          "text": "潘集区"
        },
        {
          "value": 6,
          "text": "凤台县"
        },
        {
          "value": 7,
          "text": "城关镇"
        }
      ]
    },
    {
      "value": 106,
      "text": "滁州",
      "children": [
        {
          "value": 1,
          "text": "琅区"
        },
        {
          "value": 2,
          "text": "南谯区"
        },
        {
          "value": 3,
          "text": "明光"
        },
        {
          "value": 4,
          "text": "天长"
        },
        {
          "value": 5,
          "text": "来安县"
        },
        {
          "value": 6,
          "text": "新安镇"
        },
        {
          "value": 7,
          "text": "全椒县"
        },
        {
          "value": 8,
          "text": "襄河镇"
        },
        {
          "value": 9,
          "text": "定远县"
        },
        {
          "value": 10,
          "text": "定城镇"
        },
        {
          "value": 11,
          "text": "凤阳县"
        },
        {
          "value": 12,
          "text": "府城镇"
        }
      ]
    },
    {
      "value": 107,
      "text": "马鞍山",
      "children": [
        {
          "value": 1,
          "text": "雨山区"
        },
        {
          "value": 2,
          "text": "花山区"
        },
        {
          "value": 3,
          "text": "金家庄区"
        },
        {
          "value": 4,
          "text": "当涂县"
        },
        {
          "value": 5,
          "text": "姑孰镇"
        }
      ]
    },
    {
      "value": 108,
      "text": "芜湖",
      "children": [
        {
          "value": 1,
          "text": "镜湖区"
        },
        {
          "value": 2,
          "text": "弋江区"
        },
        {
          "value": 3,
          "text": "三山区"
        },
        {
          "value": 4,
          "text": "鸠江区"
        },
        {
          "value": 5,
          "text": "芜湖县"
        },
        {
          "value": 6,
          "text": "湾镇"
        },
        {
          "value": 7,
          "text": "繁昌县"
        },
        {
          "value": 8,
          "text": "繁阳镇"
        },
        {
          "value": 9,
          "text": "南陵县"
        },
        {
          "value": 10,
          "text": "籍山镇"
        }
      ]
    },
    {
      "value": 109,
      "text": "铜陵",
      "children": [
        {
          "value": 1,
          "text": "铜官山区"
        },
        {
          "value": 2,
          "text": "狮子山区"
        },
        {
          "value": 3,
          "text": "郊区"
        },
        {
          "value": 4,
          "text": "铜陵县"
        },
        {
          "value": 5,
          "text": "五松镇"
        }
      ]
    },
    {
      "value": 110,
      "text": "安庆",
      "children": [
        {
          "value": 1,
          "text": "迎江区"
        },
        {
          "value": 2,
          "text": "大观区"
        },
        {
          "value": 3,
          "text": "宜秀区"
        },
        {
          "value": 4,
          "text": "桐城"
        },
        {
          "value": 5,
          "text": "怀宁县"
        },
        {
          "value": 6,
          "text": "高河镇"
        },
        {
          "value": 7,
          "text": "枞阳县"
        },
        {
          "value": 8,
          "text": "枞阳镇"
        },
        {
          "value": 9,
          "text": "潜山县"
        },
        {
          "value": 10,
          "text": "梅城镇"
        },
        {
          "value": 11,
          "text": "太湖县"
        },
        {
          "value": 12,
          "text": "晋熙镇"
        },
        {
          "value": 13,
          "text": "宿松县"
        },
        {
          "value": 14,
          "text": "孚玉镇"
        },
        {
          "value": 15,
          "text": "望江县"
        },
        {
          "value": 16,
          "text": "雷阳镇"
        },
        {
          "value": 17,
          "text": "岳西县"
        },
        {
          "value": 18,
          "text": "天堂镇"
        }
      ]
    },
    {
      "value": 111,
      "text": "黄山",
      "children": [
        {
          "value": 1,
          "text": "屯溪区"
        },
        {
          "value": 2,
          "text": "黄山区"
        },
        {
          "value": 3,
          "text": "徽州区"
        },
        {
          "value": 4,
          "text": "歙县"
        },
        {
          "value": 5,
          "text": "徽城镇"
        },
        {
          "value": 6,
          "text": "休宁县"
        },
        {
          "value": 7,
          "text": "海阳镇"
        },
        {
          "value": 8,
          "text": "黟县"
        },
        {
          "value": 9,
          "text": "碧阳镇"
        },
        {
          "value": 10,
          "text": "祁门县"
        },
        {
          "value": 11,
          "text": "祁山镇"
        }
      ]
    },
    {
      "value": 112,
      "text": "六安",
      "children": [
        {
          "value": 1,
          "text": "金安区"
        },
        {
          "value": 2,
          "text": "裕安区"
        },
        {
          "value": 3,
          "text": "寿县"
        },
        {
          "value": 4,
          "text": "寿春镇"
        },
        {
          "value": 5,
          "text": "霍邱县"
        },
        {
          "value": 6,
          "text": "城关镇"
        },
        {
          "value": 7,
          "text": "舒城县"
        },
        {
          "value": 8,
          "text": "城关镇"
        },
        {
          "value": 9,
          "text": "金寨县"
        },
        {
          "value": 10,
          "text": "梅山镇"
        },
        {
          "value": 11,
          "text": "霍山县"
        },
        {
          "value": 12,
          "text": "衡山镇"
        }
      ]
    },
    {
      "value": 113,
      "text": "巢湖",
      "children": [
        {
          "value": 1,
          "text": "居巢区"
        },
        {
          "value": 2,
          "text": "庐江县"
        },
        {
          "value": 3,
          "text": "庐城镇"
        },
        {
          "value": 4,
          "text": "无为县"
        },
        {
          "value": 5,
          "text": "无城镇"
        },
        {
          "value": 6,
          "text": "含山县"
        },
        {
          "value": 7,
          "text": "环峰镇"
        },
        {
          "value": 8,
          "text": "和县"
        },
        {
          "value": 9,
          "text": "历阳镇"
        }
      ]
    },
    {
      "value": 114,
      "text": "池州",
      "children": [
        {
          "value": 1,
          "text": "贵池区"
        },
        {
          "value": 2,
          "text": "东至县"
        },
        {
          "value": 3,
          "text": "尧渡镇"
        },
        {
          "value": 4,
          "text": "石台县"
        },
        {
          "value": 5,
          "text": "七里镇"
        },
        {
          "value": 6,
          "text": "青阳县"
        },
        {
          "value": 7,
          "text": "蓉城镇"
        }
      ]
    },
    {
      "value": 115,
      "text": "宣城",
      "children": [
        {
          "value": 1,
          "text": "宣州区"
        },
        {
          "value": 2,
          "text": "宁国"
        },
        {
          "value": 3,
          "text": "郎溪县"
        },
        {
          "value": 4,
          "text": "建平镇"
        },
        {
          "value": 5,
          "text": "广德县"
        },
        {
          "value": 6,
          "text": "桃州镇"
        },
        {
          "value": 7,
          "text": "泾县"
        },
        {
          "value": 8,
          "text": "泾川镇"
        },
        {
          "value": 9,
          "text": "旌德县"
        },
        {
          "value": 10,
          "text": "旌阳镇"
        },
        {
          "value": 11,
          "text": "绩溪县"
        },
        {
          "value": 12,
          "text": "华阳镇"
        }
      ]
    },
    {
      "value": 116,
      "text": "福州",
      "children": [
        {
          "value": 1,
          "text": "鼓楼区"
        },
        {
          "value": 2,
          "text": "台江区"
        },
        {
          "value": 3,
          "text": "仓山区"
        },
        {
          "value": 4,
          "text": "马尾区"
        },
        {
          "value": 5,
          "text": "晋安区"
        },
        {
          "value": 6,
          "text": "福清"
        },
        {
          "value": 7,
          "text": "长乐"
        },
        {
          "value": 8,
          "text": "闽侯县"
        },
        {
          "value": 9,
          "text": "连江县"
        },
        {
          "value": 10,
          "text": "凤城镇"
        },
        {
          "value": 11,
          "text": "罗源县"
        },
        {
          "value": 12,
          "text": "凤山镇"
        },
        {
          "value": 13,
          "text": "闽清县"
        },
        {
          "value": 14,
          "text": "梅城镇"
        },
        {
          "value": 15,
          "text": "永泰县"
        },
        {
          "value": 16,
          "text": "樟城镇"
        },
        {
          "value": 17,
          "text": "平潭县"
        },
        {
          "value": 18,
          "text": "潭城镇"
        }
      ]
    },
    {
      "value": 117,
      "text": "南平",
      "children": [
        {
          "value": 1,
          "text": "延平区"
        },
        {
          "value": 2,
          "text": "邵武"
        },
        {
          "value": 3,
          "text": "武夷山"
        },
        {
          "value": 4,
          "text": "建瓯"
        },
        {
          "value": 5,
          "text": "建阳"
        },
        {
          "value": 6,
          "text": "顺昌县"
        },
        {
          "value": 7,
          "text": "浦城县"
        },
        {
          "value": 8,
          "text": "光泽县"
        },
        {
          "value": 9,
          "text": "杭川镇"
        },
        {
          "value": 10,
          "text": "松溪县"
        },
        {
          "value": 11,
          "text": "松源镇"
        },
        {
          "value": 12,
          "text": "政和县"
        },
        {
          "value": 13,
          "text": "熊山镇"
        }
      ]
    },
    {
      "value": 118,
      "text": "莆田",
      "children": [
        {
          "value": 1,
          "text": "城厢区"
        },
        {
          "value": 2,
          "text": "涵江区"
        },
        {
          "value": 3,
          "text": "荔城区"
        },
        {
          "value": 4,
          "text": "秀屿区"
        },
        {
          "value": 5,
          "text": "仙游县"
        }
      ]
    },
    {
      "value": 119,
      "text": "三明",
      "children": [
        {
          "value": 1,
          "text": "梅列区"
        },
        {
          "value": 2,
          "text": "三元区"
        },
        {
          "value": 3,
          "text": "永安"
        },
        {
          "value": 4,
          "text": "明溪县"
        },
        {
          "value": 5,
          "text": "雪峰镇"
        },
        {
          "value": 6,
          "text": "清流县"
        },
        {
          "value": 7,
          "text": "龙津镇"
        },
        {
          "value": 8,
          "text": "宁化县"
        },
        {
          "value": 9,
          "text": "翠江镇"
        },
        {
          "value": 10,
          "text": "大田县"
        },
        {
          "value": 11,
          "text": "均溪镇"
        },
        {
          "value": 12,
          "text": "尤溪县"
        },
        {
          "value": 13,
          "text": "城关镇"
        },
        {
          "value": 14,
          "text": "沙县"
        },
        {
          "value": 15,
          "text": "将乐县"
        },
        {
          "value": 16,
          "text": "古镛镇"
        },
        {
          "value": 17,
          "text": "泰宁县"
        },
        {
          "value": 18,
          "text": "杉城镇"
        },
        {
          "value": 19,
          "text": "建宁县"
        },
        {
          "value": 20,
          "text": "濉城镇"
        }
      ]
    },
    {
      "value": 120,
      "text": "泉州",
      "children": [
        {
          "value": 1,
          "text": "鲤城区"
        },
        {
          "value": 2,
          "text": "丰泽区"
        },
        {
          "value": 3,
          "text": "洛江区"
        },
        {
          "value": 4,
          "text": "泉港区"
        },
        {
          "value": 5,
          "text": "石狮"
        },
        {
          "value": 6,
          "text": "晋江"
        },
        {
          "value": 7,
          "text": "南安"
        },
        {
          "value": 8,
          "text": "惠安县"
        },
        {
          "value": 9,
          "text": "螺城镇"
        },
        {
          "value": 10,
          "text": "安溪县"
        },
        {
          "value": 11,
          "text": "凤城镇"
        },
        {
          "value": 12,
          "text": "永春县"
        },
        {
          "value": 13,
          "text": "桃城镇"
        },
        {
          "value": 14,
          "text": "德化县"
        },
        {
          "value": 15,
          "text": "浔中镇"
        },
        {
          "value": 16,
          "text": "金门县"
        },
        {
          "value": 17,
          "text": "☆"
        }
      ]
    },
    {
      "value": 121,
      "text": "厦门",
      "children": [
        {
          "value": 1,
          "text": "思明区"
        },
        {
          "value": 2,
          "text": "海沧区"
        },
        {
          "value": 3,
          "text": "湖里区"
        },
        {
          "value": 4,
          "text": "集美区"
        },
        {
          "value": 5,
          "text": "同安区"
        },
        {
          "value": 6,
          "text": "翔安区"
        }
      ]
    },
    {
      "value": 122,
      "text": "漳州",
      "children": [
        {
          "value": 1,
          "text": "芗城区"
        },
        {
          "value": 2,
          "text": "龙文区"
        },
        {
          "value": 3,
          "text": "龙海"
        },
        {
          "value": 4,
          "text": "云霄县"
        },
        {
          "value": 5,
          "text": "云陵镇"
        },
        {
          "value": 6,
          "text": "漳浦县"
        },
        {
          "value": 7,
          "text": "绥安镇"
        },
        {
          "value": 8,
          "text": "诏安县"
        },
        {
          "value": 9,
          "text": "南诏镇"
        },
        {
          "value": 10,
          "text": "长泰县"
        },
        {
          "value": 11,
          "text": "武安镇"
        },
        {
          "value": 12,
          "text": "东山县"
        },
        {
          "value": 13,
          "text": "西埔镇"
        },
        {
          "value": 14,
          "text": "南靖县"
        },
        {
          "value": 15,
          "text": "山城镇"
        },
        {
          "value": 16,
          "text": "平和县"
        },
        {
          "value": 17,
          "text": "小溪镇"
        },
        {
          "value": 18,
          "text": "华安县"
        },
        {
          "value": 19,
          "text": "华丰镇"
        }
      ]
    },
    {
      "value": 123,
      "text": "龙岩",
      "children": [
        {
          "value": 1,
          "text": "新罗区"
        },
        {
          "value": 2,
          "text": "漳平"
        },
        {
          "value": 3,
          "text": "长汀县"
        },
        {
          "value": 4,
          "text": "汀州镇"
        },
        {
          "value": 5,
          "text": "永定县"
        },
        {
          "value": 6,
          "text": "凤城镇"
        },
        {
          "value": 7,
          "text": "上杭县"
        },
        {
          "value": 8,
          "text": "临江镇"
        },
        {
          "value": 9,
          "text": "武平县"
        },
        {
          "value": 10,
          "text": "平川镇"
        },
        {
          "value": 11,
          "text": "连城县"
        },
        {
          "value": 12,
          "text": "莲峰镇"
        }
      ]
    },
    {
      "value": 124,
      "text": "宁德",
      "children": [
        {
          "value": 1,
          "text": "蕉城区"
        },
        {
          "value": 2,
          "text": "福安"
        },
        {
          "value": 3,
          "text": "福鼎"
        },
        {
          "value": 4,
          "text": "寿宁县"
        },
        {
          "value": 5,
          "text": "鳌阳镇"
        },
        {
          "value": 6,
          "text": "霞浦县"
        },
        {
          "value": 7,
          "text": "柘荣县"
        },
        {
          "value": 8,
          "text": "双城镇"
        },
        {
          "value": 9,
          "text": "屏南县"
        },
        {
          "value": 10,
          "text": "古峰镇"
        },
        {
          "value": 11,
          "text": "古田县"
        },
        {
          "value": 12,
          "text": "周宁县"
        },
        {
          "value": 13,
          "text": "狮城镇"
        }
      ]
    },
    {
      "value": 125,
      "text": "南昌",
      "children": [
        {
          "value": 1,
          "text": "东湖区"
        },
        {
          "value": 2,
          "text": "西湖区"
        },
        {
          "value": 3,
          "text": "青云谱区"
        },
        {
          "value": 4,
          "text": "湾里区"
        },
        {
          "value": 5,
          "text": "青山湖区"
        },
        {
          "value": 6,
          "text": "南昌县"
        },
        {
          "value": 7,
          "text": "莲塘镇"
        },
        {
          "value": 8,
          "text": "新建县"
        },
        {
          "value": 9,
          "text": "长堎镇"
        },
        {
          "value": 10,
          "text": "安义县"
        },
        {
          "value": 11,
          "text": "龙津镇"
        },
        {
          "value": 12,
          "text": "进贤县"
        },
        {
          "value": 13,
          "text": "民和镇"
        }
      ]
    },
    {
      "value": 126,
      "text": "九江",
      "children": [
        {
          "value": 1,
          "text": "浔阳区"
        },
        {
          "value": 2,
          "text": "庐山区"
        },
        {
          "value": 3,
          "text": "瑞昌"
        },
        {
          "value": 4,
          "text": "九江县"
        },
        {
          "value": 5,
          "text": "沙河街镇"
        },
        {
          "value": 6,
          "text": "武宁县"
        },
        {
          "value": 7,
          "text": "新宁镇"
        },
        {
          "value": 8,
          "text": "修水县"
        },
        {
          "value": 9,
          "text": "义宁镇"
        },
        {
          "value": 10,
          "text": "永修县"
        },
        {
          "value": 11,
          "text": "涂埠镇"
        },
        {
          "value": 12,
          "text": "德安县"
        },
        {
          "value": 13,
          "text": "蒲亭镇"
        },
        {
          "value": 14,
          "text": "星子县"
        },
        {
          "value": 15,
          "text": "南康镇"
        },
        {
          "value": 16,
          "text": "都昌县"
        },
        {
          "value": 17,
          "text": "都昌镇"
        },
        {
          "value": 18,
          "text": "湖口县"
        },
        {
          "value": 19,
          "text": "双钟镇"
        },
        {
          "value": 20,
          "text": "彭泽县"
        },
        {
          "value": 21,
          "text": "龙城镇"
        }
      ]
    },
    {
      "value": 127,
      "text": "景德镇",
      "children": [
        {
          "value": 1,
          "text": "珠山区"
        },
        {
          "value": 2,
          "text": "昌江区"
        },
        {
          "value": 3,
          "text": "乐平"
        },
        {
          "value": 4,
          "text": "浮梁县"
        },
        {
          "value": 5,
          "text": "浮梁镇"
        }
      ]
    },
    {
      "value": 128,
      "text": "鹰潭",
      "children": [
        {
          "value": 1,
          "text": "月湖区"
        },
        {
          "value": 2,
          "text": "贵溪"
        },
        {
          "value": 3,
          "text": "余江县"
        },
        {
          "value": 4,
          "text": "邓埠镇"
        }
      ]
    },
    {
      "value": 129,
      "text": "新余",
      "children": [
        {
          "value": 1,
          "text": "渝水区"
        },
        {
          "value": 2,
          "text": "分宜县"
        },
        {
          "value": 3,
          "text": "分宜镇"
        }
      ]
    },
    {
      "value": 130,
      "text": "萍乡",
      "children": [
        {
          "value": 1,
          "text": "安源区"
        },
        {
          "value": 2,
          "text": "湘东区"
        },
        {
          "value": 3,
          "text": "莲花县"
        },
        {
          "value": 4,
          "text": "琴亭镇"
        },
        {
          "value": 5,
          "text": "上栗县"
        },
        {
          "value": 6,
          "text": "上栗镇"
        },
        {
          "value": 7,
          "text": "芦溪县"
        },
        {
          "value": 8,
          "text": "芦溪镇"
        }
      ]
    },
    {
      "value": 131,
      "text": "赣州",
      "children": [
        {
          "value": 1,
          "text": "章贡区"
        },
        {
          "value": 2,
          "text": "瑞金"
        },
        {
          "value": 3,
          "text": "南康"
        },
        {
          "value": 4,
          "text": "赣县"
        },
        {
          "value": 5,
          "text": "梅林镇"
        },
        {
          "value": 6,
          "text": "信丰县"
        },
        {
          "value": 7,
          "text": "嘉定镇"
        },
        {
          "value": 8,
          "text": "大余县"
        },
        {
          "value": 9,
          "text": "南安镇"
        },
        {
          "value": 10,
          "text": "上犹县"
        },
        {
          "value": 11,
          "text": "东山镇"
        },
        {
          "value": 12,
          "text": "崇义县"
        },
        {
          "value": 13,
          "text": "横水镇"
        },
        {
          "value": 14,
          "text": "安远县"
        },
        {
          "value": 15,
          "text": "欣山镇"
        },
        {
          "value": 16,
          "text": "龙南县"
        },
        {
          "value": 17,
          "text": "龙南镇"
        },
        {
          "value": 18,
          "text": "定南县"
        },
        {
          "value": 19,
          "text": "历镇"
        },
        {
          "value": 20,
          "text": "全南县"
        },
        {
          "value": 21,
          "text": "城厢镇"
        },
        {
          "value": 22,
          "text": "宁都县"
        },
        {
          "value": 23,
          "text": "梅江镇"
        },
        {
          "value": 24,
          "text": "于都县"
        },
        {
          "value": 25,
          "text": "贡江镇"
        },
        {
          "value": 26,
          "text": "兴国县"
        },
        {
          "value": 27,
          "text": "潋江镇"
        },
        {
          "value": 28,
          "text": "会昌县"
        },
        {
          "value": 29,
          "text": "文武坝镇"
        },
        {
          "value": 30,
          "text": "寻乌县"
        },
        {
          "value": 31,
          "text": "长宁镇"
        },
        {
          "value": 32,
          "text": "石城县"
        },
        {
          "value": 33,
          "text": "琴江镇"
        }
      ]
    },
    {
      "value": 132,
      "text": "上饶",
      "children": [
        {
          "value": 1,
          "text": "信州区"
        },
        {
          "value": 2,
          "text": "德兴"
        },
        {
          "value": 3,
          "text": "上饶县"
        },
        {
          "value": 4,
          "text": "旭日镇"
        },
        {
          "value": 5,
          "text": "广丰县"
        },
        {
          "value": 6,
          "text": "永丰镇"
        },
        {
          "value": 7,
          "text": "玉山县"
        },
        {
          "value": 8,
          "text": "冰溪镇"
        },
        {
          "value": 9,
          "text": "铅山县"
        },
        {
          "value": 10,
          "text": "河口镇"
        },
        {
          "value": 11,
          "text": "横峰县"
        },
        {
          "value": 12,
          "text": "岑阳镇"
        },
        {
          "value": 13,
          "text": "弋阳县"
        },
        {
          "value": 14,
          "text": "弋江镇"
        },
        {
          "value": 15,
          "text": "余干县"
        },
        {
          "value": 16,
          "text": "玉亭镇"
        },
        {
          "value": 17,
          "text": "鄱阳县"
        },
        {
          "value": 18,
          "text": "鄱阳镇"
        },
        {
          "value": 19,
          "text": "万年县"
        },
        {
          "value": 20,
          "text": "陈营镇"
        },
        {
          "value": 21,
          "text": "婺源县"
        },
        {
          "value": 22,
          "text": "紫阳镇"
        }
      ]
    },
    {
      "value": 133,
      "text": "抚州",
      "children": [
        {
          "value": 1,
          "text": "临川区"
        },
        {
          "value": 2,
          "text": "南城县"
        },
        {
          "value": 3,
          "text": "建昌镇"
        },
        {
          "value": 4,
          "text": "黎川县"
        },
        {
          "value": 5,
          "text": "日峰镇"
        },
        {
          "value": 6,
          "text": "南丰县"
        },
        {
          "value": 7,
          "text": "琴城镇"
        },
        {
          "value": 8,
          "text": "崇仁县"
        },
        {
          "value": 9,
          "text": "巴山镇"
        },
        {
          "value": 10,
          "text": "乐安县"
        },
        {
          "value": 11,
          "text": "鳌溪镇"
        },
        {
          "value": 12,
          "text": "宜黄县"
        },
        {
          "value": 13,
          "text": "凤冈镇"
        },
        {
          "value": 14,
          "text": "金溪县"
        },
        {
          "value": 15,
          "text": "秀谷镇"
        },
        {
          "value": 16,
          "text": "资溪县"
        },
        {
          "value": 17,
          "text": "鹤城镇"
        },
        {
          "value": 18,
          "text": "东乡县"
        },
        {
          "value": 19,
          "text": "孝岗镇"
        },
        {
          "value": 20,
          "text": "广昌县"
        },
        {
          "value": 21,
          "text": "旴江镇"
        }
      ]
    },
    {
      "value": 134,
      "text": "宜春",
      "children": [
        {
          "value": 1,
          "text": "袁州区"
        },
        {
          "value": 2,
          "text": "丰城"
        },
        {
          "value": 3,
          "text": "樟树"
        },
        {
          "value": 4,
          "text": "高安"
        },
        {
          "value": 5,
          "text": "奉新县"
        },
        {
          "value": 6,
          "text": "冯川镇"
        },
        {
          "value": 7,
          "text": "万载县"
        },
        {
          "value": 8,
          "text": "上高县"
        },
        {
          "value": 9,
          "text": "宜丰县"
        },
        {
          "value": 10,
          "text": "新昌镇"
        },
        {
          "value": 11,
          "text": "靖安县"
        },
        {
          "value": 12,
          "text": "双溪镇"
        },
        {
          "value": 13,
          "text": "铜鼓县"
        },
        {
          "value": 14,
          "text": "永宁镇"
        }
      ]
    },
    {
      "value": 135,
      "text": "吉安",
      "children": [
        {
          "value": 1,
          "text": "吉州区"
        },
        {
          "value": 2,
          "text": "青原区"
        },
        {
          "value": 3,
          "text": "井冈山"
        },
        {
          "value": 4,
          "text": "厦坪镇"
        },
        {
          "value": 5,
          "text": "吉安县"
        },
        {
          "value": 6,
          "text": "敦厚镇"
        },
        {
          "value": 7,
          "text": "吉水县"
        },
        {
          "value": 8,
          "text": "文峰镇"
        },
        {
          "value": 9,
          "text": "峡江县"
        },
        {
          "value": 10,
          "text": "水边镇"
        },
        {
          "value": 11,
          "text": "新干县"
        },
        {
          "value": 12,
          "text": "金川镇"
        },
        {
          "value": 13,
          "text": "永丰县"
        },
        {
          "value": 14,
          "text": "恩江镇"
        },
        {
          "value": 15,
          "text": "泰和县"
        },
        {
          "value": 16,
          "text": "澄江镇"
        },
        {
          "value": 17,
          "text": "遂川县"
        },
        {
          "value": 18,
          "text": "泉江镇"
        },
        {
          "value": 19,
          "text": "万安县"
        },
        {
          "value": 20,
          "text": "芙蓉镇"
        },
        {
          "value": 21,
          "text": "安福县"
        },
        {
          "value": 22,
          "text": "平都镇"
        },
        {
          "value": 23,
          "text": "永新县"
        },
        {
          "value": 24,
          "text": "禾川镇"
        }
      ]
    },
    {
      "value": 136,
      "text": "济南",
      "children": [
        {
          "value": 1,
          "text": "中区"
        },
        {
          "value": 2,
          "text": "历下区"
        },
        {
          "value": 3,
          "text": "槐荫区"
        },
        {
          "value": 4,
          "text": "天桥区"
        },
        {
          "value": 5,
          "text": "历城区"
        },
        {
          "value": 6,
          "text": "长清区"
        },
        {
          "value": 7,
          "text": "章丘"
        },
        {
          "value": 8,
          "text": "平阴县"
        },
        {
          "value": 9,
          "text": "平阴镇"
        },
        {
          "value": 10,
          "text": "济阳县"
        },
        {
          "value": 11,
          "text": "济阳镇"
        },
        {
          "value": 12,
          "text": "商河县"
        }
      ]
    },
    {
      "value": 137,
      "text": "青岛",
      "children": [
        {
          "value": 1,
          "text": "南区"
        },
        {
          "value": 2,
          "text": "北区"
        },
        {
          "value": 3,
          "text": "四方区"
        },
        {
          "value": 4,
          "text": "黄岛区"
        },
        {
          "value": 5,
          "text": "崂山区"
        },
        {
          "value": 6,
          "text": "城阳区"
        },
        {
          "value": 7,
          "text": "李沧区"
        },
        {
          "value": 8,
          "text": "胶州"
        },
        {
          "value": 9,
          "text": "即墨"
        },
        {
          "value": 10,
          "text": "平度"
        },
        {
          "value": 11,
          "text": "胶南"
        },
        {
          "value": 12,
          "text": "莱西"
        }
      ]
    },
    {
      "value": 138,
      "text": "聊城",
      "children": [
        {
          "value": 1,
          "text": "东昌府区"
        },
        {
          "value": 2,
          "text": "临清"
        },
        {
          "value": 3,
          "text": "阳谷县"
        },
        {
          "value": 4,
          "text": "莘县"
        },
        {
          "value": 5,
          "text": "茌平县"
        },
        {
          "value": 6,
          "text": "东阿县"
        },
        {
          "value": 7,
          "text": "冠县"
        },
        {
          "value": 8,
          "text": "冠城镇"
        },
        {
          "value": 9,
          "text": "高唐县"
        }
      ]
    },
    {
      "value": 139,
      "text": "德州",
      "children": [
        {
          "value": 1,
          "text": "德城区"
        },
        {
          "value": 2,
          "text": "乐陵"
        },
        {
          "value": 3,
          "text": "禹城"
        },
        {
          "value": 4,
          "text": "陵县"
        },
        {
          "value": 5,
          "text": "陵城镇"
        },
        {
          "value": 6,
          "text": "平原县"
        },
        {
          "value": 7,
          "text": "夏津县"
        },
        {
          "value": 8,
          "text": "夏津镇"
        },
        {
          "value": 9,
          "text": "武城县"
        },
        {
          "value": 10,
          "text": "武城镇"
        },
        {
          "value": 11,
          "text": "齐河县"
        },
        {
          "value": 12,
          "text": "晏城镇"
        },
        {
          "value": 13,
          "text": "临邑县"
        },
        {
          "value": 14,
          "text": "宁津县"
        },
        {
          "value": 15,
          "text": "宁津镇"
        },
        {
          "value": 16,
          "text": "庆云县"
        },
        {
          "value": 17,
          "text": "庆云镇"
        }
      ]
    },
    {
      "value": 140,
      "text": "东营",
      "children": [
        {
          "value": 1,
          "text": "东营区"
        },
        {
          "value": 2,
          "text": "河口区"
        },
        {
          "value": 3,
          "text": "垦利县"
        },
        {
          "value": 4,
          "text": "垦利镇"
        },
        {
          "value": 5,
          "text": "利津县"
        },
        {
          "value": 6,
          "text": "利津镇"
        },
        {
          "value": 7,
          "text": "广饶县"
        },
        {
          "value": 8,
          "text": "广饶镇"
        }
      ]
    },
    {
      "value": 141,
      "text": "淄博",
      "children": [
        {
          "value": 1,
          "text": "张店区"
        },
        {
          "value": 2,
          "text": "淄川区"
        },
        {
          "value": 3,
          "text": "博山区"
        },
        {
          "value": 4,
          "text": "临淄区"
        },
        {
          "value": 5,
          "text": "周村区"
        },
        {
          "value": 6,
          "text": "桓台县"
        },
        {
          "value": 7,
          "text": "索镇"
        },
        {
          "value": 8,
          "text": "高青县"
        },
        {
          "value": 9,
          "text": "田镇"
        },
        {
          "value": 10,
          "text": "沂源县"
        },
        {
          "value": 11,
          "text": "南麻镇"
        }
      ]
    },
    {
      "value": 142,
      "text": "潍坊",
      "children": [
        {
          "value": 1,
          "text": "潍城区"
        },
        {
          "value": 2,
          "text": "寒亭区"
        },
        {
          "value": 3,
          "text": "坊子区"
        },
        {
          "value": 4,
          "text": "奎文区"
        },
        {
          "value": 5,
          "text": "安丘"
        },
        {
          "value": 6,
          "text": "昌邑"
        },
        {
          "value": 7,
          "text": "高密"
        },
        {
          "value": 8,
          "text": "青州"
        },
        {
          "value": 9,
          "text": "诸城"
        },
        {
          "value": 10,
          "text": "寿光"
        },
        {
          "value": 11,
          "text": "临朐县"
        },
        {
          "value": 12,
          "text": "昌乐县"
        }
      ]
    },
    {
      "value": 143,
      "text": "烟台",
      "children": [
        {
          "value": 1,
          "text": "莱山区"
        },
        {
          "value": 2,
          "text": "芝罘区"
        },
        {
          "value": 3,
          "text": "福山区"
        },
        {
          "value": 4,
          "text": "牟平区"
        },
        {
          "value": 5,
          "text": "栖霞"
        },
        {
          "value": 6,
          "text": "海阳"
        },
        {
          "value": 7,
          "text": "龙口"
        },
        {
          "value": 8,
          "text": "莱阳"
        },
        {
          "value": 9,
          "text": "莱州"
        },
        {
          "value": 10,
          "text": "蓬莱"
        },
        {
          "value": 11,
          "text": "招远"
        },
        {
          "value": 12,
          "text": "长岛县"
        },
        {
          "value": 13,
          "text": "南长山镇"
        }
      ]
    },
    {
      "value": 144,
      "text": "威海",
      "children": [
        {
          "value": 1,
          "text": "环翠区"
        },
        {
          "value": 2,
          "text": "荣成"
        },
        {
          "value": 3,
          "text": "乳山"
        },
        {
          "value": 4,
          "text": "文登"
        }
      ]
    },
    {
      "value": 145,
      "text": "日照",
      "children": [
        {
          "value": 1,
          "text": "东港区"
        },
        {
          "value": 2,
          "text": "岚山区"
        },
        {
          "value": 3,
          "text": "五莲县"
        },
        {
          "value": 4,
          "text": "洪凝镇"
        },
        {
          "value": 5,
          "text": "莒县"
        },
        {
          "value": 6,
          "text": "城阳镇"
        }
      ]
    },
    {
      "value": 146,
      "text": "临沂",
      "children": [
        {
          "value": 1,
          "text": "兰山区"
        },
        {
          "value": 2,
          "text": "罗庄区"
        },
        {
          "value": 3,
          "text": "河东区"
        },
        {
          "value": 4,
          "text": "郯城县"
        },
        {
          "value": 5,
          "text": "郯城镇"
        },
        {
          "value": 6,
          "text": "苍山县"
        },
        {
          "value": 7,
          "text": "卞庄镇"
        },
        {
          "value": 8,
          "text": "莒南县"
        },
        {
          "value": 9,
          "text": "十字路镇"
        },
        {
          "value": 10,
          "text": "沂水县"
        },
        {
          "value": 11,
          "text": "沂水镇"
        },
        {
          "value": 12,
          "text": "蒙阴县"
        },
        {
          "value": 13,
          "text": "蒙阴镇"
        },
        {
          "value": 14,
          "text": "平邑县"
        },
        {
          "value": 15,
          "text": "平邑镇"
        },
        {
          "value": 16,
          "text": "费县"
        },
        {
          "value": 17,
          "text": "费城镇"
        },
        {
          "value": 18,
          "text": "沂南县"
        },
        {
          "value": 19,
          "text": "界湖镇"
        },
        {
          "value": 20,
          "text": "临沭县"
        },
        {
          "value": 21,
          "text": "临沭镇"
        }
      ]
    },
    {
      "value": 147,
      "text": "枣庄",
      "children": [
        {
          "value": 1,
          "text": "薛城区"
        },
        {
          "value": 2,
          "text": "中区"
        },
        {
          "value": 3,
          "text": "峄城区"
        },
        {
          "value": 4,
          "text": "台儿庄区"
        },
        {
          "value": 5,
          "text": "山亭区"
        },
        {
          "value": 6,
          "text": "滕州"
        }
      ]
    },
    {
      "value": 148,
      "text": "济宁",
      "children": [
        {
          "value": 1,
          "text": "中区"
        },
        {
          "value": 2,
          "text": "任城区"
        },
        {
          "value": 3,
          "text": "曲阜"
        },
        {
          "value": 4,
          "text": "兖州"
        },
        {
          "value": 5,
          "text": "邹城"
        },
        {
          "value": 6,
          "text": "微山县"
        },
        {
          "value": 7,
          "text": "鱼台县"
        },
        {
          "value": 8,
          "text": "谷亭镇"
        },
        {
          "value": 9,
          "text": "金乡县"
        },
        {
          "value": 10,
          "text": "金乡镇"
        },
        {
          "value": 11,
          "text": "嘉祥县"
        },
        {
          "value": 12,
          "text": "嘉祥镇"
        },
        {
          "value": 13,
          "text": "汶上县"
        },
        {
          "value": 14,
          "text": "汶上镇"
        },
        {
          "value": 15,
          "text": "泗水县"
        },
        {
          "value": 16,
          "text": "梁山县"
        },
        {
          "value": 17,
          "text": "梁山镇"
        }
      ]
    },
    {
      "value": 149,
      "text": "泰安",
      "children": [
        {
          "value": 1,
          "text": "泰山区"
        },
        {
          "value": 2,
          "text": "岱岳区"
        },
        {
          "value": 3,
          "text": "新泰"
        },
        {
          "value": 4,
          "text": "肥城"
        },
        {
          "value": 5,
          "text": "宁阳县"
        },
        {
          "value": 6,
          "text": "宁阳镇"
        },
        {
          "value": 7,
          "text": "东平县"
        },
        {
          "value": 8,
          "text": "东平镇"
        }
      ]
    },
    {
      "value": 150,
      "text": "莱芜",
      "children": [
        {
          "value": 1,
          "text": "莱城区"
        },
        {
          "value": 2,
          "text": "钢城区"
        }
      ]
    },
    {
      "value": 151,
      "text": "滨州",
      "children": [
        {
          "value": 1,
          "text": "滨城区"
        },
        {
          "value": 2,
          "text": "惠民县"
        },
        {
          "value": 3,
          "text": "惠民镇"
        },
        {
          "value": 4,
          "text": "阳信县"
        },
        {
          "value": 5,
          "text": "阳信镇"
        },
        {
          "value": 6,
          "text": "无棣县"
        },
        {
          "value": 7,
          "text": "无棣镇"
        },
        {
          "value": 8,
          "text": "沾化县"
        },
        {
          "value": 9,
          "text": "富国镇"
        },
        {
          "value": 10,
          "text": "博兴县"
        },
        {
          "value": 11,
          "text": "博兴镇"
        },
        {
          "value": 12,
          "text": "邹平县"
        }
      ]
    },
    {
      "value": 152,
      "text": "菏泽",
      "children": [
        {
          "value": 1,
          "text": "牡丹区"
        },
        {
          "value": 2,
          "text": "曹县"
        },
        {
          "value": 3,
          "text": "曹城镇"
        },
        {
          "value": 4,
          "text": "定陶县"
        },
        {
          "value": 5,
          "text": "定陶镇"
        },
        {
          "value": 6,
          "text": "成武县"
        },
        {
          "value": 7,
          "text": "成武镇"
        },
        {
          "value": 8,
          "text": "单县"
        },
        {
          "value": 9,
          "text": "单城镇"
        },
        {
          "value": 10,
          "text": "巨野县"
        },
        {
          "value": 11,
          "text": "巨野镇"
        },
        {
          "value": 12,
          "text": "郓城县"
        },
        {
          "value": 13,
          "text": "郓城镇"
        },
        {
          "value": 14,
          "text": "鄄城县"
        },
        {
          "value": 15,
          "text": "鄄城镇"
        },
        {
          "value": 16,
          "text": "东明县"
        },
        {
          "value": 17,
          "text": "城关镇"
        }
      ]
    },
    {
      "value": 153,
      "text": "郑州",
      "children": [
        {
          "value": 1,
          "text": "中原区"
        },
        {
          "value": 2,
          "text": "二七区"
        },
        {
          "value": 3,
          "text": "管城回族区"
        },
        {
          "value": 4,
          "text": "金水区"
        },
        {
          "value": 5,
          "text": "上街区"
        },
        {
          "value": 6,
          "text": "惠济区"
        },
        {
          "value": 7,
          "text": "新郑"
        },
        {
          "value": 8,
          "text": "登封"
        },
        {
          "value": 9,
          "text": "新密"
        },
        {
          "value": 10,
          "text": "巩义"
        },
        {
          "value": 11,
          "text": "荥阳"
        },
        {
          "value": 12,
          "text": "中牟县"
        },
        {
          "value": 13,
          "text": "城关镇"
        }
      ]
    },
    {
      "value": 154,
      "text": "开封",
      "children": [
        {
          "value": 1,
          "text": "鼓楼区"
        },
        {
          "value": 2,
          "text": "龙亭区"
        },
        {
          "value": 3,
          "text": "顺河回族区"
        },
        {
          "value": 4,
          "text": "禹王台区"
        },
        {
          "value": 5,
          "text": "金明区"
        },
        {
          "value": 6,
          "text": "杞县"
        },
        {
          "value": 7,
          "text": "城关镇"
        },
        {
          "value": 8,
          "text": "通许县"
        },
        {
          "value": 9,
          "text": "城关镇"
        },
        {
          "value": 10,
          "text": "尉氏县"
        },
        {
          "value": 11,
          "text": "城关镇"
        },
        {
          "value": 12,
          "text": "开封县"
        },
        {
          "value": 13,
          "text": "城关镇"
        },
        {
          "value": 14,
          "text": "兰考县"
        },
        {
          "value": 15,
          "text": "城关镇"
        }
      ]
    },
    {
      "value": 155,
      "text": "三门峡",
      "children": [
        {
          "value": 1,
          "text": "湖滨区"
        },
        {
          "value": 2,
          "text": "义马"
        },
        {
          "value": 3,
          "text": "灵宝"
        },
        {
          "value": 4,
          "text": "渑池县"
        },
        {
          "value": 5,
          "text": "城关镇"
        },
        {
          "value": 6,
          "text": "陕县"
        },
        {
          "value": 7,
          "text": "大营镇"
        },
        {
          "value": 8,
          "text": "卢氏县"
        },
        {
          "value": 9,
          "text": "城关镇"
        }
      ]
    },
    {
      "value": 156,
      "text": "洛阳",
      "children": [
        {
          "value": 1,
          "text": "西工区"
        },
        {
          "value": 2,
          "text": "老城区"
        },
        {
          "value": 3,
          "text": "瀍河回族区"
        },
        {
          "value": 4,
          "text": "涧西区"
        },
        {
          "value": 5,
          "text": "吉利区"
        },
        {
          "value": 6,
          "text": "洛龙区"
        },
        {
          "value": 7,
          "text": "偃师"
        },
        {
          "value": 8,
          "text": "孟津县"
        },
        {
          "value": 9,
          "text": "城关镇"
        },
        {
          "value": 10,
          "text": "新安县"
        },
        {
          "value": 11,
          "text": "城关镇"
        },
        {
          "value": 12,
          "text": "栾川县"
        },
        {
          "value": 13,
          "text": "城关镇"
        },
        {
          "value": 14,
          "text": "嵩县"
        },
        {
          "value": 15,
          "text": "城关镇"
        },
        {
          "value": 16,
          "text": "汝阳县"
        },
        {
          "value": 17,
          "text": "城关镇"
        },
        {
          "value": 18,
          "text": "宜阳县"
        },
        {
          "value": 19,
          "text": "城关镇"
        },
        {
          "value": 20,
          "text": "洛宁县"
        },
        {
          "value": 21,
          "text": "城关镇"
        },
        {
          "value": 22,
          "text": "伊川县"
        },
        {
          "value": 23,
          "text": "城关镇"
        }
      ]
    },
    {
      "value": 157,
      "text": "焦作",
      "children": [
        {
          "value": 1,
          "text": "解放区"
        },
        {
          "value": 2,
          "text": "山阳区"
        },
        {
          "value": 3,
          "text": "中站区"
        },
        {
          "value": 4,
          "text": "马村区"
        },
        {
          "value": 5,
          "text": "孟州"
        },
        {
          "value": 6,
          "text": "沁阳"
        },
        {
          "value": 7,
          "text": "修武县"
        },
        {
          "value": 8,
          "text": "城关镇"
        },
        {
          "value": 9,
          "text": "博爱县"
        },
        {
          "value": 10,
          "text": "清化镇"
        },
        {
          "value": 11,
          "text": "武陟县"
        },
        {
          "value": 12,
          "text": "木城镇"
        },
        {
          "value": 13,
          "text": "温县"
        },
        {
          "value": 14,
          "text": "温泉镇"
        }
      ]
    },
    {
      "value": 158,
      "text": "新乡",
      "children": [
        {
          "value": 1,
          "text": "卫滨区"
        },
        {
          "value": 2,
          "text": "红旗区"
        },
        {
          "value": 3,
          "text": "凤泉区"
        },
        {
          "value": 4,
          "text": "牧野区"
        },
        {
          "value": 5,
          "text": "卫辉"
        },
        {
          "value": 6,
          "text": "辉县"
        },
        {
          "value": 7,
          "text": "新乡县"
        },
        {
          "value": 8,
          "text": "新乡红旗区"
        },
        {
          "value": 9,
          "text": "获嘉县"
        },
        {
          "value": 10,
          "text": "城关镇"
        },
        {
          "value": 11,
          "text": "原阳县"
        },
        {
          "value": 12,
          "text": "城关镇"
        },
        {
          "value": 13,
          "text": "延津县"
        },
        {
          "value": 14,
          "text": "城关镇"
        },
        {
          "value": 15,
          "text": "封丘县"
        },
        {
          "value": 16,
          "text": "城关镇"
        },
        {
          "value": 17,
          "text": "长垣县"
        },
        {
          "value": 18,
          "text": "城关镇"
        }
      ]
    },
    {
      "value": 159,
      "text": "鹤壁",
      "children": [
        {
          "value": 1,
          "text": "淇滨区"
        },
        {
          "value": 2,
          "text": "山城区"
        },
        {
          "value": 3,
          "text": "鹤山区"
        },
        {
          "value": 4,
          "text": "浚县"
        },
        {
          "value": 5,
          "text": "城关镇"
        },
        {
          "value": 6,
          "text": "淇县"
        },
        {
          "value": 7,
          "text": "朝歌镇"
        }
      ]
    },
    {
      "value": 160,
      "text": "安阳",
      "children": [
        {
          "value": 1,
          "text": "北关区"
        },
        {
          "value": 2,
          "text": "文峰区"
        },
        {
          "value": 3,
          "text": "殷都区"
        },
        {
          "value": 4,
          "text": "龙安区"
        },
        {
          "value": 5,
          "text": "林州"
        },
        {
          "value": 6,
          "text": "安阳县"
        },
        {
          "value": 7,
          "text": "安阳北关区"
        },
        {
          "value": 8,
          "text": "汤阴县"
        },
        {
          "value": 9,
          "text": "城关镇"
        },
        {
          "value": 10,
          "text": "滑县"
        },
        {
          "value": 11,
          "text": "道口镇"
        },
        {
          "value": 12,
          "text": "内黄县"
        },
        {
          "value": 13,
          "text": "城关镇"
        }
      ]
    },
    {
      "value": 161,
      "text": "濮阳",
      "children": [
        {
          "value": 1,
          "text": "华龙区"
        },
        {
          "value": 2,
          "text": "清丰县"
        },
        {
          "value": 3,
          "text": "城关镇"
        },
        {
          "value": 4,
          "text": "南乐县"
        },
        {
          "value": 5,
          "text": "城关镇"
        },
        {
          "value": 6,
          "text": "范县"
        },
        {
          "value": 7,
          "text": "城关镇"
        },
        {
          "value": 8,
          "text": "台前县"
        },
        {
          "value": 9,
          "text": "城关镇"
        },
        {
          "value": 10,
          "text": "濮阳县"
        },
        {
          "value": 11,
          "text": "城关镇"
        }
      ]
    },
    {
      "value": 162,
      "text": "商丘",
      "children": [
        {
          "value": 1,
          "text": "梁园区"
        },
        {
          "value": 2,
          "text": "睢阳区"
        },
        {
          "value": 3,
          "text": "永城"
        },
        {
          "value": 4,
          "text": "虞城县"
        },
        {
          "value": 5,
          "text": "城关镇"
        },
        {
          "value": 6,
          "text": "民权县"
        },
        {
          "value": 7,
          "text": "城关镇"
        },
        {
          "value": 8,
          "text": "宁陵县"
        },
        {
          "value": 9,
          "text": "城关镇"
        },
        {
          "value": 10,
          "text": "睢县"
        },
        {
          "value": 11,
          "text": "城关镇"
        },
        {
          "value": 12,
          "text": "夏邑县"
        },
        {
          "value": 13,
          "text": "城关镇"
        },
        {
          "value": 14,
          "text": "柘城县"
        },
        {
          "value": 15,
          "text": "城关镇"
        }
      ]
    },
    {
      "value": 163,
      "text": "许昌",
      "children": [
        {
          "value": 1,
          "text": "魏都区"
        },
        {
          "value": 2,
          "text": "禹州"
        },
        {
          "value": 3,
          "text": "长葛"
        },
        {
          "value": 4,
          "text": "许昌县"
        },
        {
          "value": 5,
          "text": "许昌魏都区"
        },
        {
          "value": 6,
          "text": "鄢陵县"
        },
        {
          "value": 7,
          "text": "安陵镇"
        },
        {
          "value": 8,
          "text": "襄城县"
        },
        {
          "value": 9,
          "text": "城关镇"
        }
      ]
    },
    {
      "value": 164,
      "text": "漯河",
      "children": [
        {
          "value": 1,
          "text": "源汇区"
        },
        {
          "value": 2,
          "text": "郾城区"
        },
        {
          "value": 3,
          "text": "召陵区"
        },
        {
          "value": 4,
          "text": "舞阳县"
        },
        {
          "value": 5,
          "text": "舞泉镇"
        },
        {
          "value": 6,
          "text": "临颍县"
        },
        {
          "value": 7,
          "text": "城关镇"
        }
      ]
    },
    {
      "value": 165,
      "text": "平顶山",
      "children": [
        {
          "value": 1,
          "text": "新华区"
        },
        {
          "value": 2,
          "text": "卫东区"
        },
        {
          "value": 3,
          "text": "湛河区"
        },
        {
          "value": 4,
          "text": "石龙区"
        },
        {
          "value": 5,
          "text": "舞钢"
        },
        {
          "value": 6,
          "text": "汝州"
        },
        {
          "value": 7,
          "text": "宝丰县"
        },
        {
          "value": 8,
          "text": "城关镇"
        },
        {
          "value": 9,
          "text": "叶县"
        },
        {
          "value": 10,
          "text": "昆阳镇"
        },
        {
          "value": 11,
          "text": "鲁山县"
        },
        {
          "value": 12,
          "text": "鲁阳镇"
        },
        {
          "value": 13,
          "text": "郏县"
        },
        {
          "value": 14,
          "text": "城关镇"
        }
      ]
    },
    {
      "value": 166,
      "text": "南阳",
      "children": [
        {
          "value": 1,
          "text": "卧龙区"
        },
        {
          "value": 2,
          "text": "宛城区"
        },
        {
          "value": 3,
          "text": "邓州"
        },
        {
          "value": 4,
          "text": "南召县"
        },
        {
          "value": 5,
          "text": "城关镇"
        },
        {
          "value": 6,
          "text": "方城县"
        },
        {
          "value": 7,
          "text": "城关镇"
        },
        {
          "value": 8,
          "text": "西峡县"
        },
        {
          "value": 9,
          "text": "镇平县"
        },
        {
          "value": 10,
          "text": "城关镇"
        },
        {
          "value": 11,
          "text": "内乡县"
        },
        {
          "value": 12,
          "text": "城关镇"
        },
        {
          "value": 13,
          "text": "淅川县"
        },
        {
          "value": 14,
          "text": "社旗县"
        },
        {
          "value": 15,
          "text": "赊店镇"
        },
        {
          "value": 16,
          "text": "唐河县"
        },
        {
          "value": 17,
          "text": "新野县"
        },
        {
          "value": 18,
          "text": "城关镇"
        },
        {
          "value": 19,
          "text": "桐柏县"
        },
        {
          "value": 20,
          "text": "城关镇"
        }
      ]
    },
    {
      "value": 167,
      "text": "信阳",
      "children": [
        {
          "value": 1,
          "text": "河区"
        },
        {
          "value": 2,
          "text": "平桥区"
        },
        {
          "value": 3,
          "text": "息县"
        },
        {
          "value": 4,
          "text": "城关镇"
        },
        {
          "value": 5,
          "text": "淮滨县"
        },
        {
          "value": 6,
          "text": "城关镇"
        },
        {
          "value": 7,
          "text": "潢川县"
        },
        {
          "value": 8,
          "text": "光山县"
        },
        {
          "value": 9,
          "text": "固始县"
        },
        {
          "value": 10,
          "text": "城关镇"
        },
        {
          "value": 11,
          "text": "商城县"
        },
        {
          "value": 12,
          "text": "城关镇"
        },
        {
          "value": 13,
          "text": "罗山县"
        },
        {
          "value": 14,
          "text": "城关镇"
        },
        {
          "value": 15,
          "text": "新县"
        },
        {
          "value": 16,
          "text": "新集镇"
        }
      ]
    },
    {
      "value": 168,
      "text": "周口",
      "children": [
        {
          "value": 1,
          "text": "川汇区"
        },
        {
          "value": 2,
          "text": "项城"
        },
        {
          "value": 3,
          "text": "扶沟县"
        },
        {
          "value": 4,
          "text": "城关镇"
        },
        {
          "value": 5,
          "text": "西华县"
        },
        {
          "value": 6,
          "text": "城关镇"
        },
        {
          "value": 7,
          "text": "商水县"
        },
        {
          "value": 8,
          "text": "城关镇"
        },
        {
          "value": 9,
          "text": "太康县"
        },
        {
          "value": 10,
          "text": "城关镇"
        },
        {
          "value": 11,
          "text": "鹿邑县"
        },
        {
          "value": 12,
          "text": "城关镇"
        },
        {
          "value": 13,
          "text": "郸城县"
        },
        {
          "value": 14,
          "text": "城关镇"
        },
        {
          "value": 15,
          "text": "淮阳县"
        },
        {
          "value": 16,
          "text": "城关镇"
        },
        {
          "value": 17,
          "text": "沈丘县"
        },
        {
          "value": 18,
          "text": "槐店镇"
        }
      ]
    },
    {
      "value": 169,
      "text": "驻马店",
      "children": [
        {
          "value": 1,
          "text": "驿城区"
        },
        {
          "value": 2,
          "text": "确山县"
        },
        {
          "value": 3,
          "text": "盘龙镇"
        },
        {
          "value": 4,
          "text": "泌阳县"
        },
        {
          "value": 5,
          "text": "泌水镇"
        },
        {
          "value": 6,
          "text": "遂平县"
        },
        {
          "value": 7,
          "text": "灈阳镇"
        },
        {
          "value": 8,
          "text": "西平县"
        },
        {
          "value": 9,
          "text": "上蔡县"
        },
        {
          "value": 10,
          "text": "蔡都镇"
        },
        {
          "value": 11,
          "text": "汝南县"
        },
        {
          "value": 12,
          "text": "汝宁镇"
        },
        {
          "value": 13,
          "text": "平舆县"
        },
        {
          "value": 14,
          "text": "古槐镇"
        },
        {
          "value": 15,
          "text": "新蔡县"
        },
        {
          "value": 16,
          "text": "古吕镇"
        },
        {
          "value": 17,
          "text": "正阳县"
        },
        {
          "value": 18,
          "text": "真阳镇"
        }
      ]
    },
    {
      "value": 170,
      "text": "济源",
      "children": []
    },
    {
      "value": 171,
      "text": "武汉",
      "children": [
        {
          "value": 1,
          "text": "江岸区"
        },
        {
          "value": 2,
          "text": "江汉区"
        },
        {
          "value": 3,
          "text": "硚口区"
        },
        {
          "value": 4,
          "text": "汉阳区"
        },
        {
          "value": 5,
          "text": "武昌区"
        },
        {
          "value": 6,
          "text": "青山区"
        },
        {
          "value": 7,
          "text": "洪山区"
        },
        {
          "value": 8,
          "text": "东西湖区"
        },
        {
          "value": 9,
          "text": "汉南区"
        },
        {
          "value": 10,
          "text": "蔡甸区"
        },
        {
          "value": 11,
          "text": "江夏区"
        },
        {
          "value": 12,
          "text": "黄陂区"
        },
        {
          "value": 13,
          "text": "新洲区"
        }
      ]
    },
    {
      "value": 172,
      "text": "十堰",
      "children": [
        {
          "value": 1,
          "text": "张湾区"
        },
        {
          "value": 2,
          "text": "茅箭区"
        },
        {
          "value": 3,
          "text": "丹江口"
        },
        {
          "value": 4,
          "text": "郧县"
        },
        {
          "value": 5,
          "text": "城关镇"
        },
        {
          "value": 6,
          "text": "竹山县"
        },
        {
          "value": 7,
          "text": "城关镇"
        },
        {
          "value": 8,
          "text": "房县"
        },
        {
          "value": 9,
          "text": "城关镇"
        },
        {
          "value": 10,
          "text": "郧西县"
        },
        {
          "value": 11,
          "text": "城关镇"
        },
        {
          "value": 12,
          "text": "竹溪县"
        },
        {
          "value": 13,
          "text": "城关镇"
        }
      ]
    },
    {
      "value": 173,
      "text": "襄樊",
      "children": [
        {
          "value": 1,
          "text": "襄城区"
        },
        {
          "value": 2,
          "text": "樊城区"
        },
        {
          "value": 3,
          "text": "襄阳区"
        },
        {
          "value": 4,
          "text": "老河口"
        },
        {
          "value": 5,
          "text": "枣阳"
        },
        {
          "value": 6,
          "text": "宜城"
        },
        {
          "value": 7,
          "text": "南漳县"
        },
        {
          "value": 8,
          "text": "城关镇"
        },
        {
          "value": 9,
          "text": "谷城县"
        },
        {
          "value": 10,
          "text": "城关镇"
        },
        {
          "value": 11,
          "text": "保康县"
        },
        {
          "value": 12,
          "text": "城关镇"
        }
      ]
    },
    {
      "value": 174,
      "text": "荆门",
      "children": [
        {
          "value": 1,
          "text": "东宝区"
        },
        {
          "value": 2,
          "text": "掇刀区"
        },
        {
          "value": 3,
          "text": "钟祥"
        },
        {
          "value": 4,
          "text": "沙洋县"
        },
        {
          "value": 5,
          "text": "沙洋镇"
        },
        {
          "value": 6,
          "text": "京山县"
        },
        {
          "value": 7,
          "text": "新镇"
        }
      ]
    },
    {
      "value": 175,
      "text": "孝感",
      "children": [
        {
          "value": 1,
          "text": "孝南区"
        },
        {
          "value": 2,
          "text": "应城"
        },
        {
          "value": 3,
          "text": "安陆"
        },
        {
          "value": 4,
          "text": "汉川"
        },
        {
          "value": 5,
          "text": "孝昌县"
        },
        {
          "value": 6,
          "text": "花园镇"
        },
        {
          "value": 7,
          "text": "大悟县"
        },
        {
          "value": 8,
          "text": "城关镇"
        },
        {
          "value": 9,
          "text": "云梦县"
        },
        {
          "value": 10,
          "text": "城关镇"
        }
      ]
    },
    {
      "value": 176,
      "text": "黄冈",
      "children": [
        {
          "value": 1,
          "text": "黄州区"
        },
        {
          "value": 2,
          "text": "麻城"
        },
        {
          "value": 3,
          "text": "武穴"
        },
        {
          "value": 4,
          "text": "红安县"
        },
        {
          "value": 5,
          "text": "城关镇"
        },
        {
          "value": 6,
          "text": "罗田县"
        },
        {
          "value": 7,
          "text": "凤山镇"
        },
        {
          "value": 8,
          "text": "英山县"
        },
        {
          "value": 9,
          "text": "温泉镇"
        },
        {
          "value": 10,
          "text": "浠水县"
        },
        {
          "value": 11,
          "text": "清泉镇"
        },
        {
          "value": 12,
          "text": "蕲春县"
        },
        {
          "value": 13,
          "text": "漕河镇"
        },
        {
          "value": 14,
          "text": "黄梅县"
        },
        {
          "value": 15,
          "text": "黄梅镇"
        },
        {
          "value": 16,
          "text": "团风县"
        },
        {
          "value": 17,
          "text": "团风镇"
        }
      ]
    },
    {
      "value": 177,
      "text": "鄂州",
      "children": [
        {
          "value": 1,
          "text": "鄂城区"
        },
        {
          "value": 2,
          "text": "梁子湖区"
        },
        {
          "value": 3,
          "text": "华容区"
        }
      ]
    },
    {
      "value": 178,
      "text": "黄石",
      "children": [
        {
          "value": 1,
          "text": "黄石港区"
        },
        {
          "value": 2,
          "text": "西塞山区"
        },
        {
          "value": 3,
          "text": "下陆区"
        },
        {
          "value": 4,
          "text": "铁山区"
        },
        {
          "value": 5,
          "text": "大冶"
        },
        {
          "value": 6,
          "text": "阳新县"
        },
        {
          "value": 7,
          "text": "兴国镇"
        }
      ]
    },
    {
      "value": 179,
      "text": "咸宁",
      "children": [
        {
          "value": 1,
          "text": "咸安区"
        },
        {
          "value": 2,
          "text": "赤壁"
        },
        {
          "value": 3,
          "text": "嘉鱼县"
        },
        {
          "value": 4,
          "text": "鱼岳镇"
        },
        {
          "value": 5,
          "text": "通城县"
        },
        {
          "value": 6,
          "text": "隽水镇"
        },
        {
          "value": 7,
          "text": "崇阳县"
        },
        {
          "value": 8,
          "text": "天城镇"
        },
        {
          "value": 9,
          "text": "通山县"
        },
        {
          "value": 10,
          "text": "通羊镇"
        }
      ]
    },
    {
      "value": 180,
      "text": "荆州",
      "children": [
        {
          "value": 1,
          "text": "沙区"
        },
        {
          "value": 2,
          "text": "荆州区"
        },
        {
          "value": 3,
          "text": "石首"
        },
        {
          "value": 4,
          "text": "洪湖"
        },
        {
          "value": 5,
          "text": "松滋"
        },
        {
          "value": 6,
          "text": "江陵县"
        },
        {
          "value": 7,
          "text": "郝穴镇"
        },
        {
          "value": 8,
          "text": "公安县"
        },
        {
          "value": 9,
          "text": "斗湖堤镇"
        },
        {
          "value": 10,
          "text": "监利县"
        },
        {
          "value": 11,
          "text": "容城镇"
        }
      ]
    },
    {
      "value": 181,
      "text": "宜昌",
      "children": [
        {
          "value": 1,
          "text": "西陵区"
        },
        {
          "value": 2,
          "text": "伍家岗区"
        },
        {
          "value": 3,
          "text": "点军区"
        },
        {
          "value": 4,
          "text": "猇亭区"
        },
        {
          "value": 5,
          "text": "夷陵区"
        },
        {
          "value": 6,
          "text": "枝江"
        },
        {
          "value": 7,
          "text": "宜都"
        },
        {
          "value": 8,
          "text": "当阳"
        },
        {
          "value": 9,
          "text": "远安县"
        },
        {
          "value": 10,
          "text": "鸣凤镇"
        },
        {
          "value": 11,
          "text": "兴山县"
        },
        {
          "value": 12,
          "text": "古夫镇"
        },
        {
          "value": 13,
          "text": "秭归县"
        },
        {
          "value": 14,
          "text": "茅坪镇"
        },
        {
          "value": 15,
          "text": "长阳土家族自治县"
        },
        {
          "value": 16,
          "text": "龙舟坪镇"
        },
        {
          "value": 17,
          "text": "五峰土家族自治县"
        },
        {
          "value": 18,
          "text": "五峰镇"
        }
      ]
    },
    {
      "value": 182,
      "text": "随州",
      "children": [
        {
          "value": 1,
          "text": "曾都区"
        },
        {
          "value": 2,
          "text": "广水"
        }
      ]
    },
    {
      "value": 183,
      "text": "省直辖县级行政单位",
      "children": [
        {
          "value": 1,
          "text": "仙桃"
        },
        {
          "value": 2,
          "text": "天门"
        },
        {
          "value": 3,
          "text": "潜江"
        },
        {
          "value": 4,
          "text": "神农架林区"
        },
        {
          "value": 5,
          "text": "松柏镇"
        }
      ]
    },
    {
      "value": 184,
      "text": "恩施州",
      "children": [
        {
          "value": 1,
          "text": "恩施"
        },
        {
          "value": 2,
          "text": "利川"
        },
        {
          "value": 3,
          "text": "建始县"
        },
        {
          "value": 4,
          "text": "业州镇"
        },
        {
          "value": 5,
          "text": "巴东县"
        },
        {
          "value": 6,
          "text": "信陵镇"
        },
        {
          "value": 7,
          "text": "宣恩县"
        },
        {
          "value": 8,
          "text": "珠山镇"
        },
        {
          "value": 9,
          "text": "咸丰县"
        },
        {
          "value": 10,
          "text": "高乐山镇"
        },
        {
          "value": 11,
          "text": "来凤县"
        },
        {
          "value": 12,
          "text": "翔凤镇"
        },
        {
          "value": 13,
          "text": "鹤峰县"
        },
        {
          "value": 14,
          "text": "容美镇"
        }
      ]
    },
    {
      "value": 185,
      "text": "长沙",
      "children": [
        {
          "value": 1,
          "text": "长沙"
        },
        {
          "value": 2,
          "text": "岳麓区"
        },
        {
          "value": 3,
          "text": "芙蓉区"
        },
        {
          "value": 4,
          "text": "天心区"
        },
        {
          "value": 5,
          "text": "开福区"
        },
        {
          "value": 6,
          "text": "雨花区"
        },
        {
          "value": 7,
          "text": "浏阳"
        },
        {
          "value": 8,
          "text": "长沙县"
        },
        {
          "value": 9,
          "text": "星沙镇"
        },
        {
          "value": 10,
          "text": "望城县"
        },
        {
          "value": 11,
          "text": "高塘岭镇"
        },
        {
          "value": 12,
          "text": "宁乡县"
        },
        {
          "value": 13,
          "text": "玉潭镇"
        }
      ]
    },
    {
      "value": 186,
      "text": "张家界",
      "children": [
        {
          "value": 1,
          "text": "永定区"
        },
        {
          "value": 2,
          "text": "武陵源区"
        },
        {
          "value": 3,
          "text": "慈利县"
        },
        {
          "value": 4,
          "text": "零阳镇"
        },
        {
          "value": 5,
          "text": "桑植县"
        },
        {
          "value": 6,
          "text": "澧源镇"
        }
      ]
    },
    {
      "value": 187,
      "text": "常德",
      "children": [
        {
          "value": 1,
          "text": "武陵区"
        },
        {
          "value": 2,
          "text": "鼎城区"
        },
        {
          "value": 3,
          "text": "津"
        },
        {
          "value": 4,
          "text": "安乡县"
        },
        {
          "value": 5,
          "text": "城关镇"
        },
        {
          "value": 6,
          "text": "汉寿县"
        },
        {
          "value": 7,
          "text": "龙阳镇"
        },
        {
          "value": 8,
          "text": "澧县"
        },
        {
          "value": 9,
          "text": "澧阳镇"
        },
        {
          "value": 10,
          "text": "临澧县"
        },
        {
          "value": 11,
          "text": "安福镇"
        },
        {
          "value": 12,
          "text": "桃源县"
        },
        {
          "value": 13,
          "text": "漳江镇"
        },
        {
          "value": 14,
          "text": "石门县"
        },
        {
          "value": 15,
          "text": "楚江镇"
        }
      ]
    },
    {
      "value": 188,
      "text": "益阳",
      "children": [
        {
          "value": 1,
          "text": "赫山区"
        },
        {
          "value": 2,
          "text": "资阳区"
        },
        {
          "value": 3,
          "text": "沅江"
        },
        {
          "value": 4,
          "text": "南县"
        },
        {
          "value": 5,
          "text": "南洲镇"
        },
        {
          "value": 6,
          "text": "桃江县"
        },
        {
          "value": 7,
          "text": "桃花江镇"
        },
        {
          "value": 8,
          "text": "安化县"
        },
        {
          "value": 9,
          "text": "东坪镇"
        }
      ]
    },
    {
      "value": 189,
      "text": "岳阳",
      "children": [
        {
          "value": 1,
          "text": "岳阳楼区"
        },
        {
          "value": 2,
          "text": "君山区"
        },
        {
          "value": 3,
          "text": "云溪区"
        },
        {
          "value": 4,
          "text": "汨罗"
        },
        {
          "value": 5,
          "text": "临湘"
        },
        {
          "value": 6,
          "text": "岳阳县"
        },
        {
          "value": 7,
          "text": "荣家湾镇"
        },
        {
          "value": 8,
          "text": "华容县"
        },
        {
          "value": 9,
          "text": "城关镇"
        },
        {
          "value": 10,
          "text": "湘阴县"
        },
        {
          "value": 11,
          "text": "文星镇"
        },
        {
          "value": 12,
          "text": "平江县"
        },
        {
          "value": 13,
          "text": "汉昌镇"
        }
      ]
    },
    {
      "value": 190,
      "text": "株洲",
      "children": [
        {
          "value": 1,
          "text": "天元区"
        },
        {
          "value": 2,
          "text": "荷塘区"
        },
        {
          "value": 3,
          "text": "芦淞区"
        },
        {
          "value": 4,
          "text": "石峰区"
        },
        {
          "value": 5,
          "text": "醴陵"
        },
        {
          "value": 6,
          "text": "株洲县"
        },
        {
          "value": 7,
          "text": "渌口镇"
        },
        {
          "value": 8,
          "text": "攸县"
        },
        {
          "value": 9,
          "text": "城关镇"
        },
        {
          "value": 10,
          "text": "茶陵县"
        },
        {
          "value": 11,
          "text": "城关镇"
        },
        {
          "value": 12,
          "text": "炎陵县"
        },
        {
          "value": 13,
          "text": "霞阳镇"
        }
      ]
    },
    {
      "value": 191,
      "text": "湘潭",
      "children": [
        {
          "value": 1,
          "text": "岳塘区"
        },
        {
          "value": 2,
          "text": "雨湖区"
        },
        {
          "value": 3,
          "text": "湘乡"
        },
        {
          "value": 4,
          "text": "韶山"
        },
        {
          "value": 5,
          "text": "湘潭县"
        },
        {
          "value": 6,
          "text": "易俗河镇"
        }
      ]
    },
    {
      "value": 192,
      "text": "衡阳",
      "children": [
        {
          "value": 1,
          "text": "雁峰区"
        },
        {
          "value": 2,
          "text": "珠晖区"
        },
        {
          "value": 3,
          "text": "石鼓区"
        },
        {
          "value": 4,
          "text": "蒸湘区"
        },
        {
          "value": 5,
          "text": "南岳区"
        },
        {
          "value": 6,
          "text": "常宁"
        },
        {
          "value": 7,
          "text": "耒阳"
        },
        {
          "value": 8,
          "text": "衡阳县"
        },
        {
          "value": 9,
          "text": "西渡镇"
        },
        {
          "value": 10,
          "text": "衡南县"
        },
        {
          "value": 11,
          "text": "云集镇"
        },
        {
          "value": 12,
          "text": "衡山县"
        },
        {
          "value": 13,
          "text": "开云镇"
        },
        {
          "value": 14,
          "text": "衡东县"
        },
        {
          "value": 15,
          "text": "城关镇"
        },
        {
          "value": 16,
          "text": "祁东县"
        },
        {
          "value": 17,
          "text": "洪桥镇"
        }
      ]
    },
    {
      "value": 193,
      "text": "郴州",
      "children": [
        {
          "value": 1,
          "text": "北湖区"
        },
        {
          "value": 2,
          "text": "苏仙区"
        },
        {
          "value": 3,
          "text": "资兴"
        },
        {
          "value": 4,
          "text": "桂阳县"
        },
        {
          "value": 5,
          "text": "城关镇"
        },
        {
          "value": 6,
          "text": "永兴县"
        },
        {
          "value": 7,
          "text": "城关镇"
        },
        {
          "value": 8,
          "text": "宜章县"
        },
        {
          "value": 9,
          "text": "城关镇"
        },
        {
          "value": 10,
          "text": "嘉禾县"
        },
        {
          "value": 11,
          "text": "城关镇"
        },
        {
          "value": 12,
          "text": "临武县"
        },
        {
          "value": 13,
          "text": "城关镇"
        },
        {
          "value": 14,
          "text": "汝城县"
        },
        {
          "value": 15,
          "text": "城关镇"
        },
        {
          "value": 16,
          "text": "桂东县"
        },
        {
          "value": 17,
          "text": "城关镇"
        },
        {
          "value": 18,
          "text": "安仁县"
        },
        {
          "value": 19,
          "text": "城关镇"
        }
      ]
    },
    {
      "value": 194,
      "text": "永州",
      "children": [
        {
          "value": 1,
          "text": "冷水滩区"
        },
        {
          "value": 2,
          "text": "零陵区"
        },
        {
          "value": 3,
          "text": "东安县"
        },
        {
          "value": 4,
          "text": "白牙镇"
        },
        {
          "value": 5,
          "text": "道县"
        },
        {
          "value": 6,
          "text": "道江镇"
        },
        {
          "value": 7,
          "text": "宁远县"
        },
        {
          "value": 8,
          "text": "舜陵镇"
        },
        {
          "value": 9,
          "text": "江永县"
        },
        {
          "value": 10,
          "text": "潇浦镇"
        },
        {
          "value": 11,
          "text": "蓝山县"
        },
        {
          "value": 12,
          "text": "塔峰镇"
        },
        {
          "value": 13,
          "text": "新田县"
        },
        {
          "value": 14,
          "text": "龙泉镇"
        },
        {
          "value": 15,
          "text": "双牌县"
        },
        {
          "value": 16,
          "text": "泷泊镇"
        },
        {
          "value": 17,
          "text": "祁阳县"
        },
        {
          "value": 18,
          "text": "浯溪镇"
        },
        {
          "value": 19,
          "text": "江华瑶族自治县"
        },
        {
          "value": 20,
          "text": "沱江镇"
        }
      ]
    },
    {
      "value": 195,
      "text": "邵阳",
      "children": [
        {
          "value": 1,
          "text": "双清区"
        },
        {
          "value": 2,
          "text": "大祥区"
        },
        {
          "value": 3,
          "text": "北塔区"
        },
        {
          "value": 4,
          "text": "武冈"
        },
        {
          "value": 5,
          "text": "邵东县"
        },
        {
          "value": 6,
          "text": "两镇"
        },
        {
          "value": 7,
          "text": "邵阳县"
        },
        {
          "value": 8,
          "text": "塘渡口镇"
        },
        {
          "value": 9,
          "text": "新邵县"
        },
        {
          "value": 10,
          "text": "酿溪镇"
        },
        {
          "value": 11,
          "text": "隆回县"
        },
        {
          "value": 12,
          "text": "桃洪镇"
        },
        {
          "value": 13,
          "text": "洞口县"
        },
        {
          "value": 14,
          "text": "洞口镇"
        },
        {
          "value": 15,
          "text": "绥宁县"
        },
        {
          "value": 16,
          "text": "长铺镇"
        },
        {
          "value": 17,
          "text": "新宁县"
        },
        {
          "value": 18,
          "text": "金石镇"
        },
        {
          "value": 19,
          "text": "城步苗族自治县"
        },
        {
          "value": 20,
          "text": "儒林镇"
        }
      ]
    },
    {
      "value": 196,
      "text": "怀化",
      "children": [
        {
          "value": 1,
          "text": "鹤城区"
        },
        {
          "value": 2,
          "text": "洪江"
        },
        {
          "value": 3,
          "text": "沅陵县"
        },
        {
          "value": 4,
          "text": "沅陵镇"
        },
        {
          "value": 5,
          "text": "辰溪县"
        },
        {
          "value": 6,
          "text": "辰阳镇"
        },
        {
          "value": 7,
          "text": "溆浦县"
        },
        {
          "value": 8,
          "text": "卢峰镇"
        },
        {
          "value": 9,
          "text": "中方县"
        },
        {
          "value": 10,
          "text": "中方镇"
        },
        {
          "value": 11,
          "text": "会同县"
        },
        {
          "value": 12,
          "text": "林城镇"
        },
        {
          "value": 13,
          "text": "麻阳苗族自治县"
        },
        {
          "value": 14,
          "text": "高村镇"
        },
        {
          "value": 15,
          "text": "新晃侗族自治县"
        },
        {
          "value": 16,
          "text": "新晃镇"
        },
        {
          "value": 17,
          "text": "芷江侗族自治县"
        },
        {
          "value": 18,
          "text": "芷江镇"
        },
        {
          "value": 19,
          "text": "靖州苗族侗族自治县"
        },
        {
          "value": 20,
          "text": "渠阳镇"
        },
        {
          "value": 21,
          "text": "通道侗族自治县"
        },
        {
          "value": 22,
          "text": "双江镇"
        }
      ]
    },
    {
      "value": 197,
      "text": "娄底",
      "children": [
        {
          "value": 1,
          "text": "娄星区"
        },
        {
          "value": 2,
          "text": "冷水江"
        },
        {
          "value": 3,
          "text": "涟源"
        },
        {
          "value": 4,
          "text": "双峰县"
        },
        {
          "value": 5,
          "text": "永丰镇"
        },
        {
          "value": 6,
          "text": "新化县"
        },
        {
          "value": 7,
          "text": "上梅镇"
        }
      ]
    },
    {
      "value": 198,
      "text": "湘西州",
      "children": [
        {
          "value": 1,
          "text": "吉首"
        },
        {
          "value": 2,
          "text": "泸溪县"
        },
        {
          "value": 3,
          "text": "白沙镇"
        },
        {
          "value": 4,
          "text": "凤凰县"
        },
        {
          "value": 5,
          "text": "沱江镇"
        },
        {
          "value": 6,
          "text": "花垣县"
        },
        {
          "value": 7,
          "text": "花垣镇"
        },
        {
          "value": 8,
          "text": "保靖县"
        },
        {
          "value": 9,
          "text": "迁陵镇"
        },
        {
          "value": 10,
          "text": "古丈县"
        },
        {
          "value": 11,
          "text": "古阳镇"
        },
        {
          "value": 12,
          "text": "永顺县"
        },
        {
          "value": 13,
          "text": "灵溪镇"
        },
        {
          "value": 14,
          "text": "龙山县"
        }
      ]
    },
    {
      "value": 199,
      "text": "广州",
      "children": [
        {
          "value": 1,
          "text": "越秀区"
        },
        {
          "value": 2,
          "text": "荔湾区"
        },
        {
          "value": 3,
          "text": "海珠区"
        },
        {
          "value": 4,
          "text": "天河区"
        },
        {
          "value": 5,
          "text": "白云区"
        },
        {
          "value": 6,
          "text": "黄埔区"
        },
        {
          "value": 7,
          "text": "番禺区"
        },
        {
          "value": 8,
          "text": "花都区"
        },
        {
          "value": 9,
          "text": "南沙区"
        },
        {
          "value": 10,
          "text": "萝岗区"
        },
        {
          "value": 11,
          "text": "增城"
        },
        {
          "value": 12,
          "text": "从化"
        }
      ]
    },
    {
      "value": 200,
      "text": "深圳",
      "children": [
        {
          "value": 1,
          "text": "福田区"
        },
        {
          "value": 2,
          "text": "罗湖区"
        },
        {
          "value": 3,
          "text": "南山区"
        },
        {
          "value": 4,
          "text": "宝安区"
        },
        {
          "value": 5,
          "text": "龙岗区"
        },
        {
          "value": 6,
          "text": "盐田区"
        }
      ]
    },
    {
      "value": 201,
      "text": "清远",
      "children": [
        {
          "value": 1,
          "text": "清城区"
        },
        {
          "value": 2,
          "text": "英德"
        },
        {
          "value": 3,
          "text": "连州"
        },
        {
          "value": 4,
          "text": "佛冈县"
        },
        {
          "value": 5,
          "text": "石角镇"
        },
        {
          "value": 6,
          "text": "阳山县"
        },
        {
          "value": 7,
          "text": "阳城镇"
        },
        {
          "value": 8,
          "text": "清新县"
        },
        {
          "value": 9,
          "text": "太和镇"
        },
        {
          "value": 10,
          "text": "连山壮族瑶族自治县"
        },
        {
          "value": 11,
          "text": "吉田镇"
        },
        {
          "value": 12,
          "text": "连南瑶族自治县"
        },
        {
          "value": 13,
          "text": "三江镇"
        }
      ]
    },
    {
      "value": 202,
      "text": "韶关",
      "children": [
        {
          "value": 1,
          "text": "浈江区"
        },
        {
          "value": 2,
          "text": "武江区"
        },
        {
          "value": 3,
          "text": "曲江区"
        },
        {
          "value": 4,
          "text": "乐昌"
        },
        {
          "value": 5,
          "text": "南雄"
        },
        {
          "value": 6,
          "text": "始兴县"
        },
        {
          "value": 7,
          "text": "太平镇"
        },
        {
          "value": 8,
          "text": "仁化县"
        },
        {
          "value": 9,
          "text": "仁化镇"
        },
        {
          "value": 10,
          "text": "翁源县"
        },
        {
          "value": 11,
          "text": "龙仙镇"
        },
        {
          "value": 12,
          "text": "新丰县"
        },
        {
          "value": 13,
          "text": "乳源瑶族自治县"
        },
        {
          "value": 14,
          "text": "乳城镇"
        }
      ]
    },
    {
      "value": 203,
      "text": "河源",
      "children": [
        {
          "value": 1,
          "text": "源城区"
        },
        {
          "value": 2,
          "text": "紫金县"
        },
        {
          "value": 3,
          "text": "紫城镇"
        },
        {
          "value": 4,
          "text": "龙川县"
        },
        {
          "value": 5,
          "text": "老隆镇"
        },
        {
          "value": 6,
          "text": "连平县"
        },
        {
          "value": 7,
          "text": "元善镇"
        },
        {
          "value": 8,
          "text": "和平县"
        },
        {
          "value": 9,
          "text": "阳明镇"
        },
        {
          "value": 10,
          "text": "东源县"
        },
        {
          "value": 11,
          "text": "仙塘镇"
        }
      ]
    },
    {
      "value": 204,
      "text": "梅州",
      "children": [
        {
          "value": 1,
          "text": "梅江区"
        },
        {
          "value": 2,
          "text": "兴宁"
        },
        {
          "value": 3,
          "text": "梅县"
        },
        {
          "value": 4,
          "text": "程江镇"
        },
        {
          "value": 5,
          "text": "大埔县"
        },
        {
          "value": 6,
          "text": "湖寮镇"
        },
        {
          "value": 7,
          "text": "丰顺县"
        },
        {
          "value": 8,
          "text": "汤坑镇"
        },
        {
          "value": 9,
          "text": "五华县"
        },
        {
          "value": 10,
          "text": "水寨镇"
        },
        {
          "value": 11,
          "text": "平远县"
        },
        {
          "value": 12,
          "text": "大柘镇"
        },
        {
          "value": 13,
          "text": "蕉岭县"
        },
        {
          "value": 14,
          "text": "蕉城镇"
        }
      ]
    },
    {
      "value": 205,
      "text": "潮州",
      "children": [
        {
          "value": 1,
          "text": "湘桥区"
        },
        {
          "value": 2,
          "text": "潮安县"
        },
        {
          "value": 3,
          "text": "庵埠镇"
        },
        {
          "value": 4,
          "text": "饶平县"
        },
        {
          "value": 5,
          "text": "黄冈镇"
        }
      ]
    },
    {
      "value": 206,
      "text": "汕头",
      "children": [
        {
          "value": 1,
          "text": "金平区"
        },
        {
          "value": 2,
          "text": "濠江区"
        },
        {
          "value": 3,
          "text": "龙湖区"
        },
        {
          "value": 4,
          "text": "潮阳区"
        },
        {
          "value": 5,
          "text": "潮南区"
        },
        {
          "value": 6,
          "text": "澄海区"
        },
        {
          "value": 7,
          "text": "南澳县"
        },
        {
          "value": 8,
          "text": "后宅镇"
        }
      ]
    },
    {
      "value": 207,
      "text": "揭阳",
      "children": [
        {
          "value": 1,
          "text": "榕城区"
        },
        {
          "value": 2,
          "text": "普宁"
        },
        {
          "value": 3,
          "text": "揭东县"
        },
        {
          "value": 4,
          "text": "曲溪镇"
        },
        {
          "value": 5,
          "text": "揭西县"
        },
        {
          "value": 6,
          "text": "河婆镇"
        },
        {
          "value": 7,
          "text": "惠来县"
        },
        {
          "value": 8,
          "text": "惠城镇"
        }
      ]
    },
    {
      "value": 208,
      "text": "汕尾",
      "children": [
        {
          "value": 1,
          "text": "城区"
        },
        {
          "value": 2,
          "text": "陆丰"
        },
        {
          "value": 3,
          "text": "海丰县"
        },
        {
          "value": 4,
          "text": "海城镇"
        },
        {
          "value": 5,
          "text": "陆河县"
        },
        {
          "value": 6,
          "text": "河田镇"
        }
      ]
    },
    {
      "value": 209,
      "text": "惠州",
      "children": [
        {
          "value": 1,
          "text": "惠城区"
        },
        {
          "value": 2,
          "text": "惠阳区"
        },
        {
          "value": 3,
          "text": "博罗县"
        },
        {
          "value": 4,
          "text": "罗阳镇"
        },
        {
          "value": 5,
          "text": "惠东县"
        },
        {
          "value": 6,
          "text": "龙门县"
        }
      ]
    },
    {
      "value": 210,
      "text": "东莞",
      "children": []
    },
    {
      "value": 211,
      "text": "珠海",
      "children": [
        {
          "value": 1,
          "text": "香洲区"
        },
        {
          "value": 2,
          "text": "斗门区"
        },
        {
          "value": 3,
          "text": "金湾区"
        }
      ]
    },
    {
      "value": 212,
      "text": "中山",
      "children": []
    },
    {
      "value": 213,
      "text": "江门",
      "children": [
        {
          "value": 1,
          "text": "江海区"
        },
        {
          "value": 2,
          "text": "蓬江区"
        },
        {
          "value": 3,
          "text": "新会区"
        },
        {
          "value": 4,
          "text": "恩平"
        },
        {
          "value": 5,
          "text": "台山"
        },
        {
          "value": 6,
          "text": "开平"
        },
        {
          "value": 7,
          "text": "鹤山"
        }
      ]
    },
    {
      "value": 214,
      "text": "佛山",
      "children": [
        {
          "value": 1,
          "text": "禅城区"
        },
        {
          "value": 2,
          "text": "南海区"
        },
        {
          "value": 3,
          "text": "顺德区"
        },
        {
          "value": 4,
          "text": "三水区"
        },
        {
          "value": 5,
          "text": "高明区"
        }
      ]
    },
    {
      "value": 215,
      "text": "肇庆",
      "children": [
        {
          "value": 1,
          "text": "端州区"
        },
        {
          "value": 2,
          "text": "鼎湖区"
        },
        {
          "value": 3,
          "text": "高要"
        },
        {
          "value": 4,
          "text": "四会"
        },
        {
          "value": 5,
          "text": "广宁县"
        },
        {
          "value": 6,
          "text": "南街镇"
        },
        {
          "value": 7,
          "text": "怀集县"
        },
        {
          "value": 8,
          "text": "怀城镇"
        },
        {
          "value": 9,
          "text": "封开县"
        },
        {
          "value": 10,
          "text": "江口镇"
        },
        {
          "value": 11,
          "text": "德庆县"
        }
      ]
    },
    {
      "value": 216,
      "text": "云浮",
      "children": [
        {
          "value": 1,
          "text": "云城区"
        },
        {
          "value": 2,
          "text": "罗定"
        },
        {
          "value": 3,
          "text": "云安县"
        },
        {
          "value": 4,
          "text": "六都镇"
        },
        {
          "value": 5,
          "text": "新兴县"
        },
        {
          "value": 6,
          "text": "新城镇"
        },
        {
          "value": 7,
          "text": "郁南县"
        },
        {
          "value": 8,
          "text": "都城镇"
        }
      ]
    },
    {
      "value": 217,
      "text": "阳江",
      "children": [
        {
          "value": 1,
          "text": "江城区"
        },
        {
          "value": 2,
          "text": "阳春"
        },
        {
          "value": 3,
          "text": "阳西县"
        },
        {
          "value": 4,
          "text": "织镇"
        },
        {
          "value": 5,
          "text": "阳东县"
        },
        {
          "value": 6,
          "text": "东城镇"
        }
      ]
    },
    {
      "value": 218,
      "text": "茂名",
      "children": [
        {
          "value": 1,
          "text": "茂南区"
        },
        {
          "value": 2,
          "text": "茂港区"
        },
        {
          "value": 3,
          "text": "化州"
        },
        {
          "value": 4,
          "text": "信宜"
        },
        {
          "value": 5,
          "text": "高州"
        },
        {
          "value": 6,
          "text": "电白县"
        },
        {
          "value": 7,
          "text": "水东镇"
        }
      ]
    },
    {
      "value": 219,
      "text": "湛江",
      "children": [
        {
          "value": 1,
          "text": "赤坎区"
        },
        {
          "value": 2,
          "text": "霞山区"
        },
        {
          "value": 3,
          "text": "坡头区"
        },
        {
          "value": 4,
          "text": "麻章区"
        },
        {
          "value": 5,
          "text": "吴川"
        },
        {
          "value": 6,
          "text": "廉江"
        },
        {
          "value": 7,
          "text": "雷州"
        },
        {
          "value": 8,
          "text": "遂溪县"
        },
        {
          "value": 9,
          "text": "遂城镇"
        },
        {
          "value": 10,
          "text": "徐闻县"
        },
        {
          "value": 11,
          "text": "撤销广州东山区"
        },
        {
          "value": 12,
          "text": "芳村区"
        },
        {
          "value": 13,
          "text": "设立广州南沙区"
        },
        {
          "value": 14,
          "text": "萝岗区"
        }
      ]
    },
    {
      "value": 220,
      "text": "南宁",
      "children": [
        {
          "value": 1,
          "text": "青秀区"
        },
        {
          "value": 2,
          "text": "兴宁区"
        },
        {
          "value": 3,
          "text": "江南区"
        },
        {
          "value": 4,
          "text": "西乡塘区"
        },
        {
          "value": 5,
          "text": "良庆区"
        },
        {
          "value": 6,
          "text": "邕宁区"
        },
        {
          "value": 7,
          "text": "武鸣县"
        },
        {
          "value": 8,
          "text": "横县"
        },
        {
          "value": 9,
          "text": "宾阳县"
        },
        {
          "value": 10,
          "text": "上林县"
        },
        {
          "value": 11,
          "text": "隆安县"
        },
        {
          "value": 12,
          "text": "马山县"
        }
      ]
    },
    {
      "value": 221,
      "text": "桂林",
      "children": [
        {
          "value": 1,
          "text": "象山区"
        },
        {
          "value": 2,
          "text": "叠彩区"
        },
        {
          "value": 3,
          "text": "秀峰区"
        },
        {
          "value": 4,
          "text": "七星区"
        },
        {
          "value": 5,
          "text": "雁山区"
        },
        {
          "value": 6,
          "text": "阳朔县"
        },
        {
          "value": 7,
          "text": "阳朔镇"
        },
        {
          "value": 8,
          "text": "临桂县"
        },
        {
          "value": 9,
          "text": "临桂镇"
        },
        {
          "value": 10,
          "text": "灵川县"
        },
        {
          "value": 11,
          "text": "灵川镇"
        },
        {
          "value": 12,
          "text": "全州县"
        },
        {
          "value": 13,
          "text": "全州镇"
        },
        {
          "value": 14,
          "text": "兴安县"
        },
        {
          "value": 15,
          "text": "兴安镇"
        },
        {
          "value": 16,
          "text": "永福县"
        },
        {
          "value": 17,
          "text": "永福镇"
        },
        {
          "value": 18,
          "text": "灌阳县"
        },
        {
          "value": 19,
          "text": "灌阳镇"
        },
        {
          "value": 20,
          "text": "资源县"
        },
        {
          "value": 21,
          "text": "资源镇"
        },
        {
          "value": 22,
          "text": "平乐县"
        },
        {
          "value": 23,
          "text": "平乐镇"
        },
        {
          "value": 24,
          "text": "荔浦县"
        },
        {
          "value": 25,
          "text": "荔城镇"
        },
        {
          "value": 26,
          "text": "龙胜各族自治县"
        },
        {
          "value": 27,
          "text": "龙胜镇"
        },
        {
          "value": 28,
          "text": "恭城瑶族自治县"
        },
        {
          "value": 29,
          "text": "恭城镇"
        }
      ]
    },
    {
      "value": 222,
      "text": "柳州",
      "children": [
        {
          "value": 1,
          "text": "城中区"
        },
        {
          "value": 2,
          "text": "鱼峰区"
        },
        {
          "value": 3,
          "text": "柳南区"
        },
        {
          "value": 4,
          "text": "柳北区"
        },
        {
          "value": 5,
          "text": "柳江县"
        },
        {
          "value": 6,
          "text": "拉堡镇"
        },
        {
          "value": 7,
          "text": "柳城县"
        },
        {
          "value": 8,
          "text": "大埔镇"
        },
        {
          "value": 9,
          "text": "鹿寨县"
        },
        {
          "value": 10,
          "text": "鹿寨镇"
        },
        {
          "value": 11,
          "text": "融安县"
        },
        {
          "value": 12,
          "text": "长安镇"
        },
        {
          "value": 13,
          "text": "三江侗族自治县"
        },
        {
          "value": 14,
          "text": "古宜镇"
        },
        {
          "value": 15,
          "text": "融水苗族自治县"
        },
        {
          "value": 16,
          "text": "融水镇"
        }
      ]
    },
    {
      "value": 223,
      "text": "梧州",
      "children": [
        {
          "value": 1,
          "text": "万秀区"
        },
        {
          "value": 2,
          "text": "蝶山区"
        },
        {
          "value": 3,
          "text": "长洲区"
        },
        {
          "value": 4,
          "text": "岑溪"
        },
        {
          "value": 5,
          "text": "苍梧县"
        },
        {
          "value": 6,
          "text": "龙圩镇"
        },
        {
          "value": 7,
          "text": "藤县"
        },
        {
          "value": 8,
          "text": "藤州镇"
        },
        {
          "value": 9,
          "text": "蒙山县"
        },
        {
          "value": 10,
          "text": "蒙山镇"
        }
      ]
    },
    {
      "value": 224,
      "text": "贵港",
      "children": [
        {
          "value": 1,
          "text": "港北区"
        },
        {
          "value": 2,
          "text": "港南区"
        },
        {
          "value": 3,
          "text": "覃塘区"
        },
        {
          "value": 4,
          "text": "桂平"
        },
        {
          "value": 5,
          "text": "平南县"
        },
        {
          "value": 6,
          "text": "平南镇"
        }
      ]
    },
    {
      "value": 225,
      "text": "玉林",
      "children": [
        {
          "value": 1,
          "text": "玉州区"
        },
        {
          "value": 2,
          "text": "北流"
        },
        {
          "value": 3,
          "text": "兴业县"
        },
        {
          "value": 4,
          "text": "石南镇"
        },
        {
          "value": 5,
          "text": "容县"
        },
        {
          "value": 6,
          "text": "容州镇"
        },
        {
          "value": 7,
          "text": "陆川县"
        },
        {
          "value": 8,
          "text": "陆城镇"
        },
        {
          "value": 9,
          "text": "博白县"
        },
        {
          "value": 10,
          "text": "博白镇"
        }
      ]
    },
    {
      "value": 226,
      "text": "钦州",
      "children": [
        {
          "value": 1,
          "text": "钦南区"
        },
        {
          "value": 2,
          "text": "钦北区"
        },
        {
          "value": 3,
          "text": "灵山县"
        },
        {
          "value": 4,
          "text": "灵城镇"
        },
        {
          "value": 5,
          "text": "浦北县"
        },
        {
          "value": 6,
          "text": "小江镇"
        }
      ]
    },
    {
      "value": 227,
      "text": "北海",
      "children": [
        {
          "value": 1,
          "text": "海城区"
        },
        {
          "value": 2,
          "text": "银海区"
        },
        {
          "value": 3,
          "text": "铁山港区"
        },
        {
          "value": 4,
          "text": "合浦县"
        },
        {
          "value": 5,
          "text": "廉州镇"
        }
      ]
    },
    {
      "value": 228,
      "text": "防城港",
      "children": [
        {
          "value": 1,
          "text": "港口区"
        },
        {
          "value": 2,
          "text": "防城区"
        },
        {
          "value": 3,
          "text": "东兴"
        },
        {
          "value": 4,
          "text": "上思县"
        },
        {
          "value": 5,
          "text": "思阳镇"
        }
      ]
    },
    {
      "value": 229,
      "text": "崇左",
      "children": [
        {
          "value": 1,
          "text": "江州区"
        },
        {
          "value": 2,
          "text": "凭祥"
        },
        {
          "value": 3,
          "text": "扶绥县"
        },
        {
          "value": 4,
          "text": "新宁镇"
        },
        {
          "value": 5,
          "text": "大新县"
        },
        {
          "value": 6,
          "text": "桃城镇"
        },
        {
          "value": 7,
          "text": "天等县"
        },
        {
          "value": 8,
          "text": "天等镇"
        },
        {
          "value": 9,
          "text": "宁明县"
        },
        {
          "value": 10,
          "text": "城中镇"
        },
        {
          "value": 11,
          "text": "龙州县"
        },
        {
          "value": 12,
          "text": "龙州镇"
        }
      ]
    },
    {
      "value": 230,
      "text": "百色",
      "children": [
        {
          "value": 1,
          "text": "右江区"
        },
        {
          "value": 2,
          "text": "田阳县"
        },
        {
          "value": 3,
          "text": "田州镇"
        },
        {
          "value": 4,
          "text": "田东县"
        },
        {
          "value": 5,
          "text": "平马镇"
        },
        {
          "value": 6,
          "text": "平果县"
        },
        {
          "value": 7,
          "text": "马头镇"
        },
        {
          "value": 8,
          "text": "德保县"
        },
        {
          "value": 9,
          "text": "城关镇"
        },
        {
          "value": 10,
          "text": "靖西县"
        },
        {
          "value": 11,
          "text": "新靖镇"
        },
        {
          "value": 12,
          "text": "那坡县"
        },
        {
          "value": 13,
          "text": "城厢镇"
        },
        {
          "value": 14,
          "text": "凌云县"
        },
        {
          "value": 15,
          "text": "泗城镇"
        },
        {
          "value": 16,
          "text": "乐业县"
        },
        {
          "value": 17,
          "text": "同乐镇"
        },
        {
          "value": 18,
          "text": "西林县"
        },
        {
          "value": 19,
          "text": "八达镇"
        },
        {
          "value": 20,
          "text": "田林县"
        },
        {
          "value": 21,
          "text": "乐里镇"
        },
        {
          "value": 22,
          "text": "隆林各族自治县"
        },
        {
          "value": 23,
          "text": "新州镇"
        }
      ]
    },
    {
      "value": 231,
      "text": "河池",
      "children": [
        {
          "value": 1,
          "text": "金城江区"
        },
        {
          "value": 2,
          "text": "宜州"
        },
        {
          "value": 3,
          "text": "南丹县"
        },
        {
          "value": 4,
          "text": "城关镇"
        },
        {
          "value": 5,
          "text": "天峨县"
        },
        {
          "value": 6,
          "text": "六排镇"
        },
        {
          "value": 7,
          "text": "凤山县"
        },
        {
          "value": 8,
          "text": "凤城镇"
        },
        {
          "value": 9,
          "text": "东兰县"
        },
        {
          "value": 10,
          "text": "东兰镇"
        },
        {
          "value": 11,
          "text": "巴马瑶族自治县"
        },
        {
          "value": 12,
          "text": "巴马镇"
        },
        {
          "value": 13,
          "text": "都安瑶族自治县"
        },
        {
          "value": 14,
          "text": "安阳镇"
        },
        {
          "value": 15,
          "text": "大化瑶族自治县"
        },
        {
          "value": 16,
          "text": "大化镇"
        },
        {
          "value": 17,
          "text": "罗城仫佬族自治县"
        },
        {
          "value": 18,
          "text": "东门镇"
        },
        {
          "value": 19,
          "text": "环江毛南族自治县"
        },
        {
          "value": 20,
          "text": "思恩镇"
        }
      ]
    },
    {
      "value": 232,
      "text": "来宾",
      "children": [
        {
          "value": 1,
          "text": "兴宾区"
        },
        {
          "value": 2,
          "text": "合山"
        },
        {
          "value": 3,
          "text": "象州县"
        },
        {
          "value": 4,
          "text": "象州镇"
        },
        {
          "value": 5,
          "text": "武宣县"
        },
        {
          "value": 6,
          "text": "武宣镇"
        },
        {
          "value": 7,
          "text": "忻城县"
        },
        {
          "value": 8,
          "text": "城关镇"
        },
        {
          "value": 9,
          "text": "金秀瑶族自治县"
        },
        {
          "value": 10,
          "text": "金秀镇"
        }
      ]
    },
    {
      "value": 233,
      "text": "贺州",
      "children": [
        {
          "value": 1,
          "text": "八步区"
        },
        {
          "value": 2,
          "text": "昭平县"
        },
        {
          "value": 3,
          "text": "昭平镇"
        },
        {
          "value": 4,
          "text": "钟山县"
        },
        {
          "value": 5,
          "text": "钟山镇"
        },
        {
          "value": 6,
          "text": "富川瑶族自治县"
        },
        {
          "value": 7,
          "text": "富阳镇"
        }
      ]
    },
    {
      "value": 234,
      "text": "海口",
      "children": [
        {
          "value": 1,
          "text": "龙华区"
        },
        {
          "value": 2,
          "text": "秀英区"
        },
        {
          "value": 3,
          "text": "琼山区"
        },
        {
          "value": 4,
          "text": "美兰区"
        }
      ]
    },
    {
      "value": 235,
      "text": "三亚",
      "children": []
    },
    {
      "value": 236,
      "text": "省直辖行政单位",
      "children": [
        {
          "value": 1,
          "text": "文昌"
        },
        {
          "value": 2,
          "text": "琼海"
        },
        {
          "value": 3,
          "text": "万宁"
        },
        {
          "value": 4,
          "text": "五指山"
        },
        {
          "value": 5,
          "text": "东方"
        },
        {
          "value": 6,
          "text": "儋州"
        },
        {
          "value": 7,
          "text": "临高县"
        },
        {
          "value": 8,
          "text": "临城镇"
        },
        {
          "value": 9,
          "text": "澄迈县"
        },
        {
          "value": 10,
          "text": "金江镇"
        },
        {
          "value": 11,
          "text": "定安县"
        },
        {
          "value": 12,
          "text": "定城镇"
        },
        {
          "value": 13,
          "text": "屯昌县"
        },
        {
          "value": 14,
          "text": "屯城镇"
        },
        {
          "value": 15,
          "text": "昌江黎族自治县"
        },
        {
          "value": 16,
          "text": "石碌镇"
        },
        {
          "value": 17,
          "text": "白沙黎族自治县"
        },
        {
          "value": 18,
          "text": "牙叉镇"
        },
        {
          "value": 19,
          "text": "琼中黎族苗族自治县"
        },
        {
          "value": 20,
          "text": "营根镇"
        },
        {
          "value": 21,
          "text": "陵水黎族自治县"
        },
        {
          "value": 22,
          "text": "椰林镇"
        },
        {
          "value": 23,
          "text": "保亭黎族苗族自治县"
        },
        {
          "value": 24,
          "text": "保城镇"
        },
        {
          "value": 25,
          "text": "乐东黎族自治县"
        },
        {
          "value": 26,
          "text": "抱由镇"
        }
      ]
    },
    {
      "value": 237,
      "text": "成都",
      "children": [
        {
          "value": 1,
          "text": "青羊区"
        },
        {
          "value": 2,
          "text": "锦江区"
        },
        {
          "value": 3,
          "text": "金牛区"
        },
        {
          "value": 4,
          "text": "武侯区"
        },
        {
          "value": 5,
          "text": "成华区"
        },
        {
          "value": 6,
          "text": "龙泉驿区"
        },
        {
          "value": 7,
          "text": "青白江区"
        },
        {
          "value": 8,
          "text": "新都区"
        },
        {
          "value": 9,
          "text": "温江区"
        },
        {
          "value": 10,
          "text": "都江堰"
        },
        {
          "value": 11,
          "text": "彭州"
        },
        {
          "value": 12,
          "text": "邛崃"
        },
        {
          "value": 13,
          "text": "崇州"
        },
        {
          "value": 14,
          "text": "金堂县"
        },
        {
          "value": 15,
          "text": "赵镇"
        },
        {
          "value": 16,
          "text": "双流县"
        },
        {
          "value": 17,
          "text": "郫县"
        },
        {
          "value": 18,
          "text": "郫筒镇"
        },
        {
          "value": 19,
          "text": "大邑县"
        },
        {
          "value": 20,
          "text": "晋原镇"
        },
        {
          "value": 21,
          "text": "蒲江县"
        },
        {
          "value": 22,
          "text": "鹤山镇"
        },
        {
          "value": 23,
          "text": "新津县"
        },
        {
          "value": 24,
          "text": "五津镇"
        }
      ]
    },
    {
      "value": 238,
      "text": "广元",
      "children": [
        {
          "value": 1,
          "text": "中区"
        },
        {
          "value": 2,
          "text": "元坝区"
        },
        {
          "value": 3,
          "text": "朝天区"
        },
        {
          "value": 4,
          "text": "旺苍县"
        },
        {
          "value": 5,
          "text": "东河镇"
        },
        {
          "value": 6,
          "text": "青川县"
        },
        {
          "value": 7,
          "text": "乔庄镇"
        },
        {
          "value": 8,
          "text": "剑阁县"
        },
        {
          "value": 9,
          "text": "下寺镇"
        },
        {
          "value": 10,
          "text": "苍溪县"
        },
        {
          "value": 11,
          "text": "陵江镇"
        }
      ]
    },
    {
      "value": 239,
      "text": "绵阳",
      "children": [
        {
          "value": 1,
          "text": "涪城区"
        },
        {
          "value": 2,
          "text": "游仙区"
        },
        {
          "value": 3,
          "text": "江油"
        },
        {
          "value": 4,
          "text": "三台县"
        },
        {
          "value": 5,
          "text": "潼川镇"
        },
        {
          "value": 6,
          "text": "盐亭县"
        },
        {
          "value": 7,
          "text": "云溪镇"
        },
        {
          "value": 8,
          "text": "安县"
        },
        {
          "value": 9,
          "text": "花荄镇"
        },
        {
          "value": 10,
          "text": "梓潼县"
        },
        {
          "value": 11,
          "text": "文昌镇"
        },
        {
          "value": 12,
          "text": "北川羌族自治县"
        },
        {
          "value": 13,
          "text": "曲山镇"
        },
        {
          "value": 14,
          "text": "平武县"
        },
        {
          "value": 15,
          "text": "龙安镇"
        }
      ]
    },
    {
      "value": 240,
      "text": "德阳",
      "children": [
        {
          "value": 1,
          "text": "旌阳区"
        },
        {
          "value": 2,
          "text": "什邡"
        },
        {
          "value": 3,
          "text": "广汉"
        },
        {
          "value": 4,
          "text": "绵竹"
        },
        {
          "value": 5,
          "text": "罗江县"
        },
        {
          "value": 6,
          "text": "罗江镇"
        },
        {
          "value": 7,
          "text": "中江县"
        },
        {
          "value": 8,
          "text": "凯江镇"
        }
      ]
    },
    {
      "value": 241,
      "text": "南充",
      "children": [
        {
          "value": 1,
          "text": "顺庆区"
        },
        {
          "value": 2,
          "text": "高坪区"
        },
        {
          "value": 3,
          "text": "嘉陵区"
        },
        {
          "value": 4,
          "text": "阆中"
        },
        {
          "value": 5,
          "text": "南部县"
        },
        {
          "value": 6,
          "text": "南隆镇"
        },
        {
          "value": 7,
          "text": "营山县"
        },
        {
          "value": 8,
          "text": "朗池镇"
        },
        {
          "value": 9,
          "text": "蓬安县"
        },
        {
          "value": 10,
          "text": "周口镇"
        },
        {
          "value": 11,
          "text": "仪陇县"
        },
        {
          "value": 12,
          "text": "新政镇"
        },
        {
          "value": 13,
          "text": "西充县"
        },
        {
          "value": 14,
          "text": "晋城镇"
        }
      ]
    },
    {
      "value": 242,
      "text": "广安",
      "children": [
        {
          "value": 1,
          "text": "广安区"
        },
        {
          "value": 2,
          "text": "华蓥"
        },
        {
          "value": 3,
          "text": "岳池县"
        },
        {
          "value": 4,
          "text": "九龙镇"
        },
        {
          "value": 5,
          "text": "武胜县"
        },
        {
          "value": 6,
          "text": "沿口镇"
        },
        {
          "value": 7,
          "text": "邻水县"
        },
        {
          "value": 8,
          "text": "鼎屏镇"
        }
      ]
    },
    {
      "value": 243,
      "text": "遂宁",
      "children": [
        {
          "value": 1,
          "text": "船山区"
        },
        {
          "value": 2,
          "text": "安居区"
        },
        {
          "value": 3,
          "text": "蓬溪县"
        },
        {
          "value": 4,
          "text": "赤城镇"
        },
        {
          "value": 5,
          "text": "射洪县"
        },
        {
          "value": 6,
          "text": "太和镇"
        },
        {
          "value": 7,
          "text": "大英县"
        },
        {
          "value": 8,
          "text": "蓬莱镇"
        }
      ]
    },
    {
      "value": 244,
      "text": "内江",
      "children": [
        {
          "value": 1,
          "text": "中区"
        },
        {
          "value": 2,
          "text": "东兴区"
        },
        {
          "value": 3,
          "text": "威远县"
        },
        {
          "value": 4,
          "text": "严陵镇"
        },
        {
          "value": 5,
          "text": "资中县"
        },
        {
          "value": 6,
          "text": "重龙镇"
        },
        {
          "value": 7,
          "text": "隆昌县"
        },
        {
          "value": 8,
          "text": "金鹅镇"
        }
      ]
    },
    {
      "value": 245,
      "text": "乐山",
      "children": [
        {
          "value": 1,
          "text": "中区"
        },
        {
          "value": 2,
          "text": "沙湾区"
        },
        {
          "value": 3,
          "text": "五通桥区"
        },
        {
          "value": 4,
          "text": "金口河区"
        },
        {
          "value": 5,
          "text": "峨眉山"
        },
        {
          "value": 6,
          "text": "犍为县"
        },
        {
          "value": 7,
          "text": "玉津镇"
        },
        {
          "value": 8,
          "text": "井研县"
        },
        {
          "value": 9,
          "text": "研城镇"
        },
        {
          "value": 10,
          "text": "夹江县"
        },
        {
          "value": 11,
          "text": "漹城镇"
        },
        {
          "value": 12,
          "text": "沐川县"
        },
        {
          "value": 13,
          "text": "沐溪镇"
        },
        {
          "value": 14,
          "text": "峨边彝族自治县"
        },
        {
          "value": 15,
          "text": "沙坪镇"
        },
        {
          "value": 16,
          "text": "马边彝族自治县"
        },
        {
          "value": 17,
          "text": "民建镇"
        }
      ]
    },
    {
      "value": 246,
      "text": "自贡",
      "children": [
        {
          "value": 1,
          "text": "自流井区"
        },
        {
          "value": 2,
          "text": "大安区"
        },
        {
          "value": 3,
          "text": "贡井区"
        },
        {
          "value": 4,
          "text": "沿滩区"
        },
        {
          "value": 5,
          "text": "荣县"
        },
        {
          "value": 6,
          "text": "旭阳镇"
        },
        {
          "value": 7,
          "text": "富顺县"
        },
        {
          "value": 8,
          "text": "富世镇"
        }
      ]
    },
    {
      "value": 247,
      "text": "泸州",
      "children": [
        {
          "value": 1,
          "text": "江阳区"
        },
        {
          "value": 2,
          "text": "纳溪区"
        },
        {
          "value": 3,
          "text": "龙马潭区"
        },
        {
          "value": 4,
          "text": "泸县"
        },
        {
          "value": 5,
          "text": "福集镇"
        },
        {
          "value": 6,
          "text": "合江县"
        },
        {
          "value": 7,
          "text": "合江镇"
        },
        {
          "value": 8,
          "text": "叙永县"
        },
        {
          "value": 9,
          "text": "叙永镇"
        },
        {
          "value": 10,
          "text": "古蔺县"
        },
        {
          "value": 11,
          "text": "古蔺镇"
        }
      ]
    },
    {
      "value": 248,
      "text": "宜宾",
      "children": [
        {
          "value": 1,
          "text": "翠屏区"
        },
        {
          "value": 2,
          "text": "宜宾县"
        },
        {
          "value": 3,
          "text": "柏溪镇"
        },
        {
          "value": 4,
          "text": "南溪县"
        },
        {
          "value": 5,
          "text": "南溪镇"
        },
        {
          "value": 6,
          "text": "江安县"
        },
        {
          "value": 7,
          "text": "江安镇"
        },
        {
          "value": 8,
          "text": "长宁县"
        },
        {
          "value": 9,
          "text": "长宁镇"
        },
        {
          "value": 10,
          "text": "高县"
        },
        {
          "value": 11,
          "text": "庆符镇"
        },
        {
          "value": 12,
          "text": "筠连县"
        },
        {
          "value": 13,
          "text": "筠连镇"
        },
        {
          "value": 14,
          "text": "珙县"
        },
        {
          "value": 15,
          "text": "巡场镇"
        },
        {
          "value": 16,
          "text": "兴文县"
        },
        {
          "value": 17,
          "text": "中城镇"
        },
        {
          "value": 18,
          "text": "屏山县"
        },
        {
          "value": 19,
          "text": "屏山镇"
        }
      ]
    },
    {
      "value": 249,
      "text": "攀枝花",
      "children": [
        {
          "value": 1,
          "text": "东区"
        },
        {
          "value": 2,
          "text": "西区"
        },
        {
          "value": 3,
          "text": "仁和区"
        },
        {
          "value": 4,
          "text": "米易县"
        },
        {
          "value": 5,
          "text": "攀莲镇"
        },
        {
          "value": 6,
          "text": "盐边县"
        },
        {
          "value": 7,
          "text": "桐子林镇"
        }
      ]
    },
    {
      "value": 250,
      "text": "巴中",
      "children": [
        {
          "value": 1,
          "text": "巴州区"
        },
        {
          "value": 2,
          "text": "通江县"
        },
        {
          "value": 3,
          "text": "诺江镇"
        },
        {
          "value": 4,
          "text": "南江县"
        },
        {
          "value": 5,
          "text": "南江镇"
        },
        {
          "value": 6,
          "text": "平昌县"
        },
        {
          "value": 7,
          "text": "江口镇"
        }
      ]
    },
    {
      "value": 251,
      "text": "达州",
      "children": [
        {
          "value": 1,
          "text": "通川区"
        },
        {
          "value": 2,
          "text": "万源"
        },
        {
          "value": 3,
          "text": "达县"
        },
        {
          "value": 4,
          "text": "南外镇"
        },
        {
          "value": 5,
          "text": "宣汉县"
        },
        {
          "value": 6,
          "text": "东乡镇"
        },
        {
          "value": 7,
          "text": "开江县"
        },
        {
          "value": 8,
          "text": "新宁镇"
        },
        {
          "value": 9,
          "text": "大竹县"
        },
        {
          "value": 10,
          "text": "竹阳镇"
        },
        {
          "value": 11,
          "text": "渠县"
        },
        {
          "value": 12,
          "text": "渠江镇"
        }
      ]
    },
    {
      "value": 252,
      "text": "资阳",
      "children": [
        {
          "value": 1,
          "text": "雁江区"
        },
        {
          "value": 2,
          "text": "简阳"
        },
        {
          "value": 3,
          "text": "乐至县"
        },
        {
          "value": 4,
          "text": "天池镇"
        },
        {
          "value": 5,
          "text": "安岳县"
        },
        {
          "value": 6,
          "text": "岳阳镇"
        }
      ]
    },
    {
      "value": 253,
      "text": "眉山",
      "children": [
        {
          "value": 1,
          "text": "东坡区"
        },
        {
          "value": 2,
          "text": "仁寿县"
        },
        {
          "value": 3,
          "text": "文林镇"
        },
        {
          "value": 4,
          "text": "彭山县"
        },
        {
          "value": 5,
          "text": "凤鸣镇"
        },
        {
          "value": 6,
          "text": "洪雅县"
        },
        {
          "value": 7,
          "text": "洪川镇"
        },
        {
          "value": 8,
          "text": "丹棱县"
        },
        {
          "value": 9,
          "text": "丹棱镇"
        },
        {
          "value": 10,
          "text": "青神县"
        },
        {
          "value": 11,
          "text": "城厢镇"
        }
      ]
    },
    {
      "value": 254,
      "text": "雅安",
      "children": [
        {
          "value": 1,
          "text": "雨城区"
        },
        {
          "value": 2,
          "text": "名山县"
        },
        {
          "value": 3,
          "text": "蒙阳镇"
        },
        {
          "value": 4,
          "text": "荥经县"
        },
        {
          "value": 5,
          "text": "严道镇"
        },
        {
          "value": 6,
          "text": "汉源县"
        },
        {
          "value": 7,
          "text": "富林镇"
        },
        {
          "value": 8,
          "text": "石棉县"
        },
        {
          "value": 9,
          "text": "新棉镇"
        },
        {
          "value": 10,
          "text": "天全县"
        },
        {
          "value": 11,
          "text": "城厢镇"
        },
        {
          "value": 12,
          "text": "芦山县"
        },
        {
          "value": 13,
          "text": "芦阳镇"
        },
        {
          "value": 14,
          "text": "宝兴县"
        },
        {
          "value": 15,
          "text": "穆坪镇"
        }
      ]
    },
    {
      "value": 255,
      "text": "阿坝州",
      "children": [
        {
          "value": 1,
          "text": "马尔康县"
        },
        {
          "value": 2,
          "text": "马尔康镇"
        },
        {
          "value": 3,
          "text": "汶川县"
        },
        {
          "value": 4,
          "text": "威州镇"
        },
        {
          "value": 5,
          "text": "理县"
        },
        {
          "value": 6,
          "text": "杂谷脑镇"
        },
        {
          "value": 7,
          "text": "茂县"
        },
        {
          "value": 8,
          "text": "凤仪镇"
        },
        {
          "value": 9,
          "text": "松潘县"
        },
        {
          "value": 10,
          "text": "进安镇"
        },
        {
          "value": 11,
          "text": "九寨沟县"
        },
        {
          "value": 12,
          "text": "永乐镇"
        },
        {
          "value": 13,
          "text": "金川县"
        },
        {
          "value": 14,
          "text": "金川镇"
        },
        {
          "value": 15,
          "text": "小金县"
        },
        {
          "value": 16,
          "text": "美兴镇"
        },
        {
          "value": 17,
          "text": "黑水县"
        },
        {
          "value": 18,
          "text": "芦花镇"
        },
        {
          "value": 19,
          "text": "壤塘县"
        },
        {
          "value": 20,
          "text": "壤柯镇"
        },
        {
          "value": 21,
          "text": "阿坝县"
        },
        {
          "value": 22,
          "text": "阿坝镇"
        },
        {
          "value": 23,
          "text": "若尔盖县"
        },
        {
          "value": 24,
          "text": "达扎寺镇"
        },
        {
          "value": 25,
          "text": "红原县"
        },
        {
          "value": 26,
          "text": "邛溪镇"
        }
      ]
    },
    {
      "value": 256,
      "text": "甘孜州",
      "children": [
        {
          "value": 1,
          "text": "康定县"
        },
        {
          "value": 2,
          "text": "炉城镇"
        },
        {
          "value": 3,
          "text": "泸定县"
        },
        {
          "value": 4,
          "text": "泸桥镇"
        },
        {
          "value": 5,
          "text": "丹巴县"
        },
        {
          "value": 6,
          "text": "章谷镇"
        },
        {
          "value": 7,
          "text": "九龙县"
        },
        {
          "value": 8,
          "text": "呷尔镇"
        },
        {
          "value": 9,
          "text": "雅江县"
        },
        {
          "value": 10,
          "text": "河口镇"
        },
        {
          "value": 11,
          "text": "道孚县"
        },
        {
          "value": 12,
          "text": "鲜水镇"
        },
        {
          "value": 13,
          "text": "炉霍县"
        },
        {
          "value": 14,
          "text": "新都镇"
        },
        {
          "value": 15,
          "text": "甘孜县"
        },
        {
          "value": 16,
          "text": "甘孜镇"
        },
        {
          "value": 17,
          "text": "新龙县"
        },
        {
          "value": 18,
          "text": "茹龙镇"
        },
        {
          "value": 19,
          "text": "德格县"
        },
        {
          "value": 20,
          "text": "更庆镇"
        },
        {
          "value": 21,
          "text": "白玉县"
        },
        {
          "value": 22,
          "text": "建设镇"
        },
        {
          "value": 23,
          "text": "石渠县"
        },
        {
          "value": 24,
          "text": "尼呷镇"
        },
        {
          "value": 25,
          "text": "色达县"
        },
        {
          "value": 26,
          "text": "色柯镇"
        },
        {
          "value": 27,
          "text": "理塘县"
        },
        {
          "value": 28,
          "text": "高城镇"
        },
        {
          "value": 29,
          "text": "巴塘县"
        },
        {
          "value": 30,
          "text": "夏邛镇"
        },
        {
          "value": 31,
          "text": "乡城县"
        },
        {
          "value": 32,
          "text": "桑披镇"
        },
        {
          "value": 33,
          "text": "稻城县"
        },
        {
          "value": 34,
          "text": "金珠镇"
        },
        {
          "value": 35,
          "text": "得荣县"
        },
        {
          "value": 36,
          "text": "松麦镇"
        }
      ]
    },
    {
      "value": 257,
      "text": "凉山州",
      "children": [
        {
          "value": 1,
          "text": "西昌"
        },
        {
          "value": 2,
          "text": "盐源县"
        },
        {
          "value": 3,
          "text": "盐井镇"
        },
        {
          "value": 4,
          "text": "德昌县"
        },
        {
          "value": 5,
          "text": "德州镇"
        },
        {
          "value": 6,
          "text": "会理县"
        },
        {
          "value": 7,
          "text": "城关镇"
        },
        {
          "value": 8,
          "text": "会东县"
        },
        {
          "value": 9,
          "text": "会东镇"
        },
        {
          "value": 10,
          "text": "宁南县"
        },
        {
          "value": 11,
          "text": "披砂镇"
        },
        {
          "value": 12,
          "text": "普格县"
        },
        {
          "value": 13,
          "text": "普基镇"
        },
        {
          "value": 14,
          "text": "布拖县"
        },
        {
          "value": 15,
          "text": "特木里镇"
        },
        {
          "value": 16,
          "text": "金阳县"
        },
        {
          "value": 17,
          "text": "天地坝镇"
        },
        {
          "value": 18,
          "text": "昭觉县"
        },
        {
          "value": 19,
          "text": "新城镇"
        },
        {
          "value": 20,
          "text": "喜德县"
        },
        {
          "value": 21,
          "text": "光明镇"
        },
        {
          "value": 22,
          "text": "冕宁县"
        },
        {
          "value": 23,
          "text": "城厢镇"
        },
        {
          "value": 24,
          "text": "越西县"
        },
        {
          "value": 25,
          "text": "越城镇"
        },
        {
          "value": 26,
          "text": "甘洛县"
        },
        {
          "value": 27,
          "text": "新坝镇"
        },
        {
          "value": 28,
          "text": "美姑县"
        },
        {
          "value": 29,
          "text": "巴普镇"
        },
        {
          "value": 30,
          "text": "雷波县"
        },
        {
          "value": 31,
          "text": "锦城镇"
        },
        {
          "value": 32,
          "text": "木里藏族自治县"
        },
        {
          "value": 33,
          "text": "乔瓦镇"
        }
      ]
    },
    {
      "value": 258,
      "text": "贵阳",
      "children": [
        {
          "value": 1,
          "text": "乌当区"
        },
        {
          "value": 2,
          "text": "南明区"
        },
        {
          "value": 3,
          "text": "云岩区"
        },
        {
          "value": 4,
          "text": "花溪区"
        },
        {
          "value": 5,
          "text": "白云区"
        },
        {
          "value": 6,
          "text": "小河区"
        },
        {
          "value": 7,
          "text": "清镇"
        },
        {
          "value": 8,
          "text": "开阳县"
        },
        {
          "value": 9,
          "text": "城关镇"
        },
        {
          "value": 10,
          "text": "修文县"
        },
        {
          "value": 11,
          "text": "龙场镇"
        },
        {
          "value": 12,
          "text": "息烽县"
        },
        {
          "value": 13,
          "text": "永靖镇"
        }
      ]
    },
    {
      "value": 259,
      "text": "六盘水",
      "children": [
        {
          "value": 1,
          "text": "钟山区"
        },
        {
          "value": 2,
          "text": "盘县"
        },
        {
          "value": 3,
          "text": "红果镇"
        },
        {
          "value": 4,
          "text": "六枝特区"
        },
        {
          "value": 5,
          "text": "平寨镇"
        },
        {
          "value": 6,
          "text": "水城县"
        }
      ]
    },
    {
      "value": 260,
      "text": "遵义",
      "children": [
        {
          "value": 1,
          "text": "红花岗区"
        },
        {
          "value": 2,
          "text": "汇川区"
        },
        {
          "value": 3,
          "text": "赤水"
        },
        {
          "value": 4,
          "text": "仁怀"
        },
        {
          "value": 5,
          "text": "遵义县"
        },
        {
          "value": 6,
          "text": "南白镇"
        },
        {
          "value": 7,
          "text": "桐梓县"
        },
        {
          "value": 8,
          "text": "娄山关镇"
        },
        {
          "value": 9,
          "text": "绥阳县"
        },
        {
          "value": 10,
          "text": "洋川镇"
        },
        {
          "value": 11,
          "text": "正安县"
        },
        {
          "value": 12,
          "text": "凤仪镇"
        },
        {
          "value": 13,
          "text": "凤冈县"
        },
        {
          "value": 14,
          "text": "龙泉镇"
        },
        {
          "value": 15,
          "text": "湄潭县"
        },
        {
          "value": 16,
          "text": "湄江镇"
        },
        {
          "value": 17,
          "text": "余庆县"
        },
        {
          "value": 18,
          "text": "白泥镇"
        },
        {
          "value": 19,
          "text": "习水县"
        },
        {
          "value": 20,
          "text": "东皇镇"
        },
        {
          "value": 21,
          "text": "道真仡佬族苗族自治县"
        },
        {
          "value": 22,
          "text": "玉溪镇"
        },
        {
          "value": 23,
          "text": "务川仡佬族苗族自治县"
        },
        {
          "value": 24,
          "text": "都濡镇"
        }
      ]
    },
    {
      "value": 261,
      "text": "安顺",
      "children": [
        {
          "value": 1,
          "text": "西秀区"
        },
        {
          "value": 2,
          "text": "平坝县"
        },
        {
          "value": 3,
          "text": "城关镇"
        },
        {
          "value": 4,
          "text": "普定县"
        },
        {
          "value": 5,
          "text": "城关镇"
        },
        {
          "value": 6,
          "text": "关岭布依族苗族自治县"
        },
        {
          "value": 7,
          "text": "关索镇"
        },
        {
          "value": 8,
          "text": "镇宁布依族苗族自治县"
        },
        {
          "value": 9,
          "text": "城关镇"
        },
        {
          "value": 10,
          "text": "紫云苗族布依族自治县"
        },
        {
          "value": 11,
          "text": "松山镇"
        }
      ]
    },
    {
      "value": 262,
      "text": "毕节地区",
      "children": [
        {
          "value": 1,
          "text": "毕节"
        },
        {
          "value": 2,
          "text": "大方县"
        },
        {
          "value": 3,
          "text": "大方镇"
        },
        {
          "value": 4,
          "text": "黔西县"
        },
        {
          "value": 5,
          "text": "城关镇"
        },
        {
          "value": 6,
          "text": "金沙县"
        },
        {
          "value": 7,
          "text": "城关镇"
        },
        {
          "value": 8,
          "text": "织金县"
        },
        {
          "value": 9,
          "text": "城关镇"
        },
        {
          "value": 10,
          "text": "纳雍县"
        },
        {
          "value": 11,
          "text": "雍熙镇"
        },
        {
          "value": 12,
          "text": "赫章县"
        },
        {
          "value": 13,
          "text": "城关镇"
        },
        {
          "value": 14,
          "text": "威宁彝族回族苗族自治县"
        },
        {
          "value": 15,
          "text": "草海镇"
        }
      ]
    },
    {
      "value": 263,
      "text": "铜仁地区",
      "children": [
        {
          "value": 1,
          "text": "铜仁"
        },
        {
          "value": 2,
          "text": "江口县"
        },
        {
          "value": 3,
          "text": "双江镇"
        },
        {
          "value": 4,
          "text": "石阡县"
        },
        {
          "value": 5,
          "text": "汤山镇"
        },
        {
          "value": 6,
          "text": "思南县"
        },
        {
          "value": 7,
          "text": "思唐镇"
        },
        {
          "value": 8,
          "text": "德江县"
        },
        {
          "value": 9,
          "text": "青龙镇"
        },
        {
          "value": 10,
          "text": "玉屏侗族自治县"
        },
        {
          "value": 11,
          "text": "平溪镇"
        },
        {
          "value": 12,
          "text": "印江土家族苗族自治县"
        },
        {
          "value": 13,
          "text": "峨岭镇"
        },
        {
          "value": 14,
          "text": "沿河土家族自治县"
        },
        {
          "value": 15,
          "text": "和平镇"
        },
        {
          "value": 16,
          "text": "松桃苗族自治县"
        },
        {
          "value": 17,
          "text": "蓼皋镇"
        },
        {
          "value": 18,
          "text": "万山特区"
        },
        {
          "value": 19,
          "text": "万山镇"
        }
      ]
    },
    {
      "value": 264,
      "text": "黔东南州",
      "children": [
        {
          "value": 1,
          "text": "凯里"
        },
        {
          "value": 2,
          "text": "黄平县"
        },
        {
          "value": 3,
          "text": "新州镇"
        },
        {
          "value": 4,
          "text": "施秉县"
        },
        {
          "value": 5,
          "text": "城关镇"
        },
        {
          "value": 6,
          "text": "三穗县"
        },
        {
          "value": 7,
          "text": "八弓镇"
        },
        {
          "value": 8,
          "text": "镇远县"
        },
        {
          "value": 9,
          "text": "阳镇"
        },
        {
          "value": 10,
          "text": "岑巩县"
        },
        {
          "value": 11,
          "text": "思旸镇"
        },
        {
          "value": 12,
          "text": "天柱县"
        },
        {
          "value": 13,
          "text": "凤城镇"
        },
        {
          "value": 14,
          "text": "锦屏县"
        },
        {
          "value": 15,
          "text": "三江镇"
        },
        {
          "value": 16,
          "text": "剑河县"
        },
        {
          "value": 17,
          "text": "革东镇"
        },
        {
          "value": 18,
          "text": "台江县"
        },
        {
          "value": 19,
          "text": "台拱镇"
        },
        {
          "value": 20,
          "text": "黎平县"
        },
        {
          "value": 21,
          "text": "德凤镇"
        },
        {
          "value": 22,
          "text": "榕江县"
        },
        {
          "value": 23,
          "text": "古州镇"
        },
        {
          "value": 24,
          "text": "从江县"
        },
        {
          "value": 25,
          "text": "丙妹镇"
        },
        {
          "value": 26,
          "text": "雷山县"
        },
        {
          "value": 27,
          "text": "丹江镇"
        },
        {
          "value": 28,
          "text": "麻江县"
        },
        {
          "value": 29,
          "text": "杏山镇"
        },
        {
          "value": 30,
          "text": "丹寨县"
        },
        {
          "value": 31,
          "text": "龙泉镇"
        }
      ]
    },
    {
      "value": 265,
      "text": "黔南州",
      "children": [
        {
          "value": 1,
          "text": "都匀"
        },
        {
          "value": 2,
          "text": "福泉"
        },
        {
          "value": 3,
          "text": "荔波县"
        },
        {
          "value": 4,
          "text": "玉屏镇"
        },
        {
          "value": 5,
          "text": "贵定县"
        },
        {
          "value": 6,
          "text": "城关镇"
        },
        {
          "value": 7,
          "text": "瓮安县"
        },
        {
          "value": 8,
          "text": "雍阳镇"
        },
        {
          "value": 9,
          "text": "独山县"
        },
        {
          "value": 10,
          "text": "城关镇"
        },
        {
          "value": 11,
          "text": "平塘县"
        },
        {
          "value": 12,
          "text": "平湖镇"
        },
        {
          "value": 13,
          "text": "罗甸县"
        },
        {
          "value": 14,
          "text": "龙坪镇"
        },
        {
          "value": 15,
          "text": "长顺县"
        },
        {
          "value": 16,
          "text": "长寨镇"
        },
        {
          "value": 17,
          "text": "龙里县"
        },
        {
          "value": 18,
          "text": "龙山镇"
        },
        {
          "value": 19,
          "text": "惠水县"
        },
        {
          "value": 20,
          "text": "和平镇"
        },
        {
          "value": 21,
          "text": "三都水族自治县"
        },
        {
          "value": 22,
          "text": "三合镇"
        }
      ]
    },
    {
      "value": 266,
      "text": "黔西南州",
      "children": [
        {
          "value": 1,
          "text": "兴义"
        },
        {
          "value": 2,
          "text": "兴仁县"
        },
        {
          "value": 3,
          "text": "城关镇"
        },
        {
          "value": 4,
          "text": "普安县"
        },
        {
          "value": 5,
          "text": "盘水镇"
        },
        {
          "value": 6,
          "text": "晴隆县"
        },
        {
          "value": 7,
          "text": "莲城镇"
        },
        {
          "value": 8,
          "text": "贞丰县"
        },
        {
          "value": 9,
          "text": "珉谷镇"
        },
        {
          "value": 10,
          "text": "望谟县"
        },
        {
          "value": 11,
          "text": "复兴镇"
        },
        {
          "value": 12,
          "text": "册亨县"
        },
        {
          "value": 13,
          "text": "者楼镇"
        },
        {
          "value": 14,
          "text": "安龙县"
        },
        {
          "value": 15,
          "text": "新安镇"
        }
      ]
    },
    {
      "value": 267,
      "text": "昆明",
      "children": [
        {
          "value": 1,
          "text": "盘龙区"
        },
        {
          "value": 2,
          "text": "五华区"
        },
        {
          "value": 3,
          "text": "官渡区"
        },
        {
          "value": 4,
          "text": "西山区"
        },
        {
          "value": 5,
          "text": "东川区"
        },
        {
          "value": 6,
          "text": "安宁"
        },
        {
          "value": 7,
          "text": "呈贡县"
        },
        {
          "value": 8,
          "text": "龙城镇"
        },
        {
          "value": 9,
          "text": "晋宁县"
        },
        {
          "value": 10,
          "text": "昆阳镇"
        },
        {
          "value": 11,
          "text": "富民县"
        },
        {
          "value": 12,
          "text": "永定镇"
        },
        {
          "value": 13,
          "text": "宜良县"
        },
        {
          "value": 14,
          "text": "匡远镇"
        },
        {
          "value": 15,
          "text": "嵩明县"
        },
        {
          "value": 16,
          "text": "嵩阳镇"
        },
        {
          "value": 17,
          "text": "石林彝族自治县"
        },
        {
          "value": 18,
          "text": "鹿阜镇"
        },
        {
          "value": 19,
          "text": "禄劝彝族苗族自治县"
        },
        {
          "value": 20,
          "text": "屏山镇"
        },
        {
          "value": 21,
          "text": "寻甸回族彝族自治县"
        },
        {
          "value": 22,
          "text": "仁德镇"
        }
      ]
    },
    {
      "value": 268,
      "text": "曲靖",
      "children": [
        {
          "value": 1,
          "text": "麒麟区"
        },
        {
          "value": 2,
          "text": "宣威"
        },
        {
          "value": 3,
          "text": "马龙县"
        },
        {
          "value": 4,
          "text": "通泉镇"
        },
        {
          "value": 5,
          "text": "沾益县"
        },
        {
          "value": 6,
          "text": "西平镇"
        },
        {
          "value": 7,
          "text": "富源县"
        },
        {
          "value": 8,
          "text": "中安镇"
        },
        {
          "value": 9,
          "text": "罗平县"
        },
        {
          "value": 10,
          "text": "罗雄镇"
        },
        {
          "value": 11,
          "text": "师宗县"
        },
        {
          "value": 12,
          "text": "丹凤镇"
        },
        {
          "value": 13,
          "text": "陆良县"
        },
        {
          "value": 14,
          "text": "中枢镇"
        },
        {
          "value": 15,
          "text": "会泽县"
        },
        {
          "value": 16,
          "text": "金钟镇"
        }
      ]
    },
    {
      "value": 269,
      "text": "玉溪",
      "children": [
        {
          "value": 1,
          "text": "红塔区"
        },
        {
          "value": 2,
          "text": "江川县"
        },
        {
          "value": 3,
          "text": "大街镇"
        },
        {
          "value": 4,
          "text": "澄江县"
        },
        {
          "value": 5,
          "text": "凤麓镇"
        },
        {
          "value": 6,
          "text": "通海县"
        },
        {
          "value": 7,
          "text": "秀山镇"
        },
        {
          "value": 8,
          "text": "华宁县"
        },
        {
          "value": 9,
          "text": "宁州镇"
        },
        {
          "value": 10,
          "text": "易门县"
        },
        {
          "value": 11,
          "text": "龙泉镇"
        },
        {
          "value": 12,
          "text": "峨山彝族自治县"
        },
        {
          "value": 13,
          "text": "双江镇"
        },
        {
          "value": 14,
          "text": "新平彝族傣族自治县"
        },
        {
          "value": 15,
          "text": "桂山镇"
        },
        {
          "value": 16,
          "text": "元江哈尼族彝族傣族自治县"
        },
        {
          "value": 17,
          "text": "澧江镇"
        }
      ]
    },
    {
      "value": 270,
      "text": "保山",
      "children": [
        {
          "value": 1,
          "text": "隆阳区"
        },
        {
          "value": 2,
          "text": "施甸县"
        },
        {
          "value": 3,
          "text": "甸阳镇"
        },
        {
          "value": 4,
          "text": "腾冲县"
        },
        {
          "value": 5,
          "text": "腾越镇"
        },
        {
          "value": 6,
          "text": "龙陵县"
        },
        {
          "value": 7,
          "text": "龙山镇"
        },
        {
          "value": 8,
          "text": "昌宁县"
        },
        {
          "value": 9,
          "text": "田园镇"
        }
      ]
    },
    {
      "value": 271,
      "text": "昭通",
      "children": [
        {
          "value": 1,
          "text": "昭阳区"
        },
        {
          "value": 2,
          "text": "鲁甸县"
        },
        {
          "value": 3,
          "text": "文屏镇"
        },
        {
          "value": 4,
          "text": "巧家县"
        },
        {
          "value": 5,
          "text": "新华镇"
        },
        {
          "value": 6,
          "text": "盐津县"
        },
        {
          "value": 7,
          "text": "盐井镇"
        },
        {
          "value": 8,
          "text": "大关县"
        },
        {
          "value": 9,
          "text": "翠华镇"
        },
        {
          "value": 10,
          "text": "永善县"
        },
        {
          "value": 11,
          "text": "溪落渡镇"
        },
        {
          "value": 12,
          "text": "绥江县"
        },
        {
          "value": 13,
          "text": "中城镇"
        },
        {
          "value": 14,
          "text": "镇雄县"
        },
        {
          "value": 15,
          "text": "乌峰镇"
        },
        {
          "value": 16,
          "text": "彝良县"
        },
        {
          "value": 17,
          "text": "角奎镇"
        },
        {
          "value": 18,
          "text": "威信县"
        },
        {
          "value": 19,
          "text": "扎西镇"
        },
        {
          "value": 20,
          "text": "水富县"
        },
        {
          "value": 21,
          "text": "向家坝镇"
        }
      ]
    },
    {
      "value": 272,
      "text": "丽江",
      "children": [
        {
          "value": 1,
          "text": "古城区"
        },
        {
          "value": 2,
          "text": "永胜县"
        },
        {
          "value": 3,
          "text": "永北镇"
        },
        {
          "value": 4,
          "text": "华坪县"
        },
        {
          "value": 5,
          "text": "中心镇"
        },
        {
          "value": 6,
          "text": "玉龙纳西族自治县"
        },
        {
          "value": 7,
          "text": "黄山镇"
        },
        {
          "value": 8,
          "text": "宁蒗彝族自治县"
        },
        {
          "value": 9,
          "text": "大兴镇"
        }
      ]
    },
    {
      "value": 273,
      "text": "思茅",
      "children": [
        {
          "value": 1,
          "text": "翠云区"
        },
        {
          "value": 2,
          "text": "普洱哈尼族彝族自治县"
        },
        {
          "value": 3,
          "text": "宁洱镇"
        },
        {
          "value": 4,
          "text": "墨江哈尼族自治县"
        },
        {
          "value": 5,
          "text": "联珠镇"
        },
        {
          "value": 6,
          "text": "景东彝族自治县"
        },
        {
          "value": 7,
          "text": "锦屏镇"
        },
        {
          "value": 8,
          "text": "景谷傣族彝族自治县"
        },
        {
          "value": 9,
          "text": "威远镇"
        },
        {
          "value": 10,
          "text": "镇沅彝族哈尼族拉祜族自治县"
        },
        {
          "value": 11,
          "text": "恩乐镇"
        },
        {
          "value": 12,
          "text": "江城哈尼族彝族自治县"
        },
        {
          "value": 13,
          "text": "勐烈镇"
        },
        {
          "value": 14,
          "text": "孟连傣族拉祜族佤族自治县"
        },
        {
          "value": 15,
          "text": "娜允镇"
        },
        {
          "value": 16,
          "text": "澜沧拉祜族自治县"
        },
        {
          "value": 17,
          "text": "勐朗镇"
        },
        {
          "value": 18,
          "text": "西盟佤族自治县"
        },
        {
          "value": 19,
          "text": "勐梭镇"
        }
      ]
    },
    {
      "value": 274,
      "text": "临沧",
      "children": [
        {
          "value": 1,
          "text": "临翔区"
        },
        {
          "value": 2,
          "text": "凤庆县"
        },
        {
          "value": 3,
          "text": "凤山镇"
        },
        {
          "value": 4,
          "text": "云县"
        },
        {
          "value": 5,
          "text": "爱华镇"
        },
        {
          "value": 6,
          "text": "永德县"
        },
        {
          "value": 7,
          "text": "德党镇"
        },
        {
          "value": 8,
          "text": "镇康县"
        },
        {
          "value": 9,
          "text": "南伞镇"
        },
        {
          "value": 10,
          "text": "双江拉祜族佤族布朗族傣族自治县"
        },
        {
          "value": 11,
          "text": "勐勐镇"
        },
        {
          "value": 12,
          "text": "耿马傣族佤族自治县"
        },
        {
          "value": 13,
          "text": "耿马镇"
        },
        {
          "value": 14,
          "text": "沧源佤族自治县"
        },
        {
          "value": 15,
          "text": "勐董镇"
        }
      ]
    },
    {
      "value": 275,
      "text": "德宏州",
      "children": [
        {
          "value": 1,
          "text": "潞西"
        },
        {
          "value": 2,
          "text": "瑞丽"
        },
        {
          "value": 3,
          "text": "梁河县"
        },
        {
          "value": 4,
          "text": "遮岛镇"
        },
        {
          "value": 5,
          "text": "盈江县"
        },
        {
          "value": 6,
          "text": "平原镇"
        },
        {
          "value": 7,
          "text": "陇川县"
        },
        {
          "value": 8,
          "text": "章凤镇"
        }
      ]
    },
    {
      "value": 276,
      "text": "怒江州",
      "children": [
        {
          "value": 1,
          "text": "泸水县六库镇"
        },
        {
          "value": 2,
          "text": "泸水县"
        },
        {
          "value": 3,
          "text": "六库镇"
        },
        {
          "value": 4,
          "text": "福贡县"
        },
        {
          "value": 5,
          "text": "上帕镇"
        },
        {
          "value": 6,
          "text": "贡山独龙族怒族自治县"
        },
        {
          "value": 7,
          "text": "茨开镇"
        },
        {
          "value": 8,
          "text": "兰坪白族普米族自治县"
        },
        {
          "value": 9,
          "text": "金顶镇"
        }
      ]
    },
    {
      "value": 277,
      "text": "迪庆州",
      "children": [
        {
          "value": 1,
          "text": "香格里拉县"
        },
        {
          "value": 2,
          "text": "建塘镇"
        },
        {
          "value": 3,
          "text": "德钦县"
        },
        {
          "value": 4,
          "text": "升平镇"
        },
        {
          "value": 5,
          "text": "维西傈僳族自治县"
        },
        {
          "value": 6,
          "text": "保和镇"
        }
      ]
    },
    {
      "value": 278,
      "text": "大理州",
      "children": [
        {
          "value": 1,
          "text": "大理"
        },
        {
          "value": 2,
          "text": "祥云县"
        },
        {
          "value": 3,
          "text": "祥城镇"
        },
        {
          "value": 4,
          "text": "宾川县"
        },
        {
          "value": 5,
          "text": "金牛镇"
        },
        {
          "value": 6,
          "text": "弥渡县"
        },
        {
          "value": 7,
          "text": "弥城镇"
        },
        {
          "value": 8,
          "text": "永平县"
        },
        {
          "value": 9,
          "text": "博南镇"
        },
        {
          "value": 10,
          "text": "云龙县"
        },
        {
          "value": 11,
          "text": "诺邓镇"
        },
        {
          "value": 12,
          "text": "洱源县"
        },
        {
          "value": 13,
          "text": "茈碧湖镇"
        },
        {
          "value": 14,
          "text": "剑川县"
        },
        {
          "value": 15,
          "text": "金华镇"
        },
        {
          "value": 16,
          "text": "鹤庆县"
        },
        {
          "value": 17,
          "text": "云鹤镇"
        },
        {
          "value": 18,
          "text": "漾濞彝族自治县"
        },
        {
          "value": 19,
          "text": "苍山西镇"
        },
        {
          "value": 20,
          "text": "南涧彝族自治县"
        },
        {
          "value": 21,
          "text": "南涧镇"
        },
        {
          "value": 22,
          "text": "巍山彝族回族自治县"
        },
        {
          "value": 23,
          "text": "南诏镇"
        }
      ]
    },
    {
      "value": 279,
      "text": "楚雄州",
      "children": [
        {
          "value": 1,
          "text": "楚雄"
        },
        {
          "value": 2,
          "text": "双柏县"
        },
        {
          "value": 3,
          "text": "妥甸镇"
        },
        {
          "value": 4,
          "text": "牟定县"
        },
        {
          "value": 5,
          "text": "共和镇"
        },
        {
          "value": 6,
          "text": "南华县"
        },
        {
          "value": 7,
          "text": "龙川镇"
        },
        {
          "value": 8,
          "text": "姚安县"
        },
        {
          "value": 9,
          "text": "栋川镇"
        },
        {
          "value": 10,
          "text": "大姚县"
        },
        {
          "value": 11,
          "text": "金碧镇"
        },
        {
          "value": 12,
          "text": "永仁县"
        },
        {
          "value": 13,
          "text": "永定镇"
        },
        {
          "value": 14,
          "text": "元谋县"
        },
        {
          "value": 15,
          "text": "元马镇"
        },
        {
          "value": 16,
          "text": "武定县"
        },
        {
          "value": 17,
          "text": "狮山镇"
        },
        {
          "value": 18,
          "text": "禄丰县"
        },
        {
          "value": 19,
          "text": "金山镇"
        }
      ]
    },
    {
      "value": 280,
      "text": "红河州",
      "children": [
        {
          "value": 1,
          "text": "蒙自县"
        },
        {
          "value": 2,
          "text": "文澜镇"
        },
        {
          "value": 3,
          "text": "个旧"
        },
        {
          "value": 4,
          "text": "开远"
        },
        {
          "value": 5,
          "text": "绿春县"
        },
        {
          "value": 6,
          "text": "大兴镇"
        },
        {
          "value": 7,
          "text": "建水县"
        },
        {
          "value": 8,
          "text": "临安镇"
        },
        {
          "value": 9,
          "text": "石屏县"
        },
        {
          "value": 10,
          "text": "异龙镇"
        },
        {
          "value": 11,
          "text": "弥勒县"
        },
        {
          "value": 12,
          "text": "弥阳镇"
        },
        {
          "value": 13,
          "text": "泸西县"
        },
        {
          "value": 14,
          "text": "中枢镇"
        },
        {
          "value": 15,
          "text": "元阳县"
        },
        {
          "value": 16,
          "text": "南沙镇"
        },
        {
          "value": 17,
          "text": "红河县"
        },
        {
          "value": 18,
          "text": "迤萨镇"
        },
        {
          "value": 19,
          "text": "金平苗族瑶族傣族自治县"
        },
        {
          "value": 20,
          "text": "金河镇"
        },
        {
          "value": 21,
          "text": "河口瑶族自治县"
        },
        {
          "value": 22,
          "text": "河口镇"
        },
        {
          "value": 23,
          "text": "屏边苗族自治县"
        },
        {
          "value": 24,
          "text": "玉屏镇"
        }
      ]
    },
    {
      "value": 281,
      "text": "文山州",
      "children": [
        {
          "value": 1,
          "text": "文山县"
        },
        {
          "value": 2,
          "text": "开化镇"
        },
        {
          "value": 3,
          "text": "砚山县"
        },
        {
          "value": 4,
          "text": "江那镇"
        },
        {
          "value": 5,
          "text": "西畴县"
        },
        {
          "value": 6,
          "text": "西洒镇"
        },
        {
          "value": 7,
          "text": "麻栗坡县"
        },
        {
          "value": 8,
          "text": "麻栗镇"
        },
        {
          "value": 9,
          "text": "马关县"
        },
        {
          "value": 10,
          "text": "马白镇"
        },
        {
          "value": 11,
          "text": "丘北县"
        },
        {
          "value": 12,
          "text": "锦屏镇"
        },
        {
          "value": 13,
          "text": "广南县"
        },
        {
          "value": 14,
          "text": "莲城镇"
        },
        {
          "value": 15,
          "text": "富宁县"
        },
        {
          "value": 16,
          "text": "新华镇"
        }
      ]
    },
    {
      "value": 282,
      "text": "西双版纳州",
      "children": [
        {
          "value": 1,
          "text": "景洪"
        },
        {
          "value": 2,
          "text": "勐海县"
        },
        {
          "value": 3,
          "text": "勐海镇"
        },
        {
          "value": 4,
          "text": "勐腊县"
        },
        {
          "value": 5,
          "text": "勐腊镇"
        }
      ]
    },
    {
      "value": 283,
      "text": "拉萨",
      "children": [
        {
          "value": 1,
          "text": "城关区"
        },
        {
          "value": 2,
          "text": "林周县"
        },
        {
          "value": 3,
          "text": "甘丹曲果镇"
        },
        {
          "value": 4,
          "text": "当雄县"
        },
        {
          "value": 5,
          "text": "当曲卡镇"
        },
        {
          "value": 6,
          "text": "尼木县"
        },
        {
          "value": 7,
          "text": "塔荣镇"
        },
        {
          "value": 8,
          "text": "曲水县"
        },
        {
          "value": 9,
          "text": "曲水镇"
        },
        {
          "value": 10,
          "text": "堆龙德庆县"
        },
        {
          "value": 11,
          "text": "东嘎镇"
        },
        {
          "value": 12,
          "text": "达孜县"
        },
        {
          "value": 13,
          "text": "德庆镇"
        },
        {
          "value": 14,
          "text": "墨竹工卡县"
        },
        {
          "value": 15,
          "text": "工卡镇"
        }
      ]
    },
    {
      "value": 284,
      "text": "那曲地区",
      "children": [
        {
          "value": 1,
          "text": "那曲县"
        },
        {
          "value": 2,
          "text": "那曲镇"
        },
        {
          "value": 3,
          "text": "嘉黎县"
        },
        {
          "value": 4,
          "text": "阿扎镇"
        },
        {
          "value": 5,
          "text": "比如县"
        },
        {
          "value": 6,
          "text": "比如镇"
        },
        {
          "value": 7,
          "text": "聂荣县"
        },
        {
          "value": 8,
          "text": "聂荣镇"
        },
        {
          "value": 9,
          "text": "安多县"
        },
        {
          "value": 10,
          "text": "帕那镇"
        },
        {
          "value": 11,
          "text": "申扎县"
        },
        {
          "value": 12,
          "text": "申扎镇"
        },
        {
          "value": 13,
          "text": "索县"
        },
        {
          "value": 14,
          "text": "亚拉镇"
        },
        {
          "value": 15,
          "text": "班戈县"
        },
        {
          "value": 16,
          "text": "普保镇"
        },
        {
          "value": 17,
          "text": "巴青县"
        },
        {
          "value": 18,
          "text": "拉西镇"
        },
        {
          "value": 19,
          "text": "尼玛县"
        },
        {
          "value": 20,
          "text": "尼玛镇"
        }
      ]
    },
    {
      "value": 285,
      "text": "昌都地区",
      "children": [
        {
          "value": 1,
          "text": "昌都县"
        },
        {
          "value": 2,
          "text": "城关镇"
        },
        {
          "value": 3,
          "text": "江达县"
        },
        {
          "value": 4,
          "text": "江达镇"
        },
        {
          "value": 5,
          "text": "贡觉县"
        },
        {
          "value": 6,
          "text": "莫洛镇"
        },
        {
          "value": 7,
          "text": "类乌齐县"
        },
        {
          "value": 8,
          "text": "桑多镇"
        },
        {
          "value": 9,
          "text": "丁青县"
        },
        {
          "value": 10,
          "text": "丁青镇"
        },
        {
          "value": 11,
          "text": "察雅县"
        },
        {
          "value": 12,
          "text": "烟多镇"
        },
        {
          "value": 13,
          "text": "八宿县"
        },
        {
          "value": 14,
          "text": "白玛镇"
        },
        {
          "value": 15,
          "text": "左贡县"
        },
        {
          "value": 16,
          "text": "旺达镇"
        },
        {
          "value": 17,
          "text": "芒康县"
        },
        {
          "value": 18,
          "text": "嘎托镇"
        },
        {
          "value": 19,
          "text": "洛隆县"
        },
        {
          "value": 20,
          "text": "孜托镇"
        },
        {
          "value": 21,
          "text": "边坝县"
        },
        {
          "value": 22,
          "text": "草卡镇"
        }
      ]
    },
    {
      "value": 286,
      "text": "林芝地区",
      "children": [
        {
          "value": 1,
          "text": "林芝县"
        },
        {
          "value": 2,
          "text": "八一镇"
        },
        {
          "value": 3,
          "text": "工布江达县"
        },
        {
          "value": 4,
          "text": "工布江达镇"
        },
        {
          "value": 5,
          "text": "米林县"
        },
        {
          "value": 6,
          "text": "米林镇"
        },
        {
          "value": 7,
          "text": "墨脱县"
        },
        {
          "value": 8,
          "text": "墨脱镇"
        },
        {
          "value": 9,
          "text": "波密县"
        },
        {
          "value": 10,
          "text": "扎木镇"
        },
        {
          "value": 11,
          "text": "察隅县"
        },
        {
          "value": 12,
          "text": "竹瓦根镇"
        },
        {
          "value": 13,
          "text": "朗县"
        },
        {
          "value": 14,
          "text": "朗镇"
        }
      ]
    },
    {
      "value": 287,
      "text": "山南地区",
      "children": [
        {
          "value": 1,
          "text": "乃东县"
        },
        {
          "value": 2,
          "text": "泽当镇"
        },
        {
          "value": 3,
          "text": "扎囊县"
        },
        {
          "value": 4,
          "text": "扎塘镇"
        },
        {
          "value": 5,
          "text": "贡嘎县"
        },
        {
          "value": 6,
          "text": "吉雄镇"
        },
        {
          "value": 7,
          "text": "桑日县"
        },
        {
          "value": 8,
          "text": "桑日镇"
        },
        {
          "value": 9,
          "text": "琼结县"
        },
        {
          "value": 10,
          "text": "琼结镇"
        },
        {
          "value": 11,
          "text": "曲松县"
        },
        {
          "value": 12,
          "text": "曲松镇"
        },
        {
          "value": 13,
          "text": "措美县"
        },
        {
          "value": 14,
          "text": "措美镇"
        },
        {
          "value": 15,
          "text": "洛扎县"
        },
        {
          "value": 16,
          "text": "洛扎镇"
        },
        {
          "value": 17,
          "text": "加查县"
        },
        {
          "value": 18,
          "text": "安绕镇"
        },
        {
          "value": 19,
          "text": "隆子县"
        },
        {
          "value": 20,
          "text": "隆子镇"
        },
        {
          "value": 21,
          "text": "错那县"
        },
        {
          "value": 22,
          "text": "错那镇"
        },
        {
          "value": 23,
          "text": "浪卡子县"
        },
        {
          "value": 24,
          "text": "浪卡子镇"
        }
      ]
    },
    {
      "value": 288,
      "text": "日喀则地区",
      "children": [
        {
          "value": 1,
          "text": "日喀则"
        },
        {
          "value": 2,
          "text": "南木林县"
        },
        {
          "value": 3,
          "text": "南木林镇"
        },
        {
          "value": 4,
          "text": "江孜县"
        },
        {
          "value": 5,
          "text": "江孜镇"
        },
        {
          "value": 6,
          "text": "定日县"
        },
        {
          "value": 7,
          "text": "协格尔镇"
        },
        {
          "value": 8,
          "text": "萨迦县"
        },
        {
          "value": 9,
          "text": "萨迦镇"
        },
        {
          "value": 10,
          "text": "拉孜县"
        },
        {
          "value": 11,
          "text": "曲下镇"
        },
        {
          "value": 12,
          "text": "昂仁县"
        },
        {
          "value": 13,
          "text": "卡嘎镇"
        },
        {
          "value": 14,
          "text": "谢通门县"
        },
        {
          "value": 15,
          "text": "卡嘎镇"
        },
        {
          "value": 16,
          "text": "白朗县"
        },
        {
          "value": 17,
          "text": "洛江镇"
        },
        {
          "value": 18,
          "text": "仁布县"
        },
        {
          "value": 19,
          "text": "德吉林镇"
        },
        {
          "value": 20,
          "text": "康马县"
        },
        {
          "value": 21,
          "text": "康马镇"
        },
        {
          "value": 22,
          "text": "定结县"
        },
        {
          "value": 23,
          "text": "江嘎镇"
        },
        {
          "value": 24,
          "text": "仲巴县"
        },
        {
          "value": 25,
          "text": "拉让乡"
        },
        {
          "value": 26,
          "text": "亚东县"
        },
        {
          "value": 27,
          "text": "下司马镇"
        },
        {
          "value": 28,
          "text": "吉隆县"
        },
        {
          "value": 29,
          "text": "宗嘎镇"
        },
        {
          "value": 30,
          "text": "聂拉木县"
        },
        {
          "value": 31,
          "text": "聂拉木镇"
        },
        {
          "value": 32,
          "text": "萨嘎县"
        },
        {
          "value": 33,
          "text": "加加镇"
        },
        {
          "value": 34,
          "text": "岗巴县"
        },
        {
          "value": 35,
          "text": "岗巴镇"
        }
      ]
    },
    {
      "value": 289,
      "text": "阿里地区",
      "children": [
        {
          "value": 1,
          "text": "噶尔县"
        },
        {
          "value": 2,
          "text": "狮泉河镇"
        },
        {
          "value": 3,
          "text": "普兰县"
        },
        {
          "value": 4,
          "text": "普兰镇"
        },
        {
          "value": 5,
          "text": "札达县"
        },
        {
          "value": 6,
          "text": "托林镇"
        },
        {
          "value": 7,
          "text": "日土县"
        },
        {
          "value": 8,
          "text": "日土镇"
        },
        {
          "value": 9,
          "text": "革吉县"
        },
        {
          "value": 10,
          "text": "革吉镇"
        },
        {
          "value": 11,
          "text": "改则县"
        },
        {
          "value": 12,
          "text": "改则镇"
        },
        {
          "value": 13,
          "text": "措勤县"
        },
        {
          "value": 14,
          "text": "措勤镇"
        },
        {
          "value": 15,
          "text": "林芝县人民政府驻地由林芝镇迁至八一镇"
        }
      ]
    },
    {
      "value": 290,
      "text": "西安",
      "children": [
        {
          "value": 1,
          "text": "莲湖区"
        },
        {
          "value": 2,
          "text": "新城区"
        },
        {
          "value": 3,
          "text": "碑林区"
        },
        {
          "value": 4,
          "text": "灞桥区"
        },
        {
          "value": 5,
          "text": "未央区"
        },
        {
          "value": 6,
          "text": "雁塔区"
        },
        {
          "value": 7,
          "text": "阎良区"
        },
        {
          "value": 8,
          "text": "临潼区"
        },
        {
          "value": 9,
          "text": "长安区"
        },
        {
          "value": 10,
          "text": "蓝田县"
        },
        {
          "value": 11,
          "text": "蓝关镇"
        },
        {
          "value": 12,
          "text": "周至县"
        },
        {
          "value": 13,
          "text": "二曲镇"
        },
        {
          "value": 14,
          "text": "户县"
        },
        {
          "value": 15,
          "text": "甘亭镇"
        },
        {
          "value": 16,
          "text": "高陵县"
        },
        {
          "value": 17,
          "text": "鹿苑镇"
        }
      ]
    },
    {
      "value": 291,
      "text": "延安",
      "children": [
        {
          "value": 1,
          "text": "宝塔区"
        },
        {
          "value": 2,
          "text": "延长县"
        },
        {
          "value": 3,
          "text": "七里村镇"
        },
        {
          "value": 4,
          "text": "延川县"
        },
        {
          "value": 5,
          "text": "延川镇"
        },
        {
          "value": 6,
          "text": "子长县"
        },
        {
          "value": 7,
          "text": "瓦窑堡镇"
        },
        {
          "value": 8,
          "text": "安塞县"
        },
        {
          "value": 9,
          "text": "真武洞镇"
        },
        {
          "value": 10,
          "text": "志丹县"
        },
        {
          "value": 11,
          "text": "保安镇"
        },
        {
          "value": 12,
          "text": "吴起县"
        },
        {
          "value": 13,
          "text": "吴旗镇"
        },
        {
          "value": 14,
          "text": "甘泉县"
        },
        {
          "value": 15,
          "text": "城关镇"
        },
        {
          "value": 16,
          "text": "富县"
        },
        {
          "value": 17,
          "text": "富城镇"
        },
        {
          "value": 18,
          "text": "洛川县"
        },
        {
          "value": 19,
          "text": "凤栖镇"
        },
        {
          "value": 20,
          "text": "宜川县"
        },
        {
          "value": 21,
          "text": "丹州镇"
        },
        {
          "value": 22,
          "text": "黄龙县"
        },
        {
          "value": 23,
          "text": "石堡镇"
        },
        {
          "value": 24,
          "text": "黄陵县"
        },
        {
          "value": 25,
          "text": "桥山镇"
        }
      ]
    },
    {
      "value": 292,
      "text": "铜川",
      "children": [
        {
          "value": 1,
          "text": "耀州区"
        },
        {
          "value": 2,
          "text": "王益区"
        },
        {
          "value": 3,
          "text": "印台区"
        },
        {
          "value": 4,
          "text": "宜君县"
        },
        {
          "value": 5,
          "text": "城关镇"
        }
      ]
    },
    {
      "value": 293,
      "text": "渭南",
      "children": [
        {
          "value": 1,
          "text": "临渭区"
        },
        {
          "value": 2,
          "text": "华阴"
        },
        {
          "value": 3,
          "text": "韩城"
        },
        {
          "value": 4,
          "text": "华县"
        },
        {
          "value": 5,
          "text": "华州镇"
        },
        {
          "value": 6,
          "text": "潼关县"
        },
        {
          "value": 7,
          "text": "城关镇"
        },
        {
          "value": 8,
          "text": "大荔县"
        },
        {
          "value": 9,
          "text": "城关镇"
        },
        {
          "value": 10,
          "text": "蒲城县"
        },
        {
          "value": 11,
          "text": "城关镇"
        },
        {
          "value": 12,
          "text": "澄城县"
        },
        {
          "value": 13,
          "text": "城关镇"
        },
        {
          "value": 14,
          "text": "白水县"
        },
        {
          "value": 15,
          "text": "城关镇"
        },
        {
          "value": 16,
          "text": "合阳县"
        },
        {
          "value": 17,
          "text": "城关镇"
        },
        {
          "value": 18,
          "text": "富平县"
        },
        {
          "value": 19,
          "text": "窦村镇"
        }
      ]
    },
    {
      "value": 294,
      "text": "咸阳",
      "children": [
        {
          "value": 1,
          "text": "秦都区"
        },
        {
          "value": 2,
          "text": "杨陵区"
        },
        {
          "value": 3,
          "text": "渭城区"
        },
        {
          "value": 4,
          "text": "兴平"
        },
        {
          "value": 5,
          "text": "三原县"
        },
        {
          "value": 6,
          "text": "城关镇"
        },
        {
          "value": 7,
          "text": "泾阳县"
        },
        {
          "value": 8,
          "text": "泾干镇"
        },
        {
          "value": 9,
          "text": "乾县"
        },
        {
          "value": 10,
          "text": "城关镇"
        },
        {
          "value": 11,
          "text": "礼泉县"
        },
        {
          "value": 12,
          "text": "城关镇"
        },
        {
          "value": 13,
          "text": "永寿县"
        },
        {
          "value": 14,
          "text": "监军镇"
        },
        {
          "value": 15,
          "text": "彬县"
        },
        {
          "value": 16,
          "text": "城关镇"
        },
        {
          "value": 17,
          "text": "长武县"
        },
        {
          "value": 18,
          "text": "昭仁镇"
        },
        {
          "value": 19,
          "text": "旬邑县"
        },
        {
          "value": 20,
          "text": "城关镇"
        },
        {
          "value": 21,
          "text": "淳化县"
        },
        {
          "value": 22,
          "text": "城关镇"
        },
        {
          "value": 23,
          "text": "武功县"
        },
        {
          "value": 24,
          "text": "普集镇"
        }
      ]
    },
    {
      "value": 295,
      "text": "宝鸡",
      "children": [
        {
          "value": 1,
          "text": "渭滨区"
        },
        {
          "value": 2,
          "text": "金台区"
        },
        {
          "value": 3,
          "text": "陈仓区"
        },
        {
          "value": 4,
          "text": "凤翔县"
        },
        {
          "value": 5,
          "text": "城关镇"
        },
        {
          "value": 6,
          "text": "岐山县"
        },
        {
          "value": 7,
          "text": "凤鸣镇"
        },
        {
          "value": 8,
          "text": "扶风县"
        },
        {
          "value": 9,
          "text": "城关镇"
        },
        {
          "value": 10,
          "text": "眉县"
        },
        {
          "value": 11,
          "text": "首善镇"
        },
        {
          "value": 12,
          "text": "陇县"
        },
        {
          "value": 13,
          "text": "城关镇"
        },
        {
          "value": 14,
          "text": "千阳县"
        },
        {
          "value": 15,
          "text": "城关镇"
        },
        {
          "value": 16,
          "text": "麟游县"
        },
        {
          "value": 17,
          "text": "九成宫镇"
        },
        {
          "value": 18,
          "text": "凤县"
        },
        {
          "value": 19,
          "text": "双石铺镇"
        },
        {
          "value": 20,
          "text": "太白县"
        },
        {
          "value": 21,
          "text": "嘴头镇"
        }
      ]
    },
    {
      "value": 296,
      "text": "汉中",
      "children": [
        {
          "value": 1,
          "text": "汉台区"
        },
        {
          "value": 2,
          "text": "南郑县"
        },
        {
          "value": 3,
          "text": "城关镇"
        },
        {
          "value": 4,
          "text": "城固县"
        },
        {
          "value": 5,
          "text": "博望镇"
        },
        {
          "value": 6,
          "text": "洋县"
        },
        {
          "value": 7,
          "text": "洋州镇"
        },
        {
          "value": 8,
          "text": "西乡县"
        },
        {
          "value": 9,
          "text": "城关镇"
        },
        {
          "value": 10,
          "text": "勉县"
        },
        {
          "value": 11,
          "text": "勉阳镇"
        },
        {
          "value": 12,
          "text": "宁强县"
        },
        {
          "value": 13,
          "text": "汉源镇"
        },
        {
          "value": 14,
          "text": "略阳县"
        },
        {
          "value": 15,
          "text": "城关镇"
        },
        {
          "value": 16,
          "text": "镇巴县"
        },
        {
          "value": 17,
          "text": "泾洋镇"
        },
        {
          "value": 18,
          "text": "留坝县"
        },
        {
          "value": 19,
          "text": "城关镇"
        },
        {
          "value": 20,
          "text": "佛坪县"
        },
        {
          "value": 21,
          "text": "袁家庄镇"
        }
      ]
    },
    {
      "value": 297,
      "text": "榆林",
      "children": [
        {
          "value": 1,
          "text": "榆阳区"
        },
        {
          "value": 2,
          "text": "神木县"
        },
        {
          "value": 3,
          "text": "神木镇"
        },
        {
          "value": 4,
          "text": "府谷县"
        },
        {
          "value": 5,
          "text": "府谷镇"
        },
        {
          "value": 6,
          "text": "横山县"
        },
        {
          "value": 7,
          "text": "横山镇"
        },
        {
          "value": 8,
          "text": "靖边县"
        },
        {
          "value": 9,
          "text": "张家畔镇"
        },
        {
          "value": 10,
          "text": "定边县"
        },
        {
          "value": 11,
          "text": "定边镇"
        },
        {
          "value": 12,
          "text": "绥德县"
        },
        {
          "value": 13,
          "text": "名州镇"
        },
        {
          "value": 14,
          "text": "米脂县"
        },
        {
          "value": 15,
          "text": "银州镇"
        },
        {
          "value": 16,
          "text": "佳县"
        },
        {
          "value": 17,
          "text": "佳芦镇"
        },
        {
          "value": 18,
          "text": "吴堡县"
        },
        {
          "value": 19,
          "text": "宋家川镇"
        },
        {
          "value": 20,
          "text": "清涧县"
        },
        {
          "value": 21,
          "text": "宽洲镇"
        },
        {
          "value": 22,
          "text": "子洲县"
        },
        {
          "value": 23,
          "text": "双湖峪镇"
        }
      ]
    },
    {
      "value": 298,
      "text": "安康",
      "children": [
        {
          "value": 1,
          "text": "汉滨区"
        },
        {
          "value": 2,
          "text": "汉阴县"
        },
        {
          "value": 3,
          "text": "城关镇"
        },
        {
          "value": 4,
          "text": "石泉县"
        },
        {
          "value": 5,
          "text": "城关镇"
        },
        {
          "value": 6,
          "text": "宁陕县"
        },
        {
          "value": 7,
          "text": "城关镇"
        },
        {
          "value": 8,
          "text": "紫阳县"
        },
        {
          "value": 9,
          "text": "城关镇"
        },
        {
          "value": 10,
          "text": "岚皋县"
        },
        {
          "value": 11,
          "text": "城关镇"
        },
        {
          "value": 12,
          "text": "平利县"
        },
        {
          "value": 13,
          "text": "城关镇"
        },
        {
          "value": 14,
          "text": "镇坪县"
        },
        {
          "value": 15,
          "text": "城关镇"
        },
        {
          "value": 16,
          "text": "旬阳县"
        },
        {
          "value": 17,
          "text": "城关镇"
        },
        {
          "value": 18,
          "text": "白河县"
        },
        {
          "value": 19,
          "text": "城关镇"
        }
      ]
    },
    {
      "value": 299,
      "text": "商洛",
      "children": [
        {
          "value": 1,
          "text": "商州区"
        },
        {
          "value": 2,
          "text": "洛南县"
        },
        {
          "value": 3,
          "text": "城关镇"
        },
        {
          "value": 4,
          "text": "丹凤县"
        },
        {
          "value": 5,
          "text": "龙驹寨镇"
        },
        {
          "value": 6,
          "text": "商南县"
        },
        {
          "value": 7,
          "text": "城关镇"
        },
        {
          "value": 8,
          "text": "山阳县"
        },
        {
          "value": 9,
          "text": "城关镇"
        },
        {
          "value": 10,
          "text": "镇安县"
        },
        {
          "value": 11,
          "text": "永乐镇"
        },
        {
          "value": 12,
          "text": "柞水县"
        },
        {
          "value": 13,
          "text": "乾佑镇"
        }
      ]
    },
    {
      "value": 300,
      "text": "兰州",
      "children": [
        {
          "value": 1,
          "text": "城关区"
        },
        {
          "value": 2,
          "text": "七里河区"
        },
        {
          "value": 3,
          "text": "西固区"
        },
        {
          "value": 4,
          "text": "安宁区"
        },
        {
          "value": 5,
          "text": "红古区"
        },
        {
          "value": 6,
          "text": "永登县"
        },
        {
          "value": 7,
          "text": "城关镇"
        },
        {
          "value": 8,
          "text": "皋兰县"
        },
        {
          "value": 9,
          "text": "石洞镇"
        },
        {
          "value": 10,
          "text": "榆中县"
        },
        {
          "value": 11,
          "text": "城关镇"
        }
      ]
    },
    {
      "value": 301,
      "text": "嘉峪关",
      "children": [
        {
          "value": 1,
          "text": "金昌"
        },
        {
          "value": 2,
          "text": "金川区"
        },
        {
          "value": 3,
          "text": "永昌县"
        },
        {
          "value": 4,
          "text": "城关镇"
        }
      ]
    },
    {
      "value": 302,
      "text": "白银",
      "children": [
        {
          "value": 1,
          "text": "白银区"
        },
        {
          "value": 2,
          "text": "平川区"
        },
        {
          "value": 3,
          "text": "靖远县"
        },
        {
          "value": 4,
          "text": "乌兰镇"
        },
        {
          "value": 5,
          "text": "会宁县"
        },
        {
          "value": 6,
          "text": "会师镇"
        },
        {
          "value": 7,
          "text": "景泰县"
        },
        {
          "value": 8,
          "text": "一条山镇"
        }
      ]
    },
    {
      "value": 303,
      "text": "天水",
      "children": [
        {
          "value": 1,
          "text": "秦州区"
        },
        {
          "value": 2,
          "text": "麦积区"
        },
        {
          "value": 3,
          "text": "清水县"
        },
        {
          "value": 4,
          "text": "永清镇"
        },
        {
          "value": 5,
          "text": "秦安县"
        },
        {
          "value": 6,
          "text": "兴国镇"
        },
        {
          "value": 7,
          "text": "甘谷县"
        },
        {
          "value": 8,
          "text": "大像山镇"
        },
        {
          "value": 9,
          "text": "武山县"
        },
        {
          "value": 10,
          "text": "城关镇"
        },
        {
          "value": 11,
          "text": "张家川回族自治县"
        },
        {
          "value": 12,
          "text": "张家川镇"
        }
      ]
    },
    {
      "value": 304,
      "text": "武威",
      "children": [
        {
          "value": 1,
          "text": "凉州区"
        },
        {
          "value": 2,
          "text": "民勤县"
        },
        {
          "value": 3,
          "text": "城关镇"
        },
        {
          "value": 4,
          "text": "古浪县"
        },
        {
          "value": 5,
          "text": "古浪镇"
        },
        {
          "value": 6,
          "text": "天祝藏族自治县"
        },
        {
          "value": 7,
          "text": "华藏寺镇"
        }
      ]
    },
    {
      "value": 305,
      "text": "酒泉",
      "children": [
        {
          "value": 1,
          "text": "肃州区"
        },
        {
          "value": 2,
          "text": "玉门"
        },
        {
          "value": 3,
          "text": "敦煌"
        },
        {
          "value": 4,
          "text": "金塔县"
        },
        {
          "value": 5,
          "text": "金塔镇"
        },
        {
          "value": 6,
          "text": "安西县"
        },
        {
          "value": 7,
          "text": "渊泉镇"
        },
        {
          "value": 8,
          "text": "肃北蒙古族自治县"
        },
        {
          "value": 9,
          "text": "党城湾镇"
        },
        {
          "value": 10,
          "text": "阿克塞哈萨克族自治县"
        },
        {
          "value": 11,
          "text": "红柳湾镇"
        }
      ]
    },
    {
      "value": 306,
      "text": "张掖",
      "children": [
        {
          "value": 1,
          "text": "甘州区"
        },
        {
          "value": 2,
          "text": "民乐县"
        },
        {
          "value": 3,
          "text": "洪水镇"
        },
        {
          "value": 4,
          "text": "临泽县"
        },
        {
          "value": 5,
          "text": "沙河镇"
        },
        {
          "value": 6,
          "text": "高台县"
        },
        {
          "value": 7,
          "text": "城关镇"
        },
        {
          "value": 8,
          "text": "山丹县"
        },
        {
          "value": 9,
          "text": "清泉镇"
        },
        {
          "value": 10,
          "text": "肃南裕固族自治县"
        },
        {
          "value": 11,
          "text": "红湾寺镇"
        }
      ]
    },
    {
      "value": 307,
      "text": "庆阳",
      "children": [
        {
          "value": 1,
          "text": "西峰区"
        },
        {
          "value": 2,
          "text": "庆城县"
        },
        {
          "value": 3,
          "text": "庆城镇"
        },
        {
          "value": 4,
          "text": "环县"
        },
        {
          "value": 5,
          "text": "环城镇"
        },
        {
          "value": 6,
          "text": "华池县"
        },
        {
          "value": 7,
          "text": "柔远镇"
        },
        {
          "value": 8,
          "text": "合水县"
        },
        {
          "value": 9,
          "text": "西华池镇"
        },
        {
          "value": 10,
          "text": "正宁县"
        },
        {
          "value": 11,
          "text": "山河镇"
        },
        {
          "value": 12,
          "text": "宁县"
        },
        {
          "value": 13,
          "text": "新宁镇"
        },
        {
          "value": 14,
          "text": "镇原县"
        },
        {
          "value": 15,
          "text": "城关镇"
        }
      ]
    },
    {
      "value": 308,
      "text": "平凉",
      "children": [
        {
          "value": 1,
          "text": "崆峒区"
        },
        {
          "value": 2,
          "text": "泾川县"
        },
        {
          "value": 3,
          "text": "城关镇"
        },
        {
          "value": 4,
          "text": "灵台县"
        },
        {
          "value": 5,
          "text": "中台镇"
        },
        {
          "value": 6,
          "text": "崇信县"
        },
        {
          "value": 7,
          "text": "锦屏镇"
        },
        {
          "value": 8,
          "text": "华亭县"
        },
        {
          "value": 9,
          "text": "东华镇"
        },
        {
          "value": 10,
          "text": "庄浪县"
        },
        {
          "value": 11,
          "text": "水洛镇"
        },
        {
          "value": 12,
          "text": "静宁县"
        },
        {
          "value": 13,
          "text": "城关镇"
        }
      ]
    },
    {
      "value": 309,
      "text": "定西",
      "children": [
        {
          "value": 1,
          "text": "安定区"
        },
        {
          "value": 2,
          "text": "通渭县"
        },
        {
          "value": 3,
          "text": "平襄镇"
        },
        {
          "value": 4,
          "text": "临洮县"
        },
        {
          "value": 5,
          "text": "洮阳镇"
        },
        {
          "value": 6,
          "text": "漳县"
        },
        {
          "value": 7,
          "text": "武阳镇"
        },
        {
          "value": 8,
          "text": "岷县"
        },
        {
          "value": 9,
          "text": "岷阳镇"
        },
        {
          "value": 10,
          "text": "渭源县"
        },
        {
          "value": 11,
          "text": "清源镇"
        },
        {
          "value": 12,
          "text": "陇西县"
        },
        {
          "value": 13,
          "text": "巩昌镇"
        }
      ]
    },
    {
      "value": 310,
      "text": "陇南",
      "children": [
        {
          "value": 1,
          "text": "武都区"
        },
        {
          "value": 2,
          "text": "成县"
        },
        {
          "value": 3,
          "text": "城关镇"
        },
        {
          "value": 4,
          "text": "宕昌县"
        },
        {
          "value": 5,
          "text": "城关镇"
        },
        {
          "value": 6,
          "text": "康县"
        },
        {
          "value": 7,
          "text": "文县"
        },
        {
          "value": 8,
          "text": "城关镇"
        },
        {
          "value": 9,
          "text": "西和县"
        },
        {
          "value": 10,
          "text": "汉源镇"
        },
        {
          "value": 11,
          "text": "礼县"
        },
        {
          "value": 12,
          "text": "城关镇"
        },
        {
          "value": 13,
          "text": "两当县"
        },
        {
          "value": 14,
          "text": "城关镇"
        },
        {
          "value": 15,
          "text": "徽县"
        },
        {
          "value": 16,
          "text": "城关镇"
        }
      ]
    },
    {
      "value": 311,
      "text": "临夏州",
      "children": [
        {
          "value": 1,
          "text": "临夏"
        },
        {
          "value": 2,
          "text": "临夏县"
        },
        {
          "value": 3,
          "text": "韩集镇"
        },
        {
          "value": 4,
          "text": "康乐县"
        },
        {
          "value": 5,
          "text": "附城镇"
        },
        {
          "value": 6,
          "text": "永靖县"
        },
        {
          "value": 7,
          "text": "刘家峡镇"
        },
        {
          "value": 8,
          "text": "广河县"
        },
        {
          "value": 9,
          "text": "城关镇"
        },
        {
          "value": 10,
          "text": "和政县"
        },
        {
          "value": 11,
          "text": "城关镇"
        },
        {
          "value": 12,
          "text": "东乡族自治县"
        },
        {
          "value": 13,
          "text": "锁南坝镇"
        },
        {
          "value": 14,
          "text": "积石山保安族东乡族撒拉族自治县"
        },
        {
          "value": 15,
          "text": "吹麻滩镇"
        }
      ]
    },
    {
      "value": 312,
      "text": "甘南州",
      "children": [
        {
          "value": 1,
          "text": "合作"
        },
        {
          "value": 2,
          "text": "临潭县"
        },
        {
          "value": 3,
          "text": "城关镇"
        },
        {
          "value": 4,
          "text": "卓尼县"
        },
        {
          "value": 5,
          "text": "柳林镇"
        },
        {
          "value": 6,
          "text": "舟曲县"
        },
        {
          "value": 7,
          "text": "城关镇"
        },
        {
          "value": 8,
          "text": "迭部县"
        },
        {
          "value": 9,
          "text": "电尕镇"
        },
        {
          "value": 10,
          "text": "玛曲县"
        },
        {
          "value": 11,
          "text": "尼玛镇"
        },
        {
          "value": 12,
          "text": "碌曲县"
        },
        {
          "value": 13,
          "text": "玛艾镇"
        },
        {
          "value": 14,
          "text": "夏河县"
        },
        {
          "value": 15,
          "text": "拉卜楞镇"
        }
      ]
    },
    {
      "value": 313,
      "text": "西宁",
      "children": [
        {
          "value": 1,
          "text": "城中区"
        },
        {
          "value": 2,
          "text": "城东区"
        },
        {
          "value": 3,
          "text": "城西区"
        },
        {
          "value": 4,
          "text": "城北区"
        },
        {
          "value": 5,
          "text": "大通回族土族自治县"
        },
        {
          "value": 6,
          "text": "桥头镇"
        },
        {
          "value": 7,
          "text": "湟源县"
        },
        {
          "value": 8,
          "text": "城关镇"
        },
        {
          "value": 9,
          "text": "湟中县"
        },
        {
          "value": 10,
          "text": "鲁沙尔镇"
        }
      ]
    },
    {
      "value": 314,
      "text": "海东地区",
      "children": [
        {
          "value": 1,
          "text": "平安县"
        },
        {
          "value": 2,
          "text": "平安镇"
        },
        {
          "value": 3,
          "text": "乐都县"
        },
        {
          "value": 4,
          "text": "碾伯镇"
        },
        {
          "value": 5,
          "text": "民和回族土族自治县"
        },
        {
          "value": 6,
          "text": "川口镇"
        },
        {
          "value": 7,
          "text": "互助土族自治县"
        },
        {
          "value": 8,
          "text": "威远镇"
        },
        {
          "value": 9,
          "text": "化隆回族自治县"
        },
        {
          "value": 10,
          "text": "巴燕镇"
        },
        {
          "value": 11,
          "text": "循化撒拉族自治县"
        },
        {
          "value": 12,
          "text": "积石镇"
        }
      ]
    },
    {
      "value": 315,
      "text": "海北州",
      "children": [
        {
          "value": 1,
          "text": "海晏县"
        },
        {
          "value": 2,
          "text": "三角城镇"
        },
        {
          "value": 3,
          "text": "祁连县"
        },
        {
          "value": 4,
          "text": "八宝镇"
        },
        {
          "value": 5,
          "text": "刚察县"
        },
        {
          "value": 6,
          "text": "沙柳河镇"
        },
        {
          "value": 7,
          "text": "门源回族自治县"
        },
        {
          "value": 8,
          "text": "浩门镇"
        }
      ]
    },
    {
      "value": 316,
      "text": "海南州",
      "children": [
        {
          "value": 1,
          "text": "共和县"
        },
        {
          "value": 2,
          "text": "恰卜恰镇"
        },
        {
          "value": 3,
          "text": "同德县"
        },
        {
          "value": 4,
          "text": "尕巴松多镇"
        },
        {
          "value": 5,
          "text": "贵德县"
        },
        {
          "value": 6,
          "text": "河阴镇"
        },
        {
          "value": 7,
          "text": "兴海县"
        },
        {
          "value": 8,
          "text": "子科滩镇"
        },
        {
          "value": 9,
          "text": "贵南县"
        },
        {
          "value": 10,
          "text": "茫曲镇"
        }
      ]
    },
    {
      "value": 317,
      "text": "黄南州",
      "children": [
        {
          "value": 1,
          "text": "同仁县"
        },
        {
          "value": 2,
          "text": "隆务镇"
        },
        {
          "value": 3,
          "text": "尖扎县"
        },
        {
          "value": 4,
          "text": "马克唐镇"
        },
        {
          "value": 5,
          "text": "泽库县"
        },
        {
          "value": 6,
          "text": "泽曲镇"
        },
        {
          "value": 7,
          "text": "河南蒙古族自治县"
        },
        {
          "value": 8,
          "text": "优干宁镇"
        }
      ]
    },
    {
      "value": 318,
      "text": "果洛州",
      "children": [
        {
          "value": 1,
          "text": "玛沁县"
        },
        {
          "value": 2,
          "text": "大武镇"
        },
        {
          "value": 3,
          "text": "班玛县"
        },
        {
          "value": 4,
          "text": "赛来塘镇"
        },
        {
          "value": 5,
          "text": "甘德县"
        },
        {
          "value": 6,
          "text": "柯曲镇"
        },
        {
          "value": 7,
          "text": "达日县"
        },
        {
          "value": 8,
          "text": "吉迈镇"
        },
        {
          "value": 9,
          "text": "久治县"
        },
        {
          "value": 10,
          "text": "智青松多镇"
        },
        {
          "value": 11,
          "text": "玛多县"
        },
        {
          "value": 12,
          "text": "黄河乡"
        }
      ]
    },
    {
      "value": 319,
      "text": "玉树州",
      "children": [
        {
          "value": 1,
          "text": "玉树县"
        },
        {
          "value": 2,
          "text": "结古镇"
        },
        {
          "value": 3,
          "text": "杂多县"
        },
        {
          "value": 4,
          "text": "萨呼腾镇"
        },
        {
          "value": 5,
          "text": "称多县"
        },
        {
          "value": 6,
          "text": "称文镇"
        },
        {
          "value": 7,
          "text": "治多县"
        },
        {
          "value": 8,
          "text": "加吉博洛镇"
        },
        {
          "value": 9,
          "text": "囊谦县"
        },
        {
          "value": 10,
          "text": "香达镇"
        },
        {
          "value": 11,
          "text": "曲麻莱县"
        },
        {
          "value": 12,
          "text": "约改镇"
        }
      ]
    },
    {
      "value": 320,
      "text": "海西州",
      "children": [
        {
          "value": 1,
          "text": "德令哈"
        },
        {
          "value": 2,
          "text": "格尔木"
        },
        {
          "value": 3,
          "text": "乌兰县"
        },
        {
          "value": 4,
          "text": "希里沟镇"
        },
        {
          "value": 5,
          "text": "都兰县"
        },
        {
          "value": 6,
          "text": "察汗乌苏镇"
        },
        {
          "value": 7,
          "text": "天峻县"
        },
        {
          "value": 8,
          "text": "新源镇"
        }
      ]
    },
    {
      "value": 321,
      "text": "银川",
      "children": [
        {
          "value": 1,
          "text": "兴庆区"
        },
        {
          "value": 2,
          "text": "金凤区"
        },
        {
          "value": 3,
          "text": "西夏区"
        },
        {
          "value": 4,
          "text": "灵武"
        },
        {
          "value": 5,
          "text": "永宁县"
        },
        {
          "value": 6,
          "text": "杨和镇"
        },
        {
          "value": 7,
          "text": "贺兰县"
        },
        {
          "value": 8,
          "text": "习岗镇"
        }
      ]
    },
    {
      "value": 322,
      "text": "石嘴山",
      "children": [
        {
          "value": 1,
          "text": "大武口区"
        },
        {
          "value": 2,
          "text": "惠农区"
        },
        {
          "value": 3,
          "text": "平罗县"
        },
        {
          "value": 4,
          "text": "城关镇"
        }
      ]
    },
    {
      "value": 323,
      "text": "吴忠",
      "children": [
        {
          "value": 1,
          "text": "利通区"
        },
        {
          "value": 2,
          "text": "青铜峡"
        },
        {
          "value": 3,
          "text": "盐池县"
        },
        {
          "value": 4,
          "text": "花马池镇"
        },
        {
          "value": 5,
          "text": "同心县"
        },
        {
          "value": 6,
          "text": "豫海镇"
        }
      ]
    },
    {
      "value": 324,
      "text": "固原",
      "children": [
        {
          "value": 1,
          "text": "原州区"
        },
        {
          "value": 2,
          "text": "西吉县"
        },
        {
          "value": 3,
          "text": "吉强镇"
        },
        {
          "value": 4,
          "text": "隆德县"
        },
        {
          "value": 5,
          "text": "城关镇"
        },
        {
          "value": 6,
          "text": "泾源县"
        },
        {
          "value": 7,
          "text": "香水镇"
        },
        {
          "value": 8,
          "text": "彭阳县"
        },
        {
          "value": 9,
          "text": "白阳镇"
        }
      ]
    },
    {
      "value": 325,
      "text": "中卫",
      "children": [
        {
          "value": 1,
          "text": "沙坡头区"
        },
        {
          "value": 2,
          "text": "中宁县"
        },
        {
          "value": 3,
          "text": "海原县"
        }
      ]
    },
    {
      "value": 326,
      "text": "乌鲁木齐",
      "children": [
        {
          "value": 1,
          "text": "天山区"
        },
        {
          "value": 2,
          "text": "沙依巴克区"
        },
        {
          "value": 3,
          "text": "新区"
        },
        {
          "value": 4,
          "text": "水磨沟区"
        },
        {
          "value": 5,
          "text": "头屯河区"
        },
        {
          "value": 6,
          "text": "达坂城区"
        },
        {
          "value": 7,
          "text": "东山区"
        },
        {
          "value": 8,
          "text": "乌鲁木齐县"
        },
        {
          "value": 9,
          "text": "乌鲁木齐水磨沟区"
        }
      ]
    },
    {
      "value": 327,
      "text": "克拉玛依",
      "children": [
        {
          "value": 1,
          "text": "克拉玛依区"
        },
        {
          "value": 2,
          "text": "独山子区"
        },
        {
          "value": 3,
          "text": "白碱滩区"
        },
        {
          "value": 4,
          "text": "乌尔禾区"
        }
      ]
    },
    {
      "value": 328,
      "text": "自治区直辖县级行政单位",
      "children": [
        {
          "value": 1,
          "text": "石河子"
        },
        {
          "value": 2,
          "text": "阿拉尔"
        },
        {
          "value": 3,
          "text": "图木舒克"
        },
        {
          "value": 4,
          "text": "五家渠"
        }
      ]
    },
    {
      "value": 329,
      "text": "喀什地区",
      "children": [
        {
          "value": 1,
          "text": "喀什"
        },
        {
          "value": 2,
          "text": "疏附县"
        },
        {
          "value": 3,
          "text": "托克扎克镇"
        },
        {
          "value": 4,
          "text": "疏勒县"
        },
        {
          "value": 5,
          "text": "疏勒镇"
        },
        {
          "value": 6,
          "text": "英吉沙县"
        },
        {
          "value": 7,
          "text": "英吉沙镇"
        },
        {
          "value": 8,
          "text": "泽普县"
        },
        {
          "value": 9,
          "text": "泽普镇"
        },
        {
          "value": 10,
          "text": "莎车县"
        },
        {
          "value": 11,
          "text": "莎车镇"
        },
        {
          "value": 12,
          "text": "叶城县"
        },
        {
          "value": 13,
          "text": "喀格勒克镇"
        },
        {
          "value": 14,
          "text": "麦盖提县"
        },
        {
          "value": 15,
          "text": "麦盖提镇"
        },
        {
          "value": 16,
          "text": "岳普湖县"
        },
        {
          "value": 17,
          "text": "岳普湖镇"
        },
        {
          "value": 18,
          "text": "伽师县"
        },
        {
          "value": 19,
          "text": "巴仁镇"
        },
        {
          "value": 20,
          "text": "巴楚县"
        },
        {
          "value": 21,
          "text": "巴楚镇"
        },
        {
          "value": 22,
          "text": "塔什库尔干塔吉克自治县"
        },
        {
          "value": 23,
          "text": "塔什库尔干镇"
        }
      ]
    },
    {
      "value": 330,
      "text": "阿克苏地区",
      "children": [
        {
          "value": 1,
          "text": "阿克苏"
        },
        {
          "value": 2,
          "text": "温宿县"
        },
        {
          "value": 3,
          "text": "温宿镇"
        },
        {
          "value": 4,
          "text": "库车县"
        },
        {
          "value": 5,
          "text": "库车镇"
        },
        {
          "value": 6,
          "text": "沙雅县"
        },
        {
          "value": 7,
          "text": "沙雅镇"
        },
        {
          "value": 8,
          "text": "新和县"
        },
        {
          "value": 9,
          "text": "新和镇"
        },
        {
          "value": 10,
          "text": "拜城县"
        },
        {
          "value": 11,
          "text": "拜城镇"
        },
        {
          "value": 12,
          "text": "乌什县"
        },
        {
          "value": 13,
          "text": "乌什镇"
        },
        {
          "value": 14,
          "text": "阿瓦提县"
        },
        {
          "value": 15,
          "text": "阿瓦提镇"
        },
        {
          "value": 16,
          "text": "柯坪县"
        },
        {
          "value": 17,
          "text": "柯坪镇"
        }
      ]
    },
    {
      "value": 331,
      "text": "和田地区",
      "children": [
        {
          "value": 1,
          "text": "和田"
        },
        {
          "value": 2,
          "text": "和田县"
        },
        {
          "value": 3,
          "text": "墨玉县"
        },
        {
          "value": 4,
          "text": "喀拉喀什镇"
        },
        {
          "value": 5,
          "text": "皮山县"
        },
        {
          "value": 6,
          "text": "固玛镇"
        },
        {
          "value": 7,
          "text": "洛浦县"
        },
        {
          "value": 8,
          "text": "洛浦镇"
        },
        {
          "value": 9,
          "text": "策勒县"
        },
        {
          "value": 10,
          "text": "策勒镇"
        },
        {
          "value": 11,
          "text": "于田县"
        },
        {
          "value": 12,
          "text": "木尕拉镇"
        },
        {
          "value": 13,
          "text": "民丰县"
        },
        {
          "value": 14,
          "text": "尼雅镇"
        }
      ]
    },
    {
      "value": 332,
      "text": "吐鲁番地区",
      "children": [
        {
          "value": 1,
          "text": "吐鲁番"
        },
        {
          "value": 2,
          "text": "鄯善县"
        },
        {
          "value": 3,
          "text": "鄯善镇"
        },
        {
          "value": 4,
          "text": "托克逊县"
        },
        {
          "value": 5,
          "text": "托克逊镇"
        }
      ]
    },
    {
      "value": 333,
      "text": "哈密地区",
      "children": [
        {
          "value": 1,
          "text": "哈密"
        },
        {
          "value": 2,
          "text": "伊吾县"
        },
        {
          "value": 3,
          "text": "伊吾镇"
        },
        {
          "value": 4,
          "text": "巴里坤哈萨克自治县"
        },
        {
          "value": 5,
          "text": "巴里坤镇"
        }
      ]
    },
    {
      "value": 334,
      "text": "克孜勒苏柯州",
      "children": [
        {
          "value": 1,
          "text": "阿图什"
        },
        {
          "value": 2,
          "text": "阿克陶县"
        },
        {
          "value": 3,
          "text": "阿克陶镇"
        },
        {
          "value": 4,
          "text": "阿合奇县"
        },
        {
          "value": 5,
          "text": "阿合奇镇"
        },
        {
          "value": 6,
          "text": "乌恰县"
        },
        {
          "value": 7,
          "text": "乌恰镇"
        }
      ]
    },
    {
      "value": 335,
      "text": "博尔塔拉州",
      "children": [
        {
          "value": 1,
          "text": "博乐"
        },
        {
          "value": 2,
          "text": "精河县"
        },
        {
          "value": 3,
          "text": "精河镇"
        },
        {
          "value": 4,
          "text": "温泉县"
        },
        {
          "value": 5,
          "text": "博格达尔镇"
        }
      ]
    },
    {
      "value": 336,
      "text": "昌吉州",
      "children": [
        {
          "value": 1,
          "text": "昌吉"
        },
        {
          "value": 2,
          "text": "阜康"
        },
        {
          "value": 3,
          "text": "米泉"
        },
        {
          "value": 4,
          "text": "呼图壁县"
        },
        {
          "value": 5,
          "text": "呼图壁镇"
        },
        {
          "value": 6,
          "text": "玛纳斯县"
        },
        {
          "value": 7,
          "text": "玛纳斯镇"
        },
        {
          "value": 8,
          "text": "奇台县"
        },
        {
          "value": 9,
          "text": "奇台镇"
        },
        {
          "value": 10,
          "text": "吉木萨尔县"
        },
        {
          "value": 11,
          "text": "吉木萨尔镇"
        },
        {
          "value": 12,
          "text": "木垒哈萨克自治县"
        },
        {
          "value": 13,
          "text": "木垒镇"
        }
      ]
    },
    {
      "value": 337,
      "text": "巴音郭楞州",
      "children": [
        {
          "value": 1,
          "text": "库尔勒"
        },
        {
          "value": 2,
          "text": "轮台县"
        },
        {
          "value": 3,
          "text": "轮台镇"
        },
        {
          "value": 4,
          "text": "尉犁县"
        },
        {
          "value": 5,
          "text": "尉犁镇"
        },
        {
          "value": 6,
          "text": "若羌县"
        },
        {
          "value": 7,
          "text": "若羌镇"
        },
        {
          "value": 8,
          "text": "且末县"
        },
        {
          "value": 9,
          "text": "且末镇"
        },
        {
          "value": 10,
          "text": "和静县"
        },
        {
          "value": 11,
          "text": "和静镇"
        },
        {
          "value": 12,
          "text": "和硕县"
        },
        {
          "value": 13,
          "text": "特吾里克镇"
        },
        {
          "value": 14,
          "text": "博湖县"
        },
        {
          "value": 15,
          "text": "博湖镇"
        },
        {
          "value": 16,
          "text": "焉耆回族自治县"
        },
        {
          "value": 17,
          "text": "焉耆镇"
        }
      ]
    },
    {
      "value": 338,
      "text": "伊犁州",
      "children": [
        {
          "value": 1,
          "text": "伊宁"
        },
        {
          "value": 2,
          "text": "奎屯"
        },
        {
          "value": 3,
          "text": "伊宁县"
        },
        {
          "value": 4,
          "text": "吉里于孜镇"
        },
        {
          "value": 5,
          "text": "霍城县"
        },
        {
          "value": 6,
          "text": "水定镇"
        },
        {
          "value": 7,
          "text": "巩留县"
        },
        {
          "value": 8,
          "text": "巩留镇"
        },
        {
          "value": 9,
          "text": "新源县"
        },
        {
          "value": 10,
          "text": "新源镇"
        },
        {
          "value": 11,
          "text": "昭苏县"
        },
        {
          "value": 12,
          "text": "昭苏镇"
        },
        {
          "value": 13,
          "text": "特克斯县"
        },
        {
          "value": 14,
          "text": "特克斯镇"
        },
        {
          "value": 15,
          "text": "尼勒克县"
        },
        {
          "value": 16,
          "text": "尼勒克镇"
        },
        {
          "value": 17,
          "text": "察布查尔锡伯自治县"
        },
        {
          "value": 18,
          "text": "察布查尔镇"
        }
      ]
    },
    {
      "value": 339,
      "text": "塔城地区",
      "children": [
        {
          "value": 1,
          "text": "塔城"
        },
        {
          "value": 2,
          "text": "乌苏"
        },
        {
          "value": 3,
          "text": "额敏县"
        },
        {
          "value": 4,
          "text": "额敏镇"
        },
        {
          "value": 5,
          "text": "沙湾县"
        },
        {
          "value": 6,
          "text": "三道河子镇"
        },
        {
          "value": 7,
          "text": "托里县"
        },
        {
          "value": 8,
          "text": "托里镇"
        },
        {
          "value": 9,
          "text": "裕民县"
        },
        {
          "value": 10,
          "text": "哈拉布拉镇"
        },
        {
          "value": 11,
          "text": "和布克赛尔蒙古自治县"
        },
        {
          "value": 12,
          "text": "和布克赛尔镇"
        }
      ]
    },
    {
      "value": 340,
      "text": "阿勒泰地区",
      "children": [
        {
          "value": 1,
          "text": "阿勒泰"
        },
        {
          "value": 2,
          "text": "布尔津县"
        },
        {
          "value": 3,
          "text": "布尔津镇"
        },
        {
          "value": 4,
          "text": "富蕴县"
        },
        {
          "value": 5,
          "text": "库额尔齐斯镇"
        },
        {
          "value": 6,
          "text": "福海县"
        },
        {
          "value": 7,
          "text": "哈巴河县"
        },
        {
          "value": 8,
          "text": "青河县"
        },
        {
          "value": 9,
          "text": "吉木乃县"
        }
      ]
    },
    {
      "value": 341,
      "text": "香港特别行政区",
      "children": [
        {
          "value": 1,
          "text": "中西区"
        },
        {
          "value": 2,
          "text": "东区"
        },
        {
          "value": 3,
          "text": "九龙城区"
        },
        {
          "value": 4,
          "text": "观塘区"
        },
        {
          "value": 5,
          "text": "南区"
        },
        {
          "value": 6,
          "text": "深水埗区"
        },
        {
          "value": 7,
          "text": "湾仔区"
        },
        {
          "value": 8,
          "text": "黄大仙区"
        },
        {
          "value": 9,
          "text": "油尖旺区"
        },
        {
          "value": 10,
          "text": "离岛区"
        },
        {
          "value": 11,
          "text": "葵青区"
        },
        {
          "value": 12,
          "text": "北区"
        },
        {
          "value": 13,
          "text": "西贡区"
        },
        {
          "value": 14,
          "text": "沙田区"
        },
        {
          "value": 15,
          "text": "屯门区"
        },
        {
          "value": 16,
          "text": "大埔区"
        },
        {
          "value": 17,
          "text": "荃湾区"
        },
        {
          "value": 18,
          "text": "元朗区"
        }
      ]
    },
    {
      "value": 342,
      "text": "澳门特别行政区",
      "children": [
        {
          "value": 1,
          "text": "澳门特别行政区"
        }
      ]
    },
    {
      "value": 343,
      "text": "台北",
      "children": []
    },
    {
      "value": 344,
      "text": "高雄",
      "children": []
    },
    {
      "value": 345,
      "text": "台中",
      "children": []
    },
    {
      "value": 346,
      "text": "花莲",
      "children": []
    },
    {
      "value": 347,
      "text": "基隆",
      "children": []
    },
    {
      "value": 348,
      "text": "嘉义",
      "children": []
    },
    {
      "value": 349,
      "text": "金门",
      "children": []
    },
    {
      "value": 350,
      "text": "连江",
      "children": []
    },
    {
      "value": 351,
      "text": "苗栗",
      "children": []
    },
    {
      "value": 352,
      "text": "南投",
      "children": []
    },
    {
      "value": 353,
      "text": "澎湖",
      "children": []
    },
    {
      "value": 354,
      "text": "屏东",
      "children": []
    },
    {
      "value": 355,
      "text": "台东",
      "children": []
    },
    {
      "value": 356,
      "text": "台南",
      "children": []
    },
    {
      "value": 357,
      "text": "桃园",
      "children": []
    },
    {
      "value": 358,
      "text": "新竹",
      "children": []
    },
    {
      "value": 359,
      "text": "宜兰",
      "children": []
    },
    {
      "value": 360,
      "text": "云林",
      "children": []
    },
    {
      "value": 361,
      "text": "彰化",
      "children": []
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

      <Cell title='所有城市' description={
        <Elevator
          list={dataList}
          height='460'
          onItemClick={(key: string, item: any) => onItemClick(key, item)}
          onIndexClick={(key: string) => onIndexClick(key)}
        />
      } />
    </>
  )
}
export default AddressComponent;