<template>
  <div
    class="h-auto shadow-lg rounded-lg flex flex-row p-2 rounded-t-lg bg-white-100 align-middle items-center"
  >
    <div @click="$router.push('/')" class="font-lobster text-4xl text-gray-700 font-sans hover:cursor-pointer">Hey Way</div>
    <span class="ml-3">+38 067 120 7318</span>

    <ul class="mr-2 ml-auto flex flex-row items-center" v-if="!isAuthorized">
       <li class="ml-4 text-purple-500">
        <router-link to="usloviya">Conditions</router-link>
      </li>
      <li class="ml-4 text-purple-500">
        <router-link to="vacancies">Vacancies</router-link>
      </li>
      <li class="ml-4 text-purple-500">
        <router-link to="conditionsofuse">Conditions of Use</router-link>
      </li>
      <li class="ml-4 text-purple-500">
        <router-link to="contactus">Contact Us</router-link>
      </li>

      <li class="ml-4 text-purple-500">
        <router-link to="register">Register</router-link>
      </li>
      <button
        @click="$router.push('login')"
        class="ml-4 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
      >Login</button>
    </ul>
    <div class="mr-2 ml-auto" v-else>
 <span class="hover:cursor-pointer px-4 py-2  text-orange-400 bg-yellow-400 rounded-lg shadow-md" @click="$emit('addmoney')">More money</span>
       <span class="ml-4 text-purple-500">
        <router-link to="usloviya">Conditions</router-link>
      </span>
      <span class="ml-4 text-purple-500">
        <router-link to="vacancies">Vacancies</router-link>
      </span>
      <span class="ml-4 text-purple-500">
        <router-link to="conditionsofuse">Conditions of Use</router-link>
      </span>
      <span class="ml-4 text-purple-500">
        <router-link to="rentcar">Rent car</router-link>
      </span>
      <span class="ml-4 mr-2 text-purple-500">
        <router-link to="contactus">Contact Us |</router-link>
      </span>
      <span class="ml-4 mr-2 ml-auto text-gray-500 text-xl">{{loggedInUser.login}}</span>

      <span class="ml-4 text-green-500">{{getMoney}}$</span>
      <button
        @click="logout"
        class="ml-4 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
      >Logout</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Header",
  computed: {
    ...mapGetters(["isAuthorized", "loggedInUser", "getMoney"])
  },
  methods: {
    ...mapActions(["logout"])
  }
};
</script>