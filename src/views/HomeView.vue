<script setup lang="ts">
import { ref } from 'vue';

import LandingView from './LandingView.vue';
import InfoView from './InfoView.vue';
import GalleryView from './GalleryView.vue';

const links = ref([
    { id: 1, icon: 'pi pi-facebook', bottomPercentage: 'bottom-[17rem]', name: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg'},
    { id: 2, icon: 'pi pi-twitter', bottomPercentage: 'bottom-[14rem]', name: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg'},
    { id: 3, icon: 'pi pi-instagram', bottomPercentage: 'bottom-[11rem]', name: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg'},
    { id: 4, icon: 'pi pi-linkedin', bottomPercentage: 'bottom-[8rem]', name: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg'},
]);
</script>

<template>
	<LandingView 
		id="Home"
		landingNameTitle="Jaderhin Clint Austria Lucero" 
		bgNameLeft="제이더린 클린트"
		bgNameRight="오스트리아 루세로"
		:links="links"
	/>

	<InfoView info="Hi 👋🏼, I'm Jaderhin Clint Lucero. I'm a Bachelor of Science in Information Technology graduate with a passion for programming. I’ve worked as an I.T. technician and am currently a virtual assistant. 
		Aside from my tech skills, I'm also an artist, dancer, and crocheter. I enjoy expressing myself through drawing, painting, digital art, and creating intricate crochet pieces."
	/>

	<GalleryView :isCategoriesOn="false" :limit="8" :showSeeMore="true" 
	/>
</template>
