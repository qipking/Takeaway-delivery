import React, { useState } from 'react'
import { Swiper } from '@nutui/nutui-react-taro';

const SwiperComponent = () => {
    const [initPage8, setInitPage8] = useState(0)
    const list = [
        'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
        'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
        'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
        'https://storage.360buyimg.com/jdc-article/fristfabu.jpg'
    ]
    return (
        <Swiper defaultValue={0} height={200} loop previousMargin="0px" nextMargin="0px">
            {list.map((item) => {
                return (
                    <Swiper.Item key={item}>
                        <img src={item} alt="" />
                    </Swiper.Item>
                )
            })}
        </Swiper>
    )
}
export default SwiperComponent;