<template>
  <div v-show="show" class="fixed inset-0 w-full h-screen flex items-center justify-center bg-semi">
    <div class="w-full max-w-2xl bg-white shadow-lg rounded-lg">
      <div
        @click="$emit('close')"
        class="mt-3 rounded-full ml-auto mr-2 w-8 hover:cursor-pointer h-8 flex items-center justify-center bg-gray-300 text-2xl text-red-500"
      >&times;</div>
      <div class="p-4 flex flex-row">
        <label for="daysCount">Enter Period</label>
        <input
          class="ml-2 border shadow-md p-2"
          @keypress="isNumber($event)"
          type="number"
          v-model.number="period"
          min="0"
          name="days"
          id="daysCount"
        >
        <span class="ml-2">Enter date</span>
        <datepicker class="ml-2 border shadow-md p-2" v-model="date" name="uniquename"></datepicker>
      </div>
      <div class="p-4 flex flex-row">
        <div class="ml-4" v-for="bonus in bonuses" :key="bonus">
          <label :for="bonus">{{bonus}}</label>
          <input class="ml-3 focus:outline-none shadow-md w-4 h-4 rounded-lg text-xl" type="checkbox" :checked="false" :name="bonus" :id="bonus">
        </div>
      </div>

      <button
        class="mt-4 text-xl shadow-md focus:outline-none hover:bg-purple-800 rounded-b-lg bg-purple-700 text-white px-2 py-1 ml-auto text-center w-full"
        @click="$emit('buyCar', {period, date})"
      >Rent car</button>
    </div>
  </div>
</template>

<script>
import Datepicker from "vuejs-datepicker";
export default {
  data() {
    return {
      bonuses:['Add GPS', 'Upgrade Engine', 'Super Transmission'],
      date: new Date(Date.now()),
      period: 1
    };
  },
  props: {
    show: {
      type: Boolean,
      default: true
    }
  },
  components: {
    Datepicker
  },
  methods: {
    isNumber: function(evt) {
      evt = evt ? evt : window.event;
      var charCode = evt.which ? evt.which : evt.keyCode;
      if (
        charCode > 31 &&
        (charCode < 48 || charCode > 57) &&
        charCode !== 46
      ) {
        evt.preventDefault();
      } else {
        return true;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>