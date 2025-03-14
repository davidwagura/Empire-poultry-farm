<template>
    <div class="container mx-auto py-16 px-4">
      <h2 class="text-4xl font-bold text-center mb-8">Our Products</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="product in products"
          :key="product.id"
          class="bg-white rounded-lg overflow-hidden border shadow-lg hover:-translate-y-4" 
        >
          <img :src="product.image" :alt="product.name" class="w-full h-48 object-cover">
          <div class="p-4">
            <h3 class="text-xl font-semibold text-gray-800">{{ product.name }}</h3>
            <p class="text-gray-600 mt-2">{{ product.description }}</p>
            <p class="text-yellow-500 font-bold mt-4">{{ product.price }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        products: [
          {
            id: 1,
            name: "Fresh Eggs",
            description: "Farm-fresh eggs rich in flavor and nutrition, perfect for every meal.",
            price: "Ksh 300 per tray",
            image: "https://cdn.pixabay.com/photo/2021/02/08/06/02/eggs-5993764_640.jpg",
          },
          {
            id: 2,
            name: "Broiler Chicken",
            description: "Tender and juicy chicken for roasting, grilling, or frying.",
            price: "Ksh 700 per kg",
            image: "https://cdn.pixabay.com/photo/2019/04/21/23/24/chickens-4145198_640.jpg",
          },
          {
            id: 3,
            name: "Day-Old Chicks",
            description: "Healthy day-old chicks ready for rearing on your farm.",
            price: "Ksh 100 each",
            image: "https://cdn.pixabay.com/photo/2020/04/07/17/01/birds-5014150_1280.jpg",
          },
          {
            id: 4,
            name: "Organic Manure",
            description: "High-quality organic fertilizer made from chicken waste.",
            price: "Ksh 500 per bag",
            image: "https://cdn.pixabay.com/photo/2014/10/23/21/22/dung-500353_640.jpg",
          },
          {
            id: 5,
            name: "Free-Range Chicken",
            description: "Naturally raised chicken with unmatched flavor and texture.",
            price: "Ksh 800 per kg",
            image: "https://cdn.pixabay.com/photo/2017/09/26/17/47/chicken-2789493_640.jpg",
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  /* Optional: Add custom styles if needed */
  </style>
  