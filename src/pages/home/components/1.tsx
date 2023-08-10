


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