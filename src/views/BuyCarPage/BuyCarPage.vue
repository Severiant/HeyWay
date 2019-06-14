<template>
    <div><buy-car-modal @close="close"  @buyCar="handleBuy"  :show="showModal"></buy-car-modal>
    <div class="flex flex-wrap">
 <photo-item  @buyCar="chooseCar(car)" v-for="car in getCars"
    :price="car.cost"
    :key="car.name"
    :src="car.src"
    :header="car.name"
    :text="car.description">
    </photo-item>
    </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import PhotoItem from '../MyPhotos/components/PhotoItem'
import BuyCarModal from './BuyCarModal'
    export default {
        name:'BuyCarPage',
        data(){
            return{
                showModal:false,
                car:null
            }
        },
        components:{
            PhotoItem,
            BuyCarModal
        },
        methods:{
            ...mapActions(['buyCar']),
            chooseCar(car){
                this.car = car
                this.showModal = true
            },
            close(){
                this.showModal = false
            },
           async handleBuy({period, date}){
               this.close()
            //    console.log(car);
              const result = await this.buyCar({car:this.car,period})
            }
        },
        computed:{
            ...mapGetters(['getCars'])
        }
    }
</script>

<style lang="scss" scoped>

</style>