<template>
	<div class="flex flex-col h-full bg-gradient-to-tr from-primary to-primary-lighter">
		<div class="w-full text-left px-10 py-4 md:py-20 my-auto md:my-0">
			<div class="w-32 h-32 mb-3 sm:hidden md:block">
				<NuxtLink :to="{name: 'index'}" @click.native="toggleNavbar">
					<img src="/images/profile.webp" class="rounded-full border-4 border-white" alt="TJacob" />
				</NuxtLink>
			</div>
			<span class="block sm:hidden md:block text-white text-3xl font-semibold leading-tight">Tomás Jacob</span>
			<span class="block sm:hidden md:block text-white text-xl leading-tight pb-2">Frontend Developer</span>
			<nav class="my-4 py-4 sm:pt-0 sm:mt-0 md:pt-4 border-t sm:border-t-0 md:border-t border-b">
				<NuxtLink
					:to="{ name: 'aboutme' }"
					@click.native="toggleNavbar"
					class="block text-lg md:text-xl py-2 text-white hover:bg-primary-lighter transition duration-200 -mx-4 px-4 rounded-lg">
					About Me
				</NuxtLink>
				<NuxtLink
					:to="{ name: 'work' }"
					@click.native="toggleNavbar"
					class="block text-lg md:text-xl py-2 text-white hover:bg-primary-lighter transition duration-200 -mx-4 px-4 rounded-lg">
					Previous Work
				</NuxtLink>
				<NuxtLink
					:to="{ name: 'projects' }"
					@click.native="toggleNavbar"
					class="block text-lg md:text-xl py-2 text-white  hover:bg-primary-lighter transition duration-200 -mx-4 px-4 rounded-lg">
					Projects
				</NuxtLink>
				<NuxtLink
					:to="{ name: 'skills' }"
					@click.native="toggleNavbar"
					class="block text-lg md:text-xl py-2 text-white  hover:bg-primary-lighter transition duration-200 -mx-4 px-4 rounded-lg">
					Skills
				</NuxtLink>
				<NuxtLink
					:to="{ name: 'education' }"
					@click.native="toggleNavbar"
					class="block text-lg md:text-xl py-2 text-white  hover:bg-primary-lighter transition duration-200 -mx-4 px-4 rounded-lg">
					Education
				</NuxtLink>
				<NuxtLink
					:to="{ name: 'contacts' }"
					@click.native="toggleNavbar"
					class="block text-lg md:text-xl py-2 text-white  hover:bg-primary-lighter transition duration-200 -mx-4 px-4 rounded-lg">
					Get In Touch
				</NuxtLink>
			</nav>
			<div class="flex py-2">
				<a href="https://www.linkedin.com/in/tjacoob/" target="_blank" rel="nofollow noopener noreferrer" class="mr-3 text-white">
					<fa-icon :icon="{prefix:'fab',iconName:'linkedin-in'}" size="2x" />
				</a>
				<a href="https://github.com/TJacoob" target="_blank" rel="nofollow noopener noreferrer" class="mx-3 text-white">
					<fa-icon :icon="{prefix:'fab',iconName:'github'}" size="2x" />
				</a>
				<a href="https://twitter.com/tjacoob" target="_blank" rel="nofollow noopener noreferrer" class="mx-3 text-white">
					<fa-icon :icon="{prefix:'fab',iconName:'twitter'}" size="2x" />
				</a>
				<a href="mailto:tjacobmartins@gmail.com" target="_blank" rel="nofollow noopener noreferrer" class="mx-3 text-white">
					<fa-icon :icon="{prefix:'far',iconName:'envelope'}" size="2x" />
				</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Sidebar",
	methods:{
		toggleNavbar(){
			this.$emit('close-navbar');
		},
	}
}
</script>

<style scoped>

</style>
