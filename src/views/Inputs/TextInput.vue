<template>
<div class="flex flex-col">
    <label class="text-gray-700 mb-1" :for="name">{{label}}</label>
    <input :value="value" @input="$emit('input', $event.target.value)" style="text-indent:0.5rem" class="py-1 focus:shadow-outline shadow-md  rounded-lg text-xl" :type="type" :name="name" :placeholder="placeholder" :id="id"/>
</div>
</template>

<script>
    export default {
        name:'TextInput',
        model:{
            prop:'value',
            event:'input'
        },
        props: {
            value:{
                type:String,
                default:''
            },
            label:{
                type:String,
                default:''
            },
             type:{
                type:String,
                default:'text'
            },
            placeholder:{
                type:String,
                default:''
            },
            name: {
                type: String,
                default: ''
            },
            id:{
                type:String,
                default:''
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>