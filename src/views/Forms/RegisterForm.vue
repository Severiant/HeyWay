<template>
  <form
    novalidate="true"
    @submit.prevent="checkForm"
    class="flex flex-col items-center justify-center mx-auto w-1/4 rounded-lg px-4 py-2 h-full bg-gray-300"
  >
    <text-input
      v-model="login"
      class="mt-5 w-full"
      id="login"
      placeholder="Login"
      name="loginField"
      label="Enter login"
    ></text-input>
        <span class="text-red-500 text-xs" v-for="error in errors['login']" :key="error">{{error}}</span>
    <text-input
      v-model="password"
      class="mt-5 w-full"
      id="password"
      placeholder="Password"
      name="passwordField"
      type="password"
      label="Enter password"
    ></text-input>
     <span class="text-red-500 text-xs" v-for="error in errors['password']" :key="error">{{error}}</span>
    <text-input
      v-model="passwordConfirm"
      class="mt-5 w-full"
      id="password-repeat"
      placeholder="Repeat password"
      name="passwordField"
      type="password"
      label="Confirm password"
    ></text-input>
    <span class="text-red-500 text-xs" v-for="error in errors['passwordConfirm']" :key="error">{{error}}</span>
    <button
      class="mt-5 text-xl focus:outline-none hover:bg-purple-800 rounded-lg bg-purple-700 ml-auto text-white px-2 py-1"
      type="submit">Register</button>
  </form>
</template>

<script>
import TextInput from "../Inputs/TextInput";
export default {
  name: "RegisterForm",
  components: {
    TextInput
  },
  data: () => ({
      errors:[],
      passwordConfirm:null,
    login: null,
    password: null
  }),
  methods:{
      checkForm: function (e) {
           e.preventDefault();
          this.errors = [];
          this.errors['login'] = []
          this.errors['password'] = []
           this.errors['passwordConfirm'] = []
      if (this.login && this.password) {
        this.$emit('submit', {
          login: this.login,
          password: this.password
        })
      }

      if (!this.login) {
        this.errors['login'].push('Требуется указать login.');
      }
      if (!this.password) {
        this.errors['password'].push('Требуется указать пароль.');
      }
      if(this.passwordConfirm != this.password){
          this.errors['passwordConfirm'].push('Пароли не совпадают')
      }


    }
  }
};
</script>

<style lang="scss" scoped>
</style>