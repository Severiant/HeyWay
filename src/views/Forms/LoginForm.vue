<template>
  <form
    novalidate="true"
    @submit.prevent="checkForm"
    class="flex flex-col items-center justify-center mx-auto w-1/4 rounded-lg px-4 py-2 my-auto bg-gray-300"
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
    <button
      class="mt-4 text-xl shadow-md focus:outline-none hover:bg-purple-800 rounded-lg bg-purple-700 ml-auto text-white px-2 py-1"
      type="submit">Войти</button>
  </form>
</template>

<script>
import TextInput from "../Inputs/TextInput";

export default {
  name: "LoginForm",
  components: {
    TextInput,
  },
  data: () => ({
    errors:[],
    login: null,
    password: null,
    textarea:''
  }),
  methods:{
      checkForm: function (e) {
           e.preventDefault();
          this.errors = [];
          this.errors['login'] = []
          this.errors['password'] = []
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
        this.errors['password'].push('Требуется указать password.');
      }


    }
  }
};
</script>

<style lang="scss" scoped>
</style>