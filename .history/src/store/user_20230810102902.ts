import { observable } from 'mobx'
import Taro from '@tarojs/taro'

const userStore = observable({

    getStorageValue() {

        let storageData
        Taro.getStorage({
            key: 'CityCustmer',
            success: (res) => {
                storageData = res.data
            }
        })

        return storageData
    },

    city: this.getStorageValue(),
    changeCity(city) {
        this.city = city;
    }
})

export default userStore