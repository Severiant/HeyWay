<template>
  <div class="container mx-auto h-full w-full mt-2">
    <div
      v-show="show"
      class="fixed inset-0 w-full h-screen flex items-center justify-center bg-semi"
    >
      <div class="w-full max-w-2xl bg-white shadow-lg rounded-lg">
        <div
          @click="close"
          class="mt-3 rounded-full ml-auto mr-2 w-8 hover:cursor-pointer h-8 flex items-center justify-center bg-gray-300 text-2xl text-red-500"
        >&times;</div>
        <div class="flex flex-row items-center justify-between w-2/3 mx-auto mb-3">
          <button
            @click="handleBtnClick(500)"
            class="text-xl shadow-md focus:outline-none hover:bg-purple-800 rounded-lg bg-purple-700 text-white px-2 py-1"
          >Send 500</button>
          <button
            @click="handleBtnClick(1000)"
            class="text-xl shadow-md focus:outline-none hover:bg-purple-800 rounded-lg bg-purple-700 text-white px-2 py-1"
          >Send 1000</button>
          <button
            @click="handleBtnClick(10000)"
            class="text-xl shadow-md focus:outline-none hover:bg-purple-800 rounded-lg bg-purple-700 text-white px-2 py-1"
          >Send 10000</button>
        </div>
      </div>
    </div>
    <Header @addmoney="handleAddMoney"/>
    <div class="bg-gray-100 mx-auto shadow-md mt-1">
      <router-view/>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import Header from "./components/Main/TheHeader";
export default {
  data() {
    return {
      show: false
    };
  },
  methods: {
    ...mapMutations(["addMoney"]),
    handleAddMoney() {
      this.show = true;
    },
    handleBtnClick(money) {
      this.addMoney(money);
      this.show = false;
      this.$nextTick(() => {
        alert(`Success add ${money}$ to your bill`);
      });
    },
    close() {
      this.show = false;
    }
  },
  components: {
    Header
  }
};
</script>

<style>
</style>
