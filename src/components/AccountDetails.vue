<template>
    <div class="p-4 bg-purple-600 text-white rounded-md">
      <h2 class="font-bold text-lg">Account or Meter Details</h2>
      <div class="mt-2">
        <label>Search By:</label>
        <div>
          <input type="radio" id="account" name="search" checked />
          <label for="account">Account Number</label>
          <input type="radio" id="meter" name="search" />
          <label for="meter">Meter Number</label>
        </div>
      </div>
      <div class="mt-2">
        <label>Account Number:</label>
        <!-- <span class="font-bold ml-2">{{ accountData.accountReference }}</span> -->
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['accountData'],
  };
  </script>
  