<template>
  <form
    novalidate="true"
    @submit.prevent="checkForm"
    class="flex flex-col items-center justify-center mx-auto w-1/4 rounded-lg px-4 py-2 my-auto bg-gray-300"
  >
    <span class="text-2xl text-gray-700 mt-3">Contact Us. Fill all fields</span>
    <text-input
      v-model="name"
      class="mt-5 w-full"
      id="name"
      placeholder="Enter your name"
      name="nameField"
      label="Name"
    ></text-input>
    <span class="text-red-500 text-xs" v-for="error in errors['name']" :key="error">{{error}}</span>
    <text-input
      v-model="email"
      class="mt-5 w-full"
      id="email"
      placeholder="Enter your email"
      name="emailField"
      label="E-mail"
    ></text-input>
    <span class="text-red-500 text-xs" v-for="error in errors['email']" :key="error">{{error}}</span>
    <textarea-input
      v-model="message"
      rows="10"
      class="mt-5 w-full"
      id="message"
      placeholder="Enter your message"
      name="messageField"
      label="Message"
    ></textarea-input>
    <span class="text-red-500 text-xs" v-for="error in errors['message']" :key="error">{{error}}</span>
    <button
      class="mt-4 text-xl shadow-md focus:outline-none hover:bg-purple-800 rounded-lg bg-purple-700 ml-auto text-white px-2 py-1"
      type="submit"
    >Send message</button>
  </form>
</template>

<script>
import TextInput from "../Inputs/TextInput";
import TextareaInput from "../Inputs/TextareaInput";
export default {
  name: "ContactUsForm",
  components: {
    TextareaInput,
    TextInput
  },
  data() {
    return {
      errors: [],
      name: "",
      email: "",
      message: ""
    };
  },
  methods: {
    checkForm: function(e) {
      e.preventDefault();
      this.errors = [];
      this.errors["name"] = [];
      this.errors["email"] = [];
      this.errors["message"] = [];
      if (this.name && this.email && this.message) {
        this.$emit("submit", {
          name: this.name,
          email: this.email,
          message: this.message
        });
      }

      if (!this.name) {
        this.errors["name"].push("Enter your name");
      }
      if (!this.email) {
        this.errors["email"].push("Enter your email");
      }
      if (!this.message) {
        this.errors["message"].push("Enter your message");
      }
    }
  }
};
</script>