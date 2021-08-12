<template>
	<div class="">
		<nuxt-link :to="{ name: 'projects'}" class="block w-full bg-primary lg:bg-transparent lg:container pt-12 pb-16 lg:mb-6 lg:pb-0 group">
			<div class="text-white container lg:px-0 lg:text-gray-500 text-md font-semibold pb-2 border-b border-white lg:border-gray-500 uppercase">
				<fa-icon :icon="{prefix:'fas',iconName:'chevron-left'}" class="mr-2" />
				<div class="inline-block group-hover:transform group-hover:translate-x-1 transition duration-200">All Projects</div>
			</div>
		</nuxt-link>
		<article class="container">
			<div class="flex flex-col lg:flex-row lg:-mr-4">
				<!-- Slider -->
				<div class="lg:w-3/5 h-48 sm:h-64 lg:h-96 pattern-diagonal flex overflow-hidden shadow-lg rounded-t-lg lg:rounded-lg relative z-20 lg:z-10 -mt-12 lg:my-8 ">
					<!-- Controls -->
					<div @click="slideLeft" v-show="moreThanOneSlide" class="absolute z-20 text-primary-lighter w-10 h-full flex inset-y-0 left-0 group cursor-pointer lg:ml-2">
						<fa-icon id="slideLeft"  :icon="{prefix:'fas',iconName:'chevron-left'}" size="2x"
										   class="mx-auto my-auto transition duration-200 group-hover:transform group-hover:-translate-x-2 opacity-25"
						/>
					</div>
					<div @click="slideRight" v-show="moreThanOneSlide" class="absolute z-20 text-primary w-10 h-full flex inset-y-0 right-0 group cursor-pointer lg:mr-6">
						<fa-icon id="slideRight" :icon="{prefix:'fas',iconName:'chevron-right'}" size="2x"
										   class="mx-auto my-auto transition duration-200 group-hover:transform group-hover:translate-x-2"
						/>
					</div>
					<!-- Slides -->
					<div id="slide-1" v-if="project.image_1 !== undefined" class="absolute inset-0 w-full h-full text-white flex items-center justify-center text-5xl transition-all ease-in-out duration-1000 transform translate-x-0 slide">
						<img :src="require(`~/static/images/${project.image_1}`)" :alt="project.title" class="h-full w-auto mx-auto"/>
					</div>
					<div id="slide-2" v-if="project.image_2 !== undefined" class="absolute inset-0 w-full h-full text-white flex items-center justify-center text-5xl transition-all ease-in-out duration-1000 transform translate-x-full slide">
						<img :src="require(`~/static/images/${project.image_2}`)" :alt="project.title" class="h-full w-auto mx-auto"/>
					</div>
					<div id="slide-3" v-if="project.image_3 !== undefined" class="absolute inset-0 w-full h-full text-white flex items-center justify-center text-5xl transition-all ease-in-out duration-1000 transform translate-x-full slide">
						<img :src="require(`~/static/images/${project.image_3}`)" :alt="project.title" class="h-full w-auto mx-auto"/>
					</div>
					<div id="slide-4" v-if="project.image_4 !== undefined" class="absolute inset-0 w-full h-full text-white flex items-center justify-center text-5xl transition-all ease-in-out duration-1000 transform translate-x-full slide">
						<img :src="require(`~/static/images/${project.image_4}`)" :alt="project.title" class="h-full w-auto mx-auto"/>
					</div>
				</div>
				<div class="lg:w-2/5 bg-primary-lighter text-white rounded-b-md lg:rounded-md py-8 px-6 lg:px-8 lg:-ml-4 z-10 lg:z-20 shadow-md flex flex-col -mt-4 lg:mt-0">
					<h1 class="text-3xl font-semibold mb-5 pb-3 border-b-2 border-white ">
						{{ project.title }}
						<span class="font-normal text-gray-300 text-xl">({{ project.year }})</span>
					</h1>
					<div class="mb-1">
						<div v-for="tech in techsArray(project)"
							 class="rounded-lg cursor-default px-3 py-1 text-white bg-primary transition duration-200 inline-block text-sm mr-2 mb-2 whitespace-no-wrap"
						>
							{{tech}}
						</div>
					</div>
					<div class="mb-5">
						{{project.description}}
					</div>
					<div class="flex mt-auto">
						<a v-if="project.github!==undefined" :href="project.github" target="_blank" rel="nofollow noopener noreferrer" class="bg-primary text-white w-1/2 inline-flex items-center rounded-md p-3 group mr-2">
							<fa-icon :icon="{prefix:'fab',iconName:'github'}" size="lg" />
							<div class="ml-3 mr-1 font-semibold group-hover:transform group-hover:-translate-x-1 transition duration-200">Github</div>
						</a>
						<a v-if="project.website!==undefined" :href="project.website" target="_blank" rel="nofollow noopener noreferrer" class="bg-primary text-white w-1/2 items-center inline-flex rounded-md p-3 group mr-2">
							<fa-icon :icon="{prefix:'fas',iconName:'external-link-alt'}" size="md" />
							<div class="ml-3 mr-1 font-semibold group-hover:transform group-hover:-translate-x-1 transition duration-200">Website</div>
						</a>
					</div>
				</div>
			</div>
			<div class="flex text-gray-800 mt-6 nuxt-content">
				<nuxt-content :document="project" />
			</div>
		</article>
	</div>
