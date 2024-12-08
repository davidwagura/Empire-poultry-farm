<template>
    <nav class="bg-gray-800 text-white">
      <div class="container mx-auto flex justify-between items-center py-4">
        <div class="text-xl font-bold">Brand</div>
        <ul class="hidden md:flex space-x-4">
          <li><a href="#" class="hover:text-blue-400">Home</a></li>
          <li><a href="#" class="hover:text-blue-400">About</a></li>
          <li><a href="#" class="hover:text-blue-400">Services</a></li>
          <li><a href="#" class="hover:text-blue-400">Contact</a></li>
        </ul>
        <div class="md:hidden">
          <button @click="toggleMenu" class="focus:outline-none">Menu</button>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    methods: {
      toggleMenu() {
        // Add functionality to toggle mobile menu
      }
    }
  };
  </script>
  