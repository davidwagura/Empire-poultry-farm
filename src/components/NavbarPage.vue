<template>
	<div>
		<div class="primary-blue-text-color text-sm flex flex-row justify-between items-center px-4 sm:px-6 py-2">
			<span class="text-center sm:text-left">Empire Poultry Farm</span>
			<span class="flex items-center space-x-2 mt-2 sm:mt-0">
				<img src="https://flagcdn.com/w40/ke.png" alt="Kenya" class="w-5 h-5">
				<span>Kenya</span>
			</span>
		</div>
		<nav class="shadow">
			<div class="container mx-auto flex flex-wrap justify-between items-center px-4 sm:px-6 py-4">
				<div class="flex items-center">
					<img src="@/assets/images/chicken-logo.jpg" alt="Chicken Logo" class="h-16 sm:h-24 object-contain">
				</div>
				<button class="sm:hidden flex items-center" @click="isMenuOpen = !isMenuOpen">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
					</svg>
				</button>
				<ul class="w-full sm:flex sm:space-x-8 sm:w-auto mt-4 sm:mt-0 text-lg text-center sm:text-left" :class="{ hidden: !isMenuOpen }">
					<li>
						<a href="/" class="nav-btn block sm:inline" :class="{ 'text-[#e63330] font-semibold': activeTab === 'HOME' }" @click="setActiveTab('HOME')">HOME</a>
					</li>
					<li>
						<a href="/about-us" class="nav-btn block sm:inline" :class="{ 'text-[#e63330] font-semibold': activeTab === 'ABOUT' }" @click="setActiveTab('ABOUT')">ABOUT</a>
					</li>
					<li>
						<a href="/products" class="nav-btn block sm:inline" :class="{ 'text-[#e63330] font-semibold': activeTab === 'PRODUCTS' }" @click="setActiveTab('PRODUCTS')">PRODUCTS</a>
					</li>
					<li>
						<a href="/contact" class="nav-btn block sm:inline" :class="{ 'text-[#e63330] font-semibold': activeTab === 'CONTACT' }" @click="setActiveTab('CONTACT')">CONTACT</a>
					</li>
				</ul>
				<!-- <div class="space-x-4 mt-4 hidden sm:mt-0 sm:flex sm:items-center">
					<button class="primary-yellow-btn px-4 sm:px-6 py-2 sm:py-3 rounded-full">BOOK NOW</button>
					<button class="primary-yellow-btn px-4 sm:px-6 py-2 sm:py-3 rounded-full">SHOP NOW</button>
				</div> -->
			</div>
		</nav>
		<hr class="border-1">
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const isMenuOpen = ref(false);
const activeTab = ref(null);

const setActiveTab = (tab) => {
	activeTab.value = tab;
};

onMounted(() => {
	const path = window.location.pathname;
	if (path === '/') {
		activeTab.value = 'HOME';
	} else if (path === '/about-us') {
		activeTab.value = 'ABOUT';
	} else if (path.includes('/products')) {
		activeTab.value = 'PRODUCTS';
	} else if (path.includes('chicks')) {
		activeTab.value = 'CHICKS';
	} else if (path.includes('careers')) {
		activeTab.value = 'CAREERS';
	} else if (path.includes('contact')) {
		activeTab.value = 'CONTACT';
	}
});
</script>