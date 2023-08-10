import { observable } from 'mobx'
import Taro from '@tarojs/taro'


function getStorageValue() {

    let storageData
    Taro.getStorage({
        key: 'CityCustmer',
        success: (res) => {
            storageData = res.data
        }
    })

    return storageData
}

const userStore = observable({

    city: Taro.getStorage({
        key: 'CityCustmer'
    }),
    changeCity(city) {
        this.city = city;
    }
})

export default userStore