import { observable } from 'mobx'

const userStore = observable({
    city: "城市",
    changeCity(city){
        this.city = city;
    }
})

export default userStore