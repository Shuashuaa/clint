<!-- @@ https://www.youtube.com/watch?v=X6CsbhSVUEc -->

<script setup lang="ts">
import { ref, computed, onMounted, watchEffect } from 'vue';
import DarkMode from './DarkMode.vue'

// burgerIcon

const isMenuOpen = ref(false);

const menuClass = computed(() => ({
	'left-[-100%]': !isMenuOpen.value,
	'left-[0px]': isMenuOpen.value,
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
    <nav class="md:flex md:items-center md:justify-between md:p-10 transition-all ease-in-out duration-1000" :class="isScrolled">
        <div class="px-5 py-2 md:p-0 flex justify-between items-center">
            <span class="text-2xl text-white relative">
                <img class="absolute invisible dark:visible w-[50px] md:w-[100px]" src="../assets/imgs/CLINT-default.svg" alt="">
                <img class="visible dark:invisible w-[50px] md:w-[100px]" src="../assets/imgs/CLINT-black.svg" alt="">
                <!-- Clint. -->
            </span>

            <span class="pt-2 text-2xl cursor-pointer md:hidden block">
                <i @click="toggleMenu()" class="pi text-white" name="menu" 
                    :class="burgerIcon"
                ></i>
            </span>
        </div>
        
        <ul class="top-[55px] md:flex md:items-center gap-10 z-[1] md:z-auto md:static absolute 
            w-full left-0 md:w-auto md:py-0 py-4 md:pl-0
            text-white h-screen md:h-full bg-[#F7CAC9] dark:bg-[#242625] md:bg-transparent md:dark:bg-transparent
            *:md:py-0 *:text-[#242625] *:dark:text-white *:text-md *:font-Inter " 
            :class="menuClass"
        >
        
            <a @click="toggleMenu()" href="/" class="hover:text-[#244e48] duration-500 text-center">
                <li class="my-8 md:my-0 hover:bg-[#9EC0BB] md:hover:bg-transparent hover:font-bold">Home</li>
            </a>
            <a @click="toggleMenu()" href="/projects" class="hover:text-[#244e48] duration-500 text-center">
                <li class="my-6 md:my-0 hover:bg-[#9EC0BB] md:hover:bg-transparent hover:font-bold">Projects</li>
            </a>
            <a @click="toggleMenu()" href="..#about" class="hover:text-[#244e48] duration-500 text-center">
                <li class="my-6 md:my-0 hover:bg-[#9EC0BB] md:hover:bg-transparent hover:font-bold">About</li>
            </a>
            <li class="text-center my-6 md:my-0">
                <button @click="toggleMenu()" class="bg-[#93a9d1] text-white font-bold duration-500 px-6 py-2 hover:bg-[#798499] rounded">
                    Hire me
                </button>
            </li>
            
            <!-- </li> -->
            <li class="mt-12 md:mt-0 hover:text-[#244e48] duration-500 text-center">
                <DarkMode/>
            </li>
        </ul>
    </nav>
</template>