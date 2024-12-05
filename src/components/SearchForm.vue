<template>
    <div class="bg-purple-900 text-white py-6 px-4">
      <h2 class="text-xl font-bold mb-4">Account or Meter Details</h2>
      <form @submit.prevent="search">
        <div class="mb-4">
          <label>
            <input type="radio" v-model="searchBy" value="account" />
            Account Number
          </label>
          <label class="ml-4">
            <input type="radio" v-model="searchBy" value="meter" />
            Meter Number
          </label>
        </div>
        <input
          type="text"
          v-model="query"
          class="w-full p-2 rounded border"
          placeholder="Enter Account or Meter Number"
        />
        <div class="mt-4 flex justify-end">
          <button type="submit" class="bg-yellow-500 px-4 py-2 rounded-md mr-2">
            Search
          </button>
          <button @click="clear" type="button" class="bg-gray-500 px-4 py-2 rounded-md">
            Clear
          </button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        searchBy: "account",
        query: "",
      };
    },
    methods: {
      search() {
        console.log("Searching for:", this.query);
      },
      clear() {
        this.query = "";
      },
    },
  };
  </script>
  