<template>
<div class="flex flex-wrap">
<div v-for="(item,i) in list" :key="i" class="max-w-md rounded overflow-hidden shadow-lg m-3">
  <img class="w-full" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div class="px-6 py-4">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
  </div>
</div>
</div>
</template>

<script>
import SortableList from '../components/SortableList.vue'
import SortableItem from '../components/SortableItem.vue'
import SortableHandle from '../components/SortableHandle.vue'
    export default {
        data(){
            return{
                list:[
                    {text:'hello'},
                    {text:'world'},
                    {text:'ohhhhh'},
                    {text:'ohhhhh'},
                    {text:'ohhhhh'}
                ]
            }
        },
        components:{
            SortableList,
            SortableItem,
            SortableHandle
        }
    }
</script>

<style lang="scss" scoped>

</style>