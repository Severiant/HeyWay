<template>
  <div class="flex flex-col justify-start mx-auto">
    <photo-item class="mx-auto" @chooseTag="(tag)=>$emit('chooseTag',tag)" v-for="photo in photos"
    :key="photo.id"
    :tags="photo.tags"
    :src="photo.src"
    :header="photo.header"
    :text="photo.text">
    </photo-item>
  </div>
</template>

<script>
import PhotoItem from './PhotoItem'
export default {
  name: "PhotoList",
  components:{
      PhotoItem
  },
    props: {
        photos: {
            type: Array,
            default: ()=>([])
        },
    },
};
</script>

<style lang="scss" scoped>
</style>