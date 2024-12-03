<!-- @@ https://www.youtube.com/watch?v=X6CsbhSVUEc -->

<script setup lang="ts">
import { ref, computed, onMounted, watchEffect } from 'vue';
import DarkMode from './DarkMode.vue'

// burgerIcon

const isMenuOpen = ref(false);

const menuClass = computed(() => ({
	'left-[-100%]': !isMenuOpen.value,
	'left-[0px] bg-[#F7CAC9] dark:bg-[#242625]': isMenuOpen.value,
}));

const burgerIcon = computed(() => (isMenuOpen.value ? 'pi pi-times' : 'pi pi-bars'));

const toggleMenu = () => {
  	isMenuOpen.value = !isMenuOpen.value;
};

// isScrolled

const isScrollChanged = ref(false);

const isScrolled = computed(() => ({
	'transition-all bg-[#F7CAC9] dark:bg-[#242625]': !isScrollChanged.value,
	'transition-all backdrop-filter backdrop-blur-lg bg-opacity-10': isScrollChanged.value,
}));

onMounted(() => {
	window.addEventListener('scroll', () => {
		if (window.scrollY > 0 && !isScrollChanged.value) {
			isScrollChanged.value = true;
		} else if (window.scrollY <= 0 && isScrollChanged.value) {
			isScrollChanged.value = false;
		}
	});
});

</script>

<template>
    <!-- by default canvas is `display:block` so here if the canvas reach `md:` or more will flex the nav children components -->
    <nav class="md:flex md:items-center md:justify-between md:p-10" :class="isScrolled">
        <div class="px-5 py-2 md:p-0 flex justify-between items-center">
            <span class="text-2xl text-white">
                <img class="inline w-[50px] md:w-[100px]" src="../assets/imgs/clint.png" alt="">
                <!-- Clint. -->
            </span>

            <span class="pt-2 text-2xl cursor-pointer md:hidden block">
                <i class="pi text-white" :class="burgerIcon" name="menu" @click="toggleMenu()"></i>
            </span>
        </div>
        
        <ul class="top-[55px] md:flex md:items-center gap-10 z-[1] md:z-auto md:static absolute 
        w-full left-0 md:w-auto md:py-0 py-4 md:pl-0
        transition-all ease-in-out duration-500 text-white h-screen md:h-full
        *:py-6 *:md:py-0 *:text-[#242625] *:dark:text-white *:font-lato" :class="menuClass">
        
            <li class="hover:bg-[#9EC0BB] text-center">
                <a href="/" class="text-xl hover:text-[#244e48] duration-500">Home</a>
            </li>
            <li class="hover:bg-[#9EC0BB] text-center">
                <a href="/projects" class="text-xl hover:text-[#244e48] duration-500">Projects</a>
            </li>
            <li class="hover:bg-[#9EC0BB] text-center">
                <a href="#" class="text-xl hover:text-[#244e48] duration-500">About</a>
            </li>
            <li class="text-center">
                <button class="bg-[#93a9d1] text-white font-bold duration-500 px-6 py-2 hover:bg-[#798499] rounded">
                    Hire me
                </button>
            </li>
            <li class="text-center">
                <DarkMode/>
            </li>
        </ul>
    </nav>
</template>