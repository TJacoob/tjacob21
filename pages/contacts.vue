<template>
	<div>
		<div class="w-full bg-primary lg:bg-transparent lg:container pt-12 pb-12 lg:mb-3 lg:pb-0 lg:pt-8">
			<h1 class="text-white container lg:px-0 lg:text-primary font-semibold text-3xl pb-2 border-b-2 border-primary">Get In Touch</h1>
		</div>
		<div class="container">
			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 -mt-12 lg:mt-8 mb-4">
				<a href="https://www.linkedin.com/in/tjacoob/" target="_blank" class="flex bg-white text-primary border-primary h-24 px-5 py-3 rounded-lg bg-gradient-to-bl group hover:from-primary hover:to-primary-lighter hover:text-white transition duration-200 shadow-md">
					<fa-icon :icon="{prefix:'fab',iconName:'linkedin-in'}" size="2x" class="my-auto mr-4" />
					<span class="font-regular text-lg my-auto">/in/tjacoob/</span>
				</a>
				<a href="https://github.com/TJacoob" target="_blank" class="flex bg-white text-primary border-primary h-24 px-5 py-3 rounded-lg bg-gradient-to-bl group hover:from-primary hover:to-primary-lighter hover:text-white transition duration-200 shadow-md">
					<fa-icon :icon="{prefix:'fab',iconName:'github'}" size="2x" class="my-auto mr-4" />
					<span class="font-regular text-lg my-auto">@tjacoob</span>
				</a>
				<a href="https://twitter.com/tjacoob" target="_blank" class="flex bg-white text-primary border-primary h-24 px-5 py-3 rounded-lg bg-gradient-to-bl group hover:from-primary hover:to-primary-lighter hover:text-white transition duration-200 shadow-md">
					<fa-icon :icon="{prefix:'fab',iconName:'twitter'}" size="2x" class="my-auto mr-4" />
					<span class="font-regular text-lg my-auto">@tjacoob</span>
				</a>
				<a href="mailto:tjacobmartins@gmail.com" target="_blank" class="flex bg-white text-primary border-primary h-24 px-5 py-3 rounded-lg bg-gradient-to-bl group hover:from-primary hover:to-primary-lighter hover:text-white transition duration-200 shadow-md">
					<fa-icon :icon="{prefix:'far',iconName:'envelope'}" size="2x" class="my-auto mr-4" />
					<span class="font-regular text-lg my-auto">tjacobmartins@gmail.com</span>
				</a>
			</div>
			<span class="mb-3">If you enjoyed my work and want to know me a little better, or perhaps, make a work proposal, you can use any of the options above.</span>
		</div>
	</div>
</template>

<script>
export default {
name: "contacts"
}
</script>

<style scoped>

</style>
