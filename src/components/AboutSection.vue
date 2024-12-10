<template>
<div class="bg-gray-50 py-16 px-6 md:px-12 lg:px-24 relative">
  <!-- Background Pattern -->
  <div
    class="absolute inset-0 bg-repeat bg-opacity-10"
    style="background-image: url('https://via.placeholder.com/200x200?text=Chicken'); opacity: 0.2;"
  ></div>

  <div class="relative z-10 flex flex-col lg:flex-row items-center lg:items-start">
    <!-- Left Section (Image/Video) -->
    <div class="w-full lg:w-1/2">
      <div class="relative">
        <img
          src="https://via.placeholder.com/500x500"
          alt="Sustainable food production"
          class="rounded-lg shadow-lg"
        />
        <!-- Optional Play Button -->
        <button
          class="absolute inset-0 m-auto w-16 h-16 bg-white text-yellow-400 rounded-full flex items-center justify-center shadow-lg hover:bg-yellow-500"
          aria-label="Play video"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-8 h-8"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Right Section (Content) -->
    <div class="w-full lg:w-1/2 mt-8 lg:mt-0 lg:pl-16">
      <h2 class="text-4xl font-bold text-gray-900 mb-6 leading-tight">
        Enable Shared Prosperity Through Sustainable Food Production
      </h2>
      <p class="text-lg text-gray-700 mb-4">
        We believe in using our products and services to help people live
        healthier, happier, and more fulfilling lives. We work to provide
        opportunities to create more wealth for everyone by producing food in a
        way that is safe, sustainable, and good for the environment.
      </p>
      <p class="text-lg text-gray-700 mb-6">
        Through the business we operate, and how we create and share the value
        we generate, we want to make sure that everyone has access to good,
        healthy food now and in the future. And we work together to do this in
        a way that benefits everyone, including generations to come.
      </p>
      <a
        href="#"
        class="inline-block bg-yellow-400 text-black font-medium px-6 py-3 rounded-lg shadow-md hover:bg-yellow-500 transition"
      >
        About Us
      </a>
    </div>
  </div>
</div>
  </template>
  