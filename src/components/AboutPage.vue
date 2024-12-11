<template>
	<div>
		<section class="relative bg-cover bg-center h-[500px]" style="background-image: url('https://img.freepik.com/free-photo/brown-chickens-farm_335224-1154.jpg?t=st=1733841771~exp=1733845371~hmac=0fd675ef346318aaf5ce928399ed9abf4554fa55ecac6a670702c8c67155ac8a&w=740');">
			<div class="absolute inset-0 bg-black bg-opacity-50"></div>
			<div class="relative z-10 text-center text-white flex flex-col justify-center items-center h-full">
				<h1 class="text-4xl md:text-6xl font-bold">Welcome to Our Poultry Farm</h1>
				<p class="mt-4 text-lg md:text-xl max-w-xl"> Your trusted source for premium, fresh, and ethically-raised poultry products. </p>
			</div>
		</section>
		<section class="py-16 bg-white">
			<div class="max-w-7xl mx-auto px-4 md:px-8">
				<h2 class="text-3xl font-bold text-center mb-8">Our Story</h2>
				<p class="text-lg text-gray-700 leading-relaxed text-center"> At our poultry farm, we take pride in delivering the freshest and healthiest poultry products directly to your table. Our journey began over 20 years ago with a commitment to quality, sustainability, and ethical farming practices. Today, we are a trusted name in the industry, known for producing organic, antibiotic-free chicken and eggs. </p>
				<p class="text-lg text-gray-700 leading-relaxed text-center mt-4"> From small family dinners to large-scale supply for restaurants, our products cater to diverse customer needs. We believe in raising our poultry with care, ensuring their health and well-being at every stage of their lives. </p>
			</div>
		</section>
		<section class="py-16">
			<div class="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
				<div class="text-center">
					<div class="text-6xl font-bold primary-blue-text-color">20+</div>
					<p class="mt-4 text-lg font-medium">Years of Poultry Farming Excellence</p>
				</div>
				<div class="text-center">
					<div class="text-6xl font-bold text-green-500">100,000+</div>
					<p class="mt-4 text-lg font-medium">Happy Customers Served Annually</p>
				</div>
				<div class="text-center">
					<div class="text-6xl font-bold primary-red-text-color">100%</div>
					<p class="mt-4 text-lg font-medium">Organic and Sustainable Practices</p>
				</div>
			</div>
		</section>
		<section class="py-16 bg-gray-100">
			<div class="max-w-7xl mx-auto px-4 md:px-8">
				<h2 class="text-3xl font-bold text-center mb-8">Our Mission & Vision</h2>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
					<div>
						<h3 class="text-xl font-semibold mb-4">Our Mission</h3>
						<p class="text-gray-700 leading-relaxed"> To raise healthy poultry in the most natural way possible and provide our customers with products that are fresh, nutritious, and ethically sourced. We aim to set the gold standard for quality and transparency in the poultry industry. </p>
					</div>
					<div>
						<h3 class="text-xl font-semibold mb-4">Our Vision</h3>
						<p class="text-gray-700 leading-relaxed"> To become a global leader in sustainable poultry farming, known for our innovative farming methods and dedication to community welfare. We envision a future where every home and business has access to safe and healthy poultry products. </p>
					</div>
				</div>
			</div>
		</section>
		<section class="py-16">
			<div class="max-w-7xl mx-auto px-4 md:px-8">
				<h2 class="text-3xl font-bold text-center mb-8">Why Choose Us</h2>
				<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div class="bg-gray-100 p-6 rounded-lg shadow-md transition transform hover:scale-105 hover:shadow-lg">
						<img src="../assets/images/organic.jpg" alt="Organic Farming" class="mx-auto h-16 mb-4 border-4 border-yellow-500">
						<h3 class="text-xl font-semibold mb-2 primary-yellow-text-color">Organic Farming</h3>
						<p class="text-gray-700">We prioritize natural and organic methods, ensuring our poultry is raised without antibiotics or synthetic additives.</p>
					</div>
					<div class="bg-gray-100 p-6 rounded-lg shadow-md transition transform hover:scale-105 hover:shadow-lg">
						<img src="../assets/images/sustainable.jpg" alt="Sustainable Practices" class="mx-auto h-16 mb-4 rounded-full border-4 border-green-500">
						<h3 class="text-xl font-semibold mb-2 primary-green-text-color">Sustainable Practices</h3>
						<p class="text-gray-700">Our farm is designed with sustainability in mind, reducing waste and conserving natural resources.</p>
					</div>
					<div class="bg-gray-100 p-6 rounded-lg shadow-md transition transform hover:scale-105 hover:shadow-lg">
						<img src="../assets/images/community-support.jpg" alt="Community Support" class="mx-auto h-16 mb-4 rounded-full border-4 border-blue-500">
						<h3 class="text-xl font-semibold mb-2 primary-blue-text-color">Community Support</h3>
						<p class="text-gray-700">We actively engage with our community, creating jobs and supporting local businesses through partnerships.</p>
					</div>
				</div>
			</div>
		</section>
		<section class="py-16 text-gray-700">
			<div class="max-w-7xl mx-auto px-4 md:px-8 text-center">
				<h2 class="text-3xl primary-blue-text-color font-bold mb-4">Experience the Difference</h2>
				<p class="text-lg leading-relaxed mb-6"> Whether you're a retailer, a restaurant, or a family looking for fresh, high-quality poultry products, we've got you covered. Explore our range of chicken, eggs, and specialty products today. </p>
				<a href="/contact" class="primary-red-btn"> Contact Us Now </a>
			</div>
		</section>
	</div>
</template>
<script>
	export default {
		name: "AboutUs",
	};
</script>
