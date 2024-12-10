<template>
	<div class="relative overflow-hidden min-h-screen flex items-center justify-center">
		<transition-group name="fade" tag="div" class="absolute inset-0 z-0">
			<img v-for="(image, index) in images" :key="index" :src="require(`@/assets/images/${image}`)" alt="Farm Image" class="absolute inset-0 w-full h-full object-cover" v-show="currentImageIndex === index" />
		</transition-group>
		<div class="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
			<div class="max-w-md p-6 bg-white bg-opacity-60 rounded-lg shadow-lg text-center">
				<h2 class="text-3xl font-bold mb-4">Farm to Farm</h2>
				<p class="mb-6"> The chicks we breed to the birds you rear; trace the process from day one. </p>
				<button @click="onViewProducts" class="primary-blue-btn rounded border"> View Product Range </button>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const images = [
    'chick.jpg',
    // 'roster1.jpg',
	'hen.jpg',
	'chicken2.jpg',
	'chicken.jpg',
	'roster.jpg',


];

const currentImageIndex = ref(0);

const changeImage = () => {
    currentImageIndex.value = (currentImageIndex.value + 1) % images.length;
};

onMounted(() => {
    setInterval(changeImage, 3000);
});

const onViewProducts = () => {
    router.push('/products');
};
</script>

<style scoped>
	.fade-enter-active, .fade-leave-active {
		transition: opacity 1s;
	}
	.fade-enter, .fade-leave-to {
		opacity: 0;
	}
	.overlay {
		background-color: rgba(0, 0, 0, 0.5);
	}
	.container {
		position: relative;
		z-index: 1;
		padding: 1rem;
	}
	@media (min-width: 640px) {
		.container {
			padding: 2rem;
		}
	}
	@media (min-width: 1024px) {
		.container {
			padding: 3rem;
		}
	}
</style>