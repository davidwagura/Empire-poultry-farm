<template>
	<div class="bg-gray-50 py-16 px-6 md:px-12 lg:px-24 relative">
		<div class="absolute inset-0 bg-repeat bg-opacity-10" style="background-image: url('https://via.placeholder.com/200x200?text=Chicken'); opacity: 0.2;"></div>
		<div class="relative z-10 flex flex-col lg:flex-row items-center lg:items-start">
			<div class="w-full lg:w-1/2">
				<div class="relative">
					<img src="../assets/images/chicken2.jpg" alt="Empire Poultry Farm" class="rounded-lg shadow-lg" />
					<button class="absolute inset-0 m-auto w-16 h-16 bg-white text-yellow-400 rounded-full flex items-center justify-center shadow-lg hover:bg-yellow-500" aria-label="Play video">
						<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
							<path d="M8 5v14l11-7z" />
						</svg>
					</button>
				</div>
			</div>
			<div class="w-full lg:w-1/2 mt-8 lg:mt-0 lg:pl-16">
				<h2 class="text-4xl font-bold text-gray-900 mb-6 leading-tight"> Welcome to Empire Poultry Farm </h2>
				<p class="text-lg text-gray-700 mb-4"> At Empire Poultry Farm, we are committed to delivering premium-quality poultry products raised in a sustainable and ethical environment. Our mission is to provide fresh and healthy poultry while prioritizing the welfare of our animals and the environment. </p>
				<p class="text-lg text-gray-700 mb-6"> From farm to table, we ensure that every step of our production process meets the highest standards. Join us in supporting a vision of healthy, sustainable living with farm-fresh products that you can trust. </p>
				<a href="/about-us" class="primary-yellow-btn"> Learn More About Us </a>
			</div>
		</div>
	</div>
</template>