import { observable } from 'mobx'

const userStore = observable({
    city: "城市",
    changeCity(city){
        this.CityCustmer = city;
    }
})

export default userStore