<template>
<div class="py-4">
    <div class="mt-32">
    <login-form class="my-auto"  @submit="handleSubmit"></login-form>
    </div>

    </div>
</template>

<script>
import LoginForm from "../Forms/LoginForm.vue";
    export default {
        name:'LoginPage',
        components:{
            LoginForm
        },
        methods:{
           async handleSubmit(user){
           const result =  await this.$store.dispatch('login', user)
              if(result == 'done') this.$router.push('/')
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>