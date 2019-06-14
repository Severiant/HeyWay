<template>
  <register-form @submit="handleSubmit"></register-form>
</template>

<script>
import RegisterForm from "../Forms/RegisterForm";
    export default {
        name:'RegisterPage',
        components:{
            RegisterForm
        },
        methods:{
            async handleSubmit(user){
        const result =  await this.$store.dispatch('register', user)
              if(result == 'done') {
                  this.$router.push('/')
            }
            }
            }
    }
</script>

<style lang="scss" scoped>
</style>