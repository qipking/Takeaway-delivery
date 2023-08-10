import { observable, action } from 'mobx'

const userStore = observable({
    CityCustmer: "城市",
    changeCityCustmer(city){
        this.CityCustmer = city;
    }
})

export default userStore