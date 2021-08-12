<template>
	<div>
		<div class="w-full bg-primary lg:bg-transparent lg:container pt-12 pb-12 lg:mb-3 lg:pb-0 lg:pt-8">
			<h1 class="text-white container lg:px-0 lg:text-primary font-semibold text-3xl pb-2 border-b-2 border-primary">Skills</h1>
		</div>
		<div class="container">
			<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6 -mt-12 lg:mt-8 mb-4">
				<div v-for="skill of topSkills" :key="skill.slug"
					 class="flex flex-col lg:flex-row bg-white text-primary border-primary h-24 px-5 py-3 rounded-lg bg-gradient-to-bl group hover:from-primary hover:to-primary-lighter hover:text-white transition duration-200 shadow-md cursor-default">
					<div class="mr-auto mb-auto">
						<span class="font-semibold text-4xl lg:text-5xl leading-tight">{{ skill.rating }}</span>
						<span class="text-gray-500 group-hover:text-gray-300 text-md">/10</span>
					</div>
					<span class="ml-auto font-regular text-lg self-center mt-auto">{{ skill.title }}</span>
				</div>
			</div>
			<div class="mb-4">
				<div class="">My main skills revolve around frontend development. I have experience with modern frameworks, with a preference for VueJS. I complement this with a more light experience on fullstack frameworks and javascript-based backend libraries.</div>
			</div>
			<div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 lg:gap-4 mb-4">
				<div v-for="skill of otherSkills" :key="skill.slug"
					 class="flex flex-col lg:flex-row bg-white text-primary border-primary h-16 px-5 py-3 rounded-lg bg-gradient-to-bl group hover:from-primary hover:to-primary-lighter hover:text-white transition duration-200 shadow-md cursor-default">
					<span class="m-auto font-regular text-xl">{{ skill.title }}</span>
				</div>
			</div>
		</div>
	</div>
</template>

<!-- Alternative Skill Card
<div class="bg-white border-primary border-2 rounded-full w-24 h-24 flex justify-center items-center z-10 mx-auto">
	<span class="text-primary font-semibold text-4xl">{{ skill.rating }}</span>
	<span class="text-gray-600 text-md">/10</span>
</div>
<div class="bg-white border-primary border-b-2 text-center p-4 px-12 pt-8 -mt-6 rounded-lg z-0 ">
	<span class="text-primary font-semibold text-lg">{{ skill.title }}</span>
</div>
-->

<script>
export default {
	name: "skills",
	async asyncData({ $content, params }) {
		const skills = await $content('skills', params.slug)
			//.only(['title', 'description', 'img', 'slug', 'author'])
			.sortBy('rating', 'desc')
			.fetch()

		const topSkills = skills.slice(0,6)
		const otherSkills = skills.slice(6,skills.length)

		return { topSkills, otherSkills }
	}
}
</script>

<style scoped>

</style>
