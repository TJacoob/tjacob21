<template>
	<div class="h-screen">
		<div class="w-full bg-primary lg:bg-transparent lg:container pt-12 pb-12 lg:mb-6 lg:pb-0 lg:pt-8 lg:hidden">
			<h1 class="text-white lg:text-primary font-semibold text-3xl pb-2 border-b-2 border-primary"></h1>
		</div>
		<div class="container h-full">
			<div class="lg:flex pt-12 pb-12 lg:mb-3 lg:pb-0 lg:pt-8 h-full -mt-20">
				<div class="w-full lg:w-3/5 flex flex-col lg:mr-16 my-auto">
					<div class="bg-white rounded-lg p-5 shadow-md mb-6">
						<h2 class="text-2xl text-primary font-semibold mb-3">Hello!</h2>
						<div class="nuxt-content">
							<nuxt-content :document="intro" />
						</div>
					</div>
					<h2 class="text-2xl text-primary font-semibold mb-2">Main Skills</h2>
					<div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-2">
						<div v-for="skill of skills" :key="skill.slug"
							 class="flex flex-row bg-white text-primary border-primary h-24 px-5 py-3 rounded-lg bg-gradient-to-bl group hover:from-primary hover:to-primary-lighter hover:text-white transition duration-200 shadow-md">
							<div class="mr-auto my-auto sm:mt-0 lg:mb-auto">
								<span class="font-semibold text-5xl leading-tight">{{ skill.rating }}</span>
								<span class="text-gray-500 group-hover:text-gray-300 text-md">/10</span>
							</div>
							<span class="ml-auto font-regular text-lg self-center mt-auto">{{ skill.title }}</span>
						</div>
					</div>
					<NuxtLink :to="{ name: 'skills'}" class="ml-auto group mb-6 lg:mb-0">
						<div class="text-primary text-sm uppercase font-semibold">
							<div class="inline-block group-hover:transform group-hover:-translate-x-1 transition duration-200">See All</div>
							<fa-icon :icon="{prefix:'fas',iconName:'chevron-right'}" class="ml-1" />
						</div>
					</NuxtLink>
				</div>
				<div class="w-full lg:w-2/5 my-auto">
					<div class="rounded-lg pt-5 pb-6 px-6 shadow-md bg-gradient-to-tr from-primary to-primary-lighter mb-6">
						<h2 class="text-2xl text-white font-semibold mb-4">Latest Projects</h2>
						<div class="grid grid-cols-1 gap-4">
							<nuxt-link v-for="project of projects" :to="{ name: 'projects-slug', params: { slug: project.slug }}" :key="project.slug"
									   class="flex overflow-hidden bg-white rounded-lg shadow-md hover:shadow-lg relative h-24 bg-cover bg-center group transition duration-200 text-primary"
									   :style="{backgroundImage:'url('+require(`~/static/images/${project.image_1}`)+')'}"
							>
								<div class="none lg:block w-full h-full absolute overflow-hidden bg-white bg-opacity-75 group-hover:bg-opacity-25 z-10 transition duration-200"></div>
								<div class="my-auto flex flex-col p-4 z-20 relative">
									<span class="text-2xl font-semibold group-hover:text-shadow-md">{{ project.title }}</span>
								</div>
								<fa-icon :icon="{prefix:'fas',iconName:'chevron-right'}" size="lg" class="relative z-20 ml-auto my-auto mr-4 transform group-hover:translate-x-1 transition duration-200" />
							</nuxt-link>
							<NuxtLink :to="{ name: 'projects'}" class="ml-auto group">
								<div class="text-white text-sm uppercase font-semibold">
									<div class="inline-block group-hover:transform group-hover:-translate-x-1 transition duration-200">See All</div>
									<fa-icon :icon="{prefix:'fas',iconName:'chevron-right'}" class="ml-1" />
								</div>
							</NuxtLink>
						</div>
					</div>
					<a href="/files/CV_2020.pdf" target="_blank" class="flex rounded-lg py-5 px-6 shadow-md bg-gradient-to-tr from-primary to-primary-lighter text-white hover:bg-white hover:from-white hover:to-white hover:text-primary transition duration-200 mb-8 lg:mb-0">
						<fa-icon :icon="{prefix:'far',iconName:'file-alt'}" size="4x" class="my-auto mr-5" />
						<div>
							<h2 class="text-2xl font-semibold leading-tight mb-1">Curriculum</h2>
							<div class="text-md leading-snug">If you prefer a short resume, you can download my Curriculum Vitae here.</div>
						</div>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	async asyncData({ $content, params }) {
		const intro = await $content('generic', 'intro').fetch();

		const projects = await $content('projects', params.slug)
			.only(['title', 'image_1', 'slug'])
			.sortBy('year', 'desc')
			.sortBy('level', 'asc')
			.limit(2)
			.fetch()

		const skills = await $content('skills', params.slug)
			.sortBy('rating', 'desc')
			.limit(3)
			.fetch()

		return { intro, projects, skills }
	},

}
</script>

<style>

</style>
