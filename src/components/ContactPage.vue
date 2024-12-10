<template>
	<div class="relative bg-gray-50 primary-blue-text-color">
		<div class="absolute inset-0 bg-repeat bg-opacity-10" style="background-image: url('https://via.placeholder.com/200x200?text=Chicken'); opacity: 0.2;"></div>
		<div class="relative z-10 py-1">
			<div class="container mx-auto text-center mb-12 m-2">
				<h1 class="text-4xl font-bold">Contact Us</h1>
				<p class="text-lg text-gray-600 mt-4">We are here to assist you with any inquiries. Feel free to contact us!</p>
			</div>
			<div class="container mx-auto flex flex-col md:flex-row justify-between px-4 sm:px-6">
				<div class="md:w-1/3 mb-8 md:mb-0">
					<h2 class="text-2xl font-semibold text-gray-800">Contact Details</h2>
					<ul class="mt-4 text-gray-600">
						<li class="flex items-center mb-4">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6 text-primary-600 mr-3">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3h14c.55 0 1 .45 1 1v16c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1z" />
							</svg>
							<span>Empire Poultry Farm, Nairobi, Kenya</span>
						</li>
						<li class="flex items-center mb-4">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6 text-primary-600 mr-3">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5h16M4 10h16M4 15h16M4 20h16" />
							</svg>
							<span>+254 000 000 000</span>
						</li>
						<li class="flex items-center mb-4">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6 text-primary-600 mr-3">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
							</svg>
							<span>info@empirepoultry.com</span>
						</li>
					</ul>
				</div>
				<div class="md:w-2/3">
					<h2 class="text-2xl font-semibold text-gray-800 mb-4">Send us a Message</h2>
					<form @submit.prevent="handleSubmit">
						<div class="grid grid-cols-1 gap-6 mb-6">
							<div>
								<label for="name" class="block text-sm font-medium text-gray-700">Your Name</label>
								<input type="text" id="name" v-model="formData.name" class="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500" placeholder="Enter your name" required />
							</div>
							<div>
								<label for="email" class="block text-sm font-medium text-gray-700">Your Email</label>
								<input type="email" id="email" v-model="formData.email" class="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500" placeholder="Enter your email" required />
							</div>
							<div>
								<label for="message" class="block text-sm font-medium text-gray-700">Your Message</label>
								<textarea id="message" v-model="formData.message" rows="6" class="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500" placeholder="Write your message" required></textarea>
							</div>
						</div>
						<button type="submit" class="w-full py-3 px-6 primary-red-btn text-white rounded-lg hover:bg-primary-700 transition duration-200"> Send Message </button>
					</form>
				</div>
			</div>
			<div class="container mx-auto mt-12">
				<h2 class="text-4xl font-bold text-center primary-blue-text-color mb-4">Our Location</h2>
				<iframe src="https://www.google.com/maps/embed?pb=..." width="100%" height="400" style="border:0" allowfullscreen="" loading="lazy"></iframe>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';
  
const formData = ref({
    name: '',
    email: '',
    message: '',
});
  
const handleSubmit = () => {
    console.log('Form Data:', formData.value);
    alert('Thank you for your message! We will get back to you shortly.');
    formData.value = { name: '', email: '', message: '' };
};
</script>
  
  