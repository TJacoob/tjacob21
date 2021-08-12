<template>
	<div>
		<div class="flex flex-wrap overflow-hidden">
			<div class="h-screen w-full lg:w-1/6 overflow-hidden fixed top-0 left-0 lg:relative lg:block z-0">
				<Sidebar @close-navbar="toggleNavbar()"/>
			</div>
			<div class="h-screen w-full lg:w-5/6 overflow-x-hidden overflow-y-auto bg-secondary relative z-10 transition duration-300 pb-8 md:pb-12"
				 :class="{'origin-center transform -rotate-6 lg:rotate-0 translate-x-64 lg:translate-x-0 scale-90 lg:scale-100 ml-8 lg:ml-0 rounded-xl shadow-xl lg:rounded-none lg:shadow-none':showNavbarMobile}"
				 v-on="showNavbarMobile ? { click: () => toggleNavbar() } : {}"
			>
				<div class="lg:hidden absolute top-0 left-0 mx-5 my-4 text-white lg:text-gray-500 " v-on="!showNavbarMobile ? { click: () => toggleNavbar() } : {}">
					<fa-icon :icon="{prefix:'fas',iconName:'bars'}" size="lg" />
				</div>
				<div :class="{'pointer-events-none md:pointer-events-auto':showNavbarMobile}">
					<Nuxt />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Sidebar from "@/components/Sidebar";

export default {
	components: {Sidebar},
	data() {
		return {
			showNavbarMobile: true,
		}
	},
	methods:{
		toggleNavbar(){
			this.showNavbarMobile = !this.showNavbarMobile;
		}
	}
}
</script>
