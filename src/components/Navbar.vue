<!-- @@ https://www.youtube.com/watch?v=X6CsbhSVUEc -->

<script setup lang="ts">
import { ref, computed, onMounted, watchEffect } from 'vue';

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

// isDarkMode

const darkMode = ref(document.body.classList.contains('dark'));

const toggleDarkMode = () => {
    darkMode.value = !darkMode.value;
};

watchEffect(() => {
    document.body.classList[darkMode.value ? 'add' : 'remove']('dark');
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
        
        <ul class="top-[55px] md:flex md:items-center gap-5 z-[1] md:z-auto md:static absolute 
        w-full left-0 md:w-auto md:py-0 py-4 md:pl-0
        transition-all ease-in-out duration-500 text-white h-screen md:h-full
        *:py-6 *:md:py-0" :class="menuClass">
        
            <li class="hover:bg-[#9EC0BB] text-center">
                <a href="#" class="font-sans text-xl hover:text-[#244e48] duration-500">Home</a>
            </li>
            <li class="hover:bg-[#9EC0BB] text-center">
                <a href="#" class="font-sans text-xl hover:text-[#244e48] duration-500">Projects</a>
            </li>
            <li class="hover:bg-[#9EC0BB] text-center">
                <a href="#" class="font-sans text-xl hover:text-[#244e48] duration-500">About</a>
            </li>
            <li class="text-center">
                <button class="font-sans bg-[#238374] text-white font-bold duration-500 px-6 py-2 hover:bg-[#9EC0BB] rounded">
                    Hire me
                </button>
            </li>
            <li class="text-center">
                <label>
                    <i @click="toggleDarkMode" :class="[darkMode ? 'pi pi-sun' : 'pi pi-moon']"></i>
                </label>
            </li>
        </ul>
    </nav>
</template>