</template>

<script>
export default {
	name: "slug",
	data() {
		return {
			activeSlide: 1,
		}
	},
	head() {
		return {
			meta: [
				{ hid:'description', name: 'description', content: this.project.description },
				{ hid:'og:description', property: 'og:description', content: this.project.description },
				{ hid:'twitter:description', name: 'twitter:description', content: this.project.description },
				{ hid:'og:title', property: 'og:title', content: this.project.title + ' - tjacob.dev' },
				{ hid:'twitter:title', property: 'twitter:title', content: this.project.title + ' - tjacob.dev' },
				{ hid:'og:image', property: 'og:image', itemprop: "image", content: this.project.image_1!==undefined?'/images/'+this.project.image_1:'/thumb.jpg' },
				{ hid:'og:type', property: 'og:type', content: "website" },
				{ hid:'og:url', property: 'og:url', content: this.currentRoute },
				{ hid:'twitter:site', name: 'twitter:site', content: this.currentRoute },
			]
		}
	},
	async asyncData({$content, params}) {
		const project = await $content('projects', params.slug).fetch()
		let slides = 0;
		for (var i = 1; i <= 4; i++) {
			project['image_'+i]!==undefined ? slides += 1 :'';
		}
		return {project, slides}
	},
	methods: {
		techsArray(project) {
			return project.techs.split(',');
		},
		slideLeft(){
			let activeSlide = document.querySelector('#slide-'+this.activeSlide);
			if( this.activeSlide > 1 ){
				activeSlide.classList.remove('translate-x-0');
				activeSlide.classList.add('translate-x-full');
				let previousSlide = document.querySelector('#slide-'+(this.activeSlide-1));
				previousSlide.classList.remove('-translate-x-full');
				previousSlide.classList.add('translate-x-0');
				this.activeSlide = this.activeSlide-1;
				if ( this.activeSlide === 1 )
					document.querySelector('#slideLeft').classList.add('opacity-25');
				if ( this.activeSlide !== this.slides )
					document.querySelector('#slideRight').classList.remove('opacity-25');
			}
		},
		slideRight(){
			let activeSlide = document.querySelector('#slide-'+this.activeSlide);
			if( this.activeSlide < this.slides ){
				activeSlide.classList.remove('translate-x-0');
				activeSlide.classList.add('-translate-x-full');
				let nextSlide = document.querySelector('#slide-'+(this.activeSlide+1));
				nextSlide.classList.remove('translate-x-full');
				nextSlide.classList.add('translate-x-0');
				this.activeSlide = this.activeSlide+1;
				if ( this.activeSlide === this.slides )
					document.querySelector('#slideRight').classList.add('opacity-25');
				if ( this.activeSlide !== 1 )
					document.querySelector('#slideLeft').classList.remove('opacity-25');

			}
		}
	},
	computed:{
		moreThanOneSlide(){
			return this.slides > 1;
		},
	},
}
</script>

<style scoped>

</style>
