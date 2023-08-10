import React, { useState } from 'react'
//import { Swiper } from '@nutui/nutui-react-taro';
import { View, Swiper, SwiperItem } from '@tarojs/components';

class SwiperComponent extends React.Component {
    list = [
        'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
        'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
        'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
        'https://storage.360buyimg.com/jdc-article/fristfabu.jpg'
    ]
    render() {
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
                    style='height:130px'
                    circular
                    indicatorDots
                    autoplay>
                    {this.list.map((item) => {
                        return (
                            <SwiperItem key={item}>
                                <img style='height:130px' mode="aspectFit" src={item} alt="" />
                            </SwiperItem>
                        )
                    })}
                </Swiper>
            </View>
        )
    }
}
export default SwiperComponent;