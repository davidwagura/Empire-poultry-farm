<template>
	<footer class="bg-[#a5c6c6]">
		<div class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 p-12 leading-loose text-md">
			<div>
				<h3 class="text-2xl mb-4">Our Location</h3>
				<p> Empire Poultry Farm, <br /> Exsan Hse, Enterprise Rd <br /> P.O. BOX 20052, 00200 Nairobi, <br /> Kenya </p>
			</div>
			<div>
				<h3 class="text-2xl mb-4">Customer Support</h3>
				<p> General Enquiries: +254 722 202 163 <br /> Products: +254 703 056 056 <br /> Email: <a href="mailto:support@empirepoultry.com" class="hover:underline">support@empirepoultry.com</a>
				</p>
			</div>
			<div>
				<h3 class="text-2xl mb-4">Our Socials</h3>
				<p>Follow Empire Poultry Farm</p>
				<div class="flex space-x-4 my-2">
					<a href="#" class="icon-twitter text-2xl border rounded-full py-2 px-4">
						<i class="fa-sharp fa-solid fa-x"></i>
					</a>
					<a href="#" class="icon-facebook text-2xl border rounded-full py-2 px-3">
						<i class="fab fa-facebook"></i>
					</a>
					<a href="#" class="icon-instagram text-2xl border rounded-full py-2 px-3">
						<i class="fab fa-instagram"></i>
					</a>
					<a href="#" class="icon-youtube text-2xl border rounded-full py-2 px-3">
						<i class="fab fa-youtube"></i>
					</a>
				</div>
			</div>
		</div>
		<div class="bg-[#e3d0ab] text-center py-4 mt-8">
			<p class="text-sm">© {{ getCurrentYear() }} Empire Poultry Farm</p>
		</div>
	</footer>
</template>

<script>
export default {
  methods: {
    getCurrentYear() {
      return new Date().getFullYear();
    },
  },
};
</script>
