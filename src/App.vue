<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'

</script>

<template>
	<div class="bg-[#F7CAC9] dark:bg-[#2C2C2C]">
		<Navbar class="sticky top-0 z-20"/>
		<RouterView/>
	</div>
	
</template>

<style>
body{
	color: var(--font-white);
	background-color: var(--bg-black);
}
</style>