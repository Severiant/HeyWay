<template>
    <div class="flex flex-row w-full mx-auto items-center mt-5">
        <span class="ml-3 bg-purple-400 rounded-lg text-white p-2 flex flex-wrap items-center justify-center"
        v-for="(tag,i) in tags" :key="i" >
           <span class="text-xl">#{{tag}}</span>
           <button @click="removeTag(tag)" type="button" class="text-md ml-3 rounded-full w-6 h-6 flex items-center justify-center bg-purple-500">&times;</button>
        </span>
        <input
        class="focus:outline-none text-xl rounded-lg p-2 ml-3 "
        @keydown.backspace="handleBackspace"
        @keydown.enter.prevent="addTag"
        v-model="input"
        type="text"
        placeholder="Add tag...">
    </div>
</template>

<script>
    export default {
        name:'TagInput',
        data(){
            return{
                input:''
            }
        },
        model:{
            prop:'tags',
            event:'update'
        },
        props:{
            tags:{
                type:Array,
                required:true
            }
        },
        computed:{
            newTag(){
                return this.input.trim();
            }
        },
        methods:{
            removeTag(tag){
                this.$emit('update', this.tags.filter(t => t != tag))
            },
            addTag(){
                if(this.newTag.length === 0 || this.tags.includes(this.newTag)){
                    return
                }
                this.$emit('update', [...this.tags, this.newTag])
                this.clearInput()
            },
            clearInput(){
                this.input = ''
            },
            handleBackspace(){
                if(this.newTag.length === 0){
                    this.$emit('update', this.tags.slice(0, -1))
                }
            }
        }
    }
</script>

<style scoped>

</style>