<template>
    <div class=" max-w-xs bg-white rounded overflow-hidden shadow-lg m-3 p-3">
  <img class="w-full" :src="src" alt="image">
  <div class="px-6 py-4 mb-8">
    <div class="font-bold text-xl mb-2">{{header}}</div>
    <p class="text-gray-700 text-base">
    {{text}}
    </p>
  </div>
  <div class="px-6 py-4 mb-2">
    <span v-for="tag in tags" :key="tag" @click="$emit('chooseTag', tag)" class="inline-block bg-purple-200 hover:bg-purple-500 hover:text-white hover:cursor-pointer rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#{{tag}}</span>
  </div>

  <div class="mb-3">
      <span class="rounded-lg shadow-xl bg-red-600 text-white p-3">Price:{{price}} per day</span>
      <button class="mt-auto text-xl shadow-md focus:outline-none hover:bg-purple-800 rounded-b-lg bg-purple-700 text-white px-2 py-1 ml-auto text-center w-full "  @click="$emit('buyCar')">Rent this car</button>
  </div>

</div>
</template>

<script>
    export default {
        props:{
            header:{
                type:String,
                default:'Simple header text'
            },
            text:{
                type:String,
                default:'Simple main text'
            },
            price:{
                type:Number,
                default:0
            },
            tags:{
                type:Array,
                default:()=>([])
            },
            src:{
                type:String,
                default: 'https://tailwindcss.com/img/card-top.jpg'
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>