<template>
<div class="flex flex-col">
    <label class="text-gray-700 mb-1" :for="name">{{label}}</label>
    <textarea :rows="rows" :value="value" style="text-indent:0.5rem" @input="$emit('input', $event.target.value)"  class="py-1 focus:shadow-outline shadow-md  rounded-lg text-xl" :type="type" :name="name" :placeholder="placeholder" :id="id"></textarea>
</div>
</template>

<script>
    export default {
        name:'TextareaInput',
        model:{
            prop:'value',
            event:'input'
        },
        props: {
            value:{
                type:String,
                default:''
            },
            rows:{
                type:String,
                default:'10'
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