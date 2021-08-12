<template>
	<div>
		<div class="w-full bg-primary lg:bg-transparent lg:container pt-12 pb-12 lg:mb-3 lg:pb-0 lg:pt-8">
			<h1 class="text-white container lg:px-0 lg:text-primary font-semibold text-3xl pb-2 border-b-2 border-primary">Projects</h1>
		</div>
		<div class="container">
			<div class="grid grid-cols-1 lg:grid-cols-3 gap-8 -mt-12 lg:mt-5 mb-5">
				<nuxt-link v-for="project of projects" :to="{ name: 'projects-slug', params: { slug: project.slug }}" :key="project.slug"
						   class="flex overflow-hidden bg-white rounded-lg shadow-md hover:shadow-lg relative h-64 lg:h-64 bg-cover bg-center group"
						   :style="{backgroundImage:'url('+require(`~/static/images/${project.image_1}`)+')'}"
				>
					<div class="w-full h-32 absolute inset-x-0 bottom-0 overflow-hidden bg-gradient-to-t from-black to-transparent opacity-50 group-hover:opacity-0 z-10 transition duration-200"></div>
					<div class="none lg:block w-full h-full absolute overflow-hidden bg-gradient-to-t from-primary to-primary-lighter opacity-0 group-hover:opacity-80 z-10 transition duration-200"></div>
					<div class="flex flex-col p-4 mt-auto w-full relative z-20 transform lg:translate-y-full group-hover:translate-y-0 transition duration-200">
						<div class="text-white text-right -mt-16">
							<p class="text-2xl mb-2 lg:mb-4 transform group-hover:translate-y-2 transition duration-200 font-semibold">
								{{project.title}}
							</p>
						</div>
						<div class="w-full flex flex-row-reverse flex-wrap -mb-2">
							<div v-for="tech in techsArray(project)"
								 class="rounded-lg px-3 py-1 text-white bg-white bg-opacity-25 inline text-sm ml-2 mb-2 whitespace-no-wrap"
							>
								{{tech}}
							</div>
						</div>
					</div>
				</nuxt-link>
			</div>
			<p class="leading-snug">Over the years I have developed some free-lancing projects as well as extra-curricular and personal projects. I choose to highlight some of them alongside other done during my position as a Junior Web Developer at Softway.</p>
		</div>
	</div>
</template>

<!-- Alternative Card Design
<nuxt-link v-for="project of projects" :to="{ name: 'projects-slug', params: { slug: project.slug }}" :key="project.slug"
		   class="flex flex-col overflow-hidden bg-white rounded-lg shadow-md hover:shadow-lg transition duration-200 group">
<div class="w-full h-56 overflow-hidden bg-cover bg-center bg-primary flex py-2 px-3 lg:px-5" :style="{backgroundImage:'url('+require(`~/static/images/${project.image_1}`)+')'}">
	<div class="w-full mt-auto flex flex-wrap -mb-2">
		<div v-for="tech in techsArray(project)"
			 class="rounded-lg px-3 py-1 text-white bg-black bg-opacity-25 hover:bg-opacity-75 transition duration-200  inline text-sm mr-2 mb-2 whitespace-no-wrap"
		>
			{{tech}}
		</div>
	</div>
</div>
<div class="pt-4 px-4 lg:px-5">
	<p class="text-xl font-semibold mb-1">
		{{project.title}}
		<span class="font-light text-gray-600">({{project.year}})</span>
	</p>
	<p class="leading-snug">{{project.description}}</p>
</div>
<div class="pb-4 px-4 lg:px-5 mt-auto ml-auto">
	<div class="text-primary text-sm uppercase font-semibold mt-4">
		<div class="inline-block group-hover:transform group-hover:-translate-x-1 transition duration-200">Read Details</div>
		<font-awesome-icon :icon="{prefix:'fas',iconName:'chevron-right'}" class="ml-1" />
	</div>
</div>
</nuxt-link>
-->


<script>
export default {
	name: "projects",
	async asyncData({ $content, params }) {
		const projects = await $content('projects', params.slug)
			//.only(['title', 'description', 'img', 'slug', 'author'])
			.sortBy('level')
			.fetch()

		return { projects }
	},
	methods: {
		techsArray(project) {
			return project.techs.split(',');
		}
	},
}
</script>

<style scoped>

</style>
