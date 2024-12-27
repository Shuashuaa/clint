<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'

</script>

<template>
	<div style="overflow-x: hidden;" class="bg-[#F7CAC9] dark:bg-[#242625] transition-all ease-in-out duration-1000">
		<Navbar class="fixed w-full top-0 z-20"/> <!--sticky no w-full -->
		<RouterView/>
	</div>
	
</template>

<style>
body{
	color: var(--font-white);
	background-color: var(--bg-black);
}
</style>