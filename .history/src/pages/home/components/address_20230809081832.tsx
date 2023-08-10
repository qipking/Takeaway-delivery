import React, { useState } from 'react'
import { Elevator, Picker, Cell } from '@nutui/nutui-react-taro'

const AddressComponent = () => {

  const dataList = [
    {
      "title": "A",
      "list": [
        {
          "name": "鞍山",
          tags: "ANSHAN,鞍山",
          "id": 64
        },
        {
          "name": "安庆",
          tags: "ANQING,安庆",
          "id": 149
        },
        {
          "name": "安阳",
          tags: "ANYANG,安阳",
          "id": 174
        },
        {
          "name": "阿拉善盟",
          tags: "ALASHANMENG,阿拉善盟",
          "id": 202
        },
        {
          "name": "阿坝州",
          tags: "ABAZHOU,阿坝州",
          "id": 290
        },
        {
          "name": "安顺",
          tags: "ANSHUN,安顺",
          "id": 294
        },
        {
          "name": "阿里地区",
          tags: "ALIDIQU,阿里地区",
          "id": 316
        },
        {
          "name": "安康",
          tags: "ANKANG,安康",
          "id": 320
        },
        {
          "name": "阿克苏地区",
          tags: "AKESUDIQU,阿克苏地区",
          "id": 348
        },
        {
          "name": "阿勒泰地区",
          tags: "ALETAIDIQU,阿勒泰地区",
          "id": 355
        },
        {
          "name": "阿拉尔",
          tags: "ALAER,阿拉尔",
          "id": 356
        }
      ]
    },
    {
      "title": "B",
      "list": [
        {
          "name": "北京",
          tags: "BEIJING,北京",
          "id": 1
        },
        {
          "name": "保定",
          tags: "BAODING,保定",
          "id": 62
        },
        {
          "name": "包头",
          tags: "BAOTOU,包头",
          "id": 63
        },
        {
          "name": "本溪",
          tags: "BENXI,本溪",
          "id": 77
        },
        {
          "name": "蚌埠",
          tags: "BANGBU,蚌埠",
          "id": 100
        },
        {
          "name": "北海",
          tags: "BEIHAI,北海",
          "id": 161
        },
        {
          "name": "滨州",
          tags: "BINZHOU,滨州",
          "id": 166
        },
        {
          "name": "宝鸡",
          tags: "BAOJI,宝鸡",
          "id": 170
        },
        {
          "name": "亳州",
          tags: "BOZHOU,亳州",
          "id": 189
        },
        {
          "name": "巴彦淖尔",
          tags: "BAYANNAOER,巴彦淖尔",
          "id": 199
        },
        {
          "name": "白山",
          tags: "BAISHAN,白山",
          "id": 208
        },
        {
          "name": "白城",
          tags: "BAICHENG,白城",
          "id": 210
        },
        {
          "name": "百色",
          tags: "BAISE,百色",
          "id": 263
        },
        {
          "name": "白沙黎族自治县",
          tags: "BAISHALIZUZIZHIXIAN,白沙黎族自治县",
          "id": 278
        },
        {
          "name": "巴中",
          tags: "BAZHONG,巴中",
          "id": 288
        },
        {
          "name": "毕节地区",
          tags: "BIJIEDIQU,毕节地区",
          "id": 296
        },
        {
          "name": "保山",
          tags: "BAOSHAN,保山",
          "id": 301
        },
        {
          "name": "白银",
          tags: "BAIYIN,白银",
          "id": 323
        },
        {
          "name": "巴音郭楞州",
          tags: "BAYINGUOLENGZHOU,巴音郭楞州",
          "id": 350
        },
        {
          "name": "博尔塔拉州",
          tags: "BOERTALAZHOU,博尔塔拉州",
          "id": 352
        }
      ]
    },
    {
      "title": "C",
      "list": [
        {
          "name": "成都",
          tags: "CHENGDU,成都",
          "id": 17
        },
        {
          "name": "重庆",
          tags: "CHONGQING,重庆",
          "id": 18
        },
        {
          "name": "长沙",
          tags: "CHANGSHA,长沙",
          "id": 24
        },
        {
          "name": "长春",
          tags: "CHANGCHUN,长春",
          "id": 25
        },
        {
          "name": "常州",
          tags: "CHANGZHOU,常州",
          "id": 45
        },
        {
          "name": "沧州",
          tags: "CANGZHOU,沧州",
          "id": 59
        },
        {
          "name": "承德",
          tags: "CHENGDE,承德",
          "id": 72
        },
        {
          "name": "常德",
          tags: "CHANGDE,常德",
          "id": 106
        },
        {
          "name": "郴州",
          tags: "CHENZHOU,郴州",
          "id": 107
        },
        {
          "name": "长治",
          tags: "CHANGZHI,长治",
          "id": 127
        },
        {
          "name": "滁州",
          tags: "CHUZHOU,滁州",
          "id": 148
        },
        {
          "name": "池州",
          tags: "CHIZHOU,池州",
          "id": 187
        },
        {
          "name": "赤峰",
          tags: "CHIFENG,赤峰",
          "id": 196
        },
        {
          "name": "巢湖",
          tags: "CHAOHU,巢湖",
          "id": 204
        },
        {
          "name": "朝阳",
          tags: "CHAOYANG,朝阳",
          "id": 205
        },
        {
          "name": "潮州",
          tags: "CHAOZHOU,潮州",
          "id": 257
        },
        {
          "name": "崇左",
          tags: "CHONGZUO,崇左",
          "id": 267
        },
        {
          "name": "澄迈县",
          tags: "CHENGMAIXIAN,澄迈县",
          "id": 274
        },
        {
          "name": "楚雄州",
          tags: "CHUXIONGZHOU,楚雄州",
          "id": 308
        },
        {
          "name": "昌都地区",
          tags: "CHANGDUDIQU,昌都地区",
          "id": 313
        },
        {
          "name": "昌吉州",
          tags: "CHANGJIZHOU,昌吉州",
          "id": 351
        }
      ]
    },
    {
      "title": "D",
      "list": [
        {
          "name": "大连",
          tags: "DALIAN,大连",
          "id": 14
        },
        {
          "name": "东莞",
          tags: "DONGWAN,东莞",
          "id": 21
        },
        {
          "name": "大庆",
          tags: "DAQING,大庆",
          "id": 48
        },
        {
          "name": "东营",
          tags: "DONGYING,东营",
          "id": 73
        },
        {
          "name": "德州",
          tags: "DEZHOU,德州",
          "id": 120
        },
        {
          "name": "大同",
          tags: "DATONG,大同",
          "id": 125
        },
        {
          "name": "大理州",
          tags: "DALIZHOU,大理州",
          "id": 136
        },
        {
          "name": "丹东",
          tags: "DANDONG,丹东",
          "id": 163
        },
        {
          "name": "德阳",
          tags: "DEYANG,德阳",
          "id": 173
        },
        {
          "name": "大兴安岭地区",
          tags: "DAXINGANLINGDIQU,大兴安岭地区",
          "id": 218
        },
        {
          "name": "儋州",
          tags: "DANZHOU,儋州",
          "id": 270
        },
        {
          "name": "东方",
          tags: "DONGFANG,东方",
          "id": 273
        },
        {
          "name": "定安县",
          tags: "DINGANXIAN,定安县",
          "id": 275
        },
        {
          "name": "达州",
          tags: "DAZHOU,达州",
          "id": 285
        },
        {
          "name": "德宏州",
          tags: "DEHONGZHOU,德宏州",
          "id": 309
        },
        {
          "name": "迪庆州",
          tags: "DIQINGZHOU,迪庆州",
          "id": 311
        },
        {
          "name": "定西",
          tags: "DINGXI,定西",
          "id": 330
        }
      ]
    },
    {
      "title": "E",
      "list": [
        {
          "name": "鄂尔多斯",
          tags: "EERDUOSI,鄂尔多斯",
          "id": 43
        },
        {
          "name": "鄂州",
          tags: "EZHOU,鄂州",
          "id": 230
        },
        {
          "name": "恩施州",
          tags: "ENSHIZHOU,恩施州",
          "id": 235
        }
      ]
    },
    {
      "title": "F",
      "list": [
        {
          "name": "福州",
          tags: "FUZHOU,福州",
          "id": 34
        },
        {
          "name": "佛山",
          tags: "FOSHAN,佛山",
          "id": 36
        },
        {
          "name": "抚顺",
          tags: "FUSHUN,抚顺",
          "id": 66
        },
        {
          "name": "阜新",
          tags: "FUXIN,阜新",
          "id": 164
        },
        {
          "name": "阜阳",
          tags: "FUYANG,阜阳",
          "id": 188
        },
        {
          "name": "抚州",
          tags: "FUZHOU,抚州",
          "id": 223
        },
        {
          "name": "防城港",
          tags: "FANGCHENGGANG,防城港",
          "id": 260
        }
      ]
    },
    {
      "title": "G",
      "list": [
        {
          "name": "广州",
          tags: "GUANGZHOU,广州",
          "id": 3
        },
        {
          "name": "贵阳",
          tags: "GUIYANG,贵阳",
          "id": 82
        },
        {
          "name": "赣州",
          tags: "GANZHOU,赣州",
          "id": 102
        },
        {
          "name": "桂林",
          tags: "GUILIN,桂林",
          "id": 135
        },
        {
          "name": "贵港",
          tags: "GUIGANG,贵港",
          "id": 262
        },
        {
          "name": "广元",
          tags: "GUANGYUAN,广元",
          "id": 280
        },
        {
          "name": "广安",
          tags: "GUANGAN,广安",
          "id": 284
        },
        {
          "name": "甘孜州",
          tags: "GANZIZHOU,甘孜州",
          "id": 291
        },
        {
          "name": "甘南州",
          tags: "GANNANZHOU,甘南州",
          "id": 333
        },
        {
          "name": "固原",
          tags: "GUYUAN,固原",
          "id": 336
        },
        {
          "name": "果洛州",
          tags: "GUOLUOZHOU,果洛州",
          "id": 342
        }
      ]
    },
    {
      "title": "H",
      "list": [
        {
          "name": "杭州",
          tags: "HANGZHOU,杭州",
          "id": 5
        },
        {
          "name": "合肥",
          tags: "HEFEI,合肥",
          "id": 15
        },
        {
          "name": "哈尔滨",
          tags: "HAERBIN,哈尔滨",
          "id": 16
        },
        {
          "name": "呼和浩特",
          tags: "HUHEHAOTE,呼和浩特",
          "id": 41
        },
        {
          "name": "邯郸",
          tags: "HANDAN,邯郸",
          "id": 60
        },
        {
          "name": "葫芦岛",
          tags: "HULUDAO,葫芦岛",
          "id": 70
        },
        {
          "name": "衡水",
          tags: "HENGSHUI,衡水",
          "id": 80
        },
        {
          "name": "海口",
          tags: "HAIKOU,海口",
          "id": 83
        },
        {
          "name": "湖州",
          tags: "HUZHOU,湖州",
          "id": 90
        },
        {
          "name": "淮安",
          tags: "HUAIAN,淮安",
          "id": 97
        },
        {
          "name": "衡阳",
          tags: "HENGYANG,衡阳",
          "id": 105
        },
        {
          "name": "汉中",
          tags: "HANZHONG,汉中",
          "id": 115
        },
        {
          "name": "菏泽",
          tags: "HEZE,菏泽",
          "id": 124
        },
        {
          "name": "惠州",
          tags: "HUIZHOU,惠州",
          "id": 133
        },
        {
          "name": "黄山",
          tags: "HUANGSHAN,黄山",
          "id": 141
        },
        {
          "name": "淮南",
          tags: "HUAINAN,淮南",
          "id": 150
        },
        {
          "name": "淮北",
          tags: "HUAIBEI,淮北",
          "id": 183
        },
        {
          "name": "呼伦贝尔",
          tags: "HULUNBEIER,呼伦贝尔",
          "id": 198
        },
        {
          "name": "鹤岗",
          tags: "HEGANG,鹤岗",
          "id": 212
        },
        {
          "name": "黑河",
          tags: "HEIHE,黑河",
          "id": 217
        },
        {
          "name": "黄石",
          tags: "HUANGSHI,黄石",
          "id": 227
        },
        {
          "name": "黄冈",
          tags: "HUANGGANG,黄冈",
          "id": 232
        },
        {
          "name": "怀化",
          tags: "HUAIHUA,怀化",
          "id": 244
        },
        {
          "name": "鹤壁",
          tags: "HEBI,鹤壁",
          "id": 247
        },
        {
          "name": "河源",
          tags: "HEYUAN,河源",
          "id": 254
        },
        {
          "name": "贺州",
          tags: "HEZHOU,贺州",
          "id": 264
        },
        {
          "name": "河池",
          tags: "HECHI,河池",
          "id": 265
        },
        {
          "name": "红河州",
          tags: "HONGHEZHOU,红河州",
          "id": 306
        },
        {
          "name": "海东地区",
          tags: "HAIDONGDIQU,海东地区",
          "id": 338
        },
        {
          "name": "海北州",
          tags: "HAIBEIZHOU,海北州",
          "id": 339
        },
        {
          "name": "黄南州",
          tags: "HUANGNANZHOU,黄南州",
          "id": 340
        },
        {
          "name": "海南州",
          tags: "HAINANZHOU,海南州",
          "id": 341
        },
        {
          "name": "海西州",
          tags: "HAIXIZHOU,海西州",
          "id": 344
        },
        {
          "name": "哈密地区",
          tags: "HAMIDIQU,哈密地区",
          "id": 346
        },
        {
          "name": "和田地区",
          tags: "HETIANDIQU,和田地区",
          "id": 347
        }
      ]
    },
    {
      "title": "J",
      "list": [
        {
          "name": "济南",
          tags: "JINAN,济南",
          "id": 12
        },
        {
          "name": "锦州",
          tags: "JINZHOU,锦州",
          "id": 68
        },
        {
          "name": "晋中",
          tags: "JINZHONG,晋中",
          "id": 71
        },
        {
          "name": "吉林",
          tags: "JILIN,吉林",
          "id": 74
        },
        {
          "name": "济宁",
          tags: "JINING,济宁",
          "id": 79
        },
        {
          "name": "金华",
          tags: "JINHUA,金华",
          "id": 86
        },
        {
          "name": "嘉兴",
          tags: "JIAXING,嘉兴",
          "id": 88
        },
        {
          "name": "九江",
          tags: "JIUJIANG,九江",
          "id": 101
        },
        {
          "name": "荆州",
          tags: "JINGZHOU,荆州",
          "id": 109
        },
        {
          "name": "景德镇",
          tags: "JINGDEZHEN,景德镇",
          "id": 151
        },
        {
          "name": "江门",
          tags: "JIANGMEN,江门",
          "id": 153
        },
        {
          "name": "揭阳",
          tags: "JIEYANG,揭阳",
          "id": 154
        },
        {
          "name": "焦作",
          tags: "JIAOZUO,焦作",
          "id": 175
        },
        {
          "name": "晋城",
          tags: "JINCHENG,晋城",
          "id": 190
        },
        {
          "name": "鸡西",
          tags: "JIXI,鸡西",
          "id": 211
        },
        {
          "name": "佳木斯",
          tags: "JIAMUSI,佳木斯",
          "id": 215
        },
        {
          "name": "吉安",
          tags: "JIAN,吉安",
          "id": 221
        },
        {
          "name": "荆门",
          tags: "JINGMEN,荆门",
          "id": 229
        },
        {
          "name": "济源",
          tags: "JIYUAN,济源",
          "id": 252
        },
        {
          "name": "金昌",
          tags: "JINCHANG,金昌",
          "id": 322
        },
        {
          "name": "嘉峪关",
          tags: "JIAYUGUAN,嘉峪关",
          "id": 324
        },
        {
          "name": "酒泉",
          tags: "JIUQUAN,酒泉",
          "id": 328
        }
      ]
    },
    {
      "title": "K",
      "list": [
        {
          "name": "昆明",
          tags: "KUNMING,昆明",
          "id": 19
        },
        {
          "name": "开封",
          tags: "KAIFENG,开封",
          "id": 110
        },
        {
          "name": "喀什地区",
          tags: "KASHIDIQU,喀什地区",
          "id": 179
        },
        {
          "name": "克拉玛依",
          tags: "KELAMAYI,克拉玛依",
          "id": 180
        },
        {
          "name": "克孜勒苏柯州",
          tags: "KEZILESUKEZHOU,克孜勒苏柯州",
          "id": 349
        }
      ]
    },
    {
      "title": "L",
      "list": [
        {
          "name": "洛阳",
          tags: "LUOYANG,洛阳",
          "id": 27
        },
        {
          "name": "兰州",
          tags: "LANZHOU,兰州",
          "id": 30
        },
        {
          "name": "廊坊",
          tags: "LANGFANG,廊坊",
          "id": 46
        },
        {
          "name": "临沂",
          tags: "LINYI,临沂",
          "id": 58
        },
        {
          "name": "辽阳",
          tags: "LIAOYANG,辽阳",
          "id": 75
        },
        {
          "name": "连云港",
          tags: "LIANYUNGANG,连云港",
          "id": 96
        },
        {
          "name": "泸州",
          tags: "LUZHOU,泸州",
          "id": 117
        },
        {
          "name": "莱芜",
          tags: "LAIWU,莱芜",
          "id": 122
        },
        {
          "name": "聊城",
          tags: "LIAOCHENG,聊城",
          "id": 123
        },
        {
          "name": "柳州",
          tags: "LIUZHOU,柳州",
          "id": 134
        },
        {
          "name": "丽江",
          tags: "LIJIANG,丽江",
          "id": 137
        },
        {
          "name": "丽水",
          tags: "LISHUI,丽水",
          "id": 139
        },
        {
          "name": "拉萨",
          tags: "LASA,拉萨",
          "id": 178
        },
        {
          "name": "六安",
          tags: "LIUAN,六安",
          "id": 186
        },
        {
          "name": "临汾",
          tags: "LINFEN,临汾",
          "id": 193
        },
        {
          "name": "吕梁",
          tags: "LVLIANG,吕梁",
          "id": 194
        },
        {
          "name": "辽源",
          tags: "LIAOYUAN,辽源",
          "id": 206
        },
        {
          "name": "龙岩",
          tags: "LONGYAN,龙岩",
          "id": 226
        },
        {
          "name": "娄底",
          tags: "LOUDI,娄底",
          "id": 245
        },
        {
          "name": "漯河",
          tags: "LUOHE,漯河",
          "id": 248
        },
        {
          "name": "来宾",
          tags: "LAIBIN,来宾",
          "id": 266
        },
        {
          "name": "临高县",
          tags: "LINGAOXIAN,临高县",
          "id": 277
        },
        {
          "name": "乐山",
          tags: "LESHAN,乐山",
          "id": 283
        },
        {
          "name": "凉山州",
          tags: "LIANGSHANZHOU,凉山州",
          "id": 292
        },
        {
          "name": "六盘水",
          tags: "LIUPANSHUI,六盘水",
          "id": 293
        },
        {
          "name": "临沧",
          tags: "LINCANG,临沧",
          "id": 304
        },
        {
          "name": "林芝地区",
          tags: "LINZHIDIQU,林芝地区",
          "id": 317
        },
        {
          "name": "陇南",
          tags: "LONGNAN,陇南",
          "id": 331
        },
        {
          "name": "临夏州",
          tags: "LINXIAZHOU,临夏州",
          "id": 332
        }
      ]
    },
    {
      "title": "M",
      "list": [
        {
          "name": "绵阳",
          tags: "MIANYANG,绵阳",
          "id": 50
        },
        {
          "name": "马鞍山",
          tags: "MAANSHAN,马鞍山",
          "id": 99
        },
        {
          "name": "牡丹江",
          tags: "MUDANJIANG,牡丹江",
          "id": 129
        },
        {
          "name": "茂名",
          tags: "MAOMING,茂名",
          "id": 155
        },
        {
          "name": "梅州",
          tags: "MEIZHOU,梅州",
          "id": 156
        },
        {
          "name": "眉山",
          tags: "MEISHAN,眉山",
          "id": 286
        }
      ]
    },
    {
      "title": "N",
      "list": [
        {
          "name": "南京",
          tags: "NANJING,南京",
          "id": 11
        },
        {
          "name": "宁波",
          tags: "NINGBO,宁波",
          "id": 20
        },
        {
          "name": "南宁",
          tags: "NANNING,南宁",
          "id": 33
        },
        {
          "name": "南昌",
          tags: "NANCHANG,南昌",
          "id": 38
        },
        {
          "name": "南充",
          tags: "NANCHONG,南充",
          "id": 53
        },
        {
          "name": "南通",
          tags: "NANTONG,南通",
          "id": 92
        },
        {
          "name": "南阳",
          tags: "NANYANG,南阳",
          "id": 113
        },
        {
          "name": "宁德",
          tags: "NINGDE,宁德",
          "id": 144
        },
        {
          "name": "南平",
          tags: "NANPING,南平",
          "id": 145
        },
        {
          "name": "内江",
          tags: "NEIJIANG,内江",
          "id": 282
        },
        {
          "name": "怒江州",
          tags: "NUJIANGZHOU,怒江州",
          "id": 310
        },
        {
          "name": "那曲地区",
          tags: "NAQUDIQU,那曲地区",
          "id": 312
        }
      ]
    },
    {
      "title": "P",
      "list": [
        {
          "name": "平顶山",
          tags: "PINGDINGSHAN,平顶山",
          "id": 103
        },
        {
          "name": "攀枝花",
          tags: "PANZHIHUA,攀枝花",
          "id": 119
        },
        {
          "name": "莆田",
          tags: "PUTIAN,莆田",
          "id": 143
        },
        {
          "name": "盘锦",
          tags: "PANJIN,盘锦",
          "id": 165
        },
        {
          "name": "濮阳",
          tags: "PUYANG,濮阳",
          "id": 176
        },
        {
          "name": "萍乡",
          tags: "PINGXIANG,萍乡",
          "id": 219
        },
        {
          "name": "普洱",
          tags: "PUER,普洱",
          "id": 303
        },
        {
          "name": "平凉",
          tags: "PINGLIANG,平凉",
          "id": 327
        }
      ]
    },
    {
      "title": "Q",
      "list": [
        {
          "name": "青岛",
          tags: "QINGDAO,青岛",
          "id": 13
        },
        {
          "name": "泉州",
          tags: "QUANZHOU,泉州",
          "id": 35
        },
        {
          "name": "秦皇岛",
          tags: "QINHUANGDAO,秦皇岛",
          "id": 61
        },
        {
          "name": "齐齐哈尔",
          tags: "QIQIHAER,齐齐哈尔",
          "id": 65
        },
        {
          "name": "曲靖",
          tags: "QUJING,曲靖",
          "id": 138
        },
        {
          "name": "衢州",
          tags: "QUZHOU,衢州",
          "id": 140
        },
        {
          "name": "清远",
          tags: "QINGYUAN,清远",
          "id": 157
        },
        {
          "name": "七台河",
          tags: "QITAIHE,七台河",
          "id": 216
        },
        {
          "name": "潜江",
          tags: "QIANJIANG,潜江",
          "id": 238
        },
        {
          "name": "钦州",
          tags: "QINZHOU,钦州",
          "id": 261
        },
        {
          "name": "琼海",
          tags: "QIONGHAI,琼海",
          "id": 269
        },
        {
          "name": "黔西南州",
          tags: "QIANXINANZHOU,黔西南州",
          "id": 297
        },
        {
          "name": "黔东南州",
          tags: "QIANDONGNANZHOU,黔东南州",
          "id": 298
        },
        {
          "name": "黔南州",
          tags: "QIANNANZHOU,黔南州",
          "id": 299
        },
        {
          "name": "庆阳",
          tags: "QINGYANG,庆阳",
          "id": 329
        }
      ]
    },
    {
      "title": "R",
      "list": [
        {
          "name": "日照",
          tags: "RIZHAO,日照",
          "id": 167
        },
        {
          "name": "日喀则地区",
          tags: "RIKAZEDIQU,日喀则地区",
          "id": 315
        }
      ]
    },
    {
      "title": "S",
      "list": [
        {
          "name": "深圳",
          tags: "SHENZHEN,深圳",
          "id": 2
        },
        {
          "name": "上海",
          tags: "SHANGHAI,上海",
          "id": 4
        },
        {
          "name": "沈阳",
          tags: "SHENYANG,沈阳",
          "id": 8
        },
        {
          "name": "石家庄",
          tags: "SHIJIAZHUANG,石家庄",
          "id": 22
        },
        {
          "name": "苏州",
          tags: "SUZHOU,苏州",
          "id": 23
        },
        {
          "name": "三亚",
          tags: "SANYA,三亚",
          "id": 37
        },
        {
          "name": "绍兴",
          tags: "SHAOXING,绍兴",
          "id": 89
        },
        {
          "name": "绥化",
          tags: "SUIHUA,绥化",
          "id": 128
        },
        {
          "name": "四平",
          tags: "SIPING,四平",
          "id": 130
        },
        {
          "name": "宿迁",
          tags: "SUQIAN,宿迁",
          "id": 147
        },
        {
          "name": "汕头",
          tags: "SHANTOU,汕头",
          "id": 158
        },
        {
          "name": "商丘",
          tags: "SHANGQIU,商丘",
          "id": 177
        },
        {
          "name": "石河子",
          tags: "SHIHEZI,石河子",
          "id": 181
        },
        {
          "name": "宿州",
          tags: "SUZHOU,宿州",
          "id": 185
        },
        {
          "name": "朔州",
          tags: "SHUOZHOU,朔州",
          "id": 191
        },
        {
          "name": "松原",
          tags: "SONGYUAN,松原",
          "id": 209
        },
        {
          "name": "双鸭山",
          tags: "SHUANGYASHAN,双鸭山",
          "id": 213
        },
        {
          "name": "上饶",
          tags: "SHANGRAO,上饶",
          "id": 224
        },
        {
          "name": "三明",
          tags: "SANMING,三明",
          "id": 225
        },
        {
          "name": "十堰",
          tags: "SHIYAN,十堰",
          "id": 228
        },
        {
          "name": "随州",
          tags: "SUIZHOU,随州",
          "id": 234
        },
        {
          "name": "神农架林区",
          tags: "SHENNONGJIALINQU,神农架林区",
          "id": 239
        },
        {
          "name": "邵阳",
          tags: "SHAOYANG,邵阳",
          "id": 240
        },
        {
          "name": "三门峡",
          tags: "SANMENXIA,三门峡",
          "id": 249
        },
        {
          "name": "韶关",
          tags: "SHAOGUAN,韶关",
          "id": 253
        },
        {
          "name": "汕尾",
          tags: "SHANWEI,汕尾",
          "id": 255
        },
        {
          "name": "遂宁",
          tags: "SUINING,遂宁",
          "id": 281
        },
        {
          "name": "山南地区",
          tags: "SHANNANDIQU,山南地区",
          "id": 314
        },
        {
          "name": "商洛",
          tags: "SHANGLUO,商洛",
          "id": 321
        },
        {
          "name": "石嘴山",
          tags: "SHIZUISHAN,石嘴山",
          "id": 334
        }
      ]
    },
    {
      "title": "T",
      "list": [
        {
          "name": "天津",
          tags: "TIANJIN,天津",
          "id": 7
        },
        {
          "name": "太原",
          tags: "TAIYUAN,太原",
          "id": 26
        },
        {
          "name": "唐山",
          tags: "TANGSHAN,唐山",
          "id": 40
        },
        {
          "name": "铁岭",
          tags: "TIELING,铁岭",
          "id": 69
        },
        {
          "name": "台州",
          tags: "TAIZHOU,台州",
          "id": 87
        },
        {
          "name": "泰州",
          tags: "TAIZHOU,泰州",
          "id": 95
        },
        {
          "name": "泰安",
          tags: "TAIAN,泰安",
          "id": 121
        },
        {
          "name": "天水",
          tags: "TIANSHUI,天水",
          "id": 169
        },
        {
          "name": "铜陵",
          tags: "TONGLING,铜陵",
          "id": 184
        },
        {
          "name": "通辽",
          tags: "TONGLIAO,通辽",
          "id": 197
        },
        {
          "name": "通化",
          tags: "TONGHUA,通化",
          "id": 207
        },
        {
          "name": "天门",
          tags: "TIANMEN,天门",
          "id": 237
        },
        {
          "name": "屯昌县",
          tags: "TUNCHANGXIAN,屯昌县",
          "id": 276
        },
        {
          "name": "铜仁地区",
          tags: "TONGRENDIQU,铜仁地区",
          "id": 295
        },
        {
          "name": "铜川",
          tags: "TONGCHUAN,铜川",
          "id": 318
        },
        {
          "name": "吐鲁番地区",
          tags: "TULUFANDIQU,吐鲁番地区",
          "id": 345
        },
        {
          "name": "塔城地区",
          tags: "TACHENGDIQU,塔城地区",
          "id": 354
        }
      ]
    },
    {
      "title": "W",
      "list": [
        {
          "name": "武汉",
          tags: "WUHAN,武汉",
          "id": 6
        },
        {
          "name": "威海",
          tags: "WEIHAI,威海",
          "id": 42
        },
        {
          "name": "无锡",
          tags: "WUXI,无锡",
          "id": 47
        },
        {
          "name": "乌鲁木齐",
          tags: "WULUMUQI,乌鲁木齐",
          "id": 52
        },
        {
          "name": "潍坊",
          tags: "WEIFANG,潍坊",
          "id": 81
        },
        {
          "name": "温州",
          tags: "WENZHOU,温州",
          "id": 85
        },
        {
          "name": "芜湖",
          tags: "WUHU,芜湖",
          "id": 98
        },
        {
          "name": "乌海",
          tags: "WUHAI,乌海",
          "id": 195
        },
        {
          "name": "乌兰察布",
          tags: "WULANCHABU,乌兰察布",
          "id": 200
        },
        {
          "name": "梧州",
          tags: "WUZHOU,梧州",
          "id": 259
        },
        {
          "name": "五指山",
          tags: "WUZHISHAN,五指山",
          "id": 268
        },
        {
          "name": "文昌",
          tags: "WENCHANG,文昌",
          "id": 271
        },
        {
          "name": "万宁",
          tags: "WANNING,万宁",
          "id": 272
        },
        {
          "name": "文山州",
          tags: "WENSHANZHOU,文山州",
          "id": 305
        },
        {
          "name": "渭南",
          tags: "WEINAN,渭南",
          "id": 319
        },
        {
          "name": "武威",
          tags: "WUWEI,武威",
          "id": 325
        },
        {
          "name": "吴忠",
          tags: "WUZHONG,吴忠",
          "id": 335
        }
      ]
    },
    {
      "title": "X",
      "list": [
        {
          "name": "西安",
          tags: "XIAN,西安",
          "id": 10
        },
        {
          "name": "西宁",
          tags: "XINING,西宁",
          "id": 28
        },
        {
          "name": "厦门",
          tags: "XIAMEN,厦门",
          "id": 32
        },
        {
          "name": "徐州",
          tags: "XUZHOU,徐州",
          "id": 39
        },
        {
          "name": "湘潭",
          tags: "XIANGTAN,湘潭",
          "id": 55
        },
        {
          "name": "邢台",
          tags: "XINGTAI,邢台",
          "id": 67
        },
        {
          "name": "襄阳",
          tags: "XIANGYANG,襄阳",
          "id": 108
        },
        {
          "name": "新乡",
          tags: "XINXIANG,新乡",
          "id": 111
        },
        {
          "name": "许昌",
          tags: "XUCHANG,许昌",
          "id": 112
        },
        {
          "name": "咸阳",
          tags: "XIANYANG,咸阳",
          "id": 116
        },
        {
          "name": "新余",
          tags: "XINYU,新余",
          "id": 152
        },
        {
          "name": "宣城",
          tags: "XUANCHENG,宣城",
          "id": 182
        },
        {
          "name": "忻州",
          tags: "XINZHOU,忻州",
          "id": 192
        },
        {
          "name": "锡林郭勒盟",
          tags: "XILINGUOLEMENG,锡林郭勒盟",
          "id": 201
        },
        {
          "name": "兴安盟",
          tags: "XINGANMENG,兴安盟",
          "id": 203
        },
        {
          "name": "孝感",
          tags: "XIAOGAN,孝感",
          "id": 231
        },
        {
          "name": "咸宁",
          tags: "XIANNING,咸宁",
          "id": 233
        },
        {
          "name": "仙桃",
          tags: "XIANTAO,仙桃",
          "id": 236
        },
        {
          "name": "湘西州",
          tags: "XIANGXIZHOU,湘西州",
          "id": 246
        },
        {
          "name": "信阳",
          tags: "XINYANG,信阳",
          "id": 250
        },
        {
          "name": "西双版纳州",
          tags: "XISHUANGBANNAZHOU,西双版纳州",
          "id": 307
        }
      ]
    },
    {
      "title": "Y",
      "list": [
        {
          "name": "烟台",
          tags: "YANTAI,烟台",
          "id": 29
        },
        {
          "name": "银川",
          tags: "YINCHUAN,银川",
          "id": 49
        },
        {
          "name": "宜昌",
          tags: "YICHANG,宜昌",
          "id": 51
        },
        {
          "name": "岳阳",
          tags: "YUEYANG,岳阳",
          "id": 56
        },
        {
          "name": "营口",
          tags: "YINGKOU,营口",
          "id": 76
        },
        {
          "name": "扬州",
          tags: "YANGZHOU,扬州",
          "id": 91
        },
        {
          "name": "盐城",
          tags: "YANCHENG,盐城",
          "id": 94
        },
        {
          "name": "运城",
          tags: "YUNCHENG,运城",
          "id": 104
        },
        {
          "name": "宜宾",
          tags: "YIBIN,宜宾",
          "id": 118
        },
        {
          "name": "阳泉",
          tags: "YANGQUAN,阳泉",
          "id": 126
        },
        {
          "name": "延吉",
          tags: "YANJI,延吉",
          "id": 131
        },
        {
          "name": "玉林",
          tags: "YULIN,玉林",
          "id": 162
        },
        {
          "name": "延安",
          tags: "YANAN,延安",
          "id": 171
        },
        {
          "name": "榆林",
          tags: "YULIN,榆林",
          "id": 172
        },
        {
          "name": "伊春",
          tags: "YICHUN,伊春",
          "id": 214
        },
        {
          "name": "鹰潭",
          tags: "YINGTAN,鹰潭",
          "id": 220
        },
        {
          "name": "宜春",
          tags: "YICHUN,宜春",
          "id": 222
        },
        {
          "name": "益阳",
          tags: "YIYANG,益阳",
          "id": 242
        },
        {
          "name": "永州",
          tags: "YONGZHOU,永州",
          "id": 243
        },
        {
          "name": "阳江",
          tags: "YANGJIANG,阳江",
          "id": 256
        },
        {
          "name": "云浮",
          tags: "YUNFU,云浮",
          "id": 258
        },
        {
          "name": "雅安",
          tags: "YAAN,雅安",
          "id": 287
        },
        {
          "name": "玉溪",
          tags: "YUXI,玉溪",
          "id": 300
        },
        {
          "name": "玉树州",
          tags: "YUSHUZHOU,玉树州",
          "id": 343
        },
        {
          "name": "伊犁州",
          tags: "YILIZHOU,伊犁州",
          "id": 353
        }
      ]
    },
    {
      "title": "Z",
      "list": [
        {
          "name": "郑州",
          tags: "ZHENGZHOU,郑州",
          "id": 9
        },
        {
          "name": "遵义",
          tags: "ZUNYI,遵义",
          "id": 44
        },
        {
          "name": "株洲",
          tags: "ZHUZHOU,株洲",
          "id": 54
        },
        {
          "name": "淄博",
          tags: "ZIBO,淄博",
          "id": 57
        },
        {
          "name": "张家口",
          tags: "ZHANGJIAKOU,张家口",
          "id": 78
        },
        {
          "name": "珠海",
          tags: "ZHUHAI,珠海",
          "id": 84
        },
        {
          "name": "镇江",
          tags: "ZHENJIANG,镇江",
          "id": 93
        },
        {
          "name": "周口",
          tags: "ZHOUKOU,周口",
          "id": 114
        },
        {
          "name": "中山",
          tags: "ZHONGSHAN,中山",
          "id": 132
        },
        {
          "name": "漳州",
          tags: "ZHANGZHOU,漳州",
          "id": 142
        },
        {
          "name": "舟山",
          tags: "ZHOUSHAN,舟山",
          "id": 146
        },
        {
          "name": "湛江",
          tags: "ZHANJIANG,湛江",
          "id": 159
        },
        {
          "name": "肇庆",
          tags: "ZHAOQING,肇庆",
          "id": 160
        },
        {
          "name": "枣庄",
          tags: "ZAOZHUANG,枣庄",
          "id": 168
        },
        {
          "name": "张家界",
          tags: "ZHANGJIAJIE,张家界",
          "id": 241
        },
        {
          "name": "驻马店",
          tags: "ZHUMADIAN,驻马店",
          "id": 251
        },
        {
          "name": "自贡",
          tags: "ZIGONG,自贡",
          "id": 279
        },
        {
          "name": "资阳",
          tags: "ZIYANG,资阳",
          "id": 289
        },
        {
          "name": "昭通",
          tags: "ZHAOTONG,昭通",
          "id": 302
        },
        {
          "name": "张掖",
          tags: "ZHANGYE,张掖",
          "id": 326
        },
        {
          "name": "中卫",
          tags: "ZHONGWEI,中卫",
          "id": 337
        }
      ]
    }
  ]
  const onItemClick = (key: string, item: any) => {
    setDefaultValue([item.name])
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