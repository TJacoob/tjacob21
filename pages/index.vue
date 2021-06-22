<template>
	<div class="container">
		<div class="h-96 flex justify-center items-center">
			<h1 class="font-serif text-8xl text-center">tjacob</h1>
		</div>
		<div class="flex">
			<div class="w-1/2 text-right">
				<div class="text-primary font-serif text-4xl mb-4">Title 1</div>
				<nuxt-img src="images/self_1.webp" format="webp" class="ml-auto mb-4"></nuxt-img>
				<div class="text-base text-gray leading-snug">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi asperiores aut delectus deserunt dolorem eveniet fugit incidunt molestias nam odio odit omnis pariatur quas, quisquam quos suscipit tempora totam ut!</div>
			</div>
			<div class="w-0.5 bg-black mx-4"></div>
			<div class="w-1/2 text-left mt-5">
				<div class="text-secondary font-serif text-2xl mb-2">Title 2</div>
				<div class="relative w-2/3 mr-auto h-60">
					<nuxt-img src="images/self_1.webp" format="webp" class="absolute bottom-0 w-full h-full"></nuxt-img>
					<div class="absolute bottom-0 w-full bg-black bg-opacity-50 rounded-tr-2xl mr-4">
						<div class="text-white text-xs leading-tight p-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam autem magni quasi sed voluptatem. Aliquid incidunt nostrum nulla officiis quam tempora, tempore. Dicta dolore doloribus reiciendis. Ab animi vel voluptates.</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {}
</script>
