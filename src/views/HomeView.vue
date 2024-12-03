<script setup lang="ts">
import LandingView from './LandingView.vue';
import CategoryView from './InfoView.vue';
import GalleryView from './GalleryView.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
	<LandingView 
	landingNameTitle="Jaderhin Clint Austria Lucero" 
	bgNameLeft="제이더린 클린트"
	bgNameRight="오스트리아 루세로"/>

	<CategoryView info="Hi, I'm Jaderhin Clint Lucero. I'm a recent Bachelor of Science in Information Technology graduate with a passion for programming. 
	I’ve worked as an I.T. technician and am currently a virtual assistant. Aside from my tech skills, I'm also an artist, dancer, and crocheter. 
	I enjoy expressing myself through painting, digital art, and creating intricate crochet pieces."
	/>

	<GalleryView :isCategoriesOn="false" :limit="8" :showSeeMore="true"/>

	<!-- <Footer/> -->
</template>
