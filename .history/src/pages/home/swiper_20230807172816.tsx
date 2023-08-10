import React, { useState } from 'react'
//import { Swiper } from '@nutui/nutui-react-taro';
import { View, Swiper, SwiperItem } from '@tarojs/components';

const SwiperComponent = () => {
    const [initPage8, setInitPage8] = useState(0)
    const list = [
        'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
        'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
        'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
        'https://storage.360buyimg.com/jdc-article/fristfabu.jpg'
    ]
    return (
        <View>
            {/* <Swiper defaultValue={0} height={220} autoPlay indicator loop previousMargin="0px" nextMargin="0px">
                {list.map((item) => {
                    return (
                        <Swiper.Item key={item}>
                            <img src={item} alt="" />
                        </Swiper.Item>
                    )
                })}
            </Swiper> */}
            <Swiper
                className='test-h'
                indicatorColor='#999'
                indicatorActiveColor='#333'
                zoom
                full
                circular
                indicatorDots
                autoplay>
                {list.map((item) => {
                    return (
                        <SwiperItem key={item}>
                            <img style='height:150px' src={item} alt="" />
                        </SwiperItem>
                    )
                })}
            </Swiper>
        </View>
    )
}
export default SwiperComponent;