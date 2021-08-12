<template>
	<div>
		<div class="w-full bg-primary lg:bg-transparent lg:container pt-12 pb-12 lg:mb-3 lg:pb-0 lg:pt-8">
			<h1 class="text-white container lg:px-0 lg:text-primary font-semibold text-3xl pb-2 border-b-2 border-primary">Previous Work</h1>
		</div>
		<div class="container">
			<div class="grid grid-cols-1 gap-24 lg:gap-10 mt-8 lg:mt-8 mb-4">
				<div v-for="work of works" :key="work.slug" class="flex flex-col lg:flex-row bg-white rounded-3xl shadow-md lg:ml-12">
					<img class="inline w-32 h-32 rounded-full border-2 border-primary-lighter bg-white mx-auto sm:ml-0 lg:mx-auto -mt-20 lg:-ml-16 lg:my-auto" :src="require(`~/static/images/${work.logo}`)"  />
					<div class="px-5 pt-3 pb-8 lg:pt-5 lg:pb-6">
						<h2 class="inline text-primary font-semibold text-xl">
							{{ work.position }}
							<a :href="work.website" target="_blank" class="font-light hover:text-primary-lighter transition duration-200">@ {{ work.company }}</a>
						</h2>
						<span class="block lg:inline lg:ml-1 text-gray-600 mb-3 lg:mb-0">( {{ work.started }} - {{ work.ended }} )</span>
						<nuxt-content :document="work" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "work",
	async asyncData({ $content, params }) {
		const works = await $content('work', params.slug)
			//.only(['title', 'description', 'img', 'slug', 'author'])
			.sortBy('started', 'desc')
			.fetch()

		return { works }
	}
}
</script>

<style scoped>

</style>